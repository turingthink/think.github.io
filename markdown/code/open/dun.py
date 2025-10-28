from turtle import *

#1、先将画笔往下移动200步，以使得图形能够完整呈现
penup()       #抬笔
goto(0,-200)  #移动到指定为止
pendown()     #落笔

#2、画第一个圆形
color("red")  #设置第一个图形的颜色
speed(0)      #设置画笔的速度
begin_fill()  #开始填充
circle(200)   #画出第一个圆
end_fill()    #结束填充

#3、画第二个圆形
goto(0,-160) 
color("light grey")
begin_fill()
circle(160)
end_fill()

#4、画第三个圆形
goto(0,-120)
color("red")
begin_fill()
circle(120)
end_fill()

#5、画第四个圆形
goto(0,-90)
color("blue")
begin_fill()
circle(90)
end_fill()

#6、画五角星
goto(-85,27)        #先移动到指定为止（手动调整的位置）
color("light grey") #设置五角星的颜色
begin_fill()
for i in range(5):
    forward(65)
    left(72)
    forward(65)
    right(144)
end_fill()

hideturtle()
done()
