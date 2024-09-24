import { useQuery } from "@tanstack/react-query";
import { Hourglass } from "../components/Loadings/hourglass";
import { ErrorScreen } from "../components/ErrorScreen/index-error";

interface IQueryHook {
  fetch: () => Promise<any>;
  queryKey: string;
}

interface IOutput<T> {
  getError: JSX.Element | null;
  getLoading: JSX.Element | null;
  data: T[];
}

function getError(error: Error | null) {
  if (error) {
    return <ErrorScreen />;
  }
  return null;
}

function getLoading(isLoading: boolean) {
  if (isLoading) {
    return <Hourglass />;
  }
  return null;
}

export function useQueryHook<T>({ fetch, queryKey }: IQueryHook): IOutput<T> {
  const { data, error, isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: fetch,
  });

  return {
    getError: getError(error),
    getLoading: getLoading(isLoading),
    data,
  };
}
