<template>
  <div class="tooltip-wrapper">
    <div class="tooltip-postion">
      <div>menu1</div>
      <div>menu2</div>
      <div>menu3</div>
      <div>menu4</div>
    </div>
  </div>
</template>

<style lang="scss">
.tooltip-wrapper {
  position: relative;
  .tooltip-postion {
    transition: all 0.5s;
    opacity: 0;
    position: absolute;
    bottom: 90px;
    left: 0px;
    z-index: 101;
  }
}
</style>
