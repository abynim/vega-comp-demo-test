import { useRef, useState } from "react";
import {
  VegaTable,
  VegaFlex,
  VegaCard,
  VegaButtonLink,
  VegaButton,
} from "@heartlandone/vega-react";

const App = () => {
  const DataSource = [
    {
      key: "1",
      employeeId: "1",
      name: "Employee 1",
      balance: 100,
    },
    {
      key: "2",
      employeeId: "2",
      name: "Employee 2",
      balance: 300,
    },
  ];
  const tableRef = useRef();
  const [dataSource, setDataSource] = useState(DataSource);
  const [editedData, setEditedData] = useState(null);

  const printDataResult = (data) => {
    setEditedData(data);
  };
  const onAddNew = async () => {
    await tableRef.current.addNewRow();
  };

  const saveRow = (index, record) => {
    dataSource[index] = record;
    setDataSource(dataSource);
  };

  const onSaveRowData = async () => {
    const rowData = await tableRef.current.getRowsData();
    setDataSource(rowData);
    printDataResult(rowData);
  };

  return (
    <VegaFlex direction={`col`}>
      <VegaCard>
        <VegaTable
          ref={tableRef}
          rowClickable={true}
          columns={[
            {
              label: "ID #",
              prop: "employeeId",
              editable: true,
            },
            {
              label: "Name",
              prop: "name",
              editable: true,
            },
            {
              label: "Balance",
              prop: "balance",
              editable: true,
            },
            {
              label: "Actions",
              width: "120px",
              renderFormItem: (
                createElement,
                rowKey,
                record,
                index,
                { rowForm, isNewRow }
              ) => {
                return createElement("div", {}, [
                  createElement("vega-button-circle", {
                    variant: "icon-only",
                    icon: "checkmark",
                    onVegaClick: async () => {
                      tableRef.current.saveEditRow(rowKey);
                      const data = await tableRef.current.getRowData(rowKey);
                      saveRow(index, data);
                      printDataResult(data);
                    },
                  }),
                  createElement("vega-button-circle", {
                    variant: "icon-only",
                    icon: "close",
                    class: !isNewRow ? "" : "v-hidden",
                    onVegaClick: () => {
                      tableRef.current.stopRowEditMode(rowKey);
                    },
                  }),
                  createElement("vega-button-circle", {
                    variant: "icon-only",
                    icon: "delete-bin",
                    class: isNewRow ? "" : "v-hidden",
                    danger: true,
                    onVegaClick: () => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this row?"
                        )
                      ) {
                        tableRef.current.removeRow(record.key);
                      }
                    },
                  }),
                ]);
              },
              render: (h, rowKey) => {
                return h("div", {}, [
                  h("vega-button-circle", {
                    variant: "icon-only",
                    icon: "edit-line",
                    onVegaClick: () => {
                      tableRef.current.startRowEditMode(rowKey);
                    },
                  }),
                  h("vega-button-circle", {
                    variant: "icon-only",
                    icon: "delete-bin",
                    danger: true,
                    onVegaClick: async () => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this row?"
                        )
                      ) {
                        await tableRef.current.removeRow(rowKey);
                      }
                    },
                  }),
                ]);
              },
            },
          ]}
          dataSource={dataSource}
        />
        <div className={`v-mt-size-12 v-font-p2-short v-text-primary`}>
          <VegaButtonLink
            size={`small`}
            icon={`plus-sign`}
            onVegaClick={onAddNew}
          >
            Add New
          </VegaButtonLink>
        </div>
      </VegaCard>
      <div className={`v-mt-size-12`}>
        <vega-flex gap={`size-8`}>
          <VegaButton size={`small`} onVegaClick={onSaveRowData}>
            Get All Rows Data & Save
          </VegaButton>
        </vega-flex>
      </div>
      <div className={`v-mt-size-8 v-text-primary`}>
        <div className={`v-font-field-label v-text-success`}>Saved Data:</div>
        <div className={`v-font-field-label`}>
          {JSON.stringify(editedData, null, 2)}
        </div>
      </div>
    </VegaFlex>
  );
};
export default App;
