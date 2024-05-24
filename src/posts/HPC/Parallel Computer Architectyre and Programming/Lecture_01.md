---
title: CMU 15-418 Lecture 01
icon: file
order: 3
author: Krigo
category:
    - CS
tag: 
    - CS
    - Parallel Computing
    - Coding
footer: Thank's myself until I find a jinx to ask questions. haha
copyrigh: 无版权
date: 2024-05-08
---

## Course Main Theme

1. Designing and writing parallel programs —— scale! (规模)
   - Parallel thing
     1. **Decomposing**(分解) the work into pieces that can safely be performed in parallel
     2. Assigning work to processors
     3. **Managing** communication/synchronization(同步) between the processors so that it does not limit **speedup** 
2. Parallel computer hardware implemtation: how parallel computers work
   - Mechanisms(机制) used to implement abstractions effeciently
     1. Performance(性能) characteristics of implementations
     2. **Design trade-offs: performance vs. convenience vs. cost**
3. Thinking about efficiency
   - Fast $\neq$ Efficient
   - Your program runs faster on a parallel computer, it deos not mean it is using the hardware efficiently.