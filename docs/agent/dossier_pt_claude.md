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
- lower / upper / leggero / cardio / riposo
- è il livello con la logica tutor più completa
- struttura settimana: G1 Lower A · G2 Upper A · G3 Leggero · Cardio giovedì · G4 Lower B · G5 Upper B · Riposo

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
- è `ON` di default
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

Per il comportamento dettagliato della calibrazione leggere:
- `logica_tutor_pt.md` → sezione **Calibrazione**

Il dossier non duplica questo contenuto per evitare disallineamenti.

## 6. Comportamento attuale della modalità guidata

Per il comportamento dettagliato della modalità guidata leggere:
- `logica_tutor_pt.md` → sezioni **Modalità guidata**, **Briefing pre-sessione**, **Prompt RIR dopo la serie**, **Recupero guidato**, **Decisione finale dopo l'ultima serie**

Il dossier non duplica questo contenuto per evitare disallineamenti.

## 7. Regole speciali da non dimenticare

### Bodyweight e assistiti

L'app non deve parlare di `peso` dove non ha senso.

Esempi:
- `Push-Up`
- `Ab Wheel`
- `Abduzione laterale IR`
- `Band Pull-Apart con rotazione esterna`

In questi casi deve parlare di:
- variante
- difficoltà
- riferimento

### Soglie bodyweight già codificate

- `Push-Up`: se fai almeno 15 rip in tutte le serie per 2 sessioni consecutive → variante più difficile
- `Trazioni` e `Trazioni Supine`: se fai almeno 8 rip in tutte le serie per 2 sessioni consecutive → zavorra `+1.25 kg`

### Incrementi extra già previsti

- `Hyperextension` → `+1 kg`

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

## 8.bis. Esercizi attivi V4 (2026-04-22)

> **Fonte unica di verità per la lista esercizi V4.** Se c'è conflitto tra questa sezione e altri file, questo dossier e il CSV (`workout_plan_v4.csv`) sono autorevoli. Il CSV è la documentazione scheda completa; questa sezione è la sintesi rapida per il PT.

## 8.ter. Documento Riassuntivo Esercizi PT

Questa e la sintesi operativa piu rapida da dare a un agente PT. Include tutti gli esercizi attivi della V4, compresi riscaldamenti ricorrenti, mobilita anca quotidiana e cardio.

### Giorni pesi

