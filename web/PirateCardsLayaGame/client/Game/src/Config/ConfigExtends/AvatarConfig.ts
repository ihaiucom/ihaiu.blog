
import Game from "../../Game";
import AssetItemInfo from "../../GameFrame/AssetManagers/AssetItemInfo";
import { AssetItemType } from "../../GameFrame/AssetManagers/AssetItemType";

import AssetHelper from "../../GameFrame/AssetManagers/AssetHelper";
import Res from "../Keys/Res";
import {AvatarConfigLang} from "../ExcelConfigLange";
export default class AvatarConfig extends AvatarConfigLang
{
    // 场景_图片
    private _picUrl: string;
    get picUrl(): string
    {
        if (!this.bgPic)
        {
            return null;
        }

        if (!this._picUrl)
        {
            this._picUrl = Res.getSpritePath(this.bgPic);
        }
        return this._picUrl;
    }


    // 场景_图片
    private _picAssetItem: AssetItemInfo;
    get picAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.bgPic))
        {
            return null;
        }

        if (!this._picAssetItem)
        {
            this._picAssetItem = { url: this.picUrl, type: AssetItemType.Image };
        }

        return this._picAssetItem;
    }


    /* ---------------------------------------  我是漂亮的分割线  --------------------------------------- */


    private getPackagenameByUrl(url: string)
    {
        return url.split("/")[0];
    }

    // 图标
    private _iconUrl: string;
    get iconUrl(): string
    {
        if (!this._iconUrl)
        {
            this._iconUrl = "res/fspriteassets/" + this.icon + ".png";
        }
        return this._iconUrl;
    }

    //
    private _iconUrl2: string;
    get iconUrl2(): string
    {
        if (!this._iconUrl2)
        {
            this._iconUrl2 = "res/fspriteassets/" + this.icon + "2.png";
        }
        return this._iconUrl2;
    }

    // 卡片路径
    private _cardUrl: string;
    get cardUrl(): string
    {
        if(!this._cardUrl)
        {
            this._cardUrl  = "res/fspriteassets/" + this.card + ".png";
        }
        return this._cardUrl
    }

    // 大图立绘
    private _drawingUrl: string;
    get drawingUrl(): string
    {
        if(!this._drawingUrl)
        {
            this._drawingUrl  = "res/fspriteassets/" + this.drawing + ".png";
        }
        return this._drawingUrl
    }

    // 剧情引导内的立绘
    private _plotDialogueUrl: string;
    get plotDialogueUrl(): string
    {
        if(!this._plotDialogueUrl)
        {
            this._plotDialogueUrl  = "res/fspriteassets/" + this.plotDialogue + ".png";
        }
        return this._plotDialogueUrl
    }

    private _shadowUrl: string;
    get shadowUrl(): string
    {
        if(!this._shadowUrl)
        {
            this._shadowUrl  = "res/fspriteassets/" + this.Shadow + ".png";
        }
        return this._shadowUrl
    }

    private _heroNameUrl: string;
    get heroNameUrl(): string
    {
        if(!this._heroNameUrl)
        {
            this._heroNameUrl = "res/fspriteassets/" + this.heroName + ".png";
        }
        return this._heroNameUrl
    }

    // 编队的英雄图片
    private _heroTeamImgUrl: string;
    get heroTeamImgUrl(): string
    {
        if(!this._heroTeamImgUrl)
        {
            this._heroTeamImgUrl  = "res/fspriteassets/" + this.heroTeam + ".png";
        }
        return this._heroTeamImgUrl
    }

    private _heroLoadingImgUrl: string;
    get heroLoadingImgUrl(): string
    {
        if(!this._heroLoadingImgUrl)
        {
            this._heroLoadingImgUrl = "res/fspriteassets/" + this.heroLoading + ".png";
        }
        return this._heroLoadingImgUrl
    }

    // 编队的英雄名字
    private _heroTeamNameUrl: string;
    get heroTeamNameUrl(): string
    {
        if(!this._heroTeamNameUrl)
        {
            this._heroTeamNameUrl  = "res/fspriteassets/" + this.heroName + ".png";
        }
        return this._heroTeamNameUrl
    }

    // 半身像
    private _halfIconUrl: string;
    get halfIconUrl(): string
    {
        if (!this._halfIconUrl)
        {
            this._halfIconUrl = "res/fspriteassets/" + this.halfIcon + ".png";
        }
        return this._halfIconUrl;
    }
    //全身像
    private _bodyIconUrl: string;
    get bodyIconUrl(): string
    {
        if (!this._bodyIconUrl)
        {
            // let packageName = this.getPackagenameByUrl(this.bodyIcon);
            // if (packageName == "ActorBodyIcon")
            {
                this._bodyIconUrl = "res/fspriteassets/" + this.bodyIcon + ".png";
            }
            // else
            // {
            // 	this._bodyIconUrl = "ui://" + this.bodyIcon;
            // }
        }
        return this._bodyIconUrl;
    }

    // 碎片图标
    private _pieceIconUrl: string;
    get pieceIconUrl(): string
    {
        if (!this._pieceIconUrl)
        {
            this._pieceIconUrl = "res/fspriteassets/" + this.pieceIcon + ".png";

            // this._pieceIconUrl = "ui://" + this.pieceIcon;
        }
        return this._pieceIconUrl;
    }

    private _commonSkillIconUrl : string;
    get commonSkillIconUrl() : string
    {
        if(!this._commonSkillIconUrl)
        {
            this._commonSkillIconUrl = "res/fspriteassets/" + this.zhCnIcon + ".png";
        }
        return this._commonSkillIconUrl;
    }
    

    /* ---------------------------------------  我是漂亮的分割线  --------------------------------------- */


    // 获取fgui包配置 -- 图标
    private _iconPackagename: string;
    private get iconPackagename(): string
    {
        if (isNullOrEmpty(this.icon))
        {
            return null;
        }

        if (!this._iconPackagename)
        {
            this._iconPackagename = this.icon.split("/")[0];
        }

        return this._iconPackagename;
    }


    // 获取fgui包配置 -- 半身像
    private _bodyIconPackageName: string;
    private get bodyIconPackageName(): string
    {
        if (isNullOrEmpty(this.bodyIcon))
        {
            return null;
        }

        if (!this._bodyIconPackageName)
        {
            this._bodyIconPackageName = this.bodyIcon.split("/")[0];
        }

        return this._bodyIconPackageName;
    }


    // 获取fgui包配置 -- 碎片图标
    private _pieceIconPackageName: string;
    private get pieceIconPackageName(): string
    {
        if (isNullOrEmpty(this.pieceIcon))
        {
            return null;
        }

        if (!this._pieceIconPackageName)
        {
            this._pieceIconPackageName = this.pieceIcon.split("/")[0];
        }

        return this._pieceIconPackageName;
    }


    /* ---------------------------------------  我是漂亮的分割线  --------------------------------------- */
    // 获取fgui包配置 -- 图标
    private _iconAssetItem: AssetItemInfo;
    get iconAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.icon))
        {
            return null;
        }

        if (!this._iconAssetItem)
        {
            this._iconAssetItem = { url: this.iconPackagename, type: AssetItemType.FspritePackage };
        }

        return this._iconAssetItem;
    }




    // 获取fgui包配置 -- 半身像
    private _bodyIconAssetItem: AssetItemInfo;
    get bodyIconAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.bodyIcon))
        {
            return null;
        }

        if (!this._bodyIconAssetItem)
        {
            this._bodyIconAssetItem = { url: this.bodyIconPackageName, type: AssetItemType.FspritePackage };
        }

        return this._bodyIconAssetItem;
    }


    // 获取fgui包配置 -- 碎片图标
    private _pieceIconAssetItem: AssetItemInfo;
    get pieceIconAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.pieceIcon))
        {
            return null;
        }

        if (!this._pieceIconAssetItem)
        {
            this._pieceIconAssetItem = { url: this.pieceIconPackageName, type: AssetItemType.FspritePackage };
        }

        return this._pieceIconAssetItem;
    }


    /* ---------------------------------------  我是漂亮的分割线  --------------------------------------- */

    private _assetList: AssetItemInfo[] = [];

    get assetList(): AssetItemInfo[]
    {
        if (!this._assetList)
        {
            this._assetList = [];
            if (this.iconAssetItem)
                this._assetList.push(this.iconAssetItem);


            if (this.bodyIconAssetItem)
                this._assetList.push(this.bodyIconAssetItem);


            if (this.pieceIconAssetItem)
                this._assetList.push(this.pieceIconAssetItem);


            // if (this.modelBoneAssetItemF)
            // {
            //     this._assetList.push(this.modelBoneAssetItemF);
            //     this._assetList.push(this.modelSkinAssetItemF);
            //     this._assetList.push(this.modelBoneAssetItemB);
            //     this._assetList.push(this.modelSkinAssetItemB);
            // }




            if (this.picAssetItem)
                this._assetList.push(this.picAssetItem);

        }
        return this._assetList;
    }


    // 获取预加载的资源列表
    getAllAssset(list?: AssetItemInfo[], dict?: Dictionary<TKey, AssetItemInfo>): AssetItemInfo[]
    {
        if (!list)
        {
            return this.assetList;
        }

        for (let i = 0; i < this.assetList.length; i++)
        {
            let item = this.assetList[i];

            if (dict)
            {
                let key = AssetHelper.getAssetItemKey(item);

                if (!dict.hasKey(key))
                {
                    list.push(item);
                    dict.add(key, item);
                }
            }
            else
            {
                list.push(item);
            }
        }

        return list;
    }
}