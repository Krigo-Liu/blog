---
title: (SLDG) method — 1D && Fortran 代码实现思虑与我的理解
icon: lock #file
order: 3
author: Krigo
category:
    - MATH
tag: 
    - MATH
    - Numerical Method
    - Computational Mathematics
    - Coding
footer: Thank's my mentor Cai's help and my classmates
copyrigh: 无版权
---

## Algorithm Sturcture

### One-dimensional transport equation

First we need an [one-dimensional transport equation](./1d_SLDG.md#one-dimensional-transport-equation) 

In the real application, I used two different transport equations. But in this note, I will only take one simplest as my example.

The main idea for this note is to show you how to wirte this algorithm as a stupid pupil with Fortran code.

::: note 1D linear equation
$$
\begin{equation}
\left\{
    \begin{array}{lr}
        u_t + u_x = 0, x\in [0.2\pi] \\
        u(x,0) = \sin(x) \\
    \end{array}
\right.
\end{equation}
$$

:::
First, we need to name this equatoin with
```Fortran
iexample = 1;
```
where `integer :: iexample` need to be setted before. You can take it in a `set.f90` file if you want.

We can also know that 
$$
\begin{equation}
    u_t + u_x = 0
\end{equation}
$$
is a partial differential equation (PDE). We can find that $a(x) = 1$.
```Fortran
! A new function
real function ax(x)
! Disables all implicit typing defaults
implicit none 
! real 表示实数
! intent(in) :It indicates that an argument will receives 
!             some input from outside of the function 
!             and its value will not, actually cannot, 
!             be changed within the function.
real, intent(in) :: x 

if(iexample == 1)then
    ax = 1.
endif

end function ax
```

And the initial value problem is
$$
\begin{equation}
    u(x,0) = \sin(x)
\end{equation}
$$
```Fortran
real function fun_init(x)
implicit none
real intent(in) :: x

if(iexample == 1)then
    fun_init = sin(x)
endif

end function fun_init
```
We also can know the exact equation for this PDE is
$$
\begin{equation}
    u(x,t) = \sin(x-t)
\end{equation}
$$
```Fortran
real function exact(x,t)
implicit none
real, intent(in):: x,t

if(iexample == 1)then
    exact = sin(x-t)
endif

end function exact
```

### A Series of Parameters.




