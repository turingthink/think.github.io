#include <Arduino.h>

//LED管脚定义
#define led1_pin  15

//DHT11管脚定义
#define dht11_pin   27

#define DHT11_DQ_LOW    digitalWrite(dht11_pin, LOW)
#define DHT11_DQ_HIGH   digitalWrite(dht11_pin, HIGH)
#define DHT11_READ      digitalRead(dht11_pin)

#define DHT11_MODE_IN   pinMode(dht11_pin, INPUT_PULLUP)
#define DHT11_MODE_OUT  pinMode(dht11_pin, OUTPUT)


//类型重定义
typedef unsigned char u8;
typedef unsigned int u16;
typedef unsigned long u32;

u8 temp;        
u8 humi;



//复位DHT11
void DHT11_Rst()     
{                 
  DHT11_MODE_OUT;   //SET OUTPUT
  DHT11_DQ_LOW;   //拉低DQ
  delay(20);     //拉低至少18ms
  DHT11_DQ_HIGH;   //DQ=1 
  delayMicroseconds(30);       //主机拉高20~40us
}

//等待DHT11的回应
//返回1:未检测到DHT11的存在
//返回0:存在
u8 DHT11_Check()      
{   
  u8 retry=0;
  DHT11_MODE_IN;//SET INPUT  
  while (DHT11_READ&&retry<100)//DHT11会拉低40~50us
  {
    retry++;
    delayMicroseconds(1);
  };   
  if(retry>=100)return 1;
  else retry=0;
    while (!DHT11_READ&&retry<100)//DHT11拉低后会再次拉高40~50us
  {
    retry++;
    delayMicroseconds(1);
  };
  if(retry>=100)return 1;     
  return 0;
}

//从DHT11读取一个位
//返回值：1/0
u8 DHT11_Read_Bit(void)        
{
  u8 retry=0;
  while(DHT11_READ&&retry<100)//等待变为低电平 12-14us 开始
  {
    retry++;
    delayMicroseconds(1);
  }
  retry=0;
  while(!DHT11_READ&&retry<100)//等待变高电平   26-28us表示0,116-118us表示1
  {
    retry++;
    delayMicroseconds(1);
  }
  delayMicroseconds(40);//等待40us
  if(DHT11_READ)return 1;
  else return 0;       
}

//从DHT11读取一个字节
//返回值：读到的数据
u8 DHT11_Read_Byte(void)    
{        
  u8 i,dat;
  dat=0;
  for (i=0;i<8;i++) 
  {
      dat<<=1; 
      dat|=DHT11_Read_Bit();
    }               
    return dat;
}

//从DHT11读取一次数据
//temp:温度值(范围:0~50°)
//humi:湿度值(范围:20%~90%)
//返回值：0,正常;1,读取失败
u8 DHT11_Read_Data(u8 *temp,u8 *humi){        
  u8 buf[5];
  u8 i;
  DHT11_Rst();
  if(DHT11_Check()==0)
  {
    for(i=0;i<5;i++)//读取40位数据
    {
      buf[i]=DHT11_Read_Byte();
    }
    if((buf[0]+buf[1]+buf[2]+buf[3])==buf[4])
    {
      *humi=buf[0];
      *temp=buf[2];
    }
    
  }else return 1;
  return 0;     
}

//DHT11初始化 
//返回0：初始化成功，1：失败
u8 DHT11_Init(void){
  DHT11_Rst();
  return DHT11_Check();
}


void led_init(void)
{
  pinMode(led1_pin, OUTPUT);//设置引脚为输出模式
}



void setup(){
  Serial.begin(115200);
  while(DHT11_Init())  //检测是否纯在
  {
    Serial.printf("DHT11 Check Error!\r\n");
    delay(500);    
  }
  Serial.printf("DHT11 Check OK!\r\n");
}

void loop(){
  DHT11_Read_Data(&temp, &humi);
  Serial.printf("温度=%d°C  湿度=%d%%RH\r\n",temp,humi);
  delay(2000);
}

