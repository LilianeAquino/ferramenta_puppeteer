/**
 *Iniciando o projeto: npm init
 *
 *Instalação biblioteca: npm i puppeteer
 *
 *Executando o script: npm start ou no node navegacaoSimples.js
 *
 * Outras informações: README.md
 */

'use strict';
const puppeteer = require('puppeteer');

//Função responsável por acessar a página da Viridis e tirar um screenshot da página inteira.
(async() => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://viridis.energy/en');
    await page.screenshot({ path: 'screenshots/teste_1.png', fullPage: true });
    await browser.close();
  })();
  