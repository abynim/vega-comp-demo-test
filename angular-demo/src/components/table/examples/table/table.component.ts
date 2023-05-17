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
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent {
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
      key: "1",
      date: "01/01/2022",
      amount: 100,
      balance: "$100",
      status: "In Progress"
    },
    {
      key: "2",
      date: "01/02/2022",
      amount: 300,
      balance: "$200",
      status: "In Progress"
    },
    {
      key: "3",
      date: "01/03/2022",
      amount: 400,
      balance: "$300",
      status: "Not Started"
    },
    {
      key: "4",
      date: "01/04/2022",
      amount: 200,
      balance: "$400",
      status: "Pending"
    }
  ]
}
