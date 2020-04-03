import { Book } from './domain';

export interface Address {
  no: number,
  comment: string,
  recordTime: number,
  /** 记录是否有效 */
  isValid: boolean;
}

export interface BookCu extends Book{
  _publishTimeLabel: string;
}