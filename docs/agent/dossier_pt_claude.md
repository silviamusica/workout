# Dossier Completo Per Agente PT

Questo file serve come riferimento unico per un agente PT esterno, per esempio Claude.

Obiettivo:
- capire cosa fa davvero l'app oggi
- leggere in modo coerente programmi, logiche tutor, calibrazione e dati
- evitare suggerimenti incoerenti rispetto al comportamento reale dell'app

File applicativo principale:
- `../../src/App.jsx`

File dati programma:
- `./workout_plan_v4.csv`
- `./workout_plan_beginner.csv`
- `./workout_plan_basics.csv`

File descrittivi:
- `./logica_tutor_pt.md`
- `./esercizi_varianti_obiettivi_guided.md`
- `./programma_avanzato_v4.md`
- `./tecniche_preliminari.md`

## 1. Livelli presenti nell'app

L'app oggi gestisce 3 livelli:

1. `Tecniche preliminari`
- livello pre-principiante
- centrato su competenze base e controllo tecnico
- niente progressi
- niente calibrazione
- niente andamento carichi

2. `Principiante`
- full body su 3 giorni
- costruzione basi muscolari e motorie
- teoria semplificata

3. `Ipertrofia avanzato`
- programma V4
- lower / upper / cardio / tecnica più ricco
- è il livello con la logica tutor più completa

## 2. Cosa deve leggere prima l'agente PT

Ordine consigliato:

1. `logica_tutor_pt.md`
- spiega coaching, calibrazione, guided mode, RIR, recuperi, decisioni finali

2. `esercizi_varianti_obiettivi_guided.md`
- serve per controllare pattern, varianti, regressioni, obiettivi tecnici e lettura coerente della guided mode

3. `workout_plan_v4.csv`
- è la fonte scheda più importante se il controllo riguarda la modalità avanzata

4. `workout_plan_beginner.csv`
- serve per verificare coerenza del livello principiante

5. `workout_plan_basics.csv`
- serve per verificare il livello tecniche preliminari

6. `programma_avanzato_v4.md`
- contesto teorico e logica del V4

7. `tecniche_preliminari.md`
- vincoli e logica del livello preliminare

## 2.bis. File nuovo per il controllo esercizi

Se il controllo del PT riguarda:
- correttezza delle varianti
- obiettivo delle regressioni
- sostituzioni per attrezzatura
- priorita tecnica dei fondamentali
- coerenza del briefing guidato

il file di riferimento principale non deve essere solo il CSV.

In quel caso il file da leggere subito e:
- `esercizi_varianti_obiettivi_guided.md`

Perche:
- il CSV descrive la scheda
- ma non esplicita bene la differenza tra variante, regressione e alternativa
- e non basta da solo per controllare la guided mode

## 3. Logiche tutor presenti oggi

Le logiche tutor da conoscere sono 2:

### A. Calibrazione

Serve a trovare o ricalibrare un riferimento iniziale di lavoro.

Caratteristiche attuali:
- si attiva manualmente
- compare solo sugli esercizi che ne hanno davvero bisogno
- non appare sugli esercizi già con riferimento valido e recente
- scatta se:
  - manca uno storico utile
  - manca un profilo di calibrazione
  - l'ultima calibrazione è vecchia oltre 14 giorni
  - oppure l'ultima registrazione dell'esercizio è vecchia oltre 14 giorni

Nella scheda:
- il blocco/pulsante di calibrazione appare solo se quell'esercizio è da calibrare
- non compare più il pannello tipo `punto zero salvato` sugli esercizi già sistemati

### B. Modalità guidata

Serve a guidare la sessione anche fuori dalla calibrazione.

Stato attuale:
- è spenta di default
- si può attivare o spegnere in `Impostazioni`
- se un backup vecchio non contiene il flag, l'app la considera spenta

Fa queste cose:
- briefing pre-sessione
- richiesta RIR dopo le serie
- recupero guidato
- feedback immediato se sei sotto il minimo
- decisione finale a fine esercizio
- storico RIR

## 4. Impostazioni importanti da conoscere

### Modalità guidata

In `Impostazioni` c'è un toggle dedicato.

Comportamento:
- `ON` = briefing, RIR, recuperi guidati, decisioni finali
- `OFF` = scheda più semplice, senza tutor attivo

### Info aggiuntive esercizi

Esiste un secondo toggle:
- `Info aggiuntive esercizi`

Serve per alleggerire la scheda.

Se è `OFF`, l'app nasconde:
- respirazione
- guida completa
- tecnica estesa
- errori
- storico tecnico esteso

Se è `ON`, riappare tutta la parte estesa.

Questo toggle non spegne il tutor:
- lascia visibili le parti fondamentali
- serie
- ripetizioni
- recupero
- registrazione
- feedback tutor
- storico essenziale utile

## 5. Comportamento attuale della calibrazione

### Quando la si vede

La si vede solo se l'esercizio è:
- senza riferimento
- oppure da ricalibrare

### Flusso

Nella riga serie, in calibrazione, si inseriscono solo:
- `kg` o `tacca elastico`
- `ripetizioni`

Sulla prima serie test non si inserisce lì il `RIR`.

Dopo la spunta:
- si apre il modale di calibrazione
- chiede:
  - quante erano davvero le ripetizioni pulite
  - quante ripetizioni pulite restavano (`RIR / riserva`)
  - se il test era `Troppo pesante`, `Giusta` o `Troppo facile`

Nota:
- dalla seconda serie in poi il `RIR` può essere inserito direttamente nella riga

### Regole importanti

