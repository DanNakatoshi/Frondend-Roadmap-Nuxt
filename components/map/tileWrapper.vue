<template>
  <DialogCard ref="dialogCard" />
  <div
    v-show="isMounted"
    class="map-center"
    @mousedown.prevent="mouseDown"
    @mouseup.prevent="mouseUp"
    @mousemove.prevent="mouseMove"
  >
    <div class="tile-container" ref="map">
      <div>
        <MapTile class="tile-1" :menu="menu1">
          <img
            src="@/assets/icon/1-person.svg"
            alt="html"
            class="img-icon icon-active img-1"
          />
        </MapTile>
        <MapTile class="tile-2">
          <img
            src="@/assets/icon/2-internet.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-3">
          <img
            src="@/assets/icon/3-html.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-4">
          <img
            src="@/assets/icon/4-css.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-5">
          <img
            src="@/assets/icon/5-js.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-6">
          <img
            src="@/assets/icon/6-git.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-7">
          <img
            src="@/assets/icon/7-github.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-8">
          <img
            src="@/assets/icon/8-security.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-9">
          <img
            src="@/assets/icon/9-npm.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-10">
          <img
            src="@/assets/icon/10-sass.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-11">
          <img
            src="@/assets/icon/11-tool.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-12">
          <img
            src="@/assets/icon/12-react.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>

        <MapTile class="tile-13">
          <img
            src="@/assets/icon/13-jsx.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-14">
          <img
            src="@/assets/icon/14-test.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-15">
          <img
            src="@/assets/icon/15-auth.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-16">
          <img
            src="@/assets/icon/16-component.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-17">
          <img
            src="@/assets/icon/17-ts.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-18">
          <img
            src="@/assets/icon/18-user.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-19">
          <img
            src="@/assets/icon/19-server.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-20">
          <img
            src="@/assets/icon/20-static.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-21">
          <img
            src="@/assets/icon/21-graph.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-22">
          <img
            src="@/assets/icon/22-mobile.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-23">
          <img
            src="@/assets/icon/23-desktop.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-24">
          <img
            src="@/assets/icon/24-bonus.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
        <MapTile class="tile-25">
          <img
            src="@/assets/icon/25-keyboard.svg"
            alt="html"
            class="img-icon icon-active"
          />
        </MapTile>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const offset = ref(null);
const isDown = ref(false);
const map = ref(null);
const isMounted = ref(false);
onMounted(() => {
  (function centerMap() {
    map.value.style.left = "50%";
    map.value.style.right = "50%";
    isMounted.value = true;
  })();
});

function mouseDown(event) {
  isDown.value = true;

  offset.value = [
    map.value.offsetLeft - event.clientX,
    map.value.offsetTop - event.clientY,
  ];
}

function mouseUp(event) {
  isDown.value = false;
}

function mouseMove(event) {
  if (isDown.value) {
    map.value.style.left = event.clientX + offset.value[0] + "px";
    map.value.style.top = event.clientY + offset.value[1] + "px";
  }
}

// Dialog
const dialogCard = ref(null);
function openDialog(id) {
  dialogCard.value.isDialog = true;
}

const menu1 = ref({
  title: "はじめに",
  item: [
    {
      title: "動機の確認",
      isDone: false,
    },
    {
      title: "目標を設定",
      isDone: false,
    },
  ],
});
</script>
