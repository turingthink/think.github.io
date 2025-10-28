import turtle #导入海龟库
turtle.color("red")

#画出左半部分爱心
turtle.left(45)
turtle.begin_fill()
turtle.forward(200)
turtle.circle(100,180)

#画出右半部分爱心
turtle.right(90)
turtle.circle(100,180)
turtle.forward(200)
turtle.end_fill()
turtle.hideturtle()
turtle.done()
