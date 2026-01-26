interface FormatPriceOptions {
  value: number;
  currency: string;
  locale: string;
}

export function formatPrice({ value, currency, locale }: FormatPriceOptions) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(value);
}
