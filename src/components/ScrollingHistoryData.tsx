import { StockPrice } from '../types/stock';
import { useState, useEffect } from 'react';

interface ScrollingHistoryDataProps {
  prices: StockPrice[];
  stockName: string;
}

export default function ScrollingHistoryData({ prices, stockName }: ScrollingHistoryDataProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % prices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [prices.length]);

  if (prices.length === 0) {
    return null;
  }

  const displayPrices = [
    prices[currentIndex % prices.length],
    prices[(currentIndex + 1) % prices.length],
    prices[(currentIndex + 2) % prices.length],
  ];

  const formatChange = (change: string, changePercent: string) => {
    const changeNum = parseFloat(change);
    const sign = changeNum >= 0 ? '+' : '';
    return `${sign}${change} (${sign}${changePercent}%)`;
  };

  return (
    <div className="px-4 py-3">
      <div className="max-w-lg mx-auto space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 border-2 border-pink-400">
            <div className="space-y-2">
              <div className="text-sm text-gray-700">
                <span className="font-semibold">株</span> {displayPrices[0].code || stockName}
              </div>
              <div className="text-xs text-gray-600">{displayPrices[0].date}</div>
              <div className="text-sm">
                <span className="text-gray-700">終値: </span>
                <span className="text-green-600 font-bold">{displayPrices[0].close}</span>
              </div>
              <div className="text-xs text-gray-700 font-medium">{stockName}</div>
              <div className="text-xs text-gray-600">
                前日比: {formatChange(displayPrices[0].change, displayPrices[0].changePercent)}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border-2 border-pink-400">
            <div className="space-y-2">
              <div className="text-sm text-gray-700">
                <span className="font-semibold">株</span> {displayPrices[1].code || stockName}
              </div>
              <div className="text-xs text-gray-600">{displayPrices[1].date}</div>
              <div className="text-sm">
                <span className="text-gray-700">終値: </span>
                <span className="text-green-600 font-bold">{displayPrices[1].close}</span>
              </div>
              <div className="text-xs text-gray-700 font-medium">{stockName}</div>
              <div className="text-xs text-gray-600">
                前日比: {formatChange(displayPrices[1].change, displayPrices[1].changePercent)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border-2 border-pink-400">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <div className="text-sm text-gray-700">
                <span className="font-semibold">株</span> {displayPrices[2].code || stockName}
              </div>
              <div className="text-xs text-gray-600">{displayPrices[2].date}</div>
            </div>
            <div className="text-right space-y-1">
              <div className="text-sm">
                <span className="text-gray-700">終値: </span>
                <span className="text-green-600 font-bold">{displayPrices[2].close}</span>
              </div>
              <div className="text-xs text-gray-600">
                前日比: {formatChange(displayPrices[2].change, displayPrices[2].changePercent)}
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
