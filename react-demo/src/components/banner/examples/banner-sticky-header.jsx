import { VegaBanner } from "@heartlandone/vega-react";

const App = () => {
  const source = [
    {
      headline: "Payroll System Maintenance Down Time",
      description: `Payroll system will be down on Sunday, September 4, 2022 from 1:00AM EST to 4:00 AM EST for maintenance.`,
      ctaText: "Learn More",
      ctaURL: "https://www.google.com/",
      backgroundColor: "#FFD469",
      showCloseButton: true,
    },
  ];
  return <VegaBanner mode={`sticky-header`} source={source} />;
};

export default App;
