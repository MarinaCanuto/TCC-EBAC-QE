# Automação Mobile - EBAC Shop

## Objetivo

Este módulo contém os testes automatizados mobile desenvolvidos para validação do catálogo de produtos do aplicativo EBAC Shop, utilizando Appium com WebdriverIO.

O objetivo é validar funcionalidades essenciais da experiência mobile, garantindo o correto carregamento da aplicação, exibição do catálogo e interações básicas do usuário.

---

## Tecnologias Utilizadas

- Node.js
- WebdriverIO
- Appium
- UiAutomator2
- Android Emulator
- JavaScript
- Mocha

---

## Padrão de Projeto

O projeto foi estruturado utilizando o padrão **Page Object Model (POM)**, promovendo melhor organização, reutilização de código e facilidade de manutenção dos testes automatizados.

### Estrutura

```bash
Mobile/
├── app/
├── test/
│   ├── pageobjects/
│   │   └── catalogo.page.js
│   └── specs/
│       └── catalogo.test.js
├── package.json
├── package-lock.json
└── wdio.conf.js
```

---

## Cenários Automatizados

### Catálogo de Produtos

- Validação da abertura do aplicativo EBAC Shop
- Validação da exibição do catálogo de produtos
- Validação da presença do campo de busca
- Interação com scroll no catálogo

---

## Configuração do Ambiente

### Instalação das dependências

```bash
npm install
```

### Inicialização do emulador Android

Executar um dispositivo Android Emulator previamente configurado.

---

## Execução dos Testes

```bash
npm test
```

---

## Evidências

Os testes executam no ambiente Android utilizando Appium e WebdriverIO, validando a interface principal do aplicativo EBAC Shop.

---

## Observações

Para execução local, é necessário:

- Java instalado
- Android Studio configurado
- Android Emulator em execução
- Appium configurado no ambiente