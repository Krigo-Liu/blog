---
title: 1. Fundamentals of Linear Algebra
icon: file
order: 3
author: Krigo
category:
    - MATH
tag: 
    - MATH
    - Computer Graphics
footer: Thank's the teachers from Beijing University
copyrigh: 无版权
date: 2024-03-05
---

## Vector (向量)

::: tip 图形学的基本研究对象
:::

## Vector Space

- 定义在数域 $F$ 的向量空间：带有向量加法和标量乘法的非空集合$V$
- 在图形学应用中,数域 $F$ 一般取为实数域，其余为负数域 $\mathbb{C}$ 等

## Linear Combination

- 线性相关/无关 (Linear dependent / independent)


- 向量空间的维度
  - 空间内能找出的线性无关的向量的个数的最大值, 记为 $\dim V$
  - $\dim V$个线性无关的向量构成向量空间

- 低维向量和向量空间
  - 物理空间: Mesh、曲线、点云的坐标及导数
    - 欧几里得
    - 科夫斯基
  - 颜色空间: RGB
    - 作业：为什么颜色空间可以构成向量空间？（Hint: Vector Space 的定义）
- 高位空间和向量空间
  - 灰度数字图像上所有像素值组成的向量
  - 二维或三维图形的所有自由度组成的向量

## Linear Mapping

- $f: V \rightarrow W$
  - $V, W$ 都是向量空间
  - $f(u+v) = f(u)+f(v)$
  - $f(\alpha v)=\alpha f(v)$
    - 推论：如何证明
      - $f(0) = 0$
      - $f(\alpha u + \beta v)=\alpha f(u) + \beta f(v)$
- 低维空间的线性映射
  - 缩放、旋转都是线性变换
  - 平移不是线性变换

## Matrix

- What is a Matrix
  - 对线性映射的一种表示
- 矩阵运算的意义
  - 矩阵&向量的乘法
    - 给出的向量在新的空间的坐标，即经过矩阵对应的线性变化后的空间
  - 矩阵的乘法
    - 对空间的多次相继变换的合成
- 方针
  - $n \times n$

### 矩阵弹幕运算

- Transpose ($A^{T}$) : $A$ 的所有的元素的下标行、列互换
  - 意义：矩阵对应的线性变换在对偶空间里的逆变换对应的矩阵
  - 性质：$(AB)^{T} = B^{T}A^{T}$
- Determinant ($\det A = |A|$):
  - 意义：矩阵对应的线性变换对空间的拉伸程度的度量（物体经过变换后的体积比）
  - 定义：在$n$ 阶方针中选n个元素使得每行每列各有一个元素被选出，求其乘积
- Trace（迹）($\text{tr} A$)：矩阵对角线元素之和
  - 意义
  - 性质
- Inversed（$A^{-1}$）:满足 $AA^{-1} = E$的矩阵
  - 意义
  - 求解
  - 性质
- Adjugated ($A^{*}$): 
  - 意义
  - 性质

### Eigenvalue

- 定义:
  - 这些向量
  - 求解特征值
  - 特征值的意义
- 矩阵多项式的特征值
  - $f(A) = c_k A^k + c_{k-1}A^{k-1}+ \cdots + c_1 A+ c_0 E$
    - 若
    - 设
  - 重要应用：最大特增值称为谱半径(spectral radius); 最大最小特征值之比称为 **条件数**
    - 如果$\lambda < 1$, 则随着 $k$ 增大，$\lambda$减小，然后就可证收敛

## Norm & 向量空间
- 度量空间 vs. 向量空间
  - 向量空间中的元素不能比大小
  - 对于集合$V$, 定义度量函数: $d: V \times V \rightarrow \mathbb{R}$, 设$x,y,z\in V$
  - 定义了度量函数的集合$V$ 称为度量空间(metric space), 度量函数d又称为“距离”
- 赋范度量空间 = 向量空间 + 度量函数$(d(u,v) = ||u-v||)$
  - 定义范数

### Innner Producs Space
- 内积: $V \times V \rightarrow \mathbb{R}$
  - $u$ and $v$, denote $<u,v>$
- 赋范线性空间 vs. 内积空间
  - $dd(u,u) = <u,u>$
  - 范数只给出了向量的长度
  - 内积还给出了向量的夹角

#### 内积于正交
- Orthogonal 与 单位正交基底
  - 定义两向量的夹角$\theta_{uv} = \arccos\frac{<u,v>}{\sqrt{<u,u>,<v,v>}}$, 当 $\cos{\theta_{u,v}} = 0$ 时称为两向量正交
  - 正交基底:
  - 单位正交基底的性质
- 单位正交变换: 不改变任意两个向量的内积的变换(保持单位正交基底)
- 笛卡尔坐标系(Cartesian coordinates)

### 幺正空间与幺正变换
- unitary 空间，数学上又译为酉空间
- unitary 变换，....
- 应用：
  - 量子力学
  - 幺正性
  - 线性算子

## 低维变换矩阵

- 2D 线性变换
  - $
  \begin{pmatrix}
    a_{11} & a_{12} \\ a_{21} & a_{22}
  \end{pmatrix} 
  \begin{pmatrix}
  x \\y
  \end{pmatrix} = 
  \begin{pmatrix}
  a
  \end{pmatrix}$

- 3D 线性变换

## Homogeneous 坐标
- 实质：用$n+1$ 个数表示n维坐标

## 矩阵的变换

- 矩阵的变换 vs. 线性变换
- 相似变换
- 合同变换

## 二次型
- Quadratic form: n 个变量的二次多项式
  - Eg.:圆锥曲线