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
  </div>
  <div class="app-container">
    <div class="title-container">
      <div class="titile-bg title-center">
        <h1>フロントエンド ロードマップ</h1>
      </div>
    </div>
  </div>
  <MapTileWrapper />
</template>

<script setup></script>

<style lang="scss">
.app-container {
  position: relative;
  .title-container {
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    z-index: 300;
    font-family: "NotoSansJP-Regular", "sans-serif";
    font-weight: 900;

    .titile-bg {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      color: rgb(32, 32, 32);
      background: #eeb6b6;
      animation: vibrate-1 5s linear infinite both;

    }

    .title-center {
      width: 600px;
      height: 80px;
      padding: 10px 20px;
      margin: 10px 15px;
      clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
      padding: 0 20px;
      font-size: 35px;
    }
  }
}

@keyframes vibrate-1 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes move {
  100% {
    transform: translate3d(0, 0, 5px) rotate(360deg);
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: linear-gradient(
    320deg,
    rgb(162, 192, 155) 0%,
    rgb(253, 255, 223) 100%
  );
  overflow: hidden;
}

.background span {
  width: 2vmin;
  height: 2vmin;
  border-radius: 2vmin;
  backface-visibility: hidden;
  position: absolute;
  animation: move;
  animation-duration: 9;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  z-index: 500;
}

.background span:nth-child(0) {
  color: #bcaed6;
  top: 52%;
  left: 81%;
  animation-duration: 47s;
  animation-delay: -191s;
  transform-origin: 18vw -24vh;
  box-shadow: 4vmin 0 1.4938783821644794vmin currentColor;
}
.background span:nth-child(1) {
  color: #62e458;
  top: 74%;
  left: 24%;
  animation-duration: 134s;
  animation-delay: -5s;
  transform-origin: -9vw 18vh;
  box-shadow: -4vmin 0 1.183812526805661vmin currentColor;
}
.background span:nth-child(2) {
  color: #62e458;
  top: 96%;
  left: 65%;
  animation-duration: 373s;
  animation-delay: -218s;
  transform-origin: -11vw 9vh;
  box-shadow: -4vmin 0 0.7339865947752879vmin currentColor;
}
.background span:nth-child(3) {
  color: #bcaed6;
  top: 82%;
  left: 85%;
  animation-duration: 93s;
  animation-delay: -216s;
  transform-origin: 25vw 11vh;
  box-shadow: 4vmin 0 1.0106005409278236vmin currentColor;
}
.background span:nth-child(4) {
  color: #ffadad;
  top: 80%;
  left: 80%;
  animation-duration: 234s;
  animation-delay: -366s;
  transform-origin: -13vw 9vh;
  box-shadow: 4vmin 0 1.2211045248166505vmin currentColor;
}
.background span:nth-child(5) {
  color: #ffadad;
  top: 59%;
  left: 27%;
  animation-duration: 368s;
  animation-delay: -169s;
  transform-origin: 18vw -18vh;
  box-shadow: -4vmin 0 0.6824099908290377vmin currentColor;
}
.background span:nth-child(6) {
  color: #62e458;
  top: 71%;
  left: 88%;
  animation-duration: 376s;
  animation-delay: -319s;
  transform-origin: -7vw 24vh;
  box-shadow: -4vmin 0 0.5162951544475163vmin currentColor;
}
.background span:nth-child(7) {
  color: #bcaed6;
  top: 93%;
  left: 14%;
  animation-duration: 177s;
  animation-delay: -9s;
  transform-origin: 19vw 11vh;
  box-shadow: 4vmin 0 0.9238083659659553vmin currentColor;
}
.background span:nth-child(8) {
  color: #ffadad;
  top: 49%;
  left: 32%;
  animation-duration: 107s;
  animation-delay: -3s;
  transform-origin: 5vw -6vh;
  box-shadow: 4vmin 0 0.5809025545249067vmin currentColor;
}
.background span:nth-child(9) {
  color: #bcaed6;
  top: 60%;
  left: 88%;
  animation-duration: 167s;
  animation-delay: -285s;
  transform-origin: -6vw -13vh;
  box-shadow: -4vmin 0 1.3989456314950435vmin currentColor;
}
.background span:nth-child(10) {
  color: #62e458;
  top: 92%;
  left: 10%;
  animation-duration: 148s;
  animation-delay: -202s;
  transform-origin: 16vw -10vh;
  box-shadow: 4vmin 0 1.023559333451179vmin currentColor;
}
.background span:nth-child(11) {
  color: #ffadad;
  top: 81%;
  left: 11%;
  animation-duration: 84s;
  animation-delay: -243s;
  transform-origin: 4vw 14vh;
  box-shadow: -4vmin 0 0.8634015390004499vmin currentColor;
}
</style>
