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
    </div>
  );
}
