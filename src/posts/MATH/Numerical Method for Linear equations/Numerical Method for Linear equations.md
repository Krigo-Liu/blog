---
title: Numerical Method for Linear equations
icon: file
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

## Numerical Method for Linear equations

::: important
Consider the time-dependent Cauchy probelm of scalar equation,
$$
\begin{equation}
    \left\{
        \begin{array}{lr}
            u_t + au_x = 0, \qquad -\infty < x < \infty, t \geq 0
            u(x,0) = u_0(x)
        \end{array}
    \right.
\end{equation}
$$
Define:
- $h = \Delta x$
- $k = \Delta t$
- $x_j = jh, j = \cdots,-1,0,1,\cdots$
- $t_n = nk, n = 0,1,2,\cdots$
- $x_{j+\frac{1}{2}} = x_j + h/2 = (j+\frac{1}{2})h$
- $\lambda = \frac{k}{h}$, this is **cfl** in algorithm
:::

### Up-Wind schemes:

$$
\begin{equation}
    u_{j}^{n+1} = u_{j}^{n} - \frac{\lambda}{2}a(u_{j+1}^{n} - u_{j-1}^{n}) + \frac{\lambda}{2}|a|(u_{j+1}^{n} - 2u_{j}^{n} + u_{j-1}^{n})
\end{equation}
$$

### Lax-Friedrichs

$$
\begin{equation}
     u_{j}^{n+1} = u_{j}^{n} - \frac{\lambda}{2}a(u_{j+1}^{n} - u_{j-1}^{n}) + \frac{1}{2}(u_{j+1}^{n} - 2u_{j}^{n} + u_{j-1}^{n})
\end{equation}
$$

### Lax-Wendroff

The general form:
$$
\begin{equation}
    u_{j}^{n+1} = \frac{\lambda + \lambda^2}{2}u_{j-1}^n + (1-\lambda^2)u_j^{n} + \frac{\lambda^2-\lambda}{2}u_{j+1}^n
\end{equation}
$$
After the expansion:
$$
\begin{equation}
    u_{j}^{n+1} = u_{j}^{n} - \frac{\lambda}{2}a(u_{j+1}^{n} - u_{j-1}^{n}) + \frac{1}{2}(u_{j+1}^{n} - 2u_{j}^{n} + u_{j-1}^{n}) 
\end{equation}
$$

### Beam-Warming

The general form:
$$
\begin{equation}
    u_{j}^{n+1} = frac{\lambda^2 - \lambda}{2}u_{j-1}^n + \lambda(2-\lambda)u_j^{n} + \frac{(1-\lambda)(2-\lambda)}{2}u_{j+1}^n
\end{equation}
$$

## The implementation of these schemes

### Core Algorithm

```Fortran

```