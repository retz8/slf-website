export function splitIntoParts(paragraph: string): string[] {
  const sentences = paragraph
    .split(/[.!?]/)
    .filter((sentence) => sentence.trim() !== "");
  const parts = [];
  for (let i = 0; i < sentences.length; i += 2) {
    parts.push(sentences.slice(i, i + 2).join("."));
  }
  return parts;
}
