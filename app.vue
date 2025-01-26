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
</template>
<script setup>

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