---
title: Chapter 5 convergence in a metric space
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
date: 2023-03-25
---
## Definition - 1:
Let $(M,d)$ be a metric space, and consider a sequence in $M,\{x^{(k)}\}_{k=1}^{\infty}$. Then, the $\{x^{(k)}\}$ converges to $x\in M$, which denoted by $\lim_{k\rightarrow  \infty}x^{(k)}=x$ or $x^{(k)}\rightarrow x$.
If for all $\epsilon >0$, there exists natural number $N(\epsilon)$ such that , for all $n\geq N$ , $$d(x^{(k)},x)<\epsilon$$
- 这里证明收敛的核心逻辑： ^adaf3a
	- 目前有一个metric space - $(M,d)$.
	- 我们构造一个 sequence - $\{x^{(k)}\}$ in $M$, 并且说明此数列收敛到 $x$, $x\in M$.
		- 这个收敛我们用 $\lim_{k\rightarrow \infty} = x$ or $x^{(k)}\rightarrow x$ 表示
	- 然后表示 for all $\epsilon>0$, there exists $N(\epsilon)$, (注意这里的 $N$ 是用 $\epsilon$ 表达的) then for all $n\geq N$ , $$d(x^{(k)},x)<\epsilon$$
## Examples: 
- In $\mathbb{R}$, $$(-\frac{1}{k})^{\infty}_{k=1} \rightarrow0$$
- In $\mathbb{R}^{2}$ with $l^{2}$ metric, the sequence $\{(\frac{1}{k},\frac{1}{k})\}$ converges to $(0,0)$ as follows:
  Let $\epsilon>0$ be arbitrary. Ley $N>\frac{\sqrt{2}}{\epsilon}$ . Then, whenever $k\geq N$, $$d\left(\left(\frac{1}{k},\frac{1}{k}\right),(0,0)\right)= \sqrt{\frac{1}{k^{2}}+ \frac{1}{k^{2}}} = \frac{\sqrt{2}}{k}<\epsilon$$
# Some facts 
## Limits are unique, if there exist limit:
  In $(M,d),$ if $(x_{k})\rightarrow y$ and $(x_{k})\rightarrow z,$ then $y=z$ .
-  Proof: 
	  Let $\epsilon>0$ be arbitrary. Since $(x_{k})\rightarrow y$ and $(x_{k})\rightarrow z,$ we can choose $N_{1}$ and $N_{2}$ such that whenever $n\geq N_{1},d(x_{k},y)=d(y,x_{k})<\epsilon$ ; whenever $n\geq N_{2},d(x_{k},z)<\epsilon$ . Then, let $N=\max(N_{1},N_{2})$. $$d(y,x)\leq d(y,x_{k})+d(x_{k},z)<\epsilon+\epsilon = 2\epsilon$$
	  Since $\epsilon>0$ is arbitrary, and by the metric space definition: $d(y,z)\geq0$ , then $$d(y,z)=0$$
## **Definition** of bounded sequence:
### Definition - 2:
  In $(M,d)$: there exists a positive $K>0$ and a point $p = \vec{0}$ such that for all terms of the sequence, $$d(x_{k},p)\leq K$$
  理解：如果一个空间里面的所有序列的点（$x_{k}$）距离零向量 $\vec{0}$ 的距离小于某一个大于零数。感觉可以用 “存在上界” 概括。
### **Statement**: 
- If $\{x^{(k)}\}$ is a sequence of points in $M$ with respect to the metric $d$, then $\{x^{(k)}\}$ is bounded in $(M,d)$.
	- Proof:
	  Let $p\in M$ be a point. Let $x^{(k)}\rightarrow x$, and call $L=d(x,p)$. Choose $\epsilon_{0}=1$, then for some natural number $N$ and all $k\leq N, d(x^{(k)},x)<1=\epsilon$. Then, $$d(x^{(k)},x)\leq d(x^{(k)},x)+d(x,p)<1+L$$ Therefore if we choose $$K=\max(d(x^{(1)},p),...,d(x^{(N-1)},p),1+L)$$then the distance from any $x^{(k)}$ to the point $p$ will be bounded above by $K$ as required.
## $\mathbb{R}^{n}$ together with $l^{1},l^{2},l^{\infty}$ metric
### Theorem: 
a sequence of points $x^{(k)}$ in $\mathbb{R}^{n}$ converges to $x$ in $l^{2}$ distance if and only if $$\lim_{k\rightarrow \infty}x^{(k)}_{i} = x_{i}(\forall i=1,2,...,n).$$
- **Lemma**: In $\mathbb{R}^{n},$ for all $i$, $$\sum_{i=1}^{n}|v_{i}| = ||v||_{1}\geq ||v||_{2}\geq||v||_{\infty} = \max_{i}|v_{i}|\geq|v_{i}|.$$
- Proof of theorem: 
  **First**, suppose $x^{(k)}\rightarrow x$ in 2-norm. Then $\forall \epsilon>0,\exists N,\forall k\geq N,$  $$|x_{i}^{(k)}-x_{i}|\leq ^{lemma}||x^{(k)}-x||_{2}<^{conv}\epsilon \Rightarrow \lim_{k\rightarrow \infty}x^{(k)}_{i} = x_{i}$$
  **Next** , suppose for all $i$ and for all $\epsilon>0,\lim_{k\rightarrow \infty}x_{i}^{(k)}=x_{i}$. Then for each $i$, there exists $N_{i}$ such that whenever $k\geq N_{i},|x_{i}^{(k)}-x_{i}<\frac{\epsilon}{n}|$. Then, taking $N=\max_{1\leq i\leq n}(N_{i})$, whenever $k\geq N$, $$||x^{(k)}-x ||_{2}\leq ||x^{(k)}-x ||_{1}=\sum\limits_{i=1}^{n}|x_{i}^{(k)}-x_{i}|<\frac{n\epsilon}{n} = \epsilon$$Therefore we conclude that $\lim_{k\rightarrow \infty}x^{(k)}=x$ in $l^{2}$-norm. 