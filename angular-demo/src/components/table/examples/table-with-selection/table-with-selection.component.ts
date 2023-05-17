import { Component } from "@angular/core"

export interface tableColumnsType {
  label: string
  prop: string
}
export interface dataSourceType {
  key: string
  date: string
  amount: number
  balance: string
  status: string
}
@Component({
  selector: "app-table-with-selection",
  templateUrl: "./table-with-selection.component.html",
  styleUrls: ["./table-with-selection.component.scss"]
})
export class TableWithSelectionComponent {
  columns: tableColumnsType[] = [
    {
      label: "Date",
      prop: "date"
    },
    {
      label: "Amount",
      prop: "amount"
    },
    {
      label: "Balance",
      prop: "balance"
    }
  ]

  dataSource: dataSourceType[] = [
    {
      amount: 100,
      balance: "$100",
      date: "01/01/2022",
      key: "1",
      status: "In Progress"
    },
    {
      amount: 300,
      balance: "$200",
      date: "01/02/2022",
      key: "2",
      status: "In Progress"
    },
    {
      amount: 400,
      balance: "$300",
      date: "01/03/2022",
      key: "3",
      status: "Not Started"
    },
    {
      amount: 200,
      balance: "$400",
      date: "01/04/2022",
      key: "4",
      status: "Pending"
    }
  ]

  rowSelection = {
    hideSelectAll: false,
    onSelectChange: (selected: any, record: any, selectedRows: any) => {
      console.log({ selected, record, selectedRows })
    },
    onSelectAllChange: (selected: any, selectedRows: any) => {
      console.log({ selected, selectedRows })
    }
  }
}
