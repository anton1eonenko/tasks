import { test, expect } from "@playwright/test";

test.describe('Av.by', () => {
  test('Проверка стоимости самой дорогой машины', async ({page}) => {

    await page.goto('https://av.by/');

    // Шаг 1: Нажимаем на кнопку "Марка"
    await page.locator("//button[@title='Марка']").dblclick(); 
    // Шаг 2: Вводим "Форд" в поле ввода
    await page.locator("//input[@placeholder='Поиск']").fill('Ford');
    // Шаг 3: Нажимаем на "Форд" в поиске
    await page.locator("//button[@data-property-name='brand']").click(); 

    
    // Шаг 4: Нажимаем на кнопку "Модель"
    await page.locator("//div[@id='p-6-0-3-model']//span[contains(@class, 'dropdown-floatlabel__box')]").click();
    // Шаг 5: Нажимаем на "Мустанг"
    await page.locator("//button[@data-item-label='Mustang']").dblclick();
    await page.waitForTimeout(3000);
    // Шаг 6: Нажимаем на кнопку "Показать объявления" и переходим в раздел Мустангов
    await page.locator("//a[contains(@class, 'button button--secondary button--block')]").click();
    // Шаг 7: Нажимаем на кнопку "Показать объявления" в разделе Мустангов
    await page.locator("//div[contains(@class, 'filter__show-result')]//button[@type='submit']").click();
    await page.waitForTimeout(3000);

    // // Шаг 8: Разворачиваем страницы
    // const showMore = page.locator("//*[text()='Показать ещё']");
    //     let pagesCount = 4
    // for(let i = 1; i <=4; i++ ){
    //   let template = `https://cars.av.by/filter?brands[0][brand]=330&brands[0][model]=359&page=${i}`
    // }


    // Шаг 9: Получаем все цены
    const prices = await page.locator("//div[contains(@class, 'listing-item__prices')]/div[contains(@class, 'listing-item__price')][1]").allTextContents();

    // Шаг 10: Получаем самую большую цену
    const test = {}
        prices.forEach(el => {
            let k = +el.replace(/[^\x00-\x7F]/g,"").slice(0, -1)
             test[k] = el})
        const highestPriceInNumber = Math.max(...Object.keys(test).map(el => Number(el)))
        const highestPriceInString = test[String(highestPriceInNumber)]
        const obrubok = highestPriceInString.slice(0, 3)
        
    // Шаг 11: Выходим на страницу машины с самой большой ценой

    const link = await page.locator(`//div[contains(text(),'${obrubok}')]//ancestor::div[contains(@class, 'listing-item__prices')]//preceding-sibling::div[contains(@class, 'listing-item__about')]//h3/a[@href]`).click(); 
    page.waitForTimeout(5000);
    // Проверка
    const testValue = page.locator("//div[contains(@class, 'card__price-primary')]")
    await expect(testValue).toHaveText('161 815 р.')
    
  });
});


