export const currencyFormat = (stringof: number) => {
  const numberFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(stringof);
  return numberFormatted
}

export const floatToCurrencyFormat = (price: number) => {
  const priceFormat = price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });

  return priceFormat;
};

export const currencyToFloatFormat = (price: string) => {
  if (!price) return;

  const priceWithoutString = price.toString().replace('R$', '');
  const priceWithoutThousand = priceWithoutString.replaceAll('.', '');
  const priceFormatted = +priceWithoutThousand.replace(',', '.');

  return priceFormatted;
};