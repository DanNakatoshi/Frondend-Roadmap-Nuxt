<template>
  <div class="tile-container">

    <div>
      <MapTile class="tile-1" >
        <img src="@/assets/icon/html5.svg" alt="html" class="img-icon icon-active">
      </MapTile>
      <MapTile class="tile-2"/>
      <MapTile class="tile-3"/>
      <MapTile class="tile-4"/>
    </div>
    <div>
      <!-- <MapTile class=""/>
      <MapTile class=""/>
      <MapTile class=""/>
      <MapTile class=""/> -->
    </div>
    <!-- <div>
      <MapTile class="inactive-tile"/>
      <MapTile class="inactive-tile"/>
      <MapTile class="inactive-tile"/>
      <MapTile class="active-tile"/>
    </div>
    <div>
      <MapTile class="active-tile"/>
      <MapTile class="active-tile"/>
      <MapTile class="active-tile"/>
      <MapTile class="active-tile"/>
    </div> -->
  </div>


  <!-- <Button class="svg-btn">
    
    <img src="@/assets/icon/html5.svg" class="svg-inactive" style="width: 1rem"/>
  </Button>

  <Button type="button" class="svg-btn">
    <img alt="logo" src="@/assets/icon/html5.svg" style="width: 1.5rem"/>
</Button> -->
</template>

<script setup>
import { ref } from "vue";

const DialRef = ref(null);

const items = ref([
  {
    label: "Add",
    icon: "pi pi-pencil",
  },
  {
    label: "Update",
    icon: "pi pi-refresh",
  },
  {
    label: "Delete",
    icon: "pi pi-trash",
  },
  {
    label: "Upload",
    icon: "pi pi-upload",
  },
  {
    label: "Vue Website",
    icon: "pi pi-external-link",
  },
]);
</script>
