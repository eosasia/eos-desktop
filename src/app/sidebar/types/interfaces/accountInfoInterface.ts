interface AccountInfoInterface {
  account_name: string;
  head_block_num: number;
  head_block_time: string;
  privileged: boolean;
  last_code_update: string;
  created: string;
  core_liquid_balance: string;
  ram_quota: number;
  net_weight: number;
  cpu_weight: number;
  net_limit: ResourceLimitsInterface;
  cpu_limit: ResourceLimitsInterface;
  ram_usage: number;
  permissions: object[];
  total_resources: TotalResourcesInterface;
  self_delegated_bandwidth: object;
  refund_request: any;
  voter_info: VoterInfoInterface;
}


interface TotalResourcesInterface {
  owner: string;
  net_weight: string;
  cpu_weight: string;
  ram_bytes: number;
}

interface ResourceLimitsInterface {
  used: number;
  available: number;
  max: number;
}


interface VoterInfoInterface {
  owner: string;
  proxy: string;
  producers: string[];
  staked: number;
  last_vote_weight: string;
  proxied_vote_weight: string;
  is_proxy: number;
}
