import { expect, test } from "vitest";
import { createPath } from "./main";

const cases: {
  regExp: RegExp;
  path: string;
}[] = [
  {
    regExp: /\//,
    path: "/",
  },
  {
    regExp: /\/(?<foo>[^/]+)\/(?<bar>[^/]+)/,
    path: "/:foo/:bar",
  },
  {
    regExp: /\/(?<splat>.+)/,
    path: "/*splat",
  },
  {
    regExp: /\/users(?:\/(?<id>[^/]+))?\/delete/,
    path: "/users{/:id}/delete",
  },
];

for (const { regExp, path } of cases) {
  test(`${regExp} => "${path}"`, () => {
    expect(createPath(regExp)).toEqual(path);
  });
}
