import { render } from "@testing-library/react";

import { Pasta } from ".";

describe("Pasta Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<Pasta />);

    const rootElement = getByTestId("Pasta-root");
    expect(rootElement).toBeTruthy();
  });
});
