import { render } from "@testing-library/react";

import { ToggleButton } from ".";
import { mockdata } from "./mock-data";

describe("ToggleButton Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(<ToggleButton {...mockdata} />);

    const rootElement = getByTestId("ToggleButton-root");
    expect(rootElement).toBeTruthy();
  });
});
