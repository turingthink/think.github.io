#include <Arduino.h>

#define LED_1 15

int status = 0;

hw_timer_t *timer0 = NULL;

//定时器中断函数
void time0_isr(void) {
  status = !status;
  digitalWrite(LED_1, status);
}

//定时器初始化
//per：定时时间，单位us
void timeInit(int per) {
  /* timerBegin：初始化定时器指针
    第一个参数：设置定时器0（一共有四个定时器0、1、2、3）
    第二个参数：80分频（设置APB时钟，ESP32主频80MHz），80则时间单位为1Mhz即1us，1000000us即1s。
    第三个参数：计数方式，true向上计数 false向下计数
 */
  timer0 = timerBegin(0, 80, true);
  /* timerAlarmWrite：配置报警计数器保护值（就是设置时间）
     第一个参数：指向已初始化定时器的指针
     第二个参数：定时时间，这里为500000us  意思为0.5s进入一次中断
     第三个参数：是否重载，false定时器中断触发一次  true：死循环
  */
  timerAlarmWrite(timer0, per, true);
  /* timerAttachInterrupt：绑定定时器
     第一个参数：指向已初始化定时器的指针
     第二个参数：中断服务器函数
     第三个参数：true边沿触发，false电平触发
  */
  timerAttachInterrupt(timer0, &time0_isr, true); 
  timerAlarmEnable(timer0);//启用定时器
  //timerDetachInterrupt(timer0);//关闭定时器
}

void setup() {
  Serial.begin(115200);
  pinMode(LED_1, OUTPUT); //设置引脚为输出模式

  digitalWrite(LED_1,0); //引脚输出低电平

  timeInit(500000);
}

void loop() {
}

