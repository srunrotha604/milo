<template>
  <div
    v-if="chatToggle"
    class="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-100 flex flex-col z-50 overflow-hidden"
  >
    <div
      class="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50"
    >
      <div class="flex flex-row gap-2 items-center">
        <NuxtImg src="/milo/harison.jpg" class="w-6 h-6 border rounded-full" />
        <h3 class="font-bold text-milo-dark">Tony Harrison</h3>
      </div>
      <div class="flex items-center gap-2">
        <button class="text-gray-500 hover:text-gray-800">
          <Maximize2 :size="20" />
        </button>
        <button @click="chatWindow" class="text-gray-500 hover:text-gray-800">
          <X :size="20" />
        </button>
      </div>
    </div>
    <div class="flex-1 p-4 overflow-y-auto space-y-4">
      <div
        class="bg-milo-dark/10 p-3 rounded-lg rounded-bl-none text-sm text-gray-700 max-w-[80%]"
      >
        Hi! Need help with your Japanese lesson?
      </div>
      <div
        class="bg-milo-secondary p-3 rounded-lg rounded-br-none text-sm text-white max-w-[80%] ml-auto"
      >
        I'm stuck on Kanji, can you help?
      </div>
    </div>
    <div class="p-3 border-t border-gray-100 flex gap-2">
      <input
        type="text"
        placeholder="Type a message..."
        class="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button class="text-milo-dark/50 rounded-lg">
        <Send />
      </button>
    </div>
  </div>

  <button
    @click="chatWindow"
    class="fixed bottom-6 right-4 bg-milo-secondary text-white p-4 rounded-full shadow-lg transition-all z-50"
  >
    <MessageSquareMore :size="20" />
  </button>
</template>
<script lang="ts" setup>
import { MessageSquareMore, Send, X, Maximize2 } from 'lucide-vue-next'
const chatToggle = ref(false)
const chatWindow = () => {
  chatToggle.value = !chatToggle.value
}
</script>
