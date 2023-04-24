<script>
import { VegaTable, VegaFlex } from "@heartlandone/vega-vue"

export default {
  data() {
    return {
      clickedRowRecord: null
    }
  },
  components: { VegaTable, VegaFlex },
  methods: {
    onRowClick(e) {
      this.clickedRowRecord = e.detail
    }
  }
}
</script>
<template>
  <VegaFlex direction="col">
    <VegaTable
      ref="table"
      :row-clickable="true"
      :columns="[
        {
          label: 'Date',
          prop: 'date'
        },
        {
          label: 'Amount',
          prop: 'amount'
        },
        {
          label: 'Balance',
          prop: 'balance'
        }
      ]"
      :data-source="[
        {
          key: '1',
          date: '01/01/2022',
          amount: 100,
          balance: '$100',
          status: 'In Progress'
        },
        {
          key: '2',
          date: '01/02/2022',
          amount: 300,
          balance: '$200',
          status: 'In Progress'
        },
        {
          key: '3',
          date: '01/03/2022',
          amount: 400,
          balance: '$300',
          status: 'Not Started'
        },
        {
          key: '4',
          date: '01/04/2022',
          amount: 200,
          balance: '$400',
          status: 'Pending'
        }
      ]"
      @vegarowclick="onRowClick"
    />
    <div class="v-bg-primary v-text-primary">
      <p class="v-font-h4">Try to click a row</p>

      <div v-if="clickedRowRecord">
        <label class="v-font-field-label">Clicked Row Record:</label>
        <p class="v-font-p2-short v-text-primary">
          {{ JSON.stringify(clickedRowRecord.record) }}
        </p>
        <label class="v-font-field-label">Clicked Row Index:</label>
        <p class="v-font-p2-short v-text-primary">
          {{ clickedRowRecord.index }}
        </p>
      </div>
    </div>
  </VegaFlex>
</template>
