# Automação API - TCC EBAC QE

Projeto de automação de testes de API desenvolvido para validação de endpoints REST utilizando PactumJS e Mocha.

---

# Objetivo

Validar respostas da API, status code, tempo de resposta e comportamento dos endpoints através de testes automatizados.

---

# Tecnologias utilizadas

* Node.js
* PactumJS
* Mocha
* Mochawesome

---

# Estrutura do projeto

```bash
API/
├── test
│   └── api
├── reports
├── package.json
└── README.md
```

---

# Cenários automatizados

* Validar status code 200
* Validar retorno da API
* Validar tempo de resposta
* Validar endpoint inexistente

---

# Relatórios

Os testes geram relatórios automatizados nos formatos:

* HTML
* JSON

## Localização dos relatórios

```bash
reports/
```

---

# Como executar o projeto

## Instalar dependências

```bash
npm install
```

## Executar testes

```bash
npm test
```

---

# Estratégias utilizadas

* Testes funcionais
* Testes negativos
* Validação de status code
* Validação de payload
* Validação de tempo de resposta

---

# Resultados obtidos

Os testes automatizados validam o comportamento dos endpoints da API garantindo maior confiabilidade e estabilidade da aplicação.

---

# Autora

Marina Canuto

* QA Engineer em formação
* Estudante de Engenharia de Qualidade de Software - EBAC
* Estudante de Análise e Desenvolvimento de Sistemas