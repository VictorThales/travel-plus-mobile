export const formatCurrency = (text: string) => {
  const cleanValue = text.replace(/\D/g, '');
  const formattedValue = (parseInt(cleanValue) / 100)
    .toFixed(2)
    .replace('.', ',');
  return 'R$ ' + formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
