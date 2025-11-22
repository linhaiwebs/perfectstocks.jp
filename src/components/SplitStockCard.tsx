import { StockInfo, StockPrice } from '../types/stock';

interface SplitStockCardProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function SplitStockCard({ info, latestPrice }: SplitStockCardProps) {
  const changeNum = parseFloat(info.change);
  const isPositive = changeNum >= 0;
  const changeColor = isPositive ? 'text-red-600' : 'text-green-600';
  const arrowColor = isPositive ? '#ef4444' : '#22c55e';
  const chartColor = isPositive ? '#ef4444' : '#22c55e';

  const getValueColor = (current: string, reference: string) => {
    const currentNum = parseFloat(current.replace(/,/g, ''));
    const referenceNum = parseFloat(reference.replace(/,/g, ''));
    if (isNaN(currentNum) || isNaN(referenceNum)) return 'text-gray-400';
    if (currentNum > referenceNum) return 'text-red-600';
    if (currentNum < referenceNum) return 'text-green-600';
    return 'text-gray-400';
  };

  return (
    <div className="px-4 py-2">
      <div className="max-w-lg mx-auto">
        <div className="px-6 py-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 px-3 py-2 mb-3 rounded">
            <p className="text-xs text-blue-900 font-semibold">
              📊 データ出典: 公開市場情報 | 学習・参考用
            </p>
          </div>
          <div className="text-center mb-2" style={{ color: '#4a9ebb', fontSize: '0.9rem' }}>
            {latestPrice?.date || info.timestamp}
          </div>
          <div className="text-center mb-3" style={{ color: '#4a9ebb', fontSize: '1.1rem', fontWeight: 'bold' }}>
            {info.name} ({info.code})
          </div>

          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className={`font-black ${changeColor}`} style={{ fontSize: '2.5rem' }}>{info.price}</span>
            <span className={`font-bold ${changeColor}`} style={{ fontSize: '1.2rem' }}>{info.change}</span>
            <span className={`font-bold ${changeColor}`} style={{ fontSize: '1.2rem' }}>{info.changePercent}</span>
          </div>

          <div className="flex flex-col gap-1 text-base">
            <div className="flex justify-between items-center px-4">
              <span style={{ color: '#4a6b8a', fontWeight: 500 }}>最終値を調整する</span>
              <span className="text-red-600 font-semibold">{latestPrice?.close || info.price}</span>
            </div>
            <div className="flex justify-between items-center px-4">
              <span style={{ color: '#4a6b8a', fontWeight: 500 }}>売買高</span>
              <span className="text-red-600 font-semibold">{latestPrice?.volume || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center px-4">
              <span style={{ color: '#4a6b8a', fontWeight: 500 }}>初期値</span>
              <span className="text-red-600 font-semibold">{latestPrice?.open || info.price}</span>
            </div>
            <div className="flex justify-between items-center px-4">
              <span style={{ color: '#4a6b8a', fontWeight: 500 }}>高価値</span>
              <span className="text-red-600 font-semibold">{latestPrice?.high || info.price}</span>
            </div>
            <div className="flex justify-between items-center px-4">
              <span style={{ color: '#4a6b8a', fontWeight: 500 }}>一昨日の終わり</span>
              <span className="text-red-600 font-semibold">{info.change}</span>
            </div>
            <div className="flex justify-between items-center px-4">
              <span style={{ color: '#4a6b8a', fontWeight: 500 }}>値</span>
              <span className="text-red-600 font-semibold">{latestPrice?.low || info.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
