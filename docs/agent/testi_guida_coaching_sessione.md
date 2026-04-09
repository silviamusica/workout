# Testi Guida Coaching Sessione

Questo file definisce le regole per controllare e migliorare i testi mostrati durante le sessioni nell'app workout-tracker.

## File di riferimento

File applicativo:
- `../../src/App.jsx`

Testi coaching pesi gia prodotti:
- `/Users/silvia/Downloads/testi-coaching-sessione-v4.md`
- `../../testi-coaching-sessione-v4-ui-ready.md`

Schede stretching gia prodotte:
- `/Users/silvia/Downloads/schede-stretching-v4.md`

Guida agente aggiornata:
- `/Users/silvia/Downloads/testi_guida_coaching_sessione.md`

## Due contesti, due strutture

Non usare la stessa struttura per tutto.

Gli esercizi di lavoro e lo stretching hanno esigenze diverse:
- durante squat, panca, trazioni, rematori e accessori serve coaching rapido
- durante lo stretching serve una scheda piu completa, perche molti esercizi sono nuovi

## Coaching esercizi di lavoro

Esempi:
- squat
- panca
- trazioni
- military press
- t-bar row
- hip thrust
- curl
- tricipiti
- esercizi di forza/ipertrofia della scheda

Obiettivo:
- orientare la seduta
- ricordare la priorita tecnica del giorno
- indicare l'errore principale da evitare
- non insegnare da zero l'esercizio

### Struttura obbligatoria: 3 campi

#### 1. Perche e qui oggi

1-2 frasi.

Deve spiegare il ruolo dell'esercizio in quella seduta specifica.

Non deve ripetere il nome dell'esercizio o una descrizione generica.

Esempio di direzione corretta:
```text
Perche e qui oggi: E il lavoro principale di spinta della seduta: oggi serve accumulare ripetizioni pulite senza trasformare la panca in una lotta.
```

#### 2. Focus

1 frase.

Deve dire su cosa concentrarsi in questa sessione.

Deve essere orientato all'azione: cosa controllare, cosa sentire, cosa mantenere.

Esempio:
```text
Focus: Mantieni scapole stabili, piedi attivi e traiettoria ripetibile in ogni serie.
```

#### 3. Attenzione

1 frase.

Deve indicare l'errore piu importante da evitare oggi.

Esempio:
```text
Attenzione: Non inseguire il peso se perdi compattezza o rimbalzi sul petto.
```

### Cosa NON mettere nel coaching pesi

Non includere:
- serie
- ripetizioni
- recuperi
- RPE/RIR se sono gia nella UI
- setup tecnico completo
- spiegazioni biomeccaniche lunghe
- campo separato `Come farlo`
- campo separato `Respirazione`
- campo separato `Dove sentirlo`, salvo sia un cue essenziale integrato nel focus

Motivo:
- setup/tecnica sono gia nella nota dell'esercizio/CSV
- respirazione e gia in una colonna dedicata del programma
- il coaching deve essere letto in circa 5 secondi

## Schede stretching

Esempi:
- Half Kneeling Lunge
- Figure-Four Supino
- Happy Baby
- Couch Stretch
- Leg Cradle Supino
- Doorway Pec Stretch
- Overhead Lat Stretch
- Band Dislocate Lento

Obiettivo:
- insegnare la posizione
- far capire cosa cercare
- evitare compensi
- collegare lo stretch al giorno di allenamento

### Struttura obbligatoria: 6 campi

#### 1. Obiettivo

1 frase.

Perche lo fai e cosa deve migliorare.

#### 2. Esecuzione

2-3 frasi.

Posizione iniziale, movimento, appoggi e orientamento del bacino/torace/spalle quando rilevante.

Usa cue concreti.

#### 3. Focus

1 frase.

Su cosa concentrarsi durante la tenuta.

#### 4. Errori da evitare

2-3 errori concreti.

Devono essere errori che cambiano davvero efficacia o sicurezza.

#### 5. Dove sentirlo

1 frase.

Segnale di esecuzione corretta.

Se il segnale e sbagliato, indica anche la correzione.

#### 6. Perche in questo giorno

1 frase.

Collega lo stretch al lavoro appena fatto o al giorno in cui compare.

### Cosa NON mettere nello stretching

Non includere:
- durata e serie se sono gia nella UI
- teoria lunga sulle catene muscolari
- motivazione generica
- descrizioni da enciclopedia

## Regole comuni

### Lunghezza

Un testo e troppo lungo se:
- richiede scroll solo per capire il messaggio centrale
- supera 3 blocchi brevi per gli esercizi di lavoro
- supera 6 blocchi brevi per lo stretching
- obbliga a leggere teoria durante l'allenamento

