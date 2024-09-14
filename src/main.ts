/**
 * Turn a regular expression (e.g., `/\/users\/(?<id>[^/]+)/`) into a path string (e.g., `"/users/:id"`).
 */
export function createPath(regExp: RegExp): string {
  return (
    (regExp + "")
      // e.g., /.+/ => ".+"
      .replace(/^\//, "")
      .replace(/\/$/, "")

      // segments
      // e.g., /\// => "/"
      .replace(/\\\//g, "/")

      // parameters
      // e.g., /\/(?<foo>.+)\/(?<bar>.+)/ => "/:foo/:bar"
      .replace(/\(\?<(.+?)>\[\^\/]\+\)/g, ":$1")

      // wildcard
      // e.g., /\/(?<splat>)+/ => "/*splat"
      .replace(/\(\?<(.+?)>\.\+\)/g, "*$1")

      // optional
      // e.g., /\/users(?:\/(?<id>.+))?\/delete/ => "/users{/:id}/delete"
      .replace(/\(\?:(.+)?\)\?/g, "{$1}")
  );
}
