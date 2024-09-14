# RegExp-to-Path

> Turn a regular expression (e.g., `/\/user\/(?<id>[^/]+)/`) into a path string (e.g., `"/user/:id"`).

## Comparison

### Dynamic Segments

RegExp: `/\/user\/(?<id>[^/]+)/`

Matches: `/user/1`, `/user/2`, `/user/3`, etc.

|                | Path        |
| -------------- | ----------- |
| Angular        | `/user/:id` |
| Path-To-RegExp | `/user/:id` |
| React          | `/user/:id` |
| Vue            | `/user/:id` |

### Optional Segments

RegExp: `/(?:\/(?<lang>[^/]+))?\/categories/`

Matches: `/categories`, `/en/categories`, `/fr/categories`, etc.

|                | Path                  |
| -------------- | --------------------- |
| Angular        | N/A                   |
| Path-To-RegExp | `{/:lang}/categories` |
| React          | `/:lang?/categories`  |
| Vue            | `/:lang?/categories`  |

### Not Found

RegExp: `/.*/`

Matches: anything

|                | Path               |
| -------------- | ------------------ |
| Angular        | `**`               |
| Path-To-RegExp | `/*path`           |
| React          | `*`                |
| Vue            | `/:pathMatch(.*)*` |

### Splats

RegExp: `/\/files(?<path>\/[^\/]+?)*/`. (needs to extract each segment manually)

Matches: `/files/1`, `/files/1/2`, `/files/1/2/3`, etc.

|                | Path            |
| -------------- | --------------- |
| Angular        | N/A             |
| Path-To-RegExp | `/files/*path`  |
| React          | `/files/*`      |
| Vue            | `/files/:path*` |

## Demo

```ts
// Framework agnostic, e.g., `/\/user\/(?<id>[^/]+)/` `"/user/:id"`
import { regExpToPath } from "regexp-to-path";

// Angular specific, e.g., `/.*/` `"**"`
// import { regExpToPathAngular } from "regexp-to-path";

// React specific, e.g., `/\/project(?:\/task)?\/(?<taskId>[^/]+)/` `"/project/task?/:taskId"`
// import { regExpToPathReact } from "regexp-to-path";

// Vue specific, e.g., `/\/(?<chapters>\d*)/` `"/:chapters(\\d+)*"`
// import { regExpToPathVue } from "regexp-to-path";
```

```ts
regExpToPath(/\/user\/(?<id>[^/]+)/);
//=> "/user/:id"
```
