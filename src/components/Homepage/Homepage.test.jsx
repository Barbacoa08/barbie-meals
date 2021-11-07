import { render } from "@testing-library/react";
import PouchDB from "pouchdb";
import memory from "pouchdb-adapter-memory";
import { Provider } from "use-pouchdb";

import { Homepage } from ".";

describe("Homepage Component", () => {
  PouchDB.plugin(memory);
  let mockPouchDB;
  beforeEach(() => {
    mockPouchDB = new PouchDB("test", { adapter: "memory" });
  });
  afterEach(async () => {
    await mockPouchDB?.destroy();
  });

  it("fully renders without exploding", () => {
    jest.spyOn(console, "error").mockImplementation(() => {}); // HACK: Favorites.tsx needs to mock things properly
    const { getByTestId } = render(
      <Provider pouchdb={mockPouchDB}>
        <Homepage />
      </Provider>
    );

    const rootElement = getByTestId("Homepage-root");
    expect(rootElement).toBeTruthy();
  });
});
