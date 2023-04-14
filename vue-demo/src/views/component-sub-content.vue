<script>
export default {
  name: 'ComponentSubContent',
  props: {
    subTitle: String,
    background: Boolean
  }
}
</script>

<template>
  <div class="v-mb-size-24">
    <div class="v-font-btn-label v-text-primary v-mb-size-12">
      {{ subTitle }}
    </div>
    <div class="v-mb-size-32">
      <div :class="background ? `v-bg-backdrop-popover v-p-size-24 v-rounded-12` : `v-px-size-12`">
        <div v-if="background" class="v-bg-primary v-p-size-24 v-rounded-12">
          <slot />
        </div>
        <div v-else><slot /></div>
      </div>
    </div>
  </div>
</template>
