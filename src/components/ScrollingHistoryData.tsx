import { StockPrice } from '../types/stock';
import { useState, useEffect } from 'react';

interface ScrollingHistoryDataProps {
  prices: StockPrice[];
  stockName: string;
}

export default function ScrollingHistoryData({ prices, stockName }: ScrollingHistoryDataProps) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (prices.length <= 3) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const next = prev + 1;
        return next >= prices.length - 2 ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [prices.length]);

  const placeholderPrices: StockPrice[] = [
    { date: '----/--/--', code: '----', close: '---', change: '0', changePercent: '0' },
    { date: '----/--/--', code: '----', close: '---', change: '0', changePercent: '0' },
    { date: '----/--/--', code: '----', close: '---', change: '0', changePercent: '0' },
  ];

  const displayPrices = prices.length < 3
    ? [...prices, ...placeholderPrices].slice(0, 3)
    : [prices[startIndex], prices[startIndex + 1], prices[startIndex + 2]];

  const formatChange = (change: string, changePercent: string) => {
    const changeNum = parseFloat(change);
    const sign = changeNum >= 0 ? '+' : '';
    return `${sign}${change} (${sign}${changePercent}%)`;
  };

  const renderCard = (price: StockPrice) => {
    const changeNum = parseFloat(price.change);
    const isPositive = changeNum >= 0;
    const changeColor = isPositive ? 'text-red-600' : 'text-green-600';

    return (
      <div className="py-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-800 font-medium text-sm">
            株-{price.code}
          </span>
          <span className="text-gray-800 font-medium text-sm">
            終値：{price.close} {stockName}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-800 text-sm">
            {price.date}
          </span>
          <span className="text-gray-800 text-sm">
            前日比：<span className={`font-bold ${changeColor}`}>{formatChange(price.change, price.changePercent)}</span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-2">
      <div className="w-[80%] mx-auto">
        <div className="divide-y divide-gray-200">
          {displayPrices.map((price, index) => (
            <div key={`${price.date}-${index}`}>
              {renderCard(price)}
            </div>
          ))}
        </div>

        <div className="mt-3 text-center border-t border-gray-200 pt-3">
          <p className="text-xs text-gray-600">
            データ出典: 公開市場情報 | 更新: 準リアルタイム
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ※過去のデータは将来の結果を保証するものではありません
          </p>
        </div>
      </div>
    </div>
  );
}
