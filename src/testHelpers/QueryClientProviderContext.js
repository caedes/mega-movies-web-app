import { QueryClient, QueryClientProvider } from "react-query";

export default function QueryClientProviderContext({ children }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
