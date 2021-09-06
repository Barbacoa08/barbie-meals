import { render } from "@testing-library/react";

import { BreakfastBurritos } from ".";

describe("BreakfastBurritos Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<BreakfastBurritos />);

    const rootElement = getByTestId("BreakfastBurritos-root");
    expect(rootElement).toBeTruthy();
  });
});
