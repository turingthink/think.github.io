#include <Arduino.h>
//定义蜂鸣器控制管脚
#define beep_pin  25
char g_i=0;

void setup() {
  pinMode(beep_pin, OUTPUT);//设置引脚为输出模式
}

void loop() {
  g_i = 1;
  digitalWrite(beep_pin,g_i);//引脚输出电平翻转
  delayMicroseconds(2000);//延时250us
  delay(100);
  g_i = 0;
  digitalWrite(beep_pin,g_i);//引脚输出电平翻转
  delayMicroseconds(2000);//延时250us
}
