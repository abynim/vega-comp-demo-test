import { useState } from "react";
import { VegaModal, VegaFlex, VegaButton } from "@heartlandone/vega-react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <VegaFlex direction={`col`}>
      <VegaModal
        size={400}
        backdrop={`static`}
        open={isOpen}
        modalTitle="Modal Title"
        onVegaClose={() => setIsOpen(false)}
      >
        <p className={`v-font-p2-short v-text-primary v-mb-size-24`}>
          This content will appear in the modal.
        </p>

        <div>
          <VegaButton onVegaClick={() => setIsOpen(false)}>Close</VegaButton>
        </div>
      </VegaModal>
      <VegaButton onVegaClick={() => setIsOpen(true)}>Launch modal</VegaButton>
    </VegaFlex>
  );
};
export default App;
