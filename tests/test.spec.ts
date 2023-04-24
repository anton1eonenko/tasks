// import { test, expect } from "@playwright/test";
// import { BasePage } from "../framework/base/basePage";
// import { mainPage } from "../PageObject/pages/mainPage";
// import { BrowserHelper } from "../framework/helpers/browser";
// import { analyticsPage } from "../PageObject/pages/analyticsPage";
// import { resultsPage } from "../PageObject/pages/resultsPage";
// import { gamesPage } from "../PageObject/pages/gamesPage";
// import { links } from "../framework/elements/links";
// import { data } from "../framework/elements/date_for_search";
// import { searchResults } from "../PageObject/pages/searchResultsPage";
// import { forumPage } from "../PageObject/pages/forumPage";
// import { data_for_authorization } from "../PageObject/pages/forumPage";
// import {logger as LogerHelper, logger} from "../framework/helpers/logger"

// test.describe("Search", () => {
//   // test ('Analytics', async ({page}) => {
//   //     let Open = await new BasePage(page).Open();

//   //     let analyticsField_Button = await new mainPage(page).analyticsField().click();

//   //     let review1_Button = await new analyticsPage(page).review1().click();

//   //     let testValue = new resultsPage(page).Analytics_Test();
//   //     await expect(testValue).toHaveText('Какой процессор нужен игровому ПК? Часть 2 — массовая платформа AMD AM4');

//   // })

//   // test ('Games', async ({page}) => {
//   //     let Open = await new BasePage(page).Open();

//   //     let gamesField_Button = await new mainPage(page).gamesField().click();

//   //     let gameAField_Button = await new gamesPage(page).gameAField().click();

//   //     let gameAFieldReviewNumber2_Button = await new gamesPage(page).gameAFieldReviewNumber2().click();

//   //     let testValue = new resultsPage(page).Games_Test();
//   //     await expect(testValue).toHaveText('As Dusk Falls — отличная история в необычном стиле. Рецензия')
//   // });

//   // test("Search crypto", async ({ page }) => {
//   //   let Open = await new BasePage(page).Open();

//   //   let darkMode_Button = await new mainPage(page).darkMode().click();

//   //   let cryptocurrencyRates_Button = await new mainPage(page).cryptocurrencyRates().click();

//   //   let search_Button = await new mainPage(page).search().click();

//   //   let fill = await new mainPage(page).search().fill(data.crypto);

//   //   let searchEnter_Button = await new mainPage(page).searchEnter().click();

//   //   let pageNumber10_Button = await new searchResults(page).pageNumber10().click();

//   //   let testValue = await new resultsPage(page).Search_crypto_Test(); 
//   //   await expect(page).toHaveURL('https://3dnews.ru/search/#query=%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0&sdate=&edate=&action=search&page=10'); 

//   // });

//   //   test("Сontacts", async ({ page }) => {
//   //   let Open = await new BasePage(page).Open();

//   //   let darkMode_Button = await new mainPage(page).darkMode().click();

//   //   let contacts_Button = await new mainPage(page).contacts().click(); 

//   //   let testValue = await new resultsPage(page).contacts_Test(); 
//   //   await expect(testValue).toHaveText('Контакты')
//   // });

//   // test("Forum authorization positive", async ({ page }) => {
//   //   let Open = await new BasePage(page).Open();

//   //   let darkMode_Button = await new mainPage(page).darkMode().click();

//   //   let forum_Button = await new mainPage(page).forum().click(); 

//   //   let loginField_Button = new forumPage(page).loginField();
//   //   await loginField_Button.click();
//   //   await loginField_Button.fill(data_for_authorization.true_Login);

//   //   let passwordField_Button = new forumPage(page).passwordField(); 
//   //   await passwordField_Button.click(); 
//   //   await passwordField_Button.fill(data_for_authorization.true_Password); 

//   //   let input_Button = await new forumPage(page).input().click();

//   //   let testValue = new resultsPage(page).Forum_Authorization_Positive();
//   //   await expect(testValue).toHaveText('Форум 3DNews'); 
//   // }); 

//   test("Forum authorization negative", async ({ page }) => {
//     await new BasePage(page).Open();

//     await new mainPage(page).darkMode().click();

//     await new mainPage(page).forum().click(); 

//     let loginField_Button = new forumPage(page).loginField();
//     await loginField_Button.click();
//     await loginField_Button.fill(data_for_authorization.false_Login);

//     let passwordField_Button = new forumPage(page).passwordField(); 
//     await passwordField_Button.click(); 
//     await passwordField_Button.fill(data_for_authorization.false_Password); 

//     await new forumPage(page).input().click();

//     let testValue = new resultsPage(page).Forum_Authorization_Negative(); 
//     await expect(testValue).toHaveText('Сообщение форума');
//   });
// });
