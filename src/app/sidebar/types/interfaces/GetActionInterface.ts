import {ActionInterface} from './ActionInterface';

export interface GetActionInterface {
  actions: ActionInterface[];
  last_irreversible_block: number;
}
