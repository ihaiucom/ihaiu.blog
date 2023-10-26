

<iframe src="//player.bilibili.com/player.html?aid=917736745&bvid=BV1Du4y1Y7Fh&cid=1312002139&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="720"> </iframe>


### 1. 地图组成元素：

- Terrain 地形
  - Ground 地面
  - Cliffs 悬崖
  - Water 水
- Doodads 可破坏物、装饰物
- Unit 单位
- Item 物品



### 2. 地面实现

#### 2.1 地形数据

```c#

using System;
using UnityEngine;

namespace Zeng.war3.runtimes.datas
{
    /// <summary>
    /// 地形数据
    /// </summary>
    public class MapData : ScriptableObject
    {
        // 地图大小
        public Vector2Int mapSize; // int columns = this.mapSize.x; int rows = this.mapSize.y;
        // 地图中心点偏移
        public Vector2 centerOffset;
        // 瓦片 实例数量
        public int instanceCount; // instanceCount = （columns - 1） * （rows -1）

        // 地形--地面数据
        [SerializeField]
        public GroupData groupData;
    }

    /// <summary>
    /// 地形--地面数据
    /// </summary>
    [Serializable]
    public class GroupData 
    {

        // 地面 对应瓦片 高度数据
        public float[] cornerHeights; // cornerHeights = new float[columns * rows];
        // 地面 对应瓦片 贴图索引
        public float[] cornerTextures; // new float[instanceCount * 4]; 
        // 地面 对应瓦片 贴图对应uv索引
        public float[] cornerVariations; // new float[instanceCount * 4]; 
        // 地面 贴图列表
        public Texture[] tilesetTextures;
    }

}

```

![image-20231027002705717](01_war3_unity_map.assets/image-20231027002705717.png)

#### 2.2 地形Mesh

整个地面就是由 columns * rows 的方块组成。我们先生成一个方块的mesh。

```c#

        private Mesh GenMesh()
        {
            Mesh mesh = new Mesh();
            Vector3[] vertices = new Vector3[4];

            vertices[0] = new Vector3(0, 0, 0); // 左下
            vertices[1] = new Vector3(1, 0, 0); // 右下
            vertices[2] = new Vector3(0, 0, 1);  // 左上
            vertices[3] = new Vector3(1, 0, 1); // 右上

            mesh.vertices = vertices;

            //=======================================

            int[] tri = new int[6];

            //  Lower left triangle.
            tri[0] = 2;
            tri[1] = 1;
            tri[2] = 0;

            //  Upper right triangle.   
            tri[3] = 2;
            tri[4] = 3;
            tri[5] = 1;

            mesh.triangles = tri;


            return mesh;
        }
```

![image-20231027003854266](01_war3_unity_map.assets/image-20231027003854266.png)



#### 2.3 绘制所有瓦片

有3种思路，我们选择第3种:

1. 每个瓦片创建一个GameObject。 （这种创建的垃圾对象会很多，开销比较大。）
2. 把所有的瓦片创建一整个mesh。
3. 通过GpuInstance的方式 批量绘制。





```c#
// 设置材质球 参数
instanceMaterial.SetVector("u_size_offset", new Vector4(mapData.mapSize.x, mapData.mapSize.y, mapData.centerOffset.x, mapData.centerOffset.y));


// 批量绘制Mesh
Graphics.DrawMeshInstancedProcedural(mesh, subMeshIndex, instanceMaterial, new Bounds(Vector3.zero, new Vector3(100.0f, 100.0f, 100.0f)), mapData.instanceCount);
```

```glsl
Shader "Zeng/war3/MapGround"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        u_size_offset("u_size_offset", Vector) = (10, 10, 0, 0)
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }
        LOD 100

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            // make fog work
            #pragma multi_compile_fog

            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                UNITY_FOG_COORDS(1)
                float4 vertex : SV_POSITION;
            };

            sampler2D _MainTex;
            float4 _MainTex_ST;
            
            uniform float4 u_size_offset;

            
            v2f vert (appdata v, uint instanceID : SV_InstanceID)
            {
                v2f o;

                float2 a_position = v.vertex.xz;
                float vertIndex = v.vertex.y;

                float2 u_size = u_size_offset.xy;
                float2 u_offset = u_size_offset.zw;
                
                float columns = u_size.x - 1;
                float rows = u_size.y - 1;

                
                float2 corner = float2(fmod(instanceID, columns), floor(instanceID / columns)); // 当前实例对象 在第corner.x 列，corner.y 行
                float2 base = corner + a_position;

                float3 position = float3(base, 0.0);
                position = float3(-position.y, position.z, position.x); // 坐标系转换

                
                o.vertex = UnityObjectToClipPos(float4(position, 1.0));
                UNITY_TRANSFER_FOG(o, o.vertex);
                return o;
            }


            fixed4 frag(v2f i) : SV_Target
            {
                fixed4 col = tex2D(_MainTex, i.uv);

                

                // apply fog
                UNITY_APPLY_FOG(i.fogCoord, col);
                return col;
            }
            ENDCG
        }
    }
}

```

![image-20231027012411290](01_war3_unity_map.assets/image-20231027012411290.png)

![image-20231027012338564](01_war3_unity_map.assets/image-20231027012338564.png)





我们把中心点偏移加上

![image-20231027013112574](01_war3_unity_map.assets/image-20231027013112574.png)

![image-20231027013158679](01_war3_unity_map.assets/image-20231027013158679.png)





##### 知识点，GPU实例话多次绘制同一网格：

[Graphics - Unity 脚本 API](https://docs.unity.cn/cn/2019.4/ScriptReference/Graphics.html)

![image-20231027004633297](01_war3_unity_map.assets/image-20231027004633297.png)

[Graphics-DrawMeshInstanced - Unity 脚本 API](https://docs.unity.cn/cn/2019.4/ScriptReference/Graphics.DrawMeshInstanced.html)

![image-20231027004756162](01_war3_unity_map.assets/image-20231027004756162.png)

[Graphics-DrawMeshInstancedIndirect - Unity 脚本 API](https://docs.unity.cn/cn/2019.4/ScriptReference/Graphics.DrawMeshInstancedIndirect.html)

![image-20231027005056175](01_war3_unity_map.assets/image-20231027005056175.png)

![image-20231027005140781](01_war3_unity_map.assets/image-20231027005140781.png)

[Graphics-DrawMeshInstancedProcedural - Unity 脚本 API](https://docs.unity.cn/cn/2019.4/ScriptReference/Graphics.DrawMeshInstancedProcedural.html)

![image-20231027005340158](01_war3_unity_map.assets/image-20231027005340158.png)

```

```



#### 2.4 绘制瓦片高度





### 相关资料：

[魔兽争霸3- Terrain , 自动拼接地形渲染方式_魔兽3 地形-CSDN博客](https://blog.csdn.net/blizmax6/article/details/6736783)

