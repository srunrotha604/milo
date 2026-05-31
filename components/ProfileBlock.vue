<template>
  <div class="flex flex-row items-center gap-4">
    <!-- profile  -->
    <div class="relative w-[70px] h-[70px]">
      <div
        class="absolute inset-0 rounded-full p-[2px]"
        :style="{
          background: `conic-gradient(#ffad55 ${progress}%, #e5e7eb ${progress}%)`,
        }"
      >
        <div class="w-full h-full rounded-full bg-white p-[2px]">
          <NuxtImg
            src="/milo/rotha_dev.jpg"
            class="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 bg-milo-dark/50 text-milo-light text-[10px] rounded-full px-2 py-[2px] z-10"
      >
        {{ progress }}%
      </div>
    </div>
    <div class="flex flex-col gap-1 flex-1">
      <div class="flex flex-col gap-1">
        <h1 class="font-bold text-[20px]">Srun Rotha</h1>
        <div
          class="hover:cursor-pointer flex flex-row items-center gap-1 border rounded-full w-max px-2 py-1"
        >
          <NuxtImg :src="'/milo/basic.svg'" :width="20" :height="20" />
          <p class="text-[12px] font-light">Upgrade</p>
          <ChevronRight class="w-[14px]" />
        </div>
      </div>
      <div class="flex flex-row gap-2">
        <div v-for="(value, index) in sampleListRequest" :key="value.id">
          <div class="flex flex-col items-center">
            <p class="text-[12px] font-bold">{{ value.count }}</p>
            <p class="text-[9px] font-bold text-milo-dark/50">
              {{ value.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        class="flex flex-row items-center gap-2 text-[12px] w-max rounded-full bg-milo-secondary text-milo-light px-3 py-1"
      >
        <SquarePen class="w-[14px]" />
        Edit
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SquarePen, ChevronRight } from 'lucide-vue-next'
const { progress, sampleListRequest } = useProfile()
</script>
