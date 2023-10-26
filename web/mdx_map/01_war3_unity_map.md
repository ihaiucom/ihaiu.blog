

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

首先我们要有每个瓦片的高度数据。

![image-20231027014657746](01_war3_unity_map.assets/image-20231027014657746.png)

需要把数据传给shader。有2种方式：

1. 通过 ComputeBuffer 
2. 通过 Texture

我们先看 ComputeBuffer 的实现方式

##### ComputeBuffer 直接传Buffer方式



![image-20231027020743874](01_war3_unity_map.assets/image-20231027020743874.png)

![image-20231027021100675](01_war3_unity_map.assets/image-20231027021100675.png)

![image-20231027020428599](01_war3_unity_map.assets/image-20231027020428599.png)

![image-20231027021125544](01_war3_unity_map.assets/image-20231027021125544.png)

![image-20231027021207736](01_war3_unity_map.assets/image-20231027021207736.png)

如果直接用instanceID，看一下效果

r![image-20231027021313090](01_war3_unity_map.assets/image-20231027021313090.png)

![image-20231027021404875](01_war3_unity_map.assets/image-20231027021404875.png)

表现的结果是，因为每行x多1列，导致整体索引错位。



##### Texture 贴图方式

首先我们需要把数据转成贴图

```C#

        private Texture2D groundHeightMap()
        {
            Texture2D tex = new Texture2D(mapData.mapSize[0], mapData.mapSize[1], TextureFormat.RFloat, false);
            tex.filterMode = FilterMode.Bilinear;
            tex.wrapMode = TextureWrapMode.Clamp;

            float[] heights = mapData.cornerHeights;
          

            tex.SetPixelData<float>(heights, 0);
            tex.Apply();


            string path = $"{saveDirPath}/ground_heightMap.asset";
            AssetDatabase.CreateAsset(tex, path);
            AssetDatabase.Refresh();
            tex = AssetDatabase.LoadAssetAtPath<Texture2D>(path);
            return tex;
        }
```

![image-20231027022352329](01_war3_unity_map.assets/image-20231027022352329.png)



因为是float的，而且有负数。我们归一化看一下。

```c#

        private Texture2D groundHeightMap()
        {
            Texture2D tex = new Texture2D(mapData.mapSize[0], mapData.mapSize[1], TextureFormat.RFloat, false);
            tex.filterMode = FilterMode.Bilinear;
            tex.wrapMode = TextureWrapMode.Clamp;

            float[] heights = mapData.cornerHeights;
            float[] bytes = new float[heights.Length];

            float min = float.MaxValue;
            float max = float.MinValue;
            for (int i = 0; i < bytes.Length; i++)
            {
                float v = heights[i];
                min = Mathf.Min(min, v);
                max = Mathf.Max(max, v);
            }

            Debug.Log($"groundHeightMap min={min}, max={max}");

            //min = -1;
            //max = 7;
            for (int i = 0; i < bytes.Length; i++)
            {
                float v = heights[i];
                v = (v - min) / (max - min) ;

                bytes[i] = v;
            }



            tex.SetPixelData<float>(bytes, 0);
            tex.Apply();


            string path = $"{saveDirPath}/ground_heightMap.asset";
            AssetDatabase.CreateAsset(tex, path);
            AssetDatabase.Refresh();
            tex = AssetDatabase.LoadAssetAtPath<Texture2D>(path);
            return tex;
        }
```

![image-20231027022832922](01_war3_unity_map.assets/image-20231027022832922.png)



修改我们的shader, 并且把贴图赋值给材质

![image-20231027024124231](01_war3_unity_map.assets/image-20231027024124231.png)

```C#
// 高度贴图
instanceMaterial.SetTexture("u_heightMap", mapData.groupData.cornerHeightTexture);
```



![image-20231027024252114](01_war3_unity_map.assets/image-20231027024252114.png)



和ComputeBuffer相比，贴图自动帮我们做了差值。

![image-20231027024358685](01_war3_unity_map.assets/image-20231027024358685.png)

#### 2.5 地面贴图

##### 知识点:

