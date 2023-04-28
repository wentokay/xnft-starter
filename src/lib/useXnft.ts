import { useEffect, useState } from "react";

export const useXnft = () => {
  const [didConnect, setDidConnect] = useState(false);

  useEffect(() => {
    const checkIfConnected = () => {
      if (window.xnft?.solana?.publicKey) {
        clearInterval(interval);
        setDidConnect(true);
      }
    };
    const interval = setInterval(checkIfConnected, 250);
    const onLoad = () => window.xnft.on("connect", checkIfConnected);
    window.addEventListener("load", onLoad);
    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener("load", onLoad);
    };
  }, [setDidConnect]);

  return { ready: didConnect, loading: !didConnect };
};
