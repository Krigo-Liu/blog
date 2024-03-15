---
title: Chapter 3 Definition of continuous function & Image and Preimage
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
date: 2023-03-15
---

## Definition - 1:
$f:X\rightarrow Y$ is continuous at $x_{0}\in X$ if: $$\forall \epsilon>0,\exists \delta>0,d_{X}(x,x_{0})<\delta \Rightarrow d_{Y}(f(x),f(x_{0}))<\epsilon$$
## Equivalent: 
By using open ball:$$\forall \epsilon>0,\exists\delta>0,\forall x\in B_{\delta}(x_{0}),f(x)\in B_{\epsilon}(f(x_{0}))$$where $B_{\delta}(x_{0}) = \{y\in X,d(y,x_{0})\}\subset X$ and $B_{\epsilon}(f(x_{0}))=\{f(y)\in Y, d(f(y),f(x_{0}))<\epsilon \}$ 
### Open ball: ![[3. Open sets and Closed sets#Definition - 2:]]

## Definition - 2:
$f:X\rightarrow Y$ is continuous on $A\subset X$ if it is continuous at every $x_{0}\in A$.

## Theorem: if $X,Y$ are metric spaces,
1. $f:X\rightarrow Y$ is continuous at $x_{0}$:$$\forall \epsilon>0,\exists \delta>0,d_{X}(x,x_{0})<\delta \Rightarrow d_{Y}(f(x),f(x_{0}))<\epsilon$$
2. If $x_{k}\rightarrow x_{0}$ in $(X,d_{X})$, then $f(x_{k})\rightarrow f(x_{0})$ in $(Y,d_{Y})$
3. For all open set $V\subset Y$ containing $f(x_{0})$, there exist an open set $U\subset X$ containing $x_{0}$, such that $f(U)\subset Y$.
### Proof:
- $3\Rightarrow 1$:
- $1\Rightarrow 2:$
- $2\Rightarrow 3:$
---

## Definition - 3:
Set theory reminder: given any $f:X\rightarrow Y,U\subset X,V\subset Y$, define: $$f(U)=\{f(u)\in Y:u\in U\}$$ $$f^{-1}(V)={u\in X}:f(u)\in V$$
## Properties of preimages:
- $f(U)\subset V \Leftrightarrow F(u)\in V,\forall u\in U \Leftrightarrow U\subset f^{-1}(V)$  
- $f^{-1}(V_{1}\cap V_{2})=\{x\in X:f(x)\in X:f(x)\in V_{i}(\forall i) \}=f^{-1}(V_{1})\cap f^{-1}(V_{2})$
- $f^{-1}(V_{1}\cup V_{2})=\{x\in X:f(x)\in X:f(x)\in V_{i}(\exists i) \}=f^{-1}(V_{1})\cup f^{-1}(V_{2})$
- $f^{-1}(V^{c})=\{x \in X:f(x)\notin V\}=(f^{-1}(V))^{c}$ 
# Continuity vs. preimage of open sets.

## Theorem of continuity combine preimage
$f:X\rightarrow Y$ is continuous if and only if for any $V$ open in $Y$, $f^{-1}(V)=\{x\in X:f(x)\in V \}$ is open in $X$.
- Proof is by the definition of continuous function theorem 3.
- Since $U$ is open iff  $U^{c}$ is closed, then $f$ is continuous iff< $f^{-1}$ of any closed sets are also closed.
  
## Therorm of continuity in matric space
Let $X\stackrel{f}{\rightarrow} Y\stackrel{g}{\rightarrow} Z$ where $f,g$ are continuous ($X,Y,Z$ are metric spaces). Then $g\circ f:X\rightarrow Z$ is also continuous.
这里有三种证明方法：
- Proof 
- Proof 
- Proof
## Some facts about continuous functions from $\mathbb{R}^{m}$ to $\mathbb{R}^{n}$

### Step 1:
Continuous functions $f:\mathbb{R}^{m}\rightarrow \mathbb{R}$. Suppose $f,g$ are both real-valued functions on $\mathbb{R}^{m}$, and $c\in \mathbb{R}$, then the following are also continuous functions:
- Constant function $c$, and linear functions $f(x_{1},...x_{m})=a_{1}x_{1}+...+a_{m}x_{m}=\mathbf{a}^{T}\mathbf{x}$ 
- $f\pm g, cf, fg,  \frac{f}{g}$; whenever $g(x)\neq0$.
	- Proof idea: sequential criterion + algebraic limit theorem.
	- Therefore, polynomials in $m$ variables and rational functions are continuous on their domain.
- $f$, composed with continuous functions $h:\mathbb{R}\rightarrow R$
	- Examples:
	- $\max(f,g)=\frac{1}{2}(|f+g|+|f-g|),\min(f,g)=\frac{1}{2}(|f+g|-|f-g|)$ are continuous

### Step 2
Continuous functions $f:\mathbb{R}^{m}\rightarrow \mathbb{R}^{n}$
- $f=(f_{1},f_{2},...,f_{n})$ where for each $i=1,2,3,...,n$, component $f_{i}:\mathbb{R}^{m}\rightarrow \mathbb{R}$
- $f$ is continuous if and only if each $f_{i}$ is continuous 
	- Reason: in $R^{n}$ with any $p$-norm, sequence converges iff each coordinate converges; combine this with the sequencetial criterion for continuity.
