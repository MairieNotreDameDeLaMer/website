import { useMatch } from '@reach/router'

export default function useRouteMatch(patterns: readonly string[]) {
  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i]
    const possibleMatch = useMatch(pattern)
    if (possibleMatch !== null) {
      return possibleMatch
    }
  }

  return null
}
