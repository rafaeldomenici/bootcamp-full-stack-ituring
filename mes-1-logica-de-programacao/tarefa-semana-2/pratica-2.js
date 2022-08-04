function mensagemEmail1(nome) {
console.log(`Olá, ${nome}!`);
}

function mensagemEmail2(NomeDoProduto,NomeDaPessoaQueRecebeuOProduto,EnderecoDeEntrega) {
  console.log(`Fizemos a entrega do produto ${NomeDoProduto} no endereço ${EnderecoDeEntrega} com sucesso!

O seu produto foi recebido por: ${NomeDaPessoaQueRecebeuOProduto}
    
Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`);
}

function mensagemEmail3(NomeDaPessoaQueEnviouOEmail) {
  console.log(`Atenciosamente,
${NomeDaPessoaQueEnviouOEmail}`);
}

