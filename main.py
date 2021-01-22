def on_button_pressed_a():
    global speler, Antwoord
    while begin:
        speler = A
    Antwoord = "A"

def on_button_pressed_ab():
    global speler, Antwoord
    while begin:
        speler = C
    Antwoord = "C"
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global speler, Antwoord
    while begin:
        speler = B
    Antwoord = "B"
input.on_button_pressed(Button.B, on_button_pressed_b)

Antwoord = ""
speler = 0
begin = False
A = 0
B = 0
C = 0
C = 0
B = 0
A = 0
Juist = "B"
Quiz = False
begin = True
basic.pause(10000)
begin = False
Quiz = True
Vraag = 0
punt = 0

while Quiz:
    Vraag = 1
    if Vraag == 1:
        while Vraag == 1:
            if input.button_is_pressed(Button.B):
                punt = punt + 1
                basic.show_string("Goed!")
                while Vraag == 1:
                    basic.pause(100)
            elif input.button_is_pressed(Button.A):
                basic.show_string("Fout :(")
                while Vraag == 1:
                    basic.pause(100)
    elif Vraag == 2:
        if input.button_is_pressed(Button.B):
            punt += 1
            while Vraag == 2:
                basic.pause(100)
        else:
            while Vraag == 2:
                basic.pause(100)
    elif False:
        pass
    elif False:
        pass
    else:
        pass

def on_forever():
    global Vraag
    basic.pause(5000)
    Vraag = Vraag + 1
basic.forever(on_forever)