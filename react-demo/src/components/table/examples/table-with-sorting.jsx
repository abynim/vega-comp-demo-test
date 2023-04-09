import { VegaTable } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaTable
      columns={[
        {
          label: "Date",
          prop: "date",
        },
        {
          label: "Name",
          prop: "name",
          sorter: (a, b) => {
            return a.name.localeCompare(b.name);
          },
        },
        {
          label: "Amount",
          prop: "amount",
          sorter: (a, b) => {
            return a.amount - b.amount;
          },
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
          name: "A",
          status: "In Progress",
        },
        {
          amount: 300,
          balance: "$200",
          date: "01/02/2022",
          key: "2",
          name: "D",
          status: "In Progress",
        },
        {
          amount: 400,
          balance: "$300",
          date: "01/03/2022",
          key: "3",
          name: "B",
          status: "Not Started",
        },
        {
          amount: 200,
          balance: "$400",
          date: "01/04/2022",
          key: "4",
          name: "C",
          status: "Pending",
        },
      ]}
      onVegaChange={(e) => {
        const sorters = e.detail.sorters;
        console.log({ sorters });
      }}
    />
  );
};
export default App;
