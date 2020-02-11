function OnClickReplace()
{

    var inTextearea 	= document.getElementById('inTextearea');
    var outTextearea 	= document.getElementById('outTextearea');
    var txt:string 			= inTextearea.value;
    var lines = txt.split('\n');
    var outArr = [];
    for(var i = 0; i < lines.length; i ++)
    {
        var line = lines[i];
        line = line.trim();
        if(line == "")
            continue;
        
        line = line.replace(/: *number/, "");
        line = line.replace(/ *public /, "");
        line = line.replace(/ *private /, "");
        line = line.replace(/ *protected /, "");
        line = line.replace(/;/, "");
        var arr = line.split('=');
        var field = arr[0];
        outArr.push(field);
    }

    var outStr = "";
    for(var i = 0; i < outArr.length; i ++)
    {
        outStr += "get() { return this.buff["+i+"]; } ";
        outStr += "set(v) { this.buff["+i+"] = v;} ";
    }

   
    outTextearea.value = outStr;
}
