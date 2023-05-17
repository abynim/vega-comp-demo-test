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
  address: string
  name: string
  desc: string
}
@Component({
  selector: "app-table-density-relaxed",
  templateUrl: "./table-density-relaxed.component.html",
  styleUrls: ["./table-density-relaxed.component.scss"]
})
export class TableDensityRelaxedComponent {
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
      address: "New_York_No._1_Lake_Park",
      amount: 100,
      balance: "$100",
      date: "01/01/2022",
      desc: "Test text description",
      key: "1",
      name: "Jon Snow",
      status: "In Progress"
    },
    {
      address: "New York No. 2 Lake Park",
      amount: 300,
      balance: "$200",
      date: "01/02/2022",
      desc: "Test text description Test text description",
      key: "2",
      name: "Jeremiah Graham",
      status: "In Progress"
    },
    {
      address: "New York No. 3 Lake Park",
      amount: 400,
      balance: "$300",
      date: "01/03/2022",
      desc: "Test text description Test text description Test text description",
      key: "3",
      name: "Jaime Stark",
      status: "Not Started"
    },
    {
      address: "New York No. 4 Lake Park",
      amount: 200,
      balance: "$400",
      date: "01/04/2022",
      desc: "Test text description Test text description Test text description Test text description Test text description",
      key: "4",
      name: "Enrique Brewer",
      status: "Pending"
    }
  ]
}
