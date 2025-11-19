interface PulsingButtonProps {
  onClick: () => void;
  stockName?: string;
  disabled?: boolean;
}

export default function PulsingButton({ onClick, stockName = '', disabled = false }: PulsingButtonProps) {
  const buttonText = stockName ? `【${stockName}】の情報を表示` : '銘柄情報を表示';

  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex justify-center px-4 mb-8">
      <div className="max-w-lg w-full">
        <button
          onClick={handleClick}
          disabled={disabled}
          className="relative group disabled:opacity-50 disabled:cursor-not-allowed w-full transform transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div
            className="relative w-full h-24 bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
              backgroundImage: 'url(/button.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative flex flex-col items-center justify-center gap-1 px-8">
              <span className="font-black text-lg text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{buttonText}</span>
              <span className="text-xs text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">※教育・学習用の情報表示</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
