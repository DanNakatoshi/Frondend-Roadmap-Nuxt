<template>
  <div class="cube">
    <div class="side front"></div>
    <div class="side right"></div>
    <div class="side top" :class="tileTop">
      <slot></slot>
    </div>
    <div class="side bottom"></div>
    <!-- <TooltipMenu/> -->
  </div>
</template>

<script setup>
const prop = defineProps(["tileTop"]);
</script>
