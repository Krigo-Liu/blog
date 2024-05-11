---
title: The implementation of parallel Computing in upwind scheme (OpenMP)
icon: file
order: 3
author: Krigo
category:
    - HPC
tag: 
    - Parallel Computing
    - Coding
footer: Thank's my mentors
copyrigh: 无版权
---

## Fortran Code

```Fortran
subroutine get_stream_tn_parallel
    use omp_lib
    
    implicit none
    integer :: i, thread_id,partial_Sum,total_Sum
    

    t1_vertex(0)%value = t0_vertex(0)%value - dt * (t0_vertex(0)%value - t0_vertex(nx)%value)/dx
    !$OMP PARALLEL PRIVATE(partial_Sum) SHARED(total_Sum)
    
    !$OMP DO
    do i = 1,nx + nghost
        t1_vertex(i)%value = t0_vertex(i)%value - dt * (t0_vertex(i)%value - t0_vertex(i-1)%value)/dx
        !thread_id = OMP_GET_THREAD_NUM()
        !print *, "Upwind process: ", thread_id
    enddo
    !$OMP end DO
    
    !$OMP DO
    do i = 1 - nghost, nx + nghost
        
        t0_vertex(i)%value = t1_vertex(i)%value
    enddo
    !$OMP end DO 
    !$OMP END PARALLEL
end subroutine get_stream_tn_parallel
```

## Result

$$
\begin{array}{c | l l l}
 & \text{ non-Parallel(Standard)} & \text{non-Parallel(System)} & \text{Parallel(Standard)} & \text{non-Parallel(System)} \\
\hline
1280    & 0.171875      & 0.164000      & 2.328125      & 0.356000      \\
2560    & 0.734375      & 0.736000      & 4.000000      & 0.450000      \\
5120    & 2.46875       & 2.458000      & 11.828125     & 1.1930000     \\
10240   & 9.859375      & 9.852000      & 39.562500     & 4.0990000     \\
20480   & 39.828125     & 39.866000     & 162.031250    & 16.065000     \\
40960   & 156.234375    & 156.492000    & 613.953125    & 60.7620000    \\
81920   & 625.437500    & 626.775000    & 2343.29687    & 231.953000    \\
163840  & 2561.906250   & 2566.598000   & 9150.625000   & 905.957000    \\
327680  & 10378.484375  & 10398.286000  & 35902.890625  & 3592.304000   \\
\end{array}
$$



