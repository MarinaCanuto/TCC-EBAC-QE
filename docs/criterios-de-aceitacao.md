# Critérios de Aceitação

# Funcionalidade: Login

## Cenário: Login com sucesso

Dado que o usuário acessa a página de login  
Quando informar usuário e senha válidos  
Então deve ser autenticado com sucesso

---

## Cenário: Login com usuário inválido

Dado que o usuário acessa a página de login  
Quando informar um usuário inválido  
Então o sistema deve exibir uma mensagem de erro

---

## Cenário: Login com senha inválida

Dado que o usuário acessa a página de login  
Quando informar uma senha inválida  
Então o sistema deve exibir uma mensagem de erro

---

## Cenário: Login com campos vazios

Dado que o usuário acessa a página de login  
Quando tentar realizar login sem preencher os campos  
Então o sistema deve exibir mensagens de validação

---

# Funcionalidade: Carrinho

## Cenário: Adicionar produto ao carrinho

Dado que o usuário acessa a página do produto  
Quando selecionar tamanho, cor e quantidade  
E clicar em adicionar ao carrinho  
Então o produto deve ser adicionado com sucesso

---

## Cenário: Visualizar produto no carrinho

Dado que o usuário adicionou um produto ao carrinho  
Quando acessar o carrinho  
Então o produto deve ser exibido corretamente

---

## Cenário: Atualizar quantidade do produto

Dado que existe um produto no carrinho  
Quando alterar a quantidade do produto  
Então o carrinho deve ser atualizado com sucesso

---

## Cenário: Validar limite máximo de itens

Dado que existe um produto no carrinho  
Quando informar quantidade superior ao limite permitido  
Então o sistema deve exibir mensagem de validação

---

# Funcionalidade: API

## Cenário: Validar resposta da API

Dado que o usuário realiza uma requisição para a API  
Quando a requisição for executada  
Então a API deve retornar status code 200

---

# Funcionalidade: Performance

## Cenário: Validar performance da aplicação

Dado que múltiplos usuários acessam a aplicação simultaneamente  
Quando a carga for executada  
Então o sistema deve responder dentro do tempo esperado

---

# Funcionalidade: Mobile

## Cenário: Validar login mobile

Dado que o usuário acessa a aplicação mobile  
Quando informar credenciais válidas  
Então deve realizar login com sucesso