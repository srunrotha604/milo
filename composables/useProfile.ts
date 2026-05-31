import { UserRound, UserRoundPlus, UsersRound, Ban } from 'lucide-vue-next'

export const useProfile = () => {
  const progress = ref(25)
  const addProgress = () => {
    if (progress.value < 100) {
      progress.value += 10
      if (progress.value > 100) {
        progress.value = 100
      }
    }
  }
  const resetProgress = () => {
    progress.value = 0
  }
  const sampleListRequest = [
    { label: 'Friends', count: 20, id: 1, icon: UserRound },
    { label: 'Requests', count: 0, id: 3, icon: UserRoundPlus },
    { label: 'Groups', count: 12, id: 4, icon: UsersRound },
    { label: 'Blocks', count: 1, id: 5, icon: Ban },
  ]
  return { progress, addProgress, resetProgress, sampleListRequest }
}
