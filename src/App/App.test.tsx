import { render } from "@testing-library/react";
import * as ShallowRenderer from "react-test-renderer/shallow";

import { App } from ".";

describe("App Component", () => {
  it("shallow renders without exploding", () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<App />);
    const { type, props } = renderer.getRenderOutput();

    expect(type).toBe("main");
    expect(props["data-testid"]).toBe("App-root");
  });

  it("fully renders without exploding", () => {
    const { getByTestId } = render(<App />);

    const rootElement = getByTestId("App-root");
    expect(rootElement).toBeTruthy();
  });
});
