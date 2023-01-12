<template>
  <div
    v-show="isMounted"
    class="map-center"
    @wheel="zoomInOut"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    @mousemove="mouseMove"
  >
    <div class="tile-container" ref="map">
      <div>
        <MapTile class="tile-1" :menu="menu1">
          <img
            src="@/assets/icon/1-person.svg"
            alt="html"
            class="img-icon img-1"
            :class="{ 'icon-active': menu1.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-2" :menu="menu2">
          <img
            src="@/assets/icon/2-internet.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu2.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-3" :menu="menu3">
          <img
            src="@/assets/icon/3-html.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu3.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-4" :menu="menu4">
          <img
            src="@/assets/icon/4-css.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu4.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-5" :menu="menu5">
          <img
            src="@/assets/icon/5-js.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu5.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-6" :menu="menu6">
          <img
            src="@/assets/icon/6-git.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu6.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-7" :menu="menu7">
          <img
            src="@/assets/icon/7-github.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu7.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-8" :menu="menu8">
          <img
            src="@/assets/icon/8-security.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu8.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-9" :menu="menu9">
          <img
            src="@/assets/icon/9-npm.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu9.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-10" :menu="menu10">
          <img
            src="@/assets/icon/10-sass.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu10.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-11" :menu="menu11">
          <img
            src="@/assets/icon/11-tool.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu11.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-12" :menu="menu12">
          <img
            src="@/assets/icon/12-react.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu12.isAllDone }"
          />
        </MapTile>

        <MapTile class="tile-13" :menu="menu13">
          <img
            src="@/assets/icon/13-jsx.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu13.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-14" :menu="menu14">
          <img
            src="@/assets/icon/14-test.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu14.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-15" :menu="menu15">
          <img
            src="@/assets/icon/15-auth.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu15.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-16" :menu="menu16">
          <img
            src="@/assets/icon/16-component.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu16.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-17" :menu="menu17">
          <img
            src="@/assets/icon/17-ts.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu17.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-18" :menu="menu18">
          <img
            src="@/assets/icon/18-user.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu18.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-19" :menu="menu19">
          <img
            src="@/assets/icon/19-server.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu19.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-20" :menu="menu20">
          <img
            src="@/assets/icon/20-static.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu20.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-21" :menu="menu21">
          <img
            src="@/assets/icon/21-graph.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu21.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-22" :menu="menu22">
          <img
            src="@/assets/icon/22-mobile.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu22.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-23" :menu="menu23">
          <img
            src="@/assets/icon/23-desktop.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu23.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-24" :menu="menu24">
          <img
            src="@/assets/icon/24-bonus.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu24.isAllDone }"
          />
        </MapTile>
        <MapTile class="tile-25" :menu="menu25">
          <img
            src="@/assets/icon/25-keyboard.svg"
            alt="html"
            class="img-icon"
            :class="{ 'icon-active': menu25.isAllDone }"
          />
        </MapTile>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "@/stores/store.js";
const storeData = useStore();

const menu1 = storeData.menu1;
const menu2 = storeData.menu2;
const menu3 = storeData.menu3;
const menu4 = storeData.menu4;
const menu5 = storeData.menu5;
const menu6 = storeData.menu6;
const menu7 = storeData.menu7;
const menu8 = storeData.menu8;
const menu9 = storeData.menu9;
const menu10 = storeData.menu10;
const menu11 = storeData.menu11;
const menu12 = storeData.menu12;
const menu13 = storeData.menu13;
const menu14 = storeData.menu14;
const menu15 = storeData.menu15;
const menu16 = storeData.menu16;
const menu17 = storeData.menu17;
const menu18 = storeData.menu18;
const menu19 = storeData.menu19;
const menu20 = storeData.menu20;
const menu21 = storeData.menu21;
const menu22 = storeData.menu22;
const menu23 = storeData.menu23;
const menu24 = storeData.menu24;
const menu25 = storeData.menu25;

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

let zoom = 1;
const ZOOM_SPEED = 0.1;
function zoomInOut(event) {
  if (event.deltaY > 0) {
    map.value.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
  } else {
    map.value.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
  }
}
</script>
