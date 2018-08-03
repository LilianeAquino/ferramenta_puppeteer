/**
 *Iniciando o projeto: npm init
 *
 *Instalação biblioteca: npm i puppeteer
 *
 *Executando o script: npm start ou no node interacaoComponentes.js
 *
 * Outras informações: README.md
 */

'use strict';
const puppeteer = require('puppeteer');

//seletor para acessar o menu idioma en
const IDIOMA_SELECTOR = '#block-languageswitcher';

//seletor para acessar o menu idioma pt-br
const IDIOMA_SELECTOR_PORT = '#block-languageswitcher > div > ul > li.pt-br > a';
 
//Função responsável por acessar a página da Viridis, alterar o idioma de en para pt-br e tirar um screenshot.
(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://viridis.energy/en');

    //clica no link en e altera o idioma clicando no link português
    await page.click(IDIOMA_SELECTOR);
    await page.click(IDIOMA_SELECTOR_PORT);

    //aguarda a página alterar o idioma antes de capturar a tela
    await page.waitFor(3*1000);
    await page.screenshot({ path: 'screenshots/teste_2.png'});
    browser.close();
})();