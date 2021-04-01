import { render } from "@testing-library/react";

import { Burgers } from ".";

describe("Burgers Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<Burgers />);

    const rootElement = getByTestId("Burgers-root");
    expect(rootElement).toBeTruthy();
  });
});
