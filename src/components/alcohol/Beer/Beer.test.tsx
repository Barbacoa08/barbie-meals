import { render } from "@testing-library/react";

import { Beer } from ".";

describe("Beer Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<Beer />);

    const rootElement = getByTestId("Beer-root");
    expect(rootElement).toBeTruthy();
  });
});
