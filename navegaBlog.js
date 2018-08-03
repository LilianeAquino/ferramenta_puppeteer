/**
 *Iniciando o projeto: npm init
 *
 *Instalação biblioteca: npm i puppeteer
 *
 *Executando o script: npm start ou node navegaBlog.js
 *
 * Outras informações: README.md
 */

'use strict';
const puppeteer = require('puppeteer');

//seletor para acessar o blog
const BLOG_SELECTOR = '#main-views-viewviewsblogpage-1';

//Função responsável por acessar a página da Viridis, carregar o link do blog e tirar um screenshot.
(async () => {	
	const browser = await puppeteer.launch({headless:false});
	const page = await browser.newPage();	
    await page.goto('https://viridis.energy/en');
    
    //clica no link do blog
    await page.click(BLOG_SELECTOR);
    
    //espera a página carregar inteira antes de capturar a tela
	await page.waitFor(3*1000);
	await page.screenshot({ path: 'screenshots/teste_3.png', fullPage: true});
	browser.close();
})();