# Casos de Teste

# CT-001 - Login com sucesso

## Objetivo
Validar autenticação com credenciais válidas.

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

# CT-003 - Adicionar produto ao carrinho

## Objetivo
Validar inclusão de produto no carrinho.

## Pré-condição
Usuário autenticado.

## Passos
1. Acessar produto
2. Selecionar opções
3. Definir quantidade
4. Adicionar ao carrinho

## Resultado esperado
Produto adicionado com sucesso.

## Tipo de teste
- Funcional
- Positivo
- E2E

---

# CT-004 - Validar limite máximo de itens

## Objetivo
Validar regra de limite máximo de quantidade.

## Pré-condição
Produto no carrinho.

## Passos
1. Informar quantidade acima do permitido
2. Atualizar carrinho

## Resultado esperado
Sistema deve exibir mensagem de validação.

## Tipo de teste
- Funcional
- Negativo

---

# CT-005 - Listar cupons via API

## Objetivo
Validar listagem de cupons.

## Pré-condição
API disponível e autenticação válida.

## Passos
1. Executar requisição GET para listagem de cupons

## Resultado esperado
Retorno com status 200 e lista de cupons.

## Tipo de teste
- API
- Funcional

---

# CT-006 - Cadastrar novo cupom via API

## Objetivo
Validar cadastro de novo cupom.

## Pré-condição
API disponível e autenticação válida.

## Passos
1. Executar requisição POST com payload válido

## Resultado esperado
Cupom criado com sucesso com status 201.

## Tipo de teste
- API
- Funcional
- Positivo

---

# CT-007 - Buscar cupom por ID

## Objetivo
Validar busca de cupom específico.

## Pré-condição
Cupom previamente criado.

## Passos
1. Executar requisição GET por ID

## Resultado esperado
Retorno do cupom correspondente.

## Tipo de teste
- API
- Funcional

---

# CT-008 - Teste de performance com carga

## Objetivo
Validar comportamento da aplicação sob carga.

## Pré-condição
Endpoints disponíveis.

## Passos
1. Executar teste com 20 usuários simultâneos
2. Aplicar ramp-up progressivo
3. Monitorar métricas

## Resultado esperado
Sistema responder dentro dos thresholds definidos.

## Tipo de teste
- Performance

---

# CT-009 - Validar abertura do aplicativo mobile

## Objetivo
Validar abertura da aplicação mobile.

## Pré-condição
Aplicativo instalado no emulador Android.

## Passos
1. Abrir aplicativo

## Resultado esperado
Tela inicial exibida corretamente.

## Tipo de teste
- Mobile
- Funcional

---

# CT-010 - Validar catálogo mobile

## Objetivo
Validar exibição do catálogo de produtos.

## Pré-condição
Aplicativo aberto.

## Passos
1. Acessar catálogo

## Resultado esperado
Catálogo exibido corretamente.

## Tipo de teste
- Mobile
- Funcional

---

# CT-011 - Validar scroll no catálogo mobile

## Objetivo
Validar navegação no catálogo.

## Pré-condição
Aplicativo aberto no catálogo.

## Passos
1. Realizar scroll na tela

## Resultado esperado
Navegação executada com sucesso.

## Tipo de teste
- Mobile
- Funcional