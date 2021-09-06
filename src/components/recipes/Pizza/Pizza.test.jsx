import { render } from "@testing-library/react";

import { Pizza } from ".";

describe("Pizza Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<Pizza />);

    const rootElement = getByTestId("Pizza-root");
    expect(rootElement).toBeTruthy();
  });
});
