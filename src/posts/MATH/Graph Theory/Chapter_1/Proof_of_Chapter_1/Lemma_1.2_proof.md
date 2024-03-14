# The proof of Lemma 1.2

::: tip Lemma 1.2 
The number of walks of length $l$ in $G$, from $v_i$ to $v_j$, is the entry in position $(i,j)$ of the matrix $A(G)^{l}$.
:::

## Proof
这个证明的思路为：数学归纳法

---
When $l = 1$ the result is true, because $A(G)^{1} = A(G)$ is adjacency matrix.

Suppose the result is true for $l = L$. Then, for the set of walk of length $L+1$ from $v_i$ to $v_j$ is in [bijective correspondence](https://en.wikipedia.org/wiki/Bijection) with the set if walks of length $L$ from $v_i$ to $v_k$ adjacent to $v_j$.

Then, the number of such walks is 
$$
\begin{equation}
    \sum_{v_k \sim v_j}(A(G)^{L})_{ik} = \sum_{k=1}^{n}(A(G)^{L})_{ik}a_{kj} = (A(G)^{L+1})_{ij}
\end{equation}
$$

- $v_k \sim v_j$ 表示的是：当走了 $L$ 步之后，从第 $i$，到达第 $k$ 个点. 这 $k$ 点有n个，且与第 $j$ 个点为邻居。
- $a_{kj}$: 就是 $k$ 与 $j$ 的关系，如果adjacent,就为 1, not adjacent，为 0

证完了。。。。