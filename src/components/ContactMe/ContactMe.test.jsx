import { render } from "@testing-library/react";

import { ContactMe } from ".";

describe("ContactMe Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<ContactMe />);

    const rootElement = getByTestId("ContactMe-root");
    expect(rootElement).toBeTruthy();
  });
});
