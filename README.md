# TCC - Engenharia de Qualidade de Software

Projeto de conclusão de curso desenvolvido para a formação em Engenharia de Qualidade de Software da EBAC.

O objetivo deste projeto é aplicar estratégias, técnicas e ferramentas de QA em diferentes camadas de testes, incluindo automação UI, testes de API, testes de performance e testes mobile.

---

# Objetivos do projeto

* Aplicar conceitos de Qualidade de Software
* Implementar automação de testes End-to-End
* Validar fluxos críticos da aplicação
* Implementar integração contínua
* Aplicar padrões de automação
* Gerar evidências e relatórios automatizados

---

# Estrutura do projeto

```bash
TCC-EBAC-QE/
├── UI
├── API
├── Mobile
├── Performance
└── docs
```

---

# Tecnologias utilizadas

## UI

* Cypress
* JavaScript
* Mochawesome
* GitHub Actions

## API

* PactumJS
* Mocha

## Performance

* k6

## Mobile

* Appium
* WebdriverIO

---

# Estratégias aplicadas

* Testes End-to-End
* Testes funcionais
* Testes negativos
* Massa de dados com fixtures
* Custom Commands
* Page Objects
* Integração contínua
* Relatórios automatizados

---

# Integração Contínua

O projeto possui pipeline CI/CD utilizando GitHub Actions para execução automatizada dos testes.

## Fluxos automatizados

* instalação de dependências
* execução dos testes
* execução headless
* geração de evidências

---

# Relatórios

Os testes automatizados geram:

* relatórios HTML
* relatórios JSON
* screenshots
* vídeos de execução

---

# Funcionalidades automatizadas

## UI

* Login
* Carrinho
* Fluxos críticos do e-commerce

## API

* Em desenvolvimento

## Performance

* Em desenvolvimento

## Mobile

* Em desenvolvimento

---

# Como executar o projeto

## Clonar repositório

```bash
git clone https://github.com/MarinaCanuto/TCC-EBAC-QE.git
```

## Instalar dependências UI

```bash
cd UI
npm install
```

## Executar testes UI

```bash
npm test
```

---

# Organização do projeto

O projeto foi estruturado de forma modular para facilitar:

* manutenção
* escalabilidade
* reutilização de componentes
* separação das camadas de teste

---

# Autora

Marina Canuto

* QA Engineer em formação
* Estudante de Engenharia de Qualidade de Software - EBAC
* Estudante de Análise e Desenvolvimento de Sistemas
