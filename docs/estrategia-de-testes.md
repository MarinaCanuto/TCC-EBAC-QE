# Estratégia de Testes

## Objetivo

Definir a estratégia de qualidade adotada no projeto TCC-EBAC-QE, contemplando diferentes níveis de testes automatizados para validação da aplicação EBAC Shop.

---

## Escopo dos testes

O projeto contempla automação nas seguintes camadas:

- Testes UI (Web)
- Testes de API
- Testes de Performance
- Testes Mobile

---

## Abordagem de testes

### UI (Web)

Validação de fluxos críticos da aplicação web utilizando automação E2E.

Ferramentas:
- Cypress
- JavaScript
- Mochawesome

Cobertura:
- autenticação
- fluxo de compra
- validações funcionais
- cenários negativos

---

### API

Validação dos serviços REST da API de cupons da aplicação.

Ferramentas:
- Supertest
- Mocha
- Chai

Cobertura:
- listagem de cupons
- cadastro de cupons
- busca por ID
- validação de status code
- validação de payload

---

### Performance

Validação de comportamento sob carga utilizando testes não funcionais.

Ferramenta:
- k6

Cobertura:
- endpoint de produtos
- endpoint de categorias
- 20 usuários simultâneos
- ramp-up progressivo
- thresholds de performance

---

### Mobile

Validação automatizada do aplicativo Android EBAC Shop.

Ferramentas:
- Appium
- WebdriverIO
- UiAutomator2

Cobertura:
- abertura da aplicação
- catálogo de produtos
- campo de busca
- scroll no catálogo

---

## Boas práticas aplicadas

- Page Object Model
- modularização dos testes
- separação por camada
- reutilização de componentes
- automação orientada à manutenção
- geração automatizada de relatórios

---

## Critérios de aceitação

Os testes devem:

- executar com sucesso
- validar fluxos críticos
- validar regras funcionais
- garantir estabilidade
- gerar evidências automatizadas
- permitir rastreabilidade

---

## Evidências geradas

- relatórios HTML
- relatórios JSON
- screenshots
- vídeos
- logs de execução
- resultados de performance
- evidências de execução local

---

## Considerações finais

A estratégia adotada busca garantir cobertura funcional e não funcional da aplicação através da automação de testes em múltiplas camadas, utilizando boas práticas de QA e organização modular.