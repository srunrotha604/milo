<template>
  <div
    class="flex flex-col gap-2 bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
  >
    <div><h1 class="font-bold text-[18px]">Today's Mission</h1></div>
    <div class="flex flex-col gap-2">
      <div
        class="flex items-center gap-4"
        v-for="(item, index) in listMssion"
        :key="index"
      >
        <div
          class="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600"
        >
          <component :is="item.icon" :size="20" />
        </div>
        <div class="flex-1">
          <p class="text-sm font-medium text-milo-dark">{{ item.label }}</p>
          <p class="text-[11px] font-light text-milo-dark/50">{{ item.des }}</p>
        </div>
        <div class="">
          <CustomCheckout :check="item.completed" :name="item.des" :size="4" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { BookMarked, CircleCheckBig, Target } from 'lucide-vue-next'
const listMssion = [
  {
    label: 'Practice vocabulary',
    des: '10 words left',
    icon: BookMarked,
    completed: true,
  },
  {
    label: 'Complete 1 challenge',
    des: 'Win a quick duel',
    icon: CircleCheckBig,
    completed: false,
  },
  {
    label: 'Review flashcards',
    des: 'Kanji deck',
    icon: Target,
    completed: false,
  },
]
</script>
