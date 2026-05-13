# Critérios de Aceitação

# Funcionalidade: Login Web

## Cenário: Login com sucesso

Dado que o usuário acessa a página de login  
Quando informar credenciais válidas  
Então deve ser autenticado com sucesso

---

## Cenário: Login com usuário inválido

Dado que o usuário acessa a página de login  
Quando informar um usuário inválido  
Então o sistema deve exibir mensagem de erro

---

# Funcionalidade: Carrinho Web

## Cenário: Adicionar produto ao carrinho

Dado que o usuário esteja autenticado  
Quando selecionar um produto e adicioná-lo ao carrinho  
Então o produto deve ser incluído com sucesso

---

## Cenário: Validar limite máximo de itens

Dado que exista produto no carrinho  
Quando a quantidade ultrapassar o limite permitido  
Então o sistema deve exibir mensagem de validação

---

# Funcionalidade: API de Cupons

## Cenário: Listar cupons

Dado que a API esteja disponível  
Quando a requisição GET for executada com autenticação válida  
Então a API deve retornar status 200 com a lista de cupons

---

## Cenário: Cadastrar novo cupom

Dado que a API esteja disponível  
Quando a requisição POST for executada com payload válido  
Então a API deve cadastrar o cupom com status 201

---

## Cenário: Buscar cupom por ID

Dado que exista um cupom cadastrado  
Quando a requisição GET por ID for executada  
Então a API deve retornar os dados do cupom correspondente

---

# Funcionalidade: Performance

## Cenário: Teste de carga

Dado que os endpoints estejam disponíveis  
Quando o teste for executado com 20 usuários simultâneos  
Então o sistema deve responder dentro dos thresholds definidos

---

# Funcionalidade: Mobile

## Cenário: Abrir aplicativo mobile

Dado que o aplicativo esteja instalado no emulador Android  
Quando o usuário abrir a aplicação  
Então a tela inicial deve ser exibida corretamente

---

## Cenário: Exibir catálogo de produtos

Dado que o aplicativo esteja aberto  
Quando o usuário acessar o catálogo  
Então os produtos devem ser exibidos corretamente

---

## Cenário: Navegação no catálogo

Dado que o catálogo esteja visível  
Quando o usuário realizar scroll  
Então a navegação deve ocorrer corretamente