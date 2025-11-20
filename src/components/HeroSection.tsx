interface HeroSectionProps {
  stockCode?: string;
  stockName?: string;
  onDiagnosis?: () => void;
  disabled?: boolean;
}

export default function HeroSection({ stockCode = '----', stockName = '', onDiagnosis, disabled = false }: HeroSectionProps) {
  const hasStockData = stockCode !== '----' && stockName;

  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-6 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="flex justify-end mb-12">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          <div className="text-center mb-4" style={{ marginTop: '6rem' }}>
            <h1 className="inline-block">
              <span
                className="font-bold text-black"
                style={{
                  fontSize: '2rem',
                  fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif"
                }}
              >
                銘柄基本
              </span>
              <span
                className="font-bold"
                style={{
                  fontSize: '3rem',
                  color: '#ec4899',
                  fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif",
                  textShadow: '2px 2px 4px rgba(255, 255, 255, 0.6), -1px -1px 2px rgba(255, 255, 255, 0.4)'
                }}
              >
                情報
              </span>
            </h1>
          </div>

          <div className="text-center">
            <h2
              className="text-2xl font-bold text-black"
              style={{
                fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif"
              }}
            >
              銘柄無料診断
            </h2>
          </div>
        </div>
      </div>

      {onDiagnosis && (
        <div className="px-4 py-3">
          <div className="max-w-lg mx-auto">
            <button
              onClick={onDiagnosis}
              disabled={disabled}
              className="relative group w-full disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%)',
                  border: '3px solid #fbbf24',
                  boxShadow: '0 8px 24px rgba(245, 158, 11, 0.6), 0 0 40px rgba(251, 191, 36, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                }}
              >
                <div
                  className="absolute inset-0 opacity-30 animate-gradient-shift"
                  style={{
                    background: 'linear-gradient(90deg, rgba(251,191,36,0.4) 0%, rgba(252,211,77,0.6) 50%, rgba(251,191,36,0.4) 100%)',
                    backgroundSize: '200% 100%'
                  }}
                />

                <div className="relative flex flex-col items-center gap-1 py-5 px-6">
                  <span className="text-white font-bold text-xl drop-shadow-lg">
                    {hasStockData ? `【${stockName}】` : '銘柄'}の情報を見る
                  </span>
                  <span className="text-xs text-orange-50 font-semibold">※教育・学習用の情報表示ツール</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
