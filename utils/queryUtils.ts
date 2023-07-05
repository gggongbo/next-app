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

export { queryClientOption };
