import { render } from "@testing-library/react";

import { ToggleButton } from ".";

describe("ToggleButton Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<ToggleButton />);

    const rootElement = getByTestId("ToggleButton-root");
    expect(rootElement).toBeTruthy();
  });
});
