export default class SecretLandData
{
    public static  Create(msg: any)
    {
        let data = new SecretLandData();
        for (const key in msg) {
            data[key] = msg[key];
        }

        return data;
    }

    
}