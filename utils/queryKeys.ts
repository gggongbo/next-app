const booksKeys = {
  searchBook: (params?: { search: string; page: number }) =>
    ['searchBook', params] as const,
};

export default booksKeys;
