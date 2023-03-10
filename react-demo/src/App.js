import "./App.css";
import "@heartlandone/vega/style/vega.css";
import SingleCheckbox from "./examples/checkbox/single-checkbox";
import CheckboxGroup from "./examples/checkbox/checkbox-group";

export default function App() {
  return (
    <div className="App v-bg-primary">
      <SingleCheckbox />
      <CheckboxGroup />
    </div>
  );
}
