import { DataFetchState } from "./DataFetchState";

export interface ListProps<T> {
  title: string;
  state: DataFetchState<T>;
}
