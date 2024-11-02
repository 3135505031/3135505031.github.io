# 东方红·太阳升

> 用段炙热的希冀     奏响旧时的乐曲
>
> 穿过苍穹天际      又转入下个周期 
>
> 半世纪的问候      都在此刻传递
>
> 去向我诉说     向我歌唱
>
> 无声世界中的你

今天看到了 *“神十八神十九乘组太空会师”* 的新闻，偶然想到 $54$ 年前发射的**东方红**卫星，直到今天她仍然在苍穹之上漂浮着并一直唱着属于我们的歌！

介于本人(Rhine)并非专业出身，本篇博客可能在乐理方面存在一些专业上的问题，也希望大家看到后可以[联系我]([云剪贴板 - 洛谷 | 计算机科学教育新生态](https://www.luogu.com.cn/paste/7b4wqzlf))订正这些错误。

## 利用C++发声功能奏响东方红
>“东方红，太阳升”

那么...我们如何利用C++发声功能奏响东方红捏？

首先，我们需要一份《东方红》歌曲的乐谱
![](https://cdn.luogu.com.cn/upload/image_hosting/8iqmpaab.png)
但是...计算机并不能识别音符，对吧~？

所以我们需要想办法让其由五线谱变为更加形式化的表现方式！于是我们引入**十二平均律**
### 十二平均律
>将一个八度平均分成十二等份，每等分称为半音。音高八度音指的是频率乘上二倍。八度音的频率分为十二等分，即是分为十二项的等比数列，也就是每个音的频率为前一个音的2的12次方根倍。


简单来说：**十二平均律体系将一个“纯八度”分成 $12$ 份，每份称之为 $1$ 个半音，两份为 $1$ 个全音，以此定出所有中间的单音。**

这种规定方式是极为巧妙的，就像计算机中的二进制系统规定了各种运算方式一样。

例如某个单音的频率为 $f$，那么它与频率为 $2f$ 的另一个单音之间就构成了一个“纯八度”音程。按照十二平均律系统，我们可以以 $f$ 为基准音，在区间 $\left [ f ,2f\right ] $ 内得到 $13$ 个不同的单音，它们的频率分别为：


$$
2^{\frac{0}{12} }f ,2^{\frac{1}{12} }f   ,2^{\frac{2}{12} }f   ,2^{\frac{3}{12} }f   \dots ,2^{\frac{12}{12} }f
$$



其中第一个音就是 $f$ 自身。如果将 $f$ 设定为 $440Hz$ ，从 
$f=440Hz$ 到 $2f=880Hz$这 $13$ 个单音的频率就可以用此公式算出了呐呐呐。

**看回到我们的乐谱中**，不难发现，其是一首 $F$ 大调的乐曲，那么我们便可以借助十二平均律这一工具计算出每个单音的频率了呢！

如下：


||c|d|e|f|g|a|b|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|E调部分|138.541|155.517|174.575|184.962|207.627|233.07|261.63|
|F调部分|261.63|293.66|329.63|349.23|392|440|493.88|
|G调部分|523.31|587.437|659.421|698.657|784.27|880.375|988.256|

以此，我们就可以利用发出固定频率的声音基于相对音高模拟而奏出《东方红》乐曲了！

### C++发声函数Beep

有了以上的理论基础，我们就可以借助C++中的Beep函数通过控制主板扬声器的发声频率来发出我们想要的声音了捏！

以下，给出beef函数的底层代码：

```cpp
bool Beep(
    DWORD dwFreq;  //发声频率
    DWORD dwDuration; //发声时间（以毫秒计）
);  
```
哎，那我们都知道一拍的话，就相当于400毫秒。

本乐曲恰是四分音符为一拍，每小节有二拍。

那么我们就可以这么来书写代码
```cpp
Beep(523,400); //发出一拍Do
```
为了能够更为优美的书写代码，我们还可以借助

```cpp
#define Do 527
```
这样的书写形式进行一把预处理，尽显我们C++的可读性和可维护性。

### 那么...**东方红·太阳升！**
借助上面所说的理论基础，我们就可以手搓出这首乐曲了！

借助主函数递归操作，我们还可以让她单曲循环捏~(￣▽￣)~


```cpp
//Write by Rhine_River
#include <iostream>
#include <windows.h>
#define low_1 139 
#define low_2 156
#define low_3 175  
#define low_4 185
#define low_5 208
#define low_6 233
#define low_7 262

#define normal_1 262 
#define normal_2 294
#define normal_3 330  
#define normal_4 349
#define normal_5 392
#define normal_6 440
#define normal_7 494

#define high_1 523
#define high_2 587
#define high_3 659
#define high_4 698
#define high_5 784
#define high_6 880
#define high_7 988

int main()
{
	int Beat = 400;
	int Double_Beat = 800;
	int Half_Beat = 200;
Sleep(1000);
 
Beep(normal_5 , Beat);
Beep(normal_5 , Half_Beat);
Beep(normal_5 , Half_Beat);
Beep(normal_2 , Double_Beat);
//东方红
Beep(normal_1 , Beat);
Beep(normal_1 , Half_Beat);
Beep(low_6 , Half_Beat);
Beep(normal_2 , Double_Beat);
//太阳升 
Beep(normal_5 , Beat);
Beep(normal_5 , Beat);
//中国 
Beep(normal_6, Half_Beat);
Beep(high_1 , Half_Beat);
//出 
Beep(normal_6 , Half_Beat);
Beep(normal_5 , Half_Beat);
//了个 
Beep(normal_1 , Beat);
Beep(normal_1 , Half_Beat);
Beep(low_6 , Half_Beat);
Beep(normal_2 , Double_Beat);
//毛 泽 东 
Beep(normal_5 , Beat);
Beep(normal_2 , Beat);
//他为 
Beep(normal_1 , Beat);
Beep(low_7 , Half_Beat);
Beep(low_6 , Half_Beat);
//人民 
Beep(low_5 , Beat);
Beep(normal_5 , Beat);
//谋幸 
Beep(normal_2 , Beat);
Beep(normal_3 , Half_Beat);
Beep(normal_2 , Half_Beat);
//福 ，呼尔 
Beep(normal_1 , Beat);
Beep(normal_1 , Half_Beat);
Beep(low_6 , Half_Beat);
//嗨 呀 
Beep(normal_2, Half_Beat);
Beep(normal_3, Half_Beat);
Beep(normal_2 , Half_Beat);
Beep(normal_1 , Half_Beat);
//他是 人民 
Beep(normal_2 , Half_Beat);
Beep(normal_1 , Half_Beat);
Beep(low_7 , Half_Beat);
Beep(low_6 , Half_Beat);
//大救 星 
Beep(low_5 , Double_Beat+Beat);
Sleep(Beat);

Sleep(1000);
 main();
}
```

嘿嘿~


---



## 后记
写下这篇Blog的时候，已经是10月份的最后一天了...
距离NOIp的日子越来越近了，由衷的感觉时间越来越不够用了。

但是看到纪录片中已是白发苍苍的卫星工作者们自豪地喊出自己当初 **“祖国需要我们去哪里，我们就去哪里！”**， **“我们也要搞人造卫星！”** 的口号与誓言时，我便意识到，人的一生中能做的事其实并不算多...

所以...
>这蜉蝣一般的人生，要如何度过呢？

东方红卫星用自己仅有的28天生命奏响《东方红》。我希望我们都能够在奋斗中找到属于我们自己的答案，我也由衷地希望HYOI的学弟们的水平都能够越来越高！**“早日赶上和超过 HE甚至是CNOI 的先进水平！”**~~早日拿到NOI au呐呐呐！！！~~
![](https://cdn.luogu.com.cn/upload/image_hosting/8qmhuqn7.png)



---
## 给道题目喵~
“东方红一号”卫星当时用来进行轨道计算的109丙计算机每秒可以进行10万次浮点运算,那么...如果我们穿越回了 $1970$ 年，并且极为幸运的进入到了 $NOI 1970 $ HE 省队，现在，你面对的测评机正是109丙计算机...

### 题目背景
我们现在成功发射了一颗卫星，但是...卫星与地面的联络系统似乎出了些问题
### 题目描述
根据技术部门所说，如果我们想要保证卫星与地面能够持续联络，那么我们则需要不断提高卫星地面站的海拔高度。

简单来说，我们需要保证卫星地面站的高度呈严格升序。

已知，每个卫星地面站可以为我们提供一小时的通讯联络时间，为了能够给技术部门的同志们争取更多的时间，我们需要让卫星地面站与卫星能够保持的联络时间尽可能的长。

现在，需要你利用计算机编写一段程序，使之能够计算出我们最多能给技术部门的同志们争取多长时间。

### 输入格式
第一行包含整数 $N$ 。

第二行包含 $N$ 个整数，表示各个卫星地面站的海拔高度。
### 输出格式
输出一个整数，表示最长联络时间。

### 数据范围
$1\le N\le1000$

**注意**：$NOI 1970 $ 所使用的测评机109丙计算机**每秒仅可以进行10万次运算。**
### 输入样例

```latex
7
3 1 2 1 8 5 6
```
### 输出格式

```latex
4
```


### 题解
[题解](https://www.luogu.com.cn/paste/gfbvp6j9)

### 加油喵
>甩下踌躇吧    因为朝阳是你也是我！

By Rhine