<script setup lang="ts"></script>

<template>
  <button>
    <div>
      <slot></slot>
    </div>
    <i class="bg"></i>
  </button>
</template>

<style scoped>
button {
  position: relative;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
}

button div {
  padding: 0.6rem 2rem;
  border-radius: 2rem;
  background: #fff;
  border: 2px solid #000;
  transform: translate(-6px, -4px);
  transition: all 0.5s;
}

button div:hover {
  transform: translate(-3px, -2px);
}

.bg {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  border-radius: 2rem;
  border: 2px solid #000;
  background: rgb(117, 117, 117);
}

html.dark .bg {
  background: #fff;
  border: 2px solid rgba(128, 128, 128, 0.5);
}

html.dark button {
  color: #000;
}

html.dark button div {
  color: #fff;
  background: #000;
  border: 2px solid rgba(128, 128, 128, 0.5);
}
</style>
