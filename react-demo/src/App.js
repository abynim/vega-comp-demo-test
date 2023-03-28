import "./App.css";
import "@heartlandone/vega/style/vega.css";
import SingleCheckbox from "./components/checkbox/examples/single-checkbox";
import CheckboxGroup from "./components/checkbox/examples/checkbox-group";

export default function App() {
  return (
    <div className="App v-bg-primary">
      <SingleCheckbox />
      <CheckboxGroup />
    </div>
  );
}
