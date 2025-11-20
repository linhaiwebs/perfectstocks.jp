import { StockInfo, StockPrice } from '../types/stock';

interface SplitStockCardProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function SplitStockCard({ info, latestPrice }: SplitStockCardProps) {
  const changeNum = parseFloat(info.change);
  const isPositive = changeNum >= 0;
  const changeColor = isPositive ? 'text-red-600' : 'text-green-600';

  const getValueColor = (current: string, reference: string) => {
    const currentNum = parseFloat(current.replace(/,/g, ''));
    const referenceNum = parseFloat(reference.replace(/,/g, ''));
    if (isNaN(currentNum) || isNaN(referenceNum)) return 'text-gray-700';
    if (currentNum > referenceNum) return 'text-red-600';
    if (currentNum < referenceNum) return 'text-green-600';
    return 'text-gray-700';
  };

  return (
    <div className="px-4 py-2">
      <div className="max-w-lg mx-auto">
        <div className="relative">
          <div className="px-6 py-8">
            <div className="flex gap-6">
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <span className="text-xs text-white font-bold">現在値</span>
                  <span className={`ml-2 text-sm font-black ${changeColor}`}>¥{info.price}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-white font-bold">始値</span>
                  <span className={`ml-2 text-xs font-semibold ${getValueColor(latestPrice?.open || info.price, info.price)}`}>
                    {latestPrice?.open || info.price}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-white font-bold">高値</span>
                  <span className={`ml-2 text-xs font-semibold ${getValueColor(latestPrice?.high || info.price, info.price)}`}>
                    {latestPrice?.high || info.price}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-white font-bold">終値</span>
                  <span className={`ml-2 text-xs font-semibold ${getValueColor(latestPrice?.close || info.price, info.price)}`}>
                    {latestPrice?.close || info.price}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-white font-bold">安値</span>
                  <span className={`ml-2 text-xs font-semibold ${getValueColor(latestPrice?.low || info.price, info.price)}`}>
                    {latestPrice?.low || info.price}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-white font-bold">売買高</span>
                  <span className="ml-2 text-xs text-white font-semibold">{latestPrice?.volume || 'N/A'}</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-white text-xs font-black text-center mb-1">
                    <span className="font-black">株</span> {info.code}
                  </div>
                  <div className="text-[10px] text-blue-300 font-bold text-center mb-1">
                    {latestPrice?.date || info.timestamp}
                  </div>
                  <div className="text-xs font-black text-center text-white">
                    {info.name}
                  </div>
                  <div className={`text-xs font-bold text-center whitespace-nowrap mt-1 ${changeColor}`}>
                    {info.change} {info.changePercent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 text-center">
          <p className="text-xs text-blue-300">
            データ出典: 公開市場情報（準リアルタイム）
          </p>
          <p className="text-xs text-blue-400 mt-1">
            ※本情報は参考資料であり、投資助言ではありません
          </p>
        </div>
      </div>
    </div>
  );
}
