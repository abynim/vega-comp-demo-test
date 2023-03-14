import "./App.css";
import "@heartlandone/vega/style/vega.css";
import SingleCheckbox from "./examples/components/checkbox/single-checkbox";
import CheckboxGroup from "./examples/components/checkbox/checkbox-group";

export default function App() {
  return (
    <div className="App v-bg-primary">
      <SingleCheckbox />
      <CheckboxGroup />
    </div>
  );
}
