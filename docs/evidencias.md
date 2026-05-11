# Evidências dos Testes

Documentação das evidências geradas durante a execução dos testes automatizados do projeto TCC-EBAC-QE.

---

# Objetivo

Garantir rastreabilidade, análise de falhas e validação das execuções automatizadas através da geração de evidências durante os testes.

---

# Ferramentas utilizadas

* Cypress
* Mochawesome
* GitHub Actions

---

# Relatórios automatizados

Os testes automatizados geram:

* relatórios HTML
* relatórios JSON

## Localização dos relatórios

```bash
UI/cypress/reports
```

---

# Screenshots

O Cypress gera screenshots automáticas durante falhas de execução para auxiliar na análise dos erros.

## Localização das screenshots

```bash
UI/cypress/screenshots
```

---

# Vídeos de execução

As execuções automatizadas geram vídeos dos testes executados.

## Localização dos vídeos

```bash
UI/cypress/videos
```

---

# Pipeline CI/CD

O projeto utiliza GitHub Actions para execução automatizada dos testes em ambiente de integração contínua.

## Fluxos automatizados

* instalação de dependências
* execução dos testes
* execução headless
* geração de evidências

---

# Evidências validadas

## UI

### Login

* Login com sucesso
* Login inválido
* Senha inválida
* Validação de campos obrigatórios

### Carrinho

* Adição de produto
* Visualização do carrinho
* Atualização de quantidade
* Validação de limite máximo

---

# Repositório GitHub

```bash
https://github.com/MarinaCanuto/TCC-EBAC-QE
```

---

# Resultados obtidos

Os testes automatizados executaram com sucesso localmente e via pipeline CI/CD, garantindo maior estabilidade e confiabilidade dos fluxos críticos da aplicação.

---

# Evidências disponíveis

* Relatórios Mochawesome
* Logs de execução
* Pipeline GitHub Actions
* Vídeos dos testes
* Screenshots automáticas
* Evidências de execução local
* Evidências de execução em CI/CD

---

# Considerações finais

As evidências geradas permitem melhor acompanhamento da qualidade da aplicação, rastreabilidade das execuções e análise contínua dos testes automatizados.