# Testes de Performance - TCC EBAC QE

Projeto de testes de performance desenvolvido para validação de estabilidade e comportamento da aplicação sob carga utilizando k6.

---

# Objetivo

Validar o desempenho da aplicação por meio de testes de carga automatizados.

---

# Tecnologias utilizadas

- k6
- JavaScript

---

# Estrutura do projeto

```bash
Performance/
├── tests/
│   └── performance.test.js
├── package.json
└── README.md
```

---

# Cenários automatizados

- teste de carga no endpoint de produtos
- teste de carga no endpoint de categorias
- validação de tempo de resposta
- validação de thresholds
- simulação de múltiplos usuários

---

# Configuração aplicada

- 20 usuários simultâneos
- ramp-up de 20 segundos
- duração de 2 minutos
- thresholds de performance

---

# Como executar

```bash
npm install
npm test
```

---

# Evidências

- métricas de performance
- tempo médio de resposta
- throughput
- taxa de falhas
- logs da execução

---

# Resultados

Os testes validam o comportamento da aplicação sob carga e estabilidade dos endpoints monitorados.

---

# Autora

Marina Canuto