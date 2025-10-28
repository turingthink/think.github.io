# PWM

[[toc]]



## PWM的LED呼吸灯



<<< @/code/arduino_esp32/pwm/pwm.cpp{cpp}




## PWM的Beep蜂鸣器

```md
 * 接线说明：按键模块-->ESP32 IO
 *         LED模块-->ESP32 IO
 *         (D1-D4)-->(15,2,0,4)
 *
 *         BEEP-->ESP32 IO
 *         (BEEP)-->(16)

```



<<< @/code/arduino_esp32/pwm/beep.cpp{cpp}


