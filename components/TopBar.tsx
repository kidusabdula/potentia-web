"use client";
import React, { useEffect, useState, useRef } from "react";

interface CryptoData {
  bitcoin: { usd: number };
  ethereum: { usd: number };
  binancecoin: { usd: number };
  solana: { usd: number };
  cardano: { usd: number };
  ripple: { usd: number };
  dogecoin: { usd: number };
  polkadot: { usd: number };
}

const TopBar: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,cardano,ripple,dogecoin,polkadot&vs_currencies=usd"
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchMarketData();
    const interval = setInterval(fetchMarketData, 30000); // Updates every 30s
    return () => clearInterval(interval);
  }, []);

  if (!cryptoData) return null;

  const tickerItems = [
    { symbol: "BTC", value: cryptoData.bitcoin.usd },
    { symbol: "ETH", value: cryptoData.ethereum.usd },
    { symbol: "BNB", value: cryptoData.binancecoin.usd },
    { symbol: "SOL", value: cryptoData.solana.usd },
    { symbol: "ADA", value: cryptoData.cardano.usd },
    { symbol: "XRP", value: cryptoData.ripple.usd },
    { symbol: "DOGE", value: cryptoData.dogecoin.usd },
    { symbol: "DOT", value: cryptoData.polkadot.usd },
  ];

  const tickerElements = tickerItems.map((item, index) => (
    <span
      key={`${item.symbol}-${index}`}
      className="font-['Fira_Code'] mx-6 flex items-center gap-2 text-white hover:text-green-400 transition-colors duration-300"
    >
      <span className="text-gray-400">{item.symbol}:</span>
      <span className="animate-pulse-slow">
        ${item.value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </span>
    </span>
  ));

  const tickerContent = [
    ...tickerElements,
    ...tickerItems.map((item, index) => (
      <span
        key={`${item.symbol}-${index + tickerItems.length}`}
        className="font-['Fira_Code'] mx-6 flex items-center gap-2 text-white hover:text-green-400 transition-colors duration-300"
      >
        <span className="text-gray-400">{item.symbol}:</span>
        <span className="animate-pulse-slow">
          ${item.value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      </span>
    )),
  ];

  return (
    <div className="relative w-full h-12 bg-[#010101] text-white border-b border-gray-900 overflow-hidden z-10">
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 25s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent pointer-events-none" />
      <div
        ref={tickerRef}
        className="animate-ticker flex whitespace-nowrap items-center h-full"
        onMouseEnter={() => tickerRef.current?.classList.remove("animate-ticker")}
        onMouseLeave={() => tickerRef.current?.classList.add("animate-ticker")}
      >
        {tickerContent}
      </div>
    </div>
  );
};

export default TopBar;