/// <reference types="cypress" />

import * as element from "@helper/element";
import * as route from "@helper/route";
import * as loginPage from "@tests/page/login/login.page";
import * as assert from "@helper/assert";
import * as data from "@tests/data/login/login.data";
beforeEach(() => {
   route.visit(`/`);
});
describe("Test Case Login", () => {
   it("Login with valid data", () => {
      element.fillFilledXpath(loginPage.usernameField, data.VALID_LOGIN.username);
      element.fillFilledXpath(loginPage.passwordField, data.VALID_LOGIN.password);
      element.clickXpath(loginPage.loginButton);
      assert.shouldBeVisibleXpath(loginPage.headerProduct);
      assert.shouldContainTextXpath(loginPage.headerProduct, `Products`);
   });
   it("Login with invalid data", () => {
      element.fillFilledXpath(loginPage.usernameField, data.VALID_LOGIN.username);
      element.fillFilledXpath(loginPage.passwordField, `password`);
      element.clickXpath(loginPage.loginButton);
      assert.shouldBeVisibleXpath(loginPage.errorMessage);
      assert.shouldContainTextXpath(loginPage.errorMessage, "any user");
   });
});
