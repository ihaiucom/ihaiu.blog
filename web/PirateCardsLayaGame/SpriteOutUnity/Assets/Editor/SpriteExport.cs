using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using SimpleJSON;
using System.IO;
using UnityEngine.Experimental.Rendering;

public class SpriteExport
{
    [MenuItem("Tools/SpriteExport")]
    public static void ExportSelect()
    {
        TextAsset[] jsonFiles = Selection.GetFiltered<TextAsset>(SelectionMode.Assets);
        if(jsonFiles.Length == 0)
        {
            return;
        }

        Texture2D[] textures = Selection.GetFiltered<Texture2D>(SelectionMode.Assets);
        if (textures.Length == 0)
        {
            return;
        }

        Texture2D texture = textures[0];

        TextAsset jsonFile = jsonFiles[0];
        JSONNode json = JSON.Parse(jsonFile.text);

        JSONNode frames = json["frames"];


        Dictionary<Texture2D, List<Sprite>> dict = new Dictionary<Texture2D, List<Sprite>>();
        Dictionary<Sprite, string> nameDict = new Dictionary<Sprite, string>();

        string path = AssetDatabase.GetAssetPath(texture);
        string outDir = Path.Combine( Path.GetDirectoryName(path), Path.GetFileNameWithoutExtension(path));
        Debug.Log(outDir);

        if(!Directory.Exists(outDir))
        {
            Directory.CreateDirectory(outDir);
        }

        Debug.Log(texture.format);
        Debug.Log(texture.height);
        Color32[] pixels = texture.GetPixels32();
        foreach (var item in frames)
        {
            var itemName = item.Key;
            JSONNode itemData = item.Value;
            var frame = itemData["frame"];
            var sourceSize = itemData["sourceSize"];
            bool trimmed = frame["trimmed"];
            int spriteX = frame["x"];
            int spriteY = frame["y"];
            int spriteW = frame["w"];
            int spriteH = frame["h"];


            if(spriteW == 0)
            {
                Debug.Log(itemName + ",    " + spriteX + ",  " + spriteY + ",  " + spriteW + ",  " + spriteH);
                continue;
            }

            spriteY = texture.height - spriteY - spriteH;



            Texture2D newTex = new Texture2D(spriteW, spriteH, TextureFormat.RGBA32, false, false);
            Color32[] newColors = new Color32[spriteW * spriteH];
            for (int x = 0; x < spriteW; x++)
            {
                for (int y = 0; y < spriteH; y++)
                {
                    newColors[y * spriteW + x] = pixels[(spriteY + y) * texture.width + spriteX + x];
                }
            }
            newTex.SetPixels32(newColors);
            byte[] data = newTex.EncodeToPNG();
            string filePath = Path.Combine(outDir, itemName + ".png");
            if (File.Exists(filePath))
            {
                File.Delete(filePath);
            }
            FileStream file = File.Create(filePath);
            file.Write(data, 0, data.Length);
            file.Close();




        }



    }
}
