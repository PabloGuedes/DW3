const fSoma = (num1Par, num2Par) => {
  return num1Par + num2Par;
};

const fSubtracao = (num1Par, num2Par) => {
  return num1Par - num2Par;
};

const fMultiplicacao = (num1Par, num2Par) => {
  return num1Par * num2Par;
};

const fDivisao = (num1Par, num2Par) => {
  if (num2Par === 0) {
      return 'Erro: Divisão por zero';
  }
  return num1Par / num2Par;
};

const fCalculo = (req, res) => {
  const { num1, num2, operacao } = req.body;

  let resultado;

  switch (operacao) {
      case '+':
          resultado = fSoma(num1, num2);
          break;
      case '-':
          resultado = fSubtracao(num1, num2);
          break;
      case '*':
          resultado = fMultiplicacao(num1, num2);
          break;
      case '/':
          resultado = fDivisao(num1, num2);
          break;
      default:
          return res.status(400).send({ error: 'Operação inválida' });
  }

  return res.status(200).send({ resultado });
};

module.exports = {
  fCalculo
};