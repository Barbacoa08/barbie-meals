import { render } from "@testing-library/react";

import { Favorites } from ".";

describe("Favorites Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<Favorites />);

    const rootElement = getByTestId("Favorites-root");
    expect(rootElement).toBeTruthy();
  });
});
