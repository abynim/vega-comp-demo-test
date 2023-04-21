<script>
import { VegaBanner } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaBanner }
}
</script>

<template>
  <VegaBanner
    mode="inline"
    :source="[
      {
        avatar: 'https://vega.hlprd.com/images/home/get-started.svg',
        headline: 'Congratulations! You have been pre-qualified for a $20,000 Loan.',
        description: `You can use the money to increase inventory, buy equipment, hire or pay employees, whatever you need to help your business grow and succeed.
There is no lengthy application, just a few clicks. Upon approval, you’ll receive funds in your account instantly.`,
        ctaText: 'Learn More',
        ctaURL: 'https://www.google.com/',
        backgroundColor: '#CFCFCF',
        showCloseButton: true
      },
      {
        headline: 'Congratulations! You have been pre-qualified for a $20,000 Loan.',
        description: `You can use the money to increase inventory, buy equipment, hire or pay employees, whatever you need to help your business grow and succeed.
There is no lengthy application, just a few clicks. Upon approval, you’ll receive funds in your account instantly.`,
        ctaText: 'Learn More',
        ctaURL: 'https://www.google.com/'
      }
    ]"
  />
</template>
