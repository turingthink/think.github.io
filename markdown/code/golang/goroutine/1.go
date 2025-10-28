package main

import (
	"fmt"
	"runtime"
	"sync"
	"time"
)

var wg sync.WaitGroup

func test() {
	sum := 10
	for i := 0; i < sum; i++ {
		fmt.Println("test执行: ", i)
		time.Sleep(time.Microsecond * 1000)
	}
	wg.Done()
}

func main() {
	count := 5
	cpuNum := runtime.NumCPU()
	runtime.GOMAXPROCS(cpuNum)
	fmt.Println("cpuNum: ", cpuNum)
	go test()
	for i := 0; i < count; i++ {
		fmt.Println("Main执行: ", i)
		time.Sleep(time.Microsecond * 1000)
	}
	wg.Wait()
	fmt.Println("Main执行完毕")
}
