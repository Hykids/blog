---
title: 计算机组成学习笔记
description: 修考常见解答题
tag:
  - 计算机组成
sidebar: false
---
# 计算机组成学习笔记
## 流水线

The performance of a processor is improved by introducing pipelines because pipelining enables multiple instructions to be executed simultaneously at different stages, increasing the instruction throughput. This overlap in execution allows the processor to complete one instruction per clock cycle after the pipeline is filled, reducing overall execution time compared to processing instructions sequentially.

CPI：clock per instruction
一条指令，需要多少时钟周期来完成。
$$
CPI = \frac{Total\ Clock\ Cycle}{Instruction\ Count}
$$
时钟频率，**表示处理器每秒可以完成的时钟周期数**，单位是Hz。大小和硬件参数有关，通常是固定的。
$$
Clock\ Frequency=\frac{1}{Clock\ Cycle\ Time}
$$
程序运行时长：
$$
Execution\ Time = \frac{Instruction\ Count \times CPI}{Clock\ Frequency}
$$
例1：Explain the impact of pipelining on the program execution time by comparing with a single-cycle datapath implementation where each instruction is executed in a single clock cycle（R02Infinite）.
**Instruction Count**: **No** - Pipelining does not change the total number of instructions executed.
**CPI**: **Yes** - Pipelining ideally reduces CPI to 1 but may slightly increase due to hazards.
**Clock Frequency**: **Yes** - Pipelining allows a higher clock frequency by reducing the time required for each pipeline stage.

## 流水线与冲突
1. Data Hazard: It occurs when the instruction depends on result of previous instruction, but the result does not available.(后面两种不会造成冲突，仅限单核)
	- RAW, read after write, _flow dependencies_, It
	- WAR, write after read, anti dependencies. Occurs when a instruction writes to a register before the previous instruction reads it.
		![[Pasted image 20250115191003.png]]
	- WAW, write after write, output dependencies: Two instructions writes to a same register, and the second instruction writes before the first instruction finishes.
		![[Pasted image 20250115191205.png]]
1. Control Hazard: Happens when the instruction does not know which instruction to fetch next due to a jump or a blanch.
2. Structure Hazard：It occurs when two instructions need the same hardware resource at the same time, and CPU cannot handle it.

### 解决冲突
Pipeline Stall：Introduce a bubble or a stall to **delay the execution time** until the dependencies is resolved.
![[Pasted image 20250115163619.png]]
Data Forward: Forward result of operation directly to next instruction
![[Pasted image 20250115163410.png]]
Blanch Prediction: Guess whether the blanch will be executed/taken and fetch the blanch accordingly. 
Scheduling: Organize instruction execution to maximize the throughput and minimize the stall.


### 流水线优化方案
提升流水线的级数可以带来处理性能上的提升。
Increasing the number of pipeline stages can lead to improvements in processing performance.

#### 边境效应
随着级数提升，提升的效果会越来越不显著
![[Pasted image 20250115191823.png]]
1.设计会变复杂
2.分支预测里，预测错误的代价会变高，浪费更高的时钟周期

例2：Explain the advantage and disadvantage of increasing the number of pipeline stage.
**Advantages**: Higher clock frequency.
more instruction can be executed simultaneously, improving the overall throughout.
