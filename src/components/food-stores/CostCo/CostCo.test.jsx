import { render } from "@testing-library/react";

import { CostCo } from ".";

describe("CostCo Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<CostCo />);

    const rootElement = getByTestId("CostCo-root");
    expect(rootElement).toBeTruthy();
  });
});
