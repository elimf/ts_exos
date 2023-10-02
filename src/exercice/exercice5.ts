export  interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export  class AddressBook {
  private contacts: Contact[] = [];

  searchContact(value: string): Contact[] | null {
    const searchResultsSet = new Set<Contact>();

    // Recherche par nom
    const nameMatches = this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    nameMatches.forEach((contact) => searchResultsSet.add(contact));

    // Recherche par e-mail
    const emailMatches = this.contacts.filter((contact) =>
      contact.email.toLowerCase().includes(value.toLowerCase())
    );
    emailMatches.forEach((contact) => searchResultsSet.add(contact));

    // Recherche par numéro de téléphone
    const phoneMatches = this.contacts.filter((contact) =>
      contact.phone?.includes(value)
    );
    phoneMatches.forEach((contact) => searchResultsSet.add(contact));

    const searchResults = Array.from(searchResultsSet);

    return searchResults.length > 0 ? searchResults : null;
  }

  addContact(newItem: Contact): void {
    this.contacts.push(newItem);
  }

  modifyContact(updatedContact: Contact): void {
    const contactIndex = this.contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );

    if (contactIndex !== -1) {
      this.contacts[contactIndex].name = updatedContact.name;

      this.contacts[contactIndex].email = updatedContact.email;

      if (updatedContact.phone !== undefined) {
        this.contacts[contactIndex].phone = updatedContact.phone;
      }
    }
  }

  removeContactById(id: string): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }
}