- la serie viene salvata comunque
- se è sotto il minimo del range, non diventa un riferimento valido
- se è troppo sopra il range, non viene accettata come `ok`
- esempio:
  - range `6-8`
  - se segni `12`
  - l'app deve considerarlo troppo facile e suggerire aumento del carico o della difficoltà

### Timer e recupero

Il timer oggi:
- è manuale
- non deve bloccare la registrazione
- può essere bloccato con il lucchetto per restare aperto e non essere sovrascritto

## 6. Comportamento attuale della modalità guidata

### Briefing pre-sessione

Mostra:
- tutti gli obiettivi del giorno
- un suggerimento per ogni esercizio

Stati gestiti:
- nessun dato
- sessione non uniforme
- aumenta carico
- resta così e prova 1 rip in più
- consolida
- chiuse ma troppo tirate

### Prompt RIR

Fuori dalla calibrazione:
- se salvi una serie senza RIR già inserito
- l'app chiede quante ripetizioni pulite sarebbero rimaste

Bottoni:
- `0`
- `1`
- `2`
- `3`
- `4+`

Dalla seconda serie:
- compare `= serie precedente`

Prime volte:
- compare un hint breve

### Recupero guidato

Usa 3 categorie:
- compound pesante
- accessorio composto
- monoarticolare

Tempi attuali:
- `RIR 0` → `150s / 90s / 60s`
- `RIR 1` → `120s / 75s / 60s`
- `RIR 2` → `90s / 60s / 45s`
- `RIR 3+` → `75s / 45s / 30s`

Questa versione e piu corta della prima:
- assume lavoro normale a `RIR 1-2`
- non e costruita su cedimento sistematico
- e pensata per un recupero pratico e piu rapido

Nota importante:
- lo `Stacco Rumeno` è trattato come esercizio heavy nei casi di RIR estremi
- ma a `RIR 2` cade comunque su `90s`, quindi non viene allungato inutilmente

### Decisione finale

Casi importanti gestiti:
- top del range chiuso con margine → aumenta
- top chiuso ma RIR medio troppo basso → consolida ancora
- tutte nel range ma non al top → prova a fare più rip
- pattern tipo `8-8-7-6` → fatica normale, peso calibrato bene
- sotto il minimo → consolida o scala

### Feedback sotto il minimo

Se sei molto sotto il minimo, l'app non si limita a dire "non va bene".

Suggerisce anche di quanto scalare:
- bilanciere: `-2.5 kg`
- manubri: `-1 kg per manubrio`
- cavo: `-1 step`
- elastico: più assistenza
- corpo libero: variante più facile

## 7. Regole speciali da non dimenticare

### Bodyweight e assistiti

L'app non deve parlare di `peso` dove non ha senso.

Esempi:
- `Nordic Curl`
- `Push-Up`
- `Fitball Hamstring Curl`
- `Ab Wheel`

In questi casi deve parlare di:
- variante
- assistenza
- difficoltà
- riferimento

### Soglie bodyweight già codificate

- `Push-Up`: se fai almeno 15 rip in tutte le serie per 2 sessioni consecutive → variante più difficile
- `Trazioni` e `Trazioni Supine`: se fai almeno 8 rip in tutte le serie per 2 sessioni consecutive → zavorra `+1.25 kg`
- `Dip alle Parallele`: se fai almeno 10 rip in tutte le serie per 2 sessioni consecutive → zavorra `+1.25 kg`

### Incrementi extra già previsti

- `Hyperextension con Sacco` → `+1 kg nel sacco`
- `Fitball Hamstring Curl` → `+1 rip per serie`

## 8. Dati salvati dall'app

Nel backup JSON l'app salva:
- `logs`
- `cardioLogs`
- `calibrationProfiles`
- `calibrationMode`
- `guidedMode`

L'app esporta:
- JSON completo
- CSV leggibile

Esiste anche:
- `Esporta solo JSON`

## 9. Cosa deve verificare un agente PT

Quando controlla l'app, l'agente dovrebbe verificare:

### Programmi
- coerenza del CSV V4 con la UI
- coerenza del Beginner con la UI
- coerenza del Basics con la UI

### Tutor
- se i suggerimenti rispettano davvero range, RIR e recuperi
- se la progressione proposta è coerente con double progression
- se la calibrazione non promuove come valido un set troppo facile o troppo duro

### UX
- se la modalità guidata è chiara ma non invasiva
- se il toggle `Info aggiuntive` riduce davvero il rumore
- se l'utente capisce subito quando un esercizio ha bisogno di calibrazione

## 10. File consigliati da aggiornare insieme

Se si modifica la logica tutor o i programmi, i file da mantenere coerenti sono:
- `../../src/App.jsx`
- `./logica_tutor_pt.md`
- `./workout_plan_v4.csv`
- `./workout_plan_beginner.csv`
- `./workout_plan_basics.csv`

Se si modifica il livello preliminare:
- `./tecniche_preliminari.md`

Se si modifica il programma avanzato:
- `./programma_avanzato_v4.md`

## 11. Sintesi finale per Claude/PT

Se vuoi dare un'istruzione secca al tuo agente PT, la sintesi è questa:

- l'app ha 3 livelli: basics, beginner, advanced
- la logica coaching vera è soprattutto nella modalità avanzata
- oggi la modalità guidata è spenta di default
- la calibrazione compare solo se manca un riferimento o è scaduto
- esiste anche una modalità per nascondere le info non essenziali
- il riferimento tecnico principale resta `src/App.jsx`
- i documenti in `docs/agent` sono il contesto minimo da leggere prima di dare suggerimenti
