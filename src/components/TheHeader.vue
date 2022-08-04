<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import { isDark } from "../composables/dark";

const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="header">
    <div class="logo">
      <p>Sort By</p>
    </div>
    <div class="operation">
      <a href="https://github.com/kovsu/sort-by" target="_blank">
        <font-awesome-icon icon="fa-brands fa-github" />
      </a>
      <button @click="toggleDark()">
        <font-awesome-icon v-if="!isDark" icon="fa-solid fa-sun" />
        <font-awesome-icon v-else icon="fa-solid fa-moon" />
      </button>
    </div>
  </header>
</template>

<style>
.header {
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
}

.header .logo {
  font-size: 3rem;
  letter-spacing: 5px;
  font-family: "Square Peg", cursive;
}

.operation {
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.operation a {
  color: inherit;
}

.operation button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 1em;
}
</style>
