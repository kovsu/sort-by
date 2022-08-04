<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import TheButton from "./TheButton.vue";
import { Tag } from "../composables/data";
import { useRouter } from "vue-router";

let tag = ref("");
let storeTag = reactive<Tag[]>(
  localStorage.getItem("tag") ? JSON.parse(localStorage.getItem("tag")!) : []
);

watch(
  () => storeTag.length,
  () => {
    console.log(storeTag);
    localStorage.setItem("tag", JSON.stringify(storeTag));
  }
);

function AddTagToLS() {
  let flag = true;

  storeTag.forEach((item) => {
    if (item.tag == tag.value) {
      flag = false;
    }
  });

  if (tag.value && flag) {
    console.log(tag.value);
    let obj = {
      tag: tag.value,
      color: `rgb(${Math.floor(Math.random() * 180 + 75)}, ${Math.floor(
        Math.random() * 180 + 75
      )}, ${Math.floor(Math.random() * 180 + 75)})`,
    };
    storeTag.push(obj);
    tag.value = "";
  } else {
    alert("no input or tag already set");
  }
}

function delTagFromLS(name: Tag) {
  const index = storeTag.indexOf(name);
  storeTag.splice(index, 1);
}

const router = useRouter();

function goToShow() {
  router.push("/show");
}
</script>

<template>
  <main class="add">
    <div class="addTag">
      <input type="text" placeholder="add new tag" v-model="tag" />
      <TheButton @click="AddTagToLS"> Add </TheButton>
    </div>
    <h1>All Tags</h1>
    <ul class="tags">
      <li
        v-for="item in storeTag"
        :key="item.tag"
        :style="{ background: item.color }"
      >
        {{ item.tag }}
        <button class="minus" @click="delTagFromLS(item)">
          <font-awesome-icon icon="fa-regular fa-square-minus" />
        </button>
      </li>
    </ul>
    <TheButton @click="goToShow" class="btn"> Show Data </TheButton>
  </main>
</template>

<style>
.add {
  width: 60vw;
  padding: 2rem;
  margin: 2rem auto;
}

.addTag {
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.addTag input {
  width: 50%;
  padding: 0.8rem 1rem;
  outline: none;
  font-size: 1.4rem;
  border: 2px solid;
}

h1 {
  margin-top: 2rem;
}

.tags {
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.tags li {
  width: max-content;
  height: max-content;
  position: relative;
  font-size: 2rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  margin: 1rem 4rem 1rem 0;
}

.tags li button {
  position: absolute;
  top: 50%;
  right: -2.5rem;
  transform: translateY(-50%);
  cursor: pointer;
  margin-left: 2rem;
  background: transparent;
  outline: none;
  border: none;
  font-size: 1em;
}

.btn {
  margin-top: 2rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
