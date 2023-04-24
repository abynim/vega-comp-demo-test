<script>
import { VegaTable, VegaFlex, VegaCard, VegaButtonLink, VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {
      editedData: null,
      employeeList: [
        {
          employeeId: "1",
          name: "Employee 1",
          role: ["1"]
        },
        {
          employeeId: "2",
          name: "Employee 2",
          role: ["2"]
        },
        {
          employeeId: "3",
          name: "Employee 3",
          role: ["0"]
        },
        {
          employeeId: "4",
          name: "Employee 4",
          role: ["1"]
        }
      ],
      dataSource: [
        {
          key: "1",
          employeeId: "1",
          name: "Employee 1",
          date: "01/01/2022",
          amount: 100,
          balance: 100,
          status: 1,
          role: ["1"],
          desc: "Test text description",
          address: "New_York_No._1_Lake_Park",
          time: "23:35",
          createAt: "01/01/2023",
          notifications: true
        },
        {
          key: "3",
          employeeId: "3",
          name: "Employee 3",
          date: "01/03/2022",
          amount: 400,
          balance: 300,
          status: 1,
          role: ["1", "2"],
          desc: "Test text description Test text description Test text description",
          address: "New York No. 3 Lake Park",
          createAt: "01/01/2023"
        }
      ]
    }
  },
  components: { VegaTable, VegaFlex, VegaCard, VegaButtonLink, VegaButton },
  methods: {
    initVegaLoader(props) {
      window.VegaLoader.load(props)
    },
    closeVegaLoader(id) {
      window.VegaLoader.close(id)
    },
    initOpenVegaNotify(props) {
      window.VegaNotify.open(props)
    },
    confirmDialog(string, callback) {
      if (window.confirm(string)) {
        callback()
      }
    },
    printDataResult(data) {
      this.editedData = data
    },

    mockSaveAllRowsData(values) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          if (values) {
            // call api to save all rows data and update the dataSource
            this.dataSource = values
          }
          resolve()
        }, 1000)
      })
    },

    mockSaveRowData() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          // call api to save the row data, not update the dataSource
          resolve()
        }, 1000)
      })
    },

    async canSaveCheck() {
      this.$refs.saveButton.$el.disabled =
        (await this.$refs.tableRef.$el.getEditingRowsKey()).length === 0
    },
    async onAddNew() {
      await this.$refs.tableRef.$el.addNewRow({
        key: `new_row_${(Math.random() * 1000000).toFixed(0)}`,
        date: "01/01/2023"
      })
      this.canSaveCheck()
    },

    async onSaveRowData() {
      const rowsData = await this.$refs.tableRef.$el.getRowsData()
      const tableForm = await this.$refs.tableRef.$el.getFormRef()
      const { isValid } = await tableForm.valid()
      if (isValid && rowsData.length > 0) {
        this.$refs.saveButton.$el.disabled = true
        const loaderId = this.initVegaLoader({
          containerSelector: "#editableTable",
          indicatorOptions: {
            size: "small"
          }
        })
        this.mockSaveAllRowsData(rowsData).then(() => {
          this.initOpenVegaNotify({
            type: "success",
            message: "Success"
          })
          this.closeVegaLoader(loaderId)
          this.printDataResult(rowsData)
        })
      }
    }
  }
}
</script>
<template>
  <VegaFlex direction="col">
    <VegaCard>
      <VegaTable
        id="editableTable"
        ref="tableRef"
        :row-clickable="true"
        :columns="[
          {
            label: 'ID #',
            prop: 'employeeId',
            width: '10%',
            editable: true,
            formItemType: 'input-select',
            formItemProps: (rowForm) => {
              return {
                placeholder: 'ID',
                required: true,
                source: employeeList.map((item) => ({
                  displayName: item.employeeId,
                  id: item.employeeId
                })),
                onVegaChange: async (e) => {
                  const employee = employeeList.find((item) => item.employeeId === e.detail)
                  if (employee) {
                    rowForm.setValue({
                      ...employee
                    })
                  }
                }
              }
            }
          },
          {
            label: 'Name',
            prop: 'name',
            width: '15%',
            editable: true,
            formItemProps: () => ({ disabled: true })
          },
          {
            label: 'Role',
            prop: 'role',
            formItemType: 'combo-box',
            editable: true,
            formItemProps: () => {
              return {
                source: [
                  {
                    label: 'Guest',
                    key: '0'
                  },
                  {
                    label: 'Developer',
                    key: '1'
                  },
                  {
                    label: 'Reporter',
                    key: '2'
                  }
                ]
              }
            },
            render: (h, values) => {
              const getStyles = (value) => {
                let bgColor
                let textColor
                switch (value.toString()) {
                  case '0':
                    bgColor = 'bg-brand'
                    textColor = 'text-inverted-primary'
                    break
                  case '1':
                    bgColor = 'bg-status-warning'
                    textColor = 'text-black'
                    break
                  case '2':
                    bgColor = 'bg-accent5-secondary'
                    textColor = 'text-primary'
                    break
                  default:
                    bgColor = 'bg-brand'
                    textColor = 'text-inverted-primary'
                }
                return { bgColor, textColor }
              }
              const formatRole = (status) => {
                switch (Number(status)) {
                  case 0:
                    return 'Guest'
                  case 1:
                    return 'Developer'
                  case 2:
                    return 'Reporter'
                  default:
                    return 'Guest'
                }
              }
              return h(
                'vega-flex',
                { gap: 'size-4' },
                values &&
                  values.map((item) =>
                    h('vega-chip', {
                      text: formatRole(item),
                      bgColor: getStyles(item).bgColor,
                      textColor: getStyles(item).textColor,
                      size: 'small'
                    })
                  )
              )
            }
          },
          {
            label: 'Balance',
            prop: 'balance',
            width: '15%',
            editable: true,
            render: (h, value) => (value ? `$${value}` : '--')
          },
          {
            label: 'Date',
            prop: 'date',
            width: '15%',
            editable: true,
            formItemType: 'date-picker'
          },
          {
            label: 'Actions',
            renderFormItem: (createElement, rowKey, record, index, { rowForm, isNewRow }) => {
              return createElement('div', {}, [
                createElement('vega-button-circle', {
                  variant: 'icon-only',
                  icon: 'checkmark',
                  class: !isNewRow ? '' : 'v-hidden',
                  onVegaClick: async () => {
                    const { isValid } = await rowForm.valid()
                    if (isValid) {
                      const loaderId = this.initVegaLoader({
                        containerSelector: '#editable-template-1 vega-table',
                        indicatorOptions: {
                          size: 'small'
                        }
                      })
                      const data = await this.$refs.tableRef.$el.getRowData(rowKey)
                      mockSaveRowData().then(() => {
                        this.$refs.tableRef.$el.saveEditRow(rowKey) // Will only update one row data in the table
                        canSaveCheck()
                        this.initOpenVegaNotify({
                          type: 'success',
                          message: 'Success'
                        })
                        this.closeVegaLoader(loaderId)
                        printDataResult(data)
                      })
                    }
                  }
                }),
                createElement('vega-button-circle', {
                  variant: 'icon-only',
                  icon: 'close',
                  class: !isNewRow ? '' : 'v-hidden',
                  onVegaClick: () => {
                    this.$refs.tableRef.$el.stopRowEditMode(rowKey)
                    canSaveCheck()
                  }
                }),
                createElement('vega-button-circle', {
                  variant: 'icon-only',
                  icon: 'delete-bin',
                  class: isNewRow ? '' : 'v-hidden',
                  danger: true,
                  onVegaClick: () => {
                    confirmDialog('Are you sure you want to delete this row?', () => {
                      this.$refs.tableRef.$el.removeRow(rowKey)
                      canSaveCheck()
                    })
                  }
                })
              ])
            },
            render: (createElement, rowKey) => {
              return createElement('div', {}, [
                createElement('vega-button-circle', {
                  variant: 'icon-only',
                  icon: 'edit-line',
                  onVegaClick: () => {
                    this.$refs.tableRef.$el.startRowEditMode(rowKey)
                    canSaveCheck()
                  }
                }),
                createElement('vega-button-circle', {
                  variant: 'icon-only',
                  icon: 'delete-bin',
                  danger: true,
                  onVegaClick: () => {
                    confirmDialog('Are you sure you want to delete this row?', () => {
                      this.$refs.tableRef.$el.removeRow(rowKey)
                      canSaveCheck()
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
          ref="saveButton"
          size="small"
          :disabled="true"
          @vegaclick="onSaveRowData"
        >
          Save
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
