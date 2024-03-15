---
title: Chapter 7 Banach Fixed Point Theorem (Constraction Mapping principle)
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
date: 2023-04-10
---
## “Complete”
If $(M,d)$ is "<font color="#ff0000">Complete</font>", and if $f:M\rightarrow M$ satisfies $$d(f(x),f(y))\leq rd(x,y)$$where $0\leq r< 1$ ![[6. Uniformly continuity#Constraction mapping:]]
Then $f$ has a unique fixed point $x_{0}=f(x_{0})$. Furthermore, start from $x_{1}\in M$ and iterately define $x_{n+1}=f(x_{n})$, the sequence $\{x_{n}\}_{n=1}^{\infty}$ always converge to the unique fixed point $x_{0}$.

Hint: Banch fixed point theorem can be applied to many sequence spaces and function spaces.
## Then we can derive:
1. Let $x_{1}$ be arbitrary. Iterate the function $$f:x_{2}=f(x_{1}),x_{3}=f(x_{2}),...,x_{n+1}=f(x_{n})$$Let $D=d(x_{1},x_{2})$. 
   We can find a estimate formula for $d(x_{n-1},x_{n})$, in terms of $D$ and $r$.
	- $d(x_{2},x_{3})=d(f(x_{1}),d(x_{2}))\leq rD$
	- $d(x_{3},x_{4})=d(f(x_{2}),f(x_{3}))\leq rd(x_{2},x_{3})\leq r^{2}D$
	- ...
	- $d(x_{n-1},x_{n})\leq r^{n-2}D$
2. We can show that $\{x_{m}\}$ is a Cauchy sequence in $(M,d)$
	- For a natural number $N$ to be determined later, for all $n>m\geq N$, we can give an upper bound of $d(x_{m},x_{n})$.
3. In a "Complete" metric space $M$, Cauchy sequences converges. So $x_{n}\rightarrow x_{0}$ as $n\rightarrow \infty$.

\[To be continuous...\].

# Complete metric spaces
## Definition: 
A metric space $(M,d)$ is complete if any Cauchy sequence converges.
- $\mathbb{R}$ is a complete metric space.
	- Proof:
## Theorem:
$\mathbb{R}^{n}$ with the 2-norm is a complete metric space.
- Proof:

## Some facts:
- In $\mathbb{Q}$, an example of Cauchy sequences that does not converge in $\mathbb{Q}$ :
	- $x_{1}=S,x_{n+1}=\frac{1}{2}(x_{n}+ \frac{S}{x_{n}}),x_{n}\rightarrow \sqrt{S}\notin \mathbb{Q}$.
	- Therefore $\mathbb{Q}$ is not complete.
- Sequence spaces that are complete: $l^{1},l^{2},c_{0}...$
	- Example: show that $l^{1}=\{(a_{1},a_{2},...):\sum\limits_{k=1}^{\infty}|a_{k}|<\infty \}$ is complete with respect to the $l^{1}$-norm: $d(a,b)=||a-b||_{l^{1}}=\sum\limits_{k=1}^{\infty}|a_{k}-b_{k}|$
- Function spaces that are complete:
	- $C^{0}([a,b])$ with uniform metric $d(f,g)=||f-g||_{\infty}$
#### FANCY NAME:
- Banach space = vector space + norm + complete
- Hilbert space = vector space + inner product + complete