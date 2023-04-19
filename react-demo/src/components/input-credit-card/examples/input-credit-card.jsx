import { VegaForm, VegaInputCreditCard } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaForm>
      <VegaInputCreditCard
        className={`v-mb-size-12`}
        hideCardNumberOnBlur={true}
        value={`4111 1111 1111 1111`}
      />
      <VegaInputCreditCard
        className={`v-mb-size-12`}
        value={`5555 5555 5555 4444`}
      />
      <VegaInputCreditCard
        className={`v-mb-size-12`}
        value={`6011 1111 1111 1117`}
      />
      <VegaInputCreditCard
        className={`v-mb-size-12`}
        value={`3782 822463 10006`}
      />
    </VegaForm>
  );
};
export default App;
