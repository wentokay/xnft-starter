import { type PublicKey } from "@solana/web3.js";

declare global {
  interface Window {
    xnft: {
      metadata: {
        avatarUrl: string;
        isDarkMode: boolean;
        jwt: string;
        userId: string;
        username: string;
      };
      solana: {
        publicKey: PublicKey;
        sendAndConfirm: (tx: Transaction) => Promise<void>;
      };
      on: (event: "connect", callback: (data: any) => void) => void;
    };
  }
}

export {};
