import { expect, test } from "vitest";
import { regExpToPathReact } from "./regexp-to-path-react";

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
    regExp: /\/teams\/(?<teamId>[^/]+)/,
    path: "/teams/:teamId",
  },
  {
    regExp: /\/c\/(?<categoryId>[^/]+)\/p\/(?<productId>[^/]+)/,
    path: "/c/:categoryId/p/:productId",
  },
  {
    regExp: /(?:\/(?<lang>[^/]+))?\/categories/,
    path: "/:lang?/categories",
  },
  {
    regExp: /\/project(?:\/task)?\/(?<taskId>[^/]+)/,
    path: "/project/task?/:taskId",
  },
  {
    regExp: /\/files(\/[^/]+?)*/,
    path: "/files/*",
  },
  {
    regExp: /.*/,
    path: "*",
  },
];

for (const { regExp, path } of cases) {
  test(`${regExp} => "${path}"`, () => {
    expect(regExpToPathReact(regExp)).toEqual(path);
  });
}
