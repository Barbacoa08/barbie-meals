import { render } from "@testing-library/react";
import PouchDB from "pouchdb";
import memory from "pouchdb-adapter-memory";
import * as ShallowRenderer from "react-test-renderer/shallow";

import { App } from ".";

describe("App Component", () => {
  PouchDB.plugin(memory);
  let myPouch: PouchDB.Database<{}> | undefined;
  beforeEach(() => {
    myPouch = new PouchDB("test", { adapter: "memory" });
  });
  afterEach(async () => {
    await myPouch?.destroy();
  });

  it("shallow renders without exploding", () => {
    const renderer = ShallowRenderer.createRenderer();
    renderer.render(<App />);
    const { type, props } = renderer.getRenderOutput();

    expect(type).toBe("main");
    expect(props["data-testid"]).toBe("App-root");
  });

  it("fully renders without exploding", () => {
    jest.spyOn(console, "error").mockImplementation(() => {}); // HACK: Favorites.tsx needs to mock things properly
    const { getByTestId } = render(<App />);

    const rootElement = getByTestId("App-root");
    expect(rootElement).toBeTruthy();
  });
});

// TODO: should work w/ just-the-recipe
// https://www.justtherecipe.app/
// https://www.justtherecipe.app/recipe?url=https://www.allrecipes.com/recipe/16354/easy-meatloaf/
