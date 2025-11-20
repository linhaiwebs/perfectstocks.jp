interface HeroSectionProps {
  stockCode?: string;
  stockName?: string;
  onDiagnosis?: () => void;
  disabled?: boolean;
}

export default function HeroSection({ stockCode = '----', stockName = '', onDiagnosis, disabled = false }: HeroSectionProps) {
  const hasStockData = stockCode !== '----' && stockName;
  const buttonText = stockName ? `【${stockName}】の情報を表示` : '銘柄情報を表示';

  return (
    <div className="relative w-full">
      <div className="w-full py-4" style={{ backgroundColor: '#808080' }}>
        <div className="text-center">
          <h1 className="inline-block">
            <span
              className="font-bold"
              style={{
                fontSize: '3rem',
                color: '#ef4444',
                fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif"
              }}
            >
              情報
            </span>
            <span
              className="font-bold text-white"
              style={{
                fontSize: '2rem',
                fontFamily: "'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif",
                textShadow: '2px 2px 4px rgba(239, 68, 68, 0.8), -1px -1px 2px rgba(239, 68, 68, 0.6)'
              }}
            >
              銘柄基本
            </span>
          </h1>
        </div>
      </div>

      <div className="w-full px-4 py-6 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto mb-8">

          <div className="text-center" style={{ marginTop: '60px' }}>
            <h2
              className="font-bold whitespace-nowrap"
              style={{
                fontFamily: "'HYYaKuHeiW', 'Kozuka Gothic Pr6N', 'Noto Sans JP', sans-serif",
                color: '#ef4444',
                fontSize: '3rem',
                textShadow: '2px 2px 0 #ffffff, -2px -2px 0 #ffffff, 2px -2px 0 #ffffff, -2px 2px 0 #ffffff, 1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff'
              }}
            >
              銘柄無料診断
            </h2>
          </div>

          <div className="flex justify-center px-4 mt-3">
            <div className="max-w-lg w-full">
              <button
                onClick={onDiagnosis}
                disabled={disabled}
                className="relative group disabled:opacity-50 disabled:cursor-not-allowed w-full transform transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div
                  className="relative w-full bg-no-repeat flex items-center justify-center"
                  style={{
                    backgroundImage: 'url(/button.png)',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    height: '80px',
                    minHeight: '80px'
                  }}
                >
                  <div className="relative flex items-center justify-center px-8">
                    <span className="font-bold text-base text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{buttonText}</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
