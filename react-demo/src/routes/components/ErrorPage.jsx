import { useRouteError } from "react-router-dom";
import { VegaFlex } from "@heartlandone/vega-react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <VegaFlex direction={`col`}>
      <div className={`v-p-size-32`}>
        <h1 className={`v-font-h1`}>Oops!</h1>
        <p className={`v-font-p2-short v-text-primary`}>
          Sorry, an unexpected error has occurred.
        </p>
        <div className={`v-font-p2-short v-text-primary`}>
          <i>{error.message}</i>
        </div>
        <div className="v-text-center">
          <Link
            to={`components/accordion`}
            className={`v-font-field-label-em v-text-primary`}
          >
            Go Back
          </Link>
        </div>
      </div>
    </VegaFlex>
  );
}
