import { render } from "@testing-library/react";
import PouchDB from "pouchdb";
import memory from "pouchdb-adapter-memory";
import { Provider } from "use-pouchdb";

import { Favorites } from ".";

describe("Favorites Component", () => {
  PouchDB.plugin(memory);
  let mockPouchDB;
  beforeEach(() => {
    mockPouchDB = new PouchDB("test", { adapter: "memory" });
  });
  afterEach(async () => {
    await mockPouchDB?.destroy();
  });

  it("fully renders without exploding", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    const { getByTestId } = render(
      <Provider pouchdb={mockPouchDB}>
        <Favorites />
      </Provider>
    );

    const rootElement = getByTestId("Favorites-root");
    expect(rootElement).toBeTruthy();
  });
});
