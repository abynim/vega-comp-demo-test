import {
  VegaFlex,
  VegaSidenav,
  VegaSidenavGroup,
  VegaSidenavLink,
} from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaFlex>
      <div data-shrink="0">
        <VegaSidenav
          footnote={`Version 2.0.0`}
          openByDefault={`disableCollapse`}
        >
          <VegaSidenavLink icon={`hb-menu`} url="#">
            Company Name
          </VegaSidenavLink>
          <VegaSidenavLink icon={`fas fa-shopping-bag fa-lg`} url="#">
            Order Equipment
          </VegaSidenavLink>
          <VegaSidenavGroup icon={`fas fa-file-alt fa-lg`} label={`Dashboard`}>
            <VegaSidenavLink url="#">Form W-9</VegaSidenavLink>
            <VegaSidenavLink url="#" selected={true}>
              Form W-8BEN
            </VegaSidenavLink>
            <VegaSidenavLink url="#">
              Very very very very very very very very long title
            </VegaSidenavLink>
          </VegaSidenavGroup>
          <VegaSidenavGroup icon="fas fa-user fa-lg" label="Main Heading">
            <VegaSidenavLink url="#">Sub-Heading</VegaSidenavLink>
            <VegaSidenavLink url="#">Sub-Heading</VegaSidenavLink>
            <VegaSidenavLink url="#">Sub-Heading</VegaSidenavLink>
          </VegaSidenavGroup>
          <VegaSidenavLink icon={`fas fa-comment-dots fa-lg`} url="#">
            Support
          </VegaSidenavLink>
        </VegaSidenav>
      </div>
      <div>{/* Main Content */}</div>
    </VegaFlex>
  );
};

export default App;
