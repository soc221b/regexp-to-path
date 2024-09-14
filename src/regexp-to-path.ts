/**
 * Turn a regular expression (e.g., `/\/user\/(?<id>[^/]+)/`) into a path string (e.g., `"/user/:id"`).
 */
export function regExpToPath(regExp: RegExp): string {
  return (
    (regExp + "")
      // splats
      .replace(/\(\?\<(.+)?>\\\/\[\^\\\/]\+\?\)\*/, "/*$1")

      // parameters
      .replace(/\(\?<(.+?)>\[\^\/]\+\)/g, ":$1")

      // optional
      .replace(/\(\?:(.+)?\)\?/g, "{$1}")

      // segments
      .replace(/\\\//g, "/")

      // start and end
      .replace(/^\//, "")
      .replace(/\/[^/]*$/, "")
  );
}
