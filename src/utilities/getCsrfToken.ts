const getCsrfToken: Function = (): string => {
  const parts: string[] = document.cookie.split('; csrftoken=')
  return parts.length === 2 ? parts.pop()!.split(';').shift()! : ''
}
export default getCsrfToken