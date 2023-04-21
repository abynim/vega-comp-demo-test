<script>
export default {
  name: "ComponentContent",
  props: {
    title: String
  }
}
</script>

<template>
  <div>
    <div class="v-font-h4 v-text-primary v-mb-size-24">
      {{ title }}
    </div>
    <div class="v-mb-size-24"><slot /></div>
  </div>
</template>
