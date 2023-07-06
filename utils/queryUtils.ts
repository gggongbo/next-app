const queryClientOption = {
  defaultOptions: {
    queries: {
      useErrorBoundary: false,
      retry: 0,
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
    mutations: {
      useErrorBoundary: false,
    },
  },
};

const booksKeys = {
  searchBook: (params?: { search: string; page: number }) =>
    ['searchBook', params] as const,
};

export { queryClientOption, booksKeys };
