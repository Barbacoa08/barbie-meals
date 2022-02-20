import { render } from "@testing-library/react";

import { French75 } from ".";

describe("French 75 Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<French75 />);

    const rootElement = getByTestId("French75-root");
    expect(rootElement).toBeTruthy();
  });
});
