import { render } from "@testing-library/react";

import { AsainFoodStore } from ".";

describe("AsainFoodStore Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<AsainFoodStore />);

    const rootElement = getByTestId("AsainFoodStore-root");
    expect(rootElement).toBeTruthy();
  });
});
