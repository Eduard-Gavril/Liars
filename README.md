# 🎭 LIARS - Gioco di Deduzione Sociale

Un gioco di deduzione sociale per 3-12 giocatori, ottimizzato per smartphone.

## 🌍 Multilingua

Il gioco è disponibile in **3 lingue**:
- 🇮🇹 **Italiano**
- 🇬🇧 **English**
- 🇷🇴 **Română**

La lingua può essere cambiata in qualsiasi momento tramite il selettore nella home page. La scelta viene salvata automaticamente nel browser.

## 📖 Come Funziona

**LIARS** è un gioco dove i giocatori devono trovare l'impostore analizzando gli indizi che ognuno dà sulla propria parola segreta.

### Ruoli

- **👥 Civili**: Ricevono tutti la stessa parola segreta
- **🎭 Impostore**: Riceve una parola simile (o diversa)

### Gameplay

1. **Setup**: Inserisci i nomi dei giocatori e scegli una categoria
2. **Distribuzione**: Ogni giocatore vede la propria parola in privato
3. **Indizi**: A turno, ogni giocatore dà un indizio sulla propria parola
4. **Deduzione**: Analizza gli indizi per trovare chi finge
5. **Votazione**: Tutti votano chi pensano sia l'impostore
6. **Risultato**: Se l'impostore viene trovato, vincono i civili!

## 🎯 Strategie

### Per i Civili
- ✅ Dai indizi coerenti ma non troppo ovvi
- ✅ Osserva chi dà indizi vaghi o generici
- ✅ Nota chi cerca di adattarsi agli altri
- ❌ Non essere troppo esplicito (potresti aiutare l'impostore!)

### Per l'Impostore
- 🎭 Ascolta attentamente gli indizi degli altri
- 🎭 Cerca pattern comuni negli indizi
- 🎭 Dai indizi vaghi ma plausibili
- 🎭 Non contraddire gli altri giocatori

## 🚀 Avvio del Gioco

### Requisiti
- Node.js (versione 16 o superiore)
- Browser moderno

### Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il gioco sarà disponibile su `http://localhost:3000`

### Build per Produzione

```bash
npm run build
```

I file ottimizzati saranno nella cartella `dist/`.

## 📱 Utilizzo su Smartphone

Il gioco è ottimizzato per dispositivi mobile. Puoi:

1. **Locale**: Accedere da `http://[tuo-ip]:3000` sulla stessa rete WiFi
2. **Deploy**: Fare il deploy su Netlify, Vercel, o qualsiasi hosting statico

## 🎨 Categorie Disponibili

- 🐾 **Animali**: Cane vs Gatto, Leone vs Tigre...
- 🍕 **Cibo e Bevande**: Pizza vs Focaccia, Caffè vs Tè...
- 🏖️ **Luoghi**: Spiaggia vs Mare, Montagna vs Collina...
- ⚽ **Sport e Attività**: Calcio vs Rugby, Tennis vs Ping Pong...
- 👨‍⚕️ **Professioni**: Medico vs Infermiere, Cuoco vs Chef...
- 📱 **Oggetti**: Telefono vs Tablet, Auto vs Moto...
- 😊 **Emozioni**: Felicità vs Gioia, Paura vs Ansia...

## 🛠️ Tecnologie Utilizzate

- **React 18**: Framework UI
- **Vite**: Build tool veloce
- **CSS Variables**: Tema personalizzabile
- **Design Mobile-First**: Ottimizzato per touch

## 📋 Funzionalità

- ✅ Gioco completamente locale (no backend necessario)
- ✅ 3-12 giocatori supportati
- ✅ **Multilingua: Italiano, Inglese, Rumeno**
- ✅ 7 categorie di parole con 10 coppie ciascuna
- ✅ Assegnazione casuale dell'impostore
- ✅ Sistema di turni intuitivo
- ✅ Votazione democratica
- ✅ Recap completo a fine partita
- ✅ Design dark mode
- ✅ Animazioni fluide
- ✅ Touch-friendly
- ✅ Salvataggio automatico lingua preferita

## 🔮 Prossime Funzionalità (Roadmap)

### Versione Multiplayer con Supabase
- 🔄 Creazione stanze con codice
- 🔄 Sincronizzazione real-time
- 🔄 Chat in-game
- 🔄 Sistema di punteggio
- 🔄 Timer per i turni
- 🔄 2 impostori (modalità difficile)
- 🔄 Categoria custom (aggiungi le tue parole)

## 🎮 Consigli per Giocare

- **Numero ideale**: 4-6 giocatori
- **Tempo medio partita**: 10-15 minuti
- **Round consigliati**: 2-3 prima della votazione
- **Ambiente**: Silenzioso, per concentrarsi sugli indizi

## 📝 Licenza

Progetto personale - Uso libero

## 🤝 Contributi

Pull request benvenute! Per modifiche importanti, apri prima un issue.

---

Creato con ❤️ per serate divertenti tra amici!
