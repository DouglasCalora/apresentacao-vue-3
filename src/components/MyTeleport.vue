<template>
  <teleport to="#end-of-body" :disabled="disabled">
    <div>
      Deve aparecer no final do body
    </div>
  </teleport>
  <div>
    Deve aparecer no MEIO do body
  </div>
  <teleport to="#end-of-body">
    <div>
      Deve aparecer no final do body também
    </div>
  </teleport>
  <teleport to=".start-of-body">
    <div>
      Deve aparecer no começo do body
    </div>
  </teleport>
  <teleport to="[data-start-too]">
    <div>
      Deve aparecer no começo do body também
    </div>
  </teleport>
  <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" @click="disabled = !disabled">aparecer no final do body</button>
</template>

<script>
export default {
  data () {
    return {
      disabled: true
    }
  }
}
</script>
