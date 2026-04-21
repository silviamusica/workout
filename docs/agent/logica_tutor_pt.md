# Logica Tutor PT

Questo file descrive la logica tutor attuale dell'app `workout-tracker`.

Serve a:
- verificare il comportamento dell'app lato coaching
- controllare calibrazione, guida sessione, recuperi e progressione
- dare a un PT un quadro chiaro di cosa l'app suggerisce davvero oggi

Per controlli su:
- pattern esercizi
- varianti e regressioni
- obiettivi tecnici per variante
- interpretazione dei briefing guided

leggere anche:
- `./esercizi_varianti_obiettivi_guided.md`

File applicativo principale:
- `../../src/App.jsx`

## Modalità presenti

L'app oggi ha due logiche diverse ma compatibili:

1. `Calibrazione`
- serve a trovare o ricalibrare il riferimento iniziale di un esercizio
- si attiva manualmente dalla scheda
- non vale per tutti gli esercizi: alcuni sono esclusi o gestiti come corpo libero / assistiti / tempo

2. `Modalità guidata`
- è `ON` di default
- si può attivare o disattivare da `Impostazioni`
- affianca la seduta normale
- usa RIR, storico e range per guidare recupero e progressione
- non sostituisce la calibrazione

## Stato e persistenza

L'app salva in locale e anche nel backup JSON:
- `logs`
- `cardioLogs`
- `stretchLogs`
- `calibrationProfiles`
- `calibrationMode`
- `guidedMode`

Quindi:
- import/export conserva sia la calibrazione sia la modalità guidata
- import/export conserva anche gli stati stretching e mobilità (`fatto` / `saltato`)
- `Reset totale` riporta `guidedMode` a `OFF`

Esiste anche un toggle separato:
- `Info aggiuntive esercizi`

Se è `OFF`:
- nasconde respirazione
- nasconde guida completa
- nasconde tecnica estesa, errori e storico tecnico esteso
- lascia visibili le parti essenziali della scheda e del tutor

## Calibrazione

### Quando si considera necessaria

Per un esercizio, la calibrazione è suggerita se:
- non esiste ancora uno storico utile
- non esiste un profilo di calibrazione salvato
- l'ultimo profilo di calibrazione ha più di 14 giorni
- oppure l'ultima registrazione dell'esercizio ha più di 14 giorni

Se esiste un profilo recente:
- l'avviso non viene ripetuto ogni volta
- il blocco calibrativo non appare nella scheda dell'esercizio

Quindi il comportamento corretto oggi è:
- calibrazione visibile solo se manca o è scaduta
- nessun pannello `punto zero salvato` sugli esercizi già a posto

### Flusso attuale

In calibrazione, nella riga serie l'utente inserisce solo:
- `kg` o `tacca elastico`
- `ripetizioni`

Sulla prima serie test non inserisce lì il RIR.

Dopo il click sulla spunta:
- si apre il modale di calibrazione
- chiede:
  - quante erano davvero le ripetizioni pulite
  - quante ripetizioni pulite restavano (`RIR / riserva`)
  - se il test era `Troppo pesante`, `Giusta` o `Troppo facile`

Note pratiche:
- dalla seconda serie in poi, anche in calibrazione, il `RIR` può essere inserito direttamente nella riga
- nella prima serie test il `RIR` viene raccolto nel modale finale

### Cosa salva

La serie viene salvata comunque nel log.

Se la serie è coerente con una calibrazione valida:
- viene salvato anche un `calibrationProfile` per l'esercizio

Se è sotto il minimo del range:
- la serie viene salvata
- ma non viene promossa a `punto zero valido`

### Regola di partenza dal basso del range

La calibrazione non cerca un carico già al tetto del range.

Esempio:
- su `10-12`, fare `12` con margine (`RIR 2+`) non è considerato il peso giusto di partenza
- viene trattato come troppo facile
- l'app suggerisce di alzare il carico

Logica desiderata già implementata:
- partire vicino al numero basso del range
- poi progredire nel tempo

### Recupero in calibrazione

L'app non avvia più automaticamente il timer dopo la serie.

Il timer:
- è manuale
- non deve bloccare la registrazione della serie successiva
- può essere bloccato con il lucchetto per restare aperto e non essere sovrascritto

## Modalità guidata

### Attivazione

Stato attuale:
- è `ON` di default
- si può spegnere da `Impostazioni > Modalità guidata`

Quando è `OFF`:
- la scheda funziona normalmente

Quando è `ON`:
- compaiono briefing, prompt RIR, suggerimenti recupero e feedback finali

## Modalità flusso

### Obiettivo

La `Modalità flusso` serve a ridurre il tempo perso tra una serie e l'altra.

Non cambia programmazione, carichi o recuperi teorici:
- riduce micro-decisioni
- riduce cambi attrezzo improvvisati
- rende esplicito il prossimo passo

