import { useMatch } from '@reach/router'

export default function useRouteMatch(patterns: readonly string[]) {
  return patterns
    .map((pattern) => useMatch(pattern))
    .reduce((acc, cur) => {
      if (acc === null && cur !== null) {
        return cur
      }
      return acc
    }, null)
}
