import { StockInfo, StockPrice } from '../types/stock';

interface SplitStockCardProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function SplitStockCard({ info, latestPrice }: SplitStockCardProps) {
  const changeNum = parseFloat(info.change);
  const isPositive = changeNum >= 0;
  const changeColor = isPositive ? 'text-red-600' : 'text-green-600';
  const bgColor = isPositive ? 'bg-red-50' : 'bg-green-50';
  const borderColor = isPositive ? 'border-red-200' : 'border-green-200';

  return (
    <div className="px-4 py-3">
      <div className="max-w-md mx-auto">
        <div
          className={`rounded-2xl border-2 ${borderColor} ${bgColor} p-4 shadow-sm`}
          style={{ backgroundColor: '#fef9f5' }}
        >
          <div className="flex justify-center mb-3">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md">
              株-{info.code} {latestPrice?.date || info.timestamp}
            </div>
          </div>

          <div className="text-center mb-3">
            <div className="text-base font-medium text-gray-700 mb-1">
              銘柄：{info.price} 三井倉庫
            </div>
          </div>

          <div className={`rounded-xl border-2 ${borderColor} p-3 text-center`}>
            <div className="text-sm text-gray-600 mb-1">
              前日比：<span className={`font-bold ${changeColor}`}>{info.change} ({info.changePercent})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
