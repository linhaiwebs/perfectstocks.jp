interface ModernBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function ModernBackground({ children, className = "" }: ModernBackgroundProps) {
  return (
    <div
      className={`min-h-screen relative ${className}`}
      style={{
        backgroundImage: 'url(/back.png)',
        backgroundSize: '100% auto',
        backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-y',
        backgroundAttachment: 'scroll'
      }}
    >
      {children}
    </div>
  );
}