### Cosa fa

Quando è attiva:
- prima dell'allenamento mostra una checklist setup del giorno costruita dagli `attrezzi` della seduta
- durante il countdown del timer mostra una riga `Prossimo`
- a timer finito può aprire automaticamente il prossimo esercizio previsto
- se c'è un superset diretto, il timer segnala che non serve pausa
- nella sessione attiva nasconde le tab non utili per evitare distrazioni

### Sessione attiva

Quando l'utente preme `Inizia allenamento`:
- l'app entra in `sessione attiva`
- resta visibile solo `Scheda`
- `Impostazioni`, `Teoria`, `Progressi` ed `Esercizi` non sono accessibili
- compare un comando piccolo `Esci dalla sessione`

Quando l'utente:
- preme `Esci dalla sessione`
- oppure completa l'ultimo esercizio del giorno

la sessione attiva termina e l'interfaccia completa riappare.

### Timer e prossimo passo

Durante il recupero il timer può mostrare:
- countdown
- eventuale filler se previsto
- riga `Prossimo: ...`

Esempi:
- `Prossimo: Serie 3 di 4 · Squat`
- `Prossimo: Affondi · preparare manubri`
- `Prossimo: Ab Wheel · superset diretto, no pausa`

### Vibrazione

Alla fine del countdown:
- prova una vibrazione breve con `navigator.vibrate(200)`
- se non c'è interazione entro 15 secondi, ripete una seconda vibrazione breve

Se il browser non supporta vibrazione, resta il segnale sonoro già presente.

## Stretching e mobilità

### Logica attuale

La V4 usa ora due blocchi distinti:

1. `Stretching finale`
- compare dopo gli esercizi dei 4 giorni pesi
- è specifico per il giorno, non più generico per distretto
- ogni voce mostra durata, cue breve, timer rapido e dettagli

2. `Mobilità anca`
- nei giorni pesi compare come `Bonus mobilità anca`
- nei giorni cardio compare dentro la sezione `Cardio e mobilità anca`
- non crea nuovi tab-giorno e non rompe il tracking esistente dei pesi

In piu, nei 4 giorni pesi il riscaldamento principale e ora strutturato in `4 fasi`:
- `Mobilita`
- `Attivazione + stabilita`
- `Circuito neurale`
- `Serie di avvicinamento`

Nota pratica per PT e agenti:
- il `Circuito neurale` e sempre `1 giro solo`
- non deve mai diventare lavoro a fatica
- se l'utente arriva gia stanca, il circuito si puo saltare senza considerarlo un errore
- in app lo stato `Fatto` del riscaldamento e segnato per `fase`, non per singolo esercizio

### Stato utente

Per stretching e mobilità l'utente può segnare:
- `Fatto`
- `Saltato`

Questi stati:
- non bloccano il flusso
- non producono giudizi
- servono solo come tracciamento leggero e persistente

### Timer

Il timer stretching:
- è manuale
- parte da 20, 30 o 40 secondi in base alla posizione
- non è bloccante
- può essere ignorato o saltato liberamente

### Regole di copy

Per stretching e mobilità l'app deve usare tono non prescrittivo:
- `consigliato`
- `se hai tempo`
- `per oggi`

Da evitare:
- `devi`
- `obbligatorio`
- qualsiasi messaggio colpevolizzante se l'utente salta il blocco

### Soluzione strutturale scelta

Per non rompere la struttura V4:
- i giorni cardio non sono stati trasformati in nuovi tab-giorno nella scheda principale
- cardio e protocollo anca sono accessibili in una sezione dedicata della scheda
- i 4 giorni pesi restano il flusso operativo principale

## Briefing pre-sessione

Il briefing appare nei giorni pesi normali:
- non nei giorni cardio
- non nei giorni di riposo
- non nel livello `Tecniche preliminari`

### Cosa mostra

Mostra:
- tutti gli obiettivi del giorno
- per ogni esercizio:
  - nome
  - stato sintetico
  - suggerimento operativo

### Stati oggi previsti

1. `Nessun dato`
- manca ancora uno storico utile

2. `Sessione non uniforme`
- l'ultima seduta completa ha usato carichi diversi tra le serie
- messaggio: usare il peso della maggioranza delle serie e tornare a una seduta uniforme

3. `Aumenta carico`
- l'ultima seduta ha chiuso il top del range con margine adeguato

4. `Resta così, prova 1 rip in più`
- il peso è giusto ma il top del range non è ancora chiuso su tutte le serie

5. `Consolida`
- almeno una serie è sotto il minimo

6. `Chiuse ma troppo tirate`
- hai chiuso il top del range
- ma il `RIR medio <= 1`
- quindi l'app non dice di aumentare subito

### Come il PT deve leggere questi stati

