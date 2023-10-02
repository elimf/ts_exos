import { Livre, Bibliotheque } from "./exo3";
describe("Livre", () => {
  it("devrait emprunter un livre avec succès", () => {
    const livre = new Livre("Titre", "Auteur", "ISBN-123", 200);
    livre.emprunter("Étudiant");
    expect(livre.estEmprunte).toBe(true);
    expect(livre.emprunteur).toBe("Étudiant");
  });

  it("devrait retourner un livre avec succès", () => {
    const livre = new Livre("Titre", "Auteur", "ISBN-123", 200);
    livre.emprunter("Étudiant");
    livre.retourner();
    expect(livre.estEmprunte).toBe(false);
    expect(livre.emprunteur).toBe(null);
  });
});

describe("Bibliotheque", () => {
  it("devrait ajouter un livre à la bibliothèque", () => {
    const bibliotheque = new Bibliotheque();
    const livre = new Livre("Titre", "Auteur", "ISBN-123", 200);
    bibliotheque.ajouterLivre(livre);
    expect(bibliotheque.livres.length).toBe(1);
  });

  it("devrait chercher un livre par titre", () => {
    const bibliotheque = new Bibliotheque();
    const livre1 = new Livre("Livre 1", "Auteur 1", "ISBN-1", 100);
    const livre2 = new Livre("Livre 2", "Auteur 2", "ISBN-2", 150);
    bibliotheque.ajouterLivre(livre1);
    bibliotheque.ajouterLivre(livre2);

    const result = bibliotheque.chercherParTitre("Livre 1");
    expect(result.length).toBe(1);
    expect(result[0]).toBe(livre1);
  });

  it("devrait emprunter un livre avec succès", () => {
    const bibliotheque = new Bibliotheque();
    const livre = new Livre("Titre", "Auteur", "ISBN-123", 200);
    bibliotheque.ajouterLivre(livre);
    bibliotheque.emprunterLivre("ISBN-123", "Étudiant");
    expect(livre.estEmprunte).toBe(true);
    expect(livre.emprunteur).toBe("Étudiant");
  });

  it("devrait retourner un livre avec succès", () => {
    const bibliotheque = new Bibliotheque();
    const livre = new Livre("Titre", "Auteur", "ISBN-123", 200);
    bibliotheque.ajouterLivre(livre);
    bibliotheque.emprunterLivre("ISBN-123", "Étudiant");
    bibliotheque.retournerLivre("ISBN-123");
    expect(livre.estEmprunte).toBe(false);
    expect(livre.emprunteur).toBe(null);
  });
});
