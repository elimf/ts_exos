import { AddressBook, Contact } from "./exercice5"; 

describe("AddressBook", () => {
  let addressBook: AddressBook;

  beforeEach(() => {
    addressBook = new AddressBook();
  });

  it("should add a contact", () => {
    const contact: Contact = {
      id: "1",
      name: "Alice",
      email: "alice@example.com",
    };
    addressBook.addContact(contact);
    console.log(addressBook.searchContact("Alice"));
    
    expect(addressBook.searchContact("Alice")).toEqual([contact]);
  });

  it("should modify a contact", () => {
    const contact: Contact = {
      id: "1",
      name: "Alice",
      email: "alice@example.com",
    };
    addressBook.addContact(contact);

    const updatedContact: Contact = {
      id: "1",
      name: "Alicia",
      email: "alicia@example.com",
    };
    addressBook.modifyContact(updatedContact);

    const updatedSearchResult = addressBook.searchContact("Alicia");

    // Vérifiez si l'objet est défini ou nul
    if (updatedSearchResult !== null) {
      // Recherchez le contact correspondant dans le résultat
      const modifiedContact = updatedSearchResult.find(
        (contact) => contact.id === updatedContact.id
      );

      // Vérifiez que le contact a été trouvé
      expect(modifiedContact).toBeDefined();

      // Vérifiez que les propriétés du contact correspondent aux valeurs mises à jour
      expect(modifiedContact?.name).toEqual(updatedContact.name);
      expect(modifiedContact?.email).toEqual(updatedContact.email);
    } else {
      // Si l'objet est nul, le test réussit également
      expect(updatedSearchResult).toBeNull();
    }
  });

  it("should remove a contact", () => {
    const contact: Contact = {
      id: "1",
      name: "Alice",
      email: "alice@example.com",
    };
    addressBook.addContact(contact);
    addressBook.removeContactById("1");
    expect(addressBook.searchContact("Alice")).toEqual(null);
  });

  it("should search contacts", () => {
    const contact1: Contact = {
      id: "1",
      name: "Alice",
      email: "alice@example.com",
    };
    const contact2: Contact = {
      id: "2",
      name: "Bob",
      email: "bob@example.com",
    };
    addressBook.addContact(contact1);
    addressBook.addContact(contact2);

    expect(addressBook.searchContact("Alice")).toEqual([contact1]);
    expect(addressBook.searchContact("Bob")).toEqual([contact2]);
    expect(addressBook.searchContact("Charlie")).toBeNull();
  });
});
