<template>
  <div>
    <!--    <NuxtRouteAnnouncer />-->
    <!--    <NuxtWelcome />-->
    <div class="bg-blue-500 text-white p-4 rounded">
      Hello, Tailwind CSS is working!
    </div>
    <Button>Click me</Button>
  </div>
  <div>
    <p>Текущая тема: {{ colorMode.preference }}</p>
    <button @click="toggleTheme">Switch Theme</button>

  </div>
  <div class="bg-prim text-white">
    Привет мир!
  </div>
  <Button
      variant="outline" @click="() => {
      toast('Event has been created', {
        description: 'Sunday, December 03, 2023 at 9:00 AM',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      })
    }"
  >
    Add to calendar
  </Button>
  <BeakerIcon class="size-6 text-blue-500" />

</template>
<script setup>
import { toast } from 'vue-sonner'
import { BeakerIcon } from '@heroicons/vue/24/solid'

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