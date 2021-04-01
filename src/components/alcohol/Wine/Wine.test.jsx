import { render } from "@testing-library/react";

import { Wine } from ".";

describe("Wine Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<Wine />);

    const rootElement = getByTestId("Wine-root");
    expect(rootElement).toBeTruthy();
  });
});
