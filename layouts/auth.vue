<!-- layouts/auth.vue -->

<template>
  <div class="auth-layout">
    <div class="auth-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// В этом лейауте мы можем также подключать компоненты, необходимые только для аутентификации
</script>

<style scoped>
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
}

.auth-container {
  background: white;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
}
</style>