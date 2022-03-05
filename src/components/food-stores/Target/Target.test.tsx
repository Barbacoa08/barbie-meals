import { render } from "@testing-library/react";

import { Target } from ".";

describe("Target Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<Target />);

    const rootElement = getByTestId("Target-root");
    expect(rootElement).toBeTruthy();
  });
});
