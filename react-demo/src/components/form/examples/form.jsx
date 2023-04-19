import { useRef } from "react";
import {
  VegaForm,
  VegaInput,
  VegaFlex,
  VegaButton,
} from "@heartlandone/vega-react";

const App = () => {
  const vegaForm = useRef();

  const getValue = async () => {
    window.alert(JSON.stringify(await vegaForm.current.getValue(), null, 2));
  };

  const validate = () => {
    vegaForm.current.valid();
  };

  const reset = () => {
    vegaForm.current.reset();
  };

  return (
    <VegaForm data-vega-form={`form`} ref={vegaForm}>
      <VegaFlex direction={`col`} className={`v-mb-size-12`}>
        <VegaInput
          data-vega-form={`input`}
          min={6}
          value={3}
          label={`Min value is 6`}
        ></VegaInput>

        <VegaForm data-vega-form={`nestedForm`}>
          <VegaInput
            data-vega-form={`nestedInput`}
            max={12}
            value={15}
            label={`This is a nested form input`}
          ></VegaInput>
        </VegaForm>
      </VegaFlex>
      <VegaFlex direction={`row`} gap={`size-24`}>
        <VegaButton onVegaClick={getValue}>Get Value</VegaButton>
        <VegaButton onVegaClick={validate}>Validate</VegaButton>
        <VegaButton onVegaClick={reset}>Reset</VegaButton>
      </VegaFlex>
    </VegaForm>
  );
};

export default App;
