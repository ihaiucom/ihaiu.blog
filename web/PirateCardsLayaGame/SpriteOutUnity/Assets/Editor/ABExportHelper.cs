using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

public class ABExportHelper
{

    public static void CheckPath(string path, bool isFile = true)
    {
        path = path.Replace("\\", "/");
        if (isFile) path = path.Substring(0, path.LastIndexOf('/'));
        string[] dirs = path.Split('/');
        string target = "";

        bool first = true;
        foreach (string dir in dirs)
        {
            if (first)
            {
                first = false;
                target += dir;
                continue;
            }

            if (string.IsNullOrEmpty(dir)) continue;
            target += "/" + dir;
            if (!Directory.Exists(target))
            {
                Directory.CreateDirectory(target);
            }
        }
    }


    /// <summary>
    /// 导出贴图
    /// </summary>
    /// <param name="tex">贴图</param>
    /// <param name="exportRootPath">根目录</param>
    /// <returns>保存的文件路径</returns>
    public static string ExportTexture2D(Texture2D tex, string exportRootPath)
    {
        string path = Path.Combine(exportRootPath, tex.name + ".png");
        if (File.Exists(path))
        {
            return path;
        }

        if (!Directory.Exists(exportRootPath))
        {
            Directory.CreateDirectory(exportRootPath);
        }

        RenderTexture rt = RenderTexture.GetTemporary(tex.width, tex.height, 0);
        Graphics.Blit(tex, rt);

        RenderTexture active = RenderTexture.active;
        RenderTexture.active = rt;
        Texture2D cont = new Texture2D(tex.width, tex.height);
        cont.hideFlags = HideFlags.HideAndDontSave;
        cont.ReadPixels(new Rect(0, 0, tex.width, tex.height), 0, 0);
        cont.Apply();
        RenderTexture.active = active;
        RenderTexture.ReleaseTemporary(rt);

        File.WriteAllBytes(path, cont.EncodeToPNG());
        return path;
    }



    public static Texture2D Texture2DToEnable(Texture2D tex)
    {
        RenderTexture rt = RenderTexture.GetTemporary(tex.width, tex.height, 0);
        Graphics.Blit(tex, rt);

        RenderTexture active = RenderTexture.active;
        RenderTexture.active = rt;
        Texture2D cont = new Texture2D(tex.width, tex.height);
        cont.hideFlags = HideFlags.HideAndDontSave;
        cont.ReadPixels(new Rect(0, 0, tex.width, tex.height), 0, 0);
        cont.Apply();
        RenderTexture.active = active;
        RenderTexture.ReleaseTemporary(rt);

        return cont;
    }

    public static Texture2D SpriteAtlas(Sprite sprite, string exportAtlasRootPath = null)
    {
        int width = sprite.texture.width;
        int height = sprite.texture.height;

        Texture2D srcColor = Texture2DToEnable(sprite.texture);
        if(sprite.associatedAlphaSplitTexture != null)
        {

            Texture2D srcAlpha = Texture2DToEnable(sprite.associatedAlphaSplitTexture);

            if (!string.IsNullOrEmpty(exportAtlasRootPath))
            {
                string path = Path.Combine(exportAtlasRootPath, sprite.texture.name + ".png");
                CheckPath(path);
                File.WriteAllBytes(path, srcColor.EncodeToPNG());

                path = Path.Combine(exportAtlasRootPath, sprite.associatedAlphaSplitTexture.name + ".png");
                CheckPath(path);
                File.WriteAllBytes(path, srcAlpha.EncodeToPNG());
            }

            for (int x = 0; x < width; x++)
            {
                for (int y = 0; y < height; y++)
                {
                    Color color = srcColor.GetPixel(x, y);
                    Color alpha = srcAlpha.GetPixel(x, y);

                    color.a = alpha.r;
                    srcColor.SetPixel(x, y, color);
                }
            }

        }

        if (!string.IsNullOrEmpty(exportAtlasRootPath))
        {
            string path = Path.Combine(exportAtlasRootPath, "ARGB/" + sprite.texture.name + ".png");
            CheckPath(path);
            File.WriteAllBytes(path, srcColor.EncodeToPNG());
        }

        return srcColor;
    }





