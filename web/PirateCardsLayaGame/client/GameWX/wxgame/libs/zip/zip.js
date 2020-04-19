!function(){"use strict";var e;!function(e){e.base64="base64",e.string="string",e.arraybuffer="arraybuffer"}(e||(e={}));class t{constructor(){this.assetId2Name={},this.zipId2Name={},this.zipAssets={},this.assetsDependencie={},this.prefabDependencie={},this.srcRootPath="",this.zipRootPath="",this.zipExt=".zip",this.assetName2Id={},this.assetId2ZipId={},this.assetId2DependencieZipNames={},this.assetName2DependencieZipNames={},this.assetId2DependencieZipPaths={},this.assetName2DependencieZipPaths={},this.assetName2DependencieAssetNames={},this.assetName2DependencieAssetPaths={},this.zipName2DependencieAssetNames={},this.tmpMap=new Map,this.tmpMap2=new Map}SetJson(e){window.assetManifest=this,this.assetId2Name=e.assetId2Name,this.zipId2Name=e.zipId2Name,this.zipAssets=e.zipAssets,this.assetsDependencie=e.assetsDependencie,this.prefabDependencie=e.prefabDependencie;var t=!1;if(this.assetsDependencie)for(let e in this.assetsDependencie){t=!0;break}t||(this.assetsDependencie=this.prefabDependencie);for(let e in this.assetId2Name){let t=this.assetId2Name[e];this.assetName2Id[t]=parseInt(e)}for(let e in this.zipAssets){let t=parseInt(e),s=this.zipAssets[e];for(let e of s)this.assetId2ZipId[e]=t}this.InitAssetDependencieZipPaths(),this.InitDebug()}InitAssetDependencieZipPaths(){for(let e in this.assetsDependencie)this.GetAssetDependencieZipPathList(parseInt(e))}InitDebug(){for(let i in this.assetsDependencie){var e=this.GetAssetName(i),t=this.assetName2DependencieAssetNames[e]=[],s=this.assetName2DependencieAssetPaths[e]=[],a=this.assetsDependencie[i];for(let e of a){let a=this.GetAssetName(e);t.push(a),s.push(this.GetAssetPathByAssetName(a))}}for(let e in this.zipAssets){var i=this.GetZipName(e);t=this.zipName2DependencieAssetNames[i]=[],a=this.zipAssets[e];for(let e of a)t.push(this.GetAssetName(e))}}HasAsset(e){return null!=this.GetAssetId(e)}HasAssetByPath(e){var t=this.GetAssetNameByPath(e);return this.HasAsset(t)}GetAssetId(e){return this.assetName2Id[e]}GetAssetName(e){return this.assetId2Name[e]}GetAssetNameByPath(e){return e.replace(this.srcRootPath,"")}GetAssetPathByAssetName(e){return this.srcRootPath+e}GetAssetZipId(e){return this.assetId2ZipId[e]}GetAssetZipName(e){let t=this.GetAssetZipId(e);return this.GetZipName(t)}GetAssetZipPath(e){let t=this.ToAssetId(e),s=this.GetAssetZipId(t),a=this.GetZipName(s);return a||console.error(`没找到资源的Zip asset=${e} `),this.GetZipPath(a)}GetAssetZipPathByPath(e){let t=this.GetAssetNameByPath(e);return this.GetAssetZipPath(t)}GetZipPath(e){return this.zipRootPath+e+this.zipExt}GetZipName(e){return this.zipId2Name[e]}ToAssetId(e){let t;return t="string"==typeof e?this.GetAssetId(e):e}GetAssetDependencieNameList(e){let t=this.ToAssetId(e),s=this.GetAssetName(t);return this.assetName2DependencieAssetNames[s]}GetAssetDependenciePathList(e){let t=this.ToAssetId(e),s=this.GetAssetName(t);return this.assetName2DependencieAssetPaths[s]}GetAssetDependenciePathListByAssetPath(e){let t=this.GetAssetNameByPath(e);return this.GetAssetDependenciePathList(t)}GetAssetDependencieZipNameList(e){let t=this.ToAssetId(e);if(this.assetId2DependencieZipNames[t])return this.assetId2DependencieZipNames[t];let s=[];if(!t)return console.error(`AssetManifest.GetAssetDependencieZipNameList,  assetId 不存在 assetId=${t},  asset=${e}`),s;let a=this.assetsDependencie[t];if(!a)return console.error(`AssetManifest.GetAssetDependencieZipNameList,  assetIdList 不存在,  asset=${this.GetAssetName(t)}`),s;var i=this.tmpMap;i.clear();for(let e of a){let t=this.GetAssetZipName(e);t&&(i.has(t)||(s.push(t),i.set(t,!0)))}i.clear();var n=this.GetAssetName(t);return this.assetId2DependencieZipNames[t]=s,this.assetName2DependencieZipNames[n]=s,s}GetAssetDependencieZipPathList(e){let t=this.ToAssetId(e);if(this.assetId2DependencieZipPaths[t])return this.assetId2DependencieZipPaths[t];let s=[],a=this.GetAssetDependencieZipNameList(t);for(let e of a){let t=this.GetZipPath(e);s.push(t)}var i=this.GetAssetName(t);return this.assetId2DependencieZipPaths[t]=s,this.assetName2DependencieZipPaths[i]=s,s}GetAssetListDependencieZipPathList(e){let t=[];if(0==e.length)return t;var s=this.tmpMap;s.clear();for(let a of e){let e=this.GetAssetDependencieZipPathList(a);for(let a of e)s.has(a)||(t.push(a),s.set(a,!0))}return s.clear(),t}GetEnumZipAssetDataType(t){let s=Laya.Loader.getTypeFromUrl(t);var a=Laya.Utils.getFileExtension(t);let i;switch(s){case"image":i=e.base64;break;default:switch(a){case"lmat":case"lh":i=e.string;break;default:i=e.arraybuffer}}return i}static get Instance(){return t._Instance||(t._Instance=new t),t._Instance}static async InitAsync(e,s,a,i){return t._Instance=await this.LoadAsync(e,s,a,i),t._Instance}static async LoadAsync(e,s,a,i){return new Promise(n=>{Laya.loader.load(e,Laya.Handler.create(null,e=>{let r=new t;s&&(r.srcRootPath=s),a&&(r.zipRootPath=a),i&&(r.zipExt=i),r.SetJson(e),n(r)}),null,Laya.Loader.JSON)})}}window.AssetManifest=t;class s{static InitCode(){(new s).InitCode()}InitCode(){var e=Laya.Loader;e.prototype.src_loadHttpRequestWhat=e.prototype._loadHttpRequestWhat,e.prototype._loadHttpRequestWhat=this._loadHttpRequestWhat,e.prototype.src_loadResourceFilter=e.prototype._loadResourceFilter,e.prototype._loadResourceFilter=this._loadResourceFilter,e.prototype.src_loadHttpRequest=e.prototype._loadHttpRequest,e.prototype._loadHttpRequest=this._loadHttpRequest,e.prototype.src_loadHtmlImage=e.prototype._loadHtmlImage,e.prototype._loadHtmlImage=this._loadHtmlImage,e.src_clearRes=e.clearRes,e.clearRes=s.clearRes}static clearRes(e){Loader.src_clearRes(e),g.enable&&g.Instance.OnClearResouceAsset(e)}onProgress(e){}onError(e){}onLoaded(e=null){}_loadResource(e,t){}src_loadHttpRequestWhat(e,t){}_loadHttpRequestWhat(e,t){Laya.Utils.getFileExtension(e)!=g.Instance.zipExtName&&g.Instance.HasManifestAssetByUrl(e)?this._loadHttpRequest(e,t,this,this.onLoaded,this,this.onProgress,this,this.onError):this.src_loadHttpRequestWhat(e,t)}src_loadResourceFilter(e,t){}_loadResourceFilter(e,t){Laya.Utils.getFileExtension(t)!=g.Instance.zipExtName&&g.Instance.HasManifestAssetByUrl(t)?this._loadResource(e,t):this.src_loadResourceFilter(e,t)}src_loadHttpRequest(e,t,s,a,i,n,r,o){}async _loadHttpRequest(e,t,s,a,i,n,r,o){Laya.Utils.getFileExtension(e)!=g.Instance.zipExtName?g.Instance.GetOrLoadAssetData(e,Handler.create(this,h=>{h?Laya.timer.frameOnce(1,this,()=>{n&&n.call(s,1),a.call(s,h)}):this.src_loadHttpRequest(e,t,s,a,i,n,r,o)})):this.src_loadHttpRequest(e,t,s,a,i,n,r,o)}src_loadHtmlImage(e,t,s,a,i){}async _loadHtmlImage(e,t,s,a,i){-1!=e.indexOf("Conventional/res3d/Conventional")&&console.error("_addHierarchyInnerUrls path=",e),-1!=e.indexOf("Langyabing/res3d/Conventional")&&console.error("Langyabing/res3d/Conventional path=",e),g.Instance.GetOrLoadAssetData(e,Handler.create(this,n=>{n?Laya.timer.frameOnce(1,this,()=>{this.src_loadHtmlImage(n,t,s,a,i)}):this.src_loadHtmlImage(e,t,s,a,i)}))}}s.UseAsync=!0;class a{constructor(){this.index=0,this.begin=0,this.end=0,this.responseList=[],this.progressList=[],this.sendIndex=-1,this._isAbort=!1,this._isComplete=!1}get rangeBegin(){return this.begin+this.loadedSize}get loadedSize(){for(var e=0,t=0,s=this.progressList.length;t<s;t++)e+=this.progressList[t];return e}Reset(){this.fileTask=null,this.begin=0,this.end=0,this.responseList.length=0,this.progressList.length=1,this.progressList[0]=0,this.sendIndex=-1,this._isAbort=!1,this._isComplete=!1}get isAbort(){return this._isAbort}get isComplete(){return this._isComplete}OnEnd(e){this._isAbort=e,this._isComplete=this.loadedSize==this.end,this.fileTask.OnBlockEnd(this)}MergeToBuff(e){for(var t=this.begin,s=0,a=this.responseList.length;s<a;s++){var i=this.responseList[s],n=new Int8Array(i);e.set(n,t),t+=i.byteLength}}static PoolGetItem(){var e;return(e=this.pool.length>0?this.pool.shift():new a).Reset(),e}static PoolRecoverItem(e){if(-1==this.pool.indexOf(e))return this.pool.push(e)}}a.pool=[];class i{static GetItem(){var e;return Laya.loader._loaderCount+n.useNum+i.useNum>=4?null:this.pool.length>0?(this.useNum++,(e=this.pool.shift()).__inpool=!1,e):(this.useNum++,(e=new XMLHttpRequest).__inpool=!1,e)}static RecoverItem(e){e.abort(),e.onreadystatechange=null,e.onprogress=null,e.onerror=null,e.__inpool?console.log("HttpRequestPool RecoverItem 多次"):(this.useNum--,e.__inpool=!0,this.checkWait())}static checkWait(){if(this.wait.length>0){var e=this.GetItem();if(e){this.wait.shift().runWith(e)}Laya.timer.frameOnce(1,i,this.checkWait,null,!0)}}static Request(e){let t=this.GetItem();t?e.runWith(t):(this.wait.push(e),Laya.timer.frameOnce(1,i,this.checkWait,null,!0))}}i.MaxNum=3,i.pool=[],i.currNum=0,i.useNum=0,i.wait=[];class n{static GetItem(){var e;return Laya.loader._loaderCount+n.useNum+i.useNum>=4?null:this.pool.length>0?(this.useNum++,(e=this.pool.shift()).__inpool=!1,e):(this.useNum++,(e=new XMLHttpRequest).__inpool=!1,e)}static RecoverItem(e){e.abort(),e.onreadystatechange=null,e.onprogress=null,e.onerror=null,e.__inpool?console.log("HttpRequestPool RecoverItem 多次"):(this.useNum--,e.__inpool=!0,this.checkWait())}static checkWait(){if(this.wait.length>0){var e=this.GetItem();if(e){this.wait.shift().runWith(e)}Laya.timer.frameOnce(1,n,this.checkWait,null,!0)}}static Request(e){let t=this.GetItem();t?e.runWith(t):(this.wait.push(e),Laya.timer.frameOnce(1,n,this.checkWait,null,!0))}}n.MaxNum=2,n.pool=[],n.currNum=0,n.useNum=0,n.wait=[];var r=Laya.Handler;class o{onEvent(e){if(4==this.xhr.readyState){var t=this.xhr.getResponseHeader("Content-Length");t?this.ResultCallbak(0,parseInt(t)):this.ResultCallbak(1,-1)}}onerror(e){console.warn("HRHead 请求文件头失败",this.url,e),this.ResultCallbak(1,-1)}ResultCallbak(e,t){this.callback&&(this.callbackObj?this.callback.call(this.callbackObj,e,t,this.url):this.callback(e,t,this.url)),this.callback=null,this.callbackObj=null,this.url=null,this.xhr&&(this.xhr.abort(),n.RecoverItem(this.xhr),this.xhr=null,o.RecoverItem(this))}Request(e,t,s){console.log("HRHead.Request",e),this.url=e,this.callback=t,this.callbackObj=s,n.Request(r.create(this,t=>{this.xhr=t,this.xhr.onreadystatechange=this.onEvent.bind(this),this.xhr.onerror=this.onerror.bind(this),this.xhr.open("HEAD",e,!0),this.xhr.send()}))}static GetItem(){return this.pool.length>0?this.pool.shift():this.currNum<this.MaxNum?(this.currNum++,new o):null}static RecoverItem(e){if(this.wait.length>0){let t=this.wait.shift();e.Request(t.url,t.callback,t.callbackObj)}else-1==this.pool.indexOf(e)&&this.pool.push(e)}static RequestSize(e,t,s){let a=this.GetItem();a?a.Request(e,t,s):this.wait.push({url:e,callback:t,callbackObj:s})}}o.MaxNum=2,o.currNum=0,o.pool=[],o.wait=[];var h=Laya.Handler;class l{get blockInfo(){return"block_"+this.block.index+", sendIndex="+this.block.sendIndex}onreadystatechange(e){this.block&&(this.xhr.readyState>=XMLHttpRequest.LOADING&&this.xhr.response&&(this.block.responseList[this.block.sendIndex]=this.xhr.response),4==this.xhr.readyState&&(this.xhr.status>=200&&this.xhr.status<300||this.xhr.response?this.OnEnd():console.error(this.blockInfo,"HRange 请求文件失败"," readyState="+this.xhr.readyState," status="+this.xhr.status,"response=",this.xhr.response,this.block.fileTask.url)))}onprogress(e){this.block.progressList[this.block.sendIndex]=e.loaded,this.block.fileTask.OnPorgess(e.loaded,e.total)}onabort(){console.warn(this.blockInfo,"onabort"),this.OnEnd(!0)}onerror(e){console.warn(this.blockInfo,e,this.block.fileTask.url),Laya.timer.frameOnce(10,this,this.Send,[!0])}OnEnd(e){this.block.OnEnd(e),this.block=null,this.xhr.abort(),i.RecoverItem(this.xhr),this.xhr=null,l.RecoverItem(this)}Send(e){var t=this.block;e&&(t.responseList[t.sendIndex]?t.sendIndex++:t.progressList[t.sendIndex]=0),this.xhr.abort(),this.xhr.responseType=t.fileTask.responseType,this.xhr.open("get",t.fileTask.url,!0),this.block.end<=0?this.xhr.setRequestHeader("Range","bytes=0- "):this.xhr.setRequestHeader("Range",`bytes=${t.rangeBegin}-${t.end}`),this.xhr.setRequestHeader("content-type","application/octet-stream"),this.xhr.send()}Request(e,t){e.sendIndex++,this.block=e,i.Request(h.create(this,e=>{this.xhr=e,this.xhr.onreadystatechange=this.onreadystatechange.bind(this),this.xhr.onprogress=this.onprogress.bind(this),this.xhr.onerror=this.onerror.bind(this),this.Send()}))}Abort(){this.xhr.abort()}static GetItem(){return this.pool.length>0?this.pool.shift():this.currNum<this.MaxNum?(this.currNum++,new l):null}static RecoverItem(e){if(this.wait.length>0){let t=this.wait.shift();e.Request(t)}else-1==this.pool.indexOf(e)&&this.pool.push(e)}static Request(e){let t=this.GetItem();t?t.Request(e):this.wait.push(e)}}l.MaxNum=2,l.currNum=0,l.pool=[],l.wait=[];class c{constructor(){this.responseType="",this.isEndRecoverBlockList=!1,this.isEndRecover=!1,this.blockList=[],this.blockEndCount=0,this.loadedSize=0,this.loadedRate=0}RequestSize(){o.RequestSize(this.url,this.OnGetSize,this)}OnGetSize(e,t,s){this.totalSize=t,this.SpliteBlock(),this.RequestBlocksList()}RequestBlocksList(){for(var e of(this.blockEndCount=0,this.blockList))e.isComplete?this.blockEndCount++:l.Request(e);this.blockEndCount>=this.blockList.length&&this.onEnd()}SpliteBlock(){var e,t=this.totalSize,s=c.MaxBlockNum,i=c.singleTmpFileSize,n=this.blockList,r=Math.floor(t/s),o=this.totalSize%s;if(t<i||t<=0)(e=a.PoolGetItem()).fileTask=this,e.index=0,e.begin=0,e.end=t<=0?-1:t-1,n.push(e);else for(var h=0;h<s;h++)(e=a.PoolGetItem()).fileTask=this,e.index=h,e.begin=h*r,e.end=(h+1)*r-1,h==s-1&&(e.end+=o),n.push(e)}Start(e,t="arraybuffer"){this.url=e,this.responseType=t,this.RequestSize()}OnBlockEnd(e){this.blockEndCount++,this.blockEndCount>=this.blockList.length&&this.onEnd()}onEnd(){this.Merge(),Laya.Loader.cacheRes(this.path,this.response),this.onCompleteHandler&&(this.callbackObj?this.onCompleteHandler.call(this.callbackObj,this.response,this.path):this.onCompleteHandler(this.response,this.path)),this.isEndRecoverBlockList&&this.RecoverBlockList(),this.isEndRecover&&this.PoolRecoverItem()}RecoverBlockList(){for(var e=0,t=this.blockList.length;e<t;e++){var s=this.blockList[e];a.PoolRecoverItem(s)}this.blockList.length=0}Merge(){"arraybuffer"==this.responseType||"moz-chunked-arraybuffer"==this.responseType||"ms-stream"==this.responseType?this.MergeArrayBuffer():this.MergeText()}MergeArrayBuffer(){if(1==this.blockList.length&&1==this.blockList[0].responseList.length)this.response=this.blockList[0].responseList[0];else{for(var e=new ArrayBuffer(this.totalSize),t=new Int8Array(e),s=0,a=this.blockList.length;s<a;s++){this.blockList[s].MergeToBuff(t)}this.response=e}}MergeText(){if(1==this.blockList.length&&1==this.blockList[0].responseList.length)this.response=this.blockList[0].responseList[0];else{for(var e=[],t=0,s=this.blockList.length;t<s;t++){var a=this.blockList[t];e.push(...a.responseList)}this.response=e.join()}}PoolRecoverItem(){this.url=null,this.totalSize=0,this.loadedSize=0,this.loadedRate=0,this.responseType="",this.response=null,this.isEndRecoverBlockList=!1,this.isEndRecover=!1,this.RecoverBlockList(),this.blockEndCount=0,this.onCompleteHandler=null,this.callbackObj=null,c.RecoverItem(this)}OnPorgess(e,t){if(this.totalSize>0){this.loadedSize=0;for(var s=0,a=this.blockList.length;s<a;s++)this.loadedSize+=this.blockList[s].loadedSize;this.loadedSize>0&&(this.loadedRate=this.loadedSize/this.totalSize)}else this.loadedSize=e,this.totalSize=t,this.loadedRate=this.loadedSize/this.totalSize;this.onProgresssHandler&&(this.callbackObj?this.onProgresssHandler.call(this.callbackObj,this.loadedRate):this.onProgresssHandler(this.loadedRate))}static GetItem(){return this.pool.length>0?this.pool.shift():new c}static RecoverItem(e){-1==this.pool.indexOf(e)&&this.pool.push(e)}static Request(e,t,s,a,i="arraybuffer",n=!0,r=!0){var o=Laya.Loader.getRes(e);if(o)return void(t&&(a?t.call(a,o,e):t(o,e)));var h=Laya.URL.formatURL(e);let l=this.GetItem();return l.path=e,l.onCompleteHandler=t,l.onProgresssHandler=s,l.callbackObj=a,l.isEndRecoverBlockList=n,l.isEndRecover=r,l.Start(h,i),l}static RequestList(e,t,s){let a=e.length;if(0==a)return void(t&&t.runWith(!0));s&&s.runWith(0);let i=0,n=()=>{i++,s&&s.runWith(i/a),i>=a&&t&&t.runWith(!0)},r=0,o=e=>{1==a&&s&&(r=Math.max(e,r),s.runWith(r))};for(var h=0;h<a;h++){var l=e[h];this.Request(l,n,o,null,"arraybuffer",!0,!0)}}}c.MaxBlockNum=2,c.singleTmpFileSize=5242880,c.pool=[],window.FileTask=c,window.FileBlock=a,window.HRHead=o,window.HRange=l,c.MaxBlockNum=5,c.singleTmpFileSize=5242880,o.MaxNum=5,l.MaxNum=5;class d{static loadPath(e,t,s){var a=!1;-1!=e.indexOf("res3d/")&&(-1==e.indexOf("Effect_100")&&-1==e.indexOf("Hero_100")||(a=!0)),a?Laya.loader.load(e,Laya.Handler.create(null,t=>{if(Laya.loader.clearRes(e),g.Instance.zipMap.has(e)){let t=g.Instance.zipMap.get(e);s.runWith(t)}else JSZip.loadAsync(t).then(e=>{s.runWith(e)}).catch(t=>{console.error(t,e),s.runWith(null)})}),null,t):c.Request(e,(t,a)=>{if(Laya.loader.clearRes(e),g.Instance.zipMap.has(e)){let t=g.Instance.zipMap.get(e);s.runWith(t)}else JSZip.loadAsync(t).then(e=>{s.runWith(e)}).catch(t=>{console.error(t,e),s.runWith(null)})})}static read(e,t,s,a){e.file(t).async(s).then(e=>{a.runWith(e)}).catch(e=>{console.error(e,t),a.runWith(null)})}}class p{static async MAwitFrame(e=1){return new Promise(t=>{Laya.timer.frameOnce(e,this,()=>{t()})})}static ResolveDelayCall(e,...t){Laya.timer.frameOnce(1,this,()=>{e(...t)})}static async Load3DAsync(e){return new Promise(t=>{Laya.loader.create(e,Laya.Handler.create(null,e=>{p.ResolveDelayCall(t,e)}))})}static Load3D(e,t,s){Laya.loader.create(e,Laya.Handler.create(null,e=>{s&&(t?s.call(t,e):s(e))}))}}window.AsyncUtil=p;class u{constructor(){this._loaderCount=0}static InitCode(){(new u).InitCode()}InitCode(){var e=Laya.LoaderManager;e.prototype.src_load=e.prototype.load,e.prototype.load=this.load,e.prototype.__loadWaitZipAsync=this.__loadWaitZipAsync,e.prototype.src_createLoad=e.prototype._createLoad,e.prototype._createLoad=this._createLoad,e.prototype.___createLoadWaitZipAsync=this.___createLoadWaitZipAsync}src_createLoad(e,t=null,s=null,a=null,i=null,n=null,r=1,o=!0,h=!1){return this}_createLoad(e,t=null,s=null,a=null,i=null,n=null,r=1,o=!0,h=!1){let l,c,d=!1,p=!1;return!g.enable||e instanceof Array||(d=(c=g.Instance).manifest.HasAssetByPath(e))&&(l=c.GetAssetZipPathByAssetUrl(e),p=c.HasZip(l)),!d||p?this.src_createLoad(e,t,s,a,i,n,r,o,h):(this.___createLoadWaitZipAsync(l,e,t,s,a,i,n,r,o,h),this)}async ___createLoadWaitZipAsync(e,t,s=null,a=null,i=null,n=null,r=null,o=1,h=!0,l=!1){return g.Instance.GetZip(e,Handler.create(this,()=>{this._loaderCount--;var e=Handler.create(this,e=>{this._loaderCount++,s&&s.runWith(e)});this.src_createLoad(t,e,a,i,n,r,o,h,l)})),this}src_load(e,t=null,s=null,a=null,i=1,n=!0,r=null,o=!1,h=Laya.WorkerLoader.enable){return this}load(e,t=null,s=null,a=null,i=1,n=!0,r=null,o=!1,h=Laya.WorkerLoader.enable){let l,c,d=!1,p=!1;return!g.enable||e instanceof Array||(d=(c=g.Instance).manifest.HasAssetByPath(e))&&(l=c.GetAssetZipPathByAssetUrl(e),p=c.HasZip(l)),!d||p?this.src_load(e,t,s,a,i,n,r,o,h):(this.__loadWaitZipAsync(l,e,t,s,a,i,n,r,o,h),this)}async __loadWaitZipAsync(e,t,s=null,a=null,i=null,n=1,r=!0,o=null,h=!1,l=Laya.WorkerLoader.enable){return g.Instance.GetZip(e,Handler.create(this,()=>{this._loaderCount--;var e=Handler.create(this,e=>{this._loaderCount++,s&&s.runWith(e)});this.src_load(t,e,a,i,n,r,o,h,l)})),this}}class m{static InitCode(){(new m).InitCode()}InitCode(){var e=Laya.Resource;e.prototype.src_destroy=e.prototype.destroy,e.prototype.destroy=this.destroy}src_destroy(){}destroy(){this.src_destroy(),g.enable&&this._url&&g.Instance.OnClearResouceAsset(this._url)}}class f{constructor(){this.list=[]}add(e){this.list.push(e)}run(){for(var e of this.list)e.run()}runWith(e){for(var t of this.list)t.runWith(e)}clear(){this.list.length=0,this.key=null}static Get(e){if(this.map.has(e))return this.map.get(e)}static GetOrCreate(e){if(this.map.has(e))return this.map.get(e);var t=Laya.Pool.createByClass(f);return t.key=e,this.map.set(e,t),t}static Add(e,t){this.GetOrCreate(e).add(t)}static Recover(e,t){t.clear(),this.map.delete(e),Laya.Pool.recoverByClass(t)}static Run(e){var t=this.Get(e);t?(t.run(),this.Recover(e,t)):console.warn("WaitCallbackList没有这个的监听了",e)}static RunWith(e,t){var s=this.Get(e);s?(s.runWith(t),this.Recover(e,s)):console.warn("WaitCallbackList没有这个的监听了",e)}}f.map=new Map;var L,y=Laya.Handler;class g{constructor(){this.zipExt=".zip",this.zipExtName="zip",this.srcRootPath="res3d/Conventional/",this.zipRootPath="",this.isPve01=!1,this.enablePve01=!1,this.resourceVersionManifestReverse=new Map,this.zipMap=new Map,this.assetMap=new Map,this.assetReferenceMap=new Map,this.zipUseAssetMap=new Map,this.loadImageCount=0,this.imageCount=0}static get Instance(){return g._Instance||(g._Instance=new g,window.zipManager=g._Instance),g._Instance}get manifest(){return this.enablePve01&&this.isPve01?this.manifestPve01:this._manifest}async InitAsync(e,s,a,i,n){!this._manifest||n?(i&&(this.zipExt=i,this.zipExtName=i.replace(".","")),await t.InitAsync(e,s,a,i),this._manifest=t.Instance,this.srcRootPath=s,this.zipRootPath=a,g.enable=!0,this.InitCode(),this.InitResourceVersion()):console.log("已经初始了Zip资源清单")}async InitPVE01(e){this.manifestPve01=await t.LoadAsync(e,this.srcRootPath,this.zipRootPath,this.zipExt),this.enablePve01=!0}InitCode(){g.isInitCode||(g.isInitCode=!0,s.InitCode(),u.InitCode(),m.InitCode())}InitResourceVersion(){this.resourceVersionManifestReverse.clear();let e=Laya.ResourceVersion.manifest;for(let t in e){let s=e[t];this.resourceVersionManifestReverse.set(s,t)}}GetZipUseAssetMap(e,t){if(this.zipUseAssetMap.has(e))return this.zipUseAssetMap.get(e);if(t){var s=new Map;return this.zipUseAssetMap.set(e,s),s}return null}AddZipUseAsset(e,t){var s=this.GetZipUseAssetMap(e,!0),a=s.getValueOrDefault(e)+1;s.set(t,a)}RemoveZipUseAsset(e,t){var s=this.GetZipUseAssetMap(e,!0),a=s.getValueOrDefault(e)-1;a<=0?s.delete(t):s.set(t,a)}AddAssetReference(e,t=1){this.assetReferenceMap.has(e)?this.assetReferenceMap.set(e,this.assetReferenceMap.get(e)+t):this.assetReferenceMap.set(e,t)}RemoveAssetReference(e,t=1){if(this.assetReferenceMap.has(e)){var s=this.assetReferenceMap.get(e)-t;s<0&&(s=0),this.assetReferenceMap.set(e,s)}}GetAssetReference(e){return this.assetReferenceMap.has(e)?this.assetReferenceMap.get(e):0}OnClearResouceAsset(e){let t=this.AssetUrlToPath(e);this.RemoveAssetReference(t)}DestroyUnusedAssets(){var e=[];for(var t of(this.assetReferenceMap.forEach((t,s)=>{if(t<=0&&this.assetMap.has(s)){e.push(s);this.assetMap.get(s);this.assetMap.delete(s);let t=this.manifest.GetAssetNameByPath(s),a=this.manifest.GetAssetZipPath(t);this.RemoveZipUseAsset(a,s)}}),this.DestroyUnusedZip(),e))this.assetReferenceMap.delete(t)}DestroyUnusedZip(){var e=[];for(var t of(this.zipUseAssetMap.forEach((t,s)=>{if(0==t.size&&(e.push(s),this.zipMap.has(s))){this.zipMap.get(s);this.zipMap.delete(s)}}),e))this.zipUseAssetMap.delete(t)}PrintAssetReferenceMap(){this.assetReferenceMap.forEach((e,t)=>{console.log(t,e)})}HasZip(e){return this.zipMap.has(e)}HasAsset(e){let t=this.AssetUrlToPath(e);return this.assetMap.has(t)}GetAssetZipPathByAssetUrl(e){let t=this.AssetUrlToName(e);return this.manifest.GetAssetZipPath(t)}AssetUrlToPath(e){if(window.AssetUrlCache){var t=AssetUrlCache.GetPath(e);if(t)return t}let s=e.replace(Laya.URL.basePath,"");return this.resourceVersionManifestReverse.has(s)?this.resourceVersionManifestReverse.get(s):s}AssetUrlToName(e){let t=this.AssetUrlToPath(e);return this.manifest.GetAssetNameByPath(t)}AssetNameToPath(e){return this.manifest.srcRootPath+e}ResFileNameToAssetPath(e){return this.manifest.srcRootPath+e+".lh"}AssetPathListToAssetNameList(e){let t=[];for(let s of e){let e=this.manifest.GetAssetNameByPath(s);t.push(e)}return t}GetZip(e,t){var s;this.zipMap.has(e)?(s=this.zipMap.get(e),t.runWith(s)):(f.Add(e,t),1==f.Get(e).list.length&&d.loadPath(e,Laya.Loader.BUFFER,y.create(this,t=>{t&&this.zipMap.set(e,t),f.RunWith(e,t)})))}HasManifestAssetByUrl(e){var t=this.AssetUrlToPath(e);return this.manifest.HasAssetByPath(t)}GetAssetData(t){var s,a=this.AssetUrlToPath(t);if(!this.manifest.HasAssetByPath(a))return null;return this.manifest.GetEnumZipAssetDataType(a)==e.base64&&this.loadImageCount++,this.assetMap.has(a)&&(s=this.assetMap.get(a),this.AddAssetReference(a)),s}GetOrLoadAssetData(t,s,a=!0){var i,n=this.AssetUrlToPath(t);if(!this.manifest.HasAssetByPath(n))return void s.runWith(null);this.manifest.GetEnumZipAssetDataType(n)==e.base64&&this.loadImageCount++,this.assetMap.has(n)?(i=this.assetMap.get(n),a&&this.AddAssetReference(n),s.runWith(i)):(f.Add(t,s),1==f.Get(t).list.length&&this.LoadAssetData(n,y.create(this,e=>{var s=this.GetAssetReference(n);s>0&&console.error("ZipManager.GetAssetDataAsync 已经存在创建的资源了",n,s),a&&this.AddAssetReference(n),this.assetMap.set(n,e),f.RunWith(t,e)})))}LoadAssetData(t,s){let a=this.manifest.GetAssetNameByPath(t),i=this.manifest.GetAssetZipPath(a),n=this.manifest.GetEnumZipAssetDataType(a);this.GetZip(i,y.create(this,r=>{if(!r)return console.log("没有Zip",i,t),void s.runWith(null);d.read(r,a,n,y.create(this,a=>{if(null==a)return console.log("zip读取资源失败",i,t),void s.runWith(null);switch(n){case e.string:a=JSON.parse(a);break;case e.base64:a="data:image/png;base64,"+a,this.imageCount++}this.AddZipUseAsset(i,t),s.runWith(a)}))}))}async LoadAssetZipListAsync(e,t,s){let a=this.AssetPathListToAssetNameList(e);var i=(e,a,i)=>{s&&(t?s.call(t,e,a,Math.ceil(e/a*100),i):s(e,a,Math.ceil(e/a*100),i))};let n=this.manifest.GetAssetListDependencieZipPathList(a);return new Promise(e=>{i(0,n.length,"");var t=0,s=n.length;if(0!=s)for(let a=0,r=n.length;a<r;a++){let r=n[a];this.zipMap.has(r)?(i(++t,s,r),t>=s&&p.ResolveDelayCall(e)):d.loadPath(r,Laya.Loader.BUFFER,y.create(this,a=>{this.zipMap.set(r,a),i(++t,s,r),t>=s&&e()}))}else p.ResolveDelayCall(e)})}async ReadAllZipAsync(t,s,a){return new Promise(i=>{let n=[];this.zipMap.forEach((e,t)=>{n.push(t)});var r=(e,a,i)=>{s&&(t?s.call(t,e,a,Math.ceil(e/a*100),i):s(e,a,Math.ceil(e/a*100),i))},o=(e,s,i)=>{a&&(t?a.call(t,e,s,Math.ceil(e/s*100),i):a(e,s,Math.ceil(e/s*100),i))};r(0,n.length,"");var h=0,l=0,c=new Map;for(let e=0,t=n.length;e<t;e++){let t=n[e],s=this.zipMap.get(t),a=[];for(let e in s.files){if(!s.files[e].dir){let t=this.AssetNameToPath(e);if(this.assetMap.has(t))continue;a.push(e),h++}}c.set(t,a)}if(console.log("assetNameTotal=",h),0!=h)for(let t=0,s=n.length;t<s;t++){let s=n[t],a=this.zipMap.get(s),u=c.get(s);o(0,u.length,"");for(let t=0,n=u.length;t<n;t++){let c=u[t],m=this.AssetNameToPath(c),f=this.manifest.GetEnumZipAssetDataType(c);d.read(a,c,f,y.create(this,a=>{if(l++,a)switch(f){case e.string:a=JSON.parse(a);break;case e.base64:a="data:image/png;base64,"+a,this.imageCount++}var d=this.GetAssetReference(m);d>0&&console.error("ZipManager.ReadAllZipAsync asset 已经存在创建的资源了",m,d),this.assetMap.set(m,a),r(l,h,s),o(t,n,c),l>=h&&p.ResolveDelayCall(i)}))}}else p.ResolveDelayCall(i)})}async GetZipAsync(e){return new Promise(t=>{this.GetZip(e,y.create(this,e=>{t(e)}))})}async GetOrLoadAssetDataAsync(e){return new Promise(t=>{this.GetOrLoadAssetData(e,y.create(this,e=>{t(e)}))})}}g.enable=!1,g.isInitCode=!1,window.ZipManager=g;class A{static InitCode(){(new A).InitCode()}InitCode(){var e=Laya.Loader;e.prototype.src_load=e.prototype.load,e.prototype.load=this.load,e.prototype.src_onLoaded=e.prototype.onLoaded,e.prototype.onLoaded=this.onLoaded,e.prototype.src_endLoad=e.prototype.endLoad,e.prototype.endLoad=this.endLoad,e.prototype.src_onError=e.prototype.onError,e.prototype.onError=this.onError}src_onError(e){}onError(e){b.onLoadError(this.url),this.src_onError(e)}src_endLoad(e=null){}endLoad(e=null){b.onLoadEnd(this.url),this.src_endLoad(e)}src_onLoaded(e=null){}onLoaded(e=null){b.onLoaded(this.url,e),this.src_onLoaded(e)}src_load(e,t=null,s=!0,a=null,i=!1,n=Laya.WorkerLoader.enable){}load(e,t=null,s=!0,a=null,i=!1,n=Laya.WorkerLoader.enable){b.onLoadBegin(e),this.src_load(e,t,s,a,i,n)}}class M{static InitCode(){(new M).InitCode()}InitCode(){var e=Laya.LoaderManager;e.prototype.src_createOne=e.prototype._createOne,e.prototype._createOne=this._createOne,e.prototype.src_create=e.prototype._create,e.prototype._create=this._create}src_createOne(e,t,s=null,a=null,i=null,n=null,r=null,o=1,h=!0){}_createOne(e,t,s=null,a=null,i=null,n=null,r=null,o=1,h=!0){b.onCreateOnceBegin(e);var l=Handler.create(this,t=>{s&&(b.onCreateOnceEnd(e,t),s.runWith(t))});this.src_createOne(e,t,l,a,i,n,r,o,h)}src_create(e,t,s=null,a=null,i=null,n=null,r=null,o=1,h=!0){}_create(e,t,s=null,a=null,i=null,n=null,r=null,o=1,h=!0){b.onCreateBegin(e);var l=Handler.create(this,t=>{s&&(b.onCreateEnd(e),s.runWith(t))});this.src_create(e,t,l,a,i,n,r,o,h)}}class I{static InitCode(){(new I).InitCode()}InitCode(){var e=Laya3D;e.src_endLoad=e._endLoad,e._endLoad=this._endLoad}src_endLoad(e,t=null,s=null){}_endLoad(e,t=null,s=null){b.onLaya3DEnd(e.url,t),this.src_endLoad(e,t,s)}}!function(e){e.Begin="Begin",e.LoadedSucess="LoadedSucess",e.LoadedFail="LoadedFail"}(L||(L={}));class b{static Init(){this.enable=!0,A.InitCode(),M.InitCode(),I.InitCode()}static onLaya3DBegin(e){this.laya3dStateMap.set(e,L.Begin);var t=0;this.laya3dBeginNumMap.has(e)&&(t=this.laya3dBeginNumMap.get(e)),this.laya3dBeginNumMap.set(e,t+1)}static onLaya3DEnd(e,t){this.laya3dStateMap.set(e,t?L.LoadedSucess:L.LoadedFail);var s=0;this.laya3dEndNumMap.has(e)&&(s=this.laya3dEndNumMap.get(e)),this.laya3dEndNumMap.set(e,s+1)}static onCreateOnceBegin(e){this.createrOnceStateMap.set(e,L.Begin);var t=0;this.createOnceBeginNumMap.has(e)&&(t=this.createOnceBeginNumMap.get(e)),this.createOnceBeginNumMap.set(e,t+1)}static onCreateOnceEnd(e,t){this.createrOnceResMap.set(e,t),this.createrOnceStateMap.set(e,t?L.LoadedSucess:L.LoadedFail);var s=0;this.createOnceEndNumMap.has(e)&&(s=this.createOnceEndNumMap.get(e)),this.createOnceEndNumMap.set(e,s+1)}static onCreateBegin(e){this.createrStateMap.set(e,L.Begin);var t=0;this.createeBeginNumMap.has(e)&&(t=this.createeBeginNumMap.get(e)),this.createeBeginNumMap.set(e,t+1)}static onCreateEnd(e){this.createrStateMap.set(e,L.LoadedSucess);var t=0;this.createEndNumMap.has(e)&&(t=this.createEndNumMap.get(e)),this.createEndNumMap.set(e,t+1)}static onPrefabBegin(e){if(this.enable){this.prefabStateMap.set(e,L.Begin);var t=0;this.prefabBeginNumMap.has(e)&&(t=this.prefabBeginNumMap.get(e)),this.prefabBeginNumMap.set(e,t+1)}}static onPrefabEnd(e){if(this.enable){this.prefabStateMap.set(e,L.LoadedSucess);var t=0;this.prefabEndNumMap.has(e)&&(t=this.prefabEndNumMap.get(e)),this.prefabEndNumMap.set(e,t+1)}}static onLoadBegin(e){this.stateMap.set(e,L.Begin);var t=0;this.loadBeginNumMap.has(e)&&(t=this.loadBeginNumMap.get(e)),this.loadBeginNumMap.set(e,t+1)}static onLoaded(e,t){"res/res3dzip/Hero_0001_LongQi_Skin1.zip"==e&&console.log(1),t?this.stateMap.set(e,L.LoadedSucess):this.stateMap.set(e,L.LoadedFail);var s=0;this.loadedNumMap.has(e)&&(s=this.loadedNumMap.get(e)),this.loadedNumMap.set(e,s+1)}static onLoadEnd(e){"res/res3dzip/Hero_0001_LongQi_Skin1.zip"==e&&console.log(1);var t=0;this.loadEndNumMap.has(e)&&(t=this.loadEndNumMap.get(e)),this.loadEndNumMap.set(e,t+1)}static onLoadError(e){var t=0;this.loadErrorNumMap.has(e)&&(t=this.loadErrorNumMap.get(e)),this.loadErrorNumMap.set(e,t+1)}static GetInfo(e){return`Loader: ${this.stateMap.get(e)},  beginNum=${this.loadBeginNumMap.get(e)},  loadedNum=${this.loadedNumMap.get(e)},  endNum=${this.loadEndNumMap.get(e)}, ErrorNum=${this.loadErrorNumMap.get(e)},  ${e}`}static GetPrefabInfo(e){return`Prefab: ${this.prefabStateMap.get(e)},  beginNum=${this.prefabBeginNumMap.get(e)},  endNum=${this.prefabEndNumMap.get(e)},  ${e}`}static GetCreateOnceInfo(e){return`CreateOnce: ${this.createrOnceStateMap.get(e)},  beginNum=${this.createOnceBeginNumMap.get(e)},  endNum=${this.createOnceEndNumMap.get(e)},  ${e}`}static GetCreateInfo(e){return`Create: ${this.createrStateMap.get(e)},  beginNum=${this.createeBeginNumMap.get(e)},  endNum=${this.createEndNumMap.get(e)},  ${e}`}static PrintPrefabAssetsInfo(e){if(!g.Instance.manifest)return void console.warn("没有ZipManager.Instance.manifest");console.log("CheckPrefab:",e);let t=g.Instance.AssetUrlToName(e),s=g.Instance.manifest.GetAssetDependenciePathList(t);for(let e of s){let t=this.createrOnceStateMap.get(e),s=this.laya3dStateMap.get(e),a=`${t}, laya3dState=${s},  createOnceBeginNumMap=${this.createOnceBeginNumMap.get(e)},  createOnceEndNumMap=${this.createOnceEndNumMap.get(e)}, ${e}, ${this.createrOnceResMap.get(e)}`;t!=L.LoadedSucess||s!=L.LoadedSucess?console.warn(a):console.log(a)}}static Check(){this.CheckNoLoaded()}static CheckNoLoaded(){console.log("CheckNoLoaded"),this.stateMap.forEach((e,t)=>{e!=L.LoadedSucess&&console.warn(this.GetInfo(t))}),this.loadErrorNumMap.forEach((e,t)=>{console.error(this.GetInfo(t))}),this.prefabStateMap.forEach((e,t)=>{e!=L.LoadedSucess&&console.warn(this.GetPrefabInfo(t))}),this.createrOnceStateMap.forEach((e,t)=>{e!=L.LoadedSucess&&console.warn(this.GetCreateOnceInfo(t))}),this.createrStateMap.forEach((e,t)=>{e!=L.LoadedSucess&&console.warn(this.GetCreateInfo(t))}),console.log("检测预设哪个文件没加载完成"),this.prefabStateMap.forEach((e,t)=>{e!=L.LoadedSucess&&this.PrintPrefabAssetsInfo(t)})}}b.enable=!1,b.stateMap=new Map,b.loadBeginNumMap=new Map,b.loadedNumMap=new Map,b.loadEndNumMap=new Map,b.loadErrorNumMap=new Map,b.prefabStateMap=new Map,b.prefabBeginNumMap=new Map,b.prefabEndNumMap=new Map,b.createrOnceResMap=new Map,b.createrOnceStateMap=new Map,b.createOnceBeginNumMap=new Map,b.createOnceEndNumMap=new Map,b.createrStateMap=new Map,b.createeBeginNumMap=new Map,b.createEndNumMap=new Map,b.laya3dStateMap=new Map,b.laya3dBeginNumMap=new Map,b.laya3dEndNumMap=new Map,window.DebugResources=b;var R=Laya.Handler;class N{constructor(e,t){this.assetPathList=[],this.maxLoader=2,this.isStop=!1,this.total=0,this.loadIndex=0,this.unzipIndex=0,this.loadZipIndex=0,this.loadedZipIndex=0,this.loadZipOnceNum=10,this.zipPathList=e,this.assetPathList=t,this.loadIndex=0,this.unzipIndex=0,this.total=e.length,this.maxLoader=Laya.loader.maxLoader-1,this.maxLoader=Math.max(this.maxLoader,2)}get IsWait(){return Laya.loader._loaderCount>=this.maxLoader}async StartAsync(){this.isStop=!1,await this.LoadListAsync(),await this.UnzipListAsync()}Start(e,t){if(0==this.total)return void(e&&e.run());let s=Laya.timer.currTimer;this.LoadList(R.create(this,()=>{console.log("加载Zip完成",Laya.timer.currTimer-s);let a=Laya.timer.currTimer;this.LoadZipList(R.create(this,()=>{console.log("装载Zip完成",Laya.timer.currTimer-a);let i=Laya.timer.currTimer;this.UnzipList(R.create(this,()=>{console.log("解压zip完成",Laya.timer.currTimer-i),console.log("加载总费时",Laya.timer.currTimer-s),t&&t.recover(),e&&e.run()}),R.create(this,e=>{t&&t.runWith(.3*e+.7)},null,!1))}),R.create(this,e=>{t&&t.runWith(.2*e+.5)},null,!1))}),R.create(this,e=>{t&&t.runWith(.5*e)},null,!1))}Stop(){this.isStop=!0}LoadList(e,t){0!=this.total?this.LoadList2(R.create(this,s=>{0==s?Laya.timer.frameOnce(30,this,()=>{this.LoadList(e)}):(t&&(t.runWith(1),t.recover()),e&&e.runWith(s))}),t):e&&e.run()}LoadList2(e,t){c.RequestList(this.zipPathList,e,t)}LoadZipList(e,t){if(0!=this.total)for(var s=0,a=this.zipPathList.length,i=0;i<a;i++)g.Instance.GetZip(this.zipPathList[this.loadZipIndex],R.create(this,()=>{s++,t&&t.runWith(s/this.total),s>=this.total&&(t&&t.recover(),e&&e.run())}));else e&&e.run()}LoadZipOnce(e,t){for(let s=0;s<this.loadZipOnceNum&&(g.Instance.GetZip(this.zipPathList[this.loadZipIndex],R.create(this,()=>{this.loadedZipIndex++,t&&t.runWith(this.loadedZipIndex/this.total),this.loadedZipIndex>=this.total&&(t&&t.recover(),e&&e.run())})),this.loadZipIndex++,!(this.loadZipIndex>=this.total));s++);this.loadZipIndex>=this.total||Laya.timer.frameOnce(1,this,this.LoadZipOnce,[e,t])}UnzipList(e,t){var s=0,a=this.assetPathList.length;if(0!=this.total)for(let i=0;i<a;i++){let n=this.assetPathList[i];g.Instance.GetOrLoadAssetData(n,R.create(this,()=>{s++,t&&t.runWith(s/a),s>=a&&(t&&t.recover(),e&&e.run())}),!1)}else e&&e.run()}async LoadListAsync(){if(0!=this.total)for(;this.loadIndex<this.total&&!this.isStop&&(this.IsWait&&await p.MAwitFrame(),!this.isStop);){let e=this.zipPathList[this.loadIndex];if(await g.Instance.GetZipAsync(e),this.loadIndex++,this.isStop)break}}async UnzipListAsync(){if(0==this.total||this.isStop)return;this.unzipIndex=0,this.total=this.assetPathList.length;for(;this.unzipIndex<this.total&&!this.isStop;){for(let e=0;e<5&&!(this.unzipIndex>=this.total||this.isStop);e++){let t=this.assetPathList[this.unzipIndex];e<4?g.Instance.GetOrLoadAssetDataAsync(t):await g.Instance.GetOrLoadAssetDataAsync(t),this.unzipIndex++}if(this.isStop)break}}}class v{constructor(e){this.maxLoader=5,this.isStop=!1,this.total=0,this.loadIndex=0,this.assetPathList=e,this.loadIndex=0,this.total=e.length,this.maxLoader=Laya.loader.maxLoader-1,this.maxLoader=Math.max(this.maxLoader,2)}get IsWait(){return Laya.loader._loaderCount>=this.maxLoader}async StartAsync(){this.isStop=!1,await this.LoadListAsync()}Stop(){this.isStop=!0}LoadList(e,t){if(0!=this.total){var s=Laya.timer.currTimer,a=0;for(let i=0;i<this.total;i++){let n=this.assetPathList[i];Laya.loader.create(n,Laya.Handler.create(null,i=>{a++,t&&t.runWith(a/this.total),a>=this.total&&(console.log("加载预设完成",Laya.timer.currTimer-s),e&&e.run())}))}}else e&&e.run()}async LoadListAsync(){if(0==this.total)return;for(;this.loadIndex<this.total&&!this.isStop&&(this.IsWait&&await p.MAwitFrame(),!this.isStop);){for(let e=0;e<5&&!(this.loadIndex>=this.total||this.isStop);e++){let t=this.assetPathList[this.loadIndex];e<4?p.Load3D(t):await p.Load3DAsync(t),this.loadIndex++}if(this.isStop)break;if(this.isStop)break}}}var _=Laya.Handler;class P{static get Instance(){return P._Instance||(P._Instance=new P,window.prefabManager=P._Instance),P._Instance}Init(e){this.srcRootPath=e}ResFileNameToAssetPath(e){return this.srcRootPath+e+".lh"}async LoadPrefabListAsync(e,t,s){return new Promise(a=>{let i=0,n=e.length;if(0!=n)for(let r of e){let e=this.ResFileNameToAssetPath(r);b.onPrefabBegin(e),Laya.loader.create(e,Laya.Handler.create(null,r=>{i++,b.onPrefabEnd(e),s&&(t?s.call(t,i,n,Math.ceil(i/n*100),e,r):s(i,n,Math.ceil(i/n*100),e,r)),i>=n&&p.ResolveDelayCall(a)}))}else p.ResolveDelayCall(a)})}StopPreload(){this.preloadZip&&this.preloadZip.Stop(),this.preloadAsset&&this.preloadAsset.Stop(),this.preloadZip=null,this.preloadAsset=null}LoadPrefabList(e,t,s=!0,a,i){if(this.StopPreload(),0==e.length)return void(a&&a.run());var n=g.Instance.manifest,r=[],o=new Map;for(let t of e)o.set(t,!0),r.push(t);for(let t of e){if(Laya.Loader.getRes(t))continue;if(!n.HasAssetByPath(t)){console.warn("Zip 文件清单中不存在资源",t);continue}let e=n.GetAssetDependenciePathListByAssetPath(t);if(e)for(let t of e){if(o.has(t))continue;Laya.Loader.getRes(t)||(r.push(t),o.set(t,!0))}}let h=g.Instance.AssetPathListToAssetNameList(t),l=n.GetAssetListDependencieZipPathList(h);var c=[];for(var d of l)g.Instance.HasZip(d)||c.push(d);l=c,this.preloadZip=new N(l,r),this.preloadAsset=new v(t),this.preloadZip.Start(_.create(this,()=>{s?this.preloadAsset.LoadList(_.create(this,()=>{i&&i.recover(),a&&a.run()}),_.create(this,e=>{i&&i.runWith(.3*e+.7)},null,!1)):(i&&i.recover(),a&&a.run())}),_.create(this,e=>{s?i&&i.runWith(.7*e):i&&i.runWith(e)},null,!1))}}window.PrefabManager=P,window.AssetManifest=t,window.AsyncUtil=p,window.JsZipAsync=d,window.ZipLoader=s,window.ZipManager=g,window.PrefabManager=P,window.DebugResources=b}();