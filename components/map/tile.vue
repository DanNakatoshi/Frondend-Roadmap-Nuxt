<template>
  <div class="cube" @mouseover="showTooltip">
    <TooltipMenu :menu="menu"/>
    <div class="side front"></div>
    <div class="side right"></div>
    <div class="side top" :class="tileTop">
      <slot></slot>
    </div>
    <div class="side bottom"></div>
  </div>
</template>

<script setup>

const prop = defineProps(["tileTop", "menu"]);


</script>
