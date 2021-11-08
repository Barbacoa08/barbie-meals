import { render } from "@testing-library/react";

import { BakedCarrotPotatoes } from ".";

describe("BakedCarrotPotatoes Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<BakedCarrotPotatoes />);

    const rootElement = getByTestId("BakedCarrotPotatoes-root");
    expect(rootElement).toBeTruthy();
  });
});
