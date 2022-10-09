const byte = Intl.NumberFormat("en", {
  notation: "compact",
  style: "unit",
  unit: "byte",
  unitDisplay: "narrow",
});

const number = Intl.NumberFormat("en", {
  notation: "compact",
  unitDisplay: "narrow",
});

export function formatKbs(value: number) {
  return byte.format(value);
}

export function formatNumber(value: number) {
  return number.format(value);
}
