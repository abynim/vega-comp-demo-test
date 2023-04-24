<script>
import { VegaTable, VegaFlex, VegaCard, VegaButtonLink, VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {
      dataSource: [
        {
          key: "1",
          employeeId: "1",
          name: "Employee 1",
          balance: 100
        },
        {
          key: "2",
          employeeId: "2",
          name: "Employee 2",
          balance: 300
        }
      ],
      editedData: null
    }
  },
  components: { VegaTable, VegaFlex, VegaCard, VegaButtonLink, VegaButton },
  methods: {
    confirmDialog(string, callback) {
      if (window.confirm(string)) {
        callback()
      }
    },
    printDataResult(data) {
      this.editedData = data
    },
    async onAddNew() {
      await this.$refs.tableRef.$el.addNewRow()
    },

    saveRow(index, record) {
      this.dataSource[index] = record
    },

    async onSaveRowData() {
      const rowData = await this.$refs.tableRef.$el.getRowsData()
      this.dataSource = rowData
      this.printDataResult(rowData)
    }
  }
}
</script>
<template>
  <VegaFlex direction="col">
    <VegaCard>
      <VegaTable
        ref="tableRef"
        :row-clickable="true"
        :columns="[
          {
            label: 'ID #',
            prop: 'employeeId',
            editable: true
          },
          {
            label: 'Name',
            prop: 'name',
            editable: true
          },
          {
            label: 'Balance',
            prop: 'balance',
            editable: true
          },
          {
            label: 'Actions',
            width: '120px',
            renderFormItem: (createElement, rowKey, record, index, { rowForm, isNewRow }) => {
              return createElement('div', {}, [
                createElement('vega-button-circle', {
                  variant: 'icon-only',
                  icon: 'checkmark',
                  onVegaClick: async () => {
                    this.$refs.tableRef.$el.saveEditRow(rowKey)
                    const data = await this.$refs.tableRef.$el.getRowData(rowKey)
                    saveRow(index, data)
                    printDataResult(data)
                  }
                }),
                createElement('vega-button-circle', {
                  variant: 'icon-only',
                  icon: 'close',
                  class: !isNewRow ? '' : 'v-hidden',
                  onVegaClick: () => {
                    this.$refs.tableRef.$el.stopRowEditMode(rowKey)
                  }
                }),
                createElement('vega-button-circle', {
                  variant: 'icon-only',
                  icon: 'delete-bin',
                  class: isNewRow ? '' : 'v-hidden',
                  danger: true,
                  onVegaClick: () => {
                    this.confirmDialog('Are you sure you want to delete this row?', () => {
                      this.$refs.tableRef.$el.removeRow(record.key)
                    })
                  }
                })
              ])
            },
            render: (h, rowKey) => {
              return h('div', {}, [
                h('vega-button-circle', {
                  variant: 'icon-only',
                  icon: 'edit-line',
                  onVegaClick: () => {
                    this.$refs.tableRef.$el.startRowEditMode(rowKey)
                  }
                }),
                h('vega-button-circle', {
                  variant: 'icon-only',
                  icon: 'delete-bin',
                  danger: true,
                  onVegaClick: async () => {
                    this.confirmDialog('Are you sure you want to delete this row?', async () => {
                      await this.$refs.tableRef.$el.removeRow(rowKey)
                    })
                  }
                })
              ])
            }
          }
        ]"
        :data-source="dataSource"
      />
      <div class="v-mt-size-12 v-font-p2-short v-text-primary">
        <VegaButtonLink
          size="small"
          icon="plus-sign"
          @vegaclick="onAddNew"
        >
          Add New
        </VegaButtonLink>
      </div>
    </VegaCard>
    <div class="v-mt-size-12">
      <vega-flex gap="size-8">
        <VegaButton
          size="small"
          @vegaclick="onSaveRowData"
        >
          Get All Rows Data & Save
        </VegaButton>
      </vega-flex>
    </div>
    <div class="v-mt-size-8 v-text-primary">
      <div class="v-font-field-label v-text-success">Saved Data:</div>
      <div class="v-font-field-label">
        {{ JSON.stringify(editedData, null, 2) }}
      </div>
    </div>
  </VegaFlex>
</template>
