<template>
  <section
    class="bg-gradient-to-br from-milo-primary-dark to-milo-primary rounded-lg p-4 text-white shadow-lg shadow-orange-200"
  >
    <div class="flex justify-between items-start mb-4">
      <div>
        <h2 class="font-semibold text-lg">Continue Learning</h2>
        <p class="text-milo-light text-[12px] font-light">{{ chapter }}</p>
      </div>
      <div class="bg-milo-dark/20 font-light px-2 py-1 rounded text-xs">
        {{ left_time }}
      </div>
    </div>
    <button
      class="w-full bg-white text-milo-primary-dark text-[14px] py-2 rounded-lg font-bold hover:bg-orange-50 transition-colors"
    >
      Resume Session
    </button>
  </section>
</template>
<script lang="ts" setup>
defineProps({
  chapter: {
    type: String,
    default: 'Japanese A2',
  },
  left_time: {
    type: String,
    default: '10 min left',
  },
})
</script>
