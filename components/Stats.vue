<template>
  <section class="grid grid-cols-3 gap-3">
    <div
      class="bg-milo-light p-4 rounded-2xl border border-milo-dark/10 text-center shadow-sm"
    >
      <div class="text-milo-primary-dark mb-1 flex justify-center">
        <NuxtImg src="/milo/fire.png" width="30" />
      </div>
      <div class="font-extrabold text-lg text-milo-dark">2</div>
      <div
        class="text-[10px] uppercase tracking-wider text-gray-400 font-light"
      >
        Streak
      </div>
    </div>
    <div
      class="bg-milo-light p-4 rounded-2xl border border-milo-dark/10 text-center shadow-sm"
    >
      <div class="text-blue-500 mb-1 flex justify-center">
        <i data-lucide="trophy" class="w-5 h-5"></i>
      </div>
      <div class="font-extrabold text-lg text-gray-900">04</div>
      <div
        class="text-[10px] uppercase tracking-wider text-gray-400 font-light"
      >
        Goals
      </div>
    </div>
    <div
      class="bg-milo-light p-4 rounded-2xl border border-milo-dark/10 text-center shadow-sm"
    >
      <div class="text-purple-500 mb-1 flex justify-center">
        <NuxtImg src="/milo/book.svg" width="25" />
      </div>
      <div class="font-extrabold text-lg text-gray-900">84</div>
      <div
        class="text-[10px] uppercase tracking-wider text-gray-400 font-light"
      >
        Words
      </div>
    </div>
  </section>
</template>
