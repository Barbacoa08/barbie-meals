import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

import { Hidden } from ".";

describe("Hidden Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Hidden />
      </MockedProvider>
    );

    const rootElement = getByTestId("Hidden-root");
    expect(rootElement).toBeTruthy();
  });
});
