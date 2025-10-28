#include <Arduino.h>

#define LED_1 15

int status = 0;

int pwm_value = 0;
int flag = 1;

//PWM初始化
//pin：引脚号
//chanel：PWM输出通道0-15
//freq：PWM输出频率，单位HZ
//resolution：PWM占空比的分辨率1-16，比如设置8，分辨率范围0-255
void pwm_init(int pin, int chanel, int freq, int resolution) {
  ledcSetup(chanel, freq, resolution);// PWM初始化
  ledcAttachPin(pin, chanel); // 绑定PWM通道到GPIO上
}

//PWM占空比设置
void pwm_set_duty(int chanel, int duty){
  ledcWrite(chanel,duty);// 改变PWM的占空比
}


void setup() {
  Serial.begin(115200);
  pinMode(LED_1, OUTPUT); //设置引脚为输出模式

  digitalWrite(LED_1,0); //引脚输出低电平


  pwm_init(LED_1,0,1000,8);
}

void loop() {
  if(flag){
    pwm_value++;
    if(pwm_value > 50) {
      delay(800);
      flag = 0;
    }
  } else {
    pwm_value--;
    if(pwm_value < 0) {
      delay(800);
      flag = 1;
    }
  }
  pwm_set_duty(0, pwm_value);
  delay(10);
}

