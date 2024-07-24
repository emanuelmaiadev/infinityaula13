let saldo = 1000;

document.getElementById('realizar').addEventListener('click', () => {
    const opcao = document.getElementById('opcao').value;
    const valor = Number(document.getElementById('valor').value);

    switch (opcao) {
        case 'consultar':
            document.getElementById('resultado').textContent = `Saldo atual: R$ ${saldo.toFixed(2)}`;
            break;
        case 'sacar':
            if (valor > saldo) {
                document.getElementById('resultado').textContent = 'Saldo insuficiente para saque.';
            } else {
                saldo -= valor;
                document.getElementById('resultado').textContent = `Saque realizado! Saldo restante: R$ ${saldo.toFixed(2)}`;
            }
            break;
        case 'depositar':
            saldo += valor;
            document.getElementById('resultado').textContent = `Depósito realizado! Saldo atual: R$ ${saldo.toFixed(2)}`;
            break;
        default:
            document.getElementById('resultado').textContent = 'Opção inválida.';
    }

    document.getElementById('valor').value = '';
});
