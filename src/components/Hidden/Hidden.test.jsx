import { render } from "@testing-library/react";

import { Hidden } from ".";

describe("Hidden Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<Hidden />);

    const rootElement = getByTestId("Hidden-root");
    expect(rootElement).toBeTruthy();
  });
});
