import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency, fetchExchangeRates } from '../../features/currency/currencySlice';

export default function Header() {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  // Modificar esta línea para acceder correctamente al carrito
  const cartItems = useSelector((state) => state.products.cart || []);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currencies = [
    { code: 'USD', symbol: '$', label: 'US Dollar' },
    { code: 'COP', symbol: '$', label: 'Colombian Peso' },
    { code: 'EUR', symbol: '€', label: 'Euro' },
    { code: 'JPY', symbol: '¥', label: 'Japanese Yen' },
    { code: 'CNY', symbol: '¥', label: 'Chinese Yuan' },
  ];

  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, [dispatch]);

  const handleCurrencyChange = (currencyCode) => {
    dispatch(setCurrency(currencyCode));
    setShowCurrencyMenu(false);
  };

  return (
    <header className="w-full bg-black text-white fixed top-0 z-50">
      <div className="border border-zinc-400">
        <nav className="relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between gap-4">
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
                  {currency.selectedCurrency} / {currencies.find(c => c.code === currency.selectedCurrency)?.symbol}
                </button>
                
                {showCurrencyMenu && (
                  <div className="absolute top-full left-0 mt-1 bg-black border border-zinc-400 py-2 w-40 z-50">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        className="w-full text-left px-4 py-2 hover:bg-zinc-800 transition-colors"
                        onClick={() => handleCurrencyChange(currency.code)}
                      >
                        {currency.code} / {currency.symbol} - {currency.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-6">
                <Link href="/cart">
                  <span className="group relative inline-block font-medium hover:text-gray-300 transition-colors cursor-pointer">
                    BAG
                    {cartItems && cartItems.length > 0 && (
                      <span className="absolute -top-2 -right-4 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {cartItems.length}
                      </span>
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between h-16 px-4">
            <button 
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <Link href="/">
              <span className="text-2xl font-bold">Kitsh</span>
            </Link>

            <Link href="/cart">
              <span className="text-sm relative">
                BAG
                {cartItems && cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-4 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItems.length}
                  </span>
                )}
              </span>
            </Link>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-black border-t border-zinc-400 z-50">
              <div className="px-4 py-6 space-y-6 text-sm">
                <div className="space-y-4 flex flex-col">
                <Link href="/explore" className="block hover:text-gray-300">
                  NEW ARRIVALS
                </Link>
                <Link href="/explore" className="block hover:text-gray-300">
                  EXPLORE
                </Link>
                </div>
                <div className="pt-4 border-t border-zinc-400">
                  <button 
                    className="w-full text-left hover:text-gray-300"
                    onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
                  >
                    {currency.selectedCurrency} / {currencies.find(c => c.code === currency.selectedCurrency)?.symbol}
                  </button>
                  
                  {showCurrencyMenu && (
                    <div className="mt-2 bg-zinc-900 py-2">
                      {currencies.map((currency) => (
                        <button
                          key={currency.code}
                          className="w-full text-left px-4 py-2 hover:bg-zinc-800"
                          onClick={() => handleCurrencyChange(currency.code)}
                        >
                          {currency.code} / {currency.symbol} - {currency.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
