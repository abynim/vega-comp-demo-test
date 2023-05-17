import { Component, ViewChild } from "@angular/core"
import {
  VegaLoader,
  VegaNotify,
  VegaTableCellFormItemRenderFunction,
  VegaTableCellRenderFunction,
  VegaTableCreateElementFunction,
  VegaTableDataSourceItem,
  VegaTableFormItemProps
} from "@heartlandone/vega"

export interface EmployeeList {
  employeeId: string
  name: string
  role: Array<string>
}
export interface tableColumnsType {
  label: string
  prop?: string
  editable?: boolean
  width?: string
  formItemType?: string
  formItemProps?: VegaTableFormItemProps
  renderFormItem?: VegaTableCellFormItemRenderFunction
  render?: VegaTableCellRenderFunction
}
export interface dataSourceType {
  key: string
  employeeId: string
  balance: number
  name: string
  date: string
  amount: number
  status: number
  role: Array<string>
  desc: string
  address: string
  time?: string
  createAt: string
  notifications?: boolean
}
@Component({
  selector: "app-table-editable-complex",
  templateUrl: "./table-editable-complex.component.html",
  styleUrls: ["./table-editable-complex.component.scss"]
})
export class TableEditableComplexComponent {
  @ViewChild("table") table!: HTMLVegaTableElement
  @ViewChild("saveButton") saveButton!: HTMLVegaButtonElement

