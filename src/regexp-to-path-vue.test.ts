import { expect, test } from "vitest";
import { regExpToPathVue } from "./regexp-to-path-vue";

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
    regExp: /\/(?<foo>[^/]+)\/(?<bar>[^/]+)/,
    path: "/:foo/:bar",
  },
  {
    regExp: /\/(?<splat>\/[^\/]+?)*/,
    path: "/:splat*",
  },
  {
    regExp: /\/users(?:\/(?<id>[^/]+))?\/delete/,
    path: "/users/:id?/delete",
  },
  {
    regExp: /\/about/,
    path: "/about",
  },
  {
    regExp: /\/users\/(?<userId>[^/]+)/,
    path: "/users/:userId",
  },
  {
    regExp: /\/o\/(?<orderId>[^/]+)/,
    path: "/o/:orderId",
  },
  {
    regExp: /\/(?<orderId>\d+)/,
    path: "/:orderId(\\d+)",
  },
  {
    regExp: /\/(?<chapters>.*)/,
    path: "/:chapters*",
  },
  {
    regExp: /\/(?<chapters>\d*)/,
    path: "/:chapters(\\d+)*",
  },
  {
    regExp: /\/users(?:\/(?<id>[^/]+))?/,
    path: "/users/:id?",
  },
  {
    regExp: /\/users(?:\/(?<userId>\d+))?/,
    path: "/users/:userId(\\d+)?",
  },
  {
    regExp: /\/.*/,
    path: "/:pathMatch(.*)*",
  },
];

for (const { regExp, path } of cases) {
  test(`${regExp} => "${path}"`, () => {
    expect(regExpToPathVue(regExp)).toEqual(path);
  });
}
