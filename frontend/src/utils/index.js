export function formatTime(time) {
  if (time) {
    return time.substr(0, 2) + ":" + time.substr(2);
  } else {
    return "--";
  }
}

export function formatDate(date) {
  if (date) {
    return date.substr(0, 4) + "-" + date.substr(4, 2) + "-" + date.substr(6);
  } else {
    return "--";
  }
}

export function calculateProfit(buyPrice = 0, sellPrice = 0) {
  return Number(Number(sellPrice) - Number(buyPrice)).toFixed(2);
}

export function convertPricesIntoList(prices) {
  return prices.reduce((list, price) => {
    const { currency, date, quotes } = price;
    const rows = quotes.map(q => ({
      currency,
      date,
      time: q.time,
      price: q.price
    }));
    return [...list, ...rows];
  }, []);
}

// prices: [{time, price}]
//only return 2 decimals
export function getMaxProfitFromGivenPriceIndex(prices, buyIndex) {
  let maxProfit = Number.NEGATIVE_INFINITY,
    sellIndex = -1;
  for (let i = buyIndex + 1; i < prices.length; i++) {
    const diff = Number(prices[i].price) - Number(prices[buyIndex].price);
    if (diff > maxProfit) {
      maxProfit = diff;
      sellIndex = i;
    }
  }
  maxProfit = maxProfit > 0 ? Math.round(maxProfit * 100) / 100 : null;

  return {
    buy: prices[buyIndex],
    sell: maxProfit ? prices[sellIndex] : {},
    profit: maxProfit
  };
}

export function cleanObject(obj) {
  Object.keys(obj).forEach(key => obj[key] == null && delete obj[key]);
  return obj;
}
