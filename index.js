document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Evita o envio do formulário
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    errorMessage.textContent = '';
  
    // Expressão regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      errorMessage.textContent = 'Por favor, insira um email válido.';
      return;
    }
  
    if (password.length < 6) {
      errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
      return;
    }
  
    // Se passou em todas as validações
    alert('Login realizado com sucesso!');
  });