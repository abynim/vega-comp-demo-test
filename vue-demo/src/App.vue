<script>
import { RouterLink, RouterView } from 'vue-router'
import { VegaGrid, VegaCard } from '@heartlandone/vega-vue'

export default {
  name: 'App',
  data() {
    return {
      activeComponent: null,
      links: [
        { ref: 'accordion', title: 'Accordion' },
        { ref: 'app-footer', title: 'App Footer' },
        { ref: 'badge', title: 'Badge' },
        { ref: 'banner', title: 'Banner' },
        { ref: 'button', title: 'Button' },
        { ref: 'button-circle', title: 'Button Circle' },
        { ref: 'button-link', title: 'Button Link' },
        { ref: 'carousel', title: 'Carousel' },
        { ref: 'checkbox', title: 'Checkbox' },
        { ref: 'chip', title: 'Chip' },
        { ref: 'color-picker', title: 'Color Picker' },
        { ref: 'combo-box', title: 'Combo Box' },
        { ref: 'counter-badge', title: 'Counter Badge' },
        { ref: 'date-picker', title: 'Date Picker' },
        { ref: 'dropdown', title: 'Dropdown Menu' },
        { ref: 'icon', title: 'Icon' },
        { ref: 'image-uploader', title: 'Image Uploader' },
        { ref: 'input-field', title: 'Input Field' },
        { ref: 'input-credit-card', title: 'Input Credit Card' },
        { ref: 'item-toggle', title: 'Item Toggle' },
        { ref: 'modal', title: 'Modal' },
        { ref: 'loading-indicator', title: 'Loading Indicator' },
        { ref: 'page-notification', title: 'Page Notification' },
        { ref: 'pagination', title: 'Pagination' },
        { ref: 'progress-tracker', title: 'Progress Tracker' },
        { ref: 'popover', title: 'Popover' },
        { ref: 'radio-button', title: 'Radio Button' },
        { ref: 'select', title: 'Select' },
        { ref: 'sidebar-navigation', title: 'Sidebar Navigation' },
        { ref: 'stepper', title: 'Stepper' },
        { ref: 'tab-group', title: 'Tab Group' },
        { ref: 'table', title: 'Table' },
        { ref: 'text-area', title: 'Text Area' },
        { ref: 'time-picker', title: 'Time Picker' },
        { ref: 'toggle-switch', title: 'Toggle Switch' },
        { ref: 'tooltip', title: 'Tooltip' }
      ]
    }
  },
  components: {
    RouterLink,
    RouterView,
    VegaCard,
    VegaGrid
  },
  methods: {
    setCurrentComponent(component) {
      const params = this.$route.params
      this.activeComponent = component || params.component
      console.log(this.activeComponent)
    }
  },
  mounted() {
    this.setCurrentComponent()
  },
  updated() {
    this.setCurrentComponent()
  }
}
</script>

<template>
  <VegaGrid :column="{ default: 1, S: 1, L: 5 }" row="1" gap="size-0">
    <div v-if="activeComponent === 'banner-with-sticky-header-iframe'"></div>
    <div v-else>
      <VegaCard padding="size-0" background-color="bg-page" class="sidebar">
        <div class="v-font-h3 v-text-primary v-py-size-12 v-px-size-32 header v-border-input-field">
          Components
        </div>
        <nav>
          <ul class="v-px-size-32 v-py-size-12">
            <li v-for="link in links" :key="link.ref">
              <RouterLink
                :to="'/components/' + link.ref"
                class="v-font-field-label-em v-text-primary"
                :class="activeComponent === link.ref ? 'v-bg-action v-text-white' : ''"
                @click="setCurrentComponent(link.ref)"
                >{{ link.title }}</RouterLink
              >
            </li>
          </ul>
        </nav>
      </VegaCard>
    </div>
    <VegaCard style="grid-column: 2 / span 5" class="v-p-size-24 page-content">
      <RouterView :activeComponent="activeComponent" />
    </VegaCard>
  </VegaGrid>
</template>

<style scope>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
.sidebar {
  border-radius: 0 !important;
  min-height: 100vh;
}
.sidebar .header {
  border-width: 0 !important;
  border-bottom-width: 1px !important;
  font-weight: bold;
}
.sidebar ul {
  margin: 0;
  list-style-type: none;
}
.sidebar ul li a {
  text-decoration: none;
  display: block;
  padding: 5px 15px;
  border-radius: 6px;
}
.sidebar ul li a.active {
  text-decoration: none;
}
.page-content {
  border-radius: 0 !important;
}
</style>
