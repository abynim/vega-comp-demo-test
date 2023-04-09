import { VegaAccordion } from "@heartlandone/vega-react";

const App = () => (
  <VegaAccordion
    drawsBackground={false}
    title={`Accordion Title`}
    expandIconAlign={`left`}
    expand={false}
  >
    <div slot="title">This is the title</div>
    <div slot="content">
      <div className={`v-font-p2-short v-text-primary`}>Accordion content</div>
    </div>
  </VegaAccordion>
);

export default App;
