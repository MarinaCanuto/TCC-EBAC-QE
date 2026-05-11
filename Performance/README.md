# Testes de Performance - TCC EBAC QE

Projeto de testes de performance desenvolvido para validação de estabilidade, tempo de resposta e comportamento da aplicação sob carga utilizando k6.

---

# Objetivo

Validar o desempenho da aplicação através de testes automatizados de carga e tempo de resposta.

---

# Tecnologias utilizadas

* k6
* JavaScript
* Node.js

---

# Estrutura do projeto

```bash
Performance/
├── tests
├── reports
├── README.md
└── package.json
```

---

# Cenários automatizados

* Validar status code 200
* Validar tempo de resposta
* Simular múltiplos usuários
* Validar estabilidade da aplicação
* Executar testes de carga

---

# Estratégias utilizadas

* Testes de performance
* Testes de carga
* Validação de tempo de resposta
* Simulação de usuários virtuais
* Thresholds de performance

---

# Como executar o projeto

## Instalar dependências

```bash
npm install
```

## Executar testes de performance

```bash
k6 run tests/performance.test.js
```

---

# Resultados esperados

Os testes devem:

* responder com status 200
* manter estabilidade sob carga
* apresentar tempo de resposta aceitável
* suportar múltiplos acessos simultâneos

---

# Evidências geradas

* Logs de execução
* Métricas de performance
* Tempo médio de resposta
* Taxa de sucesso das requisições

---

# Considerações finais

Os testes de performance auxiliam na validação da estabilidade e comportamento da aplicação sob diferentes níveis de carga, garantindo maior confiabilidade da solução.

---

# Autora

Marina Canuto

* QA Engineer em formação
* Estudante de Engenharia de Qualidade de Software - EBAC
* Estudante de Análise e Desenvolvimento de Sistemas