- sono stati di coaching locale, non diagnosi tecniche complete
- usano storico, range e RIR, non analisi video
- servono a orientare la seduta, non a cambiare da soli la programmazione

Quindi:
- se la tecnica reale e brutta ma lo storico direbbe `Aumenta carico`, il PT deve dare priorita alla tecnica reale
- se la seduta e stata non uniforme, la qualita del dato viene prima della voglia di progredire
- se una variante e stata usata al posto dell'esercizio principale, il suggerimento va letto nel contesto della variante davvero eseguita

## Prompt RIR dopo la serie

Fuori dalla calibrazione, se `Modalità guidata` è attiva:
- se l'utente salva una serie senza RIR già compilato
- si apre un prompt rapido

Domanda:
- `Quante ripetizioni pulite ti sarebbero rimaste?`

Opzioni:
- `0`
- `1`
- `2`
- `3`
- `4+`

Se è dalla seconda serie in poi dello stesso esercizio:
- compare anche `= serie precedente`
- copia il RIR della serie precedente

Per le prime 5 apparizioni del prompt:
- compare un micro-hint
- suggerisce `2` se la serie era impegnativa ma ancora controllata

## Recupero guidato

Il recupero suggerito dipende da:
- esercizio
- recupero base della scheda
- RIR appena dichiarato

L'app distingue 3 categorie:

1. `Compound pesante`
- esempi: Squat, Stacco, Panca, Military, Trazioni, Trazioni Supine, Stacco Rumeno, T-bar Row, Pulley, Glute Bridge Bilanciere

2. `Accessorio composto`
- multiarticolare non heavy

3. `Monoarticolare`
- curl, alzate laterali, woodchop, ecc.

### Regole attuali

`RIR 0`
- heavy: `2.5 min`
- accessorio composto: `90s`
- monoarticolare: `60s`

`RIR 1`
- heavy: `2 min`
- accessorio composto: `75s`
- monoarticolare: `60s`

`RIR 2`
- heavy: `90s`
- accessorio composto: `60s`
- monoarticolare: `45s`

`RIR 3+`
- heavy: `75s`
- accessorio composto: `45s`
- monoarticolare: `30s`

Il timer mostra anche un testo sintetico:
- esempio `RIR 1: 75s bastano`

Questi tempi sono stati accorciati rispetto alla prima versione della guida:
- assumono lavoro normale a `RIR 1-2`
- non sono pensati per cedimento sistematico su tutti i set
- sono piu coerenti con il recupero medio femminile e con una seduta ipertrofica pratica

## Feedback se la serie è sotto il minimo

Questa logica vale:
- in modalità guidata
- anche fuori dalla modalità guidata
- anche in calibrazione come feedback di sicurezza

### Caso moderatamente sotto il minimo

Esempio:
- target minimo `6`
- l'utente fa `4`

Feedback:
- non salire di carico
- consolidare quel peso

### Caso molto sotto il minimo

Esempio:
- target minimo `6`
- l'utente fa `2`

Feedback:
- carico probabilmente troppo alto
- oppure recupero insufficiente
- oppure tecnica che cede

L'app aggiunge anche una riduzione pratica:
- bilanciere: `-2.5 kg`
- manubri: `-1 kg per manubrio`
- cavo: `-1 step`
- elastico: più assistenza
- corpo libero: variante più facile

## Decisione finale dopo l'ultima serie

Quando l'ultima serie prevista è stata salvata, l'app calcola una decisione sintetica per la prossima seduta.

### Casi gestiti oggi

1. `Top del range chiuso con margine adeguato`
- suggerisce aumento

2. `Top del range chiuso ma RIR medio <= 1`
- non suggerisce aumento
- messaggio: consolidare ancora una seduta con più margine prima di salire

3. `Tutte nel range ma non tutte al top`
- suggerisce di tenere il peso e aggiungere ripetizioni

4. `Pattern tipo 8-8-7-6`
- non è trattato come fallimento
- messaggio dedicato:
  - peso calibrato bene
  - il calo nelle ultime serie è fatica normale
  - la prossima volta si prova a chiudere meglio le ultime serie

5. `Sotto il minimo`
- suggerisce consolidamento

6. `Più serie a RIR 0`
- avvisa che il buffer è stato superato troppo spesso

## Storico RIR

Nella scheda esercizio aperta, se esistono dati RIR:
- l'app mostra la media RIR delle ultime 3 sessioni utili

Questa media è:
- informativa per ogni esercizio che ha dati RIR
- quindi può comparire anche su accessori e monoarticolari

### Avviso deload / accumulo fatica

L'avviso scatta solo sugli esercizi `heavy`.

Condizione:
- media RIR < `1.5`
- per 2 sessioni consecutive

Messaggio:
- valutare un deload o una lieve riduzione del carico

