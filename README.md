# RegExp-to-Path

> Turn a regular expression (e.g., `/\/user\/(?<id>[^/]+)/`) into a path string (e.g., `"/user/:id"`).

## Comparison

### Parameters

RegExp: `/\/user\/(?<id>[^/]+)/`

Matches: `/user/1`, `/user/2`, `/user/3`, etc.

|                | Path        | Document                                                                 |
| -------------- | ----------- | ------------------------------------------------------------------------ |
| Angular        | `/user/:id` | https://angular.dev/guide/routing/router-reference#configuration         |
| Path-To-RegExp | `/user/:id` | https://github.com/pillarjs/path-to-regexp?tab=readme-ov-file#parameters |
| React          | `/user/:id` | https://reactrouter.com/start/framework/routing#dynamic-segments         |
| Vue            | `/user/:id` | https://router.vuejs.org/guide/essentials/dynamic-matching.html          |

### Optional

RegExp: `/(?:\/(?<lang>[^/]+))?\/categories/`

Matches: `/categories`, `/en/categories`, `/fr/categories`, etc.

|                | Path                  | Document                                                                                 |
| -------------- | --------------------- | ---------------------------------------------------------------------------------------- |
| Angular        | -                     | https://angular.dev/guide/routing/routing-with-urlmatcher                                |
| Path-To-RegExp | `{/:lang}/categories` | https://github.com/pillarjs/path-to-regexp?tab=readme-ov-file#optional                   |
| React          | `/:lang?/categories`  | https://reactrouter.com/start/framework/routing#optional-segments                        |
| Vue            | `/:lang?/categories`  | https://router.vuejs.org/guide/essentials/route-matching-syntax.html#Optional-parameters |

### Repeatable

RegExp: `/\/files(?<path>\/[^\/]+?)*/`. (needs to extract each segment manually)

Matches: `/files/1`, `/files/1/2`, `/files/1/2/3`, etc.

|                | Path            | Document                                                                               |
| -------------- | --------------- | -------------------------------------------------------------------------------------- |
| Angular        | -               | https://angular.dev/guide/routing/routing-with-urlmatcher                              |
| Path-To-RegExp | `/files/*path`  | https://github.com/pillarjs/path-to-regexp?tab=readme-ov-file#wildcard                 |
| React          | `/files/*`      | https://reactrouter.com/start/framework/routing#splats                                 |
| Vue            | `/files/:path*` | https://router.vuejs.org/guide/essentials/route-matching-syntax.html#Repeatable-params |

### Wildcard

RegExp: `/.*/`

Matches: anything

|                | Path               | Document                                                                                      |
| -------------- | ------------------ | --------------------------------------------------------------------------------------------- |
| Angular        | `**`               | https://angular.dev/guide/routing/router-reference#configuration                              |
| Path-To-RegExp | `/*path`           | https://github.com/pillarjs/path-to-regexp?tab=readme-ov-file#wildcard                        |
| React          | `*`                | https://reactrouter.com/start/framework/routing#splats                                        |
| Vue            | `/:pathMatch(.*)*` | https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route |

## Demo

```ts
// For Path-to-regexp, e.g., `/\/user\/(?<id>[^/]+)/` `"/user/:id"`
import { regExpToPath } from "regexp-to-path";

// For Angular, e.g., `/.*/` `"**"`
// import { regExpToPathAngular } from "regexp-to-path";

// For React, e.g., `/\/project(?:\/task)?\/(?<taskId>[^/]+)/` `"/project/task?/:taskId"`
// import { regExpToPathReact } from "regexp-to-path";

// For Vue, e.g., `/\/(?<chapters>\d*)/` `"/:chapters(\\d+)*"`
// import { regExpToPathVue } from "regexp-to-path";
```

```ts
regExpToPath(/\/user\/(?<id>[^/]+)/);
//=> "/user/:id"
```
