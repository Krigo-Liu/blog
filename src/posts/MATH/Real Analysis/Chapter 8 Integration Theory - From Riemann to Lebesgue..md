---
title: Chapter 8 Riemann Integral
icon: file
order: 3
author: Krigo
category:
    - MATH
tag: 
    - MATH
    - Real Analysis
footer: Thank's for my Dr.Sicong Zhang
copyrigh: 无版权
date: 2023-04-15
---
Riemann Integral - 两面包夹芝士

Let $f:[a,b]\rightarrow \mathbb{R}$ be bouned which means the values are bounded. We with

## Definition - 0:
A partition is "cutting up interval into $n$ smaller ones". 
- Upper sum $\geq$ Riemann sum.
- Riemann sum $\geq$ Lower sum.
We want the best upper and lower sum which means thet both equal the Riemann integral.

## Definition - 1:
Let $f:[a,b]\rightarrow \mathbb{R}$ be a bounded function (function with bounded value).
- A partition of $[a,b]$ is finite subset $P=\{x_{0},x_{1},...,x_{n-1},x_{n} \}$ such that $a=x_{0}<x_{1}<x_{2}<...<x_{n}=b$
- Given a bounded function $f:[a,b]\rightarrow \mathbb{R}(a<b)$ and a partition $P$ of $[a,b]$,
	- Upper sum of $f$ with respect to $P$: $$U(f,P):=\sum\limits_{i=1}^{n}M_{i}(x_{i}-x_{i-1})$$ where $M_{i}=\sup\{f(x):x\in[x_{i-1},x_{i}] \}$
	- Upper sum of $f$ on $[a,b]$:  $$U(f):=\inf_{P}U(f,P)=\inf\{U(f,P)\in \mathbb{R}:P \}$$ $U(f)$: min of max sum
	- Lower sum of $f$ with respect to $P$: $$L(f,P):=\sum\limits_{i=1}^{n}m_{i}(x_{i}-x_{i-1})$$where $m_{i}=\inf\{f(x):x\in[x_{i-1},x_{i}] \}$ 
	- Lower sum of $f$ on $[a,b]$: $$L(f):=\sup_{P}L(f,P)$$ $L(f)$: max of min sum.
	- Max of min $\leq$ min of max
- Let $M=\sup_{x\in[a,b]}f(x),m=\inf_{x\in[a,b]}f(x)$, then $$m(b-a)\leq L(f,P)\leq U(f,P)\leq M(b-a)$$
- Refinig $P$ to $P'$, i.e. $P\supset P'$, we have:![[Pasted image 20230409171033.png]]With finer partitions, piecewise constant functions approximate $f$ better, upper bound improves (decrease), lower bound improves (increases).

# Definition - 2: 
If $U(f)=L(f)$, then we say:
- $f$ is Riemann integrable; denote $f(x)\in \mathfrak{R}[a,b]$.
- The Riemann integral of $f$ is $\int_{a}^{b}f(x)dx :=U(f)=L(f)$.

# Riemann's criterion:
Bounded $f(x)$ is Riemann integrable on $[a,b]$ if and only if $\forall \epsilon>0,\exists P\text{ of }[a,b]$ sucth that $$U(f,P)-L(f,P)=\sum\limits_{i=1}^{n}(M_{i}-m_{i})(x_{i}-x_{i-1})<\epsilon$$
## Proof

---
# Riemann Integrals & continuity & derivates

## Lemma 1.
Let $f:X\rightarrow \mathbb{R}$. Suppose $\forall c,d\in X,|f(c)-f(d) |<\epsilon$, Then $M-m=\sup_{X}f(x)-inf_{X}f(x)\leq \epsilon$.

### Proof

## Theorem - 1
Any continuous function on $[a,b]$ is Riemann integrable. 
More formally, $f\in C^{0}[a,b]\Rightarrow f\in \mathfrak{R}[a,b].$ 
Even more formally, $C^{0}[a,b]\supset \mathfrak{R}[a,b]$.

### Proof

## Theorem - 2: Fundamental Theorem of Calculus
(a). Suppose $F:[a,b]\rightarrow \mathbb{R}$ is differentiable, and $f=F':[a,b]\rightarrow R$ is Riemann integrable. Then, $$\int_{a}^{b}f(x)dx = \int_{a}^{b}F'(x)dx=F(b)-F(a)$$
(b). Suppose $f:[a,b]\rightarrow \mathbb{R}$ is continuous. Define $F(x):=\int_{a}^{x}f(t)dt$. Then $F(x)$ is differentiable, with $$\frac{dF}{dx}(x)=f(x)$$
### Proof
### Remark - 1

---
# Linearity of Riemann Integral

## Proposition - 1.
Assume $f,g$ are integrable on $[a,b]$, and $c\in \mathbb{R}$. Then,
1. $c\cdot f(x)$ and $f(x)+g(x)$ are integrable.
	- In other word, $\mathfrak{R}[a,b]$ forms a vector space
2. $\int_{a}^{b}c\cdot f(x)dx=c\cdot \int_{a}^{b}f(x)dx,\int_{a}^{b}(f(x)+g(x))dx=\int_{a}^{b}f(x)dx+\int_{a}^{b}g(x)dx$
	- In other words, $\int_{a}^{b}(-)dx:\mathfrak{R}[a,b]\rightarrow \mathbb{R}$ is a linear map.
### Proof

### Remark - 2