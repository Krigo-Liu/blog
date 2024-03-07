---
title: Semi-Lagrangian Discountinuous Galerkin (SLDG) method — 1D
icon: lock #file
order: 3
author: Krigo
category:
    - MATH
tag: 
    - MATH
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
    \end{array}  
\right.  
\end{equation} 
$$
:::

- $a(x,t)$ is continuous, and divides in $x_a = x_{\frac{1}{2}}<x_{\frac{3}{2}}< ... < x_{M+\frac{1}{2}} = x_b$
- For $j$-iterm, denoted $I_j = [x_{j-\frac{1}{2}},x_{j+\frac{1}{2}}]$
- Center point: $x_j = \frac{x_{j-\frac{1}{2}}+x_{j+\frac{1}{2}}}{2}$
- Iterm length: $\Delta x_j = x_{j+\frac{1}{2}}-x_{j-\frac{1}{2}}$
- The domain is partitioned by non-overlapping intervals, $\Omega=\cup_{j}I_{j}$.
- The mesh size is denoted $h = \max_{j}\Delta x_{j}$.
- n-th time level with $\Delta t^{n} = t^{n+1}-t^{n}$

::: tip Approximation space (近似空间)

$$
    V_{h}^{k} = \{v_h : v_h|_{I_j}\in P^k(I_j)\} \Psi_{i}(x)
$$

- $k \geq 0$
- $P^k(I_j)$ denotes the set of **Orthnogonal Legendre polynomials** of degree at the most $k$ over $I_j$ interval.
- If $k = 0$, the scheme formulated below problated below reduces to a first order SL finite volumme scheme.
:::

