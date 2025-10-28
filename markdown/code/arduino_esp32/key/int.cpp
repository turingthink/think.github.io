#include <Arduino.h>

#define KEY_1 25
#define LED_1 15

int status = 0;

void IRAM_ATTR isr_key () {
  status = !status;
  digitalWrite(LED_1, digitalRead(LED_1) ^ 1);
}

void setup() {
  Serial.begin(115200);
  pinMode(KEY_1, INPUT_PULLUP); //设置引脚为输入上拉模式
  pinMode(LED_1, OUTPUT); //设置引脚为输出模式

  digitalWrite(LED_1,0);//引脚输出低电平

  attachInterrupt(digitalPinToInterrupt(KEY_1), isr_key, FALLING);
}

void loop() {
	
}

