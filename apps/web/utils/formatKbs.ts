const { format } = Intl.NumberFormat("en", {
  notation: "compact",
  style: "unit",
  unit: "byte",
  unitDisplay: "narrow",
});

export function formatKbs(value: number) {
  return format(value);
}
