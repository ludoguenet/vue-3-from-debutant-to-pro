<template>
  {{ todo }}
  <br>
  <button @click="id++">Suivant</button>
  <hr>
  {{ todo2 }}
  <br>
  <button @click="id2++">Suivant</button>
</template>

<script setup lang="ts">
import { useTodo } from "@/state";

const {
  id: id,
  todo: todo,
} = useTodo();

const {
  id: id2,
  todo: todo2,
} = useTodo();
</script>