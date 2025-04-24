export function shouldBeVisibleXpath(selector) {
   cy.xpath(selector, { timeout: 10000 }).should("be.visible");
}

export function shouldNotBeVisibleXpath(selector) {
   cy.xpath(selector, { timeout: 10000 }).should("not.be.visible");
}

export function shouldContainTextXpath(selector, value) {
   cy.xpath(selector, { timeout: 10000 }).should("contain.text", value);
}

export function shouldContainXpath(selector, ...args) {
   cy.xpath(selector, { timeout: 10000 }).should("contain", ...args);
}

export function shouldContainValueXpath(selector, value) {
   cy.xpath(selector, { timeout: 10000 }).should("have.value", value);
}

export function shouldExistXpath(selector) {
   cy.xpath(selector, { timeout: 10000 }).should("exist");
}

export function invokeXpath(selector) {
   cy.xpath(selector, { timeout: 10000 })
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill out this field.");
}
