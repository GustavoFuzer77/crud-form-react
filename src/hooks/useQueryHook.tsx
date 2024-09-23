import { useQuery } from "@tanstack/react-query";
import { Hourglass } from "../components/Loadings/hourglass";

interface IQueryHook {
  fetch: () => Promise<any>;
  queryKey: string;
}

function getError(error: Error | null) {
  if (error) {
    return <div>Error loading data</div>;
  }
  return null;
}

function getLoading(isLoading: boolean) {
  if (isLoading) {
    return <Hourglass />;
  }
  return null;
}

export function useQueryHook({ fetch, queryKey }: IQueryHook) {
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
