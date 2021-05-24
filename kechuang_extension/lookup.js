//http://bbs.kechuang.org/read-kc-tid-54219.html

var debug=false;
function myFunction()
{
	try{
		var map; //dictionary
		var floors=$(".readContent");	//获得各楼层
		var floor;	//每个楼层
		if (floors.length > 0 )
		{
			if (debug==true){alert("楼层数"+ floors.length);}//debug 显示楼层数
			for(i=0;i<floors.length;i++)
			{
				floor=$(floors[i]).html();
				$(floors[i]).html(autoReplace(floor));	//call autoReplace()
			}
		}
	}catch(e){
		alert(e);
	}
}

function autoReplace(floor)
{try{
	var patten=new RegExp("【\\d{4}(\\s\\d{4})*】","g");
	result=floor.match(patten);
	if (result==null)	//无敏感词
	{
		return floor;
	}
	if (debug==true){alert("命中")};
	for (j=0;j<result.length;j++)	//每次抓取一个单词
	{
		
		var translated="";	//翻译后的单词
		if (debug==true){alert("单词"+result[j]);}	//debug
		var wordlist=((result[j].replace("【","")).replace("】","")).split(" ");	//拆字
		if (debug==true){alert("拆词"+wordlist);}	//debug
		for (k=0;k<wordlist.length;k++)//逐字翻译
		{
			translated+=search(wordlist[k]);
		}
		//翻译完成后准备替换/追加原文
		//为防止相同词汇多次重覆替换，已经被替换的原文会被加上特殊标记
		var oriWord=(result[j].replace(" ","&nbsp"));
		floor=floor.replace(result[j],"<strike>"+oriWord+"</strike><b>"+translated+"</b>");
	}
	return floor;
}catch(e)
	{
		alert(e);
		return floor;
	}
}

function search(key)
{
	value=getMap(key);
	return value;
}

////
$(document).ready(myFunction);