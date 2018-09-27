// B.frequency.value = 200
// B.start()
// osc.start(0);
// osc.frequency.value = 440
// osc.type = ["triangle", "square", "sine"]

const createSound = () => {
  var audioCtx = new (AudioContext || webkitAudioContext)();
  var osc = audioCtx.createOscillator()
  undefined
  osc.frequency.value = 440
  440
  osc.connect(audioCtx.destination)
  return osc
}

const notes = {
  lowC: 130.81,
  lowCSharp: 139,
  lowD: 146.83,
  lowDSharp: 156,
  lowE: 164.81,
  lowF: 173,
  lowFSharp: 185,
  lowG: 196,
  lowGSharp: 208,
  lowA: 220,
  lowASharp: 233,
  lowB: 246.94,
  c: 261.63
}

const A = createSound()
A.frequency.value = 0
A.start()

const S = createSound()
S.frequency.value = 0
S.start()

const D = createSound()
D.frequency.value = 0
D.start()

const F = createSound()
F.frequency.value = 0
F.start()

const G = createSound()
G.frequency.value = 0
G.start()

const H = createSound()
H.frequency.value = 0
H.start()

const J = createSound()
J.frequency.value = 0
J.start()

const K = createSound()
K.frequency.value = 0
K.start()

const L = createSound()
L.frequency.value = 0
L.start()

const W = createSound()
W.frequency.value = 0
W.start()

const E = createSound()
E.frequency.value = 0
E.start()

const T = createSound()
T.frequency.value = 0
T.start()

const Y = createSound()
Y.frequency.value = 0
Y.start()

const U = createSound()
U.frequency.value = 0
U.start()

const playNote = () => {
  window.addEventListener("keydown", e => {
    console.log(e.keyCode);

    if(e.keyCode === 87) {
      W.frequency.value = notes.lowCSharp
      document.querySelector(".c-sharp").id = "playing"
    }

    if(e.keyCode === 69) {
      E.frequency.value = notes.lowDSharp
      document.querySelector(".d-sharp").id = "playing"
    }

    if(e.keyCode === 84) {
      T.frequency.value = notes.lowFSharp
      document.querySelector(".f-sharp").id = "playing"
    }

    if(e.keyCode === 89) {
      Y.frequency.value = notes.lowGSharp
      document.querySelector(".g-sharp").id = "playing"
    }

    if(e.keyCode === 85) {
      U.frequency.value = notes.lowASharp
      document.querySelector(".a-shart").id = "playing"
    }

    if(e.keyCode === 65) {
      A.frequency.value = notes.lowC
      document.querySelector(".c").id = "playing"
    }

    if(e.keyCode === 83) {
      S.frequency.value = notes.lowD
      document.querySelector(".d").id = "playing"
    }

    if(e.keyCode === 68) {
      D.frequency.value = notes.lowE
      document.querySelector(".e").id = "playing"
    }

    if(e.keyCode === 70) {
      F.frequency.value = notes.lowF
      document.querySelector(".f").id = "playing"
    }

    if(e.keyCode === 71) {
      G.frequency.value = notes.lowG
      document.querySelector(".g").id = "playing"
    }

    if(e.keyCode === 72) {
      H.frequency.value = notes.lowA
      document.querySelector(".a").id = "playing"
    }

    if(e.keyCode === 74) {
      J.frequency.value = notes.lowB
      document.querySelector(".b").id = "playing"
    }

    if(e.keyCode === 75) {
      K.frequency.value = notes.c
      document.querySelector(".c-high").id = "playing"
    }

  })
}

const stopNote = () => {
  window.addEventListener("keyup", e => {

    if(e.keyCode === 87) {
      W.frequency.value = 0
      document.querySelector(".c-sharp").id = ""
    }

    if(e.keyCode === 69) {
      E.frequency.value = 0
      document.querySelector(".d-sharp").id = ""
    }

    if(e.keyCode === 84) {
      T.frequency.value = 0
      document.querySelector(".f-sharp").id = ""
    }

    if(e.keyCode === 89) {
      Y.frequency.value = 0
      document.querySelector(".g-sharp").id = ""
    }

    if(e.keyCode === 85) {
      U.frequency.value = 0
      document.querySelector(".a-sharp").id = ""
    }

    if(e.keyCode === 65) {
      A.frequency.value = 0
      document.querySelector(".c").id = ""
    }

    if(e.keyCode === 83) {
      S.frequency.value = 0
      document.querySelector(".d").id = ""
    }

    if(e.keyCode === 68) {
      D.frequency.value = 0
      document.querySelector(".e").id = ""
    }

    if(e.keyCode === 70) {
      F.frequency.value = 0
      document.querySelector(".f").id = ""
    }

    if(e.keyCode === 71) {
      G.frequency.value = 0
      document.querySelector(".g").id = ""
    }

    if(e.keyCode === 72) {
      H.frequency.value = 0
      document.querySelector(".a").id = ""
    }

    if(e.keyCode === 74) {
      J.frequency.value = 0
      document.querySelector(".b").id = ""
    }

    if(e.keyCode === 75) {
      K.frequency.value = 0
      document.querySelector(".c-high").id = ""
    }
  })
}

playNote()
stopNote()
