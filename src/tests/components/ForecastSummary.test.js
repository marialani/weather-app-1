import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 27081988,
    description: "stub description",
    icon: "stubIcon",
    temperature: { min: 12, max: 18 },
  };

  it("renders the correct date, description, temperature and icon props", () => {
    const { getByText } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    expect(getByText("27081988")).toHaveClass("forecast-summary_date");
    expect(getByText("stub description")).toHaveClass(
      "forecast-summary_description"
    );
    expect(getByText("stubIcon")).toHaveClass("forecast-summary_icon");
    expect(getByText("18°C")).toHaveClass("forecast-summary_temperature");
  });
});