| Giorno | Blocco | Esercizi attivi |
|---|---|---|
| G1 Lower A | Riscaldamento | Dorsiflessione al muro · 90/90 hip mobility · Alfredson eccentrico · Ponte monopodalico · Dead Bug · Push-Up · Affondi saltati alternati · Trazioni con elastico · Serie avvicinamento squat |
| G1 Lower A | Lavoro | Squat · Stacco Rumeno · Glute Bridge Bilanciere · Leg Curl al Cavo · Ab Wheel |
| G1 Lower A | Stretching | Standing Quad Pull · Half Kneeling Lunge · Figure-Four Supino |
| G1 Lower A | Mobilita anca bonus | Half Kneeling Lunge · Half Kneeling Lunge + Reach · Figure-Four Supino · Posizione del quadrato · Happy Baby · Wall tibialis raises |
| G2 Upper A | Riscaldamento | T-spine rotation in quadrupedia · Shoulder CARs · Dorsiflessione al muro · Band Pull-Apart con elastico · Shoulder Tap · Kettlebell swing leggero · Goblet squat con fermo in buca · Squat thrust · Serie avvicinamento trazioni |
| G2 Upper A | Lavoro | Trazioni · Panca · Pulley · Band Pull-Apart con rotazione esterna · Curl Bicipiti |
| G2 Upper A | Stretching | Doorway Pec Stretch · Overhead Lat Stretch · Cross-Body Shoulder Stretch · Wrist Flexor/Extensor Stretch |
| G2 Upper A | Mobilita anca bonus | Half Kneeling Lunge · Half Kneeling Lunge + Reach · Figure-Four Supino · Posizione del quadrato · Happy Baby · Wall tibialis raises |
| G4 Lower B | Riscaldamento | Dorsiflessione al muro · 90/90 hip mobility · Calf Raises con pallina · Ponte monopodalico · Shoulder Tap · Push-Up · Affondi saltati alternati · Burpee completo · Serie avvicinamento stacco |
| G4 Lower B | Lavoro | Stacco da Terra · Bulgarian Split Squat · Hyperextension · Abduzione laterale IR |
| G4 Lower B | Stretching | Supine Assisted Leg Pull · Figure-Four Supino · Cat-Cow Lento · Half Kneeling Lunge |
| G4 Lower B | Mobilita anca bonus | Half Kneeling Lunge · Half Kneeling Lunge + Reach · Figure-Four Supino · Posizione del quadrato · Happy Baby · Wall tibialis raises |
| G5 Upper B | Riscaldamento | T-spine rotation in quadrupedia · Shoulder CARs · Dorsiflessione al muro · Scapular Pull-Up · Band Pull-Apart con elastico · Kettlebell swing leggero · Affondi saltati alternati · Squat jump · Serie avvicinamento military press |
| G5 Upper B | Lavoro | T-bar Row · Military Press · Push-Up · Trazioni Supine · Woodchop · Alzate Laterali |
| G5 Upper B | Stretching | Doorway Pec Stretch · Overhead Triceps Stretch · Overhead Lat Stretch · Band Dislocate Lento |
| G5 Upper B | Mobilita anca bonus | Half Kneeling Lunge · Half Kneeling Lunge + Reach · Figure-Four Supino · Posizione del quadrato · Happy Baby · Wall tibialis raises |

### Giorno leggero e cardio

| Giorno | Blocco | Esercizi attivi |
|---|---|---|
| G3 Leggero | Riscaldamento | Dorsiflessione al muro · 90/90 hip mobility · T-spine rotation in quadrupedia · Ponte monopodalico |
| G3 Leggero | Lavoro | Alzate Laterali · Band Pull-Apart con rotazione esterna · Abduzione laterale IR · Goblet Squat · TRX Row lento |
| G3 Leggero | Protocollo anca completo | Half Kneeling Lunge · Half Kneeling Lunge + Reach verticale · Couch Stretch · Figure-Four Supino · Happy Baby · Leg Cradle Supino · Supported Low Lunge · Posizione del quadrato · Wall tibialis raises |
| Cardio giovedi | Formati | Corsa 30 min zona 2 · HIIT upper + core · Corsa lunga zona 2 · Rucking |
| Cardio giovedi | Mobilita | Dorsiflessione al muro · Wall tibialis raises · 90/90 hip mobility · T-spine rotation in quadrupedia · Half Kneeling Lunge · Posizione del quadrato · Figure-Four Supino |

### Punti chiave per il PT

- `Bulgarian Split Squat` e il nome da usare per il monopodalico di G4.
- `Abduzione laterale IR` sostituisce `Fire Hydrant` come accessorio gluteo medio attivo.
- `Wall tibialis raises` e attivo nella mobilita quotidiana.
- `Posizione del quadrato` e dentro il protocollo anca di ogni giorno.
- Le 2 serie di avvicinamento esistono solo per `Ab Wheel`, `Curl Bicipiti`, `Hyperextension`.
- I superset attivi sono: G1 `Leg Curl al Cavo + Ab Wheel`, G2 `Band Pull-Apart con rotazione esterna + Curl Bicipiti`, G4 `Hyperextension + Abduzione laterale IR`, G5 `Push-Up + Woodchop`.

**Struttura settimana**: G1 Lower A · G2 Upper A · G3 Leggero · Cardio giovedì · G4 Lower B · G5 Upper B · Riposo

**Tipi giorno nell'app**:
- `pesi` (default): G1, G2, G4, G5 — logica coach completa, tracking progressione
- `light: true`: G3 — UI dedicata, niente RIR, niente briefing, niente decisione finale, timer fisso 30s
- `cardio: true`: giovedì — 4 formati selezionabili + mobilità
- `rest`: G6 — riposo

