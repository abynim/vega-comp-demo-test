import { Component } from "@angular/core"
import {
  VegaTableCellRenderFunction,
  VegaTableCreateElementFunction,
  VegaTableDataSourceItem
} from "@heartlandone/vega"

export interface tableColumnsType {
  label: string
  prop?: string
  render?: VegaTableCellRenderFunction
}
export interface dataSourceType {
  key: string
  date: string
  amount: number
  balance: string
  status: string
}
@Component({
  selector: "app-table-custom-columns",
  templateUrl: "./table-custom-columns.component.html",
  styleUrls: ["./table-custom-columns.component.scss"]
})
export class TableCustomColumnsComponent {
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
    },
    {
      label: "Status",
      prop: "status",
      render: (createElement: VegaTableCreateElementFunction, value: unknown) => {
        let bgColor
        let textColor
        switch (value) {
          case "In Progress":
            bgColor = "bg-accent5-secondary"
            textColor = "text-primary"
            break
          case "Pending":
            bgColor = "bg-status-warning"
            textColor = "text-black"
            break
          default:
            bgColor = "bg-brand"
            textColor = "text-inverted-primary"
        }
        return createElement("vega-badge", {
          size: "small",
          text: value,
          bgColor: bgColor,
          textColor: textColor
        })
      }
    },
    {
      label: "Action",
      render: (
        createElement: VegaTableCreateElementFunction,
        value: unknown,
        record: VegaTableDataSourceItem
      ) => {
        return createElement(
          "vega-flex",
          {
            gap: "size-8"
          },
          [
            createElement(
              "vega-button",
              {
                "data-shrink": 0,
                size: "small",
                onVegaClick: () => {
                  alert(`Row [Key: ${value}] - Edit button click`)
                }
              },
              "Edit"
            ),
            createElement(
              "vega-button",
              {
                "data-shrink": 0,
                size: "small",
                danger: true,
                onVegaClick: () => {
                  alert(`Row [Key: ${value}, Date: ${record["date"]}] - Delete button click`)
                }
              },
              "Delete"
            )
          ]
        )
      }
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
