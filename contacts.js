const fs = require("fs");
const path = require("path");

const contactsPath = fs.readFile(path.resolve("./db/contacts.json"));

console.log(contactsPath);

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
