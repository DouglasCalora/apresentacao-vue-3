<template>
  <div class="home w-1/2 mx-auto">
     <!------------- composition API ------------------->
    <todo-options title="lista de tarefas com options API"></todo-options>

     <!------------- composition API ------------------->
    <todo-composition title="lista de tarefas com compositionapi"></todo-composition>

      <!------------------ SUSPENSE --------------------->
      <div v-if="error">
        {{ error }}
      </div>
      <suspense>
        <template #default>
          <list-users />
        </template>
        <template #fallback>
          <div>
            loading...
          </div>
        </template>
      </suspense>

    <!-------------- Multiple v-model ------------->
    <div class="my-8">
      <multi-model v-model:name="name" v-model:lastName="lastName" />
      <div class="mt-8">Nome: {{ name }}</div>
      <div>Sobrenome: {{ lastName }}</div>
    </div>

    <!-------------------- teleports ----------->
    <my-teleport />
    <!-- <div id="end-of-body"/> -->
  </div>
</template>

<script>
import TodoOptions from '@/components/TodoOptions'
import MultiModel from '@/components/MultiModel'
import MyTeleport from '@/components/MyTeleport'

import TodoComposition from '@/components/TodoComposition'

import ListUsers from '@/components/ListUsers'
import { onErrorCaptured, ref } from 'vue'

export default {
  name: 'Home',

  components: {
    // TodoOptions,
    // MultiModel,
    MyTeleport
    // ListUsers,
    // TodoComposition
  },

  setup () {
    const error = ref(null)
    const name = ref('')
    const lastName = ref('')

    onErrorCaptured(errors => error.value = errors)

    return {
      error,
      name,
      lastName
    }
  }
}
</script>
