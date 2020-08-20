<template>
  <h1>Meus Todos</h1>
  <div @click="$emit('teste')">
    {{ todos }}
  </div>
</template>

<script>
import { data } from '../helpers/todo'
import { toRefs } from 'vue'
import Vue from 'vue'

export default {
  setup () {
    return {
      ...toRefs(data)
    }
  }
}
</script>