  editedData = null
  employeeList: EmployeeList[] = [
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
  ]
  columns: tableColumnsType[] = [
    {
      label: "ID #",
      prop: "employeeId",
      width: "10%",
      editable: true,
      formItemType: "input-select",
      formItemProps: (rowForm: HTMLVegaFormElement) => {
        return {
          placeholder: "ID",
          required: true,
          source: this.employeeList.map((item) => ({
            displayName: item.employeeId,
            id: item.employeeId
          })),
          onVegaChange: async (e: Event) => {
            const customEvent: CustomEvent = e as CustomEvent
            const employee = this.employeeList.find(
              (item) => item.employeeId === customEvent.detail
            )
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
      label: "Name",
      prop: "name",
      width: "15%",
      editable: true,
      formItemProps: () => ({ disabled: true })
    },
    {
      label: "Role",
      prop: "role",
      formItemType: "combo-box",
      editable: true,
      formItemProps: () => {
        return {
          source: [
            {
              label: "Guest",
              key: "0"
            },
            {
              label: "Developer",
              key: "1"
            },
            {
              label: "Reporter",
              key: "2"
            }
          ]
        }
      },
      render: (h: any, values: any) => {
        const getStyles = (value: any) => {
          let bgColor
          let textColor
          switch (value.toString()) {
            case "0":
              bgColor = "bg-brand"
              textColor = "text-inverted-primary"
              break
            case "1":
              bgColor = "bg-status-warning"
              textColor = "text-black"
              break
            case "2":
              bgColor = "bg-accent5-secondary"
              textColor = "text-primary"
              break
            default:
              bgColor = "bg-brand"
              textColor = "text-inverted-primary"
          }
          return { bgColor, textColor }
        }
        const formatRole = (status: string) => {
          switch (Number(status)) {
            case 0:
              return "Guest"
            case 1:
              return "Developer"
            case 2:
              return "Reporter"
            default:
              return "Guest"
          }
        }
        return h(
          "vega-flex",
          { gap: "size-4" },
          values &&
            values.map((item: any) =>
              h("vega-chip", {
                text: formatRole(item),
                bgColor: getStyles(item).bgColor,
                textColor: getStyles(item).textColor,
                size: "small"
              })
            )
        )
      }
    },
    {
      label: "Balance",
      prop: "balance",
      width: "15%",
      editable: true,
      render: (h: any, value: any) => (value ? `$${value}` : "--")
    },
    {
      label: "Date",
      prop: "date",
      width: "15%",
      editable: true,
      formItemType: "date-picker"
    },
    {
      label: "Actions",
      renderFormItem: (
        createElement: VegaTableCreateElementFunction,
        rowKey: any,
        record: VegaTableDataSourceItem,
        index: any,
        rowPayload: { rowForm: HTMLVegaFormElement; isNewRow: boolean }
      ) => {
        return createElement("div", {}, [
          createElement("vega-button-circle", {
            variant: "icon-only",
            icon: "checkmark",
            class: !rowPayload.isNewRow ? "" : "v-hidden",
            onVegaClick: async () => {
              const { isValid } = await rowPayload.rowForm.valid()
              if (isValid) {
                const loaderId = VegaLoader.load({
                  containerSelector: "#editable-template-1 vega-table",
                  indicatorOptions: {
                    size: "small"
                  }
                })
                const data = await this.table.getRowData(rowKey)
                this.mockSaveRowData().then(() => {
                  this.table.saveEditRow(rowKey) // Will only update one row data in the table
                  this.canSaveCheck()
                  this.initOpenVegaNotify({
                    type: "success",
                    message: "Success"
                  })
                  VegaLoader.close(loaderId)
                  this.printDataResult(data)
                })
              }
            }
          }),
          createElement("vega-button-circle", {
            variant: "icon-only",
            icon: "close",
            class: !rowPayload.isNewRow ? "" : "v-hidden",
            onVegaClick: () => {
              this.table.stopRowEditMode(rowKey)
              this.canSaveCheck()
            }
          }),
          createElement("vega-button-circle", {
            variant: "icon-only",
            icon: "delete-bin",
            class: rowPayload.isNewRow ? "" : "v-hidden",
            danger: true,
            onVegaClick: () => {
              this.confirmDialog("Are you sure you want to delete this row?", () => {
                this.table.removeRow(rowKey)
                this.canSaveCheck()
              })
            }
          })
        ])
      },
      render: (createElement: any, rowKey: any) => {
        return createElement("div", {}, [
          createElement("vega-button-circle", {
            variant: "icon-only",
            icon: "edit-line",
            onVegaClick: () => {
              this.table.startRowEditMode(rowKey)
              this.canSaveCheck()
            }
          }),
          createElement("vega-button-circle", {
            variant: "icon-only",
            icon: "delete-bin",
            danger: true,
            onVegaClick: () => {
              this.confirmDialog("Are you sure you want to delete this row?", () => {
                this.table.removeRow(rowKey)
                this.canSaveCheck()
              })
            }
          })
        ])
      }
    }
  ]
  dataSource: dataSourceType[] = [
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

  stringifyEditedData(data: any) {
    return JSON.stringify(data, null, 2)
  }
  closeVegaLoader(id: any) {
    VegaLoader.close(id)
  }
  initOpenVegaNotify(props: any) {
    VegaNotify.open(props)
  }
  confirmDialog(string: string, callback: any) {
    if (window.confirm(string)) {
      callback()
    }
  }
  printDataResult(data: any) {
    this.editedData = data
  }

  mockSaveAllRowsData(values: any) {
    return new Promise(function (resolve: any) {
      setTimeout(function () {
        if (values) {
          // call api to save all rows data and update the dataSource
        }
        resolve()
      }, 1000)
    })
  }

  mockSaveRowData() {
    return new Promise(function (resolve: any) {
      setTimeout(function () {
        // call api to save the row data, not update the dataSource
        resolve()
      }, 1000)
    })
  }

  async canSaveCheck() {
    try {
      this.saveButton.disabled = (await this.table.getEditingRowsKey()).length === 0
    } catch (e: any) {
      false
    }
  }
  async onAddNew() {
    await this.table.addNewRow({
      key: `new_row_${(Math.random() * 1000000).toFixed(0)}`,
      date: "01/01/2023"
    })
    this.canSaveCheck()
  }

  async onSaveRowData() {
    const rowsData = await this.table.getRowsData()
    const tableForm = await this.table.getFormRef()
    const { isValid } = await tableForm.valid()
    if (isValid && rowsData.length > 0) {
      this.saveButton.disabled = true
      const loaderId = VegaLoader.load({
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
        VegaLoader.close(loaderId)
        this.printDataResult(rowsData)
      })
    }
  }
}
