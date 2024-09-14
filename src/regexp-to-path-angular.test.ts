import { expect, test } from "vitest";
import { regExpToPathAngular } from "./regexp-to-path-angular";

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
    regExp: /.*/,
    path: "**",
  },
];

for (const { regExp, path } of cases) {
  test(`${regExp} => "${path}"`, () => {
    expect(regExpToPathAngular(regExp)).toEqual(path);
  });
}
