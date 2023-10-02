export class Livre {
  constructor(
    public titre: string,
    public auteur: string,
    public ISBN: string,
    public nombreDePages: number,
    public estEmprunte: boolean = false,
    public emprunteur: string | null = null
  ) {}

  emprunter(nomEtudiant: string): void {
    if (this.estEmprunte) {
    } else {
      this.estEmprunte = true;
      this.emprunteur = nomEtudiant;
    }
  }

  retourner(): void {
    if (this.estEmprunte) {
      this.estEmprunte = false;
      this.emprunteur = null;
    } 
  }
}

export class Bibliotheque {
  constructor(public livres: Livre[] = []) {}

  ajouterLivre(livre: Livre): void {
    this.livres.push(livre);
  }

  chercherParTitre(titre: string): Livre[] {
    return this.livres.filter((livre) => livre.titre.includes(titre));
  }

  emprunterLivre(ISBN: string, nomEtudiant: string): void {
    const livre = this.livres.find((livre) => livre.ISBN === ISBN);
    if (livre) {
      livre.emprunter(nomEtudiant);
    } 
  }

  retournerLivre(ISBN: string): void {
    const livre = this.livres.find((livre) => livre.ISBN === ISBN);
    if (livre) {
      livre.retourner();
    } 
  }
}


