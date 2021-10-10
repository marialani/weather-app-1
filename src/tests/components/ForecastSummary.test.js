import React from "react";
import { render } from "@testing-library/react";
import moment from "moment";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 3333444,
    description: "stub description",
    icon: "800",
    temperature: { min: 12, max: 18 },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("renders the correct date, description, temperature and icon props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    expect(getByText("Thu 1st Jan")).toHaveClass("forecast-summary_date");
    expect(getByText("stub description")).toHaveClass(
      "forecast-summary_description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary_icon");
    expect(getByText("18°C")).toHaveClass("forecast-summary_temperature");
  });
});
