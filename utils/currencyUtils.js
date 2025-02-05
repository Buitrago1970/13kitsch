export const convertPrice = (price, rates, targetCurrency) => {
  if (!rates || !price) return price;
  
  // Si la moneda objetivo es USD, retornamos el precio original
  if (targetCurrency === 'USD') return price;
  
  // Convertimos el precio a la moneda objetivo
  const convertedPrice = price * rates[targetCurrency];
  
  return Math.round(convertedPrice);
};

export const formatPrice = (price, currency) => {
  const formatConfig = {
    USD: { locale: 'en-US', currency: 'USD' },
    EUR: { locale: 'de-DE', currency: 'EUR' },
    COP: { locale: 'es-CO', currency: 'COP' },
    JPY: { locale: 'ja-JP', currency: 'JPY' },
    CNY: { locale: 'zh-CN', currency: 'CNY' },
  };

  const config = formatConfig[currency] || formatConfig.USD;

  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: config.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
