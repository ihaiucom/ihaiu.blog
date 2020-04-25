export default class ReportMonitorKeyIndex
{
    
    static SystemPlatform = "0";
    static Open = "1";
    static Menu = "2";
    static War3x3 = "3";
    static War4x4 = "4";
    static WarOver = "5";
    static Share = "6";
    static ShareBtn = "7";
    static ShareResult = "8";
    static ShareWar = "9";
    static Gold = "10";
    static GoldBest = "11";
    static BuyHero = "12";
    static BuyShop = "13";
    static BuyHero_0 = 14;
    static BuyShop_0 = 19;
    static MenuHomeTab_0 = 24;

    static GetBuyHero(i: number)
    {
        return this.BuyHero_0 + i;
    }

    
    static GetBuyShop(i: number)
    {
        return this.BuyShop_0 + i;
    }

    
    static GetBuyMenuHomeTab(i: number)
    {
        return this.MenuHomeTab_0 + i;
    }
}

export  class ReportMonitorKeyName
{
    static SystemPlatform = "SystemPlatform";
    static Open = "Open";
    static Menu = "Menu";
    static War3x3 = "War3x3";
    static War4x4 = "War4x4";
    static WarOver = "WarOver";
    static Share = "Share";
    static ShareBtn = "ShareBtn";
    static ShareResult = "ShareResult";
    static ShareWar = "ShareWar";
    static Gold = "Gold";
    static GoldBest = "GoldBest";
    static BuyHero = "BuyHero";
    static BuyShop = "BuyShop";

    

    static GetBuyHero(i: number)
    {
        return "BuyHero_" + i;
    }

    
    static GetBuyShop(i: number)
    {
        return "BuyShop_" + i;
    }

    
    static GetBuyMenuHomeTab(i: number)
    {
        return "MenuHomeTab_" + i;
    }
}