Non scatta sui monoarticolari:
- perché lì il cedimento è più tollerabile

## Incrementi usati dalla logica guidata

### Bilanciere
- `+2.5 kg`

Esempi:
- Squat
- Stacco da Terra
- Panca
- Military Press
- Stacco Rumeno
- Glute Bridge Bilanciere
- T-bar Row
- Front Squat
- Pause Squat
- Push Press
- Stacco Sumo

### Manubri
- `+1 kg per manubrio`

Esempi:
- Affondi
- Curl Bicipiti
- Curl Martello
- Press Manubri da Seduta
- Alzate Laterali

### Cavo
- `+1 step`

Esempi:
- Pulley
- Lat Machine
- Woodchop
- esercizi con `Cavo`

### Corpo libero
- `+1 rip per serie`

Esempi:
- Push-Up
- Ab Wheel
- Fire Hydrant
- Band Pull-Apart con rotazione esterna

Soglie oggi codificate nella logica guidata:
- `Push-Up`: se fai almeno `15 rip` in tutte le serie per `2 sessioni consecutive`, l'app suggerisce una variante più difficile, per esempio `Push-Up declino` o `diamante`
- `Trazioni` e `Trazioni Supine`: se fai almeno `8 rip` in tutte le serie per `2 sessioni consecutive`, l'app suggerisce zavorra leggera `+1.25 kg`

### Elastico assistenza
- `-1 tacca elastico`

### Sovraccarico incrementale leggero
- `Hyperextension`: `+1 kg`

## Export e lettura dati

L'app oggi esporta:

1. backup tecnico JSON
- contiene log, cardio, calibrazione, guided mode

2. CSV leggibile
- pensato per utente e PT
- riepiloga sessioni, serie, volume, cardio e note

Esiste anche:
- `Esporta solo JSON`

## Timer

Il timer attuale:
- è un pannello flottante piccolo
- è solo manuale
- non dovrebbe bloccare la registrazione
- resta visibile durante la lettura della scheda
- mostra il recupero minimo consigliato dell'esercizio aperto
- in modalità guidata può mostrare anche il suggerimento contestuale sul recupero
- ha un lucchetto `🔒`:
  - se bloccato, resta aperto
  - non viene sovrascritto dai nuovi recuperi finché non viene sbloccato

## Modalità sessione: superset e split AM/PM

L'app offre tre formati per ogni giorno pesi: sessione unica, split AM/PM, superset.

### Split AM/PM (V4_DAY_SPLIT_PLAN)

| Giorno | AM | PM |
|---|---|---|
| G1 | Squat · Stacco Rumeno · Glute Bridge Bilanciere | Leg Curl al Cavo · Ab Wheel |
| G2 | Trazioni · Panca | Pulley · Band Pull-Apart con rotazione esterna · Curl Bicipiti |
| G4 | Stacco da Terra · Affondi | Hyperextension · Fire Hydrant |
| G5 | T-bar Row · Military Press | Push-Up · Trazioni Supine · Woodchop |

### Superset (FAST_MODE_SUPERSETS)

| Giorno | A | B | Recupero dopo B |
|---|---|---|---|
| G1 | Leg Curl al Cavo | Ab Wheel | 60s |
| G2 | Band Pull-Apart con rotazione esterna | Curl Bicipiti | 60s |
| G4 | Hyperextension | Fire Hydrant | 60s |
| G5 | Push-Up | Woodchop | 45s |

### Modalità flusso

L'app ha una modalità flusso pensata per ridurre le micro-decisioni tra una serie e l'altra:
- checklist setup attrezzi pre-sessione
- riga `Prossimo:` sempre visibile durante il countdown del timer
- avanzamento automatico alla card successiva a timer scaduto
- vibrazione a fine countdown (`navigator.vibrate(200)`)
- sessione attiva: nasconde tab non utili, resta visibile solo `Scheda`

## File da controllare se si modifica la logica tutor

- `../../src/App.jsx`

Punti principali nel file:
- stato: `guidedMode`, `calibrationMode`, `calibrationProfiles`
- prompt: `guidedPrompt`, `calibrationPrompt`
- coaching:
  - `getGuidedSessionSuggestion`
  - `getGuidedRestSuggestion`
  - `getGuidedExerciseDecision`
  - `getUnderMinPerformanceMessage`
  - `getExerciseRirHistorySummary`
- export:
  - `buildReadableCsv`
  - `exportData`
  - `exportJsonOnly`

## Nota finale

Questa logica descrive il comportamento reale dell'app al momento, non uno stato futuro ipotetico.

Se il PT propone correzioni:
- devono essere confrontate con la logica già presente
- non basta correggere la teoria: va verificato anche l'effetto pratico su:
  - briefing
  - prompt RIR
  - recupero
  - decisione finale
  - storico RIR
  - calibrazione
