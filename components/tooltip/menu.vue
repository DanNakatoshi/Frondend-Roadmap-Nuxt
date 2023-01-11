<template>
  <div class="tooltip-wrapper" v-if="prop.menu">
    <div class="tooltip-position">
      <div class="menu-title">
        {{ prop.menu.title }}
      </div>

      <div v-for="item, index in prop.menu.item" key="index">
        <div class="menu-item">
          <div class="menu-title">
            {{ item.title }}
          </div>
          <span>
            <img v-if="!item.isDone" src="@/assets/icon/square.svg" class="check-icon" @click.prevent="clickCheck(index)"/>
            <img v-if="item.isDone" src="@/assets/icon/square-check.svg" class="check-icon" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const prop = defineProps(["menu"]);

function clickCheck(index) {
  console.log(index)
}
</script>

<style lang="scss">
.tooltip-wrapper {
  position: relative;
  z-index: 101;
  .tooltip-position {
    width: max-content;
    flex-direction: column;
    transition: all 0.5s ease 0.4s;
    opacity: 0;
    position: absolute;
    bottom: 150px;
    left: 20px;
  }
}

.menu-title {
  font-family: inherit;
}

.menu-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 12px 15px;
  margin: 20px 0 0 0;
  background: rgba(74, 144, 226, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    background-color: rgb(74, 144, 226);
    transform: scale(1.1);
  }
  /* animation: vibrate-1 3s linear infinite both; */
}

.check-icon {
  width: 5rem;
  max-width: 60px;
  max-height: 60px;
  margin-left: 20px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
}

@keyframes vibrate-1 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-3px, 3px);
  }
  40% {
    transform: translate(-3px, -3px);
  }
  60% {
    transform: translate(3px, 3px);
  }
  80% {
    transform: translate(3px, -3px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
</style>
