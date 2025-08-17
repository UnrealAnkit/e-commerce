import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, AlertCircle } from 'lucide-react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowStatus(true);
      setTimeout(() => setShowStatus(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowStatus(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Show status initially if offline
    if (!navigator.onLine) {
      setShowStatus(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!showStatus) return null;

  return (
    <div className={`fixed top-20 right-4 z-50 transition-all duration-500 ${
      showStatus ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className={`flex items-center px-4 py-3 rounded-2xl shadow-lg backdrop-blur-md border ${
        isOnline 
          ? 'bg-green-100/90 border-green-200 text-green-800' 
          : 'bg-red-100/90 border-red-200 text-red-800'
      }`}>
        {isOnline ? (
          <>
            <Wifi className="w-5 h-5 mr-3" />
            <span className="font-medium">Connection restored</span>
          </>
        ) : (
          <>
            <WifiOff className="w-5 h-5 mr-3" />
            <span className="font-medium">No internet connection</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ConnectionStatus;
