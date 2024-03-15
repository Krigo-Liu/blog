---
title: Chapter 6 Uniformly continuity
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
date: 2023-03-30
---
## Definition:
- Key property of continuous functions on compact space.
$f:X\rightarrow Y$ is uniformly continuous if: $$\forall\epsilon>0,\exists\delta_{\epsilon}>0,d_{X}(x_{1},x_{2})<\delta \Rightarrow d_{Y}(f(x_{1}),f(x_{2}))<\epsilon$$
### Theorem: 
Let $f:K\rightarrow Y$ be a continuous function, where $K$ is compact. Then $f$ is uniformly continuous.
- Proof 1: by using open-cover compactness
	- 
- Proof 2: by using sequential compactness and contradiction.
	- 

## 前情提要：

### Uniform contiinuous functions and related concepts:

Continuous $\supset$ uniformly continuous $\supset$ $\alpha$-Holder continuous $\supset$ Lipschitz continuous $\supset$ contraction mapping

#### $\alpha$-Holder continuous:
For some $\alpha<(0,1]$ and $L>0$, for all $x,y\in X$, $$d(f(x),f(y))\leq L\cdot [d(x,y)]^{\alpha}$$where $f:X\rightarrow Y$ is a continuous map between metric spaces.

#### Lipschitz continuous:
For some Lipschitz constant $L>0$ and all $x,y\in X$, $$d(f(x),f(y))\leq L\cdot d(x,y)$$where $f:X\rightarrow Y$ is a continuous map between metric spaces.

#### Constraction mapping:

$$d(f(x),f(y))\leq rd(x,y)$$for some $0<r<1$.