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
    expect(getByText(""));
  });
});
