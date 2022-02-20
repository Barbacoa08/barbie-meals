import { render } from "@testing-library/react";

import { PinkLady } from ".";

describe("Pink Lady Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<PinkLady />);

    const rootElement = getByTestId("PinkLady-root");
    expect(rootElement).toBeTruthy();
  });
});
