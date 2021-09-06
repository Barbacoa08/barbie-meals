import { render } from "@testing-library/react";

import { Nachos } from ".";

describe("Nachos Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<Nachos />);

    const rootElement = getByTestId("Nachos-root");
    expect(rootElement).toBeTruthy();
  });
});
