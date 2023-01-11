<template>
  <div class="cube">
    <div class="side front"></div>
    <div class="side right"></div>
    <div class="side top" :class="tileTop">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from "vue";

const prop = defineProps(["tileTop"]);
</script>