    /// <summary>
    /// 导出Sprite的32位贴图
    /// </summary>
    /// <param name="sprite">贴图</param>
    /// <param name="rootPath">根目录</param>
    /// <returns>保存的文件路径</returns>
    public static Texture2D ExportSpriteAtlas(Sprite sprite, string path)
    {
        Texture2D texture = SpriteAtlas(sprite);

        CheckPath(path);
        File.WriteAllBytes(path, texture.EncodeToPNG());
        return texture;
    }



    /// <summary>
    /// 导出图集里的所有Sprite
    /// </summary>
    public static void ExportMultipleSprite(Sprite[] sprites, string exportRootPath, Dictionary<Sprite, string> nameDict = null, string exportAtlasRootPath = null)
    {
        if (sprites.Length == 0) return;

        Texture2D texture = SpriteAtlas(sprites[0], exportAtlasRootPath);
        //Texture2D texture = ExportSpriteAtlas(sprites[0], "Assets/test.png");

        Color[] pixels = texture.GetPixels();
        int width = texture.width;

        for (int i = 0; i < sprites.Length; i ++)
        {
            Sprite sprite = sprites[i];

            int w = Mathf.FloorToInt(sprite.textureRect.width);
            int h = Mathf.FloorToInt(sprite.textureRect.height);

            int left = Mathf.FloorToInt(sprite.textureRect.x);
            int up = Mathf.FloorToInt(sprite.textureRect.y);

            Texture2D item = new Texture2D(w, h);

            Color[] colors = new Color[w * h];
            for (int x = 0; x < w; x++)
            {
                for (int y = 0; y < h; y++)
                {

                    colors[y * w + x] = pixels[(up + y) * width + left + x];
                }
            }
            item.SetPixels(colors);


            string name = nameDict != null && nameDict.ContainsKey(sprite) ? nameDict[sprite] : sprite.name + ".png";
            string path = Path.Combine(exportRootPath, name);
            Debug.Log(path);
            CheckPath(path);
            File.WriteAllBytes(path, item.EncodeToPNG());
        }
    }

    /// <summary>
    /// 导出AssetBundle里图集里的所有Sprite
    /// </summary>
    public static void ExportAssetBundleMultipleSprite(string assetbundlePath, string exportRootPath, string exportAtlasRootPath = null)
    {
        AssetBundle assetBundle = AssetBundle.LoadFromFile(assetbundlePath);
        try
        {
            ExportAssetBundleMultipleSprite(assetBundle, exportRootPath, exportAtlasRootPath);
        }
        catch(System.Exception e)
        {
            Debug.LogError(e);
        }
        assetBundle.Unload(false);
    }




    /// <summary>
    /// 导出AssetBundle里图集里的所有Sprite
    /// </summary>
    public static void ExportAssetBundleMultipleSprite(AssetBundle ab, string exportRootPath, string exportAtlasRootPath = null)
    {
        Dictionary<Texture2D, List<Sprite>> dict = new Dictionary<Texture2D, List<Sprite>>();
        Dictionary<Sprite, string> nameDict = new Dictionary<Sprite, string>();

        Sprite[] sprites = ab.LoadAllAssets<Sprite>();


        string[] assetNames = ab.GetAllAssetNames();
        for (int i = 0; i < assetNames.Length; i++)
        {
            string name = assetNames[i];
            Sprite sprite = ab.LoadAsset<Sprite>(name);
            if(sprite != null)
            {
                List<Sprite> list;

                if (dict.ContainsKey(sprite.texture))
                {
                    list = dict[sprite.texture];
                }
                else
                {
                    list = dict[sprite.texture] = new List<Sprite>();
                }

                list.Add(sprite);
                nameDict.Add(sprite, name);
            }
        }

        foreach(var kvp in dict)
        {
            ExportMultipleSprite(kvp.Value.ToArray(), exportRootPath, nameDict, exportAtlasRootPath);
        }
    }


