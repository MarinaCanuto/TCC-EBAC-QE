# TCC - Engenharia de Qualidade de Software

Projeto de conclusão de curso desenvolvido para a formação em Engenharia de Qualidade de Software da EBAC.

Este projeto aplica práticas de Quality Assurance em diferentes camadas de testes automatizados, contemplando UI, API, Performance e Mobile.

---

# Objetivo do projeto

Aplicar conceitos e estratégias de Qualidade de Software por meio da automação de testes em múltiplas camadas, validando funcionalidades críticas da aplicação EBAC Shop.

Objetivos contemplados:

- automação de testes UI (Web)
- automação de testes de API
- testes de performance
- automação mobile
- geração de evidências automatizadas
- organização modular por camada de testes
- aplicação de boas práticas de QA

---

# Estrutura do projeto

```bash
TCC-EBAC-QE/
├── UI/
├── API/
├── Mobile/
├── Performance/
├── docs/
└── README.md
```

---

# Tecnologias utilizadas

## UI (Web)

- Cypress
- JavaScript
- Mochawesome
- GitHub Actions

---

## API

- Supertest
- Mocha
- Chai
- Mochawesome

---

## Performance

- k6
- JavaScript

---

## Mobile

- Appium
- WebdriverIO
- UiAutomator2
- Android Emulator

---

# Camadas de teste implementadas

## UI (Web)

Automação End-to-End da aplicação web com cobertura de fluxos críticos:

- login com sucesso
- login inválido
- validações funcionais
- fluxo de carrinho
- cenários negativos

---

## API

Automação da API de cupons da aplicação EBAC Shop:

- listagem de cupons
- cadastro de novo cupom
- busca de cupom por ID
- validação de status code
- validação de payload

---

## Performance

Testes não funcionais com carga:

- endpoint de produtos
- endpoint de categorias
- 20 usuários simultâneos
- ramp-up progressivo
- thresholds de performance

---

## Mobile

Automação mobile Android da aplicação EBAC Shop:

- abertura da aplicação
- validação do catálogo de produtos
- validação do campo de busca
- navegação com scroll

---

# Estratégias aplicadas

- Testes End-to-End
- Testes funcionais
- Testes negativos
- Testes de API
- Testes de performance
- Automação mobile
- Page Object Model
- Modularização por camada
- Relatórios automatizados
- Integração contínua

---

# Evidências geradas

O projeto contempla geração de evidências automatizadas:

## UI
- relatórios HTML
- relatórios JSON
- screenshots
- vídeos

## API
- relatórios HTML
- relatórios JSON
- logs de execução

## Performance
- métricas de performance
- throughput
- thresholds
- logs

## Mobile
- logs de execução
- validação local

---

# Integração Contínua

O projeto utiliza GitHub Actions para automação da execução dos testes web.

Fluxos automatizados:

- instalação de dependências
- execução headless
- execução dos testes
- geração de evidências

---

# Como executar

## Clonar repositório

```bash
git clone https://github.com/MarinaCanuto/TCC-EBAC-QE.git
```

---

## Executar UI

```bash
cd UI
npm install
npm test
```

---

## Executar API

```bash
cd API
npm install
npm test
```

---

## Executar Performance

```bash
cd Performance
npm install
npm test
```

---

## Executar Mobile

```bash
cd Mobile
npm install
npm test
```

---

# Documentação complementar

Na pasta `docs/` estão disponíveis:

- critérios de aceitação
- casos de teste
- estratégia de testes
- evidências

---

# Organização do projeto

A estrutura foi organizada de forma modular para facilitar:

- manutenção
- escalabilidade
- rastreabilidade
- separação das camadas de teste
- reutilização de componentes

---

# Autora

**Marina Canuto**

QA Engineer em formação  
Engenharia de Qualidade de Software - EBAC  
Análise e Desenvolvimento de Sistemas