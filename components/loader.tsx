export default function Loader({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
        <linearGradient id="a17">
          <stop offset="0" stopColor="#1A488E" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#1A488E"></stop>
        </linearGradient>
        <circle fill="none" stroke="url(#a17)" strokeWidth="20" strokeLinecap="round" strokeDasharray="0 44 0 44 0 44 0 44 0 360" cx="100" cy="100" r="70" style={{ transformOrigin: "center" }}>
          <animateTransform type="rotate" attributeName="transform" calcMode="discrete" dur="2" values="360;324;288;252;216;180;144;108;72;36" repeatCount="indefinite"></animateTransform>
        </circle>      </svg>
    </div>
  );
}
