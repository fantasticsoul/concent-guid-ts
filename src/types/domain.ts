interface ObjectBase {
  id: string;
}

export interface Book extends ObjectBase {
  name: string;
  author: string;
  summary: string;
  publishTime: number;
}

export interface User  extends ObjectBase{
  name: string;
  age: number;
  email: string[];
}

export interface ProductBase extends ObjectBase {
  no: string;
  color: string;
  shape: string;
}
