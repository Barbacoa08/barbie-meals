import { render } from "@testing-library/react";

import { GinAndTonic } from ".";

describe("Gin And Tonic Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<GinAndTonic />);

    const rootElement = getByTestId("GinAndTonic-root");
    expect(rootElement).toBeTruthy();
  });
});
