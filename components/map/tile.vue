<template>
  <div class="cube-container">
    <div class="cube">
      <div class="side front" ></div>
      <div class="side right"></div>
      <div class="side top" :class="tileTop">
        <slot></slot>
      </div>
 
    </div>
  </div>
</template>

<script setup>

const prop = defineProps(['tileTop'])
</script>
