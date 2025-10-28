# 编写操作系统的环境


[[toc]]


## 安装软件


Netwide Assembler （简称 NASM）是一款基于英特尔 x86 架构的汇编与反汇编工具。它可以用来编写 16位、32位（IA-32）和 64位（x86-64）的程序。 NASM 被认为是 Linux 平台上最受欢迎的汇编工具之一。


QEMU是一款开源的虚拟机软件，它可以模拟多种不同的硬件平台，包括x86、ARM、MIPS、SPARC等，支持多种操作系统的运行，如Linux、Windows、Mac OS X、FreeBSD等。QEMU可用于虚拟化、仿真、调试和测试等多种应用场景。QEMU能够将一台物理主机模拟成多台虚拟机，为用户提供了一个隔离的环境来运行不同的应用程序和操作系统。QEMU是一个轻量级的虚拟机软件，易于安装和配置，并且具有良好的可移植性和跨平台性。



```sh
$ brew install nasm qemu
```


运行 nasm 查看版本信息

```sh
$ nasm -v
NASM version 2.16.01 compiled on Dec 23 2022
```

运行 qemu 查看版本信息

```sh
$ qemu-system-i386 -version
QEMU emulator version 8.1.3
Copyright (c) 2003-2023 Fabrice Bellard and the QEMU Project developers
```



## 编译内核


```asm
	org 07c00h ;
	mov ax, cs 
	mov ds, ax 
	mov es, ax 
	call DispStr ; 
	jmp $ ; 
DispStr: mov ax, BootMessage
	mov bp, ax ; 
	mov cx, 16 ; 
	mov ax, 01301h ; 
	mov bx, 000ch ; 
	mov dl, 0 int 10h ; 
	ret 
BootMessage: db "Hello, OS world!" 
times 510-($-$$) db 0 ; 
;
dw 0xaa55 ;
```


```sh
$ nasm boot.asm -o boot.bin
```


制作启动盘

```sh
$ dd if=boot.bin of=leios.img bs=512 count=1
```
制作启动盘时，if=boot.bin, 是刚才用 nasm 编译汇编文件生成的 bin 文件. of=leios.img 中的 leios.img 生成的映像文件名, 这个文件用于引导启动操作系统。

::: warning 简介

* 制作软盘镜像文件diska.img
命令： dd if=/dev/zero of=diska.img bs=512 count=2880

* 复制boot.bin到boot.img中
命令： dd if=boot.bin of=boot.img bs=512 count=1

* 复制diska.img中从第512字节往后的内容添加到boot.img中（这是dd最出彩的部分）
命令： dd if=diska.img of=boot.img skip=1 seek=1 bs=512 count=2879

:::




## qemu 使用


```sh
$ qemu-system-i386 -drive file=leios.img,format=raw,bus=0,unit=0 -parallel stdio
```

其中，-m 选项指定虚拟机内存大小，-hda 选项指定虚拟机硬盘镜像文件, -boot 选项指定启动顺序，-serial 选项指定虚拟机使用的串口。




## 参考


[清华大学操作系统-实验](https://github.com/chyyuu/ucore_os_docs)

[Linux内核完全注释]()

[Linux内核设计与实现]()

[rCore-Tutorial-Book第三版(用 Rust 语言写一个基于 RISC-V 架构的 类 Unix 内核 )](https://rcore-os.cn/rCore-Tutorial-Book-v3/index.html)

[Linux0.01源码下载](http://draconux.free.fr/os_dev/linux0.01_download.html)






