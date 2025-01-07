# ARC

这里是atcoder regular contest的板刷。

## ARC111

### A.Simple Math 2

给定两个数 $n$ 和 $m$。

输出 $\left\lfloor\frac{10^n}{m}\right\rfloor \bmod m$ 的值。

$n \le 10^{18},m \le 10^4$。

------

$a \bmod b = a - \left \lfloor \frac{a}{b} \right \rfloor \times b$

$\left\lfloor\frac{10^n}{m}\right\rfloor \bmod m = \left\lfloor\frac{10^n \bmod \ m^2}{m}\right\rfloor \bmod m$

快速幂即可。

## ARC112

### A.B = C

给出两个整数 $L$ 和 $R$ 。输出由在 $L$ 和 $R$ 之间（含 $L$ 和 $R$ ）的三个整数 $a,b,c$ 组成的满足 $a-b=c$ 的三元组 $(a,b,c)$ 的个数。

$ 0\le\ L\ \le\ R\ \le\ 10^6 $

------

$a = b + c\\ 2L \le a \le R$

那么当 $R < 2L$ 时答案为 $0$ 。

否则答案为 $\frac{(R-2L+1)(R-2L+2)}{2}$ （高斯求和）。

### B.-- - B

初始有一个数 $n$, 然后他通过支付一定的钱来使这个数变为另外一个数，可以使用无数次的以下两个操作，

1.支付一元让这个数乘 $-1$，

2.支付两元使这个数减 $1$，

问在最多 $m$ 元的情况下可以得到多少个数？

$ -10^{18}\le\ n\ \le\ 10^{18} $

$ 1\le\ m\ \le\ 10^{18} $

------

设能得到的数为 $x$ ，分类讨论：

- 先乘一次，其余钱数再减。你能得到的数为 $ n $ 与区间 $[\ -n- \lfloor\frac{m-1}{2}\rfloor , -n \ ]$  中的所有整数。

- 全减。你能得到的数为区间 $[\ n- \lfloor\frac{m}{2}\rfloor ,n \ ]$ 中的所有整数。

- 先乘一次，中间减掉，最后再乘一次。你能得到的数为区间 $[\ n , n +  \lfloor\frac{m-2}{2}\rfloor \ ]$ 中的所有整数与区间 $[\ - n -  \lfloor\frac{m-2}{2}\rfloor , - n \ ]$ 中的所有整数。
- 前面先减，最后再乘一次。你能得到的数为区间  $[\ n -  \lfloor\frac{m-1}{2}\rfloor , n \ ]$ 中的所有整数与区间 $[\ - n , - n +  \lfloor\frac{m-1}{2}\rfloor \ ]$ 中的所有整数。

将所有能得到的数并起来，最后再计数。

### C.DFS Game

给定一棵有根树，根是 $1$。Monkey 和 Rick Astley 博弈，他们在 $1$ 号节点放了一个棋子，并在所有节点上放了一根香蕉。

Monkey 先手，Rick Astley 后手，每次进行如下操作：
+ 如果棋子所在点有香蕉，操作者把香蕉吃掉。
+ 否则，如果棋子相邻的点有香蕉，那么选择一个有香蕉的节点，并把棋子移动过去。
+ 否则（相邻点都没有香蕉），就把棋子移到 father 处。如果当前在根，游戏结束。

Monkey 与 Rick Astley 都会以最优方式移动，尽可能地吃到更多的香蕉。

由于 Monkey 很喜欢吃香蕉，所以 Monkey 试图使用外挂，提前知道自己可以吃到多少根香蕉。作为 IOIAKer，请您帮 Monkey 编写这个外挂。

$ 2\le\ n\ \le\ 10^5 $
$ 1\le\ p_v\ \lt\ v $

------

我们会发现在这个过程中一棵子树不走完不会出来。

设 $f_x$ 表示先手得到 $x$ 的香蕉，即后手该移动，有决策权，然后在子树 $x$ 中先手能得到的最多香蕉。$si_x$ 为子树 $x$ 的大小。

我们手玩会发现有3中情况：

- $y$ 为 $x$ 的儿子， 

> 未完待续！
