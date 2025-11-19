import { StockInfo, StockPrice } from '../types/stock';

interface SplitStockCardProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function SplitStockCard({ info, latestPrice }: SplitStockCardProps) {
  return (
    <div className="px-4 py-3">
      <div className="max-w-lg mx-auto">
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
          style={{
            backgroundImage: 'url(/top.png)',
            backgroundSize: 'cover'
          }}
        >
          <div className="relative z-10 px-6 py-8">
            <div className="flex gap-6">
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-bold">現在値</span>
                  <span className="text-xl text-gray-800 font-black">¥{info.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-bold">始値</span>
                  <span className="text-base text-gray-700">{latestPrice?.open || info.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-bold">高値</span>
                  <span className="text-base text-gray-700">{latestPrice?.high || info.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-bold">終値</span>
                  <span className="text-base text-gray-700">{latestPrice?.close || info.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-bold">安値</span>
                  <span className="text-base text-gray-700">{latestPrice?.low || info.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 font-bold">売買高</span>
                  <span className="text-base text-gray-700">{latestPrice?.volume || 'N/A'}</span>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-red-600 text-2xl font-black mb-2">
                  {info.code}
                </div>
                <div className="relative">
                  <img src="/bot.png" alt="bot" className="w-32 h-auto" />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-sm text-gray-700 font-bold">
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
