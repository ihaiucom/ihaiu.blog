import { ui }  from "../ui/layaMaxUI"
    export default class BigItem extends ui.test.BigItemUI{
        constructor(){
            super();
        }

         public set dataSource(value){
            if(!value)
                return;
            this.img_head.skin = value.avatarIP;
            this.text_name.text = value.UserName;
            this.text_score.text = value.RankValue;
        }
    }   
