interface Subject {
    id: number,
    name?: string,
    created_at?: string | Date,
}

interface Obj {
    [key: string]: Subject
}

function sortByDate(obj: Obj, desc = false): Subject[] {
  const subjects: Subject[] = Object.values(obj);

  // Trier les sujets en fonction de la date de création
  subjects.sort((a, b) => {
    const dateA = new Date(a.created_at || 0).getTime();
    const dateB = new Date(b.created_at || 0).getTime();

    if (!desc) {
      return dateA - dateB; 
    } else {
      return dateB - dateA; 
    }
  });

  return subjects;
}

export { sortByDate };