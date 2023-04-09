import { VegaTable } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaTable
      density={`relaxed`}
      paddingX={["72px", "8px"]}
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
          key: "1",
          date: "01/01/2022",
          amount: 100,
          balance: "$100",
          status: "In Progress",
        },
        {
          key: "2",
          date: "01/02/2022",
          amount: 300,
          balance: "$200",
          status: "In Progress",
        },
        {
          key: "3",
          date: "01/03/2022",
          amount: 400,
          balance: "$300",
          status: "Not Started",
        },
        {
          key: "4",
          date: "01/04/2022",
          amount: 200,
          balance: "$400",
          status: "Pending",
        },
      ]}
    />
  );
};
export default App;
