import { render } from "@testing-library/react";

import { Ingredient } from ".";

describe("Ingredient Component", () => {
  it("fully renders without exploding", () => {
    const { getByTestId } = render(
      <Ingredient
        ingredient="example"
        ingredientOpinionated=""
        portion="1/2 cup"
      />
    );

    const rootElement = getByTestId("Ingredient-root");
    expect(rootElement).toBeTruthy();
  });
});
