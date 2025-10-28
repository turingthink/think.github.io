from turtle import *

speed(1)

penup()
goto(0, -100)
pendown()

color("red")
begin_fill()

left(45)
forward(200)
circle(100, 180)

right(90)

circle(100, 180)
forward(200)

end_fill()
hideturtle()

mainloop()
