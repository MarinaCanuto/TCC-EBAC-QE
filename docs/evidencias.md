# Evidências dos Testes

## Objetivo

Documentar as evidências geradas durante a execução dos testes automatizados do projeto TCC-EBAC-QE, garantindo rastreabilidade, análise de falhas e validação das execuções.

---

## Tipos de evidências geradas

O projeto gera evidências em diferentes camadas de testes automatizados:

- relatórios HTML
- relatórios JSON
- screenshots automáticas
- vídeos de execução
- logs de execução
- resultados de testes de performance
- evidências de execução local

---

## Evidências por módulo

### UI (Web)

Ferramentas:
- Cypress
- Mochawesome

Evidências:
- relatórios HTML
- relatórios JSON
- screenshots em falhas
- vídeos de execução

Localização:

```bash
UI/cypress/reports
UI/cypress/screenshots
UI/cypress/videos
```

---

### API

Ferramentas:
- Supertest
- Mocha
- Mochawesome

Evidências:
- relatórios HTML
- relatórios JSON
- logs de execução

Localização:

```bash
API/reports
```

---

### Performance

Ferramenta:
- k6

Evidências:
- métricas de tempo de resposta
- throughput
- taxa de falhas
- thresholds validados
- logs da execução

Métricas monitoradas:
- http_req_duration
- http_req_failed
- iterations
- vus
- throughput

---

### Mobile

Ferramentas:
- Appium
- WebdriverIO

Evidências:
- logs de execução
- validação da automação mobile
- resultados da execução local

---

## Repositório do projeto

```bash
https://github.com/MarinaCanuto/TCC-EBAC-QE
```

---

## Resultados obtidos

Os testes automatizados executaram com sucesso nas diferentes camadas propostas, validando funcionalidades críticas da aplicação, integração entre serviços, comportamento sob carga e automação mobile.

---

## Considerações finais

As evidências geradas permitem acompanhamento contínuo da qualidade, rastreabilidade das execuções e suporte à análise de falhas durante o processo de validação.