export const WORD_CATEGORIES = {
  animals: {
    name: {
      it: "Animali",
      en: "Animals",
      ro: "Animale"
    },
    words: [
      { secret: "Cane", impostor: "Gatto" },
      { secret: "Leone", impostor: "Tigre" },
      { secret: "Delfino", impostor: "Squalo" },
      { secret: "Aquila", impostor: "Falco" },
      { secret: "Serpente", impostor: "Lucertola" },
      { secret: "Cavallo", impostor: "Zebra" },
      { secret: "Elefante", impostor: "Rinoceronte" },
      { secret: "Panda", impostor: "Orso" },
      { secret: "Pinguino", impostor: "Foca" },
      { secret: "Farfalla", impostor: "Falena" }
    ]
  },
  food: {
    name: {
      it: "Cibo e Bevande",
      en: "Food & Drinks",
      ro: "Mâncare și Băuturi"
    },
    words: [
      { secret: "Pizza", impostor: "Focaccia" },
      { secret: "Gelato", impostor: "Sorbetto" },
      { secret: "Pasta", impostor: "Riso" },
      { secret: "Caffè", impostor: "Tè" },
      { secret: "Hamburger", impostor: "Panino" },
      { secret: "Sushi", impostor: "Sashimi" },
      { secret: "Cioccolato", impostor: "Caramella" },
      { secret: "Birra", impostor: "Vino" },
      { secret: "Torta", impostor: "Crostata" },
      { secret: "Frutta", impostor: "Verdura" }
    ]
  },
  places: {
    name: {
      it: "Luoghi",
      en: "Places",
      ro: "Locuri"
    },
    words: [
      { secret: "Spiaggia", impostor: "Mare" },
      { secret: "Montagna", impostor: "Collina" },
      { secret: "Città", impostor: "Paese" },
      { secret: "Deserto", impostor: "Savana" },
      { secret: "Foresta", impostor: "Bosco" },
      { secret: "Scuola", impostor: "Università" },
      { secret: "Ospedale", impostor: "Clinica" },
      { secret: "Cinema", impostor: "Teatro" },
      { secret: "Museo", impostor: "Galleria" },
      { secret: "Ristorante", impostor: "Trattoria" }
    ]
  },
  sports: {
    name: {
      it: "Sport e Attività",
      en: "Sports & Activities",
      ro: "Sport și Activități"
    },
    words: [
      { secret: "Calcio", impostor: "Rugby" },
      { secret: "Tennis", impostor: "Ping Pong" },
      { secret: "Basket", impostor: "Pallavolo" },
      { secret: "Nuoto", impostor: "Surf" },
      { secret: "Boxe", impostor: "Karate" },
      { secret: "Sci", impostor: "Snowboard" },
      { secret: "Ciclismo", impostor: "Corsa" },
      { secret: "Golf", impostor: "Minigolf" },
      { secret: "Yoga", impostor: "Pilates" },
      { secret: "Danza", impostor: "Ballo" }
    ]
  },
  professions: {
    name: {
      it: "Professioni",
      en: "Professions",
      ro: "Profesii"
    },
    words: [
      { secret: "Medico", impostor: "Infermiere" },
      { secret: "Insegnante", impostor: "Professore" },
      { secret: "Cuoco", impostor: "Chef" },
      { secret: "Pilota", impostor: "Capitano" },
      { secret: "Attore", impostor: "Regista" },
      { secret: "Musicista", impostor: "Cantante" },
      { secret: "Pittore", impostor: "Scultore" },
      { secret: "Architetto", impostor: "Ingegnere" },
      { secret: "Avvocato", impostor: "Giudice" },
      { secret: "Giornalista", impostor: "Scrittore" }
    ]
  },
  objects: {
    name: {
      it: "Oggetti",
      en: "Objects",
      ro: "Obiecte"
    },
    words: [
      { secret: "Telefono", impostor: "Tablet" },
      { secret: "Computer", impostor: "Laptop" },
      { secret: "Automobile", impostor: "Moto" },
      { secret: "Libro", impostor: "Rivista" },
      { secret: "Penna", impostor: "Matita" },
      { secret: "Orologio", impostor: "Cronometro" },
      { secret: "Occhiali", impostor: "Lenti" },
      { secret: "Ombrello", impostor: "Impermeabile" },
      { secret: "Chitarra", impostor: "Basso" },
      { secret: "Pallone", impostor: "Palla" }
    ]
  },
  emotions: {
    name: {
      it: "Emozioni e Stati d'Animo",
      en: "Emotions & Moods",
      ro: "Emoții și Stări"
    },
    words: [
      { secret: "Felicità", impostor: "Gioia" },
      { secret: "Tristezza", impostor: "Malinconia" },
      { secret: "Paura", impostor: "Ansia" },
      { secret: "Rabbia", impostor: "Nervosismo" },
      { secret: "Sorpresa", impostor: "Stupore" },
      { secret: "Amore", impostor: "Affetto" },
      { secret: "Gelosia", impostor: "Invidia" },
      { secret: "Orgoglio", impostor: "Soddisfazione" },
      { secret: "Vergogna", impostor: "Imbarazzo" },
      { secret: "Noia", impostor: "Stanchezza" }
    ]
  }
};

export const getRandomWord = (categoryKey) => {
  const category = WORD_CATEGORIES[categoryKey];
  if (!category) return null;
  const randomIndex = Math.floor(Math.random() * category.words.length);
  return category.words[randomIndex];
};

export const getCategoryName = (categoryKey, language = 'it') => {
  const category = WORD_CATEGORIES[categoryKey];
  if (!category) return categoryKey;
  return category.name[language] || category.name.it;
};
