def on_button_pressed_a():
    global vraag
    vraag += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

C = 0
B = 0
A = 0
vraag = 0
operator = True
Juist = "B"

def on_forever():
    global Juist
    if vraag > 3:
        Juist = "A"

