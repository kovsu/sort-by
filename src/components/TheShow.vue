<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { now } from "@vueuse/shared";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { randomData, Tag } from "../composables/data.js";
import TheButton from "./TheButton.vue";

let storeTag = reactive<Tag[]>(
  localStorage.getItem("tag") ? JSON.parse(localStorage.getItem("tag")!) : []
);

const data = randomData(storeTag);
console.log(data);

const router = useRouter();
function back() {
  router.push("/");
}

let nowSelect = ref("All");
let showSelect = ref(false);

function change(index: number | string) {
  if (typeof index == "string") {
    nowSelect.value = "All";
  } else {
    nowSelect.value = storeTag[index].tag;
  }
}

const showData = computed(() => {
  if (nowSelect.value == "All") {
    return data;
  } else {
    return data.filter((item) => item.des.tag === nowSelect.value);
  }
});
</script>

<template>
  <div class="info">
    <TheButton @click="back"> cd .. </TheButton>
    <h1>All Data</h1>
    <p>
      There are all data that I made up. And I have a button to control that how
      I to show the data. So let's see the animation!
    </p>
  </div>
  <div class="filter">
    <p>now select:</p>
    <div class="filter_btn" @click="showSelect = !showSelect">
      <TheButton>{{ nowSelect }}</TheButton>
      <div class="items" v-show="showSelect">
        <div class="item" @click="change('All')">All</div>
        <div
          class="item"
          v-for="(item, index) in storeTag"
          :key="index"
          @click="change(index)"
        >
          {{ item.tag }}
        </div>
      </div>
    </div>
  </div>
  <TransitionGroup name="list" tag="ul" class="show">
    <li v-for="(item, index) in showData" :key="index">
      <div>
        {{ item.content }}
      </div>
      <i class="bg2" :style="{ background: item.des.color }"></i>
    </li>
  </TransitionGroup>
</template>

<style>
.info {
  width: 60vw;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.info button {
  margin-top: 1rem;
}

.info h1 {
  font-size: 2rem;
}

.info p {
  font-size: 1.6rem;
}

.filter {
  width: 60vw;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.filter p {
  font-size: 2rem;
}

.filter_btn {
  margin-left: 2rem;
  position: relative;
}

.filter_btn button {
  width: 15rem;
  text-align: left;
  font-weight: 500;
  font-size: 1.8rem;
}

.items {
  padding: 1rem 0;
  position: absolute;
  top: 4rem;
  left: 0;
  z-index: 1;
  width: 15rem;
  border-radius: 5px;
  background-color: #fff;
  border: 2px solid #000;
}

.item {
  cursor: pointer;
  font-size: 1.8rem;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  transition: all 0.2s;
}

.item:hover {
  background-color: rgb(193, 204, 252);
}

.show {
  width: 60vw;
  margin: 0 auto;
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.show li {
  position: relative;
  cursor: pointer;
}

.show li:hover div {
  transform: translate(2px, 2px);
}

.show li div {
  width: 20rem;
  margin: 1rem 2rem;
  height: 10rem;
  background: #fff;
  border: 2px solid #000;
  padding: 2rem;
  transition: all 0.3s;
}

.show li .bg2 {
  position: absolute;
  z-index: -1;
  top: 1.5rem;
  left: 2.5rem;
  width: 20rem;
  height: 10rem;
  padding: 2rem;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
