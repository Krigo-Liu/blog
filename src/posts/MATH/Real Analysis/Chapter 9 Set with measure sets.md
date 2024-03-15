---
title: Chapter 9 Set with measure sets
order: 3
author: Krigo
category:
    - MATH
tag: 
    - MATH
    - Real Analysis
footer: Thank's for my Dr.Sicong Zhang
copyrigh: 无版权
date: 2023-04-20
---
Let us consider $\mathbb{R}^{2}$ , a plane

# Definition:
For an ioen rectangle $I=(a,b)\times(c,d)={(x,y):a<}$
# Definition for measure zero: 
A subset of $\mathbb{R}^{2}, A\subset \mathbb{R}^{2}$, has <font color="#7030a0">mesure zero</font> if : for any positive $\epsilon>0$ there exists a ountable collenction of open rectangle. $\{I_{n} \}_{n=1}^{\infty}$ , such that,  $\sum\limits_{n=0}^{\infty}|I_{n}|\leq \epsilon$ ,
- **coutable open rectangle:** $I_{1},I_{2},I_{3},...I_{n}$
	- countable means: $I_{n}$ exist. 
		- uncountable: $I_{1},I_{2},I_{3},...$
	- $I_{n}$ 描述的是 rectangle
		- $|I_{n}|$ : rectangle 的面积 (在 $\mathbb{R}^{2}$)
- **collection of open rectangle**: $U_{n=1}^{\infty}I_{n}\supset A$ 
	- $A$ is a subset of "collection of open rectangle."
- 这些 rectangle 的面积的 sum 是可以变得越来越小的
## Example:
Showing that $\{0\leq x\leq1 ,y=0 \}$ has measure zero: cover it with a rectangle of width $1+\epsilon$ and height $\epsilon$ 

## Proposition
(a). Subset of measure zero set also has measure zero.
(b). Countable union of measure zero sets has measure zero.

### Proof: (a)
Idea: "Open cover also covers its subsets".

### Proof: (b)
Idea: "$\frac{\epsilon}{2^{k}}$ trick; $\{ \}$"

## Example:
If $f:[a,b]\rightarrow \mathbb{R}$ is continuous, then its graph $\{(x,f(x)) \}$ has measure zero.

### Proof:
Continuous functions are Riemann integrable: by Riemann's criterion for any $\epsilon>0$, we choose a partition $P=\{a=x_{0},x_{1},...,x_{n}=b \}$ such that, $$U(f,P)-L(f,P)=\sum\limits_{i=1}^{n} (M_{i}-m_{i})(x_{i}-x_{i-1})<\epsilon/2$$ (If we take the $i$th rectangle to be $[x_{i-1},x_{i}]\times [m_{i},M_{i}]$, then these closed recatanges covers the graph, with total area less than $\epsilon/2$. By slightly enlarging (<font color="#646a73">稍微扩大</font>) them, we can get a cover by open rectangles with total area at most $\epsilon$. Therefore the graph has measure zero.)

### Question: 
how to show that the graph of a continuous $f:\mathbb{R}\rightarrow \mathbb{R}$ has measure zero?

#### Proof:
Since the union of countable many measure zero sets has measure zero, suffices to show that $f:[k,k+1]\rightarrow \mathbb{R}$ has measure zero.


---
# Alternative Definition of measure zero

$A\subset R^{2}$ has measure zero