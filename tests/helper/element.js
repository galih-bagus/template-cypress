export function getXpath(selector) {
   return cy.xpath(selector);
}

export function fillFilledXpath(selector, value) {
   return cy.xpath(selector).type(value).should("have.value", value);
}

export function fillSelectXpath(selector, value) {
   return cy.xpath(selector).select(value).should("have.value", value);
}

export function clickXpath(selector, ...args) {
   return cy.xpath(selector).click(...args);
}

export function fillFilledXpathSearch(selector, value) {
   return cy.xpath(selector).type(value + "{enter}");
}

export function clearFilledXpath(selector) {
   return cy.xpath(selector).clear();
}

export function countElementXpath(selector) {
   return cy.xpath(selector).its("length");
}

export function createLog(message) {
   return cy.log(message);
}
