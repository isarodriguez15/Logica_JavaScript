//Crie uma função que recebe um número como string (ex: &#39;12345678901&#39;) e retorna no
//formato de CPF (123.456.789-01) usando slice e concatenação.

function formatarCPF(cpf) {
    // Usa slice para separar as partes do CPF e concatena com os pontos e o hífen
    const parte1 = cpf.slice(0, 3); // Pega os primeiros 3 dígitos
    const parte2 = cpf.slice(3, 6); // Pega os próximos 3 dígitos
    const parte3 = cpf.slice(6, 9); // Pega os próximos 3 dígitos
    const parte4 = cpf.slice(9, 11); // Pega os últimos 2 dígitos

    // Concatena as partes no formato correto de CPF
    return `${parte1}.${parte2}.${parte3}-${parte4}`;
}

// Exemplo de uso:
const numero = '12345678901'; // Exemplo de CPF como string
const cpfFormatado = formatarCPF(numero);
console.log(cpfFormatado); // Exibe: 123.456.789-01
