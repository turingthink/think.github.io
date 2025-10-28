#include <Arduino.h>

#define KEY_1 25
#define LED_1 15

int status = 0;
int flag = 1;

void setup() {
  Serial.begin(115200);
  pinMode(KEY_1, INPUT_PULLUP); //设置引脚为输入上拉模式
  pinMode(LED_1, OUTPUT); //设置引脚为输出模式

  digitalWrite(LED_1,0);//引脚输出低电平
}

void loop() {
  Serial.println(digitalRead(KEY_1));
  delay(80);

  if(digitalRead(KEY_1) == 0) {
    if(flag) {
      flag = 0;
      status = !status;
      digitalWrite(LED_1,status); //引脚输出高电平
    }
  } else {
    flag = 1;
  }
}

