const puppeteer = require('puppeteer');

const fetchingURLS = async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto("https://www.nature.com/opinion");

  const result = await page.evaluate(() => {

   let nodeList = document.querySelectorAll(".c-article-item__title");
   let nodeArray = [...nodeList];
   
   const urls = nodeArray.map(nodeitem => nodeitem.parentNode.parentNode).map(url => url.href);
   return urls;

  });

  await browser.close();
  return result;

 }

 fetchingURLS()
  .then(res => console.log(res))
  .catch(err => console.log(err));


