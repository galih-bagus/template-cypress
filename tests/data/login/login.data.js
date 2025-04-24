export const VALID_LOGIN = {
   username: Cypress.env("username"),
   password: Cypress.env("password")
};

export const INVALID_LOGIN = {
   username: "asd",
   password: "1234"
};
