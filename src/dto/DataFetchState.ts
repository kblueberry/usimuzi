export interface DataFetchState<T> {
  data: Array<T>;
  loading: boolean;
  error: Error | null;
}
