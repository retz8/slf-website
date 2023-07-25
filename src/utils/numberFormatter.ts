/** Formats a number with commas */
export function formatNumberWithCommas(number: Number) {
  const numStr = String(number);
  const parts = numStr.split(".");

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
}

/** Formats a number with alphabet abbreviation*/
export function formatNumberWithAbbreviation(number: number): string {
  const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

  const absNumber = Math.abs(number);
  const tier = (Math.log10(absNumber) / 3) | 0;

  if (tier === 0) return String(number);

  const scaledNumber = absNumber / Math.pow(1000, tier);
  const roundedNumber = Math.floor(scaledNumber).toString();

  return `${number < 0 ? "-" : ""}${roundedNumber}${SI_SYMBOL[tier]}`;
}
