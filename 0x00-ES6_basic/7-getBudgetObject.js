export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: Number(income),
    gdp: Number(gdp),
    capita: Number(capita),
  };

  return budget;
}
