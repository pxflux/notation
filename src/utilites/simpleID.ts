let counter = 0
const characters = 'abcdefghijklmnopqrstuvwxyz'
const charLength = characters.length

export default function simpleID (existingIds?: string[]): string {
  counter++
  const letter = characters.charAt(Math.floor(Math.random() * charLength))
  const test = letter + Math.random().toString(36).substr(2, 6) + counter
  if (existingIds && existingIds.length && existingIds.includes(test)) {
    return simpleID(existingIds)
  }
  return test
}
