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


$get_replace  = false;
$get_begin    = 285;
$get_end      = 285;
$get_url      = "http://m.woaitingshu.com/video/3619-0-{0}.html";

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
   
} 



$root = "ztj";
if(is_dir($root))
{
  if(!$get_replace)
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

for($i = $get_begin; $i <= $get_end; $i++)
{
  $url = str_replace("{0}", $i, $get_url );

  $content=file_get_contents($url );

  if(preg_match("/var\ datas=\(FonHen_JieMa\(\'(.*)\'\)\.split\(\'\&\'\)/i", $content, $matches))
  {

      $mp3path = FonHen_JieMa($matches[1]);
      print $mp3path . "<br>\n";


      $conn=file_get_contents($mp3path );
      $myfile = fopen($root . "/" .$i . ".m4a", "w") or die("Unable to open file!");
 
      fwrite($myfile, $conn);
      fclose($myfile);
  } 
}


?>