/**
 * The helper formatis a balance from stripe API to MXN format
 * @param {*} data
 * @returns
 */
export function formatBalance(data) {
  const balance = data?.balance?.amount;

  const formatBalance = parseFloat(
    `${balance?.toString().slice(0, -2)}.${balance?.toString().slice(-2)})`
  ).toLocaleString("en", {
    style: "currency",
    currency: "MXN",
  });

  return formatBalance;
}
