export default class MiniHttpRequest
{
    
    static InitCode()
    {
        new MiniHttpRequest().InitCode();
    }
    
    private InitCode()
    {
        
        
        var HttpRequest: any = Laya.HttpRequest;

        HttpRequest.prototype.src_error = HttpRequest.prototype.error;
        HttpRequest.prototype.error = this.error;

    }

    
    /**
     * @private
     * 请求错误的处理函数。
     * @param	message 错误信息。
     */
    protected src_error(message: string): void 
    {
    }
    
    /**
     * @private
     * 请求错误的处理函数。
     * @param	message 错误信息。
     */
    protected error(message: string): void 
    {
        this.src_error(message);
    }


}