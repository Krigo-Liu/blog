---
title: 一阶迎风格式
icon: lock #file
order: 3
author: Krigo
category:
    - MATH
tag: 
    - MATH
    - Numerical Method
    - Computational Mathematics
footer: Thank's my mentor Cai's help and my classmates
copyrigh: 无版权
date: 2024-03-18
---

## 1D linear advection equation
::: important 一维Euler方程
$$
\begin{equation}
    \frac{\partial u}{\partial t} + a \frac{\partial u}{\partial x} = 0, x_{L} \leq x \leq x_{R}, t\geq 0
\end{equation}
$$
where the independent variables are $t$(time) and $x$(space)
- $x$ is restricted to the finite interval $[p,q]$ which is called the computational domain.
- $a$ is a constant and the denpend variable
- $u$ = $u(x,t)$
:::
- Divides in $x_a = x_{\frac{1}{2}}<x_{\frac{3}{2}}< ... < x_{M+\frac{1}{2}} = x_b$
- Iterm length: $\Delta x_j = x_{j+\frac{1}{2}}-x_{j-\frac{1}{2}}$
- n-th time level with $\Delta t^{n} = t^{n+1}-t^{n}$


## IVP
::: important
$$
u(0,x) = sin(x), p \leq x \leq q
$$
:::



## 迎风格式

网格划分


$$
u^{n+1}_{j} = u^{n}_{j} - \frac{\Delta t}{\Delta x}(u^{n}_{j} - u^{n}_{j-1})
$$

