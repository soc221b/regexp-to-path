import { expect, test } from "vitest";
import { regExpToPath } from "./regexp-to-path";

const cases: {
  regExp: RegExp;
  path: string;
}[] = [
  {
    regExp: /\//,
    path: "/",
  },
  {
    // flags are all ignored
    regExp: /\//g,
    path: "/",
  },
  {
    regExp: /\/about/,
    path: "/about",
  },
  {
    regExp: /\/(?<foo>[^/]+)\/(?<bar>[^/]+)/,
    path: "/:foo/:bar",
  },
  {
    regExp: /(?<splat>\/[^\/]+?)*/,
    path: "/*splat",
  },
  {
    regExp: /\/users(?:\/(?<id>[^/]+))?\/delete/,
    path: "/users{/:id}/delete",
  },
];

for (const { regExp, path } of cases) {
  test(`${regExp} => "${path}"`, () => {
    expect(regExpToPath(regExp)).toEqual(path);
  });
}
