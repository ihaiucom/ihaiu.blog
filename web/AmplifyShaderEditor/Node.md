<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Vertex Data: 顶点数据](#vertex-data-%E9%A1%B6%E7%82%B9%E6%95%B0%E6%8D%AE)
    - [Face: 渲染面相对摄像机 正面或背面](#face-%E6%B8%B2%E6%9F%93%E9%9D%A2%E7%9B%B8%E5%AF%B9%E6%91%84%E5%83%8F%E6%9C%BA-%E6%AD%A3%E9%9D%A2%E6%88%96%E8%83%8C%E9%9D%A2)
    - [Instance ID](#instance-id)
    - [Object Scale: GameObject世界坐标系缩放](#object-scale-gameobject%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E7%B3%BB%E7%BC%A9%E6%94%BE)
    - [Primitive ID](#primitive-id)
    - [Vertex Bitangent: 顶点法线和切线的叉乘（垂直方向）](#vertex-bitangent-%E9%A1%B6%E7%82%B9%E6%B3%95%E7%BA%BF%E5%92%8C%E5%88%87%E7%BA%BF%E7%9A%84%E5%8F%89%E4%B9%98%E5%9E%82%E7%9B%B4%E6%96%B9%E5%90%91)
    - [Vertex Color: 顶点颜色](#vertex-color-%E9%A1%B6%E7%82%B9%E9%A2%9C%E8%89%B2)
    - [Vertex ID](#vertex-id)
    - [Vertex Normal： 顶点法线](#vertex-normal-%E9%A1%B6%E7%82%B9%E6%B3%95%E7%BA%BF)
    - [Vertex Position：顶点位置](#vertex-position%E9%A1%B6%E7%82%B9%E4%BD%8D%E7%BD%AE)
    - [Vertex Tangent: 顶点切线](#vertex-tangent-%E9%A1%B6%E7%82%B9%E5%88%87%E7%BA%BF)
    - [Vertex Tangent Sign: 顶点切线符号节点](#vertex-tangent-sign-%E9%A1%B6%E7%82%B9%E5%88%87%E7%BA%BF%E7%AC%A6%E5%8F%B7%E8%8A%82%E7%82%B9)
- [Verctor Opertors: 矢量操作](#verctor-opertors-%E7%9F%A2%E9%87%8F%E6%93%8D%E4%BD%9C)
    - [Append: 组合矢量](#append-%E7%BB%84%E5%90%88%E7%9F%A2%E9%87%8F)
    - [Break To Components:  拆分矢量](#break-to-components--%E6%8B%86%E5%88%86%E7%9F%A2%E9%87%8F)
    - [Component Mask: 访问分量](#component-mask-%E8%AE%BF%E9%97%AE%E5%88%86%E9%87%8F)
    - [Create Orthogonal Vector: 创建正交向量](#create-orthogonal-vector-%E5%88%9B%E5%BB%BA%E6%AD%A3%E4%BA%A4%E5%90%91%E9%87%8F)
    - [Distance: 距离](#distance-%E8%B7%9D%E7%A6%BB)
    - [Dot: 点乘](#dot-%E7%82%B9%E4%B9%98)
    - [Length: 长度](#length-%E9%95%BF%E5%BA%A6)
    - [normalize: 归一化](#normalize-%E5%BD%92%E4%B8%80%E5%8C%96)
    - [reflect: 反射](#reflect-%E5%8F%8D%E5%B0%84)
    - [Refract: 折射](#refract-%E6%8A%98%E5%B0%84)
    - [Rotate About Axis: 绕轴旋转](#rotate-about-axis-%E7%BB%95%E8%BD%B4%E6%97%8B%E8%BD%AC)
    - [Swizzle: 访问分量](#swizzle-%E8%AE%BF%E9%97%AE%E5%88%86%E9%87%8F)
    - [Transform Direction: 变换坐标空间](#transform-direction-%E5%8F%98%E6%8D%A2%E5%9D%90%E6%A0%87%E7%A9%BA%E9%97%B4)
- [Time: 时间](#time-%E6%97%B6%E9%97%B4)
    - [Time: 时间](#time-%E6%97%B6%E9%97%B4-1)
    - [Time Parmeters: 时间参数](#time-parmeters-%E6%97%B6%E9%97%B4%E5%8F%82%E6%95%B0)
    - [Delta Time : 每帧时长](#delta-time--%E6%AF%8F%E5%B8%A7%E6%97%B6%E9%95%BF)
    - [Cos Time: Cos时间](#cos-time-cos%E6%97%B6%E9%97%B4)
    - [Sin Time: Sin时间](#sin-time-sin%E6%97%B6%E9%97%B4)
- [Math Operators: 数学操作](#math-operators-%E6%95%B0%E5%AD%A6%E6%93%8D%E4%BD%9C)
    - [Abs: 绝对值](#abs-%E7%BB%9D%E5%AF%B9%E5%80%BC)
    - [Add: 加法 +](#add-%E5%8A%A0%E6%B3%95-)
    - [Subtract: 减法 -](#subtract-%E5%87%8F%E6%B3%95--)
    - [Multiply: 乘法 *](#multiply-%E4%B9%98%E6%B3%95-)
    - [Divide: 除法 /](#divide-%E9%99%A4%E6%B3%95-)
    - [Remainder: 取余数 , A **％**B的除法余数](#remainder-%E5%8F%96%E4%BD%99%E6%95%B0--a-%EF%BC%85b%E7%9A%84%E9%99%A4%E6%B3%95%E4%BD%99%E6%95%B0)
    - [Ceil:  向上取整](#ceil--%E5%90%91%E4%B8%8A%E5%8F%96%E6%95%B4)
    - [Floor:  向下取整](#floor--%E5%90%91%E4%B8%8B%E5%8F%96%E6%95%B4)
    - [round: 四舍五入取整](#round-%E5%9B%9B%E8%88%8D%E4%BA%94%E5%85%A5%E5%8F%96%E6%95%B4)
    - [Fmod:  取余数, 输出除法A **/** B的其余部分，其符号与**A**相同](#fmod--%E5%8F%96%E4%BD%99%E6%95%B0-%E8%BE%93%E5%87%BA%E9%99%A4%E6%B3%95a--b%E7%9A%84%E5%85%B6%E4%BD%99%E9%83%A8%E5%88%86%E5%85%B6%E7%AC%A6%E5%8F%B7%E4%B8%8Ea%E7%9B%B8%E5%90%8C)
    - [Simplified Fmod :  简化的Fmod节点输出除法A **/** B的余数。该节点比Fmod节点性能更高，但不能保证最终生成值的符号。](#simplified-fmod---%E7%AE%80%E5%8C%96%E7%9A%84fmod%E8%8A%82%E7%82%B9%E8%BE%93%E5%87%BA%E9%99%A4%E6%B3%95a--b%E7%9A%84%E4%BD%99%E6%95%B0%E8%AF%A5%E8%8A%82%E7%82%B9%E6%AF%94fmod%E8%8A%82%E7%82%B9%E6%80%A7%E8%83%BD%E6%9B%B4%E9%AB%98%E4%BD%86%E4%B8%8D%E8%83%BD%E4%BF%9D%E8%AF%81%E6%9C%80%E7%BB%88%E7%94%9F%E6%88%90%E5%80%BC%E7%9A%84%E7%AC%A6%E5%8F%B7)
    - [Fract: 取小数部分 ,  v - floor(v)](#fract-%E5%8F%96%E5%B0%8F%E6%95%B0%E9%83%A8%E5%88%86---v---floorv)
    - [Lerp:  线性插值](#lerp--%E7%BA%BF%E6%80%A7%E6%8F%92%E5%80%BC)
    - [Compute Filter Width: 计算滤波器宽度](#compute-filter-width-%E8%AE%A1%E7%AE%97%E6%BB%A4%E6%B3%A2%E5%99%A8%E5%AE%BD%E5%BA%A6)
    - [DDX: 输出对于屏幕空间x坐标输出指定输入值的偏导数。](#ddx-%E8%BE%93%E5%87%BA%E5%AF%B9%E4%BA%8E%E5%B1%8F%E5%B9%95%E7%A9%BA%E9%97%B4x%E5%9D%90%E6%A0%87%E8%BE%93%E5%87%BA%E6%8C%87%E5%AE%9A%E8%BE%93%E5%85%A5%E5%80%BC%E7%9A%84%E5%81%8F%E5%AF%BC%E6%95%B0)
      - [应用1: 顶点位置生成法线](#%E5%BA%94%E7%94%A81-%E9%A1%B6%E7%82%B9%E4%BD%8D%E7%BD%AE%E7%94%9F%E6%88%90%E6%B3%95%E7%BA%BF)
      - [应用2: 图片锐化](#%E5%BA%94%E7%94%A82-%E5%9B%BE%E7%89%87%E9%94%90%E5%8C%96)
    - [DDY: 输出相对于屏幕空间y坐标的指定输入值的偏导数。](#ddy-%E8%BE%93%E5%87%BA%E7%9B%B8%E5%AF%B9%E4%BA%8E%E5%B1%8F%E5%B9%95%E7%A9%BA%E9%97%B4y%E5%9D%90%E6%A0%87%E7%9A%84%E6%8C%87%E5%AE%9A%E8%BE%93%E5%85%A5%E5%80%BC%E7%9A%84%E5%81%8F%E5%AF%BC%E6%95%B0)
    - [FWidth: 偏导数的绝对值 abs(ddx(input))   + abs(ddy(input))](#fwidth-%E5%81%8F%E5%AF%BC%E6%95%B0%E7%9A%84%E7%BB%9D%E5%AF%B9%E5%80%BC-absddxinput----absddyinput)
    - [Exp: 以自然常数e为底的指数函数，它同时又是航模名词，全称Exponential(指数曲线)](#exp-%E4%BB%A5%E8%87%AA%E7%84%B6%E5%B8%B8%E6%95%B0e%E4%B8%BA%E5%BA%95%E7%9A%84%E6%8C%87%E6%95%B0%E5%87%BD%E6%95%B0%E5%AE%83%E5%90%8C%E6%97%B6%E5%8F%88%E6%98%AF%E8%88%AA%E6%A8%A1%E5%90%8D%E8%AF%8D%E5%85%A8%E7%A7%B0exponential%E6%8C%87%E6%95%B0%E6%9B%B2%E7%BA%BF)
    - [Exp2: 以2为底的指数值](#exp2-%E4%BB%A52%E4%B8%BA%E5%BA%95%E7%9A%84%E6%8C%87%E6%95%B0%E5%80%BC)
    - [pow: 幂运算](#pow-%E5%B9%82%E8%BF%90%E7%AE%97)
    - [Log:  自然对数, 标量或向量各个分量的基本e对数值](#log--%E8%87%AA%E7%84%B6%E5%AF%B9%E6%95%B0-%E6%A0%87%E9%87%8F%E6%88%96%E5%90%91%E9%87%8F%E5%90%84%E4%B8%AA%E5%88%86%E9%87%8F%E7%9A%84%E5%9F%BA%E6%9C%ACe%E5%AF%B9%E6%95%B0%E5%80%BC)
    - [Log10:  以10为低的对数](#log10--%E4%BB%A510%E4%B8%BA%E4%BD%8E%E7%9A%84%E5%AF%B9%E6%95%B0)
    - [Log2:  以2为低的对数](#log2--%E4%BB%A52%E4%B8%BA%E4%BD%8E%E7%9A%84%E5%AF%B9%E6%95%B0)
    - [sqrt: 平方根, 开平方](#sqrt-%E5%B9%B3%E6%96%B9%E6%A0%B9-%E5%BC%80%E5%B9%B3%E6%96%B9)
    - [rsqrt：倒数 平方根, 1/sqr(input)](#rsqrt%E5%80%92%E6%95%B0-%E5%B9%B3%E6%96%B9%E6%A0%B9-1sqrinput)
    - [Max: 最大值](#max-%E6%9C%80%E5%A4%A7%E5%80%BC)
    - [Min: 最小值](#min-%E6%9C%80%E5%B0%8F%E5%80%BC)
    - [Negate: 取反 -](#negate-%E5%8F%96%E5%8F%8D--)
    - [One Minus:  1 - val](#one-minus--1---val)
    - [Remap: 映射值](#remap-%E6%98%A0%E5%B0%84%E5%80%BC)
    - [Clamp:  取值范围,  a < min ? min   :   a > max ? max : a](#clamp--%E5%8F%96%E5%80%BC%E8%8C%83%E5%9B%B4--a--min--min------a--max--max--a)
    - [Saturate: 饱和取值, 值限定在[0,1]范围,   a < 0 ?  0    :      a >1 ? 1 :  a](#saturate-%E9%A5%B1%E5%92%8C%E5%8F%96%E5%80%BC-%E5%80%BC%E9%99%90%E5%AE%9A%E5%9C%A801%E8%8C%83%E5%9B%B4---a--0---0----------a-1--1---a)
    - [Step: 阶梯取值,  返回0或1，  b < a ? 0 : 1](#step-%E9%98%B6%E6%A2%AF%E5%8F%96%E5%80%BC--%E8%BF%94%E5%9B%9E0%E6%88%961--b--a--0--1)
    - [Smoothstep: 平滑阶梯取值](#smoothstep-%E5%B9%B3%E6%BB%91%E9%98%B6%E6%A2%AF%E5%8F%96%E5%80%BC)
    - [Sign: 符号,   a == 0 ? 0       :   a > 0 ? 1 : -1](#sign-%E7%AC%A6%E5%8F%B7---a--0--0----------a--0--1---1)
    - [Scale: 乘一个数值,  input * val](#scale-%E4%B9%98%E4%B8%80%E4%B8%AA%E6%95%B0%E5%80%BC--input--val)
    - [Scale And Offset: 乘一个数值，再偏移一个数值 inpu * scale + offset](#scale-and-offset-%E4%B9%98%E4%B8%80%E4%B8%AA%E6%95%B0%E5%80%BC%E5%86%8D%E5%81%8F%E7%A7%BB%E4%B8%80%E4%B8%AA%E6%95%B0%E5%80%BC-inpu--scale--offset)
    - [Step Antialiasing:  阶梯平滑](#step-antialiasing--%E9%98%B6%E6%A2%AF%E5%B9%B3%E6%BB%91)
    - [trunc:  将浮点值截断为矢量值的整数部分或每个单独的部分。](#trunc--%E5%B0%86%E6%B5%AE%E7%82%B9%E5%80%BC%E6%88%AA%E6%96%AD%E4%B8%BA%E7%9F%A2%E9%87%8F%E5%80%BC%E7%9A%84%E6%95%B4%E6%95%B0%E9%83%A8%E5%88%86%E6%88%96%E6%AF%8F%E4%B8%AA%E5%8D%95%E7%8B%AC%E7%9A%84%E9%83%A8%E5%88%86)
- [Trigonometry Operators: 三角函数操作](#trigonometry-operators-%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0%E6%93%8D%E4%BD%9C)
    - [Radians： 角度转弧度](#radians-%E8%A7%92%E5%BA%A6%E8%BD%AC%E5%BC%A7%E5%BA%A6)
    - [Degrees: 弧度转角度](#degrees-%E5%BC%A7%E5%BA%A6%E8%BD%AC%E8%A7%92%E5%BA%A6)
    - [Cos: 余弦值。输入值必须以弧度单位制为单位。](#cos-%E4%BD%99%E5%BC%A6%E5%80%BC%E8%BE%93%E5%85%A5%E5%80%BC%E5%BF%85%E9%A1%BB%E4%BB%A5%E5%BC%A7%E5%BA%A6%E5%8D%95%E4%BD%8D%E5%88%B6%E4%B8%BA%E5%8D%95%E4%BD%8D)
    - [ACos: 反余弦函数](#acos-%E5%8F%8D%E4%BD%99%E5%BC%A6%E5%87%BD%E6%95%B0)
    - [Cosh: 双曲余弦值。输入值必须以弧度单位制为单位。](#cosh-%E5%8F%8C%E6%9B%B2%E4%BD%99%E5%BC%A6%E5%80%BC%E8%BE%93%E5%85%A5%E5%80%BC%E5%BF%85%E9%A1%BB%E4%BB%A5%E5%BC%A7%E5%BA%A6%E5%8D%95%E4%BD%8D%E5%88%B6%E4%B8%BA%E5%8D%95%E4%BD%8D)
    - [Sin: 正弦值。输入值必须以弧度单位制为单位。](#sin-%E6%AD%A3%E5%BC%A6%E5%80%BC%E8%BE%93%E5%85%A5%E5%80%BC%E5%BF%85%E9%A1%BB%E4%BB%A5%E5%BC%A7%E5%BA%A6%E5%8D%95%E4%BD%8D%E5%88%B6%E4%B8%BA%E5%8D%95%E4%BD%8D)
    - [ASin: 反正弦。假设输入值在[-1,1]范围内，结果值将在[-π/ 2，π/ 2]范围内。](#asin-%E5%8F%8D%E6%AD%A3%E5%BC%A6%E5%81%87%E8%AE%BE%E8%BE%93%E5%85%A5%E5%80%BC%E5%9C%A8-11%E8%8C%83%E5%9B%B4%E5%86%85%E7%BB%93%E6%9E%9C%E5%80%BC%E5%B0%86%E5%9C%A8-%CF%80-2%CF%80-2%E8%8C%83%E5%9B%B4%E5%86%85)
    - [Sinh: 双曲正弦值。输入值必须以弧度单位制为单位。](#sinh-%E5%8F%8C%E6%9B%B2%E6%AD%A3%E5%BC%A6%E5%80%BC%E8%BE%93%E5%85%A5%E5%80%BC%E5%BF%85%E9%A1%BB%E4%BB%A5%E5%BC%A7%E5%BA%A6%E5%8D%95%E4%BD%8D%E5%88%B6%E4%B8%BA%E5%8D%95%E4%BD%8D)
    - [ATan: 反正切值。结果值将在[-π/ 2，π/ 2]范围内。](#atan-%E5%8F%8D%E6%AD%A3%E5%88%87%E5%80%BC%E7%BB%93%E6%9E%9C%E5%80%BC%E5%B0%86%E5%9C%A8-%CF%80-2%CF%80-2%E8%8C%83%E5%9B%B4%E5%86%85)
    - [ATan2: 输出除法A **/** B的反正切。如果（B，A）定义了（x，y）向量，则使用此运算符返回它与x轴的弧度角。](#atan2-%E8%BE%93%E5%87%BA%E9%99%A4%E6%B3%95a--b%E7%9A%84%E5%8F%8D%E6%AD%A3%E5%88%87%E5%A6%82%E6%9E%9Cba%E5%AE%9A%E4%B9%89%E4%BA%86xy%E5%90%91%E9%87%8F%E5%88%99%E4%BD%BF%E7%94%A8%E6%AD%A4%E8%BF%90%E7%AE%97%E7%AC%A6%E8%BF%94%E5%9B%9E%E5%AE%83%E4%B8%8Ex%E8%BD%B4%E7%9A%84%E5%BC%A7%E5%BA%A6%E8%A7%92)
    - [Tanh： 双曲正切值。输入值必须以弧度单位制为单位。](#tanh-%E5%8F%8C%E6%9B%B2%E6%AD%A3%E5%88%87%E5%80%BC%E8%BE%93%E5%85%A5%E5%80%BC%E5%BF%85%E9%A1%BB%E4%BB%A5%E5%BC%A7%E5%BA%A6%E5%8D%95%E4%BD%8D%E5%88%B6%E4%B8%BA%E5%8D%95%E4%BD%8D)
    - [Tan: 正切。计算在其Input上指定的值的切线。输入值必须以弧度单位制为单位。](#tan-%E6%AD%A3%E5%88%87%E8%AE%A1%E7%AE%97%E5%9C%A8%E5%85%B6input%E4%B8%8A%E6%8C%87%E5%AE%9A%E7%9A%84%E5%80%BC%E7%9A%84%E5%88%87%E7%BA%BF%E8%BE%93%E5%85%A5%E5%80%BC%E5%BF%85%E9%A1%BB%E4%BB%A5%E5%BC%A7%E5%BA%A6%E5%8D%95%E4%BD%8D%E5%88%B6%E4%B8%BA%E5%8D%95%E4%BD%8D)
- [Camera And Screen: 摄像机和屏幕](#camera-and-screen-%E6%91%84%E5%83%8F%E6%9C%BA%E5%92%8C%E5%B1%8F%E5%B9%95)
    - [Camera Depth Fade: 摄像机深度淡入淡出](#camera-depth-fade-%E6%91%84%E5%83%8F%E6%9C%BA%E6%B7%B1%E5%BA%A6%E6%B7%A1%E5%85%A5%E6%B7%A1%E5%87%BA)
    - [Clip Planes: 裁剪平面](#clip-planes-%E8%A3%81%E5%89%AA%E5%B9%B3%E9%9D%A2)
    - [Compute Grap Screen Pos: 计算顶点在屏幕空间的位置](#compute-grap-screen-pos-%E8%AE%A1%E7%AE%97%E9%A1%B6%E7%82%B9%E5%9C%A8%E5%B1%8F%E5%B9%95%E7%A9%BA%E9%97%B4%E7%9A%84%E4%BD%8D%E7%BD%AE)
    - [Compute Screen Pos: 计算屏幕坐标](#compute-screen-pos-%E8%AE%A1%E7%AE%97%E5%B1%8F%E5%B9%95%E5%9D%90%E6%A0%87)
    - [Dither： 抖动](#dither-%E6%8A%96%E5%8A%A8)
    - [Grab_Screen_Color: 抓取屏幕颜色](#grab_screen_color-%E6%8A%93%E5%8F%96%E5%B1%8F%E5%B9%95%E9%A2%9C%E8%89%B2)
    - [Grap Screen Pos: 抓取屏幕位置](#grap-screen-pos-%E6%8A%93%E5%8F%96%E5%B1%8F%E5%B9%95%E4%BD%8D%E7%BD%AE)
    - [Ortho Params： 正交参数](#ortho-params-%E6%AD%A3%E4%BA%A4%E5%8F%82%E6%95%B0)
    - [Projection Matrices: 投影矩阵, 投影逆矩阵](#projection-matrices-%E6%8A%95%E5%BD%B1%E7%9F%A9%E9%98%B5-%E6%8A%95%E5%BD%B1%E9%80%86%E7%9F%A9%E9%98%B5)
    - [Projection Params: 投影参数](#projection-params-%E6%8A%95%E5%BD%B1%E5%8F%82%E6%95%B0)
    - [Screen Depth: 屏幕深度](#screen-depth-%E5%B1%8F%E5%B9%95%E6%B7%B1%E5%BA%A6)
    - [Screen Params: 屏幕参数](#screen-params-%E5%B1%8F%E5%B9%95%E5%8F%82%E6%95%B0)
    - [Screen Position: 屏幕位置](#screen-position-%E5%B1%8F%E5%B9%95%E4%BD%8D%E7%BD%AE)
    - [View Dir: 视图方向](#view-dir-%E8%A7%86%E5%9B%BE%E6%96%B9%E5%90%91)
    - [World Space Camera Pos: 相机在世界空间中的位置](#world-space-camera-pos-%E7%9B%B8%E6%9C%BA%E5%9C%A8%E4%B8%96%E7%95%8C%E7%A9%BA%E9%97%B4%E4%B8%AD%E7%9A%84%E4%BD%8D%E7%BD%AE)
    - [Z Buffer Params: Z缓冲区参数](#z-buffer-params-z%E7%BC%93%E5%86%B2%E5%8C%BA%E5%8F%82%E6%95%B0)
- [Constants And Properties: 常量和属性](#constants-and-properties-%E5%B8%B8%E9%87%8F%E5%92%8C%E5%B1%9E%E6%80%A7)
    - [Gradient: 渐变](#gradient-%E6%B8%90%E5%8F%98)
    - [PI: π](#pi-%CF%80)
    - [Tau: 2π](#tau-2%CF%80)
- [Functions: 函数](#functions-%E5%87%BD%E6%95%B0)
    - [BlinnPhongLightWrap: BlinnPhong光照](#blinnphonglightwrap-blinnphong%E5%85%89%E7%85%A7)
    - [Box Mask: 盒子遮罩](#box-mask-%E7%9B%92%E5%AD%90%E9%81%AE%E7%BD%A9)
    - [Burn Effect: 燃烧、熔岩效果](#burn-effect-%E7%87%83%E7%83%A7%E7%86%94%E5%B2%A9%E6%95%88%E6%9E%9C)
    - [Color Mask: 颜色过滤](#color-mask-%E9%A2%9C%E8%89%B2%E8%BF%87%E6%BB%A4)
    - [Constant Bias Scale: 恒定偏移和缩放](#constant-bias-scale-%E6%81%92%E5%AE%9A%E5%81%8F%E7%A7%BB%E5%92%8C%E7%BC%A9%E6%94%BE)
    - [Cool Wave: 波](#cool-wave-%E6%B3%A2)
    - [Cotangent Frame: 余切](#cotangent-frame-%E4%BD%99%E5%88%87)
    - [Decode Directional Lighmap: 解码方向图](#decode-directional-lighmap-%E8%A7%A3%E7%A0%81%E6%96%B9%E5%90%91%E5%9B%BE)
    - [Derive Tangent Basis: 导出切线矩阵](#derive-tangent-basis-%E5%AF%BC%E5%87%BA%E5%88%87%E7%BA%BF%E7%9F%A9%E9%98%B5)
    - [Detail Aldedo: 2个颜色融合](#detail-aldedo-2%E4%B8%AA%E9%A2%9C%E8%89%B2%E8%9E%8D%E5%90%88)
    - [](#)
- [Textures: 贴图](#textures-%E8%B4%B4%E5%9B%BE)
    - [Blend Normals: 混合法线](#blend-normals-%E6%B7%B7%E5%90%88%E6%B3%95%E7%BA%BF)
    - [HeightMap Texture Blend: 高度贴图混合](#heightmap-texture-blend-%E9%AB%98%E5%BA%A6%E8%B4%B4%E5%9B%BE%E6%B7%B7%E5%90%88)
    - [Texel Size: 贴图大小](#texel-size-%E8%B4%B4%E5%9B%BE%E5%A4%A7%E5%B0%8F)
    - [Texture Array： 纹理阵列](#texture-array-%E7%BA%B9%E7%90%86%E9%98%B5%E5%88%97)
    - [Texture Sample: 贴图采样](#texture-sample-%E8%B4%B4%E5%9B%BE%E9%87%87%E6%A0%B7)
    - [Texture Transform: 设置纹理平铺和偏移](#texture-transform-%E8%AE%BE%E7%BD%AE%E7%BA%B9%E7%90%86%E5%B9%B3%E9%93%BA%E5%92%8C%E5%81%8F%E7%A7%BB)
    - [UnpackScaleNormal : 解法线贴图， 并且乘一个值](#unpackscalenormal--%E8%A7%A3%E6%B3%95%E7%BA%BF%E8%B4%B4%E5%9B%BE-%E5%B9%B6%E4%B8%94%E4%B9%98%E4%B8%80%E4%B8%AA%E5%80%BC)
- [UV Coordinates: UV坐标](#uv-coordinates-uv%E5%9D%90%E6%A0%87)
    - [Texture Coordinates: 贴图UV坐标](#texture-coordinates-%E8%B4%B4%E5%9B%BEuv%E5%9D%90%E6%A0%87)
    - [Rotator: UV旋转](#rotator-uv%E6%97%8B%E8%BD%AC)
    - [Pixelate UV: 像素画UV](#pixelate-uv-%E5%83%8F%E7%B4%A0%E7%94%BBuv)
    - [Panner: UV平移](#panner-uv%E5%B9%B3%E7%A7%BB)
    - [Bidirectional Parallax Mapping](#bidirectional-parallax-mapping)
    - [Filpbook UV Animation: UV 序列帧动画](#filpbook-uv-animation-uv-%E5%BA%8F%E5%88%97%E5%B8%A7%E5%8A%A8%E7%94%BB)
    - [Parallax Mapping: 视差映射](#parallax-mapping-%E8%A7%86%E5%B7%AE%E6%98%A0%E5%B0%84)
    - [Parallax Occlusion Mapping： 视差遮挡贴图](#parallax-occlusion-mapping-%E8%A7%86%E5%B7%AE%E9%81%AE%E6%8C%A1%E8%B4%B4%E5%9B%BE)
    - [Parallax Offset： 视察偏移](#parallax-offset-%E8%A7%86%E5%AF%9F%E5%81%8F%E7%A7%BB)
- [Logical Operators: 逻辑操作](#logical-operators-%E9%80%BB%E8%BE%91%E6%93%8D%E4%BD%9C)
    - [Compare (A<B) : 比较 A<B](#compare-ab--%E6%AF%94%E8%BE%83-ab)
    - [Compare (A==B) : 比较 A==B](#compare-ab--%E6%AF%94%E8%BE%83-ab)
    - [Compare (A>B) : 比较 A>B](#compare-ab--%E6%AF%94%E8%BE%83-ab)
    - [Compare (A>B) : 比较 A>B](#compare-ab--%E6%AF%94%E8%BE%83-ab-1)
    - [Compare (A ≠B) : 比较 A!=B](#compare-a-%E2%89%A0b--%E6%AF%94%E8%BE%83-ab)
    - [Compare (A<=B) : 比较 A<=B](#compare-ab--%E6%AF%94%E8%BE%83-ab)
    - [Compare (A>=B) : 比较 A>=B](#compare-ab--%E6%AF%94%E8%BE%83-ab)
    - [Compare With Range: 比较范围](#compare-with-range-%E6%AF%94%E8%BE%83%E8%8C%83%E5%9B%B4)
    - [Debug Switch: 调试，选择使用某个输入参数](#debug-switch-%E8%B0%83%E8%AF%95%E9%80%89%E6%8B%A9%E4%BD%BF%E7%94%A8%E6%9F%90%E4%B8%AA%E8%BE%93%E5%85%A5%E5%8F%82%E6%95%B0)
    - [if: 条件](#if-%E6%9D%A1%E4%BB%B6)
    - [if[Community]: 在if的基础上==多了一个范围](#ifcommunity-%E5%9C%A8if%E7%9A%84%E5%9F%BA%E7%A1%80%E4%B8%8A%E5%A4%9A%E4%BA%86%E4%B8%80%E4%B8%AA%E8%8C%83%E5%9B%B4)
    - [Material Quality: 材质球质量](#material-quality-%E6%9D%90%E8%B4%A8%E7%90%83%E8%B4%A8%E9%87%8F)
    - [Static Switch:  宏条件定义变量](#static-switch--%E5%AE%8F%E6%9D%A1%E4%BB%B6%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F)
    - [Template Multi-Pass Switch： 设置不同Pass参数](#template-multi-pass-switch-%E8%AE%BE%E7%BD%AE%E4%B8%8D%E5%90%8Cpass%E5%8F%82%E6%95%B0)
    - [Toggle Switch0: 2个值直接切换开关](#toggle-switch0-2%E4%B8%AA%E5%80%BC%E7%9B%B4%E6%8E%A5%E5%88%87%E6%8D%A2%E5%BC%80%E5%85%B3)
- [Matrix Operators: 矩阵操作](#matrix-operators-%E7%9F%A9%E9%98%B5%E6%93%8D%E4%BD%9C)
    - [Determinant: 行列式](#determinant-%E8%A1%8C%E5%88%97%E5%BC%8F)
    - [Inverse: 逆矩阵](#inverse-%E9%80%86%E7%9F%A9%E9%98%B5)
    - [Matrix From Vectors: 由多个向量组成矩阵](#matrix-from-vectors-%E7%94%B1%E5%A4%9A%E4%B8%AA%E5%90%91%E9%87%8F%E7%BB%84%E6%88%90%E7%9F%A9%E9%98%B5)
    - [Position From Transform： 读取矩阵的位置](#position-from-transform-%E8%AF%BB%E5%8F%96%E7%9F%A9%E9%98%B5%E7%9A%84%E4%BD%8D%E7%BD%AE)
    - [Transpose: 转置](#transpose-%E8%BD%AC%E7%BD%AE)
    - [Vector From Matrix: 读取矩阵中的一行或者一列组成一个向量](#vector-from-matrix-%E8%AF%BB%E5%8F%96%E7%9F%A9%E9%98%B5%E4%B8%AD%E7%9A%84%E4%B8%80%E8%A1%8C%E6%88%96%E8%80%85%E4%B8%80%E5%88%97%E7%BB%84%E6%88%90%E4%B8%80%E4%B8%AA%E5%90%91%E9%87%8F)
- [Matrix Transform: 转换矩阵](#matrix-transform-%E8%BD%AC%E6%8D%A2%E7%9F%A9%E9%98%B5)
    - [Camera To World Matrix： 摄像机转世界矩阵, unity_CameraToWorld](#camera-to-world-matrix-%E6%91%84%E5%83%8F%E6%9C%BA%E8%BD%AC%E4%B8%96%E7%95%8C%E7%9F%A9%E9%98%B5-unity_cameratoworld)
    - [Object To World Matrix: 模型对象转世界矩阵, unity_ObjectToWorld](#object-to-world-matrix-%E6%A8%A1%E5%9E%8B%E5%AF%B9%E8%B1%A1%E8%BD%AC%E4%B8%96%E7%95%8C%E7%9F%A9%E9%98%B5-unity_objecttoworld)
    - [World To Camera Matrix: 世界转摄像机矩阵， unity_WorldToCamera](#world-to-camera-matrix-%E4%B8%96%E7%95%8C%E8%BD%AC%E6%91%84%E5%83%8F%E6%9C%BA%E7%9F%A9%E9%98%B5-unity_worldtocamera)
    - [World To Object Matrix: 世界转模型对象矩阵, unity_WorldToObject](#world-to-object-matrix-%E4%B8%96%E7%95%8C%E8%BD%AC%E6%A8%A1%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%9F%A9%E9%98%B5-unity_worldtoobject)
    - [World To Tangent Matrix: 世界转切线矩阵](#world-to-tangent-matrix-%E4%B8%96%E7%95%8C%E8%BD%AC%E5%88%87%E7%BA%BF%E7%9F%A9%E9%98%B5)
    - [Transpose Model View Matrix： 转置模型视图矩阵节点， UNITY_MATRIX_T_MV](#transpose-model-view-matrix-%E8%BD%AC%E7%BD%AE%E6%A8%A1%E5%9E%8B%E8%A7%86%E5%9B%BE%E7%9F%A9%E9%98%B5%E8%8A%82%E7%82%B9-unity_matrix_t_mv)
    - [Model Matrix: 模型矩阵, UNITY_MATRIX_M](#model-matrix-%E6%A8%A1%E5%9E%8B%E7%9F%A9%E9%98%B5-unity_matrix_m)
    - [View Matrix: 视图矩阵, UNITY_MATRIX_V](#view-matrix-%E8%A7%86%E5%9B%BE%E7%9F%A9%E9%98%B5-unity_matrix_v)
    - [Projection Matrix：投影矩阵, UNITY_MATRIX_P](#projection-matrix%E6%8A%95%E5%BD%B1%E7%9F%A9%E9%98%B5-unity_matrix_p)
    - [Model View Matrix: 模型视图矩阵，UNITY_MATRIX_MV](#model-view-matrix-%E6%A8%A1%E5%9E%8B%E8%A7%86%E5%9B%BE%E7%9F%A9%E9%98%B5unity_matrix_mv)
    - [View Projection Matrix: 视图投影矩阵, UNITY_MATRIX_VP](#view-projection-matrix-%E8%A7%86%E5%9B%BE%E6%8A%95%E5%BD%B1%E7%9F%A9%E9%98%B5-unity_matrix_vp)
    - [Model View Projection Matrix：模型视图投影矩阵, UnityObjectToClipPos(v.vertex)](#model-view-projection-matrix%E6%A8%A1%E5%9E%8B%E8%A7%86%E5%9B%BE%E6%8A%95%E5%BD%B1%E7%9F%A9%E9%98%B5-unityobjecttoclipposvvertex)
    - [Projector Matrix: 投影仪矩阵 贴花, unity_Projector](#projector-matrix-%E6%8A%95%E5%BD%B1%E4%BB%AA%E7%9F%A9%E9%98%B5-%E8%B4%B4%E8%8A%B1-unity_projector)
    - [Projector Clip Matrix： 投影裁剪矩阵，unity_ProjectorClip](#projector-clip-matrix-%E6%8A%95%E5%BD%B1%E8%A3%81%E5%89%AA%E7%9F%A9%E9%98%B5unity_projectorclip)
    - [Inverse View Matrix：视图逆矩阵， UNITY_MATRIX_I_V](#inverse-view-matrix%E8%A7%86%E5%9B%BE%E9%80%86%E7%9F%A9%E9%98%B5-unity_matrix_i_v)
    - [Inverse Transpose Model View Matrix: 模型视图转置逆矩阵, UNITY_MATRIX_IT_MV](#inverse-transpose-model-view-matrix-%E6%A8%A1%E5%9E%8B%E8%A7%86%E5%9B%BE%E8%BD%AC%E7%BD%AE%E9%80%86%E7%9F%A9%E9%98%B5-unity_matrix_it_mv)
    - [Inverse Projection Matrix: 投影逆矩阵](#inverse-projection-matrix-%E6%8A%95%E5%BD%B1%E9%80%86%E7%9F%A9%E9%98%B5)
    - [Inverse View Projection Matrix: 视图投影逆矩阵](#inverse-view-projection-matrix-%E8%A7%86%E5%9B%BE%E6%8A%95%E5%BD%B1%E9%80%86%E7%9F%A9%E9%98%B5)
    - [Common Transform Matrices： 通用矩阵](#common-transform-matrices-%E9%80%9A%E7%94%A8%E7%9F%A9%E9%98%B5)
- [Object Transform: 空间转换](#object-transform-%E7%A9%BA%E9%97%B4%E8%BD%AC%E6%8D%A2)
    - [Object Space View Dir：返回从当前游戏对象到摄像机的方向。float3 v3 = ObjSpaceViewDir(v4)](#object-space-view-dir%E8%BF%94%E5%9B%9E%E4%BB%8E%E5%BD%93%E5%89%8D%E6%B8%B8%E6%88%8F%E5%AF%B9%E8%B1%A1%E5%88%B0%E6%91%84%E5%83%8F%E6%9C%BA%E7%9A%84%E6%96%B9%E5%90%91float3-v3--objspaceviewdirv4)
    - [Object To Clip Pos: 将对象/局部空间中的位置转换为同类坐标中相机的剪辑空间。 float4 v4 = UnityObjectToClipPos(v3)](#object-to-clip-pos-%E5%B0%86%E5%AF%B9%E8%B1%A1%E5%B1%80%E9%83%A8%E7%A9%BA%E9%97%B4%E4%B8%AD%E7%9A%84%E4%BD%8D%E7%BD%AE%E8%BD%AC%E6%8D%A2%E4%B8%BA%E5%90%8C%E7%B1%BB%E5%9D%90%E6%A0%87%E4%B8%AD%E7%9B%B8%E6%9C%BA%E7%9A%84%E5%89%AA%E8%BE%91%E7%A9%BA%E9%97%B4-float4-v4--unityobjecttoclipposv3)
    - [Object To View Pos: 转换为相机的视图空间, float3 v3 = UnityObjectToViewPos(v3)](#object-to-view-pos-%E8%BD%AC%E6%8D%A2%E4%B8%BA%E7%9B%B8%E6%9C%BA%E7%9A%84%E8%A7%86%E5%9B%BE%E7%A9%BA%E9%97%B4-float3-v3--unityobjecttoviewposv3)
    - [Object To World: 从“对象/本地空间”转换为“世界空间”, float4 transform = mul(unity_ObjectToWorld,float4( v.vertex.xyz , 0.0 ));](#object-to-world-%E4%BB%8E%E5%AF%B9%E8%B1%A1%E6%9C%AC%E5%9C%B0%E7%A9%BA%E9%97%B4%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%B8%96%E7%95%8C%E7%A9%BA%E9%97%B4-float4-transform--mulunity_objecttoworldfloat4-vvertexxyz--00-)
    - [World Space View Dir: 返回从当前游戏对象到摄像机的方向。float3 v3 = WorldSpaceViewDir(v4)](#world-space-view-dir-%E8%BF%94%E5%9B%9E%E4%BB%8E%E5%BD%93%E5%89%8D%E6%B8%B8%E6%88%8F%E5%AF%B9%E8%B1%A1%E5%88%B0%E6%91%84%E5%83%8F%E6%9C%BA%E7%9A%84%E6%96%B9%E5%90%91float3-v3--worldspaceviewdirv4)
    - [World To Object: “世界空间”转换为“对象/局部空间”。float4 transform = mul(unity_WorldToObject,float4( worldPos , 0.0 ));](#world-to-object-%E4%B8%96%E7%95%8C%E7%A9%BA%E9%97%B4%E8%BD%AC%E6%8D%A2%E4%B8%BA%E5%AF%B9%E8%B1%A1%E5%B1%80%E9%83%A8%E7%A9%BA%E9%97%B4float4-transform--mulunity_worldtoobjectfloat4-worldpos--00-)
    - [World Transform Params: 世界变换参数， float4 unity_WorldTransformParams](#world-transform-params-%E4%B8%96%E7%95%8C%E5%8F%98%E6%8D%A2%E5%8F%82%E6%95%B0-float4-unity_worldtransformparams)
    - [Transform Position: 变换位置, 不同空间转换](#transform-position-%E5%8F%98%E6%8D%A2%E4%BD%8D%E7%BD%AE-%E4%B8%8D%E5%90%8C%E7%A9%BA%E9%97%B4%E8%BD%AC%E6%8D%A2)
        - [Object To World](#object-to-world)
        - [Object To View](#object-to-view)
        - [Object To Tangent](#object-to-tangent)
        - [Object To Clip](#object-to-clip)
        - [Object To Clip， Perpective Divide](#object-to-clip-perpective-divide)
        - [World To Object](#world-to-object)
        - [World To View](#world-to-view)
        - [World To Tangent](#world-to-tangent)
        - [World To Clip](#world-to-clip)
        - [World To Clip， Perpective Divide](#world-to-clip-perpective-divide)
        - [View To Object](#view-to-object)
        - [View To World](#view-to-world)
        - [View To Tangent](#view-to-tangent)
        - [View To Clip](#view-to-clip)
        - [View To Clip， Perpective Divide](#view-to-clip-perpective-divide)
        - [Tangent To Object,  Inverse TBN: Faset 快速的](#tangent-to-object--inverse-tbn-faset-%E5%BF%AB%E9%80%9F%E7%9A%84)
        - [Tangent To Object,  Inverse TBN: Precise 精确的](#tangent-to-object--inverse-tbn-precise-%E7%B2%BE%E7%A1%AE%E7%9A%84)
        - [Tangent To World](#tangent-to-world)
        - [Tangent To View](#tangent-to-view)
        - [Tangent To Clip](#tangent-to-clip)
- [Light: 灯光](#light-%E7%81%AF%E5%85%89)
    - [Blinn-Phong Light: Blinn-Phong 光照模型](#blinn-phong-light-blinn-phong-%E5%85%89%E7%85%A7%E6%A8%A1%E5%9E%8B)
    - [Fog And Ambient Colors： 雾和环境光颜色](#fog-and-ambient-colors-%E9%9B%BE%E5%92%8C%E7%8E%AF%E5%A2%83%E5%85%89%E9%A2%9C%E8%89%B2)
    - [Fog Params: 雾参数](#fog-params-%E9%9B%BE%E5%8F%82%E6%95%B0)
    - [Indirect Diffuse Light: 间接漫反射](#indirect-diffuse-light-%E9%97%B4%E6%8E%A5%E6%BC%AB%E5%8F%8D%E5%B0%84)
    - [Indirect Specular Light: 间接镜面照明](#indirect-specular-light-%E9%97%B4%E6%8E%A5%E9%95%9C%E9%9D%A2%E7%85%A7%E6%98%8E)
    - [Light Attenuation: 灯光阴影](#light-attenuation-%E7%81%AF%E5%85%89%E9%98%B4%E5%BD%B1)
    - [Light Color: 灯光颜色](#light-color-%E7%81%AF%E5%85%89%E9%A2%9C%E8%89%B2)
    - [Object Space Light Dir: 对象空间灯光方向 float3 v3 = ObjSpaceLightDir(v4)](#object-space-light-dir-%E5%AF%B9%E8%B1%A1%E7%A9%BA%E9%97%B4%E7%81%AF%E5%85%89%E6%96%B9%E5%90%91-float3-v3--objspacelightdirv4)
    - [World Space Light Dir: 世界空间灯光方向](#world-space-light-dir-%E4%B8%96%E7%95%8C%E7%A9%BA%E9%97%B4%E7%81%AF%E5%85%89%E6%96%B9%E5%90%91)
    - [World Space Light Pos: 灯光信息（位置/方向， 类型） _WorldSpaceLightPos0](#world-space-light-pos-%E7%81%AF%E5%85%89%E4%BF%A1%E6%81%AF%E4%BD%8D%E7%BD%AE%E6%96%B9%E5%90%91-%E7%B1%BB%E5%9E%8B-_worldspacelightpos0)
    - [Shade Vertex Lights: 阴影顶点灯](#shade-vertex-lights-%E9%98%B4%E5%BD%B1%E9%A1%B6%E7%82%B9%E7%81%AF)
    - [Standard Surface Light: 标准表面光](#standard-surface-light-%E6%A0%87%E5%87%86%E8%A1%A8%E9%9D%A2%E5%85%89)
- [Surface Data: 表面数据](#surface-data-%E8%A1%A8%E9%9D%A2%E6%95%B0%E6%8D%AE)
    - [Bling-Phong Half Vector: 世界坐标系， 视角和灯光方向之和。normalize( worldViewDir + worldSpaceLightDir  )](#bling-phong-half-vector-%E4%B8%96%E7%95%8C%E5%9D%90%E6%A0%87%E7%B3%BB-%E8%A7%86%E8%A7%92%E5%92%8C%E7%81%AF%E5%85%89%E6%96%B9%E5%90%91%E4%B9%8B%E5%92%8Cnormalize-worldviewdir--worldspacelightdir--)
    - [Depth Fade: 深度淡入淡出](#depth-fade-%E6%B7%B1%E5%BA%A6%E6%B7%A1%E5%85%A5%E6%B7%A1%E5%87%BA)
    - [Fresnel: 菲涅耳](#fresnel-%E8%8F%B2%E6%B6%85%E8%80%B3)
    - [Half Lambert Term:  世界法线和世界灯光方向dot值 * 0.5 + 0.5。 dot(worldNormal, worldSpaceLightDir) * 0.5 + 0.5](#half-lambert-term--%E4%B8%96%E7%95%8C%E6%B3%95%E7%BA%BF%E5%92%8C%E4%B8%96%E7%95%8C%E7%81%AF%E5%85%89%E6%96%B9%E5%90%91dot%E5%80%BC--05--05-dotworldnormal-worldspacelightdir--05--05)
    - [Surface Depth: 表面深度。 eyeDepth = -UnityObjectToViewPos( v.vertex.xyz ).z](#surface-depth-%E8%A1%A8%E9%9D%A2%E6%B7%B1%E5%BA%A6-eyedepth---unityobjecttoviewpos-vvertexxyz-z)
    - [Template Fragment Data: 模板片段数据](#template-fragment-data-%E6%A8%A1%E6%9D%BF%E7%89%87%E6%AE%B5%E6%95%B0%E6%8D%AE)
    - [Template Local Var Data: 模板本地变量数据](#template-local-var-data-%E6%A8%A1%E6%9D%BF%E6%9C%AC%E5%9C%B0%E5%8F%98%E9%87%8F%E6%95%B0%E6%8D%AE)
    - [World Bitangent: 世界法线和切线垂直面方向](#world-bitangent-%E4%B8%96%E7%95%8C%E6%B3%95%E7%BA%BF%E5%92%8C%E5%88%87%E7%BA%BF%E5%9E%82%E7%9B%B4%E9%9D%A2%E6%96%B9%E5%90%91)
    - [World Normal: 世界法线](#world-normal-%E4%B8%96%E7%95%8C%E6%B3%95%E7%BA%BF)
    - [World Position:世界位置 float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;](#world-position%E4%B8%96%E7%95%8C%E4%BD%8D%E7%BD%AE-float3-ase_worldpos--mulunity_objecttoworld-vvertexxyz)
    - [World Reflection: 世界反射](#world-reflection-%E4%B8%96%E7%95%8C%E5%8F%8D%E5%B0%84)
    - [World Tangent: 世界切线, float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);](#world-tangent-%E4%B8%96%E7%95%8C%E5%88%87%E7%BA%BF-float3-ase_worldtangent--unityobjecttoworlddirvase_tangent)
- [Image Effects : 图片效果](#image-effects--%E5%9B%BE%E7%89%87%E6%95%88%E6%9E%9C)
    - [Blend Operations: 混合操作](#blend-operations-%E6%B7%B7%E5%90%88%E6%93%8D%E4%BD%9C)
        - [Color Burn](#color-burn)
        - [Color Dodge](#color-dodge)
        - [Darken](#darken)
        - [Divide](#divide)
        - [Difference](#difference)
        - [Exclusion](#exclusion)
        - [Soft Light](#soft-light)
        - [Hard Light](#hard-light)
        - [Hard Mix](#hard-mix)
        - [Lighten](#lighten)
        - [Linear Burn](#linear-burn)
        - [Linear Dodge](#linear-dodge)
        - [Linear Light](#linear-light)
        - [Multiply](#multiply)
        - [Overlay](#overlay)
        - [Pin Light](#pin-light)
        - [Subtract](#subtract)
        - [Screen](#screen)
        - [Vivid Light](#vivid-light)
    - [Desaturate: 去饱和度](#desaturate-%E5%8E%BB%E9%A5%B1%E5%92%8C%E5%BA%A6)
    - [Grayscale: 去色, 灰色图](#grayscale-%E5%8E%BB%E8%89%B2-%E7%81%B0%E8%89%B2%E5%9B%BE)
    - [Luminance: 去色, 亮度图](#luminance-%E5%8E%BB%E8%89%B2-%E4%BA%AE%E5%BA%A6%E5%9B%BE)
    - [Gamma To Linear: 伽马](#gamma-to-linear-%E4%BC%BD%E9%A9%AC)
    - [Linear To Gamma: 伽马](#linear-to-gamma-%E4%BC%BD%E9%A9%AC)
    - [RGB To HSV:  RGB 转 HSV](#rgb-to-hsv--rgb-%E8%BD%AC-hsv)
    - [HVS To RGB](#hvs-to-rgb)
    - [Posterize: 色彩分离](#posterize-%E8%89%B2%E5%BD%A9%E5%88%86%E7%A6%BB)
    - [Simple Contrast: 简单对比度](#simple-contrast-%E7%AE%80%E5%8D%95%E5%AF%B9%E6%AF%94%E5%BA%A6)
- [Miscellaneous: 其他](#miscellaneous-%E5%85%B6%E4%BB%96)
    - [Billboard: 广告牌](#billboard-%E5%B9%BF%E5%91%8A%E7%89%8C)
    - [Checkerboard: 棋盘格纹理](#checkerboard-%E6%A3%8B%E7%9B%98%E6%A0%BC%E7%BA%B9%E7%90%86)
    - [Clip: 丢弃像素](#clip-%E4%B8%A2%E5%BC%83%E5%83%8F%E7%B4%A0)
    - [Color Space Double: 双色空间, unity_ColorSpaceDouble](#color-space-double-%E5%8F%8C%E8%89%B2%E7%A9%BA%E9%97%B4-unity_colorspacedouble)
    - [Decode Depth Normal: 解码深度法线](#decode-depth-normal-%E8%A7%A3%E7%A0%81%E6%B7%B1%E5%BA%A6%E6%B3%95%E7%BA%BF)
    - [Decode Lightmap: 解码光照贴图](#decode-lightmap-%E8%A7%A3%E7%A0%81%E5%85%89%E7%85%A7%E8%B4%B4%E5%9B%BE)
    - [Decode Float RG: **解码浮点RG**](#decode-float-rg-%E8%A7%A3%E7%A0%81%E6%B5%AE%E7%82%B9rg)
    - [Encode Float RG:  **编码Float RG**](#encode-float-rg--%E7%BC%96%E7%A0%81float-rg)
    - [DecodeFloatRGBA: **解码浮点RGBA**](#decodefloatrgba-%E8%A7%A3%E7%A0%81%E6%B5%AE%E7%82%B9rgba)
    - [Encode Float RGBA:  **编码浮点RGBA**](#encode-float-rgba--%E7%BC%96%E7%A0%81%E6%B5%AE%E7%82%B9rgba)
    - [Diffuse And Specular From Metallic: 漫反射和镜面反射](#diffuse-and-specular-from-metallic-%E6%BC%AB%E5%8F%8D%E5%B0%84%E5%92%8C%E9%95%9C%E9%9D%A2%E5%8F%8D%E5%B0%84)
    - [Distance-based Tessellation: 基于距离的镶嵌](#distance-based-tessellation-%E5%9F%BA%E4%BA%8E%E8%B7%9D%E7%A6%BB%E7%9A%84%E9%95%B6%E5%B5%8C)
    - [Edge Length Tessellation: 边缘长度细分](#edge-length-tessellation-%E8%BE%B9%E7%BC%98%E9%95%BF%E5%BA%A6%E7%BB%86%E5%88%86)
    - [Edge Length Tessellation With Cull： 带剔除节点的边长细分](#edge-length-tessellation-with-cull-%E5%B8%A6%E5%89%94%E9%99%A4%E8%8A%82%E7%82%B9%E7%9A%84%E8%BE%B9%E9%95%BF%E7%BB%86%E5%88%86)
    - [Register Local Var, Get Local Var： 注册本地变量和获取变得变量](#register-local-var-get-local-var-%E6%B3%A8%E5%86%8C%E6%9C%AC%E5%9C%B0%E5%8F%98%E9%87%8F%E5%92%8C%E8%8E%B7%E5%8F%96%E5%8F%98%E5%BE%97%E5%8F%98%E9%87%8F)
    - [Layered Blend: 分层混合](#layered-blend-%E5%88%86%E5%B1%82%E6%B7%B7%E5%90%88)
    - [Noise Generator: **噪音产生器**](#noise-generator-%E5%99%AA%E9%9F%B3%E4%BA%A7%E7%94%9F%E5%99%A8)
    - [Noise Sine Wave:](#noise-sine-wave)
    - [Summed Blend: 求和混合](#summed-blend-%E6%B1%82%E5%92%8C%E6%B7%B7%E5%90%88)
    - [Switch by Face: 切换面, VFACE](#switch-by-face-%E5%88%87%E6%8D%A2%E9%9D%A2-vface)
    - [Vertex To Fragment: 传送变量， 顶点 到 片段](#vertex-to-fragment-%E4%BC%A0%E9%80%81%E5%8F%98%E9%87%8F-%E9%A1%B6%E7%82%B9-%E5%88%B0-%E7%89%87%E6%AE%B5)
    - [Voronoi:  生成泰森多边形纹理， 水面波光粼粼](#voronoi--%E7%94%9F%E6%88%90%E6%B3%B0%E6%A3%AE%E5%A4%9A%E8%BE%B9%E5%BD%A2%E7%BA%B9%E7%90%86-%E6%B0%B4%E9%9D%A2%E6%B3%A2%E5%85%89%E7%B2%BC%E7%B2%BC)
    - [Triangle Wave： 三角波](#triangle-wave-%E4%B8%89%E8%A7%92%E6%B3%A2)
    - [Square Wave: 方波](#square-wave-%E6%96%B9%E6%B3%A2)
    - [Sawtooh Wave:](#sawtooh-wave)
    - [Rounded Rectangle: 圆角矩形](#rounded-rectangle-%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A2)
    - [Rectangle: 矩形](#rectangle-%E7%9F%A9%E5%BD%A2)
    - [Polygon: 多边形](#polygon-%E5%A4%9A%E8%BE%B9%E5%BD%A2)
    - [Ellipse: 椭圆](#ellipse-%E6%A4%AD%E5%9C%86)
    - [Flow: 浮动，可以做云彩飘动](#flow-%E6%B5%AE%E5%8A%A8%E5%8F%AF%E4%BB%A5%E5%81%9A%E4%BA%91%E5%BD%A9%E9%A3%98%E5%8A%A8)
- [总结](#%E6%80%BB%E7%BB%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->









# Vertex Data: 顶点数据

### Face: 渲染面相对摄像机 正面或背面

如果渲染的表面面向摄影机，则“面”节点输出正值**1**；如果其背离摄影机，则输出负值**-1**。

			fixed4 frag (v2f i , half ase_vface : VFACE) : SV_Target
			{
			}

​			![image-20200528233021046](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200528233021046.png)



### Instance ID

> 顶点ID

```glsl
unity_InstanceID;
```

![image-20200528233310894](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200528233310894.png)

![image-20200528233406513](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200528233406513.png)



### Object Scale: GameObject世界坐标系缩放

> GameObject的世界坐标系缩放，从模型世界坐标系矩阵里取

```glsl
float3 ase_objectScale = float3
    ( 
        length( unity_ObjectToWorld[ 0 ].xyz ), 
        length( unity_ObjectToWorld[ 1 ].xyz ), 
        length( unity_ObjectToWorld[ 2 ].xyz ) 
    );
```

​				



### Primitive ID	

> 顶点原始ID，用于曲面细分

	fixed4 frag (v2f i , uint ase_primitiveId : SV_PrimitiveID) : SV_Target
	{
	
	}
![image-20200528234227337](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200528234227337.png)



### Vertex Bitangent: 顶点法线和切线的叉乘（垂直方向）

> 顶点法线和切线的叉乘（垂直方向）

```glsl
float3 ase_vertexBitangent = cross(v.normal,v.tangent.xyz);
```

![image-20200528235919568](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200528235919568.png)

![image-20200529000002953](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529000002953.png)

### Vertex Color: 顶点颜色

> 顶点颜色 **v.color;**

```glsl
struct appdata
{
    float4 vertex : POSITION;
    float4 color : COLOR;
    UNITY_VERTEX_INPUT_INSTANCE_ID

};
    
v2f vert ( appdata v )
{
    v.color;
}

```



### Vertex ID

```glsl
v2f vert ( appdata v , uint ase_vertexId : SV_VertexID)
{
}
```

![image-20200529001034546](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529001034546.png)

![image-20200529001136845](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529001136845.png)

![image-20200529001521897](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529001521897.png)

![image-20200529001502821](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529001502821.png)

### Vertex Normal： 顶点法线

> 顶点法线

```glsl
struct appdata
{
    float3 normal : NORMAL;
};
    
v.normal;
```

![image-20200529001630456](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529001630456.png)

![image-20200529001927893](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529001927893.png)

### Vertex Position：顶点位置

```glsl
struct appdata
{
	float4 vertex : POSITION;

};

v.vertex;
```





![image-20200529002007576](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529002007576.png)

![image-20200529002123391](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529002123391.png)



### Vertex Tangent: 顶点切线

> 顶点切线

```glsl
struct appdata
{
	float4 tangent : TANGENT;
};

v.tangent;
```



![image-20200529002234707](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529002234707.png)

![image-20200529002406609](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529002406609.png)

### Vertex Tangent Sign: 顶点切线符号节点

“顶点切线符号”节点在对象空间中输出顶点切线符号，更具体地说，它输出其向量的W分量。如果连接到“顶点偏移”或“顶点法线”以外的端口，则输出插值。

```glsl
float ase_vertexTangentSign = v.tangent.w * unity_WorldTransformParams.w;
```

![image-20200529002531906](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529002531906.png)

![image-20200529002621636](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529002621636.png)



Vertex TexCoord

顶点UV坐标

```glsl
struct appdata
{
	float4 texcoord : TEXCOORD0;
};

v.texcoord;
```

![image-20200529002704555](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529002704555.png)

![image-20200529002741270](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529002741270.png)





# Verctor Opertors: 矢量操作

### Append: 组合矢量

```
float2 appendResult44 = (float2(v.vertex.xyz.x , v.color.r));
float4 appendResult37 = (float4(float3(0,1,0) , appendResult44.x));
```

![image-20200529004921243](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529004921243.png)

![image-20200529004954253](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529004954253.png)



### Break To Components:  拆分矢量



```glsl
float3 break47 = float3(2,0,2);
float2 appendResult50 = (float2(break47.x , break47.z));
```

![image-20200529005554536](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529005554536.png)



###  Component Mask: 访问分量

```
vertexValue = (float3(0,1,0)).xyz;
```



```
finalColor = float4( (float2( 0,0 )).xy, 0.0 , 0.0 );
```

![image-20200529010529212](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529010529212.png)



### Create Orthogonal Vector: 创建正交向量

```glsl

fixed4 finalColor;
float3 right = normalize( float3(1,0,0) );
float3 up = normalize( float3(1,1,0) );
float3 front = normalize( cross( right , up ) );
float3 offset = mul
    ( 
        float4x4
        (
            float4( right , 0.0 ), 
            float4( cross( front , right ) , 0.0 ), 
            float4( front , 0.0 ), 
            float4( 0,0,0,0 )
        ), 
        float4( i.ase_texcoord.xyz , 0.0 ) 
    ).xyz;


finalColor = float4( offset , 0.0 );
```



![image-20200529012459794](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529012459794.png)



![image-20200529013730150](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529013730150.png)

![image-20200529014054806](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529014054806.png)



Cross 叉乘 垂直面方向

```glsl
cross( float3(1,0,0) , float3(0,1,0) ); // float3(0, 0, 1)
```

![image-20200529014349659](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529014349659.png)

![image-20200529014506871](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529014506871.png)

### Distance: 距离

```glsl
float d = distance( float3(0,0,0) , float3(1,1,1) );
```



### Dot: 点乘

```glsl
float d = dot( float3(0,0,0) , float3(1,1,1) );
```



### Length: 长度

```glsl
float d = length( float3(1,0,0);
```



### normalize: 归一化

```glsl
float3 n = normalize( float3(1,2.01,0.36) );
```



### reflect: 反射

反射节点根据给定的[入射](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Reflect#paramIncident)向量和表面[法线](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Reflect#paramNormal)向量计算反射向量。在内部，反射向量是通过表达式**Incident-2 \* Normal \* [Dot](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Dot)（Incident•Normal）计算的。** 请注意，应该对Normal向量进行归一化，因为这样生成的反射向量将具有与原始Incident长度相同的长度。

如果法向和事件矢量的通道数量不同，则进行强制转换以使输入类型与最多的通道匹配。这也将确定反射的矢量大小。

```
 Incident - 2 * Normal * Dot(Incident•Normal) 
```



```
float3 r = reflect( float3(1,1,1) , i.v_normal );
```

![image-20200529020122172](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529020122172.png)

![image-20200529020057078](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529020057078.png)



### Refract: 折射

折射节点根据给定的[入射](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Refract#paramIncident)向量，表面[法线](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Refract#paramNormal)向量和表面界面处的[折射率之](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Refract#paramEta)比来计算折射向量。正常向量和事件向量都应归一化。

如果法向和事件矢量的通道数量不同，则进行强制转换以使输入类型与最多的通道匹配。这也将确定折射矢量的大小。



```glsl
float3 r = refract( float3(1,1,0) , normalize( i.normal ) , eta )
```

![RefractNode.gif](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/RefractNode.gif)



### Rotate About Axis: 绕轴旋转

```glsl
uniform float3 _axis;
uniform float _Angle;
uniform float3 _pivot;
float3 RotateAroundAxis( float3 center, float3 original, float3 u, float angle )
{
    original -= center;
    float C = cos( angle );
    float S = sin( angle );
    float t = 1 - C;
    float m00 = t * u.x * u.x + C;
    float m01 = t * u.x * u.y - S * u.z;
    float m02 = t * u.x * u.z + S * u.y;
    float m10 = t * u.x * u.y + S * u.z;
    float m11 = t * u.y * u.y + C;
    float m12 = t * u.y * u.z - S * u.x;
    float m20 = t * u.x * u.z - S * u.y;
    float m21 = t * u.y * u.z + S * u.x;
    float m22 = t * u.z * u.z + C;
    float3x3 finalMatrix = float3x3( m00, m01, m02, m10, m11, m12, m20, m21, m22 );
    return mul( finalMatrix, original ) + center;
}

float3 rotatedValue93 = RotateAroundAxis( _pivot, v.vertex.xyz, normalize( _axis ), _Angle );
```

![image-20200529024107858](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529024107858.png)



### Swizzle: 访问分量

```glsl
(_Vector0).xyzz.xyz;
```

![image-20200529024742546](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529024742546.png)

![image-20200529031010990](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529031010990.png)

### Transform Direction: 变换坐标空间

```glsl
// from: object, to: world
 float4 n = mul( unity_ObjectToWorld, float4( i.ase_normal, 0 ) )
     
// from: object, to: View   
 mul( UNITY_MATRIX_IT_MV, float4( i.ase_normal, 0 ) ).xyz;   

// from: object, to: Tangent   
float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
float3x3 ase_worldToTangent = float3x3(ase_worldTangent,ase_worldBitangent,ase_worldNormal);
float3 objectToTangentDir112 = mul( ase_worldToTangent, mul( unity_ObjectToWorld, float4( v.ase_normal, 0 ) ).xyz);

// from: object, to: Clip  
mul(UNITY_MATRIX_VP, mul(unity_ObjectToWorld, float4(v.ase_normal, 0.0)));
```



```glsl
// from: world, to: object
mul( unity_WorldToObject, float4( v.ase_normal, 0 ) ).xyz;

// from: world, to: view
mul( UNITY_MATRIX_V, float4( v.ase_normal, 0 ) ).xyz;

// from: world, to: Tangent
float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
float3x3 ase_worldToTangent = float3x3(ase_worldTangent,ase_worldBitangent,ase_worldNormal);
float3 worldToTangentDir112 = mul( ase_worldToTangent, v.ase_normal);

// from: world, to: Clip  
mul(UNITY_MATRIX_VP, float4(v.ase_normal, 0.0));

```

```glsl
// from: view, to: world  
mul( UNITY_MATRIX_I_V, float4( v.ase_normal, 0 ) ).xyz;

// from: view, to: object  
mul( UNITY_MATRIX_T_MV, float4( v.ase_normal, 0 ) ).xyz;

// from: view, to: clip  
mul(UNITY_MATRIX_P, float4(v.ase_normal, 0.0));
```





![image-20200529025136494](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529025136494.png)







![image-20200529025200720](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529025200720.png)

![image-20200529025434062](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/docimage/image-20200529025434062.png)



# Time: 时间

### Time: 时间

```glsl
 _Time.y
```



### Time Parmeters: 时间参数

```glsl
// t/20
_Time.x;
// t
_Time.y;
// t*2
_Time.z;
// t*3
_Time.w;
```

![image-20200530225746564](docimage/image-20200530225746564.png)

### Delta Time : 每帧时长

```glsl
// dt
unity_DeltaTime.x;
// 1/dt
unity_DeltaTime.y;
// smoothDt
unity_DeltaTime.z;
// 1/smoothDt
unity_DeltaTime.w;
```

![image-20200530225020749](docimage/image-20200530225020749.png)



### Cos Time: Cos时间

> cos(time / x)

```glsl
// t/8
_CosTime.x
// t/4
_CosTime.y    
// t/2
_CosTime.z
// t
_CosTime.w
```

![image-20200530224750142](docimage/image-20200530224750142.png)

### Sin Time: Sin时间

> sin(time / x) 

```glsl
// t/8
_SinTime.x
// t/4
_SinTime.y    
// t/2
_SinTime.z
// t
_SinTime.w
```

![image-20200530225446031](docimage/image-20200530225446031.png)





# Math Operators: 数学操作

[http://wiki.amplify.pt/index.php?title=Category:Math_Operators]: http://wiki.amplify.pt/index.php?title=Category:Math_Operators



### Abs: 绝对值

```glsl
abs( i.ase_normal )
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/AbsGraphicNode.png)

![AbsNode.gif](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/AbsNode-1590852505541.gif)



### Add: 加法 +

> a + b  + ...

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/AddNode.jpg)

### Subtract: 减法 -

> a - b 

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SubtractNode.jpg)









### Multiply: 乘法 *

> a  * b * ...

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/MultiplyNode.jpg)



### Divide: 除法 /

> a / b

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/DivideNode.jpg)



### Remainder: 取余数 , [A ](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Remainder#paramA)**％**[B](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Remainder#paramB)的除法余数

```
0.1 % 0.3； // 0.1
0.2 % 0.3； // 0.2
0.3 % 0.3； // 0
5.2 % 5; // 0.2
6.2 % 5; // 1.2
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/RemainderNode.jpg)



### Ceil:  向上取整

> ceil( v.ase_normal )

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/CeilGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/CeilNode.gif)

### Floor:  向下取整

```glsl
floor( 1.1 ) // 1
floor( 1.6 ) // 2
```



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/FloorGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/FloorNode.gif)



### round: 四舍五入取整

```glsl
round(1.1); // 1
round(1.5); // 2
round(1.6); // 2

```



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/RoundGraphicNode.png)



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/RoundNode.gif)

### Fmod:  取余数, 输出除法[A ](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fmod#paramA)**/** [B](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fmod#paramB)的其余部分，其符号与**A**相同

Fmod节点输出除法[A ](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fmod#paramA)**/** [B](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fmod#paramB)的其余部分，其符号与**A**相同。请注意，如果B中的指定值为零并且其结果是实现定义的，则将被0除。
**注意：**多通道数据类型之间的FMod按通道进行。如果*A*和*B的*频道数量不同，则进行强制转换以匹配具有最多频道数量的频道。

```glsl
fmod( -4.1 , 4.0 ); // -0.1
fmod( 4.1 , 4.0 ); // 0.1
fmod( 4 , 4.0 ); // 0  
fmod( 4 , 8.0 ); // 0  
```

![image-20200531021316661](docimage/image-20200531021316661.png)



### Simplified Fmod :  简化的Fmod节点输出除法[A ](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Simplified_Fmod#paramA)**/** [B](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Simplified_Fmod#paramB)的余数。该节点比[Fmod](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fmod)节点性能更高，但不能保证最终生成值的符号。

```glsl
frac(a/b)*b
```

![image-20200603001607986](docimage/image-20200603001607986.png)



### Fract: 取小数部分 ,  v - floor(v)

输出其[输入](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fract#paramInput)上设置的值或向量各个分量的小数部分。在内部，它的作用类似于**Input- [Floor](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Floor)（Input）**，它删除了值的整数部分，只保留了小数部分。

```glsl
frac( 4.2 ); // 0.2
```



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/FractGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/FractNode.gif)











### Lerp:  线性插值

Lerp节点*（快捷方式：L键）*通过[Alpha](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Lerp#paramAlpha)计算两个值[A](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Lerp#paramA)和[B](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Lerp#paramB)之间的线性插值。换句话说，它将使用表达式**（（1-A）\* I + B \* I）**，根据称为Alpha的第三个Alpha值，在A和B之间生成新的混合值。在其它会返回-内插的值[1 0]之间的范围内*甲*如果*I = 0*和*乙*如果*I = 1*。

**注意：**多通道数据类型之间的线性插值是按通道进行的。如果*A*和*B的*频道数量不同，则进行强制转换以匹配具有最多频道数量的频道。

```glsl
float lerp(float a, float b, float t)
{
    return (1 - a) * t + b * t;
}
```



> (1 - A) * t + b * t

```glsl
float4 lerpResult223 = lerp( color225 , color226 , dotResult126);
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/LerpNode.jpg)

![image-20200531024633370](docimage/image-20200531024633370.png)

### Compute Filter Width: 计算滤波器宽度

```glsl
float3 v3 = i.ase_normal;

float3 v3_ddx = ddx( v3 );
float dot_ddx = dot( v3_ddx , v3_ddx );

float3 v3_ddy = ddy( v3 );
float dot_ddy = dot( v3_ddy , v3_ddy );

float dot_val = 0;
if( dot_ddx <= dot_ddy )
    dot_val = dot_ddy;
else
    dot_val = dot_ddx;

float4 v3_out = (sqrt( dot_val )).xxxx;
```

![image-20200530235220455](docimage/image-20200530235220455.png)

![image-20200530235456927](docimage/image-20200530235456927.png)



### DDX: 输出对于屏幕空间x坐标输出指定[输入](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/DDX#paramInput)值的偏导数。

[Unity shader 中ddx/ddy偏导数的原理和简单应用]: https://blog.csdn.net/chy555chy/article/details/80177015?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/DDXNode.jpg)



#### 应用1: 顶点位置生成法线

执行 normalize( cross(ddx(pos),ddy(pos)) ) 就求出的面的法线，但是这里要注意，在HlSL上面，或者Unity上面要写成normalize( cross(ddy(pos),ddx(pos)) ),不然法线是反向的。这个是由于左右手坐标系引起的。

```glsl
normalize(cross(ddy(IN.worldPos),ddx(IN.worldPos)));
```

![image-20200531001456596](docimage/image-20200531001456596.png)

#### 应用2: 图片锐化

```glsl
void surf (Input IN, inout SurfaceOutput o) {
    half4 c = tex2D(_MainTex, IN.uv_MainTex);
    //c += ddx(c)*2 + ddy(c)*2; //这行代码开启和关闭的效果
    o.Albedo = c.rgb;
    o.Alpha = c.a;
}
```

![image-20200531002551609](docimage/image-20200531002551609.png)





### DDY: 输出相对于屏幕空间y坐标的指定[输入](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/DDY#paramInput)值的偏导数。

```glsl
float3 v3 = ddx( i.ase_normal )
```



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/DDYNode.jpg)





### FWidth: 偏导数的绝对值 abs(ddx(input))   + abs(ddy(input))

输出指定[输入](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/FWidth#paramInput)值的偏导数的绝对值，或者在输出矢量的情况下输出输入矢量的每个分量值。换句话说，它在水平和垂直窗口空间**[abs](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Abs)（[ddx](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/DDX)（Input））+ [abs](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Abs)（[ddy](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/DDY)（Input））中[求和](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/DDY)输入**值的偏导数的**[绝对值](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Abs)**。



```glsl
fwidth( i.ase_texcoord.xyz )
```

![image-20200531023731834](docimage/image-20200531023731834.png)

![image-20200603002651571](docimage/image-20200603002651571.png)

### Exp: 以自然常数e为底的[指数函数](https://baike.baidu.com/item/指数函数/6013301)，它同时又是[航模](https://baike.baidu.com/item/航模/10576318)名词，全称Exponential(指数曲线)



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ExpGraphicNode.png)



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ExpNode.gif)

```glsl
exp( 1 ) // 2.71828
```

> exp(-10) 0.00004539992976248485
> exp(-9) 0.00012340980408667956
> exp(-8) 0.00033546262790251185
> exp(-7) 0.0009118819655545162
> exp(-6) 0.0024787521766663585
> exp(-5) 0.006737946999085467
> exp(-4) 0.01831563888873418
> exp(-3) 0.049787068367863944
> exp(-2) 0.1353352832366127
> exp(-1) 0.36787944117144233
> exp(0) 1
> exp(1) 2.718281828459045
> exp(2) 7.38905609893065
> exp(3) 20.085536923187668
> exp(4) 54.598150033144236
> exp(5) 148.4131591025766
> exp(6) 403.4287934927351
> exp(7) 1096.6331584284585
> exp(8) 2980.9579870417283
> exp(9) 8103.083927575384



### Exp2: 以2为底的指数值

> 2 ^ n,     2的n次方
>
> Math.pow(2, n),    n>=0时
>
> 1 / Math.pow(2, Math.abs(n)) == Math.pow(2, n)   n<0时

```glsl
exp2( -4 ), 1/exp2(4);  //0.0625
exp2( -3 ), 1/exp2(3);  //0.125
exp2( -2 ), 1/exp2(2);  //0.25
exp2( -1 ), 1/exp2(1);  //0.5
exp2( 0 ); // 1
exp2( 1 ); // 2
exp2( 2 ); // 4
exp2( 3 ); // 8
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/Exp2GraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/Exp2Node.gif)





```javascript
for(var i =-10; i < 10; i ++)
{
	console.log("2 ^ "+ i+"=", Math.pow(2, i))
}
```

> 2 ^ -10= 0.0009765625
> 2 ^ -9= 0.001953125
> 2 ^ -8= 0.00390625
> 2 ^ -7= 0.0078125
> 2 ^ -6= 0.015625
> 2 ^ -5= 0.03125
> 2 ^ -4= 0.0625
> 2 ^ -3= 0.125
> 2 ^ -2= 0.25
> 2 ^ -1= 0.5
> 2 ^ 0= 1
> 2 ^ 1= 2
> 2 ^ 2= 4
> 2 ^ 3= 8
> 2 ^ 4= 16
> 2 ^ 5= 32
> 2 ^ 6= 64
> 2 ^ 7= 128
> 2 ^ 8= 256
> 2 ^ 9= 512





### pow: 幂运算

```
pow(10, 2); // 100
pow(10, 3); // 1000
pow(10, 0); // 1
pow(10, -1); // 0.1
pow(10, -2); // 0.01
```



| Base | Exp  |            Result            |
| :--: | :--: | :--------------------------: |
| < 0  | any  |             NaN              |
| > 0  | == 0 |              1               |
| == 0 | > 0  |              0               |
| == 0 | < 0  |           Infinite           |
| > 0  | < 0  |         1 / Base-Exp         |
| == 0 | == 0 | Depends on GPU (0, 1 or NaN) |

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/PowerNode.jpg)



### Log:  自然对数, 标量或向量各个分量的基本e对数值

提供标量或向量各个分量的基本e对数值。

> 输入大于0

```glsl
log( _Float10 )
```



```javascript
for(var i =1; i < 10; i ++)
{
	console.log("log("+ i+") =", Math.log( i / 10))
}

for(var i =1; i < 10; i ++)
{
	console.log("log("+ i+") =", Math.log( i))
}
for(var i =1; i < 10; i ++)
{
	console.log("log("+ (Math.pow(10,i) )+") =", Math.log( Math.pow(10,i) ))
}
```

> log(0.1) = -2.3025850929940455
> log(0.2) = -1.6094379124341003
> log(0.3) = -1.2039728043259361
> log(0.4) = -0.916290731874155
> log(0.5) = -0.6931471805599453
> log(0.6) = -0.5108256237659907
> log(0.7) = -0.35667494393873245
> log(0.8) = -0.2231435513142097
> log(0.9) = -0.10536051565782628
> log(1) = 0
> log(2) = 0.6931471805599453
> log(3) = 1.0986122886681096
> log(4) = 1.3862943611198906
> log(5) = 1.6094379124341003
> log(6) = 1.791759469228055
> log(7) = 1.9459101490553132
> log(8) = 2.0794415416798357
> log(9) = 2.1972245773362196
> log(10) = 2.302585092994046
> log(100) = 4.605170185988092
> log(1000) = 6.907755278982137
> log(10000) = 9.210340371976184
> log(100000) = 11.512925464970229
> log(1000000) = 13.815510557964274
> log(10000000) = 16.11809565095832
> log(100000000) = 18.420680743952367
> log(1000000000) = 20.72326583694641



```javascript
for(var i =-10; i < 10; i ++)
{
	console.log("log( Math.exp("+i+") ) =", Math.log( Math.exp(i)), ", exp("+i+")=", Math.exp(i) )
}
```

> log( Math.exp(-10) ) = -10 , exp(-10)= 0.00004539992976248485
> log( Math.exp(-9) ) = -9 , exp(-9)= 0.00012340980408667956
> log( Math.exp(-8) ) = -8 , exp(-8)= 0.00033546262790251185
> log( Math.exp(-7) ) = -7 , exp(-7)= 0.0009118819655545162
> log( Math.exp(-6) ) = -6 , exp(-6)= 0.0024787521766663585
> log( Math.exp(-5) ) = -5 , exp(-5)= 0.006737946999085467
> log( Math.exp(-4) ) = -4 , exp(-4)= 0.01831563888873418
> log( Math.exp(-3) ) = -3 , exp(-3)= 0.049787068367863944
> log( Math.exp(-2) ) = -2 , exp(-2)= 0.1353352832366127
> log( Math.exp(-1) ) = -1 , exp(-1)= 0.36787944117144233
> log( Math.exp(0) ) = 0 , exp(0)= 1
> log( Math.exp(1) ) = 1 , exp(1)= 2.718281828459045
> log( Math.exp(2) ) = 2 , exp(2)= 7.38905609893065
> log( Math.exp(3) ) = 3 , exp(3)= 20.085536923187668
> log( Math.exp(4) ) = 4 , exp(4)= 54.598150033144236
> log( Math.exp(5) ) = 5 , exp(5)= 148.4131591025766
> log( Math.exp(6) ) = 6 , exp(6)= 403.4287934927351
> log( Math.exp(7) ) = 7 , exp(7)= 1096.6331584284585
> log( Math.exp(8) ) = 8 , exp(8)= 2980.9579870417283
> log( Math.exp(9) ) = 9 , exp(9)= 8103.083927575384

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/LogGraphicNode.png)



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/LogNode.gif)



### Log10:  以10为低的对数

```
log10( 10000 ); //4
```



```javascript
for(var i =-10; i < 10; i ++)
{
	console.log("log( log10(10, "+i+") ) =", Math.log10( Math.pow(10, i)), ", pow(10, "+i+")=", Math.pow(10, i) )
}
```

> log10( pow(10, -10) ) = -10 , pow(10, -10)= 1e-10
> log10( pow(10, -9) ) = -9 , pow(10, -9)= 1e-9
> log10( pow(10, -8) ) = -8 , pow(10, -8)= 1e-8
> log10( pow(10, -7) ) = -7 , pow(10, -7)= 1e-7
> log10( pow(10, -6) ) = -6 , pow(10, -6)= 0.000001
> log10( pow(10, -5) ) = -5 , pow(10, -5)= 0.000009999999999999999
> log10( pow(10, -4) ) = -4 , pow(10, -4)= 0.00009999999999999999
> log10( pow(10, -3) ) = -3 , pow(10, -3)= 0.001
> log10( pow(10, -2) ) = -2 , pow(10, -2)= 0.01
> log10( pow(10, -1) ) = -1 , pow(10, -1)= 0.1
> log10( pow(10, 0) ) = 0 , pow(10, 0)= 1
> log10( pow(10, 1) ) = 1 , pow(10, 1)= 10
> log10( pow(10, 2) ) = 2 , pow(10, 2)= 100
> log10( pow(10, 3) ) = 3 , pow(10, 3)= 1000
> log10( pow(10, 4) ) = 4 , pow(10, 4)= 10000
> log10( pow(10, 5) ) = 5 , pow(10, 5)= 100000
> log10( pow(10, 6) ) = 6 , pow(10, 6)= 1000000
> log10( pow(10, 7) ) = 7 , pow(10, 7)= 10000000
> log10( pow(10, 8) ) = 8 , pow(10, 8)= 100000000
> log10( pow(10, 9) ) = 9 , pow(10, 9)= 1000000000



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/Log10GraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/Log10Node.gif)



### Log2:  以2为低的对数

```
log2( 8 ); //3
```



```javascript
for(var i =-10; i < 10; i ++)
{
	console.log("log2( pow(2, "+i+") ) =", Math.log2( Math.pow(2, i)), ", pow(2, "+i+")=", Math.pow(2, i) )
}
```

> log2( pow(2, -10) ) = -10 , pow(2, -10)= 0.0009765625
> log2( pow(2, -9) ) = -9 , pow(2, -9)= 0.001953125
> log2( pow(2, -8) ) = -8 , pow(2, -8)= 0.00390625
> log2( pow(2, -7) ) = -7 , pow(2, -7)= 0.0078125
> log2( pow(2, -6) ) = -6 , pow(2, -6)= 0.015625
> log2( pow(2, -5) ) = -5 , pow(2, -5)= 0.03125
> log2( pow(2, -4) ) = -4 , pow(2, -4)= 0.0625
> log2( pow(2, -3) ) = -3 , pow(2, -3)= 0.125
> log2( pow(2, -2) ) = -2 , pow(2, -2)= 0.25
> log2( pow(2, -1) ) = -1 , pow(2, -1)= 0.5
> log2( pow(2, 0) ) = 0 , pow(2, 0)= 1
> log2( pow(2, 1) ) = 1 , pow(2, 1)= 2
> log2( pow(2, 2) ) = 2 , pow(2, 2)= 4
> log2( pow(2, 3) ) = 3 , pow(2, 3)= 8
> log2( pow(2, 4) ) = 4 , pow(2, 4)= 16
> log2( pow(2, 5) ) = 5 , pow(2, 5)= 32
> log2( pow(2, 6) ) = 6 , pow(2, 6)= 64
> log2( pow(2, 7) ) = 7 , pow(2, 7)= 128
> log2( pow(2, 8) ) = 8 , pow(2, 8)= 256
> log2( pow(2, 9) ) = 9 , pow(2, 9)= 512



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/Log2GraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/Log2Node.gif)

### sqrt: 平方根, 开平方

```javascript
for(var i = 1; i < 10; i ++)
{
    var input = Math.pow(i*0.1, 2);
    console.log("sqr("+input+")=", Math.sqrt(input));
}

for(var i = 1; i < 10; i ++)
{
    var input = Math.pow(i, 2);
    console.log("sqr("+input+")=", Math.sqrt(input));
}
```

> sqr(0.010000000000000002)= 0.1
> sqr(0.04000000000000001)= 0.2
> sqr(0.09000000000000002)= 0.30000000000000004
> sqr(0.16000000000000003)= 0.4
> sqr(0.25)= 0.5
> sqr(0.3600000000000001)= 0.6000000000000001
> sqr(0.4900000000000001)= 0.7000000000000001
> sqr(0.6400000000000001)= 0.8
> sqr(0.81)= 0.9
>
> sqr(1)= 1
> sqr(4)= 2
> sqr(9)= 3
> sqr(16)= 4
> sqr(25)= 5
> sqr(36)= 6
> sqr(49)= 7
> sqr(64)= 8
> sqr(81)= 9

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SqrtGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SqrtNode.gif)



### rsqrt：倒数 平方根, 1/sqr(input)

提供标量或由其[输入](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Rsqrt#paramInput)值定义的向量的各个分量的倒数平方根。也可以将其视为平方根的倒数**1 / [Sqrt](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Sqrt)（Input）**

```glsl
rsqrt(16); // 0.5 == 1/4 == 1 / sqr(pow(4, 2))
```



```javascript
for(var i = 1; i < 10; i ++)
{
    var input = Math.pow(i*0.1, 2);
    var rsqr = 1 / Math.sqrt(i)
    console.log("sqr("+input+")=", Math.sqrt(input), ", rsqr("+input+")=", rsqr);
}

for(var i = 1; i < 10; i ++)
{
    var input = Math.pow(i, 2);
    var rsqr = 1 / Math.sqrt(i)
    console.log("sqr("+input+")=", Math.sqrt(input), "rsqr("+input+")=", rsqr);
}
```

> sqr(0.010000000000000002)= 0.1 , rsqr(0.010000000000000002)= 1
> sqr(0.04000000000000001)= 0.2 , rsqr(0.04000000000000001)= 0.7071067811865475
> sqr(0.09000000000000002)= 0.30000000000000004 , rsqr(0.09000000000000002)= 0.5773502691896258
> sqr(0.16000000000000003)= 0.4 , rsqr(0.16000000000000003)= 0.5
> sqr(0.25)				= 0.5 , 			rsqr(0.25)= 0.4472135954999579
> sqr(0.3600000000000001)= 0.6000000000000001 , rsqr(0.3600000000000001)= 0.4082482904638631
> sqr(0.4900000000000001)= 0.7000000000000001 , rsqr(0.4900000000000001)= 0.3779644730092272
> sqr(0.6400000000000001)= 0.8 , rsqr(0.6400000000000001)= 0.35355339059327373
> sqr(0.81)= 0.9 , rsqr(0.81)= 0.3333333333333333
>
> sqr(1)= 1 , rsqr(1)= 1
> sqr(4)= 2 , rsqr(4)= 0.7071067811865475
> sqr(9)= 3 , rsqr(9)= 0.5773502691896258
> sqr(16)= 4 , rsqr(16)= 0.5
> sqr(25)= 5 , rsqr(25)= 0.4472135954999579
> sqr(36)= 6 , rsqr(36)= 0.4082482904638631
> sqr(49)= 7 , rsqr(49)= 0.3779644730092272
> sqr(64)= 8 , rsqr(64)= 0.35355339059327373
> sqr(81)= 9 , rsqr(81)= 0.3333333333333333

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/RsqrtGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/RsqrtNode.jpg)

### Max: 最大值

```glsl
max( 0.1 , 0.5 ); // 0.5
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/MaxNode.jpg)

### Min: 最小值

```glsl
min( 0.1 , 0.5 ); // 0.1
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/MinNode.jpg)



### Negate: 取反 -

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/NegateGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/NegateNode.gif)



### One Minus:  1 - val

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/OneMinusGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/OneMinusNode.jpg)



### Remap: 映射值

```
result = NewMin      +        (val - OldMin)   *   (NewMax - NewMin)   /   (OldMax - OldMin)
```



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/RemapNode.jpg)

### Clamp:  取值范围,  a < min ? min   :   a > max ? max : a

```glsl
float clamp(float a, float min, float max)
{
    return a < min ? min   :   a > max ? max : a
}
```



> clamp( _SinTime.w , 0.0 , 1.0 )

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ClampNode.gif)



### Saturate: 饱和取值, 值限定在[0,1]范围,   a < 0 ?  0    :      a >1 ? 1 :  a 

```glsl
float saturate(float a)
{
	return a < 0 ?  0    :      a >1 ? 1 :  a 
}
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SaturateGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SaturateNode.jpg)



### Step: 阶梯取值,  返回0或1，  b < a ? 0 : 1

```glsl
float step(a, b)
{
    return b < a ? 0 : 1;
}
```



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/StepNode.jpg)



### Smoothstep: 平滑阶梯取值

“ [输入”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Smoothstep#paramInput)值在[ [Min](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Smoothstep#paramMin)，[Max](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Smoothstep#paramMax) ]范围内，则将计算**0**到**1**之间的平滑Hermite插值。 假设*最大*值大于*最小值*，值**0**如果返回*阿尔法*小于*最小*。如果相反，*Alpha*大于*Max*，则返回值**1**。

**注意：**多通道数据类型之间的平滑步是按通道完成的。如果“ *最小值”*和“ *最大值”*具有不同的频道数量，则进行强制转换以匹配具有最多频道数量的频道。

```
float result = smoothstep( min , max , v);
```



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SmoothstepGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SmoothstepNode.jpg)



### Sign: 符号,   a == 0 ? 0       :   a > 0 ? 1 : -1    

```glsl
float sign(float a)
{
	return a == 0 ? 0 :    a > 0 ? 1 : -1;
}
```



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SignGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SignNode.jpg)



### Scale: 乘一个数值,  input * val

```glsl
color * 0.2
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ScaleNode.jpg)

### Scale And Offset: 乘一个数值，再偏移一个数值 inpu * scale + offset

```glsl
color * 2 + -1
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ScaleAndOffsetNode.jpg)



### Step Antialiasing:  阶梯平滑

```glsl
float t = ( B - A );
float result = saturate(    t / fwidth( t )   )
```

![image-20200603001919861](docimage/image-20200603001919861.png)



### trunc:  将浮点值截断为矢量值的整数部分或每个单独的部分。



```glsl
trunc( -2.1 ); // -2
trunc( -1.6 ); // -1
trunc( -1.1 ); // -1
trunc( 0.1 ); // 0
trunc( 0.6 ); // 0
trunc( 1.6 ); // 1
trunc( 2.6 ); // 2

```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/TruncGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/TruncNode.gif)



# Trigonometry Operators: 三角函数操作

### Radians： 角度转弧度

```glsl
float randians(float angle)
{
	reutrn angle * (pi / 180);
}

```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/RadiansNode.jpg)

### Degrees: 弧度转角度

```glsl
float degrees(float randians)
{
	reutrn randians * 180 / pi;
}
```



### Cos: 余弦值。输入值必须以弧度单位制为单位。

```glsl
cos( radian )
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/CosGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/CosNode.jpg)

![image-20200603010751496](docimage/image-20200603010751496.png)

### ACos: 反余弦函数

```glsl
acos(  cos(radian) ) == radian
```



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ACosGraphicNode.png)

### Cosh: 双曲余弦值。输入值必须以弧度单位制为单位。

[双曲函数]: https://baike.baidu.com/item/%E5%8F%8C%E6%9B%B2%E5%87%BD%E6%95%B0/8704306(https://baike.baidu.com/item/双曲函数/8704306)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/CoshGraphicNode.png)

### Sin: 正弦值。输入值必须以弧度单位制为单位。



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SinGraphicNode.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SinNode.jpg)



### ASin: 反正弦。假设输入值在[-1,1]范围内，结果值将在[-π/ 2，π/ 2]范围内。

```glsl
asin( sin(a) ) == a
```

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ASinGraphicNode.png)

### Sinh: 双曲正弦值。输入值必须以弧度单位制为单位。

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SinhGraphicNode.png)

### ATan: 反正切值。结果值将在[-π/ 2，π/ 2]范围内。



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ATanGraphicNode.png)

### ATan2: 输出除法[A ](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/ATan2#paramA)**/** [B](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/ATan2#paramB)的反正切。如果（B，A）定义了（x，y）向量，则使用此运算符返回它与x轴的弧度角。



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ATan2Node.jpg)



### Tanh： 双曲正切值。输入值必须以弧度单位制为单位。

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/TanhGraphicNode.png)



### Tan: 正切。计算在其[Input](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Tan#paramInput)上指定的值的切线。输入值必须以弧度单位制为单位。



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/TanNode.jpg)



# Camera And Screen: 摄像机和屏幕



### Camera Depth Fade: 摄像机深度淡入淡出



![image-20200608101709592](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200608101709592.png)

![image-20200608101732702](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200608101732702.png)



![image-20200608101944853](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200608101944853.png)



[窥探Unity5渲染内部之解析UnityShaderVariables.cginc]: https://www.cnblogs.com/zhanlang96/p/4827859.html



**uniform float4 _ProjectionParams;**
投影参数
x = 1,如果投影翻转则x = -1
y是camera近裁剪平面
z是camera远裁剪平面
w是1/远裁剪平面



### Clip Planes: 裁剪平面





[Unity内置的摄像机和屏幕参数]: https://gameinstitute.qq.com/community/detail/128106

unity_CameraWorldClipPlanes[6] float4 该摄像机的6个裁剪平面在世界空间下的等式，按如下顺序：左、右、下、上、近、远裁剪平面。



```glsl
float4 left = unity_CameraWorldClipPlanes[0];
float4 right = unity_CameraWorldClipPlanes[1];

float4 bottom = unity_CameraWorldClipPlanes[2];
float4 up = unity_CameraWorldClipPlanes[3];

float4 near = unity_CameraWorldClipPlanes[4];
float4 far = unity_CameraWorldClipPlanes[5];

```



### Compute Grap Screen Pos: 计算顶点在屏幕空间的位置

“计算抓取屏幕位置”节点会同时考虑垂直方向API的差异，将剪辑空间中的位置转换为归一化的屏幕空间纹理坐标。然后，可以将输出结果直接用作“ [抓屏颜色”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Grab_Screen_Color)节点作为其UV坐标。



> 一般用于计算屏幕UV
>
> ComputeScreenPos 的 输入 参数 pos 是 经过 MVP 矩阵 变换 后 在 裁剪 空间 中的 顶点 坐标。

[关于ComputeScreenPos和ComputeGrabScreenPos的差别]: https://www.jianshu.com/p/07ccf5ea1494
[Unity中的屏幕坐标：ComputeScreenPos/VPOS/WPOS]: https://blog.csdn.net/linuxheik/article/details/86691167

![image-20200608101944853](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ComputeGrabScreenPosNode.jpg)



![image-20200608101944853](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/292994-20180907185107605-68818162.jpg)



### Compute Screen Pos: 计算屏幕坐标

“计算屏幕位置”节点将剪辑空间中的位置转换为屏幕空间纹理坐标。然后可以将这些坐标直接用作[纹理样本](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Texture_Sample)的UV坐标，以进行屏幕空间映射的纹理样本。



![image-20200608101944853](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ComputeScreenPosNode.jpg)



### Dither： 抖动

“抖动”节点根据其“ [图案”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Dither#paramPattern)属性创建屏幕空间抖动图案。
如果没有连接到其[Input](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Dither#paramInput)，它将直接输出此模式。另一方面，如果存在连接，则将通过步进操作**[\**Step\**](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Step)（抖动模式，输入）**将抖动模式应用于输入值的顶部

![image-20200608101944853](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/DitherNode.jpg)

```glsl
float Dither4x4Bayer( int x, int y )
{
    const float dither[ 16 ] = {
        1,  9,  3, 11,
            13,  5, 15,  7,
            4, 12,  2, 10,
            16,  8, 14,  6 };
        int r = y * 4 + x;
    return dither[r] / 16; // same # of instructions as pre-dividing due to compiler magic
}



v2f vert ( appdata v )
{
    v2f o;
    UNITY_SETUP_INSTANCE_ID(v);
    UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
    UNITY_TRANSFER_INSTANCE_ID(v, o);

    float4 ase_clipPos = UnityObjectToClipPos(v.vertex);
    float4 screenPos = ComputeScreenPos(ase_clipPos);
    o.ase_texcoord = screenPos;

    o.ase_texcoord1.xy = v.ase_texcoord.xy;

    //setting value to unused interpolator channels and avoid initialization warnings
    o.ase_texcoord1.zw = 0;
    float3 vertexValue = float3(0, 0, 0);
    #if ASE_ABSOLUTE_VERTEX_POS
    vertexValue = v.vertex.xyz;
    #endif
    vertexValue = vertexValue;
    #if ASE_ABSOLUTE_VERTEX_POS
    v.vertex.xyz = vertexValue;
    #else
    v.vertex.xyz += vertexValue;
    #endif
    o.vertex = UnityObjectToClipPos(v.vertex);
    return o;
}


fixed4 frag (v2f i ) : SV_Target
{
    UNITY_SETUP_INSTANCE_ID(i);
    UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
    fixed4 finalColor;
    float4 screenPos = i.ase_texcoord;
    float4 ase_screenPosNorm = screenPos / screenPos.w;
    ase_screenPosNorm.z = ( UNITY_NEAR_CLIP_VALUE >= 0 ) ? ase_screenPosNorm.z : ase_screenPosNorm.z * 0.5 + 0.5;
    float2 clipScreen367 = ase_screenPosNorm.xy * _ScreenParams.xy;
    float dither367 = Dither4x4Bayer( fmod(clipScreen367.x, 4), fmod(clipScreen367.y, 4) );
    float2 uv_Texture0 = i.ase_texcoord1.xy * _Texture0_ST.xy + _Texture0_ST.zw;
    dither367 = step( dither367, tex2D( _Texture0, uv_Texture0 ).g );
    float4 temp_cast_0 = (dither367).xxxx;


    finalColor = temp_cast_0;
    return finalColor;
}

```



```glsl


float Dither8x8Bayer( int x, int y )
{
    const float dither[ 64 ] = {
        1, 49, 13, 61,  4, 52, 16, 64,
            33, 17, 45, 29, 36, 20, 48, 32,
            9, 57,  5, 53, 12, 60,  8, 56,
            41, 25, 37, 21, 44, 28, 40, 24,
            3, 51, 15, 63,  2, 50, 14, 62,
            35, 19, 47, 31, 34, 18, 46, 30,
            11, 59,  7, 55, 10, 58,  6, 54,
            43, 27, 39, 23, 42, 26, 38, 22};
        int r = y * 8 + x;
    return dither[r] / 64; // same # of instructions as pre-dividing due to compiler magic
}


float dither367 = Dither8x8Bayer( fmod(clipScreen367.x, 8), fmod(clipScreen367.y, 8) );

```





### Grab_Screen_Color: 抓取屏幕颜色



![image-20200608101944853](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/GrabScreenPosAndColor.jpg)

```glsl

GrabPass{ }

Pass
{
    fixed4 frag (v2f i ) : SV_Target
    {
        float4 screenColor371 = UNITY_SAMPLE_SCREENSPACE_TEXTURE(_GrabTexture,_Vector0);
    }
}
```



### Grap Screen Pos: 抓取屏幕位置

![image-20200608101944853](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/GrabScreenPosAndColor.jpg)

```glsl
GrabPass{ }

Pass
{
            #if defined(UNITY_STEREO_INSTANCING_ENABLED) || defined(UNITY_STEREO_MULTIVIEW_ENABLED)
                #define ASE_DECLARE_SCREENSPACE_TEXTURE(tex) UNITY_DECLARE_SCREENSPACE_TEXTURE(tex);
            #else
                #define ASE_DECLARE_SCREENSPACE_TEXTURE(tex) UNITY_DECLARE_SCREENSPACE_TEXTURE(tex)
            #endif
    
            ASE_DECLARE_SCREENSPACE_TEXTURE( _GrabTexture )
            inline float4 ASE_ComputeGrabScreenPos( float4 pos )
            {
                #if UNITY_UV_STARTS_AT_TOP
                float scale = -1.0;
                #else
                float scale = 1.0;
                #endif
                float4 o = pos;
                o.y = pos.w * 0.5f;
                o.y = ( pos.y - o.y ) * _ProjectionParams.x * scale + o.y;
                return o;
            }

    
			v2f vert ( appdata v )
			{
				v2f o;
                float4 ase_clipPos = UnityObjectToClipPos(v.vertex);
				float4 screenPos = ComputeScreenPos(ase_clipPos);
				o.ase_texcoord = screenPos;
            }
    
    
			fixed4 frag (v2f i ) : SV_Target
			{
                float4 screenPos = i.ase_texcoord;
				float4 ase_grabScreenPos = ASE_ComputeGrabScreenPos( screenPos );
				float4 ase_grabScreenPosNorm = ase_grabScreenPos / ase_grabScreenPos.w;
				float4 screenColor371 = UNITY_SAMPLE_SCREENSPACE_TEXTURE(_GrabTexture,ase_grabScreenPosNorm.xy);
            }

}
```



### Ortho Params： 正交参数



![image-20200608101944853](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/OrthoParams.jpg)

- Ortho Cam Width: 正交摄像机的宽度
- Ortho Cam Height: 正交摄像机的高度
- Projection Mode: 投影模式， 0：透视投影， 1：正交投影

```glsl
unity_OrthoParams.x; //Ortho Cam Width: 正交摄像机的宽度
unity_OrthoParams.y; //Ortho Cam Height: 正交摄像机的高度
unity_OrthoParams.w; //Projection Mode: 投影模式， 0：透视投影， 1：正交投影
```



### Projection Matrices: 投影矩阵, 投影逆矩阵

投影矩阵根据所选的[投影矩阵](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Projection_Matrices#paramProjectionMatrix)选项输出当前摄像机的投影矩阵或其反[矩阵](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Projection_Matrices#paramProjectionMatrix)。

```glsl
unity_CameraProjection:float4x4; // 投影矩阵
unity_CameraInvProjection:float4x4 // 投影逆矩阵
```



![image-20200608101944853](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ProjectionMatrices.jpg)

![image-20200611105006812](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611105006812.png)

### Projection Params: 投影参数



![image-20200608101944853](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ProjectionParams.jpg)



| 输出口    | 描述                                                         | 类型  |
| :-------- | :----------------------------------------------------------- | :---: |
| 翻转      | 指示使用法线投影矩阵还是翻转投影矩阵进行渲染**-1：**使用翻转的投影矩阵进行渲染。**1：**使用法线投影矩阵渲染。 | float |
| 近平面    | 相机的近平面。                                               | float |
| 远平面    | 相机的远平面。                                               | float |
| 1 /远平面 | 相机的反远平面。                                             | float |



```glsl
_ProjectionParams.x; // Flipped 翻转
_ProjectionParams.y; // Near Plane 近平面
_ProjectionParams.z; // Far Plane 远平面
_ProjectionParams.w; // 1 / Far Plane 返远平面

```



### Screen Depth: 屏幕深度

屏幕深度节点通过读取当前[屏幕位置](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Screen_Position)或自定义屏幕位置（如果连接到[Pos](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Screen_Depth#paramPos)输入端口）的深度缓冲区来输出屏幕深度。通过相应地选择“ [视图空间](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Screen_Depth#paramViewSpace) ”，结果可以在[0,1]线性范围内显示，也可以在视图空间坐标中以未缩放的实际距离值显示。
**注意1：**如果着色器需要访问分配给对象后面的深度缓冲区内容，则不应将其写入深度缓冲区。为此，必须将“渲染队列”设置为大于或等于“透明”。
请查看有关[渲染队列](https://docs.unity3d.com/Manual/SL-SubShaderTags.html)和[深度纹理的](https://docs.unity3d.com/Manual/SL-CameraDepthTexture.html) Unity官方文档以获取更多信息。
**注意2：** 如果使用正交摄影机，则必须关闭“ [转换为线性”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Screen_Depth#paramConvertToLinear)切换，因为在深度缓冲区上写入/读取的值已经在线性刻度上。



[Unity Shader入门精要学习笔记 - 第13章 使用深度和法线纹理]: https://blog.csdn.net/u010848412/article/details/73520191



![image-20200611111427617](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611111427617.png)

```glsl

Pass
{
    
            #ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
                //only defining to not throw compilation error over Unity 5.5
                #define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
            #endif
    
			UNITY_DECLARE_DEPTH_TEXTURE( _CameraDepthTexture );
			uniform float4 _CameraDepthTexture_TexelSize;
    
    	
			v2f vert ( appdata v )
			{
                float4 ase_clipPos = UnityObjectToClipPos(v.vertex);
				float4 screenPos = ComputeScreenPos(ase_clipPos);
				o.ase_texcoord = screenPos;
            }
    
    
			fixed4 frag (v2f i ) : SV_Target
			{
                
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
                
                fixed4 finalColor;
				float4 screenPos = i.ase_texcoord;
				float4 ase_screenPosNorm = screenPos / screenPos.w;
				ase_screenPosNorm.z = ( UNITY_NEAR_CLIP_VALUE >= 0 ) ? ase_screenPosNorm.z : ase_screenPosNorm.z * 0.5 + 0.5;
				float eyeDepth388 = LinearEyeDepth(SAMPLE_DEPTH_TEXTURE( _CameraDepthTexture, ase_screenPosNorm.xy ));
				
            }
    
}
```

![image-20200611111628101](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611111628101.png)

```glsl

			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float4 screenPos = i.ase_texcoord;
				float4 ase_screenPosNorm = screenPos / screenPos.w;
				ase_screenPosNorm.z = ( UNITY_NEAR_CLIP_VALUE >= 0 ) ? ase_screenPosNorm.z : ase_screenPosNorm.z * 0.5 + 0.5;
				float eyeDepth388 = (SAMPLE_DEPTH_TEXTURE( _CameraDepthTexture, ase_screenPosNorm.xy )*( _ProjectionParams.z - _ProjectionParams.y ));
			}
```

![image-20200611111907260](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611111907260.png)

```glsl
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float4 screenPos = i.ase_texcoord;
				float4 ase_screenPosNorm = screenPos / screenPos.w;
				ase_screenPosNorm.z = ( UNITY_NEAR_CLIP_VALUE >= 0 ) ? ase_screenPosNorm.z : ase_screenPosNorm.z * 0.5 + 0.5;
				float clampDepth388 = SAMPLE_DEPTH_TEXTURE( _CameraDepthTexture, ase_screenPosNorm.xy );
            }
```



### Screen Params: 屏幕参数

屏幕参数节点输出当前屏幕或渲染目标有用的信息，例如其当前[Width](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Screen_Params#paramWidth)或[Height](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Screen_Params#paramHeight)。在处理屏幕空间效果时，通常使用此节点。



![image-20200611111907260](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ScreenPositionNode.jpg)



```glsl
_ScreenParams.x; // RT Width, 当前渲染目标/屏幕宽度（以像素为单位）
_ScreenParams.y; // RT Height, 当前渲染目标/屏幕高度（以像素为单位）
_ScreenParams.z; // 1 + 1 / Width, 当前渲染目标/屏幕的反转宽度（以像素为单位）加1
_ScreenParams.w; // 1 + 1 / Height, 当前渲染目标/屏幕的反向高度（以像素为单位）加1
```



### Screen Position: 屏幕位置

屏幕位置节点输出当前像素的屏幕位置。根据所选的“ [类型”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Screen_Position#paramType)参数，位置值可以在“屏幕坐标”中，对于X轴可以为**[0，屏幕宽度****-1]，**对于Y轴可以为**[0，屏幕高度-1]**，也可以归一化为**[0,1]**范围对于两个轴。



![image-20200611144015550](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611144015550.png)



```glsl

			v2f vert ( appdata v )
			{
				
				float4 ase_clipPos = UnityObjectToClipPos(v.vertex);
				float4 screenPos = ComputeScreenPos(ase_clipPos);
				o.ase_texcoord = screenPos;
			}
			
			
			fixed4 frag (v2f i ) : SV_Target
			{
				float4 screenPos = i.ase_texcoord;
				float4 ase_screenPosNorm = screenPos / screenPos.w;
				ase_screenPosNorm.z = ( UNITY_NEAR_CLIP_VALUE >= 0 ) ? ase_screenPosNorm.z : ase_screenPosNorm.z * 0.5 + 0.5;
				float4 temp_cast_0 = (ase_screenPosNorm.x).xxxx;
				
				
				finalColor = temp_cast_0;
				return finalColor;
			}
```



### View Dir: 视图方向

“视图目录”节点在由“ [空间”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/View_Dir#paramSpace)参数定义的坐标空间上输出当前摄像机的视图方向。
“世界空间”坐标将是最常用的选项，但是“切线空间”也非常有用，主要用于法线贴图（通常在切线空间中）上的操作。



![image-20200611144926834](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611144926834.png)

```glsl

			v2f vert ( appdata v )
			{
				v2f o;

				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord.xyz = ase_worldPos;
				
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.w = 0;
            }


			fixed4 frag (v2f i ) : SV_Target
			{
				fixed4 finalColor;
				float3 ase_worldPos = i.ase_texcoord.xyz;
				float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
				ase_worldViewDir = Unity_SafeNormalize( ase_worldViewDir );
                // ase_worldViewDir = normalize(ase_worldViewDir);
				float4 temp_cast_0 = (ase_worldViewDir.x).xxxx;
				
				
				finalColor = temp_cast_0;
				return finalColor;
			}


```

![image-20200611145216044](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611145216044.png)

```glsl

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_tangent : TANGENT;
				float3 ase_normal : NORMAL;
			};
                
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_texcoord1 : TEXCOORD1;
				float4 ase_texcoord2 : TEXCOORD2;
				float4 ase_texcoord3 : TEXCOORD3;
			};
			
			v2f vert ( appdata v )
			{
				v2f o;

                // 切线，世界坐标系
				float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
				o.ase_texcoord.xyz = ase_worldTangent;
                
                // 法线，世界坐标系
				float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
				o.ase_texcoord1.xyz = ase_worldNormal;
                
                // 法线和切线垂直面，世界坐标系
				float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
				float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
				o.ase_texcoord2.xyz = ase_worldBitangent;
                
                // 位置，世界坐标系
				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord3.xyz = ase_worldPos;
            }


			fixed4 frag (v2f i ) : SV_Target
			{
				fixed4 finalColor;
				float3 ase_worldTangent = i.ase_texcoord.xyz;
				float3 ase_worldNormal = i.ase_texcoord1.xyz;
				float3 ase_worldBitangent = i.ase_texcoord2.xyz;
                
				float3 tanToWorld0 = float3( ase_worldTangent.x, ase_worldBitangent.x, ase_worldNormal.x );
				float3 tanToWorld1 = float3( ase_worldTangent.y, ase_worldBitangent.y, ase_worldNormal.y );
				float3 tanToWorld2 = float3( ase_worldTangent.z, ase_worldBitangent.z, ase_worldNormal.z );
                
				float3 ase_worldPos = i.ase_texcoord3.xyz;
				float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
				ase_worldViewDir = normalize(ase_worldViewDir);
                
				float3 ase_tanViewDir =  tanToWorld0 * ase_worldViewDir.x + tanToWorld1 * ase_worldViewDir.y  + tanToWorld2 * ase_worldViewDir.z;
				ase_tanViewDir = normalize(ase_tanViewDir);
				
				
				finalColor = float4( ase_tanViewDir , 0.0 );
				return finalColor;
			}
```



### World Space Camera Pos: 相机在世界空间中的位置

```glsl
_WorldSpaceCameraPos:float3:
```



### Z Buffer Params: Z缓冲区参数



![image-20200611111907260](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ZBufferParams.jpg)

```glsl
_ZBufferParams.x; // 1 - far/near
_ZBufferParams.y; // far / near
_ZBufferParams.z; // ( 1 - far plane / near plane ) / far 
_ZBufferParams.w; //  ( far plane / near plane ) / far
```



[【OpenGL】透视和ZBuffer]: https://blog.csdn.net/stalendp/article/details/50775450



# Constants And Properties: 常量和属性

![image-20200611163458039](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611163458039.png)





### Gradient: 渐变

渐变节点创建一个渐变对象，该渐变对象必须与“ [渐变样本”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Gradient_Sample)节点相连才能在给定的时间对每个颜色进行采样。

![image-20200611163458039](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/GradientSampleNode.jpg)

```glsl

			struct Gradient
			{
				int type;
				int colorsLength;
				int alphasLength;
				float4 colors[8];
				float2 alphas[8];
			};
			
			Gradient NewGradient(int type, int colorsLength, int alphasLength, 
			float4 colors0, float4 colors1, float4 colors2, float4 colors3, float4 colors4, float4 colors5, float4 colors6, float4 colors7,
			float2 alphas0, float2 alphas1, float2 alphas2, float2 alphas3, float2 alphas4, float2 alphas5, float2 alphas6, float2 alphas7)
			{
				Gradient g;
				g.type = type;
				g.colorsLength = colorsLength;
				g.alphasLength = alphasLength;
				g.colors[ 0 ] = colors0;
				g.colors[ 1 ] = colors1;
				g.colors[ 2 ] = colors2;
				g.colors[ 3 ] = colors3;
				g.colors[ 4 ] = colors4;
				g.colors[ 5 ] = colors5;
				g.colors[ 6 ] = colors6;
				g.colors[ 7 ] = colors7;
				g.alphas[ 0 ] = alphas0;
				g.alphas[ 1 ] = alphas1;
				g.alphas[ 2 ] = alphas2;
				g.alphas[ 3 ] = alphas3;
				g.alphas[ 4 ] = alphas4;
				g.alphas[ 5 ] = alphas5;
				g.alphas[ 6 ] = alphas6;
				g.alphas[ 7 ] = alphas7;
				return g;
			}
			
			float4 SampleGradient( Gradient gradient, float time )
			{
				float3 color = gradient.colors[0].rgb;
				UNITY_UNROLL
				for (int c = 1; c < 8; c++)
				{
				float colorPos = saturate((time - gradient.colors[c-1].w) / (gradient.colors[c].w - gradient.colors[c-1].w)) * step(c, (float)gradient.colorsLength-1);
				color = lerp(color, gradient.colors[c].rgb, lerp(colorPos, step(0.01, colorPos), gradient.type));
				}
				#ifndef UNITY_COLORSPACE_GAMMA
				color = half3(GammaToLinearSpaceExact(color.r), GammaToLinearSpaceExact(color.g), GammaToLinearSpaceExact(color.b));
				#endif
				float alpha = gradient.alphas[0].x;
				UNITY_UNROLL
				for (int a = 1; a < 8; a++)
				{
				float alphaPos = saturate((time - gradient.alphas[a-1].y) / (gradient.alphas[a].y - gradient.alphas[a-1].y)) * step(a, (float)gradient.alphasLength-1);
				alpha = lerp(alpha, gradient.alphas[a].x, lerp(alphaPos, step(0.01, alphaPos), gradient.type));
				}
				return float4(color, alpha);
			}
			


			fixed4 frag (v2f i ) : SV_Target
			{
				fixed4 finalColor;
				Gradient gradient414 = NewGradient( 0, 2, 2, float4( 1, 0, 0, 0.2500038 ), float4( 1, 1, 1, 0.9499962 ), 0, 0, 0, 0, 0, 0, float2( 0.6627451, 0.319997 ), float2( 1, 0.9000076 ), 0, 0, 0, 0, 0, 0 );
				float2 uv0421 = i.ase_texcoord.xy * float2( 1,1 ) + float2( 0,0 );
				
				
				finalColor = SampleGradient( gradient414, uv0421.y );
				return finalColor;
			}
```



### PI: π

```glsl
UNITY_PI
```



### Tau: 2π

```glsl
6.28318548202515
```



![image-20200611163458039](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/TauNode.jpg)



# Functions: 函数

### BlinnPhongLightWrap: BlinnPhong光照

![image-20200611203704180](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611203704180.png)

![image-20200611204328876](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611204328876.png)

```glsl

	Properties
	{
		_ColorBase("ColorBase", Color) = (1,1,1,0)
		_Specular("Specular", Range( 0 , 5)) = 1.930303
		_Glosss("Glosss", Range( 0 , 5)) = 0.4863844
		_LightWrapping("LightWrapping", Range( 0 , 5)) = 0
		[Normal]_TextureNormal("TextureNormal", 2D) = "white" {}
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}


	SubShader
	{
        
		
		Pass
		{
            
			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_tangent : TANGENT;
				float3 ase_normal : NORMAL;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_texcoord1 : TEXCOORD1;
				float4 ase_texcoord2 : TEXCOORD2;
				float4 ase_texcoord3 : TEXCOORD3;
				float4 ase_texcoord4 : TEXCOORD4;
				UNITY_SHADOW_COORDS(5)
			};
                
                
			uniform float _LightWrapping;
			uniform sampler2D _TextureNormal;
			uniform float4 _TextureNormal_ST;
			uniform float4 _ColorBase;
			uniform float _Glosss;
			uniform float _Specular;
            
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				// 切线，世界坐标系
				float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
				o.ase_texcoord1.xyz = ase_worldTangent;

				// 法线，世界坐标系
				float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
				o.ase_texcoord2.xyz = ase_worldNormal;

				// 切线和法线垂直面，世界坐标系
				float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
				float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
				o.ase_texcoord3.xyz = ase_worldBitangent;

				// 位置，世界坐标系
				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord4.xyz = ase_worldPos;
				
				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				o.ase_texcoord1.w = 0;
				o.ase_texcoord2.w = 0;
				o.ase_texcoord3.w = 0;
				o.ase_texcoord4.w = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;

				float3 LightWrapVector47_g1 = (( _LightWrapping * 0.5 )).xxx;

				// 法线贴图UV
				float2 uv_TextureNormal = i.ase_texcoord.xy * _TextureNormal_ST.xy + _TextureNormal_ST.zw;

				// 切线，世界坐标系
				float3 ase_worldTangent = i.ase_texcoord1.xyz;

				// 法线，世界坐标系
				float3 ase_worldNormal = i.ase_texcoord2.xyz;

				// 切线和法线垂直面，世界坐标系
				float3 ase_worldBitangent = i.ase_texcoord3.xyz;

				float3 tanToWorld0 = float3( ase_worldTangent.x, ase_worldBitangent.x, ase_worldNormal.x );
				float3 tanToWorld1 = float3( ase_worldTangent.y, ase_worldBitangent.y, ase_worldNormal.y );
				float3 tanToWorld2 = float3( ase_worldTangent.z, ase_worldBitangent.z, ase_worldNormal.z );

				// 法线贴图
				float3 tanNormal19_g1 = UnpackNormal( tex2D( _TextureNormal, uv_TextureNormal ) );
				// 法线贴图, 世界坐标系
				float3 worldNormal19_g1 = normalize( float3(dot(tanToWorld0,tanNormal19_g1), dot(tanToWorld1,tanNormal19_g1), dot(tanToWorld2,tanNormal19_g1)) );
				float3 CurrentNormal23_g1 = worldNormal19_g1;

				// 位置， 世界坐标系
				float3 ase_worldPos = i.ase_texcoord4.xyz;
				// 顶点灯光方向， 世界坐标系
				float3 worldSpaceLightDir = UnityWorldSpaceLightDir(ase_worldPos);

				// 光照
				float dotResult20_g1 = dot( CurrentNormal23_g1 , worldSpaceLightDir );
				float NDotL21_g1 = dotResult20_g1;

				// 灯光颜色
				#if defined(LIGHTMAP_ON) && ( UNITY_VERSION < 560 || ( defined(LIGHTMAP_SHADOW_MIXING) && !defined(SHADOWS_SHADOWMASK) && defined(SHADOWS_SCREEN) ) )//aselc
				float4 ase_lightColor = 0;
				#else //aselc
				float4 ase_lightColor = _LightColor0;
				#endif //aselc

				// 自身接收的阴影
				UNITY_LIGHT_ATTENUATION(ase_atten, i, ase_worldPos)
				float3 AttenuationColor8_g1 = ( ase_lightColor.rgb * ase_atten );

				float3 DiffuseColor70_g1 = ( ( ( max( ( LightWrapVector47_g1 + ( ( 1.0 - LightWrapVector47_g1 ) * NDotL21_g1 ) ) , float3(0,0,0) ) * AttenuationColor8_g1 ) + (UNITY_LIGHTMODEL_AMBIENT).rgb ) * _ColorBase.rgb );
				float3 normalizeResult77_g1 = normalize( _WorldSpaceLightPos0.xyz );
				float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
				ase_worldViewDir = normalize(ase_worldViewDir);
				float3 normalizeResult28_g1 = normalize( ( normalizeResult77_g1 + ase_worldViewDir ) );
				float3 HalfDirection29_g1 = normalizeResult28_g1;
				float dotResult32_g1 = dot( HalfDirection29_g1 , CurrentNormal23_g1 );
				float SpecularPower14_g1 = exp2( ( ( _Glosss * 10.0 ) + 1.0 ) );
				float3 specularFinalColor42_g1 = ( AttenuationColor8_g1 * pow( max( dotResult32_g1 , 0.0 ) , SpecularPower14_g1 ) * _Specular );
				
				
				finalColor = float4( ( DiffuseColor70_g1 + specularFinalColor42_g1 ) , 0.0 );
				return finalColor;
			}

        }
    }
```



### Box Mask: 盒子遮罩



![image-20200611213921776](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611213921776.png)

```glsl

	Properties
	{
		_Center("Center", Vector) = (0,0,0,0)
		_Size("Size", Vector) = (1,1,1,0)
		_Falloff("Falloff", Int) = 0

	}

	SubShader
	{
		
		Pass
		{
            
			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
			};

			uniform float3 _Center;
			uniform float3 _Size;
			uniform int _Falloff;
            
            
			v2f vert ( appdata v )
			{
				v2f o;

				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord.xyz = ase_worldPos;
				
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.w = 0;
            }
            
            
			fixed4 frag (v2f i ) : SV_Target
			{
				fixed4 finalColor;
				float3 ase_worldPos = i.ase_texcoord.xyz;
				float4 temp_cast_1 = (( distance( max( ( abs( ( ase_worldPos - _Center ) ) - ( _Size * float3( 0.5,0.5,0.5 ) ) ) , float3( 0,0,0 ) ) , float3( 0,0,0 ) ) / (float)_Falloff )).xxxx;
				
				
				finalColor = temp_cast_1;
				return finalColor;
			}
        }
    }


```



### Burn Effect: 燃烧、熔岩效果

![image-20200611215021849](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611215021849.png)



```glsl

Shader "TestNode"
{
	Properties
	{
		_FireTexture("Fire Texture", 2D) = "white" {}
		_BurnMask("Burn Mask", 2D) = "white" {}
		_FireIntensity("Fire Intensity", Range( 0 , 5)) = 3.529412
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase"  }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			#include "UnityShaderVariables.cginc"


			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
			};

			uniform sampler2D _BurnMask;
			uniform float4 _BurnMask_ST;
			uniform sampler2D _FireTexture;
			uniform float _FireIntensity;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv_BurnMask = i.ase_texcoord.xy * _BurnMask_ST.xy + _BurnMask_ST.zw;
				float2 panner2_g4 = ( _Time.x * float2( -1,0 ) + i.ase_texcoord.xy);
				
				
				finalColor = ( ( tex2D( _BurnMask, uv_BurnMask ) * tex2D( _FireTexture, panner2_g4 ) ) * ( _FireIntensity * ( _SinTime.w + 1.5 ) ) );
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}

```



### Color Mask: 颜色过滤

![image-20200611220513639](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200611220513639.png)



```glsl
Shader "TestNode"
{
	Properties
	{
		_MaskColor("MaskColor", Color) = (0.5566038,0.3019313,0.3019313,0)
		_Texture0("Texture 0", 2D) = "white" {}
		_Range("Range", Range( 0 , 1)) = 0.4294117
		_Fuzziness("Fuzziness", Range( 0 , 1)) = 0.5235294

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase"  }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
			};

			uniform float4 _MaskColor;
			uniform sampler2D _Texture0;
			uniform float4 _Texture0_ST;
			uniform float _Range;
			uniform float _Fuzziness;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv0_Texture0 = i.ase_texcoord.xy * _Texture0_ST.xy + _Texture0_ST.zw;
				float4 temp_cast_2 = (saturate( ( 1.0 - ( ( distance( _MaskColor.rgb , tex2D( _Texture0, uv0_Texture0 ).rgb ) - _Range ) / max( _Fuzziness , 1E-05 ) ) ) )).xxxx;
				
				
				finalColor = temp_cast_2;
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```



### Constant Bias Scale: 恒定偏移和缩放

```glsl
( _Input + _Bias ) * _Scale );
```



![image-20200612095819414](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612095819414.png)



### Cool Wave: 波

![image-20200612103559495](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612103559495.png)





```glsl
Shader "TestNode"
{
	Properties
	{
		[HideInInspector] _VTInfoBlock( "VT( auto )", Vector ) = ( 0, 0, 0, 0 )
		_WaveWidth("Wave Width", Range( -2 , 2)) = 0.07058827
		_YDisplacement("Y Displacement", Range( -2 , 2)) = 0.07058827
		_Height("Height", Range( 0 , 1)) = 0.5235294
		_Texture("Texture", 2D) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase"  }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			#include "UnityShaderVariables.cginc"


			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
			};

			uniform sampler2D _Texture;
			uniform float4 _Texture_ST;
			uniform float _YDisplacement;
			uniform float _Height;
			uniform float _WaveWidth;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv0_Texture = i.ase_texcoord.xy * _Texture_ST.xy + _Texture_ST.zw;
				float2 uv = uv0_Texture;
				float time = _Time.y;
				float uv_y = (uv).y;
				float val =  
					( 
					   tex2D( _Texture, uv0_Texture ).r
					   * 
					   cos(  UNITY_PI * uv.x  +  UNITY_PI * time   ) 
					   * 
					   sin(   
						   uv_y * UNITY_PI  
						   +  
						   _YDisplacement / 3.0  
						   + 
						   time * UNITY_PI   
					   ) 
					) 
					+ uv_y ;

				float4 temp_cast_1 = abs( 
							1.0 
							/             
							(     ( val * _Height ) / _WaveWidth     )            
						).xxxx;
				
				
				finalColor = temp_cast_1;
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```



### Cotangent Frame: 余切

[没有预先计算的切线的法线贴图]: http://www.thetenthplanet.de/archives/1180

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/material-jrME7Zsp.png)





```glsl

			float3x3 CotangentFrame( float3 normal , float3 position , float2 uv )
			{
				float3 dp1 = ddx ( position );
				float3 dp2 = ddy ( position );
				float2 duv1 = ddx ( uv );
				float2 duv2 = ddy ( uv );
				float3 dp2perp = cross ( dp2, normal );
				float3 dp1perp = cross ( normal, dp1 );
				float3 tangent = dp2perp * duv1.x + dp1perp * duv2.x;
				float3 bitangent = dp2perp * duv1.y + dp1perp * duv2.y;
				float invmax = rsqrt ( max ( dot ( tangent, tangent ), dot ( bitangent, bitangent ) ) );
				tangent *= invmax;
				bitangent *= invmax;
				return float3x3 (	tangent.x, bitangent.x, normal.x,
									tangent.y, bitangent.y, normal.y,
									tangent.z, bitangent.z, normal.z );
			}
```

![image-20200612114758230](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612114758230.png)

### Decode Directional Lighmap: 解码方向图



![image-20200612114735249](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612114735249.png)

[Directional Light Map(Directional Irradiance)]: https://blog.csdn.net/qq_36720848/article/details/89464726



```glsl

float3 ASEDecodeDirectionalLightmap( float3 Color , float4 DirTex , float3 NormalWorld )
{
	return DecodeDirectionalLightmap( Color,DirTex,NormalWorld);
}
```

```glsl
inline half3 DecodeDirectionalLightmap (half3 color, fixed4 dirTex, half3 normalWorld)
{
    // In directional (non-specular) mode Enlighten bakes dominant light direction
    // in a way, that using it for half Lambert and then dividing by a "rebalancing coefficient"
    // gives a result close to plain diffuse response lightmaps, but normalmapped.

    // Note that dir is not unit length on purpose. Its length is "directionality", like
    // for the directional specular lightmaps.

    half halfLambert = dot(normalWorld, dirTex.xyz - 0.5) + 0.5;

    return color * halfLambert / max(1e-4h, dirTex.w);
}
```



### Derive Tangent Basis: 导出切线矩阵

![image-20200612143317103](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612143317103.png)

```glsl


			void DeriveTangentBasis( float3 WorldPosition , float3 WorldNormal , float2 UV , out float3x3 TangentToWorld , out float3x3 WorldToTangent )
			{
				#if (SHADER_TARGET >= 45)
				float3 dPdx = ddx_fine( WorldPosition );
				float3 dPdy = ddy_fine( WorldPosition );
				#else
				float3 dPdx = ddx( WorldPosition );
				float3 dPdy = ddy( WorldPosition );
				#endif
				float3 sigmaX = dPdx - dot( dPdx, WorldNormal ) * WorldNormal;
				float3 sigmaY = dPdy - dot( dPdy, WorldNormal ) * WorldNormal;
				float flip_sign = dot( dPdy, cross( WorldNormal, dPdx ) ) < 0 ? -1 : 1;
				#if (SHADER_TARGET >= 45)
				float2 dSTdx = ddx_fine( UV );
				float2 dSTdy = ddy_fine( UV );
				#else
				float2 dSTdx = ddx( UV );
				float2 dSTdy = ddy( UV );
				#endif
				float det = dot( dSTdx, float2( dSTdy.y, -dSTdy.x ) );
				float sign_det = ( det < 0 ) ? -1 : 1;
				float2 invC0 = sign_det * float2( dSTdy.y, -dSTdx.y );
				float3 T = sigmaX * invC0.x + sigmaY * invC0.y;
				if ( abs( det ) > 0 ) T = normalize( T );
				float3 B = ( sign_det * flip_sign ) * cross( WorldNormal, T );
				WorldToTangent = float3x3( T, B, WorldNormal );
				TangentToWorld = transpose( WorldToTangent );
				return;
			}
```

```glsl

				float3x3 TangentToWorld = float3x3( 1,0,0,1,1,1,1,0,1 );
				float3x3 WorldToTangent = float3x3( 1,0,0,1,1,1,1,0,1 );
				DeriveTangentBasis( WorldPosition1_g5 , WorldNormal1_g5 , UV1_g5 , TangentToWorld , WorldToTangent );
```



### Detail Aldedo: 2个颜色融合

```glsl
#ifdef UNITY_COLORSPACE_GAMMA
    #define unity_ColorSpaceGrey fixed4(0.5, 0.5, 0.5, 0.5)
    #define unity_ColorSpaceDouble fixed4(2.0, 2.0, 2.0, 2.0)
    #define unity_ColorSpaceDielectricSpec half4(0.220916301, 0.220916301, 0.220916301, 1.0 - 0.220916301)
    #define unity_ColorSpaceLuminance half4(0.22, 0.707, 0.071, 0.0) // Legacy: alpha is set to 0.0 to specify gamma mode
#else // Linear values
    #define unity_ColorSpaceGrey fixed4(0.214041144, 0.214041144, 0.214041144, 0.5)
    #define unity_ColorSpaceDouble fixed4(4.59479380, 4.59479380, 4.59479380, 2.0)
    #define unity_ColorSpaceDielectricSpec half4(0.04, 0.04, 0.04, 1.0 - 0.04) // standard dielectric reflectivity coef at incident angle (= 4%)
    #define unity_ColorSpaceLuminance half4(0.0396819152, 0.458021790, 0.00609653955, 1.0) // Legacy: alpha is set to 1.0 to specify linear mode
#endif
```



[nity Gamma校正转为线性空间]: https://blog.uwa4d.com/archives/Usparkle_Gamma.html

![image-20200612150643627](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612150643627.png)

```glsl
				float Detailmask = _Detailmask;
				float Detailmask_I = ( 1.0 - Detailmask );
				float3 appendResult = (float3(Detailmask_I , Detailmask_I , Detailmask_I));
				
				float3 colorA = tex2D(_Texture, uv0_Texture).rgb;
				float3 colorB = tex2D(_Texture0, uv0_Texture0).rgb;
				
				finalColor = float4( 
					( 
						colorA
						* 
						( 
							( 
								( 
									colorB
									* 
									unity_ColorSpaceDouble
								)
								* 
								Detailmask 
							)

							+ 

							appendResult 
						) 
					) 
					, 0.0 );
```

### 





# Textures: 贴图

### Blend Normals: 混合法线

```glsl
BlendedNormal = normalize( float3( A.xy + B.xy, A.z*B.z ).
```

![image-20200612155250392](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612155250392.png)

```glsl

half3 UnpackScaleNormalRGorAG(half4 packednormal, half bumpScale)
{
    #if defined(UNITY_NO_DXT5nm)
        half3 normal = packednormal.xyz * 2 - 1;
        #if (SHADER_TARGET >= 30)
            // SM2.0: instruction count limitation
            // SM2.0: normal scaler is not supported
            normal.xy *= bumpScale;
        #endif
        return normal;
    #else
        // This do the trick
        packednormal.x *= packednormal.w;

        half3 normal;
        normal.xy = (packednormal.xy * 2 - 1);
        #if (SHADER_TARGET >= 30)
            // SM2.0: instruction count limitation
            // SM2.0: normal scaler is not supported
            normal.xy *= bumpScale;
        #endif
        normal.z = sqrt(1.0 - saturate(dot(normal.xy, normal.xy)));
        return normal;
    #endif
}

half3 UnpackScaleNormal(half4 packednormal, half bumpScale)
{
    return UnpackScaleNormalRGorAG(packednormal, bumpScale);
}

half3 BlendNormals(half3 n1, half3 n2)
{
    return normalize(half3(n1.xy + n2.xy, n1.z*n2.z));
}
```

```glsl

				float3 normalA = UnpackNormal(tex2D(_TextureA, uv0_TextureA));
				float3 normalB = UnpackNormal(tex2D(_TextureB, uv0_TextureB));
				float3 blend = BlendNormals(normalA, normalB);
```



### HeightMap Texture Blend: 高度贴图混合

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/Height_2.jpg)

```glsl
 Saturate( Power( ( ( HeightMap* SplatMask)*4 ) + ( SplatMask* 2 ), BlendStrength) )
```





```glsl
float HeightMap = tex2D(_HeightMapTexture, uv0_HeightMapTexture).r;
float SplatMask = tex2D(_SplatMaskTexture, uv0_SplatMaskTexture).r;
float HeightMask = saturate
(  
    pow(
    	(HeightMap *SplatMask) * 4 + SplatMask * 2
    	,         
    	_BlendStrength
    )             
);
```





### Texel Size: 贴图大小



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/TexelSizeNode.jpg)

```glsl
Shader "TestNode"
{
	Properties
	{
		_MainTexture("MainTexture", 2D) = "white" {}

	}
	
	SubShader
	{
		Pass
		{
			uniform sampler2D _MainTexture;
			uniform float4 _MainTexture_TexelSize;

		}
	}
	
	
}
```



### Texture Array： 纹理阵列

“纹理阵列”节点是一种特殊的采样器，用于采样2D纹理的阵列。采样多个纹理时，使用阵列可能会节省性能。它们的功能类似于带有额外[索引](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Texture_Array#paramindex)参数的“ [纹理样本”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Texture_Sample)节点，以从数组中获取所需的纹理。



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/TextureArrayNode.jpg)

![image-20200612165408191](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612165408191.png)



![image-20200612165426479](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612165426479.png)



![image-20200612165514772](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612165514772.png)

![image-20200612165530144](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200612165530144.png)



```glsl

				float2 uv_TextureArray0 = i.ase_texcoord.xy * _TextureArray0_ST.xy + _TextureArray0_ST.zw;
				float4 texArray527 = UNITY_SAMPLE_TEX2DARRAY(_TextureArray0, float3(uv_TextureArray0, (float)_Index)  );
```



[Texture2DArray 功能测试]: https://blog.csdn.net/h5502637/article/details/85101140





![image-20200612165530144](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/20181219175433716.png)

```c#
using UnityEngine;
using UnityEngine.Rendering;

public class Tex2DArrayTest : MonoBehaviour
{
    public MeshRenderer render;
    public Texture2D[] textures;
    public ECopyTexMethpd copyTexMethod;                // 把Texrure2D信息拷贝到Texture2DArray对象中使用的方式 //

    public enum ECopyTexMethpd
    {
        CopyTexture = 0,                                 // 使用 Graphics.CopyTexture 方法 //
        SetPexels = 1,                                      // 使用 Texture2DArray.SetPixels 方法 //
    }

    private Material m_mat;

    void Start()
    {
        if (textures == null || textures.Length == 0)
        {
            enabled = false;
            return;
        }

        if (SystemInfo.copyTextureSupport == CopyTextureSupport.None ||
            !SystemInfo.supports2DArrayTextures)
        {
            enabled = false;
            return;
        }

        Texture2DArray texArr = new Texture2DArray(textures[0].width, textures[0].width, textures.Length, textures[0].format, false, false);

        // 结论 //
        // Graphics.CopyTexture耗时(单位:Tick): 5914, 8092, 6807, 5706, 5993, 5865, 6104, 5780 //
        // Texture2DArray.SetPixels耗时(单位:Tick): 253608, 255041, 225135, 256947, 260036, 295523, 250641, 266044 //
        // Graphics.CopyTexture 明显快于 Texture2DArray.SetPixels 方法 //
        // Texture2DArray.SetPixels 方法的耗时大约是 Graphics.CopyTexture 的50倍左右 //
        // Texture2DArray.SetPixels 耗时的原因是需要把像素数据从cpu传到gpu, 原文: Call Apply to actually upload the changed pixels to the graphics card //
        // 而Graphics.CopyTexture只在gpu端进行操作, 原文: operates on GPU-side data exclusively //

        //using (Timer timer = new Timer(Timer.ETimerLogType.Tick))
        //{
            if (copyTexMethod == ECopyTexMethpd.CopyTexture)
            {
                for (int i = 0; i < textures.Length; i++)
                {
                    // 以下两行都可以 //
                    //Graphics.CopyTexture(textures[i], 0, texArr, i);
                    Graphics.CopyTexture(textures[i], 0, 0, texArr, i, 0);
                }
            }
            else if (copyTexMethod == ECopyTexMethpd.SetPexels)
            {
                for (int i = 0; i < textures.Length; i++)
                {
                    // 以下两行都可以 //
                    //texArr.SetPixels(textures[i].GetPixels(), i);
                    texArr.SetPixels(textures[i].GetPixels(), i, 0);
                }

                texArr.Apply();
            }
        //}

        texArr.wrapMode = TextureWrapMode.Clamp;
        texArr.filterMode = FilterMode.Bilinear;

        m_mat = render.material;

        m_mat.SetTexture("_TexArr", texArr);
        m_mat.SetFloat("_Index", Random.Range(0, textures.Length));

        //AssetDatabase.CreateAsset(texArr, "Assets/RogueX/Prefab/texArray.asset");
    }

    void OnGUI()
    {
        if (GUI.Button(new Rect(0, 0, 200, 100), "Change Texture"))
        {
            m_mat.SetFloat("_Index", Random.Range(0, textures.Length));
        }
    }
}

```

### Texture Sample: 贴图采样

[http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Texture_Array]: http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Texture_Array



```
tex2D( _Texture0, uv0_Texture0 );


```



### Texture Transform: 设置纹理平铺和偏移

```glsl
TexCoord = TexCoord * Tiling + Offset
```





### UnpackScaleNormal : 解法线贴图， 并且乘一个值

```glsl
 UnpackScaleNormal( tex2D( _Texture0, uv0534 ), _Scale )
```



```
UnpackNormal( tex2D( _Texture0, uv0534 )
```



```glsl

half3 UnpackScaleNormalRGorAG(half4 packednormal, half bumpScale)
{
    #if defined(UNITY_NO_DXT5nm)
        half3 normal = packednormal.xyz * 2 - 1;
        #if (SHADER_TARGET >= 30)
            // SM2.0: instruction count limitation
            // SM2.0: normal scaler is not supported
            normal.xy *= bumpScale;
        #endif
        return normal;
    #else
        // This do the trick
        packednormal.x *= packednormal.w;

        half3 normal;
        normal.xy = (packednormal.xy * 2 - 1);
        #if (SHADER_TARGET >= 30)
            // SM2.0: instruction count limitation
            // SM2.0: normal scaler is not supported
            normal.xy *= bumpScale;
        #endif
        normal.z = sqrt(1.0 - saturate(dot(normal.xy, normal.xy)));
        return normal;
    #endif
}

half3 UnpackScaleNormal(half4 packednormal, half bumpScale)
{
    return UnpackScaleNormalRGorAG(packednormal, bumpScale);
}
```



```glsl

inline fixed3 UnpackNormalDXT5nm (fixed4 packednormal)
{
    fixed3 normal;
    normal.xy = packednormal.wy * 2 - 1;
    normal.z = sqrt(1 - saturate(dot(normal.xy, normal.xy)));
    return normal;
}

// Unpack normal as DXT5nm (1, y, 1, x) or BC5 (x, y, 0, 1)
// Note neutral texture like "bump" is (0, 0, 1, 1) to work with both plain RGB normal and DXT5nm/BC5
fixed3 UnpackNormalmapRGorAG(fixed4 packednormal)
{
    // This do the trick
   packednormal.x *= packednormal.w;

    fixed3 normal;
    normal.xy = packednormal.xy * 2 - 1;
    normal.z = sqrt(1 - saturate(dot(normal.xy, normal.xy)));
    return normal;
}
inline fixed3 UnpackNormal(fixed4 packednormal)
{
#if defined(UNITY_NO_DXT5nm)
    return packednormal.xyz * 2 - 1;
#else
    return UnpackNormalmapRGorAG(packednormal);
#endif
}
```



# UV Coordinates: UV坐标



### Texture Coordinates: 贴图UV坐标

根据纹理平铺和偏移参数对其进行操作

![image-20200612165530144](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/TextureCoordinates.jpg)



### Rotator: UV旋转



![image-20200612165530144](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/RotatorNode.gif)

![image-20200615105724286](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615105724286.png)

```glsl
float2 uv = i.ase_texcoord.xy * _Texture0_ST.xy + _Texture0_ST.zw;
float cosVal = cos( radians( _Angle ) );
float sinVal = sin( radians( _Angle ) );
float2 rotatorUV = mul( uv - _Anchor , float2x2( cosVal , -sinVal , sinVal , cosVal )) + _Anchor;


finalColor = tex2D( _Texture0, rotatorUV );
```



### Pixelate UV: 像素画UV



![image-20200615105724286](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/PixelateUVNode.jpg)

![image-20200615110834500](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615110834500.png)

```glsl
fixed4 finalColor;
float2 uv = i.ase_texcoord.xy * _Texture0_ST.xy + _Texture0_ST.zw;
float pixelWidth =  1.0f / _PixelsX;
float pixelHeight = 1.0f / _PixelsY;
half2 pixelateduv = half2((int)(uv.x / pixelWidth) * pixelWidth, (int)(uv.y / pixelHeight) * pixelHeight);


finalColor = tex2D( _Texture0, pixelateduv );
```



### Panner: UV平移

![image-20200615111543189](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615111543189.png)



![image-20200615111543189](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/PannerNode.gif)



```glsl
fixed4 finalColor;
float2 uv = i.ase_texcoord.xy * _Texture0_ST.xy + _Texture0_ST.zw;
float2 pannerUV = ( _T * _Speed + uv);


finalColor = tex2D( _Texture0, pannerUV );
```



### Bidirectional Parallax Mapping

![image-20200615112505638](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615112505638.png)

![image-20200615112607104](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615112607104.png)

![image-20200615112616627](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615112616627.png)



```glsl
Shader "TestNode"
{
	Properties
	{
		_Texture0("Texture 0", 2D) = "white" {}
		_ReferencePlane("Reference Plane", Range( 0 , 100)) = 0
		_ParallaxScale("Parallax Scale", Range( 0 , 100)) = 0
		_Iterations("Iterations", Int) = 1

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase"  }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_tangent : TANGENT;
				float3 ase_normal : NORMAL;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_texcoord1 : TEXCOORD1;
				float4 ase_texcoord2 : TEXCOORD2;
				float4 ase_texcoord3 : TEXCOORD3;
				float4 ase_texcoord4 : TEXCOORD4;
			};

			uniform sampler2D _Texture0;
			uniform float4 _Texture0_ST;
			uniform int _Iterations;
			uniform float _ReferencePlane;
			uniform float _ParallaxScale;
			float2 IterativeParallax27_g4( sampler2D tex , float2 UVs , float2 plane , int ite , float refp , float scale )
			{
				UVs += plane * scale * refp * ite;
				for(int i = 0; i < ite; i++)
				{
					UVs += (tex2D(tex, UVs).g - 1) * plane * scale;
				}
				return UVs;
			}
			

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
				o.ase_texcoord1.xyz = ase_worldTangent;
				float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
				o.ase_texcoord2.xyz = ase_worldNormal;
				float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
				float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
				o.ase_texcoord3.xyz = ase_worldBitangent;
				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord4.xyz = ase_worldPos;
				
				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				o.ase_texcoord1.w = 0;
				o.ase_texcoord2.w = 0;
				o.ase_texcoord3.w = 0;
				o.ase_texcoord4.w = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				sampler2D tex27_g4 = _Texture0;
				float2 uv0_Texture0 = i.ase_texcoord.xy * _Texture0_ST.xy + _Texture0_ST.zw;
				float2 UVs27_g4 = uv0_Texture0;
				float3 ase_worldTangent = i.ase_texcoord1.xyz;
				float3 ase_worldNormal = i.ase_texcoord2.xyz;
				float3 ase_worldBitangent = i.ase_texcoord3.xyz;
				float3 tanToWorld0 = float3( ase_worldTangent.x, ase_worldBitangent.x, ase_worldNormal.x );
				float3 tanToWorld1 = float3( ase_worldTangent.y, ase_worldBitangent.y, ase_worldNormal.y );
				float3 tanToWorld2 = float3( ase_worldTangent.z, ase_worldBitangent.z, ase_worldNormal.z );
				float3 ase_worldPos = i.ase_texcoord4.xyz;
				float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
				ase_worldViewDir = normalize(ase_worldViewDir);
				float3 ase_tanViewDir =  tanToWorld0 * ase_worldViewDir.x + tanToWorld1 * ase_worldViewDir.y  + tanToWorld2 * ase_worldViewDir.z;
				ase_tanViewDir = normalize(ase_tanViewDir);
				float2 appendResult2_g4 = (float2(ase_tanViewDir.xy));
				float2 plane27_g4 = ( appendResult2_g4 / ase_tanViewDir.z );
				int ite27_g4 = _Iterations;
				float refp27_g4 = _ReferencePlane;
				float scale27_g4 = _ParallaxScale;
				float2 localIterativeParallax27_g4 = IterativeParallax27_g4( tex27_g4 , UVs27_g4 , plane27_g4 , ite27_g4 , refp27_g4 , scale27_g4 );
				
				
				finalColor = tex2D( _Texture0, localIterativeParallax27_g4 );
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```



### Filpbook UV Animation: UV 序列帧动画

![image-20200615113511285](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615113511285.png)

```glsl
fixed4 finalColor;
float2 uv0_Texture0 = i.ase_texcoord.xy * _Texture0_ST.xy + _Texture0_ST.zw;
// *** BEGIN Flipbook UV Animation vars ***
// Total tiles of Flipbook Texture
float fbtotaltiles574 = _Columns * _Rows;
// Offsets for cols and rows of Flipbook Texture
float fbcolsoffset574 = 1.0f / _Columns;
float fbrowsoffset574 = 1.0f / _Rows;
// Speed of animation
float fbspeed574 = _T * _Speed;
// UV Tiling (col and row offset)
float2 fbtiling574 = float2(fbcolsoffset574, fbrowsoffset574);
// UV Offset - calculate current tile linear index, and convert it to (X * coloffset, Y * rowoffset)
// Calculate current tile linear index
float fbcurrenttileindex574 = round( fmod( fbspeed574 + _StartFrame, fbtotaltiles574) );
fbcurrenttileindex574 += ( fbcurrenttileindex574 < 0) ? fbtotaltiles574 : 0;
// Obtain Offset X coordinate from current tile linear index
float fblinearindextox574 = round ( fmod ( fbcurrenttileindex574, _Columns ) );
// Multiply Offset X by coloffset
float fboffsetx574 = fblinearindextox574 * fbcolsoffset574;
// Obtain Offset Y coordinate from current tile linear index
float fblinearindextoy574 = round( fmod( ( fbcurrenttileindex574 - fblinearindextox574 ) / _Columns, _Rows ) );
// Reverse Y to get tiles from Top to Bottom
fblinearindextoy574 = (int)(_Rows-1) - fblinearindextoy574;
// Multiply Offset Y by rowoffset
float fboffsety574 = fblinearindextoy574 * fbrowsoffset574;
// UV Offset
float2 fboffset574 = float2(fboffsetx574, fboffsety574);
// Flipbook UV
half2 fbuv574 = uv0_Texture0 * fbtiling574 + fboffset574;
// *** END Flipbook UV Animation vars ***


finalColor = tex2D( _Texture0, fbuv574 );
```

### Parallax Mapping: 视差映射

[Parallax Mapping]: http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Parallax_Mapping

视差贴图（也称为偏移贴图或虚拟位移贴图）是对应用于纹理的凹凸贴图或法线贴图技术的增强。视差贴图是通过切线空间中的视角（相对于表面法线的角度）和该点处的高度图的值的函数来替换渲染多边形上某个点的纹理坐标来实现的。在较陡的视角下，纹理坐标的位移更大，由于视线变化而产生的视差效应会给人以深度错觉。[[参考](https://en.wikipedia.org/wiki/Parallax_mapping) ]

![image-20200615114951454](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615114951454.png)

```glsl

fixed4 finalColor;
float2 uv0_Texture0 = i.ase_texcoord.xy * _Texture0_ST.xy + _Texture0_ST.zw;
float3 ase_worldPos = i.ase_texcoord1.xyz;
float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
ase_worldViewDir = normalize(ase_worldViewDir);
float2 Offset579 = ( ( _Height - 1 ) * ase_worldViewDir.xy * _Scale ) + uv0_Texture0;


finalColor = tex2D( _Texture0, Offset579 );
```



### Parallax Occlusion Mapping： 视差遮挡贴图

[Parallax Occlusion Mapping]: http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Parallax_Occlusion_Mapping

视差遮挡映射（POM）是对[视差映射](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Parallax_Mapping)技术的增强。视差遮挡贴图用于通过使用置换贴图（类似于地形图）而不是通过生成新的几何图形来在带纹理的曲面中以程序方式创建3D定义。[[参考](https://en.wikipedia.org/wiki/Parallax_occlusion_mapping) ]



```glsl

			inline float2 POM( sampler2D heightMap, float2 uvs, float2 dx, float2 dy, float3 normalWorld, float3 viewWorld, float3 viewDirTan, int minSamples, int maxSamples, float parallax, float refPlane, float2 tilling, float2 curv, int index )
			{
				float3 result = 0;
				int stepIndex = 0;
				int numSteps = ( int )lerp( (float)maxSamples, (float)minSamples, saturate( dot( normalWorld, viewWorld ) ) );
				float layerHeight = 1.0 / numSteps;
				float2 plane = parallax * ( viewDirTan.xy / viewDirTan.z );
				uvs += refPlane * plane;
				float2 deltaTex = -plane * layerHeight;
				float2 prevTexOffset = 0;
				float prevRayZ = 1.0f;
				float prevHeight = 0.0f;
				float2 currTexOffset = deltaTex;
				float currRayZ = 1.0f - layerHeight;
				float currHeight = 0.0f;
				float intersection = 0;
				float2 finalTexOffset = 0;
				while ( stepIndex < numSteps + 1 )
				{
			currHeight = tex2Dgrad( heightMap, uvs + currTexOffset, dx, dy ).r;
			if ( currHeight > currRayZ )
			{
				stepIndex = numSteps + 1;
			}
			else
			{
				stepIndex++;
				prevTexOffset = currTexOffset;
				prevRayZ = currRayZ;
				prevHeight = currHeight;
				currTexOffset += deltaTex;
				currRayZ -= layerHeight;
			}
				}
				int sectionSteps = 2;
				int sectionIndex = 0;
				float newZ = 0;
				float newHeight = 0;
				while ( sectionIndex < sectionSteps )
				{
			intersection = ( prevHeight - prevRayZ ) / ( prevHeight - currHeight + currRayZ - prevRayZ );
			finalTexOffset = prevTexOffset + intersection * deltaTex;
			newZ = prevRayZ - intersection * layerHeight;
			newHeight = tex2Dgrad( heightMap, uvs + finalTexOffset, dx, dy ).r;
			if ( newHeight > newZ )
			{
				currTexOffset = finalTexOffset;
				currHeight = newHeight;
				currRayZ = newZ;
				deltaTex = intersection * deltaTex;
				layerHeight = intersection * layerHeight;
			}
			else
			{
				prevTexOffset = finalTexOffset;
				prevHeight = newHeight;
				prevRayZ = newZ;
				deltaTex = ( 1 - intersection ) * deltaTex;
				layerHeight = ( 1 - intersection ) * layerHeight;
			}
			sectionIndex++;
				}
				return uvs + finalTexOffset;
			}
```



```glsl
fixed4 finalColor;
float2 uv0_Texture0 = i.ase_texcoord.xy * _Texture0_ST.xy + _Texture0_ST.zw;
float3 ase_worldPos = i.ase_texcoord1.xyz;
float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
ase_worldViewDir = normalize(ase_worldViewDir);
float3 ase_worldNormal = i.ase_texcoord2.xyz;
float2 OffsetPOM581 = POM( _Texture0, uv0_Texture0, ddx(uv0_Texture0), ddy(uv0_Texture0), ase_worldNormal, ase_worldViewDir, ase_worldViewDir, 8, 8, _Scale, _RefPlane, _Texture0_ST.xy, float2(0,0), 0 );


finalColor = tex2D( _Texture0, OffsetPOM581 );
```



### Parallax Offset： 视察偏移

视差偏移节点使用Unity内部的ParallaxOffset函数为视差法线贴图计算UV偏移。此函数实现简化的视差映射技术，该技术会根据*切线空间中*的当前[View Dir](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/View_Dir)向量以及该点的高度图值使UV坐标变形。在阶梯式视角下，偏移量会更大，并且会发生更多的位移，这使您在观察表面时更具深度感。

**注意：**此节点返回偏移值，因此需要将其添加到表面纹理坐标才能正常工作。

![image-20200615114951454](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ParallaxOffsetNode.gif)





![image-20200615122537410](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615122537410.png)



```glsl
Shader "TestNode"
{
	Properties
	{
		_MainTextue("MainTextue", 2D) = "white" {}
		_Height("Height", Range( 0 , 100)) = 0
		_Heightmap("Heightmap", 2D) = "white" {}
		_Normalmap("Normalmap", 2D) = "bump" {}
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase"  }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			#include "Lighting.cginc"
			#include "AutoLight.cginc"


			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_texcoord1 : TEXCOORD1;
			};

			//This is a late directive
			
			uniform sampler2D _MainTextue;
			uniform sampler2D _Heightmap;
			uniform float4 _Heightmap_ST;
			uniform float _Height;
			uniform sampler2D _Normalmap;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord1.xyz = ase_worldPos;
				
				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				o.ase_texcoord1.w = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv_Heightmap = i.ase_texcoord.xy * _Heightmap_ST.xy + _Heightmap_ST.zw;
				float3 ase_worldPos = i.ase_texcoord1.xyz;
				float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
				ase_worldViewDir = normalize(ase_worldViewDir);
				float2 paralaxOffset582 = ParallaxOffset( tex2D( _Heightmap, uv_Heightmap ).r , _Height , ase_worldViewDir );
				float2 temp_output_585_0 = ( i.ase_texcoord.xy + paralaxOffset582 );
				float3 worldSpaceLightDir = UnityWorldSpaceLightDir(ase_worldPos);
				float dotResult587 = dot( worldSpaceLightDir , UnpackNormal( tex2D( _Normalmap, temp_output_585_0 ) ) );
				
				
				finalColor = ( tex2D( _MainTextue, temp_output_585_0 ) * dotResult587 );
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```

```glsl
// Calculates UV offset for parallax bump mapping
inline float2 ParallaxOffset( half h, half height, half3 viewDir )
{
    h = h * height - height/2.0;
    float3 v = normalize(viewDir);
    v.z += 0.42;
    return h * (v.xy / v.z);
}
```



# Logical Operators: 逻辑操作

### Compare (A<B) : 比较 A<B

![image-20200615142612586](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615142612586.png)

```glsl
( _A < _B ) ? _Value_True :  _Value_False 
```

### Compare (A==B) : 比较 A==B

![image-20200615142738090](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615142738090.png)

```
( _A == _B ) ? _Value_True :  _Value_False 
```



### Compare (A>B) : 比较 A>B

![image-20200615143006242](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615143006242.png)

```
( _A > _B ) ? _Value_True :  _Value_False 
```



### Compare (A>B) : 比较 A>B

![image-20200615143006242](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615143006242.png)

```
( _A > _B ) ? _Value_True :  _Value_False 
```



### Compare (A ≠B) : 比较 A!=B



```
( _A != _B ) ? _Value_True :  _Value_False 
```



### Compare (A<=B) : 比较 A<=B

```
( _A <= _B ) ? _Value_True :  _Value_False 
```



### Compare (A>=B) : 比较 A>=B

```
( _A >= _B ) ? _Value_True :  _Value_False 
```



### Compare With Range: 比较范围

```glsl
( _Val >= _Min && _Val <= _Max ) ? _Value_True :  _Value_False 
```

![image-20200615143700242](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615143700242.png)

### Debug Switch: 调试，选择使用某个输入参数

![image-20200615145338303](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615145338303.png)



![image-20200615145354280](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615145354280.png)

### if: 条件

```glsl
if( uv0170.x > _Side )
ifLocalVar172 = uv0170.x;
```

![image-20200531010842524](docimage/image-20200531010842524.png)

![image-20200531010619605](docimage/image-20200531010619605.png)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/IfNode.jpg)

### if[Community]: 在if的基础上==多了一个范围

![image-20200615151657676](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615151657676.png)

```glsl
float a = i.ase_texcoord.xyz.x;
float v = a - _ValEqualThreshold > _b
    ? _ValThen
    : a - _ValEqualThreshold <= _b && a + _ValEqualThreshold >= _b
        ? _ValEque 
        : _ValLower;
```



### Material Quality: 材质球质量

![image-20200615152356827](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615152356827.png)

```glsl
float currQuality617 = 0;
#if defined(MATERIAL_QUALITY_HIGH)
	currQuality617 = 0.0;
#elif defined(MATERIAL_QUALITY_MEDIUM)

#else

#endif
```





### Static Switch:  宏条件定义变量

```glsl
#ifdef _KEYWORD0_ON
	float staticSwitch619 = _ValTrue;
#else
	float staticSwitch619 = _ValFalse;
#endif
```

![image-20200615152808294](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615152808294.png)



### Template Multi-Pass Switch： 设置不同Pass参数

模板多通道交换节点在编译时根据当前分析的子着色器/通道中继正确的输入端口。

![image-20200615153202691](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615153202691.png)



![image-20200615153350484](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615153350484.png)



```glsl
Shader "TestNode"
{
	Properties
	{
		_ValuePass1("ValuePass1", Range( 0 , 1)) = 0
		_ValuePass2("ValuePass2", Range( 0 , 1)) = 1

	}
	
	SubShader
	{
		LOD 0

		Tags { "RenderType"="Opaque" }
		
		Pass
		{
			
			Name "First"
			CGINCLUDE
			#pragma target 3.0
			ENDCG
			Blend Off
			Cull Back
			ColorMask RGBA
			ZWrite On
			ZTest LEqual
			Offset 0 , 0
			
			CGPROGRAM
			
			#pragma vertex vert
			#pragma fragment frag
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_OUTPUT_STEREO
				
			};

			uniform float _ValuePass1;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				
				
				v.vertex.xyz +=  float3(0,0,0) ;
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				fixed4 finalColor;
				float4 temp_cast_0 = (_ValuePass1).xxxx;
				
				
				finalColor = temp_cast_0;
				return finalColor;
			}
			ENDCG
		}

		
		Pass
		{
			Name "Second"
			
			CGINCLUDE
			#pragma target 3.0
			ENDCG
			Blend Off
			Cull Back
			ColorMask RGBA
			ZWrite On
			ZTest LEqual
			Offset 0 , 0
			
			CGPROGRAM
			
			#pragma vertex vert
			#pragma fragment frag
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_OUTPUT_STEREO
				
			};

			uniform float _ValuePass2;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				
				
				v.vertex.xyz +=  float3(0,0,0) ;
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				fixed4 finalColor;
				float4 temp_cast_0 = (_ValuePass2).xxxx;
				
				
				finalColor = temp_cast_0;
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```



### Toggle Switch0: 2个值直接切换开关

![image-20200615153627934](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615153627934.png)

```glsl

	Properties
	{
		[Toggle]_ToggleSwitch0("Toggle Switch0", Float) = 1
		_In0("In0", Float) = 0
		_In1("In1", Float) = 1

	}
	
	 _ToggleSwitch0 ? _In1 : _In0;
```





# Matrix Operators: 矩阵操作

### Determinant: 行列式

[矩阵行列式]: https://baike.baidu.com/item/%E7%9F%A9%E9%98%B5%E8%A1%8C%E5%88%97%E5%BC%8F/18882017?fr=aladdin(https://baike.baidu.com/item/矩阵行列式/18882017?fr=aladdin)

行列式节点从其[Input](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Determinant#paramInput)上指定的矩阵计算行列式浮点值。除其他事项外，该值确定此特定矩阵是否具有逆（如果> 0）并用于其计算。
**注意：**由于所有Amplify Shader Editor矩阵只能是3x3或4x4平方矩阵，因此必须从所有矩阵中计算行列式。



一个n×n的[方阵](https://baike.baidu.com/item/方阵/7362108)A的行列式记为det(**A**)或者|**A**|，一个2×2矩阵的行列式可表示如下：

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/8afc39414bdc8fe8681a06ee04803c05.svg)

把一个n阶行列式中的元素aij所在的第i行和第j列划去后，留下来的n-1阶行列式叫做元素aij的余子式,记作Mij。记**A**ij=(-1)i+j**M**ij，叫做元素aij的**代数余子式**。例如：

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/c9760a1280796b146e3f9c965b0210e9.svg)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/9632ed54692be85c1edd7c13a201bc08.svg)

一个n×n矩阵的行列式等于其任意行(或列)的元素与对应的代数余子式乘积之和，即 [1] :

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/8182ba4de953584aa4e1924ebd4b8a3b.svg)



```glsl
float v = determinant( UNITY_MATRIX_V )
```



### Inverse: 逆矩阵



```glsl

			float4x4 Inverse4x4(float4x4 input)
			{
				#define minor(a,b,c) determinant(float3x3(input.a, input.b, input.c))
				float4x4 cofactors = float4x4(
				minor( _22_23_24, _32_33_34, _42_43_44 ),
				-minor( _21_23_24, _31_33_34, _41_43_44 ),
				minor( _21_22_24, _31_32_34, _41_42_44 ),
				-minor( _21_22_23, _31_32_33, _41_42_43 ),
			
				-minor( _12_13_14, _32_33_34, _42_43_44 ),
				minor( _11_13_14, _31_33_34, _41_43_44 ),
				-minor( _11_12_14, _31_32_34, _41_42_44 ),
				minor( _11_12_13, _31_32_33, _41_42_43 ),
			
				minor( _12_13_14, _22_23_24, _42_43_44 ),
				-minor( _11_13_14, _21_23_24, _41_43_44 ),
				minor( _11_12_14, _21_22_24, _41_42_44 ),
				-minor( _11_12_13, _21_22_23, _41_42_43 ),
			
				-minor( _12_13_14, _22_23_24, _32_33_34 ),
				minor( _11_13_14, _21_23_24, _31_33_34 ),
				-minor( _11_12_14, _21_22_24, _31_32_34 ),
				minor( _11_12_13, _21_22_23, _31_32_33 ));
				#undef minor
				return transpose( cofactors ) / determinant( input );
			}
```

```glsl

			float3x3 Inverse3x3(float3x3 input)
			{
				float3 a = input._11_21_31;
				float3 b = input._12_22_32;
				float3 c = input._13_23_33;
				return float3x3(cross(b,c), cross(c,a), cross(a,b)) * (1.0 / dot(a,cross(b,c)));
			}
```



![image-20200615155907317](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615155907317.png)

```glsl
float4x4 invertVa = Inverse4x4( UNITY_MATRIX_V );
```





[线性代数：如何求矩阵的逆矩阵]: https://jingyan.baidu.com/article/925f8cb8a74919c0dde056e7.html



![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/cfadcdd96975f2c4e7e7daf68f0148fe1f4206d7.jpg)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/059057299a883913fd9b6f5b26bcbe2f46707cd7.jpg)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/031231632385e036d5efc45db8e039723c035ad7.jpg)





### Matrix From Vectors: 由多个向量组成矩阵

```glsl
Properties
{
    _v1("v1", Vector) = (0,0,0,0)
    _v2("v2", Vector) = (0,0,0,0)
    _v3("v3", Vector) = (0,0,0,0)

}
	
float3x3(_v1, _v2, _v3)
```





![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/MatrixFromVectorsNode.jpg)



### Position From Transform： 读取矩阵的位置

Position From Transform节点从其[*Input*](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Position_From_Transform#paramInput)上有效对应于其第四列的4x4变换矩阵中检索位置矢量。



​				

```glsl
float4 matrixToPos654 = float4( UNITY_MATRIX_M[3][0],UNITY_MATRIX_M[3][1],UNITY_MATRIX_M[3][2],UNITY_MATRIX_M[3][3]);
```

![image-20200615162356240](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615162356240.png)



### Transpose: 转置

“转置”节点根据其[Input](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Transpose#paramInput)上指定的一个来计算转置矩阵。该运算符按列切换行，反之亦然，它在对角线上翻转。
如果指定的矩阵正交，则转置等于其[逆](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Inverse)矩阵



[http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Transpose]: http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Transpose





![Matrix_Transpose.gif](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/Matrix_Transpose.gif)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/Matrix_Transpose.gif)



[https://baike.baidu.com/item/%E7%9F%A9%E9%98%B5%E8%BD%AC%E7%BD%AE/4150715?fr=aladdin](https://baike.baidu.com/item/矩阵转置/4150715?fr=aladdin)



设A为m×n阶[矩阵](https://baike.baidu.com/item/矩阵)（即m行n列），第i 行j 列的元素是a(i,j)，即：

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ad50850a3d5d055e4347384916988b40.svg)

把m×n矩阵A的行换成同序数的列得到一个n×m矩阵，此矩阵叫做A的转置矩阵，记做

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/732458e657617a3f7bf1982a02f92019.svg)

或

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/7afad6cb1fc27add10e532cf7686e102.svg)

 . [1] 

例如矩阵

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/b1c775826c5273b1258e5ea53b2f4c82.svg)

的转置矩阵为

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/f553eb5fd8403f75fae9ffb1d56be63a.svg)





矩阵的转置和加减乘除一样，也是一种运算，且满足下列运算规律（假设运算都是可行的）：

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/20a8c56f9694c54fbf18048c84fc3165.svg)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/3ff3ad092c74c7d4ff965d5a511c2688.svg)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/bc14a53639e596b2cfc2f8a758ae343b.svg)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/09f60abe3f1caa7ecf6acb48746e9f74.svg)

```
transpose( UNITY_MATRIX_M )
```





### Vector From Matrix: 读取矩阵中的一行或者一列组成一个向量

![image-20200615163823210](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615163823210.png)

```glsl
float3 vertexValue = UNITY_MATRIX_M[1].xyz;
```



![image-20200615163937916](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615163937916.png)

```glsl
float3 vertexValue = float4( UNITY_MATRIX_M[0][1],UNITY_MATRIX_M[1][1],UNITY_MATRIX_M[2][1],UNITY_MATRIX_M[3][1] ).xyz;
```



# Matrix Transform: 转换矩阵

### Camera To World Matrix： 摄像机转世界矩阵, unity_CameraToWorld

```
unity_CameraToWorld
```

![image-20200615164635025](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615164635025.png)

### Object To World Matrix: 模型对象转世界矩阵, unity_ObjectToWorld

```
unity_ObjectToWorld
```

![image-20200615181427339](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615181427339.png)

```glsl
// Transforms direction from object to world space
inline float3 UnityObjectToWorldDir( in float3 dir )
{
    return normalize(mul((float3x3)unity_ObjectToWorld, dir));
}
```



### World To Camera Matrix: 世界转摄像机矩阵， unity_WorldToCamera

```
unity_WorldToCamera
```

![image-20200615181606294](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615181606294.png)

### World To Object Matrix: 世界转模型对象矩阵, unity_WorldToObject

```
unity_WorldToObject
```

![image-20200615181631784](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615181631784.png)



### World To Tangent Matrix: 世界转切线矩阵

![image-20200615181739108](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615181739108.png)

```glsl
// 切线，世界坐标系
float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
// 法线，世界坐标系
float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
// 标量
float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
// 切线和法线垂直方向， 世界坐标系
float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
// 世界转切线矩阵
float3x3 ase_worldToTangent = float3x3(ase_worldTangent,ase_worldBitangent,ase_worldNormal);
```

### Transpose Model View Matrix： 转置模型视图矩阵节点， UNITY_MATRIX_T_MV

```
UNITY_MATRIX_T_MV
```

![image-20200615182241741](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615182241741.png)



### Model Matrix: 模型矩阵, UNITY_MATRIX_M

```glsl
UNITY_MATRIX_M
```

![image-20200615171110464](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615171110464.png)



### View Matrix: 视图矩阵, UNITY_MATRIX_V

```
UNITY_MATRIX_V
```

![image-20200615171046887](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615171046887.png)



### Projection Matrix：投影矩阵, UNITY_MATRIX_P

```
UNITY_MATRIX_P
```



![image-20200615171303061](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615171303061.png)

### Model View Matrix: 模型视图矩阵，UNITY_MATRIX_MV

```
UNITY_MATRIX_MV
```

![image-20200615172445189](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615172445189.png)





### View Projection Matrix: 视图投影矩阵, UNITY_MATRIX_VP

```
UNITY_MATRIX_VP
```

![image-20200615172856651](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615172856651.png)

### Model View Projection Matrix：模型视图投影矩阵, UnityObjectToClipPos(v.vertex)

```glsl
float4 vertex = UnityObjectToClipPos(v.vertex);
```

![image-20200615172511112](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615172511112.png)

```glsl
// Tranforms position from object to homogenous space
inline float4 UnityObjectToClipPos(in float3 pos)
{
    // More efficient than computing M*VP matrix product
    return mul(UNITY_MATRIX_VP, mul(unity_ObjectToWorld, float4(pos, 1.0)));
}
inline float4 UnityObjectToClipPos(float4 pos) // overload for float4; avoids "implicit truncation" warning for existing shaders
{
    return UnityObjectToClipPos(pos.xyz);
}
```



### Projector Matrix: 投影仪矩阵 贴花, unity_Projector

```
unity_Projector
```



[Unity Projector 投影器原理以及优化]: https://blog.csdn.net/u010704802/article/details/104619353

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/aHR0cDovL3d3dy5kcmVhbWZhaXJ5LmNuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvMjAxODExMTkyMjU4MjYuZ2lm)

![img](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/aHR0cDovL3d3dy5kcmVhbWZhaXJ5LmNuL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTEvcHJvamVjdG9yMS5wbmc)





### Projector Clip Matrix： 投影裁剪矩阵，unity_ProjectorClip

```
unity_ProjectorClip
```

![image-20200615172126368](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615172126368.png)



### Inverse View Matrix：视图逆矩阵， UNITY_MATRIX_I_V

```
UNITY_MATRIX_I_V
```

![image-20200615182557182](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615182557182.png)

### Inverse Transpose Model View Matrix: 模型视图转置逆矩阵, UNITY_MATRIX_IT_MV

```
UNITY_MATRIX_IT_MV
```

![image-20200615183316385](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615183316385.png)



### Inverse Projection Matrix: 投影逆矩阵

![image-20200615182628723](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615182628723.png)

### Inverse View Projection Matrix: 视图投影逆矩阵

![image-20200615183143235](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615183143235.png)

### Common Transform Matrices： 通用矩阵

![image-20200615183448015](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615183448015.png)



# Object Transform: 空间转换

### Object Space View Dir：返回从当前游戏对象到摄像机的方向。float3 v3 = ObjSpaceViewDir(v4)

```glsl
float3 v3 = ObjSpaceViewDir(v4)
```

```glsl
// Computes object space view direction
inline float3 ObjSpaceViewDir( in float4 v )
{
    float3 objSpaceCameraPos = mul(unity_WorldToObject, float4(_WorldSpaceCameraPos.xyz, 1)).xyz;
    return objSpaceCameraPos - v.xyz;
}
```

![image-20200615184845636](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615184845636.png)

### Object To Clip Pos: 将对象/局部空间中的位置转换为同类坐标中相机的剪辑空间。 float4 v4 = UnityObjectToClipPos(v3)

```glsl
float4 unityObjectToClipPos = UnityObjectToClipPos( v.vertex.xyz );
```

```glsl
// Tranforms position from object to homogenous space
inline float4 UnityObjectToClipPos(in float3 pos)
{
    // More efficient than computing M*VP matrix product
    return mul(UNITY_MATRIX_VP, mul(unity_ObjectToWorld, float4(pos, 1.0)));
}
inline float4 UnityObjectToClipPos(float4 pos) // overload for float4; avoids "implicit truncation" warning for existing shaders
{
    return UnityObjectToClipPos(pos.xyz);
}
```



![image-20200615184818813](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615184818813.png)



### Object To View Pos: 转换为相机的视图空间, float3 v3 = UnityObjectToViewPos(v3)

“对象到视图位置”节点将对象/本地空间中的“ [*输入”*](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Object_To_View_Pos#paramInput)位置转换为相机的视图空间。
视图空间中的坐标称为眼睛坐标，在*输入*本地位置值的情况下，它将表示根据相机所在位置的相对位置。

```
float3 unityObjectToViewPos = UnityObjectToViewPos( v.vertex.xyz );
```

```glsl
// 将一个点从object空间转换为view空间。这就相当于mul(UNITY_MATRIX_MV, float4(pos, 1.0)).xyz, 应该在它的位置上使用。
// Tranforms position from object to camera space
inline float3 UnityObjectToViewPos( in float3 pos )
{
    return mul(UNITY_MATRIX_V, mul(unity_ObjectToWorld, float4(pos, 1.0))).xyz;
}
inline float3 UnityObjectToViewPos(float4 pos) // overload for float4; avoids "implicit truncation" warning for existing shaders
{
    return UnityObjectToViewPos(pos.xyz);
}
```

![image-20200615185134836](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615185134836.png)

### Object To World: 从“对象/本地空间”转换为“世界空间”, float4 transform = mul(unity_ObjectToWorld,float4( v.vertex.xyz , 0.0 ));

```glsl
float4 transform = mul(unity_ObjectToWorld,float4( v.vertex.xyz , 0.0 ));
```



### World Space View Dir: 返回从当前游戏对象到摄像机的方向。float3 v3 = WorldSpaceViewDir(v4)

```glsl
float3 worldSpaceViewDir = WorldSpaceViewDir( float4( v.vertex.xyz , 0.0 ) );
```

![image-20200615190604392](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615190604392.png)

```glsl
// Computes world space view direction, from object space position
inline float3 UnityWorldSpaceViewDir( in float3 worldPos )
{
    return _WorldSpaceCameraPos.xyz - worldPos;
}

// Computes world space view direction, from object space position
// *Legacy* Please use UnityWorldSpaceViewDir instead
inline float3 WorldSpaceViewDir( in float4 localPos )
{
    float3 worldPos = mul(unity_ObjectToWorld, localPos).xyz;
    return UnityWorldSpaceViewDir(worldPos);
}
```



### World To Object: “世界空间”转换为“对象/局部空间”。float4 transform = mul(unity_WorldToObject,float4( worldPos , 0.0 ));

```
float4 transform = mul(unity_WorldToObject,float4( worldPos , 0.0 ));
```

![image-20200615191300616](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615191300616.png)



### World Transform Params: 世界变换参数， float4 unity_WorldTransformParams

“世界变换参数”节点包含有关当前变换的信息，更具体地说，W通常为1.0，对于奇数负比例变换，则为-1.0

```glsl
float4 unity_WorldTransformParams;
```

![image-20200615194223964](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615194223964.png)



### Transform Position: 变换位置, 不同空间转换

![image-20200615194516585](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615194516585.png)

![image-20200615194529713](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615194529713.png)

![image-20200615194551929](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615194551929.png)



##### Object To World

```glsl
float3 objToWorld703 = mul( unity_ObjectToWorld, float4( v.vertex.xyz, 1 ) ).xyz;
```



##### Object To View

```glsl
float3 objToView703 = mul( UNITY_MATRIX_MV, float4( v.vertex.xyz, 1 ) ).xyz;
```



##### Object To Tangent

```glsl
// 切线， 世界空间
float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
// 法线， 世界空间
float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
// 标量
float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
// 法线和切线垂直面方向， 世界空间
float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
// 切线矩阵
float3x3 ase_worldToTangent = float3x3(ase_worldTangent,ase_worldBitangent,ase_worldNormal);

// 先将本地坐标转世界坐标，再乘切线矩阵
float3 objectToTangentPos703 = mul( ase_worldToTangent, mul( unity_ObjectToWorld, float4( v.vertex.xyz, 1 ) ).xyz);
```



##### Object To Clip

```glsl
float3 objectToClip703 = UnityObjectToClipPos(v.vertex.xyz).xyz;
```

##### Object To Clip， Perpective Divide

```glsl
float4 objectToClip703 = UnityObjectToClipPos(v.vertex.xyz);
float3 objectToClip703NDC = objectToClip703.xyz/objectToClip703.w;
```









##### World To Object

```glsl
float3 worldToObj703 = mul( unity_WorldToObject, float4( v.vertex.xyz, 1 ) ).xyz;
```



##### World To View

```glsl
float3 worldToView703 = mul( UNITY_MATRIX_V, float4( v.vertex.xyz, 1 ) ).xyz;
```



##### World To Tangent

```glsl
// 切线， 世界空间
float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
// 法线， 世界空间
float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
// 标量
float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
// 法线和切线垂直面方向， 世界空间
float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
// 矩阵
float3x3 ase_worldToTangent = float3x3(ase_worldTangent,ase_worldBitangent,ase_worldNormal);


float3 worldToTangentPos703 = mul( ase_worldToTangent, v.vertex.xyz);
```



##### World To Clip

```glsl
float3 worldToClip703 = mul(UNITY_MATRIX_VP, float4(v.vertex.xyz, 1.0)).xyz;
```



##### World To Clip， Perpective Divide

```glsl
float4 worldToClip703 = mul(UNITY_MATRIX_VP, float4(v.vertex.xyz, 1.0));
float3 worldToClip703NDC = worldToClip703.xyz/worldToClip703.w;
```







##### View To Object

```glsl
float3 viewToObj703 = mul( unity_WorldToObject, mul( UNITY_MATRIX_I_V , float4( v.vertex.xyz, 1 ) ) ).xyz;
```



##### View To World

```glsl
float3 viewToWorld703 = mul( UNITY_MATRIX_I_V, float4( v.vertex.xyz, 1 ) ).xyz;
```



##### View To Tangent

```glsl
// 切线， 世界空间
float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
// 法线， 世界空间
float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
// 标量
float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
// 法线和切线垂直面方向， 世界空间
float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
// 矩阵
float3x3 ase_worldToTangent = float3x3(ase_worldTangent,ase_worldBitangent,ase_worldNormal);

// 先将视图坐标转世界坐标，再乘切线矩阵
float3 viewToTangentPos703 = mul( ase_worldToTangent, mul( UNITY_MATRIX_I_V, float4( v.vertex.xyz, 1 ) ).xyz);
```



##### View To Clip

```glsl
float3 viewToClip703 = mul(UNITY_MATRIX_P, float4(v.vertex.xyz, 1.0)).xyz;
```



##### View To Clip， Perpective Divide

```glsl
float4 viewToClip703 = mul(UNITY_MATRIX_P, float4(v.vertex.xyz, 1.0));
float3 viewToClip703NDC = viewToClip703.xyz/viewToClip703.w;
```









##### Tangent To Object,  Inverse TBN: Faset 快速的

```glsl
// 切线， 世界空间
float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
// 法线， 世界空间
float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
// 标量
float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
// 法线和切线垂直面方向， 世界空间
float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
// 逆矩阵
float3x3 ase_tangentToWorldFast = float3x3(ase_worldTangent.x,ase_worldBitangent.x,ase_worldNormal.x,ase_worldTangent.y,ase_worldBitangent.y,ase_worldNormal.y,ase_worldTangent.z,ase_worldBitangent.z,ase_worldNormal.z);


// 先转换乘世界坐标，再转本地坐标
float3 tangentTobjectPos703 = mul( unity_WorldToObject, float4( mul( ase_tangentToWorldFast, v.vertex.xyz ), 1 ) ).xyz;
```



##### Tangent To Object,  Inverse TBN: Precise 精确的

```glsl

float3x3 Inverse3x3(float3x3 input)
{
    float3 a = input._11_21_31;
    float3 b = input._12_22_32;
    float3 c = input._13_23_33;
    return float3x3(cross(b,c), cross(c,a), cross(a,b)) * (1.0 / dot(a,cross(b,c)));
}

// 切线， 世界空间
float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
// 法线， 世界空间
float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
// 标量
float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
// 法线和切线垂直面方向， 世界空间
float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
// 矩阵
float3x3 ase_worldToTangent = float3x3(ase_worldTangent,ase_worldBitangent,ase_worldNormal);
// 逆矩阵
float3x3 ase_tangentToWorldPrecise = Inverse3x3( ase_worldToTangent );


// 先转换乘世界坐标，再转本地坐标
float3 tangentTobjectPos703 = mul( unity_WorldToObject, float4( mul( ase_tangentToWorldPrecise, v.vertex.xyz ), 1 ) ).xyz;
```



##### Tangent To World

```glsl

float3 tangentToWorldPos703 = mul( ase_tangentToWorldFast, v.vertex.xyz );
```



##### Tangent To View

```glsl
// 先转世界坐标，再转视图坐标
float3 tangentToViewPos703 = mul( UNITY_MATRIX_V, float4( mul( ase_tangentToWorldFast, v.vertex.xyz ), 1 ) ).xyz;
```



##### Tangent To Clip

```glsl
// 先转世界坐标，再转裁剪坐标
float3 tangentToClipPos703 = mul(UNITY_MATRIX_VP, float4(mul( ase_tangentToWorldFast, v.vertex.xyz ), 1.0)).xyz;
```





# Light: 灯光

### Blinn-Phong Light: Blinn-Phong 光照模型



![image-20200615204554102](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615204554102.png)

![image-20200615204633800](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615204633800.png)

![image-20200615204644378](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615204644378.png)

```glsl
Shader "TestNode"
{
	Properties
	{
		_Shininess("Shininess", Range( 0.01 , 1)) = 0.1
		_Specular("Specular", Range( 0 , 10)) = 6.470588
		_DiffuseTextue("DiffuseTextue", 2D) = "white" {}
		_NormalTextue("NormalTextue", 2D) = "bump" {}
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			#include "Lighting.cginc"
			#include "AutoLight.cginc"
			#include "UnityShaderVariables.cginc"
			#define ASE_SHADOWS 1


			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_tangent : TANGENT;
				float3 ase_normal : NORMAL;
				float4 texcoord1 : TEXCOORD1;
				float4 texcoord2 : TEXCOORD2;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_texcoord1 : TEXCOORD1;
				float4 ase_texcoord2 : TEXCOORD2;
				float4 ase_texcoord3 : TEXCOORD3;
				float4 ase_texcoord4 : TEXCOORD4;
				UNITY_SHADOW_COORDS(5)
				float4 ase_lmap : TEXCOORD6;
				float4 ase_sh : TEXCOORD7;
			};

			//This is a late directive
			
			uniform float _Specular;
			uniform sampler2D _NormalTextue;
			uniform float4 _NormalTextue_ST;
			uniform float _Shininess;
			uniform sampler2D _DiffuseTextue;
			uniform float4 _DiffuseTextue_ST;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				// 位置， 世界坐标
				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord.xyz = ase_worldPos;

				// 切线， 世界坐标
				float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
				o.ase_texcoord2.xyz = ase_worldTangent;

				// 法线， 世界坐标
				float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
				o.ase_texcoord3.xyz = ase_worldNormal;

				// 标量
				float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;

				// 切线和法线垂直面方向
				float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
				o.ase_texcoord4.xyz = ase_worldBitangent;

				// 动态光照烘培 UV
				#ifdef DYNAMICLIGHTMAP_ON //dynlm
				o.ase_lmap.zw = v.texcoord2.xy * unity_DynamicLightmapST.xy + unity_DynamicLightmapST.zw;
				#endif //dynlm

				// 静态光照烘培 UV
				#ifdef LIGHTMAP_ON //stalm
				o.ase_lmap.xy = v.texcoord1.xy * unity_LightmapST.xy + unity_LightmapST.zw;
				#endif //stalm

				#ifndef LIGHTMAP_ON //nstalm
				#if UNITY_SHOULD_SAMPLE_SH //sh
				o.ase_sh.xyz = 0;

				// 顶点光照
				#ifdef VERTEXLIGHT_ON //vl
				// 光照明暗
				o.ase_sh.xyz += Shade4PointLights (
				unity_4LightPosX0, unity_4LightPosY0, unity_4LightPosZ0,
				unity_LightColor[0].rgb, unity_LightColor[1].rgb, unity_LightColor[2].rgb, unity_LightColor[3].rgb,
				unity_4LightAtten0, ase_worldPos, ase_worldNormal);
				#endif //vl

				// 光照衰变
				o.ase_sh.xyz = ShadeSHPerVertex (ase_worldNormal, o.ase_sh.xyz);
				#endif //sh
				#endif //nstalm
				
				o.ase_texcoord1.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.w = 0;
				o.ase_texcoord1.zw = 0;
				o.ase_texcoord2.w = 0;
				o.ase_texcoord3.w = 0;
				o.ase_texcoord4.w = 0;
				o.ase_sh.w = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float4 temp_cast_0 = (_Specular).xxxx;
				float4 temp_output_43_0_g7 = temp_cast_0;
				float3 ase_worldPos = i.ase_texcoord.xyz;
				// 摄像机方向，世界坐标系
				float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
				ase_worldViewDir = normalize(ase_worldViewDir);
				// 灯光方向， 世界坐标系
				float3 worldSpaceLightDir = UnityWorldSpaceLightDir(ase_worldPos);
				// 摄像机方向 + 灯光方向
				float3 normalizeResult4_g8 = normalize( ( ase_worldViewDir + worldSpaceLightDir ) );


				// 读取法线贴图
				float2 uv_NormalTextue = i.ase_texcoord1.xy * _NormalTextue_ST.xy + _NormalTextue_ST.zw;
				float3 ase_worldTangent = i.ase_texcoord2.xyz;
				float3 ase_worldNormal = i.ase_texcoord3.xyz;
				float3 ase_worldBitangent = i.ase_texcoord4.xyz;
				float3 tanToWorld0 = float3( ase_worldTangent.x, ase_worldBitangent.x, ase_worldNormal.x );
				float3 tanToWorld1 = float3( ase_worldTangent.y, ase_worldBitangent.y, ase_worldNormal.y );
				float3 tanToWorld2 = float3( ase_worldTangent.z, ase_worldBitangent.z, ase_worldNormal.z );
				float3 tanNormal12_g7 = UnpackNormal( tex2D( _NormalTextue, uv_NormalTextue ) );
				// 法线贴图 转 世界法线
				float3 worldNormal12_g7 = float3(dot(tanToWorld0,tanNormal12_g7), dot(tanToWorld1,tanNormal12_g7), dot(tanToWorld2,tanNormal12_g7));
				float3 normalizeResult64_g7 = normalize( worldNormal12_g7 );
				// 根据法线贴图、计算光照
				float dotResult19_g7 = dot( normalizeResult4_g8 , normalizeResult64_g7 );
				#if defined(LIGHTMAP_ON) && ( UNITY_VERSION < 560 || ( defined(LIGHTMAP_SHADOW_MIXING) && !defined(SHADOWS_SHADOWMASK) && defined(SHADOWS_SCREEN) ) )//aselc
				float4 ase_lightColor = 0;
				#else //aselc
				float4 ase_lightColor = _LightColor0;
				#endif //aselc
				UNITY_LIGHT_ATTENUATION(ase_atten, i, ase_worldPos)
				float4 temp_output_40_0_g7 = ( ase_lightColor * ase_atten );
				float dotResult14_g7 = dot( normalizeResult64_g7 , worldSpaceLightDir );
				UnityGIInput data34_g7;
				UNITY_INITIALIZE_OUTPUT( UnityGIInput, data34_g7 );
				#if defined(LIGHTMAP_ON) || defined(DYNAMICLIGHTMAP_ON) //dylm34_g7
				data34_g7.lightmapUV = i.ase_lmap;
				#endif //dylm34_g7
				#if UNITY_SHOULD_SAMPLE_SH //fsh34_g7
				data34_g7.ambient = i.ase_sh;
				#endif //fsh34_g7
				UnityGI gi34_g7 = UnityGI_Base(data34_g7, 1, normalizeResult64_g7);
				float2 uv_DiffuseTextue = i.ase_texcoord1.xy * _DiffuseTextue_ST.xy + _DiffuseTextue_ST.zw;
				float4 temp_output_42_0_g7 = tex2D( _DiffuseTextue, uv_DiffuseTextue );
				
				// 最终光照模型
				finalColor = ( ( float4( (temp_output_43_0_g7).rgb , 0.0 ) * (temp_output_43_0_g7).a * pow( max( dotResult19_g7 , 0.0 ) , ( _Shininess * 128.0 ) ) * temp_output_40_0_g7 ) + ( ( ( temp_output_40_0_g7 * max( dotResult14_g7 , 0.0 ) ) + float4( gi34_g7.indirect.diffuse , 0.0 ) ) * float4( (temp_output_42_0_g7).rgb , 0.0 ) ) );
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```

### Fog And Ambient Colors： 雾和环境光颜色



![image-20200615210807371](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615210807371.png)

```glsl
fixed4 finalColor;
finalColor = UNITY_LIGHTMODEL_AMBIENT;
```




​				![image-20200615211159318](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615211159318.png)
​				

```glsl
			finalColor = unity_AmbientSky;
```



![image-20200615211524278](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615211524278.png)

```
finalColor = unity_AmbientEquator;
```

![image-20200615211558157](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615211558157.png)

```
finalColor = unity_AmbientGround;
```

![image-20200615211624846](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615211624846.png)

```
finalColor = unity_FogColor;
```



### Fog Params: 雾参数

```
float4 unity_FogParams
```

![image-20200615211823589](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200615211823589.png)

|     Output Port     |        Description        | Type  |
| :-----------------: | :-----------------------: | :---: |
| Density/Sqrt(Ln(2)) | Useful for Exp2 fog mode. | Float |
|    Density/Ln(2)    | Useful for Exp fog mode.  | Float |
|   -1/(End-Start)    |  Useful for Linear mode.  | Float |
|  End/(End-Start))   |  Useful for Linear mode.  | Float |

### Indirect Diffuse Light: 间接漫反射

间接漫射光从Unity的全局照明系统获取漫射的环境光。这相当于说它检索周围的光探测器的信息。它仅在进行某种自定义照明时很有用，因此，如果将“ *灯光模型”*设置为“ **自**定义照明”，则仅在可用节点菜单中可见该节点，如果该节点恰巧在其外部，则显示警告。
**注意：**此节点仅应用于通过“表面输出”节点与“ **定制照明”**输入端口建立的连接上。

![image-20200615211823589](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/IndirectDiffuseLightNode.jpg)



```glsl
Shader "TestNode"
{
	Properties
	{
		_NormalTexture("NormalTexture", 2D) = "bump" {}
		[HideInInspector] _texcoord( "", 2D ) = "white" {}
		[HideInInspector] __dirty( "", Int ) = 1
	}

	SubShader
	{
		Tags{ "RenderType" = "Opaque"  "Queue" = "Geometry+0" }
		Cull Back
		CGINCLUDE
		#include "UnityPBSLighting.cginc"
		#include "Lighting.cginc"
		#pragma target 3.0
		#ifdef UNITY_PASS_SHADOWCASTER
			#undef INTERNAL_DATA
			#undef WorldReflectionVector
			#undef WorldNormalVector
			#define INTERNAL_DATA half3 internalSurfaceTtoW0; half3 internalSurfaceTtoW1; half3 internalSurfaceTtoW2;
			#define WorldReflectionVector(data,normal) reflect (data.worldRefl, half3(dot(data.internalSurfaceTtoW0,normal), dot(data.internalSurfaceTtoW1,normal), dot(data.internalSurfaceTtoW2,normal)))
			#define WorldNormalVector(data,normal) half3(dot(data.internalSurfaceTtoW0,normal), dot(data.internalSurfaceTtoW1,normal), dot(data.internalSurfaceTtoW2,normal))
		#endif
		struct Input
		{
			float3 worldNormal;
			INTERNAL_DATA
			float2 uv_texcoord;
		};

		struct SurfaceOutputCustomLightingCustom
		{
			half3 Albedo;
			half3 Normal;
			half3 Emission;
			half Metallic;
			half Smoothness;
			half Occlusion;
			half Alpha;
			Input SurfInput;
			UnityGIInput GIData;
		};

		uniform sampler2D _NormalTexture;
		uniform float4 _NormalTexture_ST;

		inline half4 LightingStandardCustomLighting( inout SurfaceOutputCustomLightingCustom s, half3 viewDir, UnityGI gi )
		{
			UnityGIInput data = s.GIData;
			Input i = s.SurfInput;
			half4 c = 0;
			float2 uv_NormalTexture = i.uv_texcoord * _NormalTexture_ST.xy + _NormalTexture_ST.zw;
			UnityGI gi718 = gi;
			float3 diffNorm718 = (WorldNormalVector( i , UnpackNormal( tex2D( _NormalTexture, uv_NormalTexture ) ) ));
			gi718 = UnityGI_Base( data, 1, diffNorm718 );
			float3 indirectDiffuse718 = gi718.indirect.diffuse + diffNorm718 * 0.0001;
			c.rgb = indirectDiffuse718;
			c.a = 1;
			return c;
		}

		inline void LightingStandardCustomLighting_GI( inout SurfaceOutputCustomLightingCustom s, UnityGIInput data, inout UnityGI gi )
		{
			s.GIData = data;
		}

		void surf( Input i , inout SurfaceOutputCustomLightingCustom o )
		{
			o.SurfInput = i;
			o.Normal = float3(0,0,1);
		}

		ENDCG
		CGPROGRAM
		#pragma surface surf StandardCustomLighting keepalpha fullforwardshadows 

		ENDCG
		Pass
		{
			Name "ShadowCaster"
			Tags{ "LightMode" = "ShadowCaster" }
			ZWrite On
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			#pragma target 3.0
			#pragma multi_compile_shadowcaster
			#pragma multi_compile UNITY_PASS_SHADOWCASTER
			#pragma skip_variants FOG_LINEAR FOG_EXP FOG_EXP2
			#include "HLSLSupport.cginc"
			#if ( SHADER_API_D3D11 || SHADER_API_GLCORE || SHADER_API_GLES || SHADER_API_GLES3 || SHADER_API_METAL || SHADER_API_VULKAN )
				#define CAN_SKIP_VPOS
			#endif
			#include "UnityCG.cginc"
			#include "Lighting.cginc"
			#include "UnityPBSLighting.cginc"
			struct v2f
			{
				V2F_SHADOW_CASTER;
				float2 customPack1 : TEXCOORD1;
				float4 tSpace0 : TEXCOORD2;
				float4 tSpace1 : TEXCOORD3;
				float4 tSpace2 : TEXCOORD4;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
			};
			v2f vert( appdata_full v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID( v );
				UNITY_INITIALIZE_OUTPUT( v2f, o );
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO( o );
				UNITY_TRANSFER_INSTANCE_ID( v, o );
				Input customInputData;
				float3 worldPos = mul( unity_ObjectToWorld, v.vertex ).xyz;
				half3 worldNormal = UnityObjectToWorldNormal( v.normal );
				half3 worldTangent = UnityObjectToWorldDir( v.tangent.xyz );
				half tangentSign = v.tangent.w * unity_WorldTransformParams.w;
				half3 worldBinormal = cross( worldNormal, worldTangent ) * tangentSign;
				o.tSpace0 = float4( worldTangent.x, worldBinormal.x, worldNormal.x, worldPos.x );
				o.tSpace1 = float4( worldTangent.y, worldBinormal.y, worldNormal.y, worldPos.y );
				o.tSpace2 = float4( worldTangent.z, worldBinormal.z, worldNormal.z, worldPos.z );
				o.customPack1.xy = customInputData.uv_texcoord;
				o.customPack1.xy = v.texcoord;
				TRANSFER_SHADOW_CASTER_NORMALOFFSET( o )
				return o;
			}
			half4 frag( v2f IN
			#if !defined( CAN_SKIP_VPOS )
			, UNITY_VPOS_TYPE vpos : VPOS
			#endif
			) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID( IN );
				Input surfIN;
				UNITY_INITIALIZE_OUTPUT( Input, surfIN );
				surfIN.uv_texcoord = IN.customPack1.xy;
				float3 worldPos = float3( IN.tSpace0.w, IN.tSpace1.w, IN.tSpace2.w );
				half3 worldViewDir = normalize( UnityWorldSpaceViewDir( worldPos ) );
				surfIN.worldNormal = float3( IN.tSpace0.z, IN.tSpace1.z, IN.tSpace2.z );
				surfIN.internalSurfaceTtoW0 = IN.tSpace0.xyz;
				surfIN.internalSurfaceTtoW1 = IN.tSpace1.xyz;
				surfIN.internalSurfaceTtoW2 = IN.tSpace2.xyz;
				SurfaceOutputCustomLightingCustom o;
				UNITY_INITIALIZE_OUTPUT( SurfaceOutputCustomLightingCustom, o )
				surf( surfIN, o );
				#if defined( CAN_SKIP_VPOS )
				float2 vpos = IN.pos;
				#endif
				SHADOW_CASTER_FRAGMENT( IN )
			}
			ENDCG
		}
	}
	Fallback "Diffuse"
	CustomEditor "ASEMaterialInspector"
}
```



### Indirect Specular Light: 间接镜面照明

间接镜面反射光从Unity的全局照明系统检索镜面反射。这等效于说它从反射探针中检索反射。它仅在进行某种自定义照明时很有用，因此，如果将“ *灯光模型”*设置为“ **自**定义照明”，则仅在可用节点菜单中可见该节点，如果该节点恰巧在其外部，则显示警告。 **注意：**此节点仅应用于通过“表面输出”节点与“ **定制照明”**输入端口建立的连接上。

![image-20200615211823589](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/IndirectSpecularLightNode.jpg)

![image-20200616112152138](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616112152138.png)

```glsl
Shader "TestNode"
{
	Properties
	{
		_NormalTexture("NormalTexture", 2D) = "bump" {}
		_Smoothness("Smoothness", Range( 0 , 20)) = 7.764707
		_Occlusion("Occlusion", Range( 0 , 2)) = 1.470588
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			#include "Lighting.cginc"


			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_tangent : TANGENT;
				float3 ase_normal : NORMAL;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_texcoord1 : TEXCOORD1;
				float4 ase_texcoord2 : TEXCOORD2;
				float4 ase_texcoord3 : TEXCOORD3;
				float4 ase_texcoord4 : TEXCOORD4;
			};

			uniform sampler2D _NormalTexture;
			uniform float4 _NormalTexture_ST;
			uniform float _Smoothness;
			uniform float _Occlusion;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord.xyz = ase_worldPos;
				float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
				o.ase_texcoord2.xyz = ase_worldTangent;
				float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
				o.ase_texcoord3.xyz = ase_worldNormal;
				float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
				float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
				o.ase_texcoord4.xyz = ase_worldBitangent;
				
				o.ase_texcoord1.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.w = 0;
				o.ase_texcoord1.zw = 0;
				o.ase_texcoord2.w = 0;
				o.ase_texcoord3.w = 0;
				o.ase_texcoord4.w = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float3 ase_worldPos = i.ase_texcoord.xyz;
				float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
				ase_worldViewDir = normalize(ase_worldViewDir);
				float2 uv_NormalTexture = i.ase_texcoord1.xy * _NormalTexture_ST.xy + _NormalTexture_ST.zw;
				float3 ase_worldTangent = i.ase_texcoord2.xyz;
				float3 ase_worldNormal = i.ase_texcoord3.xyz;
				float3 ase_worldBitangent = i.ase_texcoord4.xyz;
				float3 tanToWorld0 = float3( ase_worldTangent.x, ase_worldBitangent.x, ase_worldNormal.x );
				float3 tanToWorld1 = float3( ase_worldTangent.y, ase_worldBitangent.y, ase_worldNormal.y );
				float3 tanToWorld2 = float3( ase_worldTangent.z, ase_worldBitangent.z, ase_worldNormal.z );
				float3 tanNormal721 = UnpackNormal( tex2D( _NormalTexture, uv_NormalTexture ) );
				float3 worldNormal721 = float3(dot(tanToWorld0,tanNormal721), dot(tanToWorld1,tanNormal721), dot(tanToWorld2,tanNormal721));
				float3 tanNormal724 = worldNormal721;
				UnityGIInput data;
				UNITY_INITIALIZE_OUTPUT( UnityGIInput, data );
				data.worldPos = ase_worldPos;
				data.worldViewDir = ase_worldViewDir;
				data.probeHDR[0] = unity_SpecCube0_HDR;
				data.probeHDR[1] = unity_SpecCube1_HDR;
				#if UNITY_SPECCUBE_BLENDING || UNITY_SPECCUBE_BOX_PROJECTION //specdataif0
				data.boxMin[0] = unity_SpecCube0_BoxMin;
				#endif //specdataif0
				#if UNITY_SPECCUBE_BOX_PROJECTION //specdataif1
				data.boxMax[0] = unity_SpecCube0_BoxMax;
				data.probePosition[0] = unity_SpecCube0_ProbePosition;
				data.boxMax[1] = unity_SpecCube1_BoxMax;
				data.boxMin[1] = unity_SpecCube1_BoxMin;
				data.probePosition[1] = unity_SpecCube1_ProbePosition;
				#endif //specdataif1
				Unity_GlossyEnvironmentData g724 = UnityGlossyEnvironmentSetup( _Smoothness, ase_worldViewDir, float3(dot(tanToWorld0,tanNormal724), dot(tanToWorld1,tanNormal724), dot(tanToWorld2,tanNormal724)), float3(0,0,0));
				float3 indirectSpecular724 = UnityGI_IndirectSpecular( data, _Occlusion, float3(dot(tanToWorld0,tanNormal724), dot(tanToWorld1,tanNormal724), dot(tanToWorld2,tanNormal724)), g724 );
				
				
				finalColor = float4( indirectSpecular724 , 0.0 );
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```



```
struct Unity_GlossyEnvironmentData
{
    // - Deferred case have one cubemap
    // - Forward case can have two blended cubemap (unusual should be deprecated).

    // Surface properties use for cubemap integration
    half    roughness; // CAUTION: This is perceptualRoughness but because of compatibility this name can't be change :(
    half3   reflUVW;
};

Unity_GlossyEnvironmentData UnityGlossyEnvironmentSetup(half Smoothness, half3 worldViewDir, half3 Normal, half3 fresnel0)
{
    Unity_GlossyEnvironmentData g;

    g.roughness /* perceptualRoughness */   = SmoothnessToPerceptualRoughness(Smoothness);
    g.reflUVW   = reflect(-worldViewDir, Normal);

    return g;
}

float SmoothnessToPerceptualRoughness(float smoothness)
{
    return (1 - smoothness);
}

```

```glsl

inline half3 UnityGI_IndirectSpecular(UnityGIInput data, half occlusion, Unity_GlossyEnvironmentData glossIn)
{
    half3 specular;

    #ifdef UNITY_SPECCUBE_BOX_PROJECTION
        // we will tweak reflUVW in glossIn directly (as we pass it to Unity_GlossyEnvironment twice for probe0 and probe1), so keep original to pass into BoxProjectedCubemapDirection
        half3 originalReflUVW = glossIn.reflUVW;
        glossIn.reflUVW = BoxProjectedCubemapDirection (originalReflUVW, data.worldPos, data.probePosition[0], data.boxMin[0], data.boxMax[0]);
    #endif

    #ifdef _GLOSSYREFLECTIONS_OFF
        specular = unity_IndirectSpecColor.rgb;
    #else
        half3 env0 = Unity_GlossyEnvironment (UNITY_PASS_TEXCUBE(unity_SpecCube0), data.probeHDR[0], glossIn);
        #ifdef UNITY_SPECCUBE_BLENDING
            const float kBlendFactor = 0.99999;
            float blendLerp = data.boxMin[0].w;
            UNITY_BRANCH
            if (blendLerp < kBlendFactor)
            {
                #ifdef UNITY_SPECCUBE_BOX_PROJECTION
                    glossIn.reflUVW = BoxProjectedCubemapDirection (originalReflUVW, data.worldPos, data.probePosition[1], data.boxMin[1], data.boxMax[1]);
                #endif

                half3 env1 = Unity_GlossyEnvironment (UNITY_PASS_TEXCUBE_SAMPLER(unity_SpecCube1,unity_SpecCube0), data.probeHDR[1], glossIn);
                specular = lerp(env1, env0, blendLerp);
            }
            else
            {
                specular = env0;
            }
        #else
            specular = env0;
        #endif
    #endif

    return specular * occlusion;
}

// Deprecated old prototype but can't be move to Deprecated.cginc file due to order dependency
inline half3 UnityGI_IndirectSpecular(UnityGIInput data, half occlusion, half3 normalWorld, Unity_GlossyEnvironmentData glossIn)
{
    // normalWorld is not used
    return UnityGI_IndirectSpecular(data, occlusion, glossIn);
}
```



```glsl
// Old Unity_GlossyEnvironment signature. Kept only for backward compatibility and will be removed soon
half3 Unity_GlossyEnvironment (UNITY_ARGS_TEXCUBE(tex), half4 hdr, half3 worldNormal, half perceptualRoughness)
{
    Unity_GlossyEnvironmentData g;
    g.roughness /* perceptualRoughness */ = perceptualRoughness;
    g.reflUVW   = worldNormal;

    return Unity_GlossyEnvironment (UNITY_PASS_TEXCUBE(tex), hdr, g);
}

```



### Light Attenuation: 灯光阴影

![image-20200615211823589](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/LightAttenuationNode.jpg)

```glsl
Shader "TestNode"
{
	Properties
	{
		[HideInInspector] __dirty( "", Int ) = 1
	}

	SubShader
	{
		Tags{ "RenderType" = "Opaque"  "Queue" = "Geometry+0" }
		Cull Back
		CGPROGRAM
		#include "UnityPBSLighting.cginc"
		#pragma target 3.0
		#pragma surface surf StandardCustomLighting keepalpha addshadow fullforwardshadows 
		struct Input
		{
			half filler;
		};

		struct SurfaceOutputCustomLightingCustom
		{
			half3 Albedo;
			half3 Normal;
			half3 Emission;
			half Metallic;
			half Smoothness;
			half Occlusion;
			half Alpha;
			Input SurfInput;
			UnityGIInput GIData;
		};

		inline half4 LightingStandardCustomLighting( inout SurfaceOutputCustomLightingCustom s, half3 viewDir, UnityGI gi )
		{
			UnityGIInput data = s.GIData;
			Input i = s.SurfInput;
			half4 c = 0;
			#ifdef UNITY_PASS_FORWARDBASE
			float ase_lightAtten = data.atten;
			if( _LightColor0.a == 0)
			ase_lightAtten = 0;
			#else
			float3 ase_lightAttenRGB = gi.light.color / ( ( _LightColor0.rgb ) + 0.000001 );
			float ase_lightAtten = max( max( ase_lightAttenRGB.r, ase_lightAttenRGB.g ), ase_lightAttenRGB.b );
			#endif
			#if defined(HANDLE_SHADOWS_BLENDING_IN_GI)
			half bakedAtten = UnitySampleBakedOcclusion(data.lightmapUV.xy, data.worldPos);
			float zDist = dot(_WorldSpaceCameraPos - data.worldPos, UNITY_MATRIX_V[2].xyz);
			float fadeDist = UnityComputeShadowFadeDistance(data.worldPos, zDist);
			ase_lightAtten = UnityMixRealtimeAndBakedShadows(data.atten, bakedAtten, UnityComputeShadowFade(fadeDist));
			#endif
			float3 temp_cast_0 = (ase_lightAtten).xxx;
			c.rgb = temp_cast_0;
			c.a = 1;
			return c;
		}

		inline void LightingStandardCustomLighting_GI( inout SurfaceOutputCustomLightingCustom s, UnityGIInput data, inout UnityGI gi )
		{
			s.GIData = data;
		}

		void surf( Input i , inout SurfaceOutputCustomLightingCustom o )
		{
			o.SurfInput = i;
		}

		ENDCG
	}
	Fallback "Diffuse"
	CustomEditor "ASEMaterialInspector"
}
```



### Light Color: 灯光颜色

浅色节点输出浅色信息。RGB通道不包含光色，而是光色和光强度之间相乘的结果。



![image-20200615211823589](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/LightColorNode.jpg)

```glsl
#if defined(LIGHTMAP_ON) && ( UNITY_VERSION < 560 || ( defined(LIGHTMAP_SHADOW_MIXING) && !defined(SHADOWS_SHADOWMASK) && defined(SHADOWS_SCREEN) ) )//aselc
	float4 ase_lightColor = 0;
#else //aselc
	float4 ase_lightColor = _LightColor0;
#endif //aselc
```



### Object Space Light Dir: 对象空间灯光方向 float3 v3 = ObjSpaceLightDir(v4)

“对象空间光目录”节点在对象/局部空间坐标中输出归一化的光方向向量。
对于定向光源，输出结果是光源本身的方向。至于点光源，所得的输出矢量是在光源位置和游戏对象局部空间位置之间形成的矢量。

```glsl
float3 objectSpaceLightDir = ObjSpaceLightDir(v.vertex);
```



```glsl

// Computes world space light direction, from world space position
inline float3 UnityWorldSpaceLightDir( in float3 worldPos )
{
    #ifndef USING_LIGHT_MULTI_COMPILE
        return _WorldSpaceLightPos0.xyz - worldPos * _WorldSpaceLightPos0.w;
    #else
        #ifndef USING_DIRECTIONAL_LIGHT
        return _WorldSpaceLightPos0.xyz - worldPos;
        #else
        return _WorldSpaceLightPos0.xyz;
        #endif
    #endif
}

// Computes world space light direction, from object space position
// *Legacy* Please use UnityWorldSpaceLightDir instead
inline float3 WorldSpaceLightDir( in float4 localPos )
{
    float3 worldPos = mul(unity_ObjectToWorld, localPos).xyz;
    return UnityWorldSpaceLightDir(worldPos);
}

// Computes object space light direction
inline float3 ObjSpaceLightDir( in float4 v )
{
    float3 objSpaceLightPos = mul(unity_WorldToObject, _WorldSpaceLightPos0).xyz;
    #ifndef USING_LIGHT_MULTI_COMPILE
        return objSpaceLightPos.xyz - v.xyz * _WorldSpaceLightPos0.w;
    #else
        #ifndef USING_DIRECTIONAL_LIGHT
        return objSpaceLightPos.xyz - v.xyz;
        #else
        return objSpaceLightPos.xyz;
        #endif
    #endif
}
```



### World Space Light Dir: 世界空间灯光方向

World Space Light Dir节点在世界空间坐标中输出归一化的光方向向量。
对于定向光源，输出结果是光源本身的方向。至于点光源，所得的输出矢量是在光源位置和游戏对象世界空间位置之间形成的矢量。

```glsl
float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
float3 worldSpaceLightDir = UnityWorldSpaceLightDir(ase_worldPos);
```



### World Space Light Pos: 灯光信息（位置/方向， 类型） _WorldSpaceLightPos0

根据当前的灯光类型，“ World Space Light Pos”节点可以在世界空间坐标中输出归一化的灯光方向矢量或灯光位置。
对于定向灯，“方向[/位置”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/World_Space_Light_Pos#paramDirPos)输出将指定世界空间方向，“ [类型”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/World_Space_Light_Pos#paramType)将设置为**0**。对于其他光源类型，“方向/位置”输出将指定世界空间位置，“类型”将设置为**1**。

```glsl
_WorldSpaceLightPos0.xyzw
```



### Shade Vertex Lights: 阴影顶点灯

阴影顶点照明根据给定的对象空间位置和法线，根据四个顶点照明和周围环境计算照明。

**注意：**此节点仅在将其LightMode设置为Vertex的模板顶点/片段着色器上输出正确的结果。

![image-20200616150709511](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616150709511.png)

```glsl
float3 shadeVertexLight739 = ShadeVertexLightsFull(float4( pos , 0.0 ),normal,4,false);
```



```glsl

// Used in Vertex pass: Calculates diffuse lighting from lightCount lights. Specifying true to spotLight is more expensive
// to calculate but lights are treated as spot lights otherwise they are treated as point lights.
float3 ShadeVertexLightsFull (float4 vertex, float3 normal, int lightCount, bool spotLight)
{
    float3 viewpos = UnityObjectToViewPos (vertex);
    float3 viewN = normalize (mul ((float3x3)UNITY_MATRIX_IT_MV, normal));

    float3 lightColor = UNITY_LIGHTMODEL_AMBIENT.xyz;
    for (int i = 0; i < lightCount; i++) {
        float3 toLight = unity_LightPosition[i].xyz - viewpos.xyz * unity_LightPosition[i].w;
        float lengthSq = dot(toLight, toLight);

        // don't produce NaNs if some vertex position overlaps with the light
        lengthSq = max(lengthSq, 0.000001);

        toLight *= rsqrt(lengthSq);

        float atten = 1.0 / (1.0 + lengthSq * unity_LightAtten[i].z);
        if (spotLight)
        {
            float rho = max (0, dot(toLight, unity_SpotDirection[i].xyz));
            float spotAtt = (rho - unity_LightAtten[i].x) * unity_LightAtten[i].y;
            atten *= saturate(spotAtt);
        }

        float diff = max (0, dot (viewN, toLight));
        lightColor += unity_LightColor[i].rgb * (diff * atten);
    }
    return lightColor;
}

float3 ShadeVertexLights (float4 vertex, float3 normal)
{
    return ShadeVertexLightsFull (vertex, normal, 4, false);
}
```



### Standard Surface Light: 标准表面光

“标准表面光”节点提供了一种在自定义照明模式下计算“标准表面光”结果的方法。与“标准曲面”着色器一样，“ [工作流”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Standard_Surface_Light#paramWorkflow)选项可以选择“金属”或“镜面”工作[流](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Standard_Surface_Light#paramWorkflow)。它仅在进行某种自定义照明时很有用，因此，如果将“ *灯光模型”*设置为“ **自**定义照明”，则仅在可用节点菜单中可见该节点，如果该节点恰巧在其外部，则显示警告。



![image-20200616150709511](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/StandardSurfaceLightNode.jpg)

```glsl
Shader "TestNode"
{
	Properties
	{
		_Color0("Color 0", Color) = (0,0,0,0)
		_Smoothness("Smoothness", Range( 0 , 10)) = 0
		[HideInInspector] __dirty( "", Int ) = 1
	}

	SubShader
	{
		Tags{ "RenderType" = "Opaque"  "Queue" = "Geometry+0" }
		Cull Back
		CGINCLUDE
		#include "UnityPBSLighting.cginc"
		#include "Lighting.cginc"
		#pragma target 3.0
		struct Input
		{
			float3 worldNormal;
		};

		struct SurfaceOutputCustomLightingCustom
		{
			half3 Albedo;
			half3 Normal;
			half3 Emission;
			half Metallic;
			half Smoothness;
			half Occlusion;
			half Alpha;
			Input SurfInput;
			UnityGIInput GIData;
		};

		uniform float4 _Color0;
		uniform float _Smoothness;

		inline half4 LightingStandardCustomLighting( inout SurfaceOutputCustomLightingCustom s, half3 viewDir, UnityGI gi )
		{
			UnityGIInput data = s.GIData;
			Input i = s.SurfInput;
			half4 c = 0;
			SurfaceOutputStandard s743 = (SurfaceOutputStandard ) 0;
			s743.Albedo = _Color0.rgb;
			float3 ase_worldNormal = i.worldNormal;
			s743.Normal = ase_worldNormal;
			s743.Emission = float3( 0,0,0 );
			s743.Metallic = 0.0;
			s743.Smoothness = _Smoothness;
			s743.Occlusion = 1.0;

			data.light = gi.light;

			UnityGI gi743 = gi;
			#ifdef UNITY_PASS_FORWARDBASE
			Unity_GlossyEnvironmentData g743 = UnityGlossyEnvironmentSetup( s743.Smoothness, data.worldViewDir, s743.Normal, float3(0,0,0));
			gi743 = UnityGlobalIllumination( data, s743.Occlusion, s743.Normal, g743 );
			#endif

			float3 surfResult743 = LightingStandard ( s743, viewDir, gi743 ).rgb;
			surfResult743 += s743.Emission;

			#ifdef UNITY_PASS_FORWARDADD//743
			surfResult743 -= s743.Emission;
			#endif//743
			c.rgb = surfResult743;
			c.a = 1;
			return c;
		}

		inline void LightingStandardCustomLighting_GI( inout SurfaceOutputCustomLightingCustom s, UnityGIInput data, inout UnityGI gi )
		{
			s.GIData = data;
		}

		void surf( Input i , inout SurfaceOutputCustomLightingCustom o )
		{
			o.SurfInput = i;
		}

		ENDCG
		CGPROGRAM
		#pragma surface surf StandardCustomLighting keepalpha fullforwardshadows 

		ENDCG
		Pass
		{
			Name "ShadowCaster"
			Tags{ "LightMode" = "ShadowCaster" }
			ZWrite On
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			#pragma target 3.0
			#pragma multi_compile_shadowcaster
			#pragma multi_compile UNITY_PASS_SHADOWCASTER
			#pragma skip_variants FOG_LINEAR FOG_EXP FOG_EXP2
			#include "HLSLSupport.cginc"
			#if ( SHADER_API_D3D11 || SHADER_API_GLCORE || SHADER_API_GLES || SHADER_API_GLES3 || SHADER_API_METAL || SHADER_API_VULKAN )
				#define CAN_SKIP_VPOS
			#endif
			#include "UnityCG.cginc"
			#include "Lighting.cginc"
			#include "UnityPBSLighting.cginc"
			struct v2f
			{
				V2F_SHADOW_CASTER;
				float3 worldPos : TEXCOORD1;
				float3 worldNormal : TEXCOORD2;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
			};
			v2f vert( appdata_full v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID( v );
				UNITY_INITIALIZE_OUTPUT( v2f, o );
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO( o );
				UNITY_TRANSFER_INSTANCE_ID( v, o );
				float3 worldPos = mul( unity_ObjectToWorld, v.vertex ).xyz;
				half3 worldNormal = UnityObjectToWorldNormal( v.normal );
				o.worldNormal = worldNormal;
				o.worldPos = worldPos;
				TRANSFER_SHADOW_CASTER_NORMALOFFSET( o )
				return o;
			}
			half4 frag( v2f IN
			#if !defined( CAN_SKIP_VPOS )
			, UNITY_VPOS_TYPE vpos : VPOS
			#endif
			) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID( IN );
				Input surfIN;
				UNITY_INITIALIZE_OUTPUT( Input, surfIN );
				float3 worldPos = IN.worldPos;
				half3 worldViewDir = normalize( UnityWorldSpaceViewDir( worldPos ) );
				surfIN.worldNormal = IN.worldNormal;
				SurfaceOutputCustomLightingCustom o;
				UNITY_INITIALIZE_OUTPUT( SurfaceOutputCustomLightingCustom, o )
				surf( surfIN, o );
				#if defined( CAN_SKIP_VPOS )
				float2 vpos = IN.pos;
				#endif
				SHADOW_CASTER_FRAGMENT( IN )
			}
			ENDCG
		}
	}
	Fallback "Diffuse"
	CustomEditor "ASEMaterialInspector"
}
```



# Surface Data: 表面数据

### Bling-Phong Half Vector: 世界坐标系， 视角和灯光方向之和。normalize( worldViewDir + worldSpaceLightDir  )

```glsl
float3 ase_worldPos = i.ase_texcoord.xyz;
float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
ase_worldViewDir = normalize(ase_worldViewDir);
float3 worldSpaceLightDir = UnityWorldSpaceLightDir(ase_worldPos);
float3 normalizeResult4_g1 = normalize( ( ase_worldViewDir + worldSpaceLightDir ) );
```



![image-20200616155223531](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616155223531.png)



### Depth Fade: 深度淡入淡出

深度淡入淡出节点会输出线性渐变，该线性渐变表示对象的表面与其后的几何图形之间的距离。可以通过调整“ [距离”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Depth_Fade#paramDistance)参数来设置渐变范围或渐变距离。
更具体地说，此参数的作用是在对象的表面与其后的几何图形之间的距离在指定的值内时，创建一个[0 1]范围内的值。
**注意：**着色器的“ **渲染队列”**值必须设置为“ **透明”**或更高（pe **混合模式**设置为“ **透明”**或“ **半透明”）**），因此不会将对象写入深度缓冲区。这是必不可少的配置，因为节点在内部通过将[表面深度](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Surface_Depth)减去在深度缓冲区中获取的值来计算距离值。如果将对象写入深度缓冲区，则此操作将产生意外的结果。



![image-20200616155223531](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/DepthFadeNode.jpg)

```glsl
Shader "TestNode"
{
	Properties
	{
		_Distance("Distance", Range( 0 , 10)) = 0
		[HideInInspector] __dirty( "", Int ) = 1
	}

	SubShader
	{
		Tags{ "RenderType" = "Opaque"  "Queue" = "Geometry+0" "IsEmissive" = "true"  }
		Cull Back
		CGPROGRAM
		#include "UnityCG.cginc"
		#pragma target 3.0
		#pragma surface surf Unlit keepalpha addshadow fullforwardshadows 
		struct Input
		{
			float4 screenPos;
		};

		UNITY_DECLARE_DEPTH_TEXTURE( _CameraDepthTexture );
		uniform float4 _CameraDepthTexture_TexelSize;
		uniform float _Distance;

		inline half4 LightingUnlit( SurfaceOutput s, half3 lightDir, half atten )
		{
			return half4 ( 0, 0, 0, s.Alpha );
		}

		void surf( Input i , inout SurfaceOutput o )
		{
			float4 ase_screenPos = float4( i.screenPos.xyz , i.screenPos.w + 0.00000000001 );
			float4 ase_screenPosNorm = ase_screenPos / ase_screenPos.w;
			ase_screenPosNorm.z = ( UNITY_NEAR_CLIP_VALUE >= 0 ) ? ase_screenPosNorm.z : ase_screenPosNorm.z * 0.5 + 0.5;
			float screenDepth754 = LinearEyeDepth(SAMPLE_DEPTH_TEXTURE( _CameraDepthTexture, ase_screenPosNorm.xy ));
			float distanceDepth754 = abs( ( screenDepth754 - LinearEyeDepth( ase_screenPosNorm.z ) ) / ( _Distance ) );
			float3 temp_cast_0 = (distanceDepth754).xxx;
			o.Emission = temp_cast_0;
			o.Alpha = 1;
		}

		ENDCG
	}
	Fallback "Diffuse"
	CustomEditor "ASEMaterialInspector"
}
```



```glsl
// Z buffer to linear 0..1 depth
inline float Linear01Depth( float z )
{
    return 1.0 / (_ZBufferParams.x * z + _ZBufferParams.y);
}
// Z buffer to linear depth
inline float LinearEyeDepth( float z )
{
    return 1.0 / (_ZBufferParams.z * z + _ZBufferParams.w);
}
```



### Fresnel: 菲涅耳

**ReflectionCoefficient = [Bias](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fresnel#paramBias) + [Scale](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fresnel#paramScale) x ( 1 + [N](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fresnel#paramNormal).I )[Power](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fresnel#paramPower)**

菲涅耳节点输出菲涅耳效果的结果。它定义了光到达具有不同折射率的两种材料之间的界面时的行为，反射和折射的量。
该节点在与该反射部分特定的交易，并计算其由下面的表达式定义的菲涅耳反射系数**ReflectionCoefficient = [偏置](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fresnel#paramBias) + [量表](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fresnel#paramScale) ×（1 + [Ñ](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fresnel#paramNormal) .I）[电源](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Fresnel#paramPower)。
**方程的每个成员都可以修改，但**I**变量除外，该**I**变量定义了从摄像机到对象的入射向量，并由该节点在内部将其计算为反向的“世界视图方向”向量

。



![image-20200616155223531](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/FresnelNode.jpg)

![image-20200616163303625](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616163303625.png)

```glsl
Shader "TestNode"
{
	Properties
	{
		_NormalTexture("NormalTexture", 2D) = "bump" {}
		_Bias("Bias", Range( 0 , 2)) = 0
		_Scale("Scale", Range( 0 , 10)) = 0
		_Power("Power", Range( 0 , 10)) = 0
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_tangent : TANGENT;
				float3 ase_normal : NORMAL;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_texcoord1 : TEXCOORD1;
				float4 ase_texcoord2 : TEXCOORD2;
				float4 ase_texcoord3 : TEXCOORD3;
				float4 ase_texcoord4 : TEXCOORD4;
			};

			uniform sampler2D _NormalTexture;
			uniform float4 _NormalTexture_ST;
			uniform float _Bias;
			uniform float _Scale;
			uniform float _Power;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord.xyz = ase_worldPos;
				float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
				o.ase_texcoord2.xyz = ase_worldTangent;
				float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
				o.ase_texcoord3.xyz = ase_worldNormal;
				float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
				float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
				o.ase_texcoord4.xyz = ase_worldBitangent;
				
				o.ase_texcoord1.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.w = 0;
				o.ase_texcoord1.zw = 0;
				o.ase_texcoord2.w = 0;
				o.ase_texcoord3.w = 0;
				o.ase_texcoord4.w = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float3 ase_worldPos = i.ase_texcoord.xyz;
				float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
				ase_worldViewDir = normalize(ase_worldViewDir);
				float2 uv_NormalTexture = i.ase_texcoord1.xy * _NormalTexture_ST.xy + _NormalTexture_ST.zw;
				float3 ase_worldTangent = i.ase_texcoord2.xyz;
				float3 ase_worldNormal = i.ase_texcoord3.xyz;
				float3 ase_worldBitangent = i.ase_texcoord4.xyz;
				float3 tanToWorld0 = float3( ase_worldTangent.x, ase_worldBitangent.x, ase_worldNormal.x );
				float3 tanToWorld1 = float3( ase_worldTangent.y, ase_worldBitangent.y, ase_worldNormal.y );
				float3 tanToWorld2 = float3( ase_worldTangent.z, ase_worldBitangent.z, ase_worldNormal.z );
				float3 tanNormal770 = UnpackNormal( tex2D( _NormalTexture, uv_NormalTexture ) );
				float3 worldNormal770 = float3(dot(tanToWorld0,tanNormal770), dot(tanToWorld1,tanNormal770), dot(tanToWorld2,tanNormal770));
				float fresnelNdotV760 = dot( worldNormal770, ase_worldViewDir );
				float fresnelNode760 = ( _Bias + _Scale * pow( 1.0 - fresnelNdotV760, _Power ) );
				float4 temp_cast_0 = (fresnelNode760).xxxx;
				
				
				finalColor = temp_cast_0;
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```

```glsl
float fresnelNdotV760 = dot( worldNormal770, ase_worldViewDir );
float fresnelNode760 = ( _Bias + _Scale * pow( 1.0 - fresnelNdotV760, _Power ) );
```



### Half Lambert Term:  世界法线和世界灯光方向dot值 * 0.5 + 0.5。 dot(worldNormal, worldSpaceLightDir) * 0.5 + 0.5

![image-20200616164212692](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616164212692.png)

![image-20200616164230475](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616164230475.png)

```glsl
float3 worldSpaceLightDir = UnityWorldSpaceLightDir(ase_worldPos);
float dotResult5_g1 = dot( worldNormal770 , worldSpaceLightDir );
float4 temp_cast_0 = ((dotResult5_g1*0.5 + 0.5)).xxxx;
```



```glsl
Shader "TestNode"
{
	Properties
	{
		_NormalTexture("NormalTexture", 2D) = "bump" {}
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			#include "Lighting.cginc"
			#include "AutoLight.cginc"


			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_tangent : TANGENT;
				float3 ase_normal : NORMAL;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_texcoord1 : TEXCOORD1;
				float4 ase_texcoord2 : TEXCOORD2;
				float4 ase_texcoord3 : TEXCOORD3;
				float4 ase_texcoord4 : TEXCOORD4;
			};

			//This is a late directive
			
			uniform sampler2D _NormalTexture;
			uniform float4 _NormalTexture_ST;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
				o.ase_texcoord1.xyz = ase_worldTangent;
				float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
				o.ase_texcoord2.xyz = ase_worldNormal;
				float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
				float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
				o.ase_texcoord3.xyz = ase_worldBitangent;
				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord4.xyz = ase_worldPos;
				
				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				o.ase_texcoord1.w = 0;
				o.ase_texcoord2.w = 0;
				o.ase_texcoord3.w = 0;
				o.ase_texcoord4.w = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv_NormalTexture = i.ase_texcoord.xy * _NormalTexture_ST.xy + _NormalTexture_ST.zw;
				float3 ase_worldTangent = i.ase_texcoord1.xyz;
				float3 ase_worldNormal = i.ase_texcoord2.xyz;
				float3 ase_worldBitangent = i.ase_texcoord3.xyz;
				float3 tanToWorld0 = float3( ase_worldTangent.x, ase_worldBitangent.x, ase_worldNormal.x );
				float3 tanToWorld1 = float3( ase_worldTangent.y, ase_worldBitangent.y, ase_worldNormal.y );
				float3 tanToWorld2 = float3( ase_worldTangent.z, ase_worldBitangent.z, ase_worldNormal.z );
				float3 tanNormal770 = UnpackNormal( tex2D( _NormalTexture, uv_NormalTexture ) );
				float3 worldNormal770 = float3(dot(tanToWorld0,tanNormal770), dot(tanToWorld1,tanNormal770), dot(tanToWorld2,tanNormal770));
				float3 ase_worldPos = i.ase_texcoord4.xyz;
				float3 worldSpaceLightDir = UnityWorldSpaceLightDir(ase_worldPos);
				float dotResult5_g1 = dot( worldNormal770 , worldSpaceLightDir );
				float4 temp_cast_0 = ((dotResult5_g1*0.5 + 0.5)).xxxx;
				
				
				finalColor = temp_cast_0;
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```

### Surface Depth: 表面深度。 eyeDepth = -UnityObjectToViewPos( v.vertex.xyz ).z

```glsl
float eyeDepth = -UnityObjectToViewPos( v.vertex.xyz ).z
```

```glsl
float clampDepth = -UnityObjectToViewPos( v.vertex.xyz ).z * _ProjectionParams.w;
```



### Template Fragment Data: 模板片段数据

模板片段数据节点允许通过[数据](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Template_Fragment_Data#paramData)下拉选项访问在当前使用的模板着色器上声明的内插片段数据。节点的“输出”类型和数量将根据当前选择的数据类型而变化。
**注意：**此节点仅在连接到与分片功能相关的端口时才输出有效结果。

![image-20200616170138916](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616170138916.png)

### Template Local Var Data: 模板本地变量数据

模板本地变量数据节点允许通过“ [数据”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Template_Local_Var_Data#paramData)下拉选项访问当前使用的模板着色器上通过**/ \* ase_local_var \* /**标记注册的本地变量。节点的“输出”类型和数量将根据当前选择的数据类型而变化。 **注意：**此标记可以在顶点和片段数据以及所有可用遍上注册局部变量，这取决于用户是否知道该变量代表什么以及应将其使用到哪个输出节点。 节点标头颜色根据本地变量的注册位置而变化。红色表示顶点局部变量，黄色表示片段变量。 以下是有关如何在模板上注册局部变量的快速摘要：

![image-20200616170153736](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616170153736.png)

### World Bitangent: 世界法线和切线垂直面方向

```glsl

float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
```

### World Normal: 世界法线

向量的每像素计算，该向量代表世界空间中的表面法线。法线向量是垂直于表面的单位向量，指向表面所面对的位置。该数据对于照明计算非常有用且通用。该节点还允许在切线空间中接收法线矢量，以使法线四处移动。最常见的用例是在切线空间中使用法线贴图纹理来扰动对象的表面法线。

**注意：**不要与“ [顶点法线”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Vertex_Normal)节点混淆。

![image-20200616170153736](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/WorldNormalNode.gif)



![image-20200616170453008](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616170453008.png)

```glsl
Shader "TestNode"
{
	Properties
	{
		_TextureSample0("Texture Sample 0", 2D) = "bump" {}
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_tangent : TANGENT;
				float3 ase_normal : NORMAL;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_texcoord1 : TEXCOORD1;
				float4 ase_texcoord2 : TEXCOORD2;
				float4 ase_texcoord3 : TEXCOORD3;
			};

			uniform sampler2D _TextureSample0;
			uniform float4 _TextureSample0_ST;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
				o.ase_texcoord1.xyz = ase_worldTangent;
				float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
				o.ase_texcoord2.xyz = ase_worldNormal;
				float ase_vertexTangentSign = v.ase_tangent.w * unity_WorldTransformParams.w;
				float3 ase_worldBitangent = cross( ase_worldNormal, ase_worldTangent ) * ase_vertexTangentSign;
				o.ase_texcoord3.xyz = ase_worldBitangent;
				
				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				o.ase_texcoord1.w = 0;
				o.ase_texcoord2.w = 0;
				o.ase_texcoord3.w = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv_TextureSample0 = i.ase_texcoord.xy * _TextureSample0_ST.xy + _TextureSample0_ST.zw;
				float3 ase_worldTangent = i.ase_texcoord1.xyz;
				float3 ase_worldNormal = i.ase_texcoord2.xyz;
				float3 ase_worldBitangent = i.ase_texcoord3.xyz;
				float3 tanToWorld0 = float3( ase_worldTangent.x, ase_worldBitangent.x, ase_worldNormal.x );
				float3 tanToWorld1 = float3( ase_worldTangent.y, ase_worldBitangent.y, ase_worldNormal.y );
				float3 tanToWorld2 = float3( ase_worldTangent.z, ase_worldBitangent.z, ase_worldNormal.z );
				float3 tanNormal790 = UnpackNormal( tex2D( _TextureSample0, uv_TextureSample0 ) );
				float3 worldNormal790 = float3(dot(tanToWorld0,tanNormal790), dot(tanToWorld1,tanNormal790), dot(tanToWorld2,tanNormal790));
				
				
				finalColor = float4( worldNormal790 , 0.0 );
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```



### World Position:世界位置 float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;

```glsl
float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
```



### World Reflection: 世界反射

**R = V - 2 x (V . N) x N**

“世界反射”节点通过表面法线（**N**）在摄像机视点矢量（**V**）的世界坐标中输出反射结果（**R**），并通过以下表达式**R = V-2 x（V. N）x N进行计算**。

也可以通过将每个像素法线贴图连接到[法线](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/World_Reflection#paramNormal)输入端口来计算反射。

该节点通常与立方体贴图一起使用以创建环境贴图效果。



![image-20200616171049376](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/WorldReflectionVectorNode.jpg)

![image-20200616171049376](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616171049376.png)

```glsl
float3 ase_worldReflection = reflect(-ase_worldViewDir, ase_worldNormal);
```

```glsl
Shader "TestNode"
{
	Properties
	{
		
	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float3 ase_normal : NORMAL;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
				float4 ase_texcoord1 : TEXCOORD1;
			};

			
			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				float3 ase_worldNormal = UnityObjectToWorldNormal(v.ase_normal);
				o.ase_texcoord.xyz = ase_worldNormal;
				float3 ase_worldPos = mul(unity_ObjectToWorld, v.vertex).xyz;
				o.ase_texcoord1.xyz = ase_worldPos;
				
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.w = 0;
				o.ase_texcoord1.w = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float3 ase_worldNormal = i.ase_texcoord.xyz;
				float3 ase_worldPos = i.ase_texcoord1.xyz;
				float3 ase_worldViewDir = UnityWorldSpaceViewDir(ase_worldPos);
				ase_worldViewDir = normalize(ase_worldViewDir);
				float3 ase_worldReflection = reflect(-ase_worldViewDir, ase_worldNormal);
				
				
				finalColor = float4( ase_worldReflection , 0.0 );
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```

### World Tangent: 世界切线, float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);

代表世界空间中的曲面切线的向量的每像素计算。切向量是在给定点与表面相切的单位向量。

![image-20200616171326321](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616171326321.png)

```glsl
float3 ase_worldTangent = UnityObjectToWorldDir(v.ase_tangent);
```



# [Image Effects](http://wiki.amplify.pt/index.php?title=Category:Image_Effects) : 图片效果



### Blend Operations: 混合操作

![image-20200616171326321](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/BlendOpsNode.jpg)

##### Color Burn

![image-20200616180332670](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616180332670.png)

```glsl
Shader "TestNode"
{
	Properties
	{
		_Alpha("Alpha", Range( -2 , 2)) = 0
		_SourceTexture("SourceTexture", 2D) = "white" {}
		_DestinyTexture("DestinyTexture", 2D) = "white" {}
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
			};

			uniform sampler2D _SourceTexture;
			uniform float4 _SourceTexture_ST;
			uniform sampler2D _DestinyTexture;
			uniform float4 _DestinyTexture_ST;
			uniform float _Alpha;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv_SourceTexture = i.ase_texcoord.xy * _SourceTexture_ST.xy + _SourceTexture_ST.zw;
				float2 uv_DestinyTexture = i.ase_texcoord.xy * _DestinyTexture_ST.xy + _DestinyTexture_ST.zw;
				float4 blendOpSrc795 = tex2D( _SourceTexture, uv_SourceTexture );
				float4 blendOpDest795 = tex2D( _DestinyTexture, uv_DestinyTexture );
				float4 lerpBlendMode795 = lerp(blendOpDest795,( 1.0 - ( ( 1.0 - blendOpDest795) / max( blendOpSrc795, 0.00001) ) ),_Alpha);
				
				
				finalColor = ( saturate( lerpBlendMode795 ));
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```

```glsl
float4 lerpBlendMode = lerp(dest,  ( 1.0 - ( ( 1.0 - dest) / max( src, 0.00001) ) ),_Alpha);
```



##### Color Dodge

```glsl
float4 lerpBlendMode = lerp(dest,(dest / max( 1.0 - src, 0.00001 ) ),_Alpha);
```

![image-20200616180714061](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616180714061.png)



##### Darken

```glsl
float4 lerpBlendMode = lerp(dest,min( src , dest),_Alpha);
```

![image-20200616180934816](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616180934816.png)

##### Divide

```glsl
float4 lerpBlendMode = lerp(dest,(dest / max(src,0.00001) ),_Alpha);
```

![image-20200616181331076](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616181331076.png)

##### Difference

```glsl
float4 lerpBlendMode = lerp(dest,abs( src - dest ),_Alpha);
```

![image-20200616181455275](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616181455275.png)



##### Exclusion

```glsl
float4 lerpBlendMode = lerp(dest,( 0.5 - 2.0 * ( src - 0.5 ) * ( dest - 0.5 ) ),_Alpha);
```

![image-20200616181728412](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616181728412.png)

##### Soft Light

```glsl
float4 lerpBlendMode = lerp(dest,2.0f*dest*src + dest * dest*(1.0f - 2.0f*src),_Alpha);
```

![image-20200616181835457](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616181835457.png)

##### Hard Light

```glsl
float4 lerpBlendMode = lerp(dest, (( src > 0.5 ) ? ( 1.0 - ( 1.0 - 2.0 * ( src - 0.5 ) ) * ( 1.0 - dest ) ) : ( 2.0 * src * dest ) ),_Alpha);
```

![image-20200616182019697](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616182019697.png)

##### Hard Mix

```glsl
float4 lerpBlendMode = lerp(dest, round( 0.5 * ( src + dest ) ),_Alpha);
```

![image-20200616182234082](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616182234082.png)

##### Lighten

```glsl
float4 lerpBlendMode = lerp(dest,max( src, dest ),_Alpha);
```

![image-20200616182345468](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616182345468.png)

![image-20200616182615156](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616182615156.png)

##### Linear Burn

```glsl
float4 lerpBlendMode = lerp(dest,( src + dest - 1.0 ),_Alpha);
```

![image-20200616182905500](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616182905500.png)

##### Linear Dodge

```glsl
float4 lerpBlendMode = lerp(dest,( src + dest ),_Alpha);
```

![image-20200616183054488](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616183054488.png)

##### Linear Light

```glsl
float4 lerpBlendMode = lerp(dest,(( src > 0.5 )? ( dest + 2.0 * src - 1.0 ) : ( dest + 2.0 * ( src - 0.5 ) ) ),_Alpha);
```

![image-20200616183324920](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616183324920.png)

##### Multiply

```glsl
float4 lerpBlendMode = lerp(dest,( src * dest ),_Alpha);
```

![image-20200616183442693](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200616183442693.png)

##### Overlay

```glsl
float4 lerpBlendMode = lerp(dest,(( dest > 0.5 ) ? ( 1.0 - 2.0 * ( 1.0 - dest ) * ( 1.0 - src ) ) : ( 2.0 * dest * src ) ),_Alpha);
```



##### Pin Light

```glsl
float4 lerpBlendMode = lerp(dest,(( src > 0.5 ) ? max( dest, 2.0 * ( src - 0.5 ) ) : min( dest, 2.0 * src ) ),_Alpha);
```



##### Subtract

```glsl
float4 lerpBlendMode = lerp(dest,( dest - src ),_Alpha);
```



##### Screen

```glsl
float4 lerpBlendMode = lerp(dest,( 1.0 - ( 1.0 - src ) * ( 1.0 - dest ) ),_Alpha);
```



##### Vivid Light

```glsl
float4 lerpBlendMode = lerp(dest,(( src > 0.5 ) ? ( dest / max( ( 1.0 - src ) * 2.0 ,0.00001) ) : ( 1.0 - ( ( ( 1.0 - dest ) * 0.5 ) / max( src,0.00001) ) ) ),_Alpha);
```



### Desaturate: 去饱和度

![image-20200617100031188](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617100031188.png)

```glsl
float3 color = tex2D( _MainTexture, uv_MainTexture ).rgb;
float desaturateDot = dot( color, float3( 0.299, 0.587, 0.114 ));
float3 desaturateVar = lerp( color, desaturateDot.xxx, _Fraction );
```



### Grayscale: 去色, 灰色图

![image-20200617100821252](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617100821252.png)

```glsl
float grayscale = Luminance(tex2D( _MainTexture, uv_MainTexture ).rgb);
```

```glsl
float grayscale = dot(tex2D( _MainTexture, uv_MainTexture ).rgb, float3(0.299,0.587,0.114));
```

```glsl
float grayscale = (tex2D( _MainTexture, uv_MainTexture ).rgb.r + tex2D( _MainTexture, uv_MainTexture ).rgb.g + tex2D( _MainTexture, uv_MainTexture ).rgb.b) / 3;
```

```glsl
// Converts color to luminance (grayscale)
float Luminance( vec3 c )
{
    return dot( c, vec3(0.22, 0.707, 0.071) );
}

```

```glsl
#ifdef UNITY_COLORSPACE_GAMMA
    #define unity_ColorSpaceGrey fixed4(0.5, 0.5, 0.5, 0.5)
    #define unity_ColorSpaceDouble fixed4(2.0, 2.0, 2.0, 2.0)
    #define unity_ColorSpaceDielectricSpec half4(0.220916301, 0.220916301, 0.220916301, 1.0 - 0.220916301)
    #define unity_ColorSpaceLuminance half4(0.22, 0.707, 0.071, 0.0) // Legacy: alpha is set to 0.0 to specify gamma mode
#else // Linear values
    #define unity_ColorSpaceGrey fixed4(0.214041144, 0.214041144, 0.214041144, 0.5)
    #define unity_ColorSpaceDouble fixed4(4.59479380, 4.59479380, 4.59479380, 2.0)
    #define unity_ColorSpaceDielectricSpec half4(0.04, 0.04, 0.04, 1.0 - 0.04) // standard dielectric reflectivity coef at incident angle (= 4%)
    #define unity_ColorSpaceLuminance half4(0.0396819152, 0.458021790, 0.00609653955, 1.0) // Legacy: alpha is set to 1.0 to specify linear mode
#endif
        
// Converts color to luminance (grayscale)
inline half Luminance(half3 rgb)
{
    return dot(rgb, unity_ColorSpaceLuminance.rgb);
}

// Convert rgb to luminance
// with rgb in linear space with sRGB primaries and D65 white point
half LinearRgbToLuminance(half3 linearRgb)
{
    return dot(linearRgb, half3(0.2126729f,  0.7151522f, 0.0721750f));
}
```

### Luminance: 去色, 亮度图

```glsl
float luminance = Luminance(tex2D( _MainTexture, uv_MainTexture ).rgb);
```

![image-20200617104946228](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617104946228.png)

### Gamma To Linear: 伽马

![image-20200617100209061](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617100209061.png)

```glsl
float3 gammaToLinear = GammaToLinearSpace( tex2D( _MainTexture, uv_MainTexture ).rgb );
```

```glsl
inline float GammaToLinearSpaceExact (float value)
{
    if (value <= 0.04045F)
        return value / 12.92F;
    else if (value < 1.0F)
        return pow((value + 0.055F)/1.055F, 2.4F);
    else
        return pow(value, 2.2F);
}

inline half3 GammaToLinearSpace (half3 sRGB)
{
    // Approximate version from http://chilliant.blogspot.com.au/2012/08/srgb-approximations-for-hlsl.html?m=1
    return sRGB * (sRGB * (sRGB * 0.305306011h + 0.682171111h) + 0.012522878h);

    // Precise version, useful for debugging.
    //return half3(GammaToLinearSpaceExact(sRGB.r), GammaToLinearSpaceExact(sRGB.g), GammaToLinearSpaceExact(sRGB.b));
}

inline float LinearToGammaSpaceExact (float value)
{
    if (value <= 0.0F)
        return 0.0F;
    else if (value <= 0.0031308F)
        return 12.92F * value;
    else if (value < 1.0F)
        return 1.055F * pow(value, 0.4166667F) - 0.055F;
    else
        return pow(value, 0.45454545F);
}

inline half3 LinearToGammaSpace (half3 linRGB)
{
    linRGB = max(linRGB, half3(0.h, 0.h, 0.h));
    // An almost-perfect approximation from http://chilliant.blogspot.com.au/2012/08/srgb-approximations-for-hlsl.html?m=1
    return max(1.055h * pow(linRGB, 0.416666667h) - 0.055h, 0.h);

    // Exact version, useful for debugging.
    //return half3(LinearToGammaSpaceExact(linRGB.r), LinearToGammaSpaceExact(linRGB.g), LinearToGammaSpaceExact(linRGB.b));
}
```



### Linear To Gamma: 伽马

![image-20200617103829460](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617103829460.png)

```glsl
float3 linearToGamma = LinearToGammaSpace( color );
```



### RGB To HSV:  RGB 转 HSV

![image-20200617104131728](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617104131728.png)

```glsl
float3 hsvTorgb = RGBToHSV( tex2D( _MainTexture, uv_MainTexture ).rgb );
```

```glsl
float3 RGBToHSV(float3 c)
{
    float4 K = float4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    float4 p = lerp( float4( c.bg, K.wz ), float4( c.gb, K.xy ), step( c.b, c.g ) );
    float4 q = lerp( float4( p.xyw, c.r ), float4( c.r, p.yzx ), step( p.x, c.r ) );
    float d = q.x - min( q.w, q.y );
    float e = 1.0e-10;
    return float3( abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
```



### HVS To RGB

![image-20200617104623348](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617104623348.png)

```glsl
float3 hsvTorgb807 = RGBToHSV( tex2D( _MainTexture, uv_MainTexture ).rgb );
float3 hsvTorgb808 = HSVToRGB( float3(hsvTorgb807.x,hsvTorgb807.y,hsvTorgb807.z) );
```

```glsl
float3 HSVToRGB( float3 c )
{
    float4 K = float4( 1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0 );
    float3 p = abs( frac( c.xxx + K.xyz ) * 6.0 - K.www );
    return c.z * lerp( K.xxx, saturate( p - K.xxx ), c.y );
}
```



### Posterize: 色彩分离

```glsl
float divP=256.0/float((int)_Power);
float4 posterize = ( floor( tex2D( _MainTexture, uv_MainTexture ) * divP ) / divP );
```

![image-20200617105559773](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617105559773.png)

![image-20200617105632998](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617105632998.png)

![image-20200617110000591](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617110000591.png)

### Simple Contrast: 简单对比度

![image-20200617110339968](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617110339968.png)

```glsl
float4 CalculateContrast( float contrastValue, float4 colorTarget )
{
    float t = 0.5 * ( 1.0 - contrastValue );
    return mul( float4x4( contrastValue,0,0,t, 0,contrastValue,0,t, 0,0,contrastValue,t, 0,0,0,1 ), colorTarget );
}
```

```glsl
finalColor = CalculateContrast(_Value,tex2D( _MainTexture, uv_MainTexture ));
```





# Miscellaneous: 其他

### Billboard: 广告牌

Billboard节点将旋转顶点数据（position +法线）以将对象的轴与当前摄影机对齐。
该节点与所有其他节点略有不同，因为它将必要的代码注入到顶点主体中并直接在顶点位置和法线上写入。它输出的值为0，因此可以直接连接到顶点端口（仅当该端口是相对顶点偏移量时），或者可以在“ [添加”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Add)节点中使用它，以便可以放置进一步的顶点操作。
可以通过其“ [类型”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Billboard#paramType)将广告牌设置为“ **圆柱形”**，其中只有对象**X**和**Z**轴与摄影机对齐（在渲染树时有用），也可以设置为“ **球形”**，其中所有轴都对齐。
同样，通过[忽略旋转](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Billboard#paraIgnoreRotation)参数，可以完全忽略和覆盖对象的初始旋转，也可以将其用作广告牌最终计算的增量旋转。

**注意：**广告牌节点仅应连接到顶点端口。



![image-20200617110339968](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/BillboardNode.jpg)

```glsl
//// Calculate new billboard vertex position and normal;
//// 计算广告牌顶点

// 摄像机Up轴 Y
float3 upCamVec = float3( 0, 1, 0 ); 
// 摄像机前抽方向 Z
float3 forwardCamVec = -normalize ( UNITY_MATRIX_V._m20_m21_m22 );
// 摄像机右轴方向 X
float3 rightCamVec = normalize( UNITY_MATRIX_V._m00_m01_m02 );
// 摄像机空间矩阵
float4x4 rotationCamMatrix = float4x4( rightCamVec, 0, upCamVec, 0, forwardCamVec, 0, 0, 0, 0, 1 );
// 法线, 摄像机空间
v.ase_normal = normalize( mul( float4( v.ase_normal , 0 ), rotationCamMatrix )).xyz;


////This unfortunately must be made to take non-uniform scaling into account;
////Transform to world coords, apply rotation and transform back to local;
////不幸的是，这必须考虑到非均匀缩放；
////转换为世界坐标，应用旋转并转换回本地；

// 位置, 世界空间
v.vertex = mul( v.vertex , unity_ObjectToWorld );
// 位置, 摄像机空间
v.vertex = mul( v.vertex , rotationCamMatrix );
// 位置， 模型空间，原点相对摄像机
v.vertex = mul( v.vertex , unity_WorldToObject );
```



### Checkerboard: 棋盘格纹理

![image-20200617141635694](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617141635694.png)

```glsl

fixed4 finalColor;
float2 uv_frequency = (_Frequency).xx;
float2 uv_scale_center_frequency = ( uv_frequency * ( 0.5 + i.ase_texcoord.xy ) );
float2 uv_0_d_5 = (0.5).xx;
float2 uv_1_d_0 = (1.0).xx;
float4 appendResult16_g2 = (float4(ddx( uv_scale_center_frequency ) , ddy( uv_scale_center_frequency )));
float4 UVDerivatives17_g2 = appendResult16_g2;
float4 break28_g2 = UVDerivatives17_g2;
float2 appendResult19_g2 = (float2(break28_g2.x , break28_g2.z));
float2 appendResult20_g2 = (float2(break28_g2.x , break28_g2.z));
float dotResult24_g2 = dot( appendResult19_g2 , appendResult20_g2 );
float2 appendResult21_g2 = (float2(break28_g2.y , break28_g2.w));
float2 appendResult22_g2 = (float2(break28_g2.y , break28_g2.w));
float dotResult23_g2 = dot( appendResult21_g2 , appendResult22_g2 );
float2 appendResult25_g2 = (float2(dotResult24_g2 , dotResult23_g2));
float2 derivativesLength29_g2 = sqrt( appendResult25_g2 );
float2 temp_cast_3 = (-1.0).xx;
float2 temp_cast_4 = (1.0).xx;
float2 clampResult57_g2 = clamp( ( ( ( abs( ( frac( ( uv_scale_center_frequency + 0.25 ) ) - uv_0_d_5 ) ) * 4.0 ) - uv_1_d_0 ) * ( 0.35 / derivativesLength29_g2 ) ) , temp_cast_3 , temp_cast_4 );
float2 break71_g2 = clampResult57_g2;
float2 break55_g2 = derivativesLength29_g2;
float4 lerpResult73_g2 = lerp( _ColorA , _ColorB , saturate( ( 0.5 + ( 0.5 * break71_g2.x * break71_g2.y * sqrt( saturate( ( 1.1 - max( break55_g2.x , break55_g2.y ) ) ) ) ) ) ));


finalColor = lerpResult73_g2;
```





### Clip: 丢弃像素

Clip节点在输出之前有条件地丢弃像素。当[Alpha](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Clip#paramAlpha)值小于[阈值](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Clip#paramThreshold) **（Alpha-Threshold <0）**时，会发生这种情况。
**注意：**此节点只能连接到附加到“输出”节点的片段输入端口的图形。

![image-20200617141635694](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/ClipNode.gif)

```glsl
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv_MainTexture = i.ase_texcoord.xy * _MainTexture_ST.xy + _MainTexture_ST.zw;
				float2 uv_AlphaTexture = i.ase_texcoord.xy * _AlphaTexture_ST.xy + _AlphaTexture_ST.zw;
				float4 temp_cast_0 = (_Threshold).xxxx;
				clip( tex2D( _AlphaTexture, uv_AlphaTexture ) - temp_cast_0);
				
				
				finalColor = tex2D( _MainTexture, uv_MainTexture );
				return finalColor;
			}
```



### Color Space Double: 双色空间, unity_ColorSpaceDouble

“双色空间”节点输出一个值，该值可用于乘以纹理提取，因此它始终可以输出正确的结果，而与在线性空间或gamma空间中的工作无关。

```glsl
unity_ColorSpaceDouble
```

```glsl
#ifdef UNITY_COLORSPACE_GAMMA
	#define unity_ColorSpaceDouble fixed4(2.0, 2.0, 2.0, 2.0)
#else // Linear values
	#define unity_ColorSpaceDouble fixed4(4.59479380, 4.59479380, 4.59479380, 2.0)
#endif
```

![image-20200617152724661](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617152724661.png)



### Decode Depth Normal: 解码深度法线

解码深度法线节点从先前编码的Float4解码深度和法线值



![image-20200617152724661](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/DecodeDepthNormalNode.jpg)



```glsl

inline void DecodeDepthNormal( float4 enc, out float depth, out float3 normal )
{
    depth = DecodeFloatRG (enc.zw);
    normal = DecodeViewNormalStereo (enc);
}


// Encoding/decoding [0..1) floats into 8 bit/channel RGBA. Note that 1.0 will not be encoded properly.
inline float4 EncodeFloatRGBA( float v )
{
    float4 kEncodeMul = float4(1.0, 255.0, 65025.0, 16581375.0);
    float kEncodeBit = 1.0/255.0;
    float4 enc = kEncodeMul * v;
    enc = frac (enc);
    enc -= enc.yzww * kEncodeBit;
    return enc;
}
inline float DecodeFloatRGBA( float4 enc )
{
    float4 kDecodeDot = float4(1.0, 1/255.0, 1/65025.0, 1/16581375.0);
    return dot( enc, kDecodeDot );
}

// Encoding/decoding [0..1) floats into 8 bit/channel RG. Note that 1.0 will not be encoded properly.
inline float2 EncodeFloatRG( float v )
{
    float2 kEncodeMul = float2(1.0, 255.0);
    float kEncodeBit = 1.0/255.0;
    float2 enc = kEncodeMul * v;
    enc = frac (enc);
    enc.x -= enc.y * kEncodeBit;
    return enc;
}
inline float DecodeFloatRG( float2 enc )
{
    float2 kDecodeDot = float2(1.0, 1/255.0);
    return dot( enc, kDecodeDot );
}


// Encoding/decoding view space normals into 2D 0..1 vector
inline float2 EncodeViewNormalStereo( float3 n )
{
    float kScale = 1.7777;
    float2 enc;
    enc = n.xy / (n.z+1);
    enc /= kScale;
    enc = enc*0.5+0.5;
    return enc;
}
inline float3 DecodeViewNormalStereo( float4 enc4 )
{
    float kScale = 1.7777;
    float3 nn = enc4.xyz*float3(2*kScale,2*kScale,0) + float3(-kScale,-kScale,1);
    float g = 2.0 / dot(nn.xyz,nn.xyz);
    float3 n;
    n.xy = g*nn.xy;
    n.z = g-1;
    return n;
}

inline float4 EncodeDepthNormal( float depth, float3 normal )
{
    float4 enc;
    enc.xy = EncodeViewNormalStereo (normal);
    enc.zw = EncodeFloatRG (depth);
    return enc;
}
```



### Decode Lightmap: 解码光照贴图

“解码光照贴图”节点根据其“光照” 参数[*值*](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Decode_Lightmap#paramValue)设置的Unity光照贴图（RGBM或dLDR，取决于平台）对颜色进行解码。
**注意：** “ [*指令”*](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Decode_Lightmap#paramInstructions)输入端口仅在可脚本化渲染管线化（Universal / Lightweight / HD）上可见，并且表示Unity自己的DecodeLightmap辅助函数所需的附加指令值。
此值用于解码过程，并根据当前编码而变化。如果未与该端口建立连接，则ASE将为其设置Unity的默认值。

```glsl

// Convert rgb to luminance
// with rgb in linear space with sRGB primaries and D65 white point
half LinearRgbToLuminance(half3 linearRgb)
{
    return dot(linearRgb, half3(0.2126729f,  0.7151522f, 0.0721750f));
}

half4 UnityEncodeRGBM (half3 color, float maxRGBM)
{
    float kOneOverRGBMMaxRange = 1.0 / maxRGBM;
    const float kMinMultiplier = 2.0 * 1e-2;

    float3 rgb = color * kOneOverRGBMMaxRange;
    float alpha = max(max(rgb.r, rgb.g), max(rgb.b, kMinMultiplier));
    alpha = ceil(alpha * 255.0) / 255.0;

    // Division-by-zero warning from d3d9, so make compiler happy.
    alpha = max(alpha, kMinMultiplier);

    return half4(rgb / alpha, alpha);
}

// Decodes HDR textures
// handles dLDR, RGBM formats
inline half3 DecodeHDR (half4 data, half4 decodeInstructions)
{
    // Take into account texture alpha if decodeInstructions.w is true(the alpha value affects the RGB channels)
    half alpha = decodeInstructions.w * (data.a - 1.0) + 1.0;

    // If Linear mode is not supported we can skip exponent part
    #if defined(UNITY_COLORSPACE_GAMMA)
        return (decodeInstructions.x * alpha) * data.rgb;
    #else
    #   if defined(UNITY_USE_NATIVE_HDR)
            return decodeInstructions.x * data.rgb; // Multiplier for future HDRI relative to absolute conversion.
    #   else
            return (decodeInstructions.x * pow(alpha, decodeInstructions.y)) * data.rgb;
    #   endif
    #endif
}

// Decodes HDR textures
// handles dLDR, RGBM formats
// Called by DecodeLightmap when UNITY_NO_RGBM is not defined.
inline half3 DecodeLightmapRGBM (half4 data, half4 decodeInstructions)
{
    // If Linear mode is not supported we can skip exponent part
    #if defined(UNITY_COLORSPACE_GAMMA)
    # if defined(UNITY_FORCE_LINEAR_READ_FOR_RGBM)
        return (decodeInstructions.x * data.a) * sqrt(data.rgb);
    # else
        return (decodeInstructions.x * data.a) * data.rgb;
    # endif
    #else
        return (decodeInstructions.x * pow(data.a, decodeInstructions.y)) * data.rgb;
    #endif
}

// Decodes doubleLDR encoded lightmaps.
inline half3 DecodeLightmapDoubleLDR( fixed4 color, half4 decodeInstructions)
{
    // decodeInstructions.x contains 2.0 when gamma color space is used or pow(2.0, 2.2) = 4.59 when linear color space is used on mobile platforms
    return decodeInstructions.x * color.rgb;
}

inline half3 DecodeLightmap( fixed4 color, half4 decodeInstructions)
{
#if defined(UNITY_LIGHTMAP_DLDR_ENCODING)
    return DecodeLightmapDoubleLDR(color, decodeInstructions);
#elif defined(UNITY_LIGHTMAP_RGBM_ENCODING)
    return DecodeLightmapRGBM(color, decodeInstructions);
#else //defined(UNITY_LIGHTMAP_FULL_HDR)
    return color.rgb;
#endif
}

half4 unity_Lightmap_HDR;

inline half3 DecodeLightmap( fixed4 color )
{
    return DecodeLightmap( color, unity_Lightmap_HDR );
}

half4 unity_DynamicLightmap_HDR;

// Decodes Enlighten RGBM encoded lightmaps
// NOTE: Enlighten dynamic texture RGBM format is _different_ from standard Unity HDR textures
// (such as Baked Lightmaps, Reflection Probes and IBL images)
// Instead Enlighten provides RGBM texture in _Linear_ color space with _different_ exponent.
// WARNING: 3 pow operations, might be very expensive for mobiles!
inline half3 DecodeRealtimeLightmap( fixed4 color )
{
    //@TODO: Temporary until Geomerics gives us an API to convert lightmaps to RGBM in gamma space on the enlighten thread before we upload the textures.
#if defined(UNITY_FORCE_LINEAR_READ_FOR_RGBM)
    return pow ((unity_DynamicLightmap_HDR.x * color.a) * sqrt(color.rgb), unity_DynamicLightmap_HDR.y);
#else
    return pow ((unity_DynamicLightmap_HDR.x * color.a) * color.rgb, unity_DynamicLightmap_HDR.y);
#endif
}

inline half3 DecodeDirectionalLightmap (half3 color, fixed4 dirTex, half3 normalWorld)
{
    // In directional (non-specular) mode Enlighten bakes dominant light direction
    // in a way, that using it for half Lambert and then dividing by a "rebalancing coefficient"
    // gives a result close to plain diffuse response lightmaps, but normalmapped.

    // Note that dir is not unit length on purpose. Its length is "directionality", like
    // for the directional specular lightmaps.

    half halfLambert = dot(normalWorld, dirTex.xyz - 0.5) + 0.5;

    return color * halfLambert / max(1e-4h, dirTex.w);
}
```



### Decode Float RG: [**解码浮点RG**](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Decode_Float_RG)

```glsl
inline float DecodeFloatRG( float2 enc )
{
    float2 kDecodeDot = float2(1.0, 1/255.0);
    return dot( enc, kDecodeDot );
}
```



### Encode Float RG:  [**编码Float RG**](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Encode_Float_RG)

```glsl
// Encoding/decoding [0..1) floats into 8 bit/channel RG. Note that 1.0 will not be encoded properly.
// 编码/解码[0..1）浮动到8位/通道RG。请注意，1.0将不会正确编码。
inline float2 EncodeFloatRG( float v )
{
    float2 kEncodeMul = float2(1.0, 255.0);
    float kEncodeBit = 1.0/255.0;
    float2 enc = kEncodeMul * v;
    enc = frac (enc);
    enc.x -= enc.y * kEncodeBit;
    return enc;
}
```



### DecodeFloatRGBA: [**解码浮点RGBA**](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Decode_Float_RGBA)

```glsl
inline float DecodeFloatRGBA( float4 enc )
{
    float4 kDecodeDot = float4(1.0, 1/255.0, 1/65025.0, 1/16581375.0);
    return dot( enc, kDecodeDot );
}
```

### Encode Float RGBA:  [**编码浮点RGBA**](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Encode_Float_RGBA)

```glsl
// Encoding/decoding [0..1) floats into 8 bit/channel RGBA. Note that 1.0 will not be encoded properly.
inline float4 EncodeFloatRGBA( float v )
{
    float4 kEncodeMul = float4(1.0, 255.0, 65025.0, 16581375.0);
    float kEncodeBit = 1.0/255.0;
    float4 enc = kEncodeMul * v;
    enc = frac (enc);
    enc -= enc.yzww * kEncodeBit;
    return enc;
}
```



### Diffuse And Specular From Metallic: 漫反射和镜面反射

来自“金属”的“漫反射”和“镜面反射”节点从“金属”获得“漫反射”和“镜面反射”值。内部使用**DiffuseAndSpecularFromMetallic**从功能**UnityStandardUtils**。

![image-20200617161950494](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617161950494.png)



![image-20200617162029610](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617162029610.png)

![image-20200617162049402](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617162049402.png)

```glsl

#ifdef UNITY_COLORSPACE_GAMMA
	#define unity_ColorSpaceDielectricSpec half4(0.220916301, 0.220916301, 0.220916301, 1.0 - 0.220916301)
#else // Linear values
	#define unity_ColorSpaceDielectricSpec half4(0.04, 0.04, 0.04, 1.0 - 0.04) // standard dielectric reflectivity coef at incident angle (= 4%)
#endif
    
inline half3 DiffuseAndSpecularFromMetallic (half3 albedo, half metallic, out half3 specColor, out half oneMinusReflectivity)
{
    specColor = lerp (unity_ColorSpaceDielectricSpec.rgb, albedo, metallic);
    oneMinusReflectivity = OneMinusReflectivityFromMetallic(metallic);
    return albedo * oneMinusReflectivity;
}

inline half OneMinusReflectivityFromMetallic(half metallic)
{
    // We'll need oneMinusReflectivity, so
    //   1-reflectivity = 1-lerp(dielectricSpec, 1, metallic) = lerp(1-dielectricSpec, 0, metallic)
    // store (1-dielectricSpec) in unity_ColorSpaceDielectricSpec.a, then
    //   1-reflectivity = lerp(alpha, 0, metallic) = alpha + metallic*(0 - alpha) =
    //                  = alpha - metallic * alpha
    half oneMinusDielectricSpec = unity_ColorSpaceDielectricSpec.a;
    return oneMinusDielectricSpec - metallic * oneMinusDielectricSpec;
}
```



### Distance-based Tessellation: 基于距离的镶嵌

基于距离的镶嵌细分节点使用该着色器通过[镶嵌因子](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Distance-based_Tessellation#paramFactor)，相机[最小距离](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Distance-based_Tessellation#paramMinDist)和 [最大](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Distance-based_Tessellation#paramMaxDist)距离，根据对象到相机的距离设置镶嵌细分。此技术允许细分网格的三角形，并在运行时将其拆分为较小的三角形，以增加任何给定网格的表面细节。细化将在最小距离附近最高，而在最大距离附近最低。如果距离值大于“最大距离”，则不会进行细分。

**注意：**使用此节点等效于在主节点上激活“镶嵌”选项并将其“ **类型”**设置为“基于距离”。如果将Shader Model设置为较低的值，则它将自动设置为4.6，因为它是最低版本。
仅当对象网格的三角形大小相似时，才应使用基于距离的镶嵌。如果不是这样，可能会发生这样的情况：小三角形可能会镶嵌得太多，而大三角形会变得太小。
在这些情况下，应使用“ [边长细分”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Edge_Length_Tessellation)。



![image-20200617162049402](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/Distance-basedTessellationNode.gif)

![image-20200617162919830](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617162919830.png)



### Edge Length Tessellation: 边缘长度细分

“边缘长度细分”节点根据屏幕上对象三角形的边缘长度设置细分。此技术允许细分网格的三角形，并在运行时将其拆分为较小的三角形，以增加任何给定网格的表面细节。特别是在此节点上，通过“ [边长”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Edge_Length_Tessellation#paramEdgeLength)参数设置了所需的最终边长，该参数使较长的边具有较大的细分因子。

**注意：**使用此节点等效于在主节点上激活“细分”选项并将其“ **类型”**设置为“边长”。如果将Shader Model设置为较低的值，则它将自动设置为4.6，因为它是最低版本。



![image-20200617162919830](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/EdgeLengthTessellationNode.gif)



![image-20200617163340976](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617163340976.png)



### Edge Length Tessellation With Cull： 带剔除节点的边长细分

带边框的“边缘长度镶嵌细分”节点根据屏幕上对象三角形的边缘长度设置镶嵌细分。此技术允许细分网格的三角形，并在运行时将其拆分为较小的三角形，以增加任何给定网格的表面细节。特别是在此节点上，通过“ [边长”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Edge_Length_Tessellation_With_Cull#paramEdgeLength)参数设置了所需的最终边长，该参数使较长的边具有较大的细分因子。该节点类似于“ [边长细分”，](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Edge_Length_Tessellation)但也执行补丁截头锥体剔除，这有点贵，但可以节省摄像机视图之外的对象网格部分的GPU工作量。

**注意：**使用此节点等效于在主节点上激活“细分”选项并将其“ **类型”**设置为“边长剔除”。如果将Shader Model设置为较低的值，则它将自动设置为4.6，因为它是最低版本。



![image-20200617163340976](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/EdgeLengthTessellationWithCullNode.gif)



![image-20200617163718424](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617163718424.png)



### Register Local Var, Get Local Var： 注册本地变量和获取变得变量

![image-20200617164319351](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617164319351.png)



### Layered Blend: 分层混合

“分层混合”节点输出通过[权重](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Layered_Blend#paramWeights)给定的插值因子将其每个[Layer](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Layered_Blend#paramLayer)值分层在[基础](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Layered_Blend#paramBase)层之上的结果。在分配的基础层之上要混合的层数由权重输入上的连接数据类型给定的通道数确定。 如果将Vector4连接到Weights输入，则将使输入端口1到4可用。使用Weights.x作为插值器在Base Base和Layer 1之间完成[Lerp](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Lerp)。然后，将使用Weights.y等对第2层进行Lerp'ed先前操作的结果。

如果图层的类型不同且具有不同的通道数量，则对每个图层进行转换以匹配具有最多通道数量的图层。

**注意：**其他类型的混合也可以通过“ [加权混合”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Weighted_Blend)和“ [求和混合”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Summed_Blend)节点获得。

![image-20200617164319351](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/LayeredBlendNode.jpg)

```glsl
float2 weights = i.ase_texcoord.xy;
float4 base = tex2D(_BaseTexture, uv_BaseTexture);
float4 layer1 = tex2D(_Layer1Texture, uv_Layer1Texture);
float4 layer2 = tex2D(_Layer2Texture, uv_Layer2Texture);
float4 layeredBlend = ( lerp( lerp( base , layer1, weights.x ) , layer2, weights.y ) );
```



### Noise Generator: [**噪音产生器**](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Noise_Generator)

“噪声生成器”节点使用[Type](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Noise_Generator#paramType)指定的方法根据[UV](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Noise_Generator#paramUV)处指定的值在**[-1 1]**范围内创建**浮动**噪声值。 **注意：**输入数据必须在整个几何图形上变化，因为相等的值会产生相同的噪声。一种简单的方法是将“ [纹理坐标”](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Texture_Coordinates)节点连接到其输入。



![image-20200617164319351](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/NoiseGeneratorNode.jpg)

![image-20200617165632605](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617165632605.png)



![image-20200617165733360](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617165733360.png)

```glsl
Shader "TestNode"
{
	Properties
	{
		_Tiling("Tiling", Vector) = (0,0,0,0)

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
			};

			uniform float2 _Tiling;
			float3 mod2D289( float3 x ) { return x - floor( x * ( 1.0 / 289.0 ) ) * 289.0; }
			float2 mod2D289( float2 x ) { return x - floor( x * ( 1.0 / 289.0 ) ) * 289.0; }
			float3 permute( float3 x ) { return mod2D289( ( ( x * 34.0 ) + 1.0 ) * x ); }
			float snoise( float2 v )
			{
				const float4 C = float4( 0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439 );
				float2 i = floor( v + dot( v, C.yy ) );
				float2 x0 = v - i + dot( i, C.xx );
				float2 i1;
				i1 = ( x0.x > x0.y ) ? float2( 1.0, 0.0 ) : float2( 0.0, 1.0 );
				float4 x12 = x0.xyxy + C.xxzz;
				x12.xy -= i1;
				i = mod2D289( i );
				float3 p = permute( permute( i.y + float3( 0.0, i1.y, 1.0 ) ) + i.x + float3( 0.0, i1.x, 1.0 ) );
				float3 m = max( 0.5 - float3( dot( x0, x0 ), dot( x12.xy, x12.xy ), dot( x12.zw, x12.zw ) ), 0.0 );
				m = m * m;
				m = m * m;
				float3 x = 2.0 * frac( p * C.www ) - 1.0;
				float3 h = abs( x ) - 0.5;
				float3 ox = floor( x + 0.5 );
				float3 a0 = x - ox;
				m *= 1.79284291400159 - 0.85373472095314 * ( a0 * a0 + h * h );
				float3 g;
				g.x = a0.x * x0.x + h.x * x0.y;
				g.yz = a0.yz * x12.xz + h.yz * x12.yw;
				return 130.0 * dot( m, g );
			}
			

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv0876 = i.ase_texcoord.xy * _Tiling + float2( 0,0 );
				float simplePerlin2D874 = snoise( uv0876 );
				simplePerlin2D874 = simplePerlin2D874*0.5 + 0.5;
				float4 temp_cast_0 = (simplePerlin2D874).xxxx;
				
				
				finalColor = temp_cast_0;
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```



### Noise Sine Wave:

![image-20200617182125466](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617182125466.png)

```glsl
float2 minmax = _MinMax;
float2 _in = i.ase_texcoord.xy;
float2 _in_sin = sin( _in );
float2 _in_sin__1 = sin( ( _in + 1.0 ) );
float lerpResult20_g7 = lerp( minmax.x , minmax.y , frac( ( sin( ( ( _in_sin - _in_sin__1 ) * 91.2228 ) ) * 43758.55 ) ).x);
```



### Summed Blend: 求和混合

*Weights.x\*Layer1 + Weights.y\*Layer2 +Weights.z\*Layer3 +Weights.w\*Layer4*



![image-20200617165733360](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/SummedBlendNode.jpg)



### Switch by Face: 切换面, VFACE

“按面切换”输出根据渲染的表面是面向相机（[正面](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Switch_by_Face#paramFront)）还是背离相机（[背面](http://wiki.amplify.pt/index.php?title=Unity_Products:Amplify_Shader_Editor/Switch_by_Face#paramBack)）来中继其输入之一。



![image-20200617172740800](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617172740800.png)



### Vertex To Fragment: 传送变量， 顶点 到 片段

![image-20200617172959805](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617172959805.png)

![image-20200617173110846](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617173110846.png)



### Voronoi:  生成泰森多边形纹理， 水面波光粼粼

![image-20200617173531530](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617173531530.png)

![image-20200617173633334](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617173633334.png)

```glsl
Shader "TestNode"
{
	Properties
	{
		_Angle("Angle", Range( 0 , 7)) = 0
		_Scale("Scale", Range( 0 , 5)) = 0

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
			};

			uniform float _Scale;
			uniform float _Angle;
					float2 voronoihash887( float2 p )
					{
						
						p = float2( dot( p, float2( 127.1, 311.7 ) ), dot( p, float2( 269.5, 183.3 ) ) );
						return frac( sin( p ) *43758.5453);
					}
			
					float voronoi887( float2 v, float time, inout float2 id, float smoothness )
					{
						float2 n = floor( v );
						float2 f = frac( v );
						float F1 = 8.0;
						float F2 = 8.0; float2 mr = 0; float2 mg = 0;
						for ( int j = -1; j <= 1; j++ )
						{
							for ( int i = -1; i <= 1; i++ )
						 	{
						 		float2 g = float2( i, j );
						 		float2 o = voronoihash887( n + g );
								o = ( sin( time + o * 6.2831 ) * 0.5 + 0.5 ); float2 r = g - f + o;
								float d = 0.5 * dot( r, r );
						 		if( d<F1 ) {
						 			F2 = F1;
						 			F1 = d; mg = g; mr = r; id = o;
						 		} else if( d<F2 ) {
						 			F2 = d;
						 		}
						 	}
						}
						return F1;
					}
			

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float time887 = _Angle;
				float2 coords887 = i.ase_texcoord.xy * _Scale;
				float2 id887 = 0;
				float voroi887 = voronoi887( coords887, time887,id887, 0 );
				float4 temp_cast_0 = (id887).xxxx;
				
				
				finalColor = temp_cast_0;
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```



### Triangle Wave： 三角波

```glsl
float r = ( 
						(
							abs
							(
								( 
									( v - floor(  v + 0.5  ) ) 
									* 
									2 
								) 
							) 
							* 
							2 
						) 
						- 
						1.0 
					)
```

![image-20200617181255694](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617181255694.png)

### Square Wave: 方波

```glsl
				(
						(
							abs 
							( 
								( v - floor( ( v + 0.5 ) ) ) 
								* 
								2 
							) 
							* 
							2 
						)
						- 1.0 
					)
```

![image-20200617181401541](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617181401541.png)

### Sawtooh Wave: 

```glsl
( ( v - floor( ( v + 0.5 ) ) ) * 2 )
```

![image-20200617181741158](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617181741158.png)

### Rounded Rectangle: 圆角矩形

![image-20200617182716247](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617182716247.png)



```glsl
float width = _Width;
float height = _Height;
float2 wh = (float2(width , height));
float radius = max( min( min( abs( ( _Radius * 2 ) ) , abs( width ) ) , abs( height ) ) , 1E-05 );
float2 zero2 = (0.0).xx;
float len = ( length( max( ( ( abs( (i.ase_texcoord.xy*2.0 + -1.0) ) - wh ) + radius ) , zero2 ) ) / radius );
float4 temp_cast_1 = (saturate( ( ( 1.0 - len ) / fwidth( len ) ) )).xxxx;
```

### Rectangle: 矩形



![image-20200617190759596](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617190759596.png)

```glsl
float2 size = (float2(_Width , _Height));
float2 uv = ( abs( (i.ase_texcoord.xy*2.0 + -1.0) ) - size );
float2 _break = ( 1.0 - ( uv / fwidth( uv ) ) );
float4 temp_cast_0 = (saturate( min( _break.x , _break.y ) )).xxxx;
```



### Polygon: 多边形

![image-20200617183655324](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617183655324.png)

```glsl
Shader "TestNode"
{
	Properties
	{
		_MainTexture("MainTexture", 2D) = "white" {}
		_Sides("Sides", Int) = 0
		_Width("Width", Range( 0 , 7)) = 0
		_Height("Height", Range( 0 , 7)) = 0
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend SrcAlpha OneMinusSrcAlpha
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
			};

			uniform sampler2D _MainTexture;
			uniform float4 _MainTexture_ST;
			uniform float _Width;
			uniform int _Sides;
			uniform float _Height;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv_MainTexture = i.ase_texcoord.xy * _MainTexture_ST.xy + _MainTexture_ST.zw;
				float sides = (float)_Sides;
				float cosSides = cos( ( UNITY_PI / sides ) );
				float2 size = (float2(( _Width * cosSides ) , ( _Height * cosSides )));
				float2 _break = ( (i.ase_texcoord.xy*2.0 + -1.0) / size );
				float polarCoords = atan2( _break.x , -_break.y );
				float onceSideAngle = ( 6.28318548202515 / sides );
				float2 _break2 = (float2(_break.x , -_break.y));
				float2 break2 = _break2;
				float val = ( cos( ( ( floor( ( 0.5 + ( polarCoords / onceSideAngle ) ) ) * onceSideAngle ) - polarCoords ) ) * length( break2 ) );
				
				
				finalColor = ( tex2D( _MainTexture, uv_MainTexture ) * saturate( ( ( 1.0 - val ) / fwidth( val ) ) ) );
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```

### Ellipse: 椭圆

![image-20200617184801379](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617184801379.png)

```glsl
Shader "TestNode"
{
	Properties
	{
		_MainTexture("MainTexture", 2D) = "white" {}
		_Width("Width", Range( 0 , 7)) = 0.9053376
		_Height("Height", Range( 0 , 7)) = 0.6138254
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend SrcAlpha OneMinusSrcAlpha
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			

			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
			};

			uniform sampler2D _MainTexture;
			uniform float4 _MainTexture_ST;
			uniform float _Width;
			uniform float _Height;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv_MainTexture = i.ase_texcoord.xy * _MainTexture_ST.xy + _MainTexture_ST.zw;
				float2 size = (float2(_Width , _Height));
				float len = length( ( (i.ase_texcoord.xy*2.0 + -1.0) / size ) );
				
				
				finalColor = ( tex2D( _MainTexture, uv_MainTexture ) * saturate( ( ( 1.0 - len ) / fwidth( len ) ) ) );
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```

### Flow: 浮动，可以做云彩飘动

![image-20200617185743489](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617185743489.png)

![image-20200617185802897](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617185802897.png)

![image-20200617185859596](https://gitee.com/ihaiu/AmplifyShaderEditor/raw/master/Node/image-20200617185859596.png)

```glsl
Shader "TestNode"
{
	Properties
	{
		_Size("Size", Range( 0 , 10)) = 1
		_FlowStrength("FlowStrength", Range( 0 , 7)) = 1.00764
		_Texture0("Texture 0", 2D) = "white" {}
		_TextureSample4("Texture Sample 4", 2D) = "white" {}
		[HideInInspector] _texcoord( "", 2D ) = "white" {}

	}
	
	SubShader
	{
		
		
		Tags { "RenderType"="Opaque" }
	LOD 100

		CGINCLUDE
		#pragma target 3.0
		ENDCG
		Blend Off
		Cull Back
		ColorMask RGBA
		ZWrite On
		ZTest LEqual
		Offset 0 , 0
		
		
		
		Pass
		{
			Name "Unlit"
			Tags { "LightMode"="ForwardBase" }
			CGPROGRAM

			

			#ifndef UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX
			//only defining to not throw compilation error over Unity 5.5
			#define UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(input)
			#endif
			#pragma vertex vert
			#pragma fragment frag
			#pragma multi_compile_instancing
			#include "UnityCG.cginc"
			#include "UnityShaderVariables.cginc"


			struct appdata
			{
				float4 vertex : POSITION;
				float4 color : COLOR;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				float4 ase_texcoord : TEXCOORD0;
			};
			
			struct v2f
			{
				float4 vertex : SV_POSITION;
				UNITY_VERTEX_INPUT_INSTANCE_ID
				UNITY_VERTEX_OUTPUT_STEREO
				float4 ase_texcoord : TEXCOORD0;
			};

			uniform sampler2D _Texture0;
			uniform float _Size;
			uniform sampler2D _TextureSample4;
			uniform float4 _TextureSample4_ST;
			uniform float _FlowStrength;

			
			v2f vert ( appdata v )
			{
				v2f o;
				UNITY_SETUP_INSTANCE_ID(v);
				UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o);
				UNITY_TRANSFER_INSTANCE_ID(v, o);

				o.ase_texcoord.xy = v.ase_texcoord.xy;
				
				//setting value to unused interpolator channels and avoid initialization warnings
				o.ase_texcoord.zw = 0;
				float3 vertexValue = float3(0, 0, 0);
				#if ASE_ABSOLUTE_VERTEX_POS
				vertexValue = v.vertex.xyz;
				#endif
				vertexValue = vertexValue;
				#if ASE_ABSOLUTE_VERTEX_POS
				v.vertex.xyz = vertexValue;
				#else
				v.vertex.xyz += vertexValue;
				#endif
				o.vertex = UnityObjectToClipPos(v.vertex);
				return o;
			}
			
			fixed4 frag (v2f i ) : SV_Target
			{
				UNITY_SETUP_INSTANCE_ID(i);
				UNITY_SETUP_STEREO_EYE_INDEX_POST_VERTEX(i);
				fixed4 finalColor;
				float2 uv_size = (( i.ase_texcoord.xy / _Size )).xy;
				float2 uv_TextureSample4 = i.ase_texcoord.xy * _TextureSample4_ST.xy + _TextureSample4_ST.zw;
				float2 textureRG = ( tex2D( _TextureSample4, uv_TextureSample4 ).rg + 0.5 );
				float FlowStrength = _FlowStrength;
				float mulTime = _Time.y * float2( 1,0.5 ).x;
				float mulTime_frac = frac( mulTime );
				float2 uv1 = ( uv_size + ( textureRG * FlowStrength * mulTime_frac ) );
				float2 uv2 = ( uv_size + ( textureRG * FlowStrength * frac( ( mulTime + 0.5 ) ) ) );
				float3 lerpResult9_g13 = lerp( UnpackNormal( tex2D( _Texture0, uv1 ) ) , UnpackNormal( tex2D( _Texture0, uv2 ) ) , ( abs( ( mulTime_frac - 0.5 ) ) / 0.5 ));
				
				
				finalColor = float4( lerpResult9_g13 , 0.0 );
				return finalColor;
			}
			ENDCG
		}
	}
	CustomEditor "ASEMaterialInspector"
	
	
}
```





# 总结

**shader 主要由以先组成**

- 对象数据：顶点、贴图、UV、摄像机、屏幕、灯光、雾、帧缓冲、传入的材质球参数。
- 基本数据类型:  float、half、int、float2--4、half2--4, int2-4,  floatNxN, halfNxN, intNxN
- 全局变量/常量：时间、PI
- 函数：数学函数、三角函数、矩阵函数、向量函数、贴图采样函数
- 逻辑判断：比较少用



