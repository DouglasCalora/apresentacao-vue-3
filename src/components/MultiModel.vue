<template>
  <div class="my-8 text-lg">Multiple v-model Feature!</div>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Nome
    </label>
    <input v-model="modelName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="nome">
  </div>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2">
      Sobrenome
    </label>
    <input v-model="modelLastName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="sobrenome">
  </div>
</template>

<script>
import { computed, watch, ref, watchEffect } from 'vue'

export default {
  props: {
    name: {
      type: String,
      default: ''
    },

    lastName: {
      type: String,
      default: ''
    }
  },

  setup ({ name, lastName }, { emit }) {
    const modelName = ref(name)
    const modelLastName = ref(lastName)

    // sync não existe mais tururU
    emitModel(modelName.value, modelLastName.value)

    watch([modelName, modelLastName], ([nameValue, lastNameValue]) => {
      emitModel(nameValue,lastNameValue)
    })

    function emitModel (first, secound) {
      emit('update:name', first)
      emit('update:lastName', secound)
    }

    return {
      modelName,
      modelLastName
    }
  }
}
</script>
