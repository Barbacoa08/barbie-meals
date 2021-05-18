import { render } from "@testing-library/react";

import { GrilledCheese } from ".";

describe("Grilled Cheese Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<GrilledCheese />);

    const rootElement = getByTestId("GrilledCheese-root");
    expect(rootElement).toBeTruthy();
  });
});
