// Database delle parole per il gioco Liars - 25 coppie per categoria
export const WORD_CATEGORIES = {
  animals: {
    name: {
      it: "Animali",
      en: "Animals",
      ro: "Animale"
    },
    words: [
      { secret: { it: "Cane", en: "Dog", ro: "Câine" }, impostor: { it: "Gatto", en: "Cat", ro: "Pisică" } },
      { secret: { it: "Leone", en: "Lion", ro: "Leu" }, impostor: { it: "Tigre", en: "Tiger", ro: "Tigru" } },
      { secret: { it: "Delfino", en: "Dolphin", ro: "Delfin" }, impostor: { it: "Squalo", en: "Shark", ro: "Rechin" } },
      { secret: { it: "Aquila", en: "Eagle", ro: "Acvilă" }, impostor: { it: "Falco", en: "Falcon", ro: "Șoim" } },
      { secret: { it: "Serpente", en: "Snake", ro: "Șarpe" }, impostor: { it: "Lucertola", en: "Lizard", ro: "Șopârlă" } },
      { secret: { it: "Cavallo", en: "Horse", ro: "Cal" }, impostor: { it: "Zebra", en: "Zebra", ro: "Zebră" } },
      { secret: { it: "Elefante", en: "Elephant", ro: "Elefant" }, impostor: { it: "Rinoceronte", en: "Rhinoceros", ro: "Rinocer" } },
      { secret: { it: "Panda", en: "Panda", ro: "Panda" }, impostor: { it: "Orso", en: "Bear", ro: "Urs" } },
      { secret: { it: "Pinguino", en: "Penguin", ro: "Pinguin" }, impostor: { it: "Foca", en: "Seal", ro: "Focă" } },
      { secret: { it: "Farfalla", en: "Butterfly", ro: "Fluture" }, impostor: { it: "Falena", en: "Moth", ro: "Molie" } },
      { secret: { it: "Lupo", en: "Wolf", ro: "Lup" }, impostor: { it: "Coyote", en: "Coyote", ro: "Coiot" } },
      { secret: { it: "Coniglio", en: "Rabbit", ro: "Iepure" }, impostor: { it: "Lepre", en: "Hare", ro: "Iepure de Câmp" } },
      { secret: { it: "Giraffa", en: "Giraffe", ro: "Girafă" }, impostor: { it: "Antilope", en: "Antelope", ro: "Antilopă" } },
      { secret: { it: "Coccodrillo", en: "Crocodile", ro: "Crocodil" }, impostor: { it: "Alligatore", en: "Alligator", ro: "Aligator" } },
      { secret: { it: "Balena", en: "Whale", ro: "Balenă" }, impostor: { it: "Capodoglio", en: "Sperm Whale", ro: "Cașalot" } },
      { secret: { it: "Scimmia", en: "Monkey", ro: "Maimuță" }, impostor: { it: "Gorilla", en: "Gorilla", ro: "Gorilă" } },
      { secret: { it: "Topo", en: "Mouse", ro: "Șoarece" }, impostor: { it: "Ratto", en: "Rat", ro: "Șobolan" } },
      { secret: { it: "Volpe", en: "Fox", ro: "Vulpe" }, impostor: { it: "Lupo Rosso", en: "Red Wolf", ro: "Lup Roșu" } },
      { secret: { it: "Orso Polare", en: "Polar Bear", ro: "Urs Polar" }, impostor: { it: "Orso Bruno", en: "Brown Bear", ro: "Urs Brun" } },
      { secret: { it: "Gufo", en: "Owl", ro: "Bufniță" }, impostor: { it: "Civetta", en: "Little Owl", ro: "Cucuvea" } },
      { secret: { it: "Mucca", en: "Cow", ro: "Vacă" }, impostor: { it: "Toro", en: "Bull", ro: "Taur" } },
      { secret: { it: "Pecora", en: "Sheep", ro: "Oaie" }, impostor: { it: "Capra", en: "Goat", ro: "Capră" } },
      { secret: { it: "Maiale", en: "Pig", ro: "Porc" }, impostor: { it: "Cinghiale", en: "Wild Boar", ro: "Mistreț" } },
      { secret: { it: "Pollo", en: "Chicken", ro: "Pui" }, impostor: { it: "Gallina", en: "Hen", ro: "Găină" } },
      { secret: { it: "Anatra", en: "Duck", ro: "Rață" }, impostor: { it: "Oca", en: "Goose", ro: "Gâscă" } }
    ]
  },
  food: {
    name: {
      it: "Cibo e Bevande",
      en: "Food & Drinks",
      ro: "Mâncare și Băuturi"
    },
    words: [
      { secret: { it: "Pizza", en: "Pizza", ro: "Pizza" }, impostor: { it: "Focaccia", en: "Focaccia", ro: "Focaccia" } },
      { secret: { it: "Gelato", en: "Ice Cream", ro: "Înghețată" }, impostor: { it: "Sorbetto", en: "Sorbet", ro: "Sorbet" } },
      { secret: { it: "Pasta", en: "Pasta", ro: "Paste" }, impostor: { it: "Riso", en: "Rice", ro: "Orez" } },
      { secret: { it: "Caffè", en: "Coffee", ro: "Cafea" }, impostor: { it: "Tè", en: "Tea", ro: "Ceai" } },
      { secret: { it: "Hamburger", en: "Hamburger", ro: "Hamburger" }, impostor: { it: "Panino", en: "Sandwich", ro: "Sandviș" } },
      { secret: { it: "Sushi", en: "Sushi", ro: "Sushi" }, impostor: { it: "Sashimi", en: "Sashimi", ro: "Sashimi" } },
      { secret: { it: "Cioccolato", en: "Chocolate", ro: "Ciocolată" }, impostor: { it: "Caramella", en: "Candy", ro: "Bomboană" } },
      { secret: { it: "Birra", en: "Beer", ro: "Bere" }, impostor: { it: "Vino", en: "Wine", ro: "Vin" } },
      { secret: { it: "Torta", en: "Cake", ro: "Tort" }, impostor: { it: "Crostata", en: "Tart", ro: "Tartă" } },
      { secret: { it: "Frutta", en: "Fruit", ro: "Fructe" }, impostor: { it: "Verdura", en: "Vegetables", ro: "Legume" } },
      { secret: { it: "Lasagne", en: "Lasagna", ro: "Lasagna" }, impostor: { it: "Cannelloni", en: "Cannelloni", ro: "Cannelloni" } },
      { secret: { it: "Risotto", en: "Risotto", ro: "Risotto" }, impostor: { it: "Paella", en: "Paella", ro: "Paella" } },
      { secret: { it: "Tiramisù", en: "Tiramisu", ro: "Tiramisu" }, impostor: { it: "Panna Cotta", en: "Panna Cotta", ro: "Panna Cotta" } },
      { secret: { it: "Cappuccino", en: "Cappuccino", ro: "Cappuccino" }, impostor: { it: "Latte Macchiato", en: "Latte Macchiato", ro: "Latte Macchiato" } },
      { secret: { it: "Espresso", en: "Espresso", ro: "Espresso" }, impostor: { it: "Ristretto", en: "Ristretto", ro: "Ristretto" } },
      { secret: { it: "Croissant", en: "Croissant", ro: "Croissant" }, impostor: { it: "Brioche", en: "Brioche", ro: "Brioche" } },
      { secret: { it: "Biscotti", en: "Cookies", ro: "Biscuiți" }, impostor: { it: "Frollini", en: "Shortbread", ro: "Fursecuri" } },
      { secret: { it: "Pane", en: "Bread", ro: "Pâine" }, impostor: { it: "Grissini", en: "Breadsticks", ro: "Băgețe" } },
      { secret: { it: "Mozzarella", en: "Mozzarella", ro: "Mozzarella" }, impostor: { it: "Burrata", en: "Burrata", ro: "Burrata" } },
      { secret: { it: "Parmigiano", en: "Parmesan", ro: "Parmezan" }, impostor: { it: "Grana", en: "Grana", ro: "Grana" } },
      { secret: { it: "Prosciutto", en: "Ham", ro: "Șuncă" }, impostor: { it: "Salame", en: "Salami", ro: "Salam" } },
      { secret: { it: "Carbonara", en: "Carbonara", ro: "Carbonara" }, impostor: { it: "Amatriciana", en: "Amatriciana", ro: "Amatriciana" } },
      { secret: { it: "Ravioli", en: "Ravioli", ro: "Ravioli" }, impostor: { it: "Tortellini", en: "Tortellini", ro: "Tortellini" } },
      { secret: { it: "Gnocchi", en: "Gnocchi", ro: "Gnocchi" }, impostor: { it: "Chicche", en: "Chicche", ro: "Chicche" } },
      { secret: { it: "Polenta", en: "Polenta", ro: "Mămăligă" }, impostor: { it: "Cous Cous", en: "Couscous", ro: "Cuscus" } }
    ]
  },
  places: {
    name: {
      it: "Luoghi",
      en: "Places",
      ro: "Locuri"
    },
    words: [
      { secret: { it: "Spiaggia", en: "Beach", ro: "Plajă" }, impostor: { it: "Lago", en: "Lake", ro: "Lac" } },
      { secret: { it: "Montagna", en: "Mountain", ro: "Munte" }, impostor: { it: "Collina", en: "Hill", ro: "Deal" } },
      { secret: { it: "Città", en: "City", ro: "Oraș" }, impostor: { it: "Paese", en: "Town", ro: "Sat" } },
      { secret: { it: "Deserto", en: "Desert", ro: "Deșert" }, impostor: { it: "Savana", en: "Savanna", ro: "Savană" } },
      { secret: { it: "Foresta", en: "Forest", ro: "Pădure" }, impostor: { it: "Giungla", en: "Jungle", ro: "Junglă" } },
      { secret: { it: "Museo", en: "Museum", ro: "Muzeu" }, impostor: { it: "Galleria", en: "Gallery", ro: "Galerie" } },
      { secret: { it: "Cinema", en: "Cinema", ro: "Cinema" }, impostor: { it: "Teatro", en: "Theater", ro: "Teatru" } },
      { secret: { it: "Ristorante", en: "Restaurant", ro: "Restaurant" }, impostor: { it: "Trattoria", en: "Trattoria", ro: "Trattorie" } },
      { secret: { it: "Hotel", en: "Hotel", ro: "Hotel" }, impostor: { it: "Ostello", en: "Hostel", ro: "Hostel" } },
      { secret: { it: "Ospedale", en: "Hospital", ro: "Spital" }, impostor: { it: "Clinica", en: "Clinic", ro: "Clinică" } },
      { secret: { it: "Scuola", en: "School", ro: "Școală" }, impostor: { it: "Università", en: "University", ro: "Universitate" } },
      { secret: { it: "Biblioteca", en: "Library", ro: "Bibliotecă" }, impostor: { it: "Libreria", en: "Bookstore", ro: "Librărie" } },
      { secret: { it: "Palestra", en: "Gym", ro: "Sală de Sport" }, impostor: { it: "Piscina", en: "Pool", ro: "Piscină" } },
      { secret: { it: "Parco", en: "Park", ro: "Parc" }, impostor: { it: "Giardino", en: "Garden", ro: "Grădină" } },
      { secret: { it: "Stadio", en: "Stadium", ro: "Stadion" }, impostor: { it: "Arena", en: "Arena", ro: "Arenă" } },
      { secret: { it: "Aeroporto", en: "Airport", ro: "Aeroport" }, impostor: { it: "Stazione", en: "Station", ro: "Gară" } },
      { secret: { it: "Porto", en: "Port", ro: "Port" }, impostor: { it: "Molo", en: "Pier", ro: "Chei" } },
      { secret: { it: "Chiesa", en: "Church", ro: "Biserică" }, impostor: { it: "Cattedrale", en: "Cathedral", ro: "Catedrală" } },
      { secret: { it: "Castello", en: "Castle", ro: "Castel" }, impostor: { it: "Fortezza", en: "Fortress", ro: "Fortăreață" } },
      { secret: { it: "Torre", en: "Tower", ro: "Turn" }, impostor: { it: "Campanile", en: "Bell Tower", ro: "Clopotniță" } },
      { secret: { it: "Ponte", en: "Bridge", ro: "Pod" }, impostor: { it: "Viadotto", en: "Viaduct", ro: "Viaduct" } },
      { secret: { it: "Piazza", en: "Square", ro: "Piață" }, impostor: { it: "Largo", en: "Plaza", ro: "Esplanadă" } },
      { secret: { it: "Mercato", en: "Market", ro: "Piață" }, impostor: { it: "Fiera", en: "Fair", ro: "Târg" } },
      { secret: { it: "Supermercato", en: "Supermarket", ro: "Supermarket" }, impostor: { it: "Discount", en: "Discount Store", ro: "Magazin Discount" } },
      { secret: { it: "Bar", en: "Bar", ro: "Bar" }, impostor: { it: "Caffetteria", en: "Café", ro: "Cafenea" } }
    ]
  },
  sports: {
    name: {
      it: "Sport",
      en: "Sports",
      ro: "Sporturi"
    },
    words: [
      { secret: { it: "Calcio", en: "Soccer", ro: "Fotbal" }, impostor: { it: "Rugby", en: "Rugby", ro: "Rugby" } },
      { secret: { it: "Tennis", en: "Tennis", ro: "Tenis" }, impostor: { it: "Badminton", en: "Badminton", ro: "Badminton" } },
      { secret: { it: "Pallavolo", en: "Volleyball", ro: "Volei" }, impostor: { it: "Pallacanestro", en: "Basketball", ro: "Baschet" } },
      { secret: { it: "Nuoto", en: "Swimming", ro: "Înot" }, impostor: { it: "Tuffi", en: "Diving", ro: "Sărituri" } },
      { secret: { it: "Corsa", en: "Running", ro: "Alergare" }, impostor: { it: "Maratona", en: "Marathon", ro: "Maraton" } },
      { secret: { it: "Ciclismo", en: "Cycling", ro: "Ciclism" }, impostor: { it: "Mountain Bike", en: "Mountain Biking", ro: "Mountain Bike" } },
      { secret: { it: "Boxe", en: "Boxing", ro: "Box" }, impostor: { it: "Kickboxing", en: "Kickboxing", ro: "Kickboxing" } },
      { secret: { it: "Karate", en: "Karate", ro: "Karate" }, impostor: { it: "Judo", en: "Judo", ro: "Judo" } },
      { secret: { it: "Yoga", en: "Yoga", ro: "Yoga" }, impostor: { it: "Pilates", en: "Pilates", ro: "Pilates" } },
      { secret: { it: "Sci", en: "Skiing", ro: "Schi" }, impostor: { it: "Snowboard", en: "Snowboarding", ro: "Snowboard" } },
      { secret: { it: "Pattinaggio", en: "Skating", ro: "Patinaj" }, impostor: { it: "Hockey", en: "Hockey", ro: "Hochei" } },
      { secret: { it: "Golf", en: "Golf", ro: "Golf" }, impostor: { it: "Minigolf", en: "Mini Golf", ro: "Minigolf" } },
      { secret: { it: "Baseball", en: "Baseball", ro: "Baseball" }, impostor: { it: "Softball", en: "Softball", ro: "Softball" } },
      { secret: { it: "Arrampicata", en: "Climbing", ro: "Escaladă" }, impostor: { it: "Bouldering", en: "Bouldering", ro: "Bouldering" } },
      { secret: { it: "Scherma", en: "Fencing", ro: "Scrimă" }, impostor: { it: "Kendo", en: "Kendo", ro: "Kendo" } },
      { secret: { it: "Atletica", en: "Athletics", ro: "Atletism" }, impostor: { it: "Ginnastica", en: "Gymnastics", ro: "Gimnastică" } },
      { secret: { it: "Equitazione", en: "Horse Riding", ro: "Echitație" }, impostor: { it: "Polo", en: "Polo", ro: "Polo" } },
      { secret: { it: "Vela", en: "Sailing", ro: "Yachting" }, impostor: { it: "Canottaggio", en: "Rowing", ro: "Canotaj" } },
      { secret: { it: "Surf", en: "Surfing", ro: "Surf" }, impostor: { it: "Windsurf", en: "Windsurfing", ro: "Windsurf" } },
      { secret: { it: "Skateboard", en: "Skateboarding", ro: "Skateboard" }, impostor: { it: "Longboard", en: "Longboarding", ro: "Longboard" } },
      { secret: { it: "Danza", en: "Dance", ro: "Dans" }, impostor: { it: "Balletto", en: "Ballet", ro: "Balet" } },
      { secret: { it: "Salto in Alto", en: "High Jump", ro: "Săritură în Înălțime" }, impostor: { it: "Salto in Lungo", en: "Long Jump", ro: "Săritură în Lungime" } },
      { secret: { it: "Lancio del Peso", en: "Shot Put", ro: "Aruncarea Greutății" }, impostor: { it: "Lancio del Disco", en: "Discus Throw", ro: "Aruncarea Discului" } },
      { secret: { it: "Tiro con Arco", en: "Archery", ro: "Tir cu Arcul" }, impostor: { it: "Tiro a Segno", en: "Shooting", ro: "Tir Sportiv" } },
      { secret: { it: "Triathlon", en: "Triathlon", ro: "Triatlon" }, impostor: { it: "Pentathlon", en: "Pentathlon", ro: "Pentathlon" } }
    ]
  },
  professions: {
    name: {
      it: "Professioni",
      en: "Professions",
      ro: "Profesii"
    },
    words: [
      { secret: { it: "Medico", en: "Doctor", ro: "Medic" }, impostor: { it: "Infermiere", en: "Nurse", ro: "Asistent Medical" } },
      { secret: { it: "Insegnante", en: "Teacher", ro: "Profesor" }, impostor: { it: "Professore", en: "Professor", ro: "Conferențiar" } },
      { secret: { it: "Avvocato", en: "Lawyer", ro: "Avocat" }, impostor: { it: "Giudice", en: "Judge", ro: "Judecător" } },
      { secret: { it: "Cuoco", en: "Cook", ro: "Bucătar" }, impostor: { it: "Chef", en: "Chef", ro: "Sef Bucătar" } },
      { secret: { it: "Architetto", en: "Architect", ro: "Arhitect" }, impostor: { it: "Ingegnere", en: "Engineer", ro: "Inginer" } },
      { secret: { it: "Musicista", en: "Musician", ro: "Muzician" }, impostor: { it: "Cantante", en: "Singer", ro: "Cântăreț" } },
      { secret: { it: "Attore", en: "Actor", ro: "Actor" }, impostor: { it: "Regista", en: "Director", ro: "Regizor" } },
      { secret: { it: "Scrittore", en: "Writer", ro: "Scriitor" }, impostor: { it: "Poeta", en: "Poet", ro: "Poet" } },
      { secret: { it: "Pittore", en: "Painter", ro: "Pictor" }, impostor: { it: "Scultore", en: "Sculptor", ro: "Sculptor" } },
      { secret: { it: "Fotografo", en: "Photographer", ro: "Fotograf" }, impostor: { it: "Cameraman", en: "Cameraman", ro: "Cameraman" } },
      { secret: { it: "Giornalista", en: "Journalist", ro: "Jurnalist" }, impostor: { it: "Reporter", en: "Reporter", ro: "Reporter" } },
      { secret: { it: "Pompiere", en: "Firefighter", ro: "Pompier" }, impostor: { it: "Poliziotto", en: "Police Officer", ro: "Polițist" } },
      { secret: { it: "Pilota", en: "Pilot", ro: "Pilot" }, impostor: { it: "Astronauta", en: "Astronaut", ro: "Astronaut" } },
      { secret: { it: "Meccanico", en: "Mechanic", ro: "Mecanic" }, impostor: { it: "Elettricista", en: "Electrician", ro: "Electrician" } },
      { secret: { it: "Parrucchiere", en: "Hairdresser", ro: "Coafor" }, impostor: { it: "Barbiere", en: "Barber", ro: "Frizer" } },
      { secret: { it: "Cameriere", en: "Waiter", ro: "Chelner" }, impostor: { it: "Barista", en: "Barista", ro: "Barista" } },
      { secret: { it: "Dentista", en: "Dentist", ro: "Dentist" }, impostor: { it: "Ortodontista", en: "Orthodontist", ro: "Ortodont" } },
      { secret: { it: "Veterinario", en: "Veterinarian", ro: "Veterinar" }, impostor: { it: "Zoologo", en: "Zoologist", ro: "Zoolog" } },
      { secret: { it: "Farmacista", en: "Pharmacist", ro: "Farmacist" }, impostor: { it: "Chimico", en: "Chemist", ro: "Chimist" } },
      { secret: { it: "Psicologo", en: "Psychologist", ro: "Psiholog" }, impostor: { it: "Psichiatra", en: "Psychiatrist", ro: "Psihiatru" } },
      { secret: { it: "Contabile", en: "Accountant", ro: "Contabil" }, impostor: { it: "Commercialista", en: "Tax Consultant", ro: "Consultant Fiscal" } },
      { secret: { it: "Bibliotecario", en: "Librarian", ro: "Bibliotecar" }, impostor: { it: "Archivista", en: "Archivist", ro: "Arhivar" } },
      { secret: { it: "Giardiniere", en: "Gardener", ro: "Grădinar" }, impostor: { it: "Fioraio", en: "Florist", ro: "Florar" } },
      { secret: { it: "Sarto", en: "Tailor", ro: "Croitor" }, impostor: { it: "Stilista", en: "Fashion Designer", ro: "Designer de Modă" } },
      { secret: { it: "Panettiere", en: "Baker", ro: "Brutar" }, impostor: { it: "Pasticciere", en: "Pastry Chef", ro: "Patiser" } }
    ]
  },
  objects: {
    name: {
      it: "Oggetti",
      en: "Objects",
      ro: "Obiecte"
    },
    words: [
      { secret: { it: "Telefono", en: "Phone", ro: "Telefon" }, impostor: { it: "Tablet", en: "Tablet", ro: "Tabletă" } },
      { secret: { it: "Computer", en: "Computer", ro: "Calculator" }, impostor: { it: "Laptop", en: "Laptop", ro: "Laptop" } },
      { secret: { it: "Libro", en: "Book", ro: "Carte" }, impostor: { it: "Giornale", en: "Newspaper", ro: "Ziar" } },
      { secret: { it: "Penna", en: "Pen", ro: "Pix" }, impostor: { it: "Matita", en: "Pencil", ro: "Creion" } },
      { secret: { it: "Orologio", en: "Watch", ro: "Ceas" }, impostor: { it: "Cronometro", en: "Stopwatch", ro: "Cronometru" } },
      { secret: { it: "Occhiali", en: "Glasses", ro: "Ochelari" }, impostor: { it: "Lenti", en: "Lenses", ro: "Lentile" } },
      { secret: { it: "Borsa", en: "Bag", ro: "Geantă" }, impostor: { it: "Zaino", en: "Backpack", ro: "Rucsac" } },
      { secret: { it: "Scarpe", en: "Shoes", ro: "Pantofi" }, impostor: { it: "Stivali", en: "Boots", ro: "Cizme" } },
      { secret: { it: "Cappello", en: "Hat", ro: "Pălărie" }, impostor: { it: "Berretto", en: "Cap", ro: "Șapcă" } },
      { secret: { it: "Ombrello", en: "Umbrella", ro: "Umbrelă" }, impostor: { it: "Impermeabile", en: "Raincoat", ro: "Impermeabil" } },
      { secret: { it: "Chiavi", en: "Keys", ro: "Chei" }, impostor: { it: "Lucchetto", en: "Padlock", ro: "Lacăt" } },
      { secret: { it: "Portafoglio", en: "Wallet", ro: "Portofel" }, impostor: { it: "Borsellino", en: "Purse", ro: "Portmoneu" } },
      { secret: { it: "Cuscino", en: "Pillow", ro: "Pernă" }, impostor: { it: "Coperta", en: "Blanket", ro: "Pătură" } },
      { secret: { it: "Lampada", en: "Lamp", ro: "Lampă" }, impostor: { it: "Lampadina", en: "Light Bulb", ro: "Bec" } },
      { secret: { it: "Specchio", en: "Mirror", ro: "Oglindă" }, impostor: { it: "Vetro", en: "Glass", ro: "Sticlă" } },
      { secret: { it: "Sedia", en: "Chair", ro: "Scaun" }, impostor: { it: "Poltrona", en: "Armchair", ro: "Fotoliu" } },
      { secret: { it: "Tavolo", en: "Table", ro: "Masă" }, impostor: { it: "Scrivania", en: "Desk", ro: "Birou" } },
      { secret: { it: "Letto", en: "Bed", ro: "Pat" }, impostor: { it: "Divano", en: "Sofa", ro: "Canapea" } },
      { secret: { it: "Armadio", en: "Wardrobe", ro: "Dulap" }, impostor: { it: "Cassettiera", en: "Drawer", ro: "Comodă" } },
      { secret: { it: "Frigorifero", en: "Refrigerator", ro: "Frigider" }, impostor: { it: "Congelatore", en: "Freezer", ro: "Congelator" } },
      { secret: { it: "Forno", en: "Oven", ro: "Cuptor" }, impostor: { it: "Microonde", en: "Microwave", ro: "Cuptor cu Microunde" } },
      { secret: { it: "Televisore", en: "Television", ro: "Televizor" }, impostor: { it: "Monitor", en: "Monitor", ro: "Monitor" } },
      { secret: { it: "Quadro", en: "Painting", ro: "Tablou" }, impostor: { it: "Poster", en: "Poster", ro: "Poster" } },
      { secret: { it: "Vaso", en: "Vase", ro: "Vază" }, impostor: { it: "Bottiglia", en: "Bottle", ro: "Sticlă" } },
      { secret: { it: "Profumo", en: "Perfume", ro: "Parfum" }, impostor: { it: "Deodorante", en: "Deodorant", ro: "Deodorant" } }
    ]
  },
  emotions: {
    name: {
      it: "Emozioni",
      en: "Emotions",
      ro: "Emoții"
    },
    words: [
      { secret: { it: "Felicità", en: "Happiness", ro: "Fericire" }, impostor: { it: "Gioia", en: "Joy", ro: "Bucurie" } },
      { secret: { it: "Tristezza", en: "Sadness", ro: "Tristețe" }, impostor: { it: "Malinconia", en: "Melancholy", ro: "Melancolie" } },
      { secret: { it: "Rabbia", en: "Anger", ro: "Furie" }, impostor: { it: "Ira", en: "Rage", ro: "Mânie" } },
      { secret: { it: "Paura", en: "Fear", ro: "Frică" }, impostor: { it: "Terrore", en: "Terror", ro: "Teroare" } },
      { secret: { it: "Sorpresa", en: "Surprise", ro: "Surpriză" }, impostor: { it: "Stupore", en: "Amazement", ro: "Uimire" } },
      { secret: { it: "Amore", en: "Love", ro: "Iubire" }, impostor: { it: "Affetto", en: "Affection", ro: "Afecțiune" } },
      { secret: { it: "Disgusto", en: "Disgust", ro: "Dezgust" }, impostor: { it: "Repulsione", en: "Repulsion", ro: "Repulsie" } },
      { secret: { it: "Ansia", en: "Anxiety", ro: "Anxietate" }, impostor: { it: "Nervosismo", en: "Nervousness", ro: "Nervozitate" } },
      { secret: { it: "Calma", en: "Calm", ro: "Calm" }, impostor: { it: "Serenità", en: "Serenity", ro: "Seninătate" } },
      { secret: { it: "Eccitazione", en: "Excitement", ro: "Agitație" }, impostor: { it: "Entusiasmo", en: "Enthusiasm", ro: "Entuziasm" } },
      { secret: { it: "Noia", en: "Boredom", ro: "Plictiseală" }, impostor: { it: "Apatia", en: "Apathy", ro: "Apatie" } },
      { secret: { it: "Vergogna", en: "Shame", ro: "Rușine" }, impostor: { it: "Imbarazzo", en: "Embarrassment", ro: "Jenă" } },
      { secret: { it: "Orgoglio", en: "Pride", ro: "Mândrie" }, impostor: { it: "Superbia", en: "Arrogance", ro: "Aroganță" } },
      { secret: { it: "Gelosia", en: "Jealousy", ro: "Gelozie" }, impostor: { it: "Invidia", en: "Envy", ro: "Invidie" } },
      { secret: { it: "Speranza", en: "Hope", ro: "Speranță" }, impostor: { it: "Ottimismo", en: "Optimism", ro: "Optimism" } },
      { secret: { it: "Disperazione", en: "Despair", ro: "Disperare" }, impostor: { it: "Angoscia", en: "Anguish", ro: "Chin" } },
      { secret: { it: "Gratitudine", en: "Gratitude", ro: "Recunoștință" }, impostor: { it: "Riconoscenza", en: "Thankfulness", ro: "Mulțumire" } },
      { secret: { it: "Colpa", en: "Guilt", ro: "Vinovăție" }, impostor: { it: "Rimorso", en: "Remorse", ro: "Remușcare" } },
      { secret: { it: "Nostalgia", en: "Nostalgia", ro: "Nostalgie" }, impostor: { it: "Rimpianto", en: "Regret", ro: "Regret" } },
      { secret: { it: "Sollievo", en: "Relief", ro: "Ușurare" }, impostor: { it: "Conforto", en: "Comfort", ro: "Confort" } },
      { secret: { it: "Frustrazione", en: "Frustration", ro: "Frustrare" }, impostor: { it: "Delusione", en: "Disappointment", ro: "Dezamăgire" } },
      { secret: { it: "Curiosità", en: "Curiosity", ro: "Curiozitate" }, impostor: { it: "Interesse", en: "Interest", ro: "Interes" } },
      { secret: { it: "Confusione", en: "Confusion", ro: "Confuzie" }, impostor: { it: "Smarrimento", en: "Bewilderment", ro: "Dezorientare" } },
      { secret: { it: "Soddisfazione", en: "Satisfaction", ro: "Satisfacție" }, impostor: { it: "Contentezza", en: "Contentment", ro: "Mulțumire" } },
      { secret: { it: "Compassione", en: "Compassion", ro: "Compasiune" }, impostor: { it: "Pietà", en: "Pity", ro: "Milă" } }
    ]
  }
};

export function getRandomWord(categoryKeys, language = 'it') {
  const categories = Array.isArray(categoryKeys) ? categoryKeys : [categoryKeys];
  const allWords = [];
  
  categories.forEach(key => {
    if (WORD_CATEGORIES[key]) {
      allWords.push(...WORD_CATEGORIES[key].words);
    }
  });
  
  if (allWords.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * allWords.length);
  const wordPair = allWords[randomIndex];
  
  // Restituisci le parole nella lingua specificata
  return {
    secret: wordPair.secret[language] || wordPair.secret.it,
    impostor: wordPair.impostor[language] || wordPair.impostor.it
  };
}

export function getCategoryName(categoryKey, language) {
  return WORD_CATEGORIES[categoryKey]?.name[language] || categoryKey;
}