[魔兽争霸3- Terrain , 自动拼接地形渲染方式_魔兽3 地形-CSDN博客](https://blog.csdn.net/blizmax6/article/details/6736783)

```c#
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[Serializable]
public class MapIcon
{
    public Image image;
    public bool isShow = false;
    public int spIndex = 0;
    public Vector3 pos;
    public Vector2 key;
    [SerializeField]
    public List<MapNode> parentNodes = new List<MapNode>();
}

[Serializable]
public class MapNode
{
    public Vector2 key;
    public Vector2 pos;
    public bool isShow = false;
    [SerializeField]
    public List<Vector2> iconKeys = new List<Vector2>();
    public void Init(int x,int y)
    {
        iconKeys.Add(new Vector2(x, y));
        iconKeys.Add(new Vector2(x + 1, y));
        iconKeys.Add(new Vector2(x, y + 1));
        iconKeys.Add(new Vector2(x + 1, y + 1));
    }
}

public class TileMap : MonoBehaviour
{
    public Sprite[] sps;
    [SerializeField]
    public int imageSize = 32;//64*64组成一个小块地图\
    public Canvas canvas;

    [SerializeField]
    public Dictionary<Vector2, MapNode> mapNodeDic;
    [SerializeField]
    public Dictionary<Vector2, MapIcon> mapIconDic;
    [SerializeField]
    public List<Vector2> listIconKeys;
    [SerializeField]
    public List<Vector2> listNodeKeys;
    bool isNeedRefresh = false;

    [SerializeField]
    public Vector2 temp = Vector2.zero;
    private void Start()
    {
        OnInitMap();
    }

    void OnInitMap()
    {
        mapNodeDic = new Dictionary<Vector2, MapNode>();
        mapIconDic = new Dictionary<Vector2, MapIcon>();

        int ScreenWidth = (int)Screen.width;
        int ScreenHeight = (int)Screen.height;
        int widNum = ScreenWidth / imageSize;
        int heightNum = ScreenHeight / imageSize;
        //640 / 2 - imageSize/2
        int xSize = -ScreenWidth / 2 - imageSize / 2;
        int ySize = -ScreenHeight / 2 - imageSize / 2;
        Vector2 originPos1 = new Vector2(xSize + imageSize / 2, ySize + imageSize / 2);
        Vector2 originPos2 = new Vector3(xSize + imageSize, ySize + imageSize);
        
        for (int i = 0; i < widNum; i++)
        {
            for(int j = 0; j < heightNum; j++)
            {
                MapIcon mapIcon = new MapIcon();
                mapIcon.key = new Vector2(i, j);
                temp.x = originPos1.x + i * imageSize;
                temp.y = originPos1.y + j * imageSize;
                mapIcon.pos = temp;
                mapIconDic[mapIcon.key] = mapIcon;
            }
        }
        listIconKeys = new List<Vector2>(mapIconDic.Keys);

        for (int i = 0; i < widNum - 1; i++)
        {
            for (int j = 0; j < heightNum - 1; j++)
            {
                MapNode mapNode = new MapNode();
                mapNode.key = new Vector2(i, j);
                temp.x = originPos2.x + i * imageSize;
                temp.y = originPos2.y + j * imageSize;
                mapNode.pos = temp;
                mapNode.Init(i, j);
                mapNodeDic[mapNode.key] = mapNode;
                for(int z=0;z< mapNode.iconKeys.Count; z++)
                {
                    mapIconDic[mapNode.iconKeys[z]].parentNodes.Add(mapNode);
                }
            }
        }
        listNodeKeys = new List<Vector2>(mapNodeDic.Keys);
    }
    /// <summary>
    /// 监听点击
    /// </summary>
    private void Update()
    {
        if (Input.GetMouseButton(0))
        {
            RectTransformUtility.ScreenPointToLocalPointInRectangle(canvas.transform as RectTransform, Input.mousePosition, canvas.worldCamera, out temp);
            float dis = 100000;
            MapNode mapNode = null;
            for (int i = 0; i < listNodeKeys.Count; i++)
            {
                float _dis = Vector2.Distance(mapNodeDic[listNodeKeys[i]].pos, temp);
                if (_dis < dis)
                {
                    dis = _dis;
                    mapNode = mapNodeDic[listNodeKeys[i]];
                }
            }
            if (mapNode!=null)
            {
                mapNode.isShow = true;
                RefreshMapData(mapNode);
            }
        }
    }
    /// <summary>
    /// 刷新地图数据
    /// </summary>
    /// <param name="mapNode"></param>
    void RefreshMapData(MapNode mapNode)
    {
        if (mapNode != null)
        {
            for(int i=0;i< mapNode.iconKeys.Count; i++)
            {
                Vector2 _key = mapNode.iconKeys[i];
                mapIconDic[mapNode.iconKeys[i]].isShow = true;
                int tempSp = 0;
                Vector2 pos = mapIconDic[mapNode.iconKeys[i]].pos;
                MapNode tempMapNode;
                for (int j = 0;j< mapIconDic[mapNode.iconKeys[i]].parentNodes.Count; j++)
                {
                    tempMapNode = mapIconDic[mapNode.iconKeys[i]].parentNodes[j];
                    if (!tempMapNode.isShow)
                        continue;
                    temp = tempMapNode.pos;
                    if (temp.x < pos.x && temp.y > pos.y)
                        tempSp += 2;
                    if (temp.x > pos.x && temp.y > pos.y)
                        tempSp += 1;
                    if (temp.x < pos.x && temp.y < pos.y)
                        tempSp += 8;
                    if (temp.x > pos.x && temp.y < pos.y)
                        tempSp += 4;
                }
                mapIconDic[mapNode.iconKeys[i]].spIndex = tempSp;
            }
            isNeedRefresh = true;
        }
    }

    /// <summary>
    /// 负责地图刷新
    /// </summary>
    private void LateUpdate()
    {
        if (isNeedRefresh)
        {
            for (int i = 0; i < listIconKeys.Count; i++)
            {
                if (mapIconDic[listIconKeys[i]].isShow)
                {
                    Image img = mapIconDic[listIconKeys[i]].image;
                    if (img == null)
                    {
                        mapIconDic[listIconKeys[i]].image = GetImageFromPool(mapIconDic[listIconKeys[i]].spIndex);
                        img = mapIconDic[listIconKeys[i]].image;
                        img.transform.localPosition = mapIconDic[listIconKeys[i]].pos;
                    }
                    mapIconDic[listIconKeys[i]].image.sprite = sps[mapIconDic[listIconKeys[i]].spIndex];
                }
            }
            isNeedRefresh = false;
        }
    }


    /// <summary>
    /// 获取image组件
    /// </summary>
    /// <param name="sp"></param>
    /// <returns></returns>
    private Image GetImageFromPool(int sp)
    {
        GameObject obj = new GameObject("image");
        obj.transform.parent = transform;
        Image image = obj.AddComponent<Image>();
        RectTransform rect = image.transform as RectTransform;
        rect.sizeDelta = new Vector2(imageSize, imageSize);
        //image.sprite = sps[sp];
        return image;
    }
}

```

![img](01_war3_unity_map.assets/img_v2_cf84f917-f101-4b60-9dd4-ac23feec248g.gif)

![image-20231027031551635](01_war3_unity_map.assets/image-20231027031551635.png)

![img](01_war3_unity_map.assets/img_v2_d25068d5-bfad-4db0-afdc-523a6f88a23g.gif)

##### 贴图和数据之间的关系

![image-20231027030832487](01_war3_unity_map.assets/image-20231027030832487.png)



1张地图，最多15张地面贴图。

1个瓦片，最多混合4张贴图。

1个瓦片，1张贴图都没引用，说明该位置是悬崖。表现为地面镂空。



unity 多张贴图有两种方式：

1. Texture2DArray 通过数组贴图。*（要求：需要多张贴图大小一致）*
2. 最原始的方式  一张一个字段。

###### Texture2DArray 数组贴图方式

首选创建数组贴图

```c#

        public static Texture2DArray CreateTexture2DArray(this List<Texture> sourceTextures)
        {
            Vector2Int size = sourceTextures.GetMinSize();
            Texture2DArray texture2DArray = new Texture2DArray(size.x, size.y, sourceTextures.Count, ((Texture2D)sourceTextures[0]).format, true);

            // Apply settings
            texture2DArray.filterMode = FilterMode.Bilinear;
            texture2DArray.wrapMode = TextureWrapMode.Repeat;


            for (int i = 0; i < sourceTextures.Count; i++)
            {
                for (int m = 0; m < sourceTextures[i].mipmapCount; m++)
                {
                    Graphics.CopyTexture(sourceTextures[i], 0, m, dst, i, m);
                }
            }
            // Apply our changes
            texture2DArray.Apply(false);
            return texture2DArray;
        }
```

![img](01_war3_unity_map.assets/img_v2_7e54287d-36b5-4683-b733-e814031c7eeg.gif)



创建Buffer传给Shader

```c#

            // cornerTexturesBuffer
            if (cornerTexturesBuffer != null)
            {
                cornerTexturesBuffer.Release();
            }
            cornerTexturesBuffer = new ComputeBuffer(mapData.groupData.cornerTextures.Length, 4);
            cornerTexturesBuffer.SetData(mapData.groupData.cornerTextures);
            instanceMaterial.SetBuffer("cornerTexturesBuffer", cornerTexturesBuffer);


            // cornerVariationsBuffer
            if (cornerVariationsBuffer != null)
            {
                cornerVariationsBuffer.Release();
            }
            cornerVariationsBuffer = new ComputeBuffer(mapData.groupData.cornerVariations.Length, 4);
            cornerVariationsBuffer.SetData(mapData.groupData.cornerVariations);
            instanceMaterial.SetBuffer("cornerVariationsBuffer", cornerVariationsBuffer);
```



计算UV

![image-20231027041145539](01_war3_unity_map.assets/image-20231027041145539.png)



调试贴图所在位置是否正确

```c#

            fixed4 frag(v2f i) : SV_Target
            {
                fixed4 col = tex2D(_MainTex, i.uv1);
               

                // apply fog
                UNITY_APPLY_FOG(i.fogCoord, col);
                return col;
            }
```

![image-20231027041547632](01_war3_unity_map.assets/image-20231027041547632.png)

![image-20231027041623796](01_war3_unity_map.assets/image-20231027041623796.png)

混合贴图

```glsl
Shader "Zeng/war3/MapGround"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        u_war3unitRate("u_war3unitRate", Float) = 128 // war3 和u3d的单位比例关系
        u_size_offset("u_size_offset", Vector) = (10, 10, 0, 0)
        u_heightMap ("u_heightMap", 2D) = "white" {} // 高度贴图
        u_tilesets ("u_tilesets", 2DArray) = "" {} // 地面贴图数组
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

                float4 v_textureIndexs:COLOR;
                float2 uv1 : TEXCOORD1;
                float2 uv2 : TEXCOORD2;
                float2 uv3 : TEXCOORD3;
                float2 uv4 : TEXCOORD4;

                float4 v_color: COLOR1;
            };

            sampler2D _MainTex;
            float4 _MainTex_ST;
            
            uniform float u_war3unitRate;
            uniform float4 u_size_offset;

            //StructuredBuffer<float> cornerHeightsBuffer; // 高度数据Buffer
            sampler2D u_heightMap; // 高度贴图

            StructuredBuffer<float> cornerTexturesBuffer; // 贴图索引 Buffer
            StructuredBuffer<float> cornerVariationsBuffer; // // 贴图Cell UV 索引
            uniform float u_extended[14]; // 贴图cell 是否超过16 , 宽度大于高度一倍
            UNITY_DECLARE_TEX2DARRAY(u_tilesets);
            
            float2 getCell(float variation)
            {
                if (variation < 16.0) {
                    return float2(fmod(variation, 4.0), floor(variation / 4.0));
                }
                else {
                    variation -= 16.0;
                    return float2(4.0 + fmod(variation, 4.0), floor(variation / 4.0));
                }
            }

            float2 getUV(float2 position, float cellSzieX, float variation)
            {
                float2 cell = getCell(variation);
                float2 cellSize = float2(cellSzieX, 0.25);
                float2 uv = float2(position.x, 1.0 - position.y);
                float2 pixelSize = float2(1.0 / 512.0, 1.0 / 256.0);
                float2 r =  clamp(
                    (cell + uv) * cellSize,
                    cell * cellSize + pixelSize,
                    (cell + 1.0) * cellSize - pixelSize
                );
                r.y = 1.0 - r.y;
                return r;
            }

            v2f vert (appdata v, uint instanceID : SV_InstanceID)
            {
                v2f o;

                float2 a_position = v.vertex.xz;
                float vertIndex = v.vertex.y;

                float2 u_size = u_size_offset.xy;
                float2 u_offset = u_size_offset.zw;
                
                float columns = u_size.x - 1;
                float rows = u_size.y - 1;

                
                float2 u_pixel = 1.0 / u_size;
                float2 halfPixel = u_pixel * 0.5;
                
                float2 corner = float2(fmod(instanceID, columns), floor(instanceID / columns)); // 当前实例对象 在第corner.x 列，corner.y 行
                int i =int( corner.y * (columns + 1) +  corner.x); // 我们需要重新计算一下 索引

                

                float4 v_textureIndexs = float4(
                        cornerTexturesBuffer[instanceID * 4 + 0],
                        cornerTexturesBuffer[instanceID * 4 + 1],
                        cornerTexturesBuffer[instanceID * 4 + 2],
                        cornerTexturesBuffer[instanceID * 4 + 3]
                    );
                    
                o.v_textureIndexs = v_textureIndexs;
                    
                float4 a_variations = float4(
                    cornerVariationsBuffer[instanceID * 4 + 0],
                    cornerVariationsBuffer[instanceID * 4 + 1],
                    cornerVariationsBuffer[instanceID * 4 + 2],
                    cornerVariationsBuffer[instanceID * 4 + 3]
                    );

                    

                o.uv1 = getUV(a_position, u_extended[int(v_textureIndexs.x - 1)], a_variations.x);
                o.uv2 = getUV(a_position, u_extended[int(v_textureIndexs.y - 1)], a_variations.y);
                o.uv3 = getUV(a_position, u_extended[int(v_textureIndexs.z - 1)], a_variations.z);
                o.uv4 = getUV(a_position, u_extended[int(v_textureIndexs.w - 1)], a_variations.w);
                
                // 平面位置
                float2 base = corner + a_position;

                // 高度
                //float height = cornerHeightsBuffer[i];
                float2 height_uv = base / u_size + halfPixel; // 关键点 + halfPixel
                float height = tex2Dlod(u_heightMap, float4(height_uv, 0.0, 0.0)).x;

                o.v_color.rgba = height;  // 为了方便查看，我们用颜色的debug

                float3 position = float3(base + u_offset / u_war3unitRate, height);
                position = float3(-position.y, position.z, position.x); // 坐标系转换

                
                o.vertex = UnityObjectToClipPos(float4(position, 1.0));
                UNITY_TRANSFER_FOG(o, o.vertex);
                return o;
            }

            
            fixed4 sampleTile(float textureIndex, float2 uv)
            {
                int i = int(textureIndex - 0.6);
                fixed4 col = UNITY_SAMPLE_TEX2DARRAY(u_tilesets, float3(uv, i));
                return col;
            }
            
            fixed4 blend(fixed4 color, float textureIndex, float2 uv)
            {
                fixed4 texel = sampleTile(textureIndex, uv);
                return lerp(color, texel, texel.a);
            }


            fixed4 frag(v2f i) : SV_Target
            {
                //fixed4 col = tex2D(_MainTex, i.uv1);
                //col.rgba = i.v_color; // 为了方便查看，我们用颜色的debug
                
                fixed4 col = sampleTile(i.v_textureIndexs.x, i.uv1);
                
                //col.rgba = 0.0;
                if(i.v_textureIndexs.y > 0){
                    col = blend(col, i.v_textureIndexs.y,  i.uv2);
                }
                
                if(i.v_textureIndexs.z > 0.5){
                    col = blend(col, i.v_textureIndexs.z,  i.uv3);
                }
                
                if(i.v_textureIndexs.w > 0.5){
                    col = blend(col, i.v_textureIndexs.w,  i.uv4);
                }

                // apply fog
                UNITY_APPLY_FOG(i.fogCoord, col);
                return col;
            }
            ENDCG
        }
    }
}

```

```C#

using UnityEngine;
using UnityEngine.Rendering;
using Zeng.war3.runtimes.datas;

namespace Zeng.war3.runtimes.views
{
    [ExecuteInEditMode]
    public class MapGround : MonoBehaviour
    {
        [SerializeField]
        public MapData mapData;


        void Start()
        {
            Gen();
        }

        private void OnEnable()
        {
            Gen();
        }

        public Mesh mesh;
        public int subMeshIndex = 0;
        public Material material;
        public Material instanceMaterial;

        //private ComputeBuffer cornerHeightsBuffer; // 高度数据Buffer
        private ComputeBuffer cornerTexturesBuffer; // 贴图索引
        private ComputeBuffer cornerVariationsBuffer; // 贴图Cell UV 索引
        private void Gen()
        {
            if (mapData == null) return;

            if (mesh == null)
            {
                mesh = GenMesh();
            }


#if UNITY_EDITOR
            if (material == null)
            {
                material = UnityEditor.AssetDatabase.LoadAssetAtPath<Material>("Assets/Zeng/war3/runtimes/views/MapGround.mat");
            }
#endif

            if (instanceMaterial == null)
            {
                instanceMaterial = Material.Instantiate<Material>(material);
            }

            // 地图大小和偏移
            instanceMaterial.SetVector("u_size_offset", new Vector4(mapData.mapSize.x, mapData.mapSize.y, mapData.centerOffset.x, mapData.centerOffset.y));

            // 高度贴图
            instanceMaterial.SetTexture("u_heightMap", mapData.groupData.cornerHeightTexture);

            // 地面贴图数组
            instanceMaterial.SetTexture($"u_tilesets", mapData.groupData.tilesetTexturesArray);
            // u_extended
            float[] u_extended = new float[15];
            for (int i = 0, l = Mathf.Min(mapData.groupData.tilesetTextures.Length, 15); i < l; i++)
            {
                float isExtended = mapData.groupData.tilesetTextures[i] != null && mapData.groupData.tilesetTextures[i].width > mapData.groupData.tilesetTextures[i].height ? 0.125f : 0.25f;
                u_extended[i] = isExtended;

                //instanceMaterial.SetTexture($"u_tileset_{i}", mapData.groupData.tilesetTextures[i]);
            }
            instanceMaterial.SetFloatArray("u_extended", u_extended);

            // cornerHeightsBuffer
            //if (cornerHeightsBuffer != null)
            //    cornerHeightsBuffer.Release();
            //cornerHeightsBuffer = new ComputeBuffer(mapData.groupData.cornerHeights.Length, 4);
            //cornerHeightsBuffer.SetData(mapData.groupData.cornerHeights);
            //instanceMaterial.SetBuffer("cornerHeightsBuffer", cornerHeightsBuffer);


            // cornerTexturesBuffer
            if (cornerTexturesBuffer != null)
            {
                cornerTexturesBuffer.Release();
            }
            cornerTexturesBuffer = new ComputeBuffer(mapData.groupData.cornerTextures.Length, 4);
            cornerTexturesBuffer.SetData(mapData.groupData.cornerTextures);
            instanceMaterial.SetBuffer("cornerTexturesBuffer", cornerTexturesBuffer);


            // cornerVariationsBuffer
            if (cornerVariationsBuffer != null)
            {
                cornerVariationsBuffer.Release();
            }
            cornerVariationsBuffer = new ComputeBuffer(mapData.groupData.cornerVariations.Length, 4);
            cornerVariationsBuffer.SetData(mapData.groupData.cornerVariations);
            instanceMaterial.SetBuffer("cornerVariationsBuffer", cornerVariationsBuffer);


        }

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


        public ShadowCastingMode castShadows = ShadowCastingMode.Off;
        public bool receiveShadows = false;
        private void LateUpdate()
        {
            if (mapData == null) return;
            // Render
            Graphics.DrawMeshInstancedProcedural(mesh, subMeshIndex, instanceMaterial, new Bounds(Vector3.zero, new Vector3(100.0f, 100.0f, 100.0f)), mapData.instanceCount);
        }
    }
}

```



![image-20231027042421553](01_war3_unity_map.assets/image-20231027042421553.png)

![image-20231027042455478](01_war3_unity_map.assets/image-20231027042455478.png)



###### 最原始的方式  一张一个字段

```glsl
Shader "Zeng/war3/MapGround"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        u_war3unitRate("u_war3unitRate", Float) = 128 // war3 和u3d的单位比例关系
        u_size_offset("u_size_offset", Vector) = (10, 10, 0, 0)
        u_heightMap ("u_heightMap", 2D) = "white" {} // 高度贴图
        //u_tilesets ("u_tilesets", 2DArray) = "" {} // 地面贴图数组
        
        // 地面贴图列表
        u_tileset_0 ("u_tileset_0", 2D) = "white" {}
        u_tileset_1 ("u_tileset_1", 2D) = "white" {}
        u_tileset_2 ("u_tileset_2", 2D) = "white" {}
        u_tileset_3 ("u_tileset_3", 2D) = "white" {}
        u_tileset_4 ("u_tileset_4", 2D) = "white" {}
        u_tileset_5 ("u_tileset_5", 2D) = "white" {}
        u_tileset_6 ("u_tileset_6", 2D) = "white" {}
        u_tileset_7 ("u_tileset_7", 2D) = "white" {}
        u_tileset_8 ("u_tileset_8", 2D) = "white" {}
        u_tileset_9 ("u_tileset_9", 2D) = "white" {}
        u_tileset_10 ("u_tileset_10", 2D) = "white" {}
        u_tileset_11 ("u_tileset_11", 2D) = "white" {}
        u_tileset_12 ("u_tileset_12", 2D) = "white" {}
        u_tileset_13 ("u_tileset_13", 2D) = "white" {}
        u_tileset_14 ("u_tileset_14", 2D) = "white" {}
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
                UNITY_FOG_COORDS(1)
                float4 vertex : SV_POSITION;

                float4 v_textureIndexs:COLOR;
                float2 uv1 : TEXCOORD1;
                float2 uv2 : TEXCOORD2;
                float2 uv3 : TEXCOORD3;
                float2 uv4 : TEXCOORD4;

                float4 v_color: COLOR1;
            };

            sampler2D _MainTex;
            float4 _MainTex_ST;
            
            uniform float u_war3unitRate;
            uniform float4 u_size_offset;

            //StructuredBuffer<float> cornerHeightsBuffer; // 高度数据Buffer
            sampler2D u_heightMap; // 高度贴图

            StructuredBuffer<float> cornerTexturesBuffer; // 贴图索引 Buffer
            StructuredBuffer<float> cornerVariationsBuffer; // // 贴图Cell UV 索引
            uniform float u_extended[14]; // 贴图cell 是否超过16 , 宽度大于高度一倍


            // 地面贴图列表
            //UNITY_DECLARE_TEX2DARRAY(u_tilesets);
            uniform sampler2D  u_tileset_0;
            uniform sampler2D  u_tileset_1;
            uniform sampler2D  u_tileset_2;
            uniform sampler2D  u_tileset_3;
            uniform sampler2D  u_tileset_4;
            uniform sampler2D  u_tileset_5;
            uniform sampler2D  u_tileset_6;
            uniform sampler2D  u_tileset_7;
            uniform sampler2D  u_tileset_8;
            uniform sampler2D  u_tileset_9;
            uniform sampler2D  u_tileset_10;
            uniform sampler2D  u_tileset_11;
            uniform sampler2D  u_tileset_12;
            uniform sampler2D  u_tileset_13;
            uniform sampler2D  u_tileset_14;
            
            float2 getCell(float variation)
            {
                if (variation < 16.0) {
                    return float2(fmod(variation, 4.0), floor(variation / 4.0));
                }
                else {
                    variation -= 16.0;
                    return float2(4.0 + fmod(variation, 4.0), floor(variation / 4.0));
                }
            }

            float2 getUV(float2 position, float cellSzieX, float variation)
            {
                float2 cell = getCell(variation);
                float2 cellSize = float2(cellSzieX, 0.25);
                float2 uv = float2(position.x, 1.0 - position.y);
                float2 pixelSize = float2(1.0 / 512.0, 1.0 / 256.0);
                float2 r =  clamp(
                    (cell + uv) * cellSize,
                    cell * cellSize + pixelSize,
                    (cell + 1.0) * cellSize - pixelSize
                );
                r.y = 1.0 - r.y;
                return r;
            }

            v2f vert (appdata v, uint instanceID : SV_InstanceID)
            {
                v2f o;

                float2 a_position = v.vertex.xz;
                float vertIndex = v.vertex.y;

                float2 u_size = u_size_offset.xy;
                float2 u_offset = u_size_offset.zw;
                
                float columns = u_size.x - 1;
                float rows = u_size.y - 1;

                
                float2 u_pixel = 1.0 / u_size;
                float2 halfPixel = u_pixel * 0.5;
                
                float2 corner = float2(fmod(instanceID, columns), floor(instanceID / columns)); // 当前实例对象 在第corner.x 列，corner.y 行
                int i =int( corner.y * (columns + 1) +  corner.x); // 我们需要重新计算一下 索引

                

                float4 v_textureIndexs = float4(
                        cornerTexturesBuffer[instanceID * 4 + 0],
                        cornerTexturesBuffer[instanceID * 4 + 1],
                        cornerTexturesBuffer[instanceID * 4 + 2],
                        cornerTexturesBuffer[instanceID * 4 + 3]
                    );
                    
                o.v_textureIndexs = v_textureIndexs;
                    
                float4 a_variations = float4(
                    cornerVariationsBuffer[instanceID * 4 + 0],
                    cornerVariationsBuffer[instanceID * 4 + 1],
                    cornerVariationsBuffer[instanceID * 4 + 2],
                    cornerVariationsBuffer[instanceID * 4 + 3]
                    );

                    

                o.uv1 = getUV(a_position, u_extended[int(v_textureIndexs.x - 1)], a_variations.x);
                o.uv2 = getUV(a_position, u_extended[int(v_textureIndexs.y - 1)], a_variations.y);
                o.uv3 = getUV(a_position, u_extended[int(v_textureIndexs.z - 1)], a_variations.z);
                o.uv4 = getUV(a_position, u_extended[int(v_textureIndexs.w - 1)], a_variations.w);
                
                // 平面位置
                float2 base = corner + a_position;

                // 高度
                //float height = cornerHeightsBuffer[i];
                float2 height_uv = base / u_size + halfPixel; // 关键点 + halfPixel
                float height = tex2Dlod(u_heightMap, float4(height_uv, 0.0, 0.0)).x;

                o.v_color.rgba = height;  // 为了方便查看，我们用颜色的debug

                float3 position = float3(base + u_offset / u_war3unitRate, height);
                position = float3(-position.y, position.z, position.x); // 坐标系转换

                
                o.vertex = UnityObjectToClipPos(float4(position, 1.0));
                UNITY_TRANSFER_FOG(o, o.vertex);
                return o;
            }

            
            //fixed4 sampleTile2(float textureIndex, float2 uv)
            //{
            //    int i = int(textureIndex - 0.6);
            //    fixed4 col = UNITY_SAMPLE_TEX2DARRAY(u_tilesets, float3(uv, i));
            //    return col;
            //}

            fixed4 sampleTile(float textureIndex, float2 uv)
            {
                int i = int(textureIndex - 0.6);

                if (i == 0) {
                    return tex2D(u_tileset_0, uv);
                }
                else if (i == 1) {
                    return tex2D(u_tileset_1, uv);
                }
                else if (i == 2) {
                    return tex2D(u_tileset_2, uv);
                }
                else if (i == 3) {
                    return tex2D(u_tileset_3, uv);
                }
                else if (i == 4) {
                    return tex2D(u_tileset_4, uv);
                }
                else if (i == 5) {
                    return tex2D(u_tileset_5, uv);
                }
                else if (i == 6) {
                    return tex2D(u_tileset_6, uv);
                }
                else if (i == 7) {
                    return tex2D(u_tileset_7, uv);
                }
                else if (i == 8) {
                    return tex2D(u_tileset_8, uv);
                }
                else if (i == 9) {
                    return tex2D(u_tileset_9, uv);
                }
                else if (i == 10) {
                    return tex2D(u_tileset_10, uv);
                }
                else if (i == 11) {
                    return tex2D(u_tileset_11, uv);
                }
                else if (i == 12) {
                    return tex2D(u_tileset_12, uv);
                }
                else if (i == 13) {
                    return tex2D(u_tileset_13, uv);
                }
                else if (i == 14) {
                    return tex2D(u_tileset_14, uv);
                }
                return fixed4(1.0, 1.0, 1.0, 1.0);
            }
            
            fixed4 blend(fixed4 color, float textureIndex, float2 uv)
            {
                fixed4 texel = sampleTile(textureIndex, uv);
                return lerp(color, texel, texel.a);
            }


            fixed4 frag(v2f i) : SV_Target
            {
                //fixed4 col = tex2D(_MainTex, i.uv1);
                //col.rgba = i.v_color; // 为了方便查看，我们用颜色的debug
                
                fixed4 col = sampleTile(i.v_textureIndexs.x, i.uv1);
                
                //col.rgba = 0.0;
                if(i.v_textureIndexs.y > 0){
                    col = blend(col, i.v_textureIndexs.y,  i.uv2);
                }
                
                if(i.v_textureIndexs.z > 0.5){
                    col = blend(col, i.v_textureIndexs.z,  i.uv3);
                }
                
                if(i.v_textureIndexs.w > 0.5){
                    col = blend(col, i.v_textureIndexs.w,  i.uv4);
                }

                // apply fog
                UNITY_APPLY_FOG(i.fogCoord, col);
                return col;
            }
            ENDCG
        }
    }
}

```



```

using UnityEngine;
using UnityEngine.Rendering;
using Zeng.war3.runtimes.datas;

namespace Zeng.war3.runtimes.views
{
    [ExecuteInEditMode]
    public class MapGround : MonoBehaviour
    {
        [SerializeField]
        public MapData mapData;


        void Start()
        {
            Gen();
        }

        private void OnEnable()
        {
            Gen();
        }

        public Mesh mesh;
        public int subMeshIndex = 0;
        public Material material;
        public Material instanceMaterial;

        //private ComputeBuffer cornerHeightsBuffer; // 高度数据Buffer
        private ComputeBuffer cornerTexturesBuffer; // 贴图索引
        private ComputeBuffer cornerVariationsBuffer; // 贴图Cell UV 索引
        private void Gen()
        {
            if (mapData == null) return;

            if (mesh == null)
            {
                mesh = GenMesh();
            }


#if UNITY_EDITOR
            if (material == null)
            {
                material = UnityEditor.AssetDatabase.LoadAssetAtPath<Material>("Assets/Zeng/war3/runtimes/views/MapGround.mat");
            }
#endif

            if (instanceMaterial == null)
            {
                instanceMaterial = Material.Instantiate<Material>(material);
            }

            // 地图大小和偏移
            instanceMaterial.SetVector("u_size_offset", new Vector4(mapData.mapSize.x, mapData.mapSize.y, mapData.centerOffset.x, mapData.centerOffset.y));

            // 高度贴图
            instanceMaterial.SetTexture("u_heightMap", mapData.groupData.cornerHeightTexture);

            // 地面贴图数组
            //instanceMaterial.SetTexture($"u_tilesets", mapData.groupData.tilesetTexturesArray);
            // u_extended
            float[] u_extended = new float[15];
            for (int i = 0, l = Mathf.Min(mapData.groupData.tilesetTextures.Length, 15); i < l; i++)
            {
                float isExtended = mapData.groupData.tilesetTextures[i] != null && mapData.groupData.tilesetTextures[i].width > mapData.groupData.tilesetTextures[i].height ? 0.125f : 0.25f;
                u_extended[i] = isExtended;

                instanceMaterial.SetTexture($"u_tileset_{i}", mapData.groupData.tilesetTextures[i]);
            }
            instanceMaterial.SetFloatArray("u_extended", u_extended);

            // cornerHeightsBuffer
            //if (cornerHeightsBuffer != null)
            //    cornerHeightsBuffer.Release();
            //cornerHeightsBuffer = new ComputeBuffer(mapData.groupData.cornerHeights.Length, 4);
            //cornerHeightsBuffer.SetData(mapData.groupData.cornerHeights);
            //instanceMaterial.SetBuffer("cornerHeightsBuffer", cornerHeightsBuffer);


            // cornerTexturesBuffer
            if (cornerTexturesBuffer != null)
            {
                cornerTexturesBuffer.Release();
            }
            cornerTexturesBuffer = new ComputeBuffer(mapData.groupData.cornerTextures.Length, 4);
            cornerTexturesBuffer.SetData(mapData.groupData.cornerTextures);
            instanceMaterial.SetBuffer("cornerTexturesBuffer", cornerTexturesBuffer);


            // cornerVariationsBuffer
            if (cornerVariationsBuffer != null)
            {
                cornerVariationsBuffer.Release();
            }
            cornerVariationsBuffer = new ComputeBuffer(mapData.groupData.cornerVariations.Length, 4);
            cornerVariationsBuffer.SetData(mapData.groupData.cornerVariations);
            instanceMaterial.SetBuffer("cornerVariationsBuffer", cornerVariationsBuffer);


        }

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


        public ShadowCastingMode castShadows = ShadowCastingMode.Off;
        public bool receiveShadows = false;
        private void LateUpdate()
        {
            if (mapData == null) return;
            // Render
            Graphics.DrawMeshInstancedProcedural(mesh, subMeshIndex, instanceMaterial, new Bounds(Vector3.zero, new Vector3(100.0f, 100.0f, 100.0f)), mapData.instanceCount);
        }
    }
}

```

#### 2.6 地面镂空

![image-20231027044200749](01_war3_unity_map.assets/image-20231027044200749.png)

![image-20231027044221398](01_war3_unity_map.assets/image-20231027044221398.png)





### 相关资料：

[魔兽争霸3- Terrain , 自动拼接地形渲染方式_魔兽3 地形-CSDN博客](https://blog.csdn.net/blizmax6/article/details/6736783)

