# Casos de Teste

# CT-001 - Login com sucesso

## Objetivo
Validar login com credenciais válidas.

## Pré-condição
Usuário previamente cadastrado.

## Passos
1. Acessar página de login
2. Informar usuário válido
3. Informar senha válida
4. Clicar em Entrar

## Resultado esperado
Usuário autenticado com sucesso.

## Tipo de teste
- Funcional
- Positivo
- E2E

---

# CT-002 - Login com usuário inválido

## Objetivo
Validar mensagem de erro para usuário inválido.

## Pré-condição
Página de login acessível.

## Passos
1. Informar usuário inválido
2. Informar senha válida
3. Clicar em Entrar

## Resultado esperado
Sistema deve exibir mensagem de erro.

## Tipo de teste
- Funcional
- Negativo

---

# CT-003 - Login com senha inválida

## Objetivo
Validar mensagem de erro para senha inválida.

## Pré-condição
Página de login acessível.

## Passos
1. Informar usuário válido
2. Informar senha inválida
3. Clicar em Entrar

## Resultado esperado
Sistema deve exibir mensagem de erro.

## Tipo de teste
- Funcional
- Negativo

---

# CT-004 - Login com campos vazios

## Objetivo
Validar obrigatoriedade dos campos de login.

## Pré-condição
Página de login acessível.

## Passos
1. Não preencher os campos
2. Clicar em Entrar

## Resultado esperado
Sistema deve exibir mensagens de validação.

## Tipo de teste
- Funcional
- Negativo

---

# CT-005 - Adicionar produto ao carrinho

## Objetivo
Validar inclusão de produto no carrinho.

## Pré-condição
Usuário autenticado.

## Passos
1. Acessar página do produto
2. Selecionar tamanho
3. Selecionar cor
4. Informar quantidade
5. Adicionar ao carrinho

## Resultado esperado
Produto adicionado com sucesso.

## Tipo de teste
- Funcional
- Positivo
- E2E

---

# CT-006 - Visualizar produto no carrinho

## Objetivo
Validar exibição do produto no carrinho.

## Pré-condição
Produto previamente adicionado.

## Passos
1. Acessar carrinho

## Resultado esperado
Produto exibido corretamente.

## Tipo de teste
- Funcional

---

# CT-007 - Atualizar quantidade do produto

## Objetivo
Validar atualização de quantidade do produto.

## Pré-condição
Produto existente no carrinho.

## Passos
1. Alterar quantidade
2. Atualizar carrinho

## Resultado esperado
Carrinho atualizado com sucesso.

## Tipo de teste
- Funcional

---

# CT-008 - Validar limite máximo de itens

## Objetivo
Validar limite máximo permitido para quantidade de produtos.

## Pré-condição
Produto existente no carrinho.

## Passos
1. Informar quantidade acima do limite permitido
2. Atualizar carrinho

## Resultado esperado
Sistema deve exibir mensagem de validação.

## Tipo de teste
- Funcional
- Negativo

---

# CT-009 - Validar status code da API

## Objetivo
Validar retorno da API.

## Pré-condição
API disponível.

## Passos
1. Executar requisição

## Resultado esperado
API deve retornar status code 200.

## Tipo de teste
- API
- Funcional

---

# CT-010 - Validar performance da aplicação

## Objetivo
Validar comportamento da aplicação sob carga.

## Pré-condição
Ambiente disponível.

## Passos
1. Executar teste de carga

## Resultado esperado
Sistema deve responder dentro do tempo esperado.

## Tipo de teste
- Performance

---

# CT-011 - Validar login mobile

## Objetivo
Validar autenticação na aplicação mobile.

## Pré-condição
Aplicação instalada.

## Passos
1. Abrir aplicativo
2. Informar credenciais válidas
3. Realizar login

## Resultado esperado
Usuário autenticado com sucesso.

## Tipo de teste
- Mobile
- Funcional