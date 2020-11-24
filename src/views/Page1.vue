<template>
  <div class="page1">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'Page2', params: { id: 1234 } }"
      >Navigate to Page2</router-link
    >
  </div>
</template>
s
