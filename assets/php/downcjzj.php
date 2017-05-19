<?php

error_reporting(E_ERROR); 
date_default_timezone_set('PRC');

function deleteDir( $dir )
{
  if(rmdir($dir) == false && is_dir($dir))
  {
      if($dp = opendir($dir))
      {
          while ($file = readdir($dp) != false) 
          {
              if(is_dir($file) && $file != "." && $file != "..")
              {
                deleteDir($file);
              }
              else
              {
                unlink($file);
              }
          }

          $closedir($dp);
      }
      else
      {
        exit("No permission");
      }
  }
}

function FonHen_JieMa($u){
  $arr = explode("*", $u);
  $num = count($arr);
  $str = "";
  for($i = 1; $i < $num; $i++)
  {
      $str = $str . (chr($arr[$i]));
  }
  $arr = explode("&", $str);
  $str = $arr[0];
  return $str;
}


$get_down     = false;
$get_replace  = false;
$get_begin    = "";
$get_end      = 285;
$get_url      = "http://www.23us.com/html/42/42242/";

if(is_array($_GET) && count($_GET)>0)//判断是否有Get参数 
{


  if(isset($_GET["begin"]))
  { 
    $get_begin = $_GET["begin"];
  } 

  if(isset($_GET["end"]))
  { 
    $get_end = $_GET["end"];
  } 

  if(isset($_GET["replace"]))
  { 
    $get_replace= true;
  } 
   
  if(isset($_GET["down"]))
  { 
    $get_down= true;
  } 
} 



$root = "cjzj";
if(is_dir($root))
{
  if($get_replace)
  {
    // deleteDir($root);

    $message = shell_exec("rm -rf " . $root);
    echo $message;
  }
}
else
{
  mkdir($root , 0777);
}


// echo "begin:" . $get_begin;
// echo "end:" . $get_end;

$url = $get_url ;

$content=file_get_contents($url );

// preg_match_all("/id=\"list\"\>.*\<\/dl\>/s", $content, $matches);
// preg_match_all("/\<dd\>\<a\ href=\"(.*?)\"(.*?)\>(.*?)\<\/a\>\<\/dd\>/x", $content, $matches);

$content = iconv("GB2312","UTF-8",$content);
preg_match_all("/\<td\ class=\"L\"\>\<a\ href=\"(.*?)\"\>(.*?)\<\/a\>\<\/td\>/xs", $content, $matches);

// print_r($matches);
$count = count($matches[1]);

$isDown = $get_begin == "" || is_null($get_begin);
for($i = 0; $i < $count; $i ++)
{
  $name = $matches[2][$i];
  if($isDown == false)
  {
    if(strpos($name, $get_begin))
    {
        $isDown = true;
    }
    else
    {
      continue;
    }
  }
  // echo strpos($name, "请假") . "   " . (!empty(strpos($name, "请假")) ? 1 : 0). "\n";
  if(!empty(strpos($name, "没有更新")) || !empty(strpos($name, "无更新")) || !empty(strpos($name, "的求一下月票")) 
    || !empty(strpos($name, "求票")) 
    || !empty(strpos($name, "感谢大家"))
    || !empty(strpos($name, "感谢，"))
    || !empty(strpos($name, "及感谢"))
    || !empty(strpos($name, "11月份，雄起！求保底月票"))
    || !empty(strpos($name, "最后的一个月"))
    || !empty(strpos($name, "请假"))
    || !empty(strpos($name, "总结"))
    || !empty(strpos($name, "选票"))
    
    )
  {
    continue;
  }

  $name = preg_replace("/[\.,\?,\,]/", " ",$name);
  $url = $get_url . $matches[1][$i];


  echo $i . " " . $name . " " . $url . "<br>\n";
  $content=file_get_contents($url );
  // echo $content;
  preg_match("/id=\"contents\"\>(.*?)\<\/dd\>/s", $content, $matcheBody);
  // print_r($matcheBody);
  $body = $matcheBody[1];
  $body = iconv("GB2312","UTF-8",$body);
  $body = str_replace("&nbsp;", " ", $body);
  $body = str_replace("<br />", " \r\n", $body);
  $body = str_replace("()", " \r\n", $body);
  // $body = str_replace("纯文字在线阅读本站域名手机同步阅读请访问 ", " \r\n", $body);
  // $body = str_replace("最快更新，无弹窗阅读请。", " \r\n", $body);
  $body = str_replace("<a href=http://www.qidian.com>起点中文网www.qidian.com欢迎广大书友光临阅读，最新、最快、最火的连载作品尽在起点原创！&lt;/a&gt;;", " \r\n", $body);
  $body = str_replace("ps：  第一更到。今天，月票能涨到450吗？", " \r\n", $body);


  $body = $name . "\r\n" . $body;
  $myfile = fopen($root . "/" .$i . " " . $name. ".txt", "w") or die("Unable to open file!");
 
  fwrite($myfile, $body );
  fclose($myfile);
}


?>