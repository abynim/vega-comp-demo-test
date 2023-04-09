import { useRef, useEffect } from "react";
import { VegaTable } from "@heartlandone/vega-react";

const App = () => {
  const table = useRef();
  useEffect(() => {
    const expandRows = table.current.dataSource.map((item) => {
      const rowKey = item.key;
      const slotDiv = document.createElement("div");
      slotDiv.setAttribute("slot", `vega-table-expand-row-${item.key}`);
      slotDiv.innerHTML = `<div class="v-text-primary v-font-p2-short v-p-size-24" key="slot-${rowKey}">
            <h2>Detail</h2>
            <div>
              <p>This is some example text, to demonstrate how content is displayed in the details.  Incidentally this is associated with key ${item["key"]}.
            </div>

            <div>Status: ${item["status"]}</div>
          </div>`;
      return slotDiv;
    });
    table.current.append(...expandRows);
  });
  return (
    <VegaTable
      ref={table}
      rowExpandable={true}
      columns={[
        {
          label: "Date",
          prop: "date",
        },
        {
          label: "Amount",
          prop: "amount",
        },
        {
          label: "Balance",
          prop: "balance",
        },
        {
          label: "Action",
          render: (createElement, value, record) => {
            return createElement(
              "vega-button",
              {
                "data-shrink": 0,
                icon: "chevron-down",
                size: "small",
                onVegaClick: () => {
                  table.current.toggleExpandRow(record.key);
                },
              },
              "Detail"
            );
          },
        },
      ]}
      dataSource={[
        {
          amount: 100,
          balance: "$100",
          date: "01/01/2022",
          key: "1",
          status: "In Progress",
        },
        {
          amount: 300,
          balance: "$200",
          date: "01/02/2022",
          key: "2",
          status: "In Progress",
        },
        {
          amount: 400,
          balance: "$300",
          date: "01/03/2022",
          key: "3",
          status: "Not Started",
        },
        {
          amount: 200,
          balance: "$400",
          date: "01/04/2022",
          key: "4",
          status: "Pending",
        },
      ]}
    />
  );
};
export default App;
