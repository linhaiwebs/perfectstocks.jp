interface PulsingButtonProps {
  onClick: () => void;
  stockName?: string;
  disabled?: boolean;
}

export default function PulsingButton({ onClick, stockName = '', disabled = false }: PulsingButtonProps) {
  const buttonText = stockName ? `【${stockName}】の市場データを表示（参考）` : '銘柄市場データを表示（参考）';

  const handleClick = () => {
    onClick();
  };

  return (
    <div className="flex justify-center px-4 my-3">
      <div className="max-w-lg w-full">
        <button
          onClick={handleClick}
          disabled={disabled}
          className="relative group disabled:cursor-not-allowed w-full transform transition-all duration-300 hover:scale-105 active:scale-95"
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
  );
}
