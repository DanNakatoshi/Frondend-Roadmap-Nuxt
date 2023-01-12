<template>
  <div class="app-container">
    <!-- <h1 class="app-title">フロントエンドエンジニアのためのロードマップ</h1> -->
    <MapTileWrapper />
  </div>
</template>

<script setup></script>

<style lang="scss">
.app-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  .app-title {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: rotateX(-60deg) rotateY(-30deg);
    font-size: 80px;
  }
}
</style>
