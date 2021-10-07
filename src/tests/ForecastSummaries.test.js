import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";

describe("Forecast Summaries", () => {
  const validProps = [
    {
      date: 27081988,
      description: "stub description",
      icon: "stubIcon",
      temperature: { min: 12, max: 18 },
    },
    {
      date: 25051992,
      description: "stub description sequel",
      icon: "stubIcon2",
      temperature: { min: 14, max: 22 },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
