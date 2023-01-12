<template>
  <div class="app-container">
    <div class="title-container">
      <div class="titile-bg title-left">
        <p>マップをコンプリートしよう</p>
      </div>
      <div class="titile-bg title-center">
        <h1>フロントエンド　ロードマップ</h1>
      </div>
      <div class="titile-bg title-right">
        <p>マウスで移動しよう</p>
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
    }

    .title-left {
      width: 350px;
      height: 50px;
      clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
    }
    .title-center {
      width: 700px;
      height: 100px;
      clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
      padding: 0 20px;
      font-size: 35px;
    }
    .title-right {
      width: 350px;
      height: 50px;
      clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
    }
  }
}
</style>
