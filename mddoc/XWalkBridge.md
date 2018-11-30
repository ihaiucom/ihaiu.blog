yy://return/_fetchQueue/[{"handlerName":"submitFromWeb","data":{"param":"中文ABC"},"callbackId":"cb_1_1542716566663"}]

javascript:WebViewJavascriptBridge._handleMessageFromNative('{\"callbackId\":\"JAVA_CB_1_2357\",\"data\":\"{\\\"location\\\":{\\\"address\\\":\\\"SDU\\\"},\\\"name\\\":\\\"大头鬼\\\"}\",\"handlerName\":\"functionInJs\"}');


## JAVA_CB_%s

Java 回调的: callbackStr= JAVA_CB_编号_时间戳


Message
{
	// 序列化的字符串
	data: String;

	// 回调Key
	callbackId: String;

	// JS方法名
	handlerName: String;
}



// Java call JS
functionInJS

## dispatchMessage
{"callbackId":"JAVA_CB_1_1302","data":"{\"location\":{\"address\":\"SDU\"},\"name\":\"大头鬼\"}","handlerName":"functionInJs"}


// messageJson
{"callbackId":"JAVA_CB_1_1296","data":"{\"location\":{\"address\":\"SDU\"},\"name\":\"大头鬼\"}","handlerName":"functionInJs"}
{"callbackId":"JAVA_CB_1_1296","data":"{\\\"location\\\":{\\\"address\\\":\\\"SDU\\\"},\\\"name\\\":\\\"大头鬼\\\"}","handlerName":"functionInJs"}
{\"callbackId\":\"JAVA_CB_1_1296\",\"data\":\"{\\\"location\\\":{\\\"address\\\":\\\"SDU\\\"},\\\"name\\\":\\\"大头鬼\\\"}\",\"handlerName\":\"functionInJs\"}
javascript:WebViewJavascriptBridge._handleMessageFromNative('{\"callbackId\":\"JAVA_CB_1_1296\",\"data\":\"{\\\"location\\\":{\\\"address\\\":\\\"SDU\\\"},\\\"name\\\":\\\"大头鬼\\\"}\",\"handlerName\":\"functionInJs\"}');




{"data":"hello bridge"}
{"data":"hello bridge"}
{\"data\":\"hello bridge\"}
javascript:WebViewJavascriptBridge._handleMessageFromNative('{\"data\":\"hello bridge\"}');





##shouldOverrideUrlLoading

yy://__QUEUE_MESSAGE__/


## flushMessageQueue 刷新消息队列
javascript:WebViewJavascriptBridge._fetchQueue();

##shouldOverrideUrlLoading
yy://return/_fetchQueue/[{"handlerName":"submitFromWeb","data":{"param":"中文ABC"},"callbackId":"cb_1_1542782599250"}]

##handlerReturnData
functionName=_fetchQueue
data=[{"handlerName":"submitFromWeb","data":{"param":"中文ABC"},"callbackId":"cb_1_1542782599250"}]





# Java 回调 Js dispatchMessage


Message
{
	// 序列化的字符串
	responseData: String;

	// 回调Key
	responseId: String;
}

{"responseData":"submitFromWeb exe, response data 中文 from Java","responseId":"cb_1_1542782599250"}
{\"responseData\":\"submitFromWeb exe, response data 中文 from Java\",\"responseId\":\"cb_1_1542782599250\"}
javascript:WebViewJavascriptBridge._handleMessageFromNative('{\"responseData\":\"submitFromWeb exe, response data 中文 from Java\",\"responseId\":\"cb_1_1542782599250\"}');






# JS 调 Java
JS: WebViewJavascriptBridge.callHandler('submitFromWeb', {'param':'中文ABC'}, function(response){alert(response);});


JS: messagingIframe.src =  'yy://__QUEUE_MESSAGE__/';

Java: ##shouldOverrideUrlLoading

Java: javascript:WebViewJavascriptBridge._fetchQueue();


JS: bizMessagingIframe.src = yy://return/_fetchQueue/[{"handlerName":"submitFromWeb","data":{"param":"中文ABC"},"callbackId":"cb_1_1542782599250"}]



# Java 调 JS
Java: xWalkWebView. callHandler(String handlerName, String data, CallBackFunction callBack)
Java: javascript:WebViewJavascriptBridge._handleMessageFromNative('{\"callbackId\":\"JAVA_CB_1_1296\",\"data\":\"{\\\"location\\\":{\\\"address\\\":\\\"SDU\\\"},\\\"name\\\":\\\"大头鬼\\\"}\",\"handlerName\":\"functionInJs\"}');