var btn_red;
var btn_green;
var changed='no'

function setup() {
  createCanvas(400, 400); 

  btn_green = createButton('Green')
  btn_green.position(100,100)

  btn_red = createButton('Red')
  btn_red.position(195,100)

  btn_blue = createButton('Blue')
  btn_blue.position(105,150)

  btn_yellow = createButton('Yellow')
  btn_yellow.position(190,150)
  
  btn_pink = createButton('Pink')
  btn_pink.position(105,200)

  btn_cyan = createButton('Cyan')
  btn_cyan.position(190,200)

  btn_orange = createButton('Orange')
  btn_orange.position(105,250)

  btn_purple = createButton('Purple')
  btn_purple.position(190,250)

}

function draw() {

  if (changed==='no'){
    background('grey')
  }

  text('Click Button To Change',130,50)

  btn_green.mousePressed(chng_green)
  btn_red.mousePressed(chng_red)
  btn_blue.mousePressed(chng_blue)
  btn_yellow.mousePressed(chng_yellow)
  btn_pink.mousePressed(chng_pink)
  btn_cyan.mousePressed(chng_cyan)
  btn_orange.mousePressed(chng_orange)
  btn_purple.mousePressed(chng_purple)

}

function chng_green(){

  changed='yes'
  background('green')

}

function chng_red(){

  changed='yes'
  background('red')

}

function chng_blue(){

  changed='yes'
  background('blue')

}

function chng_yellow(){

  changed='yes'
  background('yellow')

}

function chng_pink(){

  changed='yes'
  background('pink')

}

function chng_cyan(){

  changed='yes'
  background('cyan')

}

function chng_orange(){

  changed='yes'
  background('orange')

}

function chng_purple(){

  changed='yes'
  background('purple')

}

