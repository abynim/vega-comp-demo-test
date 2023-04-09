import { useRef, useState } from "react";
import { VegaTable, VegaFlex } from "@heartlandone/vega-react";

const App = () => {
  const table = useRef();
  const [clickedRowRecord, setClickedRowRecord] = useState(null);
  const onRowClick = (e) => {
    setClickedRowRecord(e.detail);
  };

  return (
    <VegaFlex direction={`col`}>
      <VegaTable
        ref={table}
        rowClickable={true}
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
        onVegaRowClick={onRowClick}
      />
      <div className={`v-bg-primary v-text-primary`}>
        <p className={`v-font-h4`}>Try to click a row</p>
        {clickedRowRecord && (
          <div>
            <label className={`v-font-field-label`}>Clicked Row Record:</label>
            <p className={`v-font-p2-short v-text-primary`}>
              {JSON.stringify(clickedRowRecord.record)}
            </p>
            <label className={`v-font-field-label`}>Clicked Row Index:</label>
            <p className={`v-font-p2-short v-text-primary`}>
              {clickedRowRecord.index}
            </p>
          </div>
        )}
      </div>
    </VegaFlex>
  );
};
export default App;
