<template>
  <div
    class="flex flex-col items-center justify-center rounded-md border p-4 bg-milo-secondary/20 shadow-lg"
  >
    <div class="flex flex-col gap-2 items-center justify-center">
      <img :src="icon" alt="trophy" class="icon" :class="'w-7 h-7'" />
      <div class="flex flex-col items-center justify-center">
        <p class="font-medium">{{ title }}</p>
        <h5 class="font-medium">{{ value }}</h5>
      </div>
      <button
        class="bg-milo-light font-medium px-3 py-1 text-[14px] rounded-md text-milo-secondary"
      >
        {{ action_title }} <ArrowRight class="w-4 h-4 inline-block ml-1" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ArrowRight } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  action_title: {
    type: String,
    required: false,
  },
})
</script>
