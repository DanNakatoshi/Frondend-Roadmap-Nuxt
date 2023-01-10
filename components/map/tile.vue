<template>
  <!-- <span class="tile"> map </span> -->
  <!-- <span>side</span> -->
  <div class="ex1">
    <div class="cube">
      <div class="side front" ></div>
      <div class="side right"></div>
      <div class="side top" :class="tileTop">
        <slot></slot>
      </div>
      <!-- <div class="side back"></div> -->
      <!-- <div class="side left"></div> -->
      <!-- <div class="side bottom"></div> -->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const prop = defineProps(['tileTop'])
</script>
