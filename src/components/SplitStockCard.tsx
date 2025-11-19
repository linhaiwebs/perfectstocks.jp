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
          className="relative rounded-lg overflow-hidden"
          style={{
            backgroundImage: 'url(/top.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 px-6 py-8">
            <div className="flex gap-6">
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <span className="text-xs text-gray-700 font-bold">現在値</span>
                  <span className="ml-2 text-sm text-gray-800 font-black">¥{info.price}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-700 font-bold">始値</span>
                  <span className="ml-2 text-xs text-gray-700">{latestPrice?.open || info.price}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-700 font-bold">高値</span>
                  <span className="ml-2 text-xs text-gray-700">{latestPrice?.high || info.price}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-700 font-bold">終値</span>
                  <span className="ml-2 text-xs text-gray-700">{latestPrice?.close || info.price}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-700 font-bold">安値</span>
                  <span className="ml-2 text-xs text-gray-700">{latestPrice?.low || info.price}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-gray-700 font-bold">売買高</span>
                  <span className="ml-2 text-xs text-gray-700">{latestPrice?.volume || 'N/A'}</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-start">
                <div className="relative">
                  <img src="/bot.png" alt="bot" className="w-32 h-auto relative z-0" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="text-red-600 text-xl font-black text-center">
                      {info.code}
                    </div>
                    <div className="text-xs text-gray-700 font-bold text-center whitespace-nowrap mt-1">
                      {info.change} {info.changePercent}
                    </div>
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
