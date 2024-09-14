/**
 * Turn a regular expression (e.g., `/\/user\/(?<id>[^/]+)/`) into a path string (e.g., `"/user/:id"`).
 */
export function regExpToPathAngular(regExp: RegExp): string {
  return (
    (regExp + "")
      // token
      .replace(/\(\?<(.+?)>\[\^\/]\+\)/g, ":$1")

      // wildcard
      .replace(/\.\*/, "**")

      // segments
      .replace(/\\\//g, "/")

      // start and end
      .replace(/^\//, "")
      .replace(/\/[^/]*$/, "")
  );
}
