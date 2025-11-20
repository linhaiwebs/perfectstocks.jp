import { StockPrice } from '../types/stock';
import { useState, useEffect } from 'react';

interface ScrollingHistoryDataProps {
  prices: StockPrice[];
  stockName: string;
}

export default function ScrollingHistoryData({ prices, stockName }: ScrollingHistoryDataProps) {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (prices.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next >= prices.length ? 1 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [prices.length]);

  if (prices.length === 0) {
    return null;
  }

  const latestPrice = prices[0];
  const currentPrice = prices.length > 1 ? prices[currentIndex] : latestPrice;

  const formatChange = (change: string, changePercent: string) => {
    const changeNum = parseFloat(change);
    const sign = changeNum >= 0 ? '+' : '';
    return `${sign}${change} (${sign}${changePercent}%)`;
  };

  return (
    <div className="px-4 py-2">
      <div className="max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 border-2 border-pink-400">
            <div className="space-y-2">
              <div className="text-sm text-gray-700">
                <span className="font-semibold">株</span> {latestPrice.code || stockName}
              </div>
              <div className="text-xs text-gray-600">{latestPrice.date}</div>
              <div className="text-sm">
                <span className="text-gray-700">終値: </span>
                <span className="text-green-600 font-bold">{latestPrice.close}</span>
              </div>
              <div className="text-xs text-gray-700 font-medium">{stockName}</div>
              <div className="text-xs text-gray-600">
                前日比: {formatChange(latestPrice.change, latestPrice.changePercent)}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border-2 border-pink-400">
            <div className="space-y-2">
              <div className="text-sm text-gray-700">
                <span className="font-semibold">株</span> {currentPrice.code || stockName}
              </div>
              <div className="text-xs text-gray-600">{currentPrice.date}</div>
              <div className="text-sm">
                <span className="text-gray-700">終値: </span>
                <span className="text-green-600 font-bold">{currentPrice.close}</span>
              </div>
              <div className="text-xs text-gray-700 font-medium">{stockName}</div>
              <div className="text-xs text-gray-600">
                前日比: {formatChange(currentPrice.change, currentPrice.changePercent)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 text-center">
          <p className="text-xs text-blue-300">
            データ出典: 公開市場情報 | 更新: 準リアルタイム
          </p>
          <p className="text-xs text-blue-400 mt-1">
            ※過去のデータは将来の結果を保証するものではありません
          </p>
        </div>
      </div>
    </div>
  );
}
