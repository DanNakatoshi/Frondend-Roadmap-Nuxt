<template>
  <div class="tooltip-wrapper" v-if="prop.menu">
    <div class="tooltip-position">
      <div class="menu-title">
        {{ prop.menu.title }}
      </div>

      <div v-for="(item, index) in prop.menu.item" key="index">
        <div class="menu-item" @click.prevent="clickCheck(menu, index)">
          <div class="item-title">
            {{ item.title }}
          </div>
          <span>
            <img
              v-if="!item.isDone"
              src="@/assets/icon/square.svg"
              class="check-icon"
            />
            <img
              v-if="item.isDone"
              src="@/assets/icon/square-check.svg"
              class="check-icon"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function allChecked(menu) {
  return menu.item.every((obj) => {
    return Boolean(obj.isDone) === true;
  });
}

function clickCheck(menu, id) {
  menu.item[id].isDone = !menu.item[id].isDone;

  menu.item.every((obj) => {
    return obj.isDone === true;
  });
  allChecked(menu) ? (menu.isAllDone = true) : (menu.isAllDone = false);
}
const prop = defineProps(["menu"]);
</script>

<style lang="scss">
.tooltip-wrapper {
  transform: rotateX(0deg) rotateY(0deg);

  position: relative;
  z-index: 101;
  .tooltip-position {
    width: max-content;
    flex-direction: column;
    transition: all 0.5s ease 0.4s;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 100px;
    left: 20px;
  }
}

.menu-title {
  width: max-content;
  font-size: 40px;
  padding: 20px 30px 45px 30px;
  background: #eeb6b6;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 26% 75%, 17% 100%, 21% 75%, 0% 75%);

}

.item-title {
  font-size: 30px;
  padding: 20px;
}

.menu-item {
  align-items: center;
  display: flex;
  height: auto;
  width: max-content;
  padding: 10px 30px;
  margin: 20px 0 0 0;
  font-size: 20px;
  background: rgba(74, 144, 226, 0.7);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    background-color: rgb(74, 144, 226);
    transform: scale(1.1);
  }
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
</style>
