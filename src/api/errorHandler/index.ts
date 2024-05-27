export const errorHandler = (error: any) => {
  if (error.response) {
    // O servidor respondeu com um código de status diferente de 2xx
    if (error.response.status === 401) {
      // Lidar com o erro 401 (Unauthorized)
      console.log('Erro 401: Não autorizado');
    } else if (error.response.status === 404) {
      // Lidar com o erro 404 (Not Found)
      console.log('Erro 404: Não encontrado');
    } else {
      // Outros códigos de status podem ser tratados aqui
      console.log('Erro:', error.response.status);
    }
  } else if (error.request) {
    // A requisição foi feita, mas não recebeu resposta
    console.log('Erro: Sem resposta do servidor');
  } else {
    // Um erro ocorreu antes de enviar a requisição
    console.log('Erro:', error.message);
  }
  return Promise.reject(error); // Rejeitar a Promise para propagar o erro
};
