---
layout: post
title: ImageMagick图片命令工具
date: 2021-08-28 13:51:00
categories: 工具
tags: ImageMagick图片命令工具
excerpt: ImageMagick图片命令工具 
shareexcerpt: ImageMagick图片命令工具
thread: 2017022112510000
author: 大海明月
authorQQ: 593705098
authorEmail: zengfeng75@qq.com
thumbnail:

sh: true
sh_csharp: true
sh_cpp: true
---



[ImageMagick - Convert, Edit, or Compose Digital Images](file:///D:/Program Files/ImageMagick-7.1.0-Q16-HDRI/index.html)

[ImageMagick - Download](file:///D:/Program Files/ImageMagick-7.1.0-Q16-HDRI/www/download.html#windows)

[ImageMagick/ImageMagick: 🧙‍♂️ ImageMagick 7 (github.com)](https://github.com/ImageMagick/ImageMagick)



![[ImageMagick Examples]](_img/2021-10-28-ImageMagick图片命令工具/examples.jpg)





```bash
## 缩放图片
magick 2.png -resize 50% 2_half.png

## 图片转换, png 转 jpg
magick 2.png 2_magick.jpg

## 图片转换, png 转 dds
magick 2.png 2_magick.dds

## 将序列图片 转 gif
magick *.jpg images.gif

## 将gif图片的帧提前出序列帧
magick 1.gif testgif/1_.png
```



## 图片变灰

[ImageMagick – Command-line Options](https://imagemagick.org/script/command-line-options.php#grayscale)

```
magick 2.png -grayscale Rec709Luminance 2_grayscale.png
magick 2.png -colorspace LinearGray 2_colorspace.png
magick 2.png -colorspace Gray 2_colorspace_gray.png
```



## 图案



[ImageMagick – Image Formats](https://imagemagick.org/script/formats.php#builtin-patterns)

```bash
## 生成棋盘格
magick -size 640x480 pattern:checkerboard checkerboard.png
```

## Built-in Patterns

ImageMagick includes a number of built-in (embedded) patterns which may be referenced as if they were an image file. The pattern: format tag may be used via the syntax pattern:name to request an embedded pattern (e.g. pattern:checkerboard). The pattern size is controlled with the [-size](https://imagemagick.org/script/command-line-options.php#size) command line option.

| Tag                  | Mode | Description                                            | Notes                                                        |
| -------------------- | ---- | ------------------------------------------------------ | ------------------------------------------------------------ |
| BRICKS               | R    | brick pattern, 16x16                                   | ![BRICKS](_img/2021-10-28-ImageMagick图片命令工具/bricks.png) |
| CHECKERBOARD         | R    | checkerboard pattern, 30x30                            | ![CHECKERBOARD](_img/2021-10-28-ImageMagick图片命令工具/checkerboard.png) |
| CIRCLES              | R    | circles pattern, 16x16                                 | ![CIRCLES](_img/2021-10-28-ImageMagick图片命令工具/circles.png) |
| CROSSHATCH           | R    | crosshatch pattern, 8x4                                | ![CROSSHATCH](_img/2021-10-28-ImageMagick图片命令工具/crosshatch.png) |
| CROSSHATCH30         | R    | crosshatch pattern with lines at 30 degrees, 8x4       | ![CROSSHATCH30](_img/2021-10-28-ImageMagick图片命令工具/crosshatch30.png) |
| CROSSHATCH45         | R    | crosshatch pattern with lines at 45 degrees, 8x4       | ![CROSSHATCH45](_img/2021-10-28-ImageMagick图片命令工具/crosshatch45.png) |
| FISHSCALES           | R    | fish scales pattern, 16x8                              | ![FISHSCALES](_img/2021-10-28-ImageMagick图片命令工具/fishscales.png) |
| GRAY0                | R    | 0% intensity gray, 32x32                               | ![GRAY0](_img/2021-10-28-ImageMagick图片命令工具/gray0.png)  |
| GRAY5                | R    | 5% intensity gray, 32x32                               | ![GRAY5](_img/2021-10-28-ImageMagick图片命令工具/gray5.png)  |
| GRAY10               | R    | 10% intensity gray, 32x32                              | ![GRAY10](_img/2021-10-28-ImageMagick图片命令工具/gray10.png) |
| GRAY15               | R    | 15% intensity gray, 32x32                              | ![GRAY15](_img/2021-10-28-ImageMagick图片命令工具/gray15.png) |
| GRAY20               | R    | 20% intensity gray, 32x32                              | ![GRAY20](_img/2021-10-28-ImageMagick图片命令工具/gray20.png) |
| GRAY25               | R    | 25% intensity gray, 32x32                              | ![GRAY25](_img/2021-10-28-ImageMagick图片命令工具/gray25.png) |
| GRAY30               | R    | 30% intensity gray, 32x32                              | ![GRAY30](_img/2021-10-28-ImageMagick图片命令工具/gray30.png) |
| GRAY35               | R    | 35% intensity gray, 32x32                              | ![GRAY35](_img/2021-10-28-ImageMagick图片命令工具/gray35.png) |
| GRAY40               | R    | 40% intensity gray, 32x32                              | ![GRAY40](_img/2021-10-28-ImageMagick图片命令工具/gray40.png) |
| GRAY45               | R    | 45% intensity gray, 32x32                              | ![GRAY45](_img/2021-10-28-ImageMagick图片命令工具/gray45.png) |
| GRAY50               | R    | 50% intensity gray, 32x32                              | ![GRAY50](_img/2021-10-28-ImageMagick图片命令工具/gray50.png) |
| GRAY55               | R    | 55% intensity gray, 32x32                              | ![GRAY55](_img/2021-10-28-ImageMagick图片命令工具/gray55.png) |
| GRAY60               | R    | 60% intensity gray, 32x32                              | ![GRAY60](_img/2021-10-28-ImageMagick图片命令工具/gray60.png) |
| GRAY65               | R    | 65% intensity gray, 32x32                              | ![GRAY65](_img/2021-10-28-ImageMagick图片命令工具/gray65.png) |
| GRAY70               | R    | 70% intensity gray, 32x32                              | ![GRAY70](_img/2021-10-28-ImageMagick图片命令工具/gray70.png) |
| GRAY75               | R    | 75% intensity gray, 32x32                              | ![GRAY75](_img/2021-10-28-ImageMagick图片命令工具/gray75.png) |
| GRAY80               | R    | 80% intensity gray, 32x32                              | ![GRAY80](_img/2021-10-28-ImageMagick图片命令工具/gray80.png) |
| GRAY85               | R    | 85% intensity gray, 32x32                              | ![GRAY85](_img/2021-10-28-ImageMagick图片命令工具/gray85.png) |
| GRAY90               | R    | 90% intensity gray, 32x32                              | ![GRAY90](_img/2021-10-28-ImageMagick图片命令工具/gray90.png) |
| GRAY95               | R    | 95% intensity gray, 32x32                              | ![GRAY95](_img/2021-10-28-ImageMagick图片命令工具/gray95.png) |
| GRAY100              | R    | 100% intensity gray, 32x32                             | ![GRAY100](_img/2021-10-28-ImageMagick图片命令工具/gray100.png) |
| HEXAGONS             | R    | hexagon pattern, 30x18                                 | ![HEXAGONS](_img/2021-10-28-ImageMagick图片命令工具/hexagons.png) |
| HORIZONTAL           | R    | horizontal line pattern, 8x4                           | ![HORIZONTAL](_img/2021-10-28-ImageMagick图片命令工具/horizontal.png) |
| HORIZONTAL2          | R    | horizontal line pattern, 8x8                           | ![HORIZONTAL2](_img/2021-10-28-ImageMagick图片命令工具/horizontal2.png) |
| HORIZONTAL3          | R    | horizontal line pattern, 9x9                           | ![HORIZONTAL3](_img/2021-10-28-ImageMagick图片命令工具/horizontal3.png) |
| HORIZONTALSAW        | R    | horizontal saw-tooth pattern, 16x8                     | ![HORIZONTALSAW](_img/2021-10-28-ImageMagick图片命令工具/horizontalsaw.png) |
| HS_BDIAGONAL         | R    | backward diagonal line pattern (45 degrees slope), 8x8 | ![HS_BDIAGONAL](_img/2021-10-28-ImageMagick图片命令工具/hs_bdiagonal.png) |
| HS_CROSS             | R    | cross line pattern, 8x8                                | ![HS_CROSS](_img/2021-10-28-ImageMagick图片命令工具/hs_cross.png) |
| HS_DIAGCROSS         | R    | diagonal line cross pattern (45 degrees slope), 8x8    | ![HS_DIAGCROSS](_img/2021-10-28-ImageMagick图片命令工具/hs_diagcross.png) |
| HS_FDIAGONAL         | R    | forward diagonal line pattern (45 degrees slope), 8x8  | ![HS_FDIAGONAL](_img/2021-10-28-ImageMagick图片命令工具/hs_fdiagonal.png) |
| HS_HORIZONTAL        | R    | horizontal line pattern, 8x8                           | ![HS_HORIZONTAL](_img/2021-10-28-ImageMagick图片命令工具/hs_horizontal.png) |
| HS_VERTICAL          | R    | vertical line pattern, 8x8                             | ![HS_VERTICAL](_img/2021-10-28-ImageMagick图片命令工具/hs_vertical.png) |
| LEFT30               | R    | forward diagonal pattern (30 degrees slope), 8x4       | ![LEFT0](_img/2021-10-28-ImageMagick图片命令工具/left30.png) |
| LEFT45               | R    | forward diagonal line pattern (45 degrees slope), 8x8  | ![LEFT45](_img/2021-10-28-ImageMagick图片命令工具/left45.png) |
| LEFTSHINGLE          | R    | left shingle pattern, 24x24                            | ![LEFTSHINGLE](_img/2021-10-28-ImageMagick图片命令工具/leftshingle.png) |
| OCTAGONS             | R    | octagons pattern, 16x16                                | ![OCTAGONS](https://imagemagick.org/image/patterns/octagons.png) |
| RIGHT30              | R    | backward diagonal line pattern (30 degrees) 8x4        | ![RIGHT30](https://imagemagick.org/image/patterns/right30.png) |
| RIGHT45              | R    | backward diagonal line pattern (30 degrees), 8x8       | ![RIGHT45](https://imagemagick.org/image/patterns/right45.png) |
| RIGHTSHINGLE         | R    | right shingle pattern, 24x24                           | ![RIGHTSHINGLE](https://imagemagick.org/image/patterns/rightshingle.png) |
| SMALLFISHSCALES      | R    | small fish scales pattern, 8x8                         | ![SMALLFISHSCALES](https://imagemagick.org/image/patterns/smallfishscales.png) |
| VERTICAL             | R    | vertical line pattern, 8x8                             | ![VERTICAL](https://imagemagick.org/image/patterns/vertical.png) |
| VERTICAL2            | R    | vertical line pattern, 8x8                             | ![VERTICAL2](https://imagemagick.org/image/patterns/vertical2.png) |
| VERTICAL3            | R    | vertical line pattern, 9x9                             | ![VERTICAL3](https://imagemagick.org/image/patterns/vertical3.png) |
| VERTICALBRICKS       | R    | vertical brick pattern, 16x16                          | ![VERTICALBRICKS](https://imagemagick.org/image/patterns/verticalbricks.png) |
| VERTICALLEFTSHINGLE  | R    | vertical left shingle pattern, 24x24                   | ![VERTICALLEFTSHINGLE](https://imagemagick.org/image/patterns/verticalleftshingle.png) |
| VERTICALRIGHTSHINGLE | R    | vertical right shingle pattern, 24x24                  | ![VERTICALRIGHTSHINGLE](https://imagemagick.org/image/patterns/verticalrightshingle.png) |
| VERTICALSAW          | R    | vertical saw-tooth pattern, 8x16                       | ![VERTICALSAW](https://imagemagick.org/image/patterns/verticalsaw.png) |

