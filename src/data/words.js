// Database delle parole per il gioco Liars - 25 coppie per categoria
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
      { secret: "Farfalla", impostor: "Falena" },
      { secret: "Lupo", impostor: "Coyote" },
      { secret: "Coniglio", impostor: "Lepre" },
      { secret: "Giraffa", impostor: "Antilope" },
      { secret: "Coccodrillo", impostor: "Alligatore" },
      { secret: "Balena", impostor: "Capodoglio" },
      { secret: "Scimmia", impostor: "Gorilla" },
      { secret: "Topo", impostor: "Ratto" },
      { secret: "Volpe", impostor: "Lupo Rosso" },
      { secret: "Orso Polare", impostor: "Orso Bruno" },
      { secret: "Gufo", impostor: "Civetta" },
      { secret: "Mucca", impostor: "Toro" },
      { secret: "Pecora", impostor: "Capra" },
      { secret: "Maiale", impostor: "Cinghiale" },
      { secret: "Pollo", impostor: "Gallina" },
      { secret: "Anatra", impostor: "Oca" }
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
      { secret: "Frutta", impostor: "Verdura" },
      { secret: "Lasagne", impostor: "Cannelloni" },
      { secret: "Risotto", impostor: "Paella" },
      { secret: "Tiramisù", impostor: "Panna Cotta" },
      { secret: "Cappuccino", impostor: "Latte Macchiato" },
      { secret: "Espresso", impostor: "Ristretto" },
      { secret: "Croissant", impostor: "Brioche" },
      { secret: "Biscotti", impostor: "Frollini" },
      { secret: "Pane", impostor: "Grissini" },
      { secret: "Mozzarella", impostor: "Burrata" },
      { secret: "Parmigiano", impostor: "Grana" },
      { secret: "Prosciutto", impostor: "Salame" },
      { secret: "Carbonara", impostor: "Amatriciana" },
      { secret: "Ravioli", impostor: "Tortellini" },
      { secret: "Gnocchi", impostor: "Chicche" },
      { secret: "Polenta", impostor: "Cous Cous" }
    ]
  },
  places: {
    name: {
      it: "Luoghi",
      en: "Places",
      ro: "Locuri"
    },
    words: [
      { secret: "Spiaggia", impostor: "Lago" },
      { secret: "Montagna", impostor: "Collina" },
      { secret: "Città", impostor: "Paese" },
      { secret: "Deserto", impostor: "Savana" },
      { secret: "Foresta", impostor: "Giungla" },
      { secret: "Museo", impostor: "Galleria" },
      { secret: "Cinema", impostor: "Teatro" },
      { secret: "Ristorante", impostor: "Trattoria" },
      { secret: "Hotel", impostor: "Ostello" },
      { secret: "Ospedale", impostor: "Clinica" },
      { secret: "Scuola", impostor: "Università" },
      { secret: "Biblioteca", impostor: "Libreria" },
      { secret: "Palestra", impostor: "Piscina" },
      { secret: "Parco", impostor: "Giardino" },
      { secret: "Stadio", impostor: "Arena" },
      { secret: "Aeroporto", impostor: "Stazione" },
      { secret: "Porto", impostor: "Molo" },
      { secret: "Chiesa", impostor: "Cattedrale" },
      { secret: "Castello", impostor: "Fortezza" },
      { secret: "Torre", impostor: "Campanile" },
      { secret: "Ponte", impostor: "Viadotto" },
      { secret: "Piazza", impostor: "Largo" },
      { secret: "Mercato", impostor: "Fiera" },
      { secret: "Supermercato", impostor: "Discount" },
      { secret: "Bar", impostor: "Caffetteria" }
    ]
  },
  sports: {
    name: {
      it: "Sport",
      en: "Sports",
      ro: "Sporturi"
    },
    words: [
      { secret: "Calcio", impostor: "Rugby" },
      { secret: "Tennis", impostor: "Badminton" },
      { secret: "Pallavolo", impostor: "Pallacanestro" },
      { secret: "Nuoto", impostor: "Tuffi" },
      { secret: "Corsa", impostor: "Maratona" },
      { secret: "Ciclismo", impostor: "Mountain Bike" },
      { secret: "Boxe", impostor: "Kickboxing" },
      { secret: "Karate", impostor: "Judo" },
      { secret: "Yoga", impostor: "Pilates" },
      { secret: "Sci", impostor: "Snowboard" },
      { secret: "Pattinaggio", impostor: "Hockey" },
      { secret: "Golf", impostor: "Minigolf" },
      { secret: "Baseball", impostor: "Softball" },
      { secret: "Arrampicata", impostor: "Bouldering" },
      { secret: "Scherma", impostor: "Kendo" },
      { secret: "Atletica", impostor: "Ginnastica" },
      { secret: "Equitazione", impostor: "Polo" },
      { secret: "Vela", impostor: "Canottaggio" },
      { secret: "Surf", impostor: "Windsurf" },
      { secret: "Skateboard", impostor: "Longboard" },
      { secret: "Danza", impostor: "Balletto" },
      { secret: "Salto in Alto", impostor: "Salto in Lungo" },
      { secret: "Lancio del Peso", impostor: "Lancio del Disco" },
      { secret: "Tiro con Arco", impostor: "Tiro a Segno" },
      { secret: "Triathlon", impostor: "Pentathlon" }
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
      { secret: "Avvocato", impostor: "Giudice" },
      { secret: "Cuoco", impostor: "Chef" },
      { secret: "Architetto", impostor: "Ingegnere" },
      { secret: "Musicista", impostor: "Cantante" },
      { secret: "Attore", impostor: "Regista" },
      { secret: "Scrittore", impostor: "Poeta" },
      { secret: "Pittore", impostor: "Scultore" },
      { secret: "Fotografo", impostor: "Cameraman" },
      { secret: "Giornalista", impostor: "Reporter" },
      { secret: "Pompiere", impostor: "Poliziotto" },
      { secret: "Pilota", impostor: "Astronauta" },
      { secret: "Meccanico", impostor: "Elettricista" },
      { secret: "Parrucchiere", impostor: "Barbiere" },
      { secret: "Cameriere", impostor: "Barista" },
      { secret: "Dentista", impostor: "Ortodontista" },
      { secret: "Veterinario", impostor: "Zoologo" },
      { secret: "Farmacista", impostor: "Chimico" },
      { secret: "Psicologo", impostor: "Psichiatra" },
      { secret: "Contabile", impostor: "Commercialista" },
      { secret: "Bibliotecario", impostor: "Archivista" },
      { secret: "Giardiniere", impostor: "Fioraio" },
      { secret: "Sarto", impostor: "Stilista" },
      { secret: "Panettiere", impostor: "Pasticciere" }
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
      { secret: "Libro", impostor: "Giornale" },
      { secret: "Penna", impostor: "Matita" },
      { secret: "Orologio", impostor: "Cronometro" },
      { secret: "Occhiali", impostor: "Lenti" },
      { secret: "Borsa", impostor: "Zaino" },
      { secret: "Scarpe", impostor: "Stivali" },
      { secret: "Cappello", impostor: "Berretto" },
      { secret: "Ombrello", impostor: "Impermeabile" },
      { secret: "Chiavi", impostor: "Lucchetto" },
      { secret: "Portafoglio", impostor: "Borsellino" },
      { secret: "Cuscino", impostor: "Coperta" },
      { secret: "Lampada", impostor: "Lampadina" },
      { secret: "Specchio", impostor: "Vetro" },
      { secret: "Sedia", impostor: "Poltrona" },
      { secret: "Tavolo", impostor: "Scrivania" },
      { secret: "Letto", impostor: "Divano" },
      { secret: "Armadio", impostor: "Cassettiera" },
      { secret: "Frigorifero", impostor: "Congelatore" },
      { secret: "Forno", impostor: "Microonde" },
      { secret: "Televisore", impostor: "Monitor" },
      { secret: "Quadro", impostor: "Poster" },
      { secret: "Vaso", impostor: "Bottiglia" },
      { secret: "Profumo", impostor: "Deodorante" }
    ]
  },
  emotions: {
    name: {
      it: "Emozioni",
      en: "Emotions",
      ro: "Emoții"
    },
    words: [
      { secret: "Felicità", impostor: "Gioia" },
      { secret: "Tristezza", impostor: "Malinconia" },
      { secret: "Rabbia", impostor: "Ira" },
      { secret: "Paura", impostor: "Terrore" },
      { secret: "Sorpresa", impostor: "Stupore" },
      { secret: "Amore", impostor: "Affetto" },
      { secret: "Disgusto", impostor: "Repulsione" },
      { secret: "Ansia", impostor: "Nervosismo" },
      { secret: "Calma", impostor: "Serenità" },
      { secret: "Eccitazione", impostor: "Entusiasmo" },
      { secret: "Noia", impostor: "Apatia" },
      { secret: "Vergogna", impostor: "Imbarazzo" },
      { secret: "Orgoglio", impostor: "Superbia" },
      { secret: "Gelosia", impostor: "Invidia" },
      { secret: "Speranza", impostor: "Ottimismo" },
      { secret: "Disperazione", impostor: "Angoscia" },
      { secret: "Gratitudine", impostor: "Riconoscenza" },
      { secret: "Colpa", impostor: "Rimorso" },
      { secret: "Nostalgia", impostor: "Rimpianto" },
      { secret: "Sollievo", impostor: "Conforto" },
      { secret: "Frustrazione", impostor: "Delusione" },
      { secret: "Curiosità", impostor: "Interesse" },
      { secret: "Confusione", impostor: "Smarrimento" },
      { secret: "Soddisfazione", impostor: "Contentezza" },
      { secret: "Compassione", impostor: "Pietà" }
    ]
  }
};

export function getRandomWord(categoryKeys) {
  const categories = Array.isArray(categoryKeys) ? categoryKeys : [categoryKeys];
  const allWords = [];
  
  categories.forEach(key => {
    if (WORD_CATEGORIES[key]) {
      allWords.push(...WORD_CATEGORIES[key].words);
    }
  });
  
  if (allWords.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * allWords.length);
  return allWords[randomIndex];
}

export function getCategoryName(categoryKey, language) {
  return WORD_CATEGORIES[categoryKey]?.name[language] || categoryKey;
}
