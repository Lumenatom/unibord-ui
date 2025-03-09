<!--<template>-->
<!--  <div>-->
<!--    &lt;!&ndash;    <NuxtRouteAnnouncer />&ndash;&gt;-->
<!--    &lt;!&ndash;    <NuxtWelcome />&ndash;&gt;-->
<!--    <Button>Click me</Button>-->
<!--  </div>-->
<!--  <div>-->
<!--    <p>Текущая тема: {{ colorMode.preference }}</p>-->
<!--    <button @click="toggleTheme">Switch Theme</button>-->

<!--  </div>-->
<!--  <div class="bg-prim text-white">-->
<!--    Привет мир!-->
<!--  </div>-->
<!--  <Button-->
<!--      variant="outline" @click="() => {-->
<!--      toast('Event has been created', {-->
<!--        description: 'Sunday, December 03, 2023 at 9:00 AM',-->
<!--        action: {-->
<!--          label: 'Undo',-->
<!--          onClick: () => console.log('Undo'),-->
<!--        },-->
<!--      })-->
<!--    }"-->
<!--  >-->
<!--    Add to calendar-->
<!--  </Button>-->
<!--  <BeakerIcon class="size-6 text-blue-500" />-->
<!--</template>-->
<template>
  <div class="w-screen h-screen p-1">
    <div class=" w-full h-full border-2 border-customBlack dark:border-customLightGray rounded-base">
      <button @click="toggleTheme">Switch Theme</button>
    </div>
  </div>
</template>
<script setup>
import { toast } from 'vue-sonner'
import { BeakerIcon } from '@heroicons/vue/24/solid'
definePageMeta({
  layout: 'guest',
  title: 'Аоавдлыоадыв'
})
const colorMode = useColorMode()

const toggleTheme = () => {
  console.log("Current mode:", colorMode.preference)
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
onMounted(async () => {
  const config = useRuntimeConfig()
  const apiUrl = config.public.API_URL

  try {
    const response = await useFetch(`${apiUrl}/test`)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

</script>