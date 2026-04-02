export async function buscarEnderecoPorCep(cep) {
  try {
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      throw new Error("CEP inválido. Digite 8 números.");
    }

    const resposta = await fetch(
      `https://viacep.com.br/ws/${cepLimpo}/json/`
    );

    if (!resposta.ok) {
      throw new Error("Erro ao consultar o CEP.");
    }

    const dados = await resposta.json();

    if (dados.erro) {
      throw new Error("CEP não encontrado.");
    }

    return dados;

  } catch (error) {
    throw new Error(error.message || "Erro inesperado ao buscar CEP.");
  }
}