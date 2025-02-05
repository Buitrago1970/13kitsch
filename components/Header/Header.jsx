import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies = [
    { code: 'USD', symbol: '$', label: 'US Dollar' },
    { code: 'COP', symbol: '$', label: 'Colombian Peso' },
    { code: 'EUR', symbol: '€', label: 'Euro' },
    { code: 'JPY', symbol: '¥', label: 'Japanese Yen' },
    { code: 'CNY', symbol: '¥', label: 'Chinese Yuan' },
  ];

  return (
    <header className="w-full bg-black text-white">
      <div className="border border-zinc-400">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex-shrink-0 text-3xl font-bold h-11 border-r border-zinc-400 w-[20%] flex items-center pl-4">
            <Link href="/">
              <span className="group relative inline-block hover:text-gray-300 transition-colors cursor-pointer">
                Kitsh
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
              </span>
            </Link>
          </div>

          {/* Navigation Links - Center Section */}
          <div className="flex items-center justify-center space-x-8 flex-1 h-11 border-r text-xs border-zinc-400 w-[60%]">
            <Link href="/explore">
              <span className="group relative inline-block font-medium hover:text-gray-300 transition-colors cursor-pointer">
                NEW ARRIVALS
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
              </span>
            </Link>

            <Link href="/explore">
              <span className="group relative inline-block font-medium hover:text-gray-300 transition-colors cursor-pointer">
                EXPLORE
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
              </span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6 h-11 w-[20%] text-xs justify-around">
            <div className="relative">
              <button 
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
              >
                {selectedCurrency} / {currencies.find(c => c.code === selectedCurrency)?.symbol}
              </button>
              
              {showCurrencyMenu && (
                <div className="absolute top-full left-0 mt-1 bg-black border border-zinc-400 py-2 w-40 z-50">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      className="w-full text-left px-4 py-2 hover:bg-zinc-800 transition-colors"
                      onClick={() => {
                        setSelectedCurrency(currency.code);
                        setShowCurrencyMenu(false);
                      }}
                    >
                      {currency.code} / {currency.symbol} - {currency.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-6">
              {/* <Link href="/saved">
                <span className="group relative inline-block font-medium hover:text-gray-300 transition-colors cursor-pointer">
                  Saved
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                </span>
              </Link> */}
              <Link href="/cart">
                <span className="group relative inline-block font-medium hover:text-gray-300 transition-colors cursor-pointer">
                  BAG
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
