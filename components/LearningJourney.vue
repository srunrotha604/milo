<template>
  <section
    class="bg-white p-4 flex flex-col gap-4 rounded-lg border border-gray-100 shadow-sm"
  >
    <div class="flex flex-col gap-1">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-[18px]">Your Learning Journey</h1>
      </div>
      <p class="text-[12px] text-milo-dark/50 font-light">
        Flight attendant English
      </p>
    </div>
    <div class="flex flex-row gap-4 items-center">
      <div class="w-full bg-milo-dark/10 rounded-full h-2.5">
        <div
          class="bg-milo-primary-dark h-2.5 rounded-full"
          style="width: 15%"
        ></div>
      </div>
      <div class="flex items-center">
        <span class="text-xs font-bold text-milo-secondary">15%</span>
      </div>
    </div>
    <div>
      <button
        class="bg-milo-secondary flex flex-row gap-2 items-center rounded-lg text-milo-light px-2 py-2 font-medium text-[12px]"
      >
        Continue journey <ArrowRight :size="15" />
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ArrowRight } from 'lucide-vue-next'
</script>