    /// <summary>
    /// 导出AssetBundle里图集里的所有Sprite
    /// </summary>
    public static void ExportAssetBundleSpriteFolder(string folder, string exportRootPath, string exportAtlasRootPath = null)
    {
        string[] files = Directory.GetFiles(folder, "*.unity3d", SearchOption.AllDirectories);


        for(int i = 0; i < files.Length; i ++)
        {
            EditorUtility.DisplayProgressBar("导出Sprite", files[i], i * 1f / files.Length);
            ExportAssetBundleMultipleSprite(files[i], exportRootPath, exportAtlasRootPath);
        }

        EditorUtility.ClearProgressBar();
    }














    /// <summary>
    /// 设置Sprite九宫格
    /// </summary>
    public static void SettingSpriteFolder(string folder, string exportRootPath, string exportAtlasRootPath = null)
    {
        string[] files = Directory.GetFiles(folder, "*.unity3d", SearchOption.AllDirectories);


        for (int i = 0; i < files.Length; i++)
        {
            EditorUtility.DisplayProgressBar("设置Sprite九宫格", files[i], i * 1f / files.Length);
            SettingMultipleSprite(files[i], exportRootPath, exportAtlasRootPath);
        }

        EditorUtility.ClearProgressBar();
    }






    public static void SettingMultipleSprite(string assetbundlePath, string exportRootPath, string exportAtlasRootPath = null)
    {
        AssetBundle assetBundle = AssetBundle.LoadFromFile(assetbundlePath);
        try
        {
            SettingMultipleSprite(assetBundle, exportRootPath, exportAtlasRootPath);
        }
        catch (System.Exception e)
        {
            Debug.LogError(e);
        }
        assetBundle.Unload(false);
    }

    public static void SettingMultipleSprite(AssetBundle ab, string exportRootPath, string exportAtlasRootPath = null)
    {
        Dictionary<Texture2D, List<Sprite>> dict = new Dictionary<Texture2D, List<Sprite>>();
        Dictionary<Sprite, string> nameDict = new Dictionary<Sprite, string>();

        Sprite[] sprites = ab.LoadAllAssets<Sprite>();


        string[] assetNames = ab.GetAllAssetNames();
        for (int i = 0; i < assetNames.Length; i++)
        {
            string name = assetNames[i];
            Sprite sprite = ab.LoadAsset<Sprite>(name);
            if (sprite != null)
            {
                List<Sprite> list;

                if (dict.ContainsKey(sprite.texture))
                {
                    list = dict[sprite.texture];
                }
                else
                {
                    list = dict[sprite.texture] = new List<Sprite>();
                }

                list.Add(sprite);
                nameDict.Add(sprite, name);
            }
        }

        foreach (var kvp in dict)
        {
            SettingMultipleSprite(kvp.Value.ToArray(), exportRootPath, nameDict, exportAtlasRootPath);
        }
    }

    public static void SettingMultipleSprite(Sprite[] sprites, string exportRootPath, Dictionary<Sprite, string> nameDict = null, string exportAtlasRootPath = null)
    {
        if (sprites.Length == 0) return;


        for (int i = 0; i < sprites.Length; i++)
        {
            Sprite sprite = sprites[i];

            string name = nameDict != null && nameDict.ContainsKey(sprite) ? nameDict[sprite] : sprite.name + ".png";
            string path = Path.Combine(exportRootPath, name);

            TextureImporter importer = (TextureImporter)TextureImporter.GetAtPath(path);
            importer.textureType = TextureImporterType.Sprite;
            importer.spriteBorder = sprite.border;

            TextureImporterSettings tis = new TextureImporterSettings();
            importer.ReadTextureSettings(tis);
            tis.spriteBorder = sprite.border;
            tis.ApplyTextureType(TextureImporterType.Sprite);
            importer.SetTextureSettings(tis);
        }
    }

}
