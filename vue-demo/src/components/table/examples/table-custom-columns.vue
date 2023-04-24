<script>
import { VegaTable } from "@heartlandone/vega-vue"
export default {
  data() {
    return {}
  },
  components: { VegaTable },
  methods: {
    alert(string) {
      window.alert(string)
    }
  }
}
</script>
<template>
  <VegaTable
    :show-header="false"
    :columns="[
      {
        label: 'Date',
        prop: 'date'
      },
      {
        label: 'Amount',
        prop: 'amount'
      },
      {
        label: 'Balance',
        prop: 'balance'
      },
      {
        label: 'Status',
        prop: 'status',
        render: (createElement, value) => {
          let bgColor
          let textColor
          switch (value) {
            case 'In Progress':
              bgColor = 'bg-accent5-secondary'
              textColor = 'text-primary'
              break
            case 'Pending':
              bgColor = 'bg-status-warning'
              textColor = 'text-black'
              break
            default:
              bgColor = 'bg-brand'
              textColor = 'text-inverted-primary'
          }
          return createElement('vega-badge', {
            size: 'small',
            text: value,
            bgColor: bgColor,
            textColor: textColor
          })
        }
      },
      {
        label: 'Action',
        render: (createElement, value, record) => {
          return createElement(
            'vega-flex',
            {
              gap: 'size-8'
            },
            [
              createElement(
                'vega-button',
                {
                  'data-shrink': 0,
                  size: 'small',
                  onVegaClick: () => {
                    this.alert(`Row [Key: ${value}] - Edit button click`)
                  }
                },
                'Edit'
              ),
              createElement(
                'vega-button',
                {
                  'data-shrink': 0,
                  size: 'small',
                  danger: true,
                  onVegaClick: () => {
                    this.alert(`Row [Key: ${value}, Date: ${record['date']}] - Delete button click`)
                  }
                },
                'Delete'
              )
            ]
          )
        }
      }
    ]"
    :data-source="[
      {
        key: '1',
        date: '01/01/2022',
        amount: 100,
        balance: '$100',
        status: 'In Progress'
      },
      {
        key: '2',
        date: '01/02/2022',
        amount: 300,
        balance: '$200',
        status: 'In Progress'
      },
      {
        key: '3',
        date: '01/03/2022',
        amount: 400,
        balance: '$300',
        status: 'Not Started'
      },
      {
        key: '4',
        date: '01/04/2022',
        amount: 200,
        balance: '$400',
        status: 'Pending'
      }
    ]"
  />
</template>
