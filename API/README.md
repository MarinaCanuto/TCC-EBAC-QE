# Automação API - TCC EBAC QE

Projeto de automação de testes de API desenvolvido para validação da API de cupons da aplicação EBAC Shop.

---

# Objetivo

Validar os endpoints da API REST responsáveis pelo gerenciamento de cupons, garantindo funcionamento correto, autenticação e consistência dos retornos.

---

# Tecnologias utilizadas

- Node.js
- Supertest
- Mocha
- Chai
- Mochawesome

---

# Estrutura do projeto

```bash
API/
├── test/
│   └── api/
│       └── cupons.test.js
├── reports/
├── package.json
└── README.md
```

---

# Cenários automatizados

- Listagem de cupons
- Cadastro de novo cupom
- Busca de cupom por ID
- Validação de status code
- Validação de payload

---

# Relatórios

Os testes geram relatórios automatizados nos formatos:

- HTML
- JSON

Localização:

```bash
API/reports
```

---

# Como executar

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

- testes funcionais
- validação de API REST
- autenticação Basic Auth
- validação de payload
- validação de status code

---

# Resultados

Os testes automatizados validam os principais endpoints da API de cupons da aplicação EBAC Shop.

---

# Autora

Marina Canuto