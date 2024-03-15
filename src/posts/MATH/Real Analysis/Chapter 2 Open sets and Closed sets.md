---
title: Chapter 2 Open set & Closed set
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
date: 2023-03-10
---

## Definition - 1:
<font color="#00b0f0">There exist a ball</font> of radius $r$ centered at $x_{0}\in M$ is $$B_{r}(x_{0})=\{y\in M:d(y,x_{0})<r \}$$Then $M$ is open.

## Definition - 2:
A subset $U \subset M$ is open if for any $x\in U$, there eixsts some $r>0$ such that $$B_{r}(x)\subset U$$where $B_{r}=\{y\in M:d(y,x)<r\}$ 
概括：一个开集的子集中的任意一个点，与这个开集中的元素构成的ball，在这个子集里面。
## Some facts - 1:
- Union of open sets is still open. - open的并集还是open
	- Proof:
- If $U_{1},U_{2}$ are both open sets, then $U_{1}\cap U_{2}$ is also open.
  有限个open的交集还是open
	- Proof:
	- If $U_{1},U_{2},...,U_{n}$ are finitely many open sets, then their intersection $\cap_{i=1}^{n}U_{i}$ is open. 
		- Proof:
- <font color="#ff0000">BUT!!!!</font> : Inifitely many open set's intersection is <font color="#ff0000">not</font> still open.
  <font color="#ff0000">无限个 open 的交集就不一定是open的</font>
	- Example:

---
## Definition - 3:
A set of $C\subset M$ is closed if $x_{k}\in C,\lim_{k\rightarrow \infty}x_{k}=x,x\in M$ which implies $x\in C$.
在closed set 里面找一个 subset，证明这个 subset 里面的数列的极限在这个subset里面，以为这在 closed set里
### Equivalent:
A closed set contains all of its "limits": if $x$ is the limit of some sequence $x_{k}\in C$, then $x\in C$. 
因此，我们发现 closed set 里面有其所有的数列的极限
## Examples:

## Some facts - 2:
- Intersection of closed sets is still closed. - closed 的交集是 closed
- Let $C_{1},C_{2}$ be closed in $(M,d)$. Then $C_{1}\cup C_{2}$ is closed.
  同理，有限个 closed 的交集也是 closed 的
	- By induction, if $C_{1},C_{2},...,C_{n}$ are closed, then $\cup_{i=1}^{n}C_{i}$.
- BUT!!! : Infinitely many closed sets, their union is not closed
  无限个不是closed.
	- Example:  $C_{n}=[\frac{1}{n},2- \frac{1}{n}]$ is closed for each $n$, but their union $C_{n}=(0,3)$ is note closed.
# Warning: 
If a set is NOT open, then it is not true that it is closed, because set can be neither open nor closed
# Proposition - 命题
A set $U$ is open **if and only if** its complement $U^{c}=M-U$ is closed.
我们去证明这两个方面。
1. Suppose $U$ is NOT open, \[$U^{c}$ is not closed\], then $U^{c}=M-U$ is NOT closed.
	- Proof:
2. Suppose $U^{c}=M-U$ is NOT closed, then $U$ is NOT closed. 
	- Proof:
