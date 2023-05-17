import { Component, ViewChild } from "@angular/core"
import {
  VegaTableCellFormItemRenderFunction,
  VegaTableCellRenderFunction,
  VegaTableCreateElementFunction,
  VegaTableDataSourceItem
} from "@heartlandone/vega"

export interface tableColumnsType {
  label: string
  prop?: string
  editable?: boolean
  width?: string
  renderFormItem?: VegaTableCellFormItemRenderFunction
  render?: VegaTableCellRenderFunction
}
export interface dataSourceType {
  key: string
  employeeId: string
  balance: number
  name: string
}
@Component({
  selector: "app-table-editable",
  templateUrl: "./table-editable.component.html",
  styleUrls: ["./table-editable.component.scss"]
})
export class TableEditableComponent {
  @ViewChild("table") table!: HTMLVegaTableElement
  editedData = null
  columns: tableColumnsType[] = [
    {
      label: "ID #",
      prop: "employeeId",
      editable: true
    },
    {
      label: "Name",
      prop: "name",
      editable: true
    },
    {
      label: "Balance",
      prop: "balance",
      editable: true
    },
    {
      label: "Actions",
      width: "120px",
      renderFormItem: (
        createElement: VegaTableCreateElementFunction,
        rowKey: any,
        record: VegaTableDataSourceItem,
        index: number,
        rowPayload: { rowForm: HTMLVegaFormElement; isNewRow: boolean }
      ) => {
        return createElement("div", {}, [
          createElement("vega-button-circle", {
            variant: "icon-only",
            icon: "checkmark",
            onVegaClick: async () => {
              this.table.saveEditRow(rowKey)
              const data = await this.table.getRowData(rowKey)
              this.saveRow(index, data)
              this.printDataResult(data)
            }
          }),
          createElement("vega-button-circle", {
            variant: "icon-only",
            icon: "close",
            class: !rowPayload.isNewRow ? "" : "v-hidden",
            onVegaClick: () => {
              this.table.stopRowEditMode(rowKey)
            }
          }),
          createElement("vega-button-circle", {
            variant: "icon-only",
            icon: "delete-bin",
            class: rowPayload.isNewRow ? "" : "v-hidden",
            danger: true,
            onVegaClick: () => {
              const recordKey: any = record.key
              this.confirmDialog("Are you sure you want to delete this row?", () => {
                this.table.removeRow(recordKey)
              })
            }
          })
        ])
      },
      render: (h: any, rowKey: any) => {
        return h("div", {}, [
          h("vega-button-circle", {
            variant: "icon-only",
            icon: "edit-line",
            onVegaClick: () => {
              this.table.startRowEditMode(rowKey)
            }
          }),
          h("vega-button-circle", {
            variant: "icon-only",
            icon: "delete-bin",
            danger: true,
            onVegaClick: async () => {
              this.confirmDialog("Are you sure you want to delete this row?", async () => {
                await this.table.removeRow(rowKey)
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
      balance: 100
    },
    {
      key: "2",
      employeeId: "2",
      name: "Employee 2",
      balance: 300
    }
  ]

  confirmDialog(string: string, callback: any) {
    if (window.confirm(string)) {
      callback()
    }
  }
  printDataResult(data: any) {
    this.editedData = data
  }
  async onAddNew() {
    await this.table.addNewRow()
  }

  saveRow(index: number, record: any) {
    this.dataSource[index] = record
  }

  async onSaveRowData() {
    const rowData = await this.table.getRowsData()
    this.printDataResult(rowData)
  }
  stringifySavedData(data: any) {
    return JSON.stringify(data, null, 2)
  }
}
