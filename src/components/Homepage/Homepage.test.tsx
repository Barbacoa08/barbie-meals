import { Container } from "@chakra-ui/layout";
import * as ShallowRenderer from "react-test-renderer/shallow";

import { Homepage } from ".";

describe("Homepage Component", () => {
  it("shallow renders without exploding", () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<Homepage />);
    const { type, props } = renderer.getRenderOutput();

    expect(type).toBe(Container);
    expect(props["data-testid"]).toBe("Homepage-root");
  });

  /**
   * NOTE: in order to test a "full render", I need to fully mock
   * pouchdb and get `Favorites.tsx`'s async behavior properly mocked.
   * That's quite the endeavor, and not worth the dev time at this point.
   */
  // import { render } from "@testing-library/react";
  // it("fully renders without exploding", () => {
  //   const { getByTestId } = render(
  //     <Provider pouchdb={mockPouchDB}>
  //       <Homepage />
  //     </Provider>
  //   );

  //   const rootElement = getByTestId("Homepage-root");
  //   expect(rootElement).toBeTruthy();
  // });
});
