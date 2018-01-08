export function normalizePhone(text){
  return text.replace(/(^\s*\+1)|\D+/g, "").slice(0, 10)
}

export function formatPhone (text) {
  if(!text) {
    return text
  }

  const value = normalizePhone(text)
  const { length } = value
  const items = []

  if (length) {
    items.push("(")
    items.push(value.substring(0, 3))
    if (length > 3) {
      items.push(") ")
      items.push(value.substring(3, 6))
      if (length > 6) {
        items.push("-")
        items.push(value.substring(6, 10))
      }
    }
  }

  return items.join("")
}
