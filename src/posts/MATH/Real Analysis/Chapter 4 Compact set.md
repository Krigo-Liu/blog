---
title: Chapter 4 Compact Set
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
date: 2023-03-20
---
A closed and bounded interval $[a,b]\subset\mathbb{R}$ is "compact".

# Bolzano-Weierstrass theorem:
Any sequence $(x_{k})$ in $[a,b]$ has a convergent subsequence.
- Counter-intuitive 
	- Example: $x_{k}=\sin(k)\in [-1,1].$
- Compare:
	- False for $(a,b]:a+1,a+ \frac{1}{2},a+ \frac{1}{3},...$
- Compare:
	- False for $[a,\infty):a,a+1,a+2,a+3,...$

# Theorem - 封闭youjie的嵌套序列
Any nested sequence of closed and bounded interval in $\mathbb{R}$ has nonempty intersection: if $I_{k}=[a_{k},b_{k}]$,such that $a_{1}\leq a_{2}\leq...,b_{1}\geq b_{2}\geq b_3...$ then $$\cap_{k=1}^{\infty}[a_{k},b_{k}]\neq\emptyset$$
# Theorem: Heine-Borel
For a compact $[a,b]$, for any collenction of open sets $\{U_{\alpha}\}_{\alpha\in I}$ "covering"$$[a,b],\cup_{\alpha\in I}U_{\alpha}\supset[a,b]$$ then there is a finite subset $U_{i}$ such that $$\cup_{i=1}^{n}U_{i}\supset[a,b]$$
  - Example

From these properties of $[a,b]$, we can define the notion of "compact set" in a metric space.

---
# Definition of Compactness
Let $(M,d)$ be a metric space. $K\subset M$.
## Topological definition:
$K$ is a compact set if any pen cover has a finite subcover.

- Open cover: a collection of open sets $\{U_{\alpha}\}_{\alpha\in I}$ in $M$ such that $\cup_{\alpha\in I}U_{\alpha}\supset K$.
- Finite subcover: finitely many open sets $\{U_{\alpha_{i}}\}_{i=1}^{n}$ in $\{U_{\alpha}\}_{\alpha\in I}$ such that it still covers $K:\cap_{i=1}^{n}U_{\alpha_{i}}\supset K$.

## Sequential definition:
Any sequence $\{x_{k}\}_{k=1}^{n}$ in $K$ has a convergent subsequence $\{x_{k_{i}}\}_{i=1}^{\infty}$ with limit also in $K$.
- Subsequence: "$1\geq k_{1}<k_{2}<k_{3}<...$" 
## Theorem:
In any metric space, the 2 definitions above are equivalent: $K$ is compact if and only if $K$ is sequentially compact.
## Fact: 
- Compact sets are closed and bounded.
	- A subset $B\subset M$ is bounded if it is contained in some ball: for some $y\in M$ and some large $R>0,B\subset B_{R}(y)$.
	- Proof:
- In $R^{n}$, a subset $K$ is (sequentially) compact if and only if it is closed and bounded.
	- Proof:

---
# Continuous functions on Compact set
## Opening example: Extreme Value Theorem
Let $f:[a,b]\rightarrow \mathbb{R}$ be continuous. Then, there exists $m,M\in R$ such that for all $x\in [a,b],m\leq f(x)\leq M$. Frthermore, there exists $x_{\min},x_{\max}\in [a,b]$ such that $f(x_{\min})=m,f(x_{\max})=M$.
"Continuous functions on a closed and bounded interval attains its minmum and maximum values."
- Step 1: show that a continuous function on $[a,b]$ takes bounded value.
- Step 2: inf/sup function values can be attained.
- Proof
Let $K$ be a compact subset in a metric space $X$. Let $Y$ be another metric space.
- Recall two equivalent definitions of compactness:
	1. Any open cover has a finite subcover.
	2. Any sequence has a convergent subsequence
## Theorem 1: 
If $K\subset X$ is compact and if $f:X\rightarrow Y$ is continuous, then the image $f(K)\subset Y$ is compact.
- Proof 1:引用：
	- [[4. Continuous functions between metric space.#Definition of continuous function:]]  
	- Proof summary:
	  open cover of $f(K)\stackrel{continuity}{\rightarrow}$open cover of $K \stackrel{compactness}{\rightarrow}$ finite subcover of $K\rightarrow$ finite subcover of $f(K)$.
- Proof 2
	- Proof summary:
	  sequence in $f(K)\rightarrow$ sequence in $K\stackrel{compactness}{\rightarrow}$ covergent subsequence in $K\stackrel{continuity}{\rightarrow}$ convergent subsequence in $f(K)$.
	- Example:
