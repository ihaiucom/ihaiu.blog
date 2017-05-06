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
$get_url      = "http://www.xxbiquge.com/5_5422/";

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



$root = "ztj";
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
preg_match_all("/\<dd\>\<a\ href=\"(.*?)\"(.*?)\>(.*?)\<\/a\>\<\/dd\>/x", $content, $matches);

$count = count($matches[3]);

$isDown = $get_begin == "" || is_null($get_begin);
for($i = 0; $i < $count; $i ++)
{
  if($isDown == false)
  {
    if(strpos($matches[3][$i], $get_begin))
    {
        $isDown = true;
    }
    else
    {
      continue;
    }
  }

  if(strpos($matches[3][$i], "今天没有更新"))
  {
    continue;
  }

  $name = $matches[3][$i];
  $name = preg_replace("/[\.,\?,\,]/", " ",$name);
  $url = "http://www.xxbiquge.com" . $matches[1][$i];

  echo $i . " " . $name . " " . $url . "<br>\n";


  $content=file_get_contents($url );
  preg_match("/id=\"content\"\>(.*?)\<\/div\>/", $content, $matcheBody);
  // print_r($matcheBody);
  $body = $matcheBody[1];
  $body = str_replace("&nbsp;", " ", $body);
  $body = str_replace("<br />", " \r\n", $body);
  $body = str_replace("纯文字在线阅读本站域名手机同步阅读请访问 ", " \r\n", $body);
  $body = str_replace("最快更新，无弹窗阅读请。", " \r\n", $body);

  $body = $name . "\r\n" . $body;
  $myfile = fopen($root . "/" .$i . " " . $name. ".txt", "w") or die("Unable to open file!");
 
  fwrite($myfile, $body );
  fclose($myfile);
  
}

// if(preg_match("/var\ datas=\(FonHen_JieMa\(\'(.*)\'\)\.split\(\'\&\'\)/i", $content, $matches))
// {

//     $mp3path = FonHen_JieMa($matches[1]);
//     print $mp3path . "<br>\n";

//     if($get_down)
//     {
//       $conn=file_get_contents($mp3path );
//       $myfile = fopen($root . "/" .$i . ".m4a", "w") or die("Unable to open file!");
 
//       fwrite($myfile, $conn);
//       fclose($myfile);
//     }
// } 


?>