export const errorHandler = (error: any) => {
  if (error.response) {
    if (error.response.status === 401) {
      console.log('Erro 401: Não autorizado');
    } else if (error.response.status === 404) {
      console.log('Erro 404: Não encontrado');
    } else {
      console.log('Erro:', error.response.status);
    }
  } else if (error.request) {
    console.log('Erro: Sem resposta do servidor');
  } else {
    console.log('Erro:', error.message);
  }
  return Promise.reject(error);
};