| Giorno | Tipo | Esercizi |
|---|---|---|
| G1 Lower A | pesi | Squat · Stacco Rumeno · Glute Bridge Bilanciere · Leg Curl al Cavo · Ab Wheel |
| G2 Upper A | pesi | Trazioni · Panca · Pulley · Band Pull-Apart con rotazione esterna · Curl Bicipiti |
| G3 Leggero | light | Alzate Laterali · Band Pull-Apart con rotazione esterna · Abduzione laterale IR · Goblet Squat · TRX Row lento |
| G4 Lower B | pesi | Stacco da Terra · Bulgarian Split Squat · Hyperextension · Abduzione laterale IR |
| G5 Upper B | pesi | T-bar Row · Military Press · Push-Up · Trazioni Supine · Woodchop |
| G6 | riposo | — |
| Cardio giovedì | cardio | Corsa 30 zona 2 / HIIT upper+core / Corsa lunga zona 2 / Rucking |

Rimossi dal programma attivo (non devono comparire in suggerimenti o liste coaching pesi):
- Hip Thrust Bilanciere
- Bulgarian Split Squat
- Fitball Hamstring Curl
- Face Pull
- Dip alle Parallele
- Tricipiti Cavo
- T-bar Row da G2 (spostato a G5)
- Stacco Rumeno da G4 (spostato a G1)
- Cardio A da G3 (sostituito da giorno leggero)

Superset attivi per modalità rapida (solo giorni pesi):
- G1: Leg Curl al Cavo + Ab Wheel
- G2: Band Pull-Apart con rotazione esterna + Curl Bicipiti
- G4: Hyperextension + Abduzione laterale IR
- G5: Push-Up + Woodchop

Nota: il G3 Leggero NON ha superset. Non è nella logica AM/PM split. Non alimenta i Progressi fondamentali.

Serie di avvicinamento integrate nella scheda:
- Ab Wheel: `5x8-10`, prime 2 serie avvicinamento + 3 serie lavoro
- Curl Bicipiti: `5x10-12`, prime 2 serie avvicinamento + 3 serie lavoro
- Hyperextension: `5x12-15`, prime 2 serie avvicinamento + 3 serie lavoro

Nota controllo progressioni: le prime 2 serie vanno registrate e mostrate nello storico, ma non devono essere usate per decidere aumento carico/ripetizioni o stallo. I confronti della tab Progressi devono leggere solo le 3 serie lavoro.

### Cardio programmato

Il cardio del giovedì usa una rotazione suggerita su 4 formati, tutti sempre selezionabili:

| Rotazione | Formato | Durata | Vincolo |
|---|---|---|---|
| A | Corsa zona 2 breve | 30 min | FC 120-140 |
| B | HIIT upper + core | 30 min | 30s/15s, niente sprint/salti/affondi |
| C | Corsa zona 2 lunga | 50-60 min | spostare a domenica se penalizza lo stacco |
| D | Rucking | 45-60 min | zaino 15-20 kg |

Nota tracking cardio: l'app deve avere il flag `Segna fatto` per registrare rapidamente la seduta in `cardioLogs` e farla comparire nella tab Progressi. Se non vengono compilati minuti/kg, usare durata del formato come default e 15 kg per il rucking.

### Alternativa Clamshell

Nel G3 l'accessorio base è `Abduzione laterale IR` con toggle persistente verso `Clamshell` tramite `wt-exercise-alt-mode`. Nel G4 l'accessorio resta fisso su `Abduzione laterale IR`.

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
- oggi la modalità guidata è `ON` di default
- la calibrazione compare solo se manca un riferimento o è scaduto
- esiste anche una modalità per nascondere le info non essenziali
- il riferimento tecnico principale resta `src/App.jsx`
- i documenti in `docs/agent` sono il contesto minimo da leggere prima di dare suggerimenti
