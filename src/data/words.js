// Database delle parole per il gioco Liars - 25 coppie per categoria
export const WORD_CATEGORIES = {
  animals: {
    name: {
      it: "Animali",
      en: "Animals",
      ro: "Animale"
    },
    words: [
      { secret: { it: "Cane", en: "Dog", ro: "Câine" }, impostor: { it: "Animale Domestico", en: "Pet", ro: "Animal de Companie" } },
      { secret: { it: "Leone", en: "Lion", ro: "Leu" }, impostor: { it: "Felino Selvaggio", en: "Wild Cat", ro: "Felină Sălbatică" } },
      { secret: { it: "Delfino", en: "Dolphin", ro: "Delfin" }, impostor: { it: "Mammifero Marino", en: "Marine Mammal", ro: "Mamifer Marin" } },
      { secret: { it: "Aquila", en: "Eagle", ro: "Acvilă" }, impostor: { it: "Rapace", en: "Bird of Prey", ro: "Păsăre de Pradă" } },
      { secret: { it: "Serpente", en: "Snake", ro: "Șarpe" }, impostor: { it: "Rettile", en: "Reptile", ro: "Reptilă" } },
      { secret: { it: "Cavallo", en: "Horse", ro: "Cal" }, impostor: { it: "Erbivoro", en: "Herbivore", ro: "Ierbivor" } },
      { secret: { it: "Elefante", en: "Elephant", ro: "Elefant" }, impostor: { it: "Animale con Proboscide", en: "Animal with Trunk", ro: "Animal cu Trompa" } },
      { secret: { it: "Panda", en: "Panda", ro: "Panda" }, impostor: { it: "Orso", en: "Bear", ro: "Urs" } },
      { secret: { it: "Pinguino", en: "Penguin", ro: "Pinguin" }, impostor: { it: "Uccello Antartico", en: "Antarctic Bird", ro: "Pasăre Antarctică" } },
      { secret: { it: "Farfalla", en: "Butterfly", ro: "Fluture" }, impostor: { it: "Insetto Volante", en: "Flying Insect", ro: "Insectă Zburătoare" } },
      { secret: { it: "Lupo", en: "Wolf", ro: "Lup" }, impostor: { it: "Predatore", en: "Predator", ro: "Prădător" } },
      { secret: { it: "Coniglio", en: "Rabbit", ro: "Iepure" }, impostor: { it: "Animale con Orecchie Lunghe", en: "Long-Eared Animal", ro: "Animal cu Urechi Lungi" } },
      { secret: { it: "Giraffa", en: "Giraffe", ro: "Girafă" }, impostor: { it: "Animale dal Collo Lungo", en: "Long-Necked Animal", ro: "Animal cu Gât Lung" } },
      { secret: { it: "Coccodrillo", en: "Crocodile", ro: "Crocodil" }, impostor: { it: "Rettile Acquatico", en: "Aquatic Reptile", ro: "Reptilă Acvatică" } },
      { secret: { it: "Balena", en: "Whale", ro: "Balenă" }, impostor: { it: "Gigante del Mare", en: "Sea Giant", ro: "Gigant al Mării" } },
      { secret: { it: "Scimmia", en: "Monkey", ro: "Maimuță" }, impostor: { it: "Primate", en: "Primate", ro: "Primat" } },
      { secret: { it: "Topo", en: "Mouse", ro: "Șoarece" }, impostor: { it: "Roditore", en: "Rodent", ro: "Rozător" } },
      { secret: { it: "Volpe", en: "Fox", ro: "Vulpe" }, impostor: { it: "Animale Astuto", en: "Cunning Animal", ro: "Animal Șiret" } },
      { secret: { it: "Orso Polare", en: "Polar Bear", ro: "Urs Polar" }, impostor: { it: "Animale dell'Artico", en: "Arctic Animal", ro: "Animal Arctic" } },
      { secret: { it: "Gufo", en: "Owl", ro: "Bufniță" }, impostor: { it: "Rapace Notturno", en: "Night Bird", ro: "Pasăre Nocturnă" } },
      { secret: { it: "Mucca", en: "Cow", ro: "Vacă" }, impostor: { it: "Animale da Fattoria", en: "Farm Animal", ro: "Animal de Fermă" } },
      { secret: { it: "Pecora", en: "Sheep", ro: "Oaie" }, impostor: { it: "Animale con Lana", en: "Wool Animal", ro: "Animal cu Lână" } },
      { secret: { it: "Maiale", en: "Pig", ro: "Porc" }, impostor: { it: "Animale Rosa", en: "Pink Animal", ro: "Animal Roz" } },
      { secret: { it: "Pollo", en: "Chicken", ro: "Pui" }, impostor: { it: "Volatile da Cortile", en: "Poultry", ro: "Pasăre de Curte" } },
      { secret: { it: "Anatra", en: "Duck", ro: "Rață" }, impostor: { it: "Uccello Acquatico", en: "Water Bird", ro: "Pasăre Acvatică" } }
    ]
  },
  food: {
    name: {
      it: "Cibo e Bevande",
      en: "Food & Drinks",
      ro: "Mâncare și Băuturi"
    },
    words: [
      { secret: { it: "Pizza", en: "Pizza", ro: "Pizza" }, impostor: { it: "Piatto Italiano", en: "Italian Dish", ro: "Fel Italian" } },
      { secret: { it: "Gelato", en: "Ice Cream", ro: "Înghețată" }, impostor: { it: "Dolce Freddo", en: "Frozen Dessert", ro: "Desert Rece" } },
      { secret: { it: "Pasta", en: "Pasta", ro: "Paste" }, impostor: { it: "Carboidrato", en: "Carbohydrate", ro: "Carbohidrat" } },
      { secret: { it: "Caffè", en: "Coffee", ro: "Cafea" }, impostor: { it: "Bevanda Calda", en: "Hot Drink", ro: "Băutură Caldă" } },
      { secret: { it: "Hamburger", en: "Hamburger", ro: "Hamburger" }, impostor: { it: "Fast Food", en: "Fast Food", ro: "Fast Food" } },
      { secret: { it: "Sushi", en: "Sushi", ro: "Sushi" }, impostor: { it: "Piatto Giapponese", en: "Japanese Dish", ro: "Fel Japonez" } },
      { secret: { it: "Cioccolato", en: "Chocolate", ro: "Ciocolată" }, impostor: { it: "Dolciume", en: "Sweet", ro: "Dulciuri" } },
      { secret: { it: "Birra", en: "Beer", ro: "Bere" }, impostor: { it: "Bevanda Alcolica", en: "Alcoholic Drink", ro: "Băutură Alcoolică" } },
      { secret: { it: "Torta", en: "Cake", ro: "Tort" }, impostor: { it: "Dessert", en: "Dessert", ro: "Desert" } },
      { secret: { it: "Frutta", en: "Fruit", ro: "Fructe" }, impostor: { it: "Cibo Sano", en: "Healthy Food", ro: "Aliment Sănătos" } },
      { secret: { it: "Lasagne", en: "Lasagna", ro: "Lasagna" }, impostor: { it: "Piatto al Forno", en: "Baked Dish", ro: "Fel la Cuptor" } },
      { secret: { it: "Risotto", en: "Risotto", ro: "Risotto" }, impostor: { it: "Piatto di Riso", en: "Rice Dish", ro: "Fel cu Orez" } },
      { secret: { it: "Tiramisù", en: "Tiramisu", ro: "Tiramisu" }, impostor: { it: "Dolce al Cucchiaio", en: "Spoon Dessert", ro: "Desert cu Lingura" } },
      { secret: { it: "Cappuccino", en: "Cappuccino", ro: "Cappuccino" }, impostor: { it: "Caffè con Latte", en: "Coffee with Milk", ro: "Cafea cu Lapte" } },
      { secret: { it: "Espresso", en: "Espresso", ro: "Espresso" }, impostor: { it: "Caffè Corto", en: "Short Coffee", ro: "Cafea Scurtă" } },
      { secret: { it: "Croissant", en: "Croissant", ro: "Croissant" }, impostor: { it: "Prodotto da Forno", en: "Bakery Product", ro: "Produs de Brutarie" } },
      { secret: { it: "Biscotti", en: "Cookies", ro: "Biscuiți" }, impostor: { it: "Dolce Secco", en: "Dry Sweet", ro: "Dulce Uscat" } },
      { secret: { it: "Pane", en: "Bread", ro: "Pâine" }, impostor: { it: "Alimento Base", en: "Staple Food", ro: "Aliment de Bază" } },
      { secret: { it: "Mozzarella", en: "Mozzarella", ro: "Mozzarella" }, impostor: { it: "Formaggio", en: "Cheese", ro: "Brânză" } },
      { secret: { it: "Parmigiano", en: "Parmesan", ro: "Parmezan" }, impostor: { it: "Formaggio Stagionato", en: "Aged Cheese", ro: "Brânză Maturizată" } },
      { secret: { it: "Prosciutto", en: "Ham", ro: "Șuncă" }, impostor: { it: "Salume", en: "Cured Meat", ro: "Cârnat" } },
      { secret: { it: "Carbonara", en: "Carbonara", ro: "Carbonara" }, impostor: { it: "Condimento per Pasta", en: "Pasta Sauce", ro: "Sos pentru Paste" } },
      { secret: { it: "Ravioli", en: "Ravioli", ro: "Ravioli" }, impostor: { it: "Pasta Ripiena", en: "Stuffed Pasta", ro: "Paste Umplute" } },
      { secret: { it: "Gnocchi", en: "Gnocchi", ro: "Gnocchi" }, impostor: { it: "Pasta di Patate", en: "Potato Pasta", ro: "Paste din Cartofi" } },
      { secret: { it: "Polenta", en: "Polenta", ro: "Mămăligă" }, impostor: { it: "Piatto di Mais", en: "Corn Dish", ro: "Fel din Porumb" } }
    ]
  },
  places: {
    name: {
      it: "Luoghi",
      en: "Places",
      ro: "Locuri"
    },
    words: [
      { secret: { it: "Spiaggia", en: "Beach", ro: "Plajă" }, impostor: { it: "Luogo Vacanza", en: "Vacation Spot", ro: "Loc de Vacanță" } },
      { secret: { it: "Montagna", en: "Mountain", ro: "Munte" }, impostor: { it: "Luogo in Altitudine", en: "High Place", ro: "Loc la Altitudine" } },
      { secret: { it: "Città", en: "City", ro: "Oraș" }, impostor: { it: "Centro Abitato", en: "Settlement", ro: "Așezare" } },
      { secret: { it: "Deserto", en: "Desert", ro: "Deșert" }, impostor: { it: "Zona Arida", en: "Dry Area", ro: "Zonă Aridă" } },
      { secret: { it: "Foresta", en: "Forest", ro: "Pădure" }, impostor: { it: "Zona con Alberi", en: "Wooded Area", ro: "Zonă cu Arbori" } },
      { secret: { it: "Museo", en: "Museum", ro: "Muzeu" }, impostor: { it: "Luogo Culturale", en: "Cultural Place", ro: "Loc Cultural" } },
      { secret: { it: "Cinema", en: "Cinema", ro: "Cinema" }, impostor: { it: "Luogo Spettacolo", en: "Entertainment Venue", ro: "Loc de Divertisment" } },
      { secret: { it: "Ristorante", en: "Restaurant", ro: "Restaurant" }, impostor: { it: "Locale Pubblico", en: "Public Venue", ro: "Local Public" } },
      { secret: { it: "Hotel", en: "Hotel", ro: "Hotel" }, impostor: { it: "Struttura Ricettiva", en: "Accommodation", ro: "Cazare" } },
      { secret: { it: "Ospedale", en: "Hospital", ro: "Spital" }, impostor: { it: "Struttura Sanitaria", en: "Healthcare Facility", ro: "Unitate Medicală" } },
      { secret: { it: "Scuola", en: "School", ro: "Școală" }, impostor: { it: "Istituto Educativo", en: "Educational Institution", ro: "Instituție Școlară" } },
      { secret: { it: "Biblioteca", en: "Library", ro: "Bibliotecă" }, impostor: { it: "Luogo per Leggere", en: "Reading Place", ro: "Loc de Citit" } },
      { secret: { it: "Palestra", en: "Gym", ro: "Sală de Sport" }, impostor: { it: "Luogo Sportivo", en: "Sports Facility", ro: "Loc Sportiv" } },
      { secret: { it: "Parco", en: "Park", ro: "Parc" }, impostor: { it: "Area Verde", en: "Green Area", ro: "Spațiu Verde" } },
      { secret: { it: "Stadio", en: "Stadium", ro: "Stadion" }, impostor: { it: "Impianto Sportivo", en: "Sports Complex", ro: "Complex Sportiv" } },
      { secret: { it: "Aeroporto", en: "Airport", ro: "Aeroport" }, impostor: { it: "Terminal Trasporti", en: "Transport Terminal", ro: "Terminal Transport" } },
      { secret: { it: "Porto", en: "Port", ro: "Port" }, impostor: { it: "Area Marittima", en: "Maritime Area", ro: "Zonă Maritimă" } },
      { secret: { it: "Chiesa", en: "Church", ro: "Biserică" }, impostor: { it: "Luogo di Culto", en: "Place of Worship", ro: "Loc de Cult" } },
      { secret: { it: "Castello", en: "Castle", ro: "Castel" }, impostor: { it: "Edificio Storico", en: "Historic Building", ro: "Clădire Istorică" } },
      { secret: { it: "Torre", en: "Tower", ro: "Turn" }, impostor: { it: "Struttura Alta", en: "Tall Structure", ro: "Structură Înaltă" } },
      { secret: { it: "Ponte", en: "Bridge", ro: "Pod" }, impostor: { it: "Struttura di Collegamento", en: "Connecting Structure", ro: "Structură de Legare" } },
      { secret: { it: "Piazza", en: "Square", ro: "Piață" }, impostor: { it: "Spazio Aperto", en: "Open Space", ro: "Spațiu Deschis" } },
      { secret: { it: "Mercato", en: "Market", ro: "Piață" }, impostor: { it: "Luogo Commerciale", en: "Commercial Place", ro: "Loc Comercial" } },
      { secret: { it: "Supermercato", en: "Supermarket", ro: "Supermarket" }, impostor: { it: "Negozio Alimentari", en: "Grocery Store", ro: "Magazin Alimentar" } },
      { secret: { it: "Bar", en: "Bar", ro: "Bar" }, impostor: { it: "Locale Bevande", en: "Drinks Place", ro: "Loc de Băuturi" } }
    ]
  },
  sports: {
    name: {
      it: "Sport",
      en: "Sports",
      ro: "Sporturi"
    },
    words: [
      { secret: { it: "Calcio", en: "Soccer", ro: "Fotbal" }, impostor: { it: "Sport di Squadra", en: "Team Sport", ro: "Sport de Echipă" } },
      { secret: { it: "Tennis", en: "Tennis", ro: "Tenis" }, impostor: { it: "Sport con Racchetta", en: "Racket Sport", ro: "Sport cu Rachetă" } },
      { secret: { it: "Pallavolo", en: "Volleyball", ro: "Volei" }, impostor: { it: "Sport con Rete", en: "Net Sport", ro: "Sport cu Filă" } },
      { secret: { it: "Nuoto", en: "Swimming", ro: "Înot" }, impostor: { it: "Sport Acquatico", en: "Water Sport", ro: "Sport Acvatic" } },
      { secret: { it: "Corsa", en: "Running", ro: "Alergare" }, impostor: { it: "Atletica", en: "Athletics", ro: "Atletism" } },
      { secret: { it: "Ciclismo", en: "Cycling", ro: "Ciclism" }, impostor: { it: "Sport su Ruote", en: "Wheeled Sport", ro: "Sport pe Roți" } },
      { secret: { it: "Boxe", en: "Boxing", ro: "Box" }, impostor: { it: "Sport da Combattimento", en: "Combat Sport", ro: "Sport de Luptă" } },
      { secret: { it: "Karate", en: "Karate", ro: "Karate" }, impostor: { it: "Arte Marziale", en: "Martial Art", ro: "Artă Marțială" } },
      { secret: { it: "Yoga", en: "Yoga", ro: "Yoga" }, impostor: { it: "Disciplina del Corpo", en: "Body Discipline", ro: "Disciplină Corp" } },
      { secret: { it: "Sci", en: "Skiing", ro: "Schi" }, impostor: { it: "Sport Invernale", en: "Winter Sport", ro: "Sport de Iarnă" } },
      { secret: { it: "Pattinaggio", en: "Skating", ro: "Patinaj" }, impostor: { it: "Sport sul Ghiaccio", en: "Ice Sport", ro: "Sport pe Gheață" } },
      { secret: { it: "Golf", en: "Golf", ro: "Golf" }, impostor: { it: "Sport con Mazze", en: "Club Sport", ro: "Sport cu Crose" } },
      { secret: { it: "Baseball", en: "Baseball", ro: "Baseball" }, impostor: { it: "Sport con Mazza e Palla", en: "Bat and Ball Sport", ro: "Sport cu Bată și Minge" } },
      { secret: { it: "Arrampicata", en: "Climbing", ro: "Escaladă" }, impostor: { it: "Sport Verticale", en: "Vertical Sport", ro: "Sport Vertical" } },
      { secret: { it: "Scherma", en: "Fencing", ro: "Scrimă" }, impostor: { it: "Sport con Spada", en: "Sword Sport", ro: "Sport cu Spadă" } },
      { secret: { it: "Atletica", en: "Athletics", ro: "Atletism" }, impostor: { it: "Sport su Pista", en: "Track Sport", ro: "Sport pe Pistă" } },
      { secret: { it: "Equitazione", en: "Horse Riding", ro: "Echitație" }, impostor: { it: "Sport con Animali", en: "Animal Sport", ro: "Sport cu Animale" } },
      { secret: { it: "Vela", en: "Sailing", ro: "Yachting" }, impostor: { it: "Sport Nautico", en: "Sailing Sport", ro: "Sport Nautic" } },
      { secret: { it: "Surf", en: "Surfing", ro: "Surf" }, impostor: { it: "Sport su Tavola", en: "Board Sport", ro: "Sport pe Placă" } },
      { secret: { it: "Skateboard", en: "Skateboarding", ro: "Skateboard" }, impostor: { it: "Sport Urbano", en: "Urban Sport", ro: "Sport Urban" } },
      { secret: { it: "Danza", en: "Dance", ro: "Dans" }, impostor: { it: "Attività Artistica", en: "Artistic Activity", ro: "Activitate Artistică" } },
      { secret: { it: "Salto in Alto", en: "High Jump", ro: "Săritură în Înălțime" }, impostor: { it: "Disciplina di Salto", en: "Jumping Event", ro: "Probă de Sărituri" } },
      { secret: { it: "Lancio del Peso", en: "Shot Put", ro: "Aruncarea Greutății" }, impostor: { it: "Disciplina di Lancio", en: "Throwing Event", ro: "Probă de Aruncari" } },
      { secret: { it: "Tiro con Arco", en: "Archery", ro: "Tir cu Arcul" }, impostor: { it: "Sport di Precisione", en: "Precision Sport", ro: "Sport de Precizie" } },
      { secret: { it: "Triathlon", en: "Triathlon", ro: "Triatlon" }, impostor: { it: "Sport Multiplo", en: "Multi Sport", ro: "Sport Multiplu" } }
    ]
  },
  professions: {
    name: {
      it: "Professioni",
      en: "Professions",
      ro: "Profesii"
    },
    words: [
      { secret: { it: "Medico", en: "Doctor", ro: "Medic" }, impostor: { it: "Professionista Sanitario", en: "Healthcare Professional", ro: "Profesionist Sanitar" } },
      { secret: { it: "Insegnante", en: "Teacher", ro: "Profesor" }, impostor: { it: "Educatore", en: "Educator", ro: "Educator" } },
      { secret: { it: "Avvocato", en: "Lawyer", ro: "Avocat" }, impostor: { it: "Professionista Legale", en: "Legal Professional", ro: "Profesionist Juridic" } },
      { secret: { it: "Cuoco", en: "Cook", ro: "Bucătar" }, impostor: { it: "Professionista Culinario", en: "Culinary Professional", ro: "Profesionist Culinar" } },
      { secret: { it: "Architetto", en: "Architect", ro: "Arhitect" }, impostor: { it: "Professionista Progettazione", en: "Design Professional", ro: "Profesionist Proiectare" } },
      { secret: { it: "Musicista", en: "Musician", ro: "Muzician" }, impostor: { it: "Professionista Artistico", en: "Performing Artist", ro: "Artist Performativ" } },
      { secret: { it: "Attore", en: "Actor", ro: "Actor" }, impostor: { it: "Professionista Spettacolo", en: "Entertainment Professional", ro: "Profesionist Spectacol" } },
      { secret: { it: "Scrittore", en: "Writer", ro: "Scriitor" }, impostor: { it: "Professionista della Scrittura", en: "Writing Professional", ro: "Profesionist Scriitor" } },
      { secret: { it: "Pittore", en: "Painter", ro: "Pictor" }, impostor: { it: "Artista Visivo", en: "Visual Artist", ro: "Artist Vizual" } },
      { secret: { it: "Fotografo", en: "Photographer", ro: "Fotograf" }, impostor: { it: "Professionista Visivo", en: "Visual Media Professional", ro: "Profesionist Media Vizual" } },
      { secret: { it: "Giornalista", en: "Journalist", ro: "Jurnalist" }, impostor: { it: "Professionista dell'Informazione", en: "Media Professional", ro: "Profesionist Media" } },
      { secret: { it: "Pompiere", en: "Firefighter", ro: "Pompier" }, impostor: { it: "Professionista Soccorso", en: "Emergency Professional", ro: "Profesionist Urgențe" } },
      { secret: { it: "Pilota", en: "Pilot", ro: "Pilot" }, impostor: { it: "Professionista Trasporti", en: "Transport Professional", ro: "Profesionist Transport" } },
      { secret: { it: "Meccanico", en: "Mechanic", ro: "Mecanic" }, impostor: { it: "Tecnico Riparazioni", en: "Repair Technician", ro: "Tehnician Reparații" } },
      { secret: { it: "Parrucchiere", en: "Hairdresser", ro: "Coafor" }, impostor: { it: "Professionista Estetica", en: "Beauty Professional", ro: "Profesionist Frumusețe" } },
      { secret: { it: "Cameriere", en: "Waiter", ro: "Chelner" }, impostor: { it: "Addetto Ristorazione", en: "Food Service Worker", ro: "Lucrător Restaurant" } },
      { secret: { it: "Dentista", en: "Dentist", ro: "Dentist" }, impostor: { it: "Specialista Dentale", en: "Dental Specialist", ro: "Specialist Dentar" } },
      { secret: { it: "Veterinario", en: "Veterinarian", ro: "Veterinar" }, impostor: { it: "Professionista Animali", en: "Animal Professional", ro: "Profesionist Animale" } },
      { secret: { it: "Farmacista", en: "Pharmacist", ro: "Farmacist" }, impostor: { it: "Professionista Farmaceutico", en: "Pharmaceutical Professional", ro: "Profesionist Farmaceutic" } },
      { secret: { it: "Psicologo", en: "Psychologist", ro: "Psiholog" }, impostor: { it: "Professionista della Mente", en: "Mental Health Professional", ro: "Profesionist Sănătate Mintală" } },
      { secret: { it: "Contabile", en: "Accountant", ro: "Contabil" }, impostor: { it: "Professionista Finanziario", en: "Financial Professional", ro: "Profesionist Financiar" } },
      { secret: { it: "Bibliotecario", en: "Librarian", ro: "Bibliotecar" }, impostor: { it: "Addetto Documenti", en: "Information Specialist", ro: "Specialist Informații" } },
      { secret: { it: "Giardiniere", en: "Gardener", ro: "Grădinar" }, impostor: { it: "Professionista Verde", en: "Green Professional", ro: "Profesionist Plăntații" } },
      { secret: { it: "Sarto", en: "Tailor", ro: "Croitor" }, impostor: { it: "Professionista Abbigliamento", en: "Fashion Professional", ro: "Profesionist Modă" } },
      { secret: { it: "Panettiere", en: "Baker", ro: "Brutar" }, impostor: { it: "Professionista Fornaio", en: "Baking Professional", ro: "Profesionist Brutărie" } }
    ]
  },
  objects: {
    name: {
      it: "Oggetti",
      en: "Objects",
      ro: "Obiecte"
    },
    words: [
      { secret: { it: "Telefono", en: "Phone", ro: "Telefon" }, impostor: { it: "Dispositivo Elettronico", en: "Electronic Device", ro: "Dispozitiv Electronic" } },
      { secret: { it: "Computer", en: "Computer", ro: "Calculator" }, impostor: { it: "Dispositivo Informatico", en: "Computing Device", ro: "Dispozitiv Informatic" } },
      { secret: { it: "Libro", en: "Book", ro: "Carte" }, impostor: { it: "Materiale di Lettura", en: "Reading Material", ro: "Material de Citit" } },
      { secret: { it: "Penna", en: "Pen", ro: "Pix" }, impostor: { it: "Strumento di Scrittura", en: "Writing Tool", ro: "Instrument de Scris" } },
      { secret: { it: "Orologio", en: "Watch", ro: "Ceas" }, impostor: { it: "Strumento per il Tempo", en: "Time Device", ro: "Dispozitiv Timp" } },
      { secret: { it: "Occhiali", en: "Glasses", ro: "Ochelari" }, impostor: { it: "Accessorio Visivo", en: "Vision Accessory", ro: "Accesoriu Vedere" } },
      { secret: { it: "Borsa", en: "Bag", ro: "Geantă" }, impostor: { it: "Contenitore Portatile", en: "Portable Container", ro: "Container Portabil" } },
      { secret: { it: "Scarpe", en: "Shoes", ro: "Pantofi" }, impostor: { it: "Calzatura", en: "Footwear", ro: "Incălțăminte" } },
      { secret: { it: "Cappello", en: "Hat", ro: "Pălărie" }, impostor: { it: "Copricapo", en: "Headwear", ro: "Acoperită Cap" } },
      { secret: { it: "Ombrello", en: "Umbrella", ro: "Umbrelă" }, impostor: { it: "Protezione dalla Pioggia", en: "Rain Protection", ro: "Protecție Ploaie" } },
      { secret: { it: "Chiavi", en: "Keys", ro: "Chei" }, impostor: { it: "Oggetto di Sicurezza", en: "Security Item", ro: "Obiect de Securitate" } },
      { secret: { it: "Portafoglio", en: "Wallet", ro: "Portofel" }, impostor: { it: "Accessorio per Soldi", en: "Money Holder", ro: "Obiect pentru Bani" } },
      { secret: { it: "Cuscino", en: "Pillow", ro: "Pernă" }, impostor: { it: "Tessile per Letto", en: "Bedding Item", ro: "Articol de Pat" } },
      { secret: { it: "Lampada", en: "Lamp", ro: "Lampă" }, impostor: { it: "Fonte di Luce", en: "Light Source", ro: "Sursă de Lumină" } },
      { secret: { it: "Specchio", en: "Mirror", ro: "Oglindă" }, impostor: { it: "Oggetto Riflettente", en: "Reflective Object", ro: "Obiect Reflectorizant" } },
      { secret: { it: "Sedia", en: "Chair", ro: "Scaun" }, impostor: { it: "Mobile per Sedersi", en: "Seating Furniture", ro: "Mobilier Scaun" } },
      { secret: { it: "Tavolo", en: "Table", ro: "Masă" }, impostor: { it: "Mobile con Superficie", en: "Surface Furniture", ro: "Mobilier cu Suprafață" } },
      { secret: { it: "Letto", en: "Bed", ro: "Pat" }, impostor: { it: "Mobile per Riposare", en: "Resting Furniture", ro: "Mobilier de Odihnă" } },
      { secret: { it: "Armadio", en: "Wardrobe", ro: "Dulap" }, impostor: { it: "Mobile Contenitore", en: "Storage Furniture", ro: "Mobilier Depozitare" } },
      { secret: { it: "Frigorifero", en: "Refrigerator", ro: "Frigider" }, impostor: { it: "Elettrodomestico per Conservare", en: "Food Storage Appliance", ro: "Aparat Depozitare Alimente" } },
      { secret: { it: "Forno", en: "Oven", ro: "Cuptor" }, impostor: { it: "Elettrodomestico per Cucinare", en: "Cooking Appliance", ro: "Aparat de Gătit" } },
      { secret: { it: "Televisore", en: "Television", ro: "Televizor" }, impostor: { it: "Schermo", en: "Screen", ro: "Ecran" } },
      { secret: { it: "Quadro", en: "Painting", ro: "Tablou" }, impostor: { it: "Decorazione da Parete", en: "Wall Decoration", ro: "Decorațiune Perete" } },
      { secret: { it: "Vaso", en: "Vase", ro: "Vază" }, impostor: { it: "Contenitore", en: "Container", ro: "Container" } },
      { secret: { it: "Profumo", en: "Perfume", ro: "Parfum" }, impostor: { it: "Prodotto Profumato", en: "Fragrance Product", ro: "Produs Parfumat" } }
    ]
  },
  emotions: {
    name: {
      it: "Emozioni",
      en: "Emotions",
      ro: "Emoții"
    },
    words: [
      { secret: { it: "Felicità", en: "Happiness", ro: "Fericire" }, impostor: { it: "Emozione Positiva", en: "Positive Emotion", ro: "Emoție Pozitivă" } },
      { secret: { it: "Tristezza", en: "Sadness", ro: "Tristețe" }, impostor: { it: "Emozione Negativa", en: "Negative Emotion", ro: "Emoție Negativă" } },
      { secret: { it: "Rabbia", en: "Anger", ro: "Furie" }, impostor: { it: "Emozione Forte", en: "Strong Emotion", ro: "Emoție Puternică" } },
      { secret: { it: "Paura", en: "Fear", ro: "Frică" }, impostor: { it: "Sensazione Spiacevole", en: "Unpleasant Feeling", ro: "Senzație Neplăcută" } },
      { secret: { it: "Sorpresa", en: "Surprise", ro: "Surpriză" }, impostor: { it: "Reazione Inaspettata", en: "Unexpected Reaction", ro: "Reacție Neașteptată" } },
      { secret: { it: "Amore", en: "Love", ro: "Iubire" }, impostor: { it: "Sentimento Affettivo", en: "Affectionate Feeling", ro: "Sentiment Afectuos" } },
      { secret: { it: "Disgusto", en: "Disgust", ro: "Dezgust" }, impostor: { it: "Rifiuto Emotivo", en: "Emotional Rejection", ro: "Respingere Emoțională" } },
      { secret: { it: "Ansia", en: "Anxiety", ro: "Anxietate" }, impostor: { it: "Stato di Tensione", en: "Tense State", ro: "Stare de Tensiune" } },
      { secret: { it: "Calma", en: "Calm", ro: "Calm" }, impostor: { it: "Stato Tranquillo", en: "Peaceful State", ro: "Stare Liniștită" } },
      { secret: { it: "Eccitazione", en: "Excitement", ro: "Agitație" }, impostor: { it: "Stato Energetico", en: "Energetic State", ro: "Stare Energică" } },
      { secret: { it: "Noia", en: "Boredom", ro: "Plictiseală" }, impostor: { it: "Mancanza di Stimolo", en: "Lack of Interest", ro: "Lipsă de Interes" } },
      { secret: { it: "Vergogna", en: "Shame", ro: "Rușine" }, impostor: { it: "Disagio Sociale", en: "Social Discomfort", ro: "Disconfort Social" } },
      { secret: { it: "Orgoglio", en: "Pride", ro: "Mândrie" }, impostor: { it: "Sentimento di Sé", en: "Self Feeling", ro: "Sentiment de Sine" } },
      { secret: { it: "Gelosia", en: "Jealousy", ro: "Gelozie" }, impostor: { it: "Sentimento Possessivo", en: "Possessive Feeling", ro: "Sentiment Posesiv" } },
      { secret: { it: "Speranza", en: "Hope", ro: "Speranță" }, impostor: { it: "Sentimento Futuro", en: "Forward Feeling", ro: "Sentiment de Viitor" } },
      { secret: { it: "Disperazione", en: "Despair", ro: "Disperare" }, impostor: { it: "Sentimento Oscuro", en: "Dark Feeling", ro: "Sentiment Întunecat" } },
      { secret: { it: "Gratitudine", en: "Gratitude", ro: "Recunoștință" }, impostor: { it: "Sentimento di Apprezzamento", en: "Appreciative Feeling", ro: "Sentiment de Apreciere" } },
      { secret: { it: "Colpa", en: "Guilt", ro: "Vinovăție" }, impostor: { it: "Sentimento di Responsabilità", en: "Responsible Feeling", ro: "Sentiment de Răspundere" } },
      { secret: { it: "Nostalgia", en: "Nostalgia", ro: "Nostalgie" }, impostor: { it: "Sentimento del Passato", en: "Past Feeling", ro: "Sentiment de Trecut" } },
      { secret: { it: "Sollievo", en: "Relief", ro: "Ușurare" }, impostor: { it: "Sensazione Liberatoria", en: "Relieving Sensation", ro: "Senzație Eliberatoare" } },
      { secret: { it: "Frustrazione", en: "Frustration", ro: "Frustrare" }, impostor: { it: "Sentimento di Ostacolo", en: "Blocked Feeling", ro: "Sentiment de Obstacol" } },
      { secret: { it: "Curiosità", en: "Curiosity", ro: "Curiozitate" }, impostor: { it: "Desiderio di Scoperta", en: "Discovery Desire", ro: "Dorință de Descoperire" } },
      { secret: { it: "Confusione", en: "Confusion", ro: "Confuzie" }, impostor: { it: "Stato di Incertezza", en: "Uncertain State", ro: "Stare de Nesiguranță" } },
      { secret: { it: "Soddisfazione", en: "Satisfaction", ro: "Satisfacție" }, impostor: { it: "Sentimento di Compimento", en: "Fulfillment Feeling", ro: "Sentiment de Împlinire" } },
      { secret: { it: "Compassione", en: "Compassion", ro: "Compasiune" }, impostor: { it: "Sentimento Empatico", en: "Empathetic Feeling", ro: "Sentiment Empatic" } }
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
