from turtle import *

line=["orange","yellow","green","cyan","blue","purple"]

penup()
goto(-240,-180)
pendown()
color("red")
pensize(30)
left(90)
circle(-250,180)

a = -210
b = -220
for i in line:
    penup()
    color(i)
    goto(a,-180)
    a += 30            # a = b + 3
    pendown()
    left(180)
    circle(b,180)
    b += 30            # b = b + 3
done()