import { Component } from "@angular/core"

export interface tableColumnsType {
  label: string
  prop: string
  width?: string
  ellipsis?: boolean
}
export interface dataSourceType {
  key: string
  balance: string
  name: string
  date: string
  amount: number
  status: string
  desc: string
  address: string
}
@Component({
  selector: "app-table-overflow-columns-with-ellipsis",
  templateUrl: "./table-overflow-columns-with-ellipsis.component.html",
  styleUrls: ["./table-overflow-columns-with-ellipsis.component.scss"]
})
export class TableOverflowColumnsWithEllipsisComponent {
  columns: tableColumnsType[] = [
    {
      label: "Full_Name",
      prop: "name",
      width: "10%"
    },
    {
      label: "Date",
      prop: "date",
      width: "10%"
    },
    {
      label: "Address",
      prop: "address",
      width: "15%"
    },
    {
      label: "Amount",
      prop: "amount",
      width: "10%"
    },
    {
      label: "Balance",
      prop: "balance",
      width: "15%"
    },
    {
      ellipsis: true,
      label: "Description",
      prop: "desc"
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
