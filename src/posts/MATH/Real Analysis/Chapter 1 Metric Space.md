---
title: Chapter 1 Matric Space
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
date: 2023-03-01
---
## Definition - 1

Let $M$ be a set. A **metric** on $M$ is a function $d: M\times M \rightarrow R$ which statisfies: for all $x,y,z\in M$, 
1. $d(x,y)\geq 0$, if and only if $x=y \rightarrow d(x,y)=0$
2. $d(x,y)=d(y,x)$
3. $d(x,z)\leq d(x,y)+d(y,z)$

## Definition - 2

A metric space is a set $M$ together with a metric $d-$ metric space, where $d$ we often think as a distance function.

## Examples:

### In the $(\mathbb{R},d)$
where $d(x,y)=|x-y|$

### In the $\mathbb{R}^2$
For the $l^{2}$ (usual / Euclidean) metric: $$d(x,y)=\sqrt{(x_{1}-y_{1})^{2}+(x_{2}+y_{2})^{2}}$$
### In the $\mathbb{R}^3$

- For the $l^{1}$ metric: $$d(x,y)=|x_{1}-y_{1}|+|x_{2} - y_{2} |$$
- For the $l^{\infty}$ metric: $$d(x,y)=\sup(|x_{1}-y_{1}|,|x_{2} - y_{2} |,|x_{3}-y_{3}|)$$
## Some others: p-distance on $R^{n}$
$$d(x,y)=(\sum\limits_{i}^{n}|x_{i}-y_{i}|^{p})^{\frac{1}{p}}$$
### Very specific example: $M$ together with the "discrete metric".
$$d(x,y) = \left\{ \begin{aligned} &0, \text{if }x=y \\ &1, \text{if }x\not= y  \end{aligned} \right.$$
