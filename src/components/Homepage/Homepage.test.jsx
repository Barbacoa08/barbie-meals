import { render } from "@testing-library/react";

import { Homepage } from ".";

describe("Homepage Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<Homepage />);

    const rootElement = getByTestId("Homepage-root");
    expect(rootElement).toBeTruthy();
  });
});
