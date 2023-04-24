// import { test, expect } from "@playwright/test";
// test.describe('Test', async () => {
//     test ('1', async ({page}) => {
//         const Open = await page.goto('https://rabota.by/'); 
//         const searchField = page.locator("//div[contains(@class, 'supernova-search-group__input')]//input[@placeholder]")
//         await searchField.fill('Тестировщик'); 
        
//         await page.waitForSelector("//button[@data-qa='search-button']")
        
//         const searchButton = await page.locator("//button[@data-qa='search-button']").click();
        
//         await page.waitForURL('https://rabota.by/vacancies/testirovshik')
//         const QA_Button = await page.locator("//*[text()='Тестировщик']").click(); 

//         const Vacancy = await page.locator("//div[@id='a11y-main-content']//div[@data-qa='vacancy-serp__vacancy vacancy-serp__vacancy_standard_plus'][1]//a[@data-qa='serp-item__title']").click()

//         await page.waitForURL('https://rabota.by/vacancy/77444871?from=vacancy_search_list&query=%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D1%89%D0%B8%D0%BA')
//         const ResponseButton = await page.locator("//a[@data-qa='vacancy-response-link-top']").click(); 
//     })
// })


