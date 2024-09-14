/**
 * Turn a regular expression (e.g., `/\/user\/(?<id>[^/]+)/`) into a path string (e.g., `"/user/:id"`).
 */
export function regExpToPathVue(regExp: RegExp): string {
  return (regExp + "")
    .replace(/\(\?<(.+?)>\\d\+\)/g, ":$1(\\d+)")
    .replace(/\(\?<(.+?)>\\d\*\)/g, ":$1(\\d+)*")
    .replace(/\(\?<(.+?)>\[\^\/]\+\)/g, ":$1")
    .replace(/\(\?<(.+?)>\.\*\)/g, ":$1*")
    .replace(/\(\?:(.+)?\)\?/g, "$1?")
    .replace(/\.\*/g, ":pathMatch(.*)*")
    .replace(/\(\?\<(.+)?>\\\/\[\^\\\/]\+\?\)\*/, ":$1*")
    .replace(/\\\//g, "/")
    .replace(/^\//, "")
    .replace(/\/[^/]*$/, "");
}
