# The proof of Theorem 1.7

## [Theorem 1.7](../Chapter_1.md#characteristic-polynomial-theorem)
::: important Theorem 1.7
The characterristic polynomial of $A(G)$: 
$$
\begin{equation}
    p(A(G),\mu) = det(\mu I_{n} - A(G)) = \mu^{n} + c_1 \mu^{n-1} + c_2\mu^{n-2} + c_3\mu^{n-3} + \cdots + c_n
\end{equation}
$$
1. $c_1$ = 0;
2. $-c_2$ is the number of edges of $G$;
3. $-c_3$ is twice the number of triangles in $G$;
4. $c_n = (-1)^{n}\det(A(G))$, 这一条性质只能用在 $c_n$ 为多项式的最后一项的时候，对于 $c_4 \thicksim c_{n-1}$ 请使用 Theorem 1.18
:::

## Proof

Assume there is a Graph $G$ with $n$ vertices and its adjacency matrix is:

$$
A(G) = \begin{pmatrix}
   a_{11} &a_{12} &\cdots &a_{1n}\\
   a_{21} &a_{22} &\cdots &a_{2n}\\
   \vdots &\vdots &\ddots &\vdots\\
   a_{n1} &a_{n2} &\cdots &a_{nn}\\
\end{pmatrix}
$$

For each $i\in\{1,2, ..., n\}$, the number $(-1)^{i}c_i$ is the sum of those [principle minors](https://testbook.com/maths/minor-of-matrix#:~:text=The%20principal%20minors%20of%20a,row%20number%20and%20column%20number.) of $A(G)$ which have $i$ rows and same $i$ columns. 
(这个说法感觉和Theorem 1.18好像啊)

Since the principal submatrices are the adjacency matrices of induced subgraphs, then we get

$$
\begin{equation}
    c_i = (-1)^{i}\sum_{|U|=i}\det{A(G[U])}
\end{equation}
$$

1. For $-c_1$ is the sum of eigenvalues, that is, also the [trace](../../Basic_concept.md#trace-of-matrix) of $A(G)$, and 
   $$\text{tr}(A(G)) = (a_{11} + a_{22} + \cdots + a_{nn}) = 0$$
   Then, $c_1 = 0$.
2.  

