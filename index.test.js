import index from "./index.js";

test("we don't get errors when trying to import mongo", () => {
  const convertedVal = index(12);
  expect(convertedVal).toEqual(12);
});

