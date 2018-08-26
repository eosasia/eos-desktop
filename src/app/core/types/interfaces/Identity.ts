export interface Identity {
  hash: string;
  public: string;
  name: string;
  kyc: boolean;
  accounts: Account[];
}

interface Account {
  name: string;
  authority: string;
  publicKey: string;
  blockchain: string;
}
