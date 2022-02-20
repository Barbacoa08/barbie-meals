import { cleanup, render } from "@testing-library/react";
import PouchDB from "pouchdb";
import memory from "pouchdb-adapter-memory";
import { Provider } from "use-pouchdb";

import { routes } from "navigation";

import { Favorites } from ".";

jest.mock("navigation", () => {
  return {
    __esModule: true,
    routes: {
      alcohol: {},
      recipes: {},
    },
  };
});

describe("Favorites Component", () => {
  PouchDB.plugin(memory);
  let mockPouchDB = new PouchDB("test", { adapter: "memory" });
  beforeEach(() => {
    mockPouchDB = new PouchDB("test", { adapter: "memory" });
  });
  afterEach(async () => {
    await mockPouchDB.destroy();
    cleanup();
  });

  it("mocks navigation import so that we don't have unexpected state updates", () => {
    expect(Object.keys(routes)).toHaveLength(2);
    expect(Object.keys(routes.alcohol)).toHaveLength(0);
    expect(Object.keys(routes.recipes)).toHaveLength(0);
  });

  it("fully renders without exploding", async () => {
    const { getByTestId } = render(
      <Provider pouchdb={mockPouchDB}>
        <Favorites />
      </Provider>
    );

    const rootElement = getByTestId("Favorites-root");
    expect(rootElement).toBeTruthy();
  });
});
