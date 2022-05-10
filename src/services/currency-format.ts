export const currencyFormat = (stringof: number) => {
  const numberFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(stringof);
  return numberFormatted
}