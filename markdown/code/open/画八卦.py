import turtle

#画出黑色八卦
turtle.begin_fill()
turtle.circle(130,180)
turtle.circle(65,180)
turtle.circle(-65,180)
turtle.end_fill()

#画出白色八卦
turtle.circle(-130,180)

#画出白色八卦里的白圆
turtle.right(90)
turtle.forward(31)
turtle.color("white")
turtle.begin_fill()
turtle.circle(15)
turtle.end_fill()

#画出黑色八卦里的黑圆
turtle.penup()
turtle.forward(200)
turtle.pendown()
turtle.color("black")
turtle.begin_fill()
turtle.circle(15)
turtle.end_fill()

turtle.hideturtle()
turtle.done()
