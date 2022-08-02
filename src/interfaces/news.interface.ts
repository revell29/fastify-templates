export interface ResponseNews<T = void> {
  status: number;
  message: string;
  data?: T[] | T;
}
