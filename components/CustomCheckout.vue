<script setup lang="ts">
const props = defineProps<{
  check: boolean
  size: number
  name?: string
}>()

const emit = defineEmits<{
  (e: 'update:check', value: boolean): void
}>()
</script>

<template>
  <label class="relative flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="check"
      :name="name"
      class="peer hidden"
      @change="
        emit('update:check', ($event.target as HTMLInputElement).checked)
      "
    />

    <div
      :class="[
        `w-${size} h-${size} border rounded-[4px] flex items-center justify-center`,
        check ? 'bg-[#005b52] border-[#005b52]' : 'border-[#005B52]',
      ]"
    >
      <svg
        v-if="check"
        class="w-3 h-3 text-white"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  </label>
</template>
