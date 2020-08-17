<template>
  <div class="my-8 text-lg">Suspense Feature!</div>
  <ul class="list-decimal">
    <li v-for="(user, index) in users" :key="index">{{ user }}</li>
  </ul>
</template>

<script>
import { ref } from 'vue'
export default {
  async setup () {
    await sleep(2000)
    const users = await fetchUsers()

    return {
      users
    }
  }
}

async function fetchUsers () {
  const response = await (await fetch('http://localhost:3000/users')).json()

  return ref(response)
}

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

</script>
