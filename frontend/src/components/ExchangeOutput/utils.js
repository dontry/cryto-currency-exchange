export function formatTime(time) {
  return time.substr(0, 2) + ":" + time.substr(2);
}

export function formatDate(date) {
  return date.substr(0, 4) + "-" + date.substr(4, 2) + "-" + date.substr(6);
}

export function calculateProfit(buyPrice = 0, sellPrice = 0) {
  return Number(Number(sellPrice) - Number(buyPrice)).toFixed(2);
}
