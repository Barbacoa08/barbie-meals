import { render } from "@testing-library/react";

import { LeftNav } from ".";

describe("LeftNav Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<LeftNav />);

    const rootElement = getByTestId("LeftNav-root");
    expect(rootElement).toBeTruthy();
  });
});
