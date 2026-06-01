<template>
  <div class="rounded-lg p-4 text-white border">
    <div class="flex justify-between items-start mb-4">
      <div>
        <h2 class="font-semibold text-lg text-black">Flashcard Review</h2>
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <p class="text-[16px] text-milo-dark">IELTS 3-4 Family & Friends</p>
      <div class="flex flex-row gap-4 items-center">
        <div class="flex flex-row gap-4 items-center flex-1">
          <div class="w-full bg-milo-dark/10 rounded-full h-2.5">
            <div
              class="bg-milo-secondary h-2.5 rounded-full"
              style="width: 100%"
            ></div>
          </div>
          <div class="flex items-center">
            <span class="text-xs font-bold text-milo-secondary">100%</span>
          </div>
        </div>
        <div
          class="flex flex-row items-center bg-milo-secondary rounded-md text-white"
        >
          <button class="text-[14px] px-2 py-1 font-light">Review</button>
        </div>
      </div>
    </div>
    <button
      class="w-full flex flex-row justify-center items-center gap-2 bg-white text-milo-secondary text-[14px] py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors"
    >
      View all <ArrowRight :size="18" />
    </button>
  </div>
</template>
<script lang="ts" setup>
import { ArrowRight } from 'lucide-vue-next'
</script>
