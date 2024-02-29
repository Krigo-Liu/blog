---
title: Semi-Lagrangian Discountinuous Galerkin (SLDG) method — 1D
icon: file
order: 3
author: Krigo
category:
    - MATH
tag: 
    - Numerical Method
    - Computational Mathematics
footer: Thank's my mentor Cai's help
copyrigh: 无版权
---

## Equation description

::: tip Firstly, we cnsider the one-dimensional transport equation:
$$
\begin{equation}  
\left\{  
    \begin{array}{lr}
    u_t + (a(x,t)\cdot u)_x = 0, x\in [x_a,x_b] \\
    u(x,0) = u_0(x) \\
    \text{Suitable BC} 
    \end{array}  
\right.  
\end{equation} 
$$
:::

- $a(x,t)$ is continuous, and divides in $x_a = x_{\frac{1}{2}}<x_{\frac{3}{2}}< ... < x_{M+\frac{1}{2}} = x_b$
- For $j$-iterm, denoted $I_j = [x_{j-\frac{1}{2}},x_{j+\frac{1}{2}}]$
- Center point: $x_j = \frac{x_{j-\frac{1}{2}}+x_{j+\frac{1}{2}}}{2}$
- Iterm length: $\Delta x_j = x_{j+\frac{1}{2}}-x_{j-\frac{1}{2}}$

::: tip Approximation space (近似空间)


:::

## Legendre Polynomial

### 2D Legendre Polynomial







