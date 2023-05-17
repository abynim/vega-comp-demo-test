import { Component } from "@angular/core"
import { VegaTableSorterConfig } from "@heartlandone/vega/dist/types/components/vega-table/interface"

export interface tableColumnsType {
  label: string
  prop: string
  sorter?: VegaTableSorterConfig
}
export interface dataSourceType {
  key: string
  date: string
  amount: number
  balance: string
  status: string
}
@Component({
  selector: "app-table-with-sorting",
  templateUrl: "./table-with-sorting.component.html",
  styleUrls: ["./table-with-sorting.component.scss"]
})
export class TableWithSortingComponent {
  columns: tableColumnsType[] = [
    {
      label: "Date",
      prop: "date"
    },
    {
      label: "Name",
      prop: "name",
      sorter: (a: any, b: any) => {
        return a.name.localeCompare(b.name)
      }
    },
    {
      label: "Amount",
      prop: "amount",
      sorter: (a: any, b: any) => {
        return a.amount - b.amount
      }
    },
    {
      label: "Balance",
      prop: "balance"
    }
  ]

  dataSource = [
    {
      amount: 100,
      balance: "$100",
      date: "01/01/2022",
      key: "1",
      name: "A",
      status: "In Progress"
    },
    {
      amount: 300,
      balance: "$200",
      date: "01/02/2022",
      key: "2",
      name: "D",
      status: "In Progress"
    },
    {
      amount: 400,
      balance: "$300",
      date: "01/03/2022",
      key: "3",
      name: "B",
      status: "Not Started"
    },
    {
      amount: 200,
      balance: "$400",
      date: "01/04/2022",
      key: "4",
      name: "C",
      status: "Pending"
    }
  ]

  onSort(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    const sorters = customEvent.detail.sorters
    console.log({ sorters })
  }
}
