import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("Forecast Summaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1525046400000,
        description: "stub description",
        icon: 800,
        temperature: { min: 12, max: 18 },
      },
      {
        date: 1525132800000,
        description: "stub description sequel",
        icon: 211,
        temperature: { min: 14, max: 22 },
      },
    ],
    onForecastSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
