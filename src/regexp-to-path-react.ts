/**
 * Turn a regular expression (e.g., `/\/user\/(?<id>[^/]+)/`) into a path string (e.g., `"/user/:id"`).
 */
export function regExpToPathReact(regExp: RegExp): string {
  return (
    (regExp + "")
      // splats
      .replace(/\(\\\/\[\^\/]\+\?\)\*/, "/*")

      // dynamic segments
      .replace(/\(\?<(.+?)>\[\^\/]\+\)/g, ":$1")

      // optional segments
      .replace(/\(\?:(.+)?\)\?/g, "$1?")

      // segments
      .replace(/\\\//g, "/")

      // no match
      .replace(/\.\*/g, "*")

      // start and end
      .replace(/^\//, "")
      .replace(/\/[^/]*$/, "")
  );
}
