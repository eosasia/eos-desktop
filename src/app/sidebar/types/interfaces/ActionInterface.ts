export interface ActionInterface {
  account_action_seq: number;
  action_trace: ActionTraceInterface;
  block_num: number;
  block_time: Date;
  global_action_seq: number;
}

interface ActionTraceInterface {
  act: ActInterface;
  console: string;
  cpu_usage: number;
  elapsed: number;
  inline_traces: object[];
  receipt: object;
  total_cpu_usage: number;
  trx_id: string;
}

interface ActInterface {
  account: string;
  authorization: object[];
  data: object;
  hex_data: string;
  name: string;
}
