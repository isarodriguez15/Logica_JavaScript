//Crie uma função que verifica se um texto contém "@" e ".",
 // retornando se é um e-mail válido ou inválido. Use includes() e indexOf().
 
 function verificarEmail(email) {
    return email.includes('@') && email.includes('.');
  }
  
  console.log(verificarEmail('teste@dominio.com')); // true
  console.log(verificarEmail('teste@dominio')); // false
  