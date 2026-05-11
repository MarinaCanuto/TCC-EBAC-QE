# Estratégia de Testes

## Objetivo

Definir a estratégia de qualidade e abordagem de testes utilizada no projeto TCC-EBAC-QE, garantindo a validação dos principais fluxos da aplicação através de diferentes camadas de testes.

---

# Escopo dos testes

O projeto contempla testes automatizados nas seguintes camadas:

- UI (Interface do Usuário)
- API
- Performance
- Mobile

---

# Tipos de testes aplicados

## Testes End-to-End (E2E)

Realizados para validar o fluxo completo da aplicação simulando o comportamento real do usuário.

Exemplos:
- Login
- Carrinho
- Fluxo de compra

---

## Testes funcionais

Aplicados para validar regras de negócio, comportamentos esperados e funcionamento correto das funcionalidades.

---

## Testes negativos

Executados para validar comportamentos inesperados, mensagens de erro e tratamento de entradas inválidas.

Exemplos:
- Login inválido
- Senha incorreta
- Limite máximo de itens no carrinho

---

## Testes de API

Responsáveis por validar endpoints, status code, payloads e regras de integração da aplicação.

Ferramentas:
- PactumJS
- Mocha

---

## Testes de performance

Executados para validar comportamento e estabilidade da aplicação sob carga.

Ferramenta:
- k6

---

## Testes mobile

Aplicados para validar funcionalidades da aplicação mobile utilizando automação.

Ferramentas:
- Appium
- WebdriverIO

---

# Estratégias utilizadas

- Massa de dados com fixtures
- Reutilização de comandos customizados
- Page Objects
- Modularização dos testes
- Integração contínua
- Geração automatizada de relatórios

---

# Ambiente de testes

## Ambiente UI
- Cypress
- Chrome Headless
- GitHub Actions

## Ambiente API
- Node.js
- PactumJS

## Ambiente Performance
- k6

## Ambiente Mobile
- Android/iOS
- Appium
- WebdriverIO

---

# Critérios de aceitação

Os testes devem:

- Executar sem falhas
- Validar regras de negócio
- Garantir estabilidade dos fluxos críticos
- Gerar evidências automatizadas
- Possuir rastreabilidade dos cenários

---

# Evidências geradas

Os testes automatizados geram:

- Relatórios HTML
- Relatórios JSON
- Screenshots
- Vídeos de execução
- Logs de pipeline CI/CD

---

# Integração Contínua

O projeto utiliza GitHub Actions para execução automatizada dos testes.

Fluxos automatizados:
- Instalação de dependências
- Execução headless
- Execução dos testes
- Geração de evidências

---

# Considerações finais

A estratégia adotada busca garantir maior confiabilidade, cobertura e qualidade da aplicação através da automação de testes e integração contínua, utilizando boas práticas de QA e organização modular dos testes.