import { EvMapBase } from "concent";
import * as d from './domain';
import * as ev from '../base/constant/event';

export interface EvMap extends EvMapBase{
  [ev.CHANGE_USER_NAME]: [d.User, d.User['name']],
  [ev.CHANGE_USER_ADDRESS]: [d.User, d.User['age']],
}