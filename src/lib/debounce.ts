// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function debounce(func: any, wait: number): any {
  let timeoutId: NodeJS.Timeout | null = null

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func(...args)
    }, wait)
  }
}