Introduce the test function $\psi(x,t)$, satisfying the boundary conditions $\psi(x,t^{n+1}) = \Psi(x \in P^{k}(I_j)$, yields the following expression:

$$
\begin{equation}
    \psi_t + a(x,t)\psi_x = 0,t\in [t^n,t^{n+1}]
\end{equation}
$$

The preceding equations (2), presented in adjective form, maintain a constant solution along a characteristic trajectory. Subsequently, as demonstrated in, it can be established that:

$$
\begin{equation}
    \frac{d}{dt}\int_{\widetilde{I_{j}}(t)} u(x,t)\psi(x,t)dx = 0
\end{equation}
$$

where ${\widetilde{I_{j}}(t)}$ is a dynamic intervel bounded by characteristcs emanating from cell boundaries of $I_j$ at $t=t^{n+1}$.

::: tip Prove for (3) One-dimentional Reynolds transport theorem
According to one-dimentional Reynolds transport theorem,
$$
\begin{equation}
    \frac{d}{dx}\int_{a(t)}^{b(t)}f(x,t)dx = \int_{a(t)}^{b(t)}\frac{\partial f(x,t)}{\partial t}dx + (\frac{\partial b(t)}{\partial t}f(b(t),t) - \frac{\partial a(t)}{\partial t}f(a(t),t))
\end{equation}
$$
Then, along the characteristic line $\gamma:\frac{dx}{dt} = a(x,t)$, we can have:
$$
\begin{equation}
    \frac{d}{dt}\int_{\widetilde{I_j}(t)}u(x,t)\psi(x,t)dx = \bigg[\frac{dx}{dt}u(x,t)\psi(x,t) \bigg]\Bigg|_{x = x_{j-\frac{1}{2}}}^{x = x_{j+\frac{1}{2}}} + \int_{I_j(t)}u_t(x,t)\psi(x,t)dx + \int_{I_j(t)}u(x,t)\psi_t(x,t)dx
\end{equation}
$$

$$
\begin{equation}
    \frac{d}{dt}\int_{\widetilde{I_j}(t)}u(x,t)\psi(x,t)dx = au\psi|_{x=x_{j+\frac{1}{2}}} - au\psi|_{x = x_{j - \frac{1}{2}}} - \int_{I_j(t)}\frac{\partial (a \cdot u)}{\partial{x}}\psi(x,t)dx - \int_{I_j(t)} u\cdot a \psi_x
\end{equation}
$$

$$
\begin{equation}
    \frac{d}{dt}\int_{\widetilde{I_j}(t)}u(x,t)\psi(x,t)dx = 0
\end{equation}
$$

where $u_t(x,t) = \frac{d u(x,t)}{dt}$ and $\frac{dx}{dt} = a(a,t)$, then 

$$
\frac{\partial{x}}{\partial{u}} \frac{du}{dt} = a(a,t) \xrightarrow{} \frac{du}{dt} = a(x,t)\frac{\partial{u}}{\partial{t}}
$$

$$
\int_{I_j(t)}u_t(x,t)\psi(x,t)dx = \int_{I_j(t)}\frac{\partial (a \cdot u)}{\partial{x}}\psi(x,t)dx
$$
:::

Given $u^n \in V_h^k$, we seek $u^{n+1}\in V_h^k$, such that for $\forall \Psi \in P^k (I_j),j=1,...,k$。 An SL time discretization of equation(3) leads
to

$$
\begin{equation}
    \int_{I_j}u^{n+1}(x,t)\Psi dx = \int_{I^{*}_{j}}u(x,t^n)\psi(x.t^n)dx
\end{equation}
$$

where $I^{*}_{j} = [x^{*}_{j-\frac{1}{2}},x^{*}_{j+\frac{1}{2}}]$ with $x^{*}_{j\pm \frac{1}{2}}$ being the foots of trajectory emanating from $(x^{*}_{j\pm \frac{1}{2}},t^{n+1})$ at the time $t^n$. Then, update the numerical solution $u^{n+1}$.

## Implementation
### Step 1
Initially, we select $k+1$ interpolation points $x_{j,q}$, where $q = 0,...,k$(此时0到k就正好是k+1个), empolying methods like Gauss-Lobatto points within the interval $I_j$. 
::: tip Gauss-Lobatto

:::
Subsequencetly, we determine the footpoints $x^{*}_{j,q}$ through numerical solutions to the trajectory equation.

$$
\begin{equation}
    \frac{dx(t)}{dt} = a(x(t),t), \text{ with } x(t^{n+1}) = x_{j,q}
\end{equation}
$$

Achieved using the Runge-Kutta method as follow,

$$
\begin{equation}
\left\{
    \begin{array}{lr}
        x^{*}_{j,q}=x_{j,q}-\frac{\Delta t}{6}(k_1+2k_2+2k_3+k_4) \\
        k_1 = a(x_{j,q},t^{n+1}),\\
        k_2 = a(x_{j,q}-\frac{\Delta t}{2}k_1,t^{n+\frac{1}{2}}), \text{ where } t^{n+\frac{1}{2}} = t^{n}+\frac{1}{2}\Delta t\\
        k_3 = a(x_{j,q}-\frac{\Delta t}{2}k_2, t^{n+\frac{1}{2}}),\text{ where } t^{n+\frac{1}{2}} = t^{n}+\frac{1}{2}\Delta t\\
        k_4 = a(x_{j,q}-\Delta t k_3, t^{n})
    \end{array}
\right.
\end{equation}
$$

ahieves fifth-order accuracy $O(h^5)$. Since for RK4, the local truncation error is on the order of $O(h^5)$, where $h$ is the step size.

### Step 2

Recalling that the test function $\psi(x,t)$ resolves the final-value problem and consequently remains constant along the characteristics i.e., $\psi(x^{*}_{j,q}) = \Psi(x_{j,q})$. Our next step is to ascertain the unique polynomial $\psi^{*}(x)$ of degree $k$. This polynomial is chosen such that it interpolates $\psi(x,t^n)$ with the pairs $(x^{*}_{j,q},\Psi(x_{j,q}))$ for $q=0, \ldots, k$.

we assume that $\psi^{*}(x)=a_0 + a_1 x + a_2 x^2 + \ldots + a_k x^{k}$, and $\psi^{*}(x)$ satisfies,

$$
\begin{equation}
\left\{
    \begin{array}{lr}
        a_0 + a_1 x^{*}_{j,0} + a_2 x^{*\quad2}_{j,0} + \ldots + a_k x^{*\quad k}_{j,0} = \Psi(x_{j,0})\\
        a_0 + a_1 x^{*}_{j,1} + a_2 x^{*\quad2}_{j,1} + \ldots + a_k x^{*\quad k}_{j,1} = \Psi(x_{j,1})\\
        \vdots \\
        a_0 + a_1 x^{*}_{j,k} + a_2 x^{*\quad2}_{j,k} + \ldots + a_k x^{*\quad k}_{j,k} = \Psi(x_{j,k})\\
    \end{array}
\right.
\end{equation}
$$
Or we need to use the orthogonal polynomial 1d form or Legendre polynomials
::: tip Legendre polynomials

:::
Then we can let,
$$
A = \begin{bmatrix}
    1 & x^{*}_{j,0} & x^{*\quad2}_{j,0} &\cdots& x^{*\quad k}_{j,0} \\
    1 & x^{*}_{j,1} & x^{*\quad2}_{j,1} &\cdots& x^{*\quad k}_{j,1} \\
    \vdots & \vdots & \vdots & \ddots & \vdots\\
    1 & x^{*}_{j,k} & x^{*\quad2}_{j,k} &\cdots& x^{*\quad k}_{j,k} \\
\end{bmatrix}
$$

$$
X = \begin{bmatrix}
    a_0 \\ a_1 \\ \vdots \\ a_k
\end{bmatrix},
B = \begin{bmatrix}
    \Psi(x_{j,0})\\\Psi(x_{j,1})\\\vdots\\\Psi(x_{j,k})\\
\end{bmatrix}
$$

Then system (11) can be expressed in matrix from $AX=B$. Then we need to find the coefficients $a_0,a_1,\cdots a_k$ of the $\psi^{*}(x)$.

### Step 3

Detect interval/sub-intervals within $I^{*}_{j} = \cup_{l}I^{*}_{j,l}$, which are the intersections bewteen $I^{*}_{j}$ and the grid elements(l is the index for sub-interval). Here $l$ serves as the index for the sub-interval. For each interval, there may exist two sub-intervals: $I^{*}_{j,1}=[x^{*}_{j-\frac{1}{2}},x_{j-\frac{1}{2}}]$ and $I_{j,2}=[x_{j-\frac{1}{2}},x^{*}_{j+\frac{1}{2}}]$
### Step 4
Using the discontinuous Galerkin method to obtain $u^{n+1}_{h}\in P^{k}(I_j)$





