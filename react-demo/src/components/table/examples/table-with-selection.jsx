import { VegaTable } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaTable
      showHeader={true}
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
      rowSelection={{
        hideSelectAll: false,
        onSelectChange: (selected, record, selectedRows) => {
          document.getElementById("selectedRows").innerText = selectedRows.map(
            (item) => item["key"]
          );
          document.getElementById("selectedRowRecords").innerText =
            JSON.stringify(record);
        },
        onSelectAllChange: (selected, selectedRows) => {
          document.getElementById("selectedRows").innerText = selectedRows.map(
            (item) => item["key"]
          );
          document.getElementById("selectedRowRecords").innerText =
            JSON.stringify(selectedRows);
        },
      }}
    />
  );
};
export default App;
