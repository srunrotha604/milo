<template>
  <section
    class="bg-white p-4 flex flex-col gap-4 rounded-lg border border-gray-100 shadow-sm"
  >
    <div class="flex flex-col gap-[6px]">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col gap-[6px]">
          <h1 class="text-[18px] font-bold">2 Days Streak</h1>
          <p class="font-light text-milo-dark/50 text-[14px]">
            Nice! You're on the study streak.
          </p>
        </div>
        <div>
          <NuxtImg src="/milo/fire.png" width="40" />
        </div>
      </div>
      <div>
        <section>
          <div class="bg-white">
            <div class="flex items-center justify-center mb-4">
              <div class="flex gap-2">
                <button
                  class="p-1 hover:bg-gray-100 rounded-lg"
                  @click="prevMonth"
                >
                  <ChevronLeft class="w-4 h-4 text-gray-400" />
                </button>
                <span class="font-bold text-gray-700">
                  {{ monthYear }}
                </span>
                <button
                  class="p-1 hover:bg-gray-100 rounded-lg"
                  @click="nextMonth"
                >
                  <ChevronRight class="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
            <div
              class="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-gray-400 mb-2"
            >
              <span>S</span>
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>
            <div class="grid grid-cols-7 gap-2 text-center text-sm">
              <div
                v-for="(item, index) in calendarDays"
                :key="index"
                class="p-1 rounded-full"
                :class="[
                  item.day ? 'cursor-pointer' : '',
                  item.isToday
                    ? 'bg-milo-dark/20 text-milo-dark/50 font-light'
                    : 'text-milo-dark/50',
                ]"
              >
                {{ item.day }}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
interface CalendarDay {
  day: number | null
  isToday: boolean
}

const currentDate = ref(new Date())

const monthYear = computed(() => {
  return currentDate.value.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
})

const calendarDays = computed<CalendarDay[]>(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const today = new Date()
  const days: CalendarDay[] = []
  for (let i = 0; i < firstDay; i++) {
    days.push({
      day: null,
      isToday: false,
    })
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year

    days.push({
      day,
      isToday,
    })
  }

  return days
})

const prevMonth = () => {
  const date = new Date(currentDate.value)

  date.setMonth(date.getMonth() - 1)

  currentDate.value = date
}

const nextMonth = () => {
  const date = new Date(currentDate.value)

  date.setMonth(date.getMonth() + 1)

  currentDate.value = date
}
</script>
