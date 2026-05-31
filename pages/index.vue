<template>
  <div class="p-4 flex flex-col gap-4">
    <div class="">
      <ProfileBlock />
    </div>
    <div>
      <div class="flex flex-row gap-2">
        <NuxtImg src="/milo/waving-hand.svg" class="w-[30px]" />
        <h1 class="font-bold text-[20px]">Welcome back, Rotha</h1>
      </div>
      <div>
        <p class="text-milo-dark/50 text-[12px] font-light">
          Ready for today's Japanese practice?
        </p>
      </div>
    </div>
    <div>
      <ContinueLearning :chapter="'Japanese A2'" :left_time="'10 min left'" />
    </div>
    <div>
      <LearningJourney />
    </div>
  </div>
  <Chat />
</template>
<script lang="ts" setup></script>