Target:
- esercizi di lavoro: lettura in circa 5 secondi
- stretching: lettura in circa 10-15 secondi

### Tono

Usa un tono:
- pratico
- diretto
- da coach in sala
- concreto
- non colpevolizzante
- non motivazionale generico
- non medico, salvo indicazioni gia concordate

Evita:
- `ottimo esercizio per...`
- `devi assolutamente...`
- `non fare mai...`
- paragrafi teorici lunghi
- spiegazioni che non cambiano l'esecuzione immediata

### Non ripetizione

Prima di approvare un testo, controlla che non ripeta informazioni gia presenti in:
- titolo della card
- riga serie/ripetizioni/carico/recupero
- nota tecnica dell'esercizio
- nota setup/CSV
- colonna respirazione/CSV
- tabella del giorno
- timer

Se una cosa e gia visibile nella UI, non riscriverla nel coaching.

## Checklist per l'agente PT

Per ogni testo da controllare:

- [ ] Ho identificato se e coaching pesi o scheda stretching?
- [ ] Ho usato la struttura giusta: 3 campi per pesi, 6 campi per stretching?
- [ ] E specifico per il giorno e la posizione nella seduta?
- [ ] Non ripete numeri o istruzioni gia presenti nella UI?
- [ ] Il focus e azionabile subito?
- [ ] L'attenzione/errore e davvero prioritario?
- [ ] Il testo e leggibile rapidamente da telefono?
- [ ] Il tono e pratico da coach, non teorico?
- [ ] Ho confrontato con i testi gia prodotti e approvati?

## Compito dell'agente quando riceve testi da migliorare

1. Capire il contesto: pesi o stretching.
2. Leggere il testo attuale.
3. Confrontare con i file gia prodotti.
4. Segnalare i problemi concreti: lungo, ripetitivo, generico, teorico, non contestuale.
5. Riscrivere usando la struttura corretta.
6. Eliminare duplicazioni con UI, CSV, timer e card compatta.
7. Restituire una versione pronta da inserire in app.

## Prompt pronto per coaching pesi

```text
Ti passo testi coaching per gli esercizi di lavoro della mia app workout-tracker.

Devi controllarli e migliorarli.

Usa sempre questa struttura a 3 campi:
1. Perche e qui oggi
2. Focus
3. Attenzione

Obiettivo:
- farmi capire il ruolo dell'esercizio in quella seduta
- dirmi su cosa concentrarmi ora
- indicare l'errore principale da evitare

Non includere:
- serie
- ripetizioni
- recuperi
- RPE/RIR se gia visibili
- tutorial completo di esecuzione
- campo "Come farlo"
- campo "Respirazione"
- spiegazioni biomeccaniche lunghe

Stile:
- breve
- pratico
- leggibile in circa 5 secondi
- specifico per quel giorno e per quella posizione nella seduta

Prima di riscrivere, dimmi in una riga cosa non funziona nel testo attuale.
Poi dammi la versione migliorata pronta per la UI.
```

## Prompt pronto per schede stretching

```text
Ti passo schede stretching della mia app workout-tracker.

Devi controllarle e migliorarle.

Usa sempre questa struttura a 6 campi:
1. Obiettivo
2. Esecuzione
3. Focus
4. Errori da evitare
5. Dove sentirlo
6. Perche in questo giorno

Obiettivo:
- farmi capire a cosa serve lo stretch
- insegnarmi come mettermi
- dirmi cosa cercare
- farmi evitare i compensi piu importanti
- collegarlo al giorno della scheda in cui compare

Non includere:
- durata
- serie
- teoria lunga
- motivazione generica

Stile:
- pratico
- sintetico
- da coach
- leggibile da telefono

Prima di riscrivere, dimmi in una riga cosa non funziona nel testo attuale.
Poi dammi la versione migliorata pronta per la UI.
```

## Template revisione coaching pesi

```text
Esercizio:
Giorno:
Posizione nella seduta:
Testo attuale:

Problema principale:

Versione migliorata:
Perche e qui oggi:
Focus:
Attenzione:
```

## Template revisione stretching

```text
Stretch:
Giorno:
Testo attuale:

Problema principale:

Versione migliorata:
Obiettivo:
Esecuzione:
Focus:
Errori da evitare:
Dove sentirlo:
Perche in questo giorno:
```

## File da tenere allineati

Se si modificano i testi o il loro formato, controllare:
- `../../src/App.jsx`
- `/Users/silvia/Downloads/testi-coaching-sessione-v4.md`
- `/Users/silvia/Downloads/schede-stretching-v4.md`
- `../../testi-coaching-sessione-v4-ui-ready.md`
- `./esercizi_varianti_obiettivi_guided.md`
- `./workout_plan_v4.csv`
