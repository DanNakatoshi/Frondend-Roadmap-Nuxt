<template>
  <div class="background">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style>
/* https://wweb.dev/resources/animated-css-background-generator/ */
@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000000;
  overflow: hidden;
}

.background span {
  width: 1vmin;
  height: 1vmin;
  border-radius: 1vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: move;
  animation-duration: 1;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.background span:nth-child(0) {
  color: #b5f2c4;
  top: 38%;
  left: 83%;
  animation-duration: 56s;
  animation-delay: -289s;
  transform-origin: 6vw 15vh;
  box-shadow: 2vmin 0 0.8209846918339243vmin currentColor;
}
.background span:nth-child(1) {
  color: #ffacac;
  top: 74%;
  left: 74%;
  animation-duration: 61s;
  animation-delay: -466s;
  transform-origin: -12vw 10vh;
  box-shadow: -2vmin 0 0.4582379739705782vmin currentColor;
}
.background span:nth-child(2) {
  color: #b5f2c4;
  top: 63%;
  left: 73%;
  animation-duration: 48s;
  animation-delay: -243s;
  transform-origin: -9vw -6vh;
  box-shadow: -2vmin 0 0.6989428252784302vmin currentColor;
}
.background span:nth-child(3) {
  color: #b5f2c4;
  top: 15%;
  left: 56%;
  animation-duration: 264s;
  animation-delay: -474s;
  transform-origin: -19vw -17vh;
  box-shadow: -2vmin 0 1.2239103034684844vmin currentColor;
}
.background span:nth-child(4) {
  color: #583c87;
  top: 12%;
  left: 26%;
  animation-duration: 194s;
  animation-delay: -490s;
  transform-origin: -8vw -20vh;
  box-shadow: 2vmin 0 0.255880627586474vmin currentColor;
}
.background span:nth-child(5) {
  color: #b5f2c4;
  top: 89%;
  left: 43%;
  animation-duration: 54s;
  animation-delay: -291s;
  transform-origin: 11vw 2vh;
  box-shadow: 2vmin 0 0.43205560144360766vmin currentColor;
}
.background span:nth-child(6) {
  color: #b5f2c4;
  top: 59%;
  left: 10%;
  animation-duration: 302s;
  animation-delay: -326s;
  transform-origin: -9vw 15vh;
  box-shadow: -2vmin 0 0.8193780285198977vmin currentColor;
}
.background span:nth-child(7) {
  color: #ffacac;
  top: 45%;
  left: 64%;
  animation-duration: 361s;
  animation-delay: -25s;
  transform-origin: 3vw -15vh;
  box-shadow: -2vmin 0 0.28688093388566904vmin currentColor;
}
.background span:nth-child(8) {
  color: #583c87;
  top: 31%;
  left: 97%;
  animation-duration: 470s;
  animation-delay: -180s;
  transform-origin: -23vw -19vh;
  box-shadow: 2vmin 0 1.1906589175832032vmin currentColor;
}
.background span:nth-child(9) {
  color: #ffacac;
  top: 63%;
  left: 63%;
  animation-duration: 303s;
  animation-delay: -157s;
  transform-origin: 0vw -21vh;
  box-shadow: -2vmin 0 0.9446116516731962vmin currentColor;
}
</style>
