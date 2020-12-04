export function todosApi(http) {
  return {
    all: () => {
      return http.get('/api/allRockets');
    },
  };
}
