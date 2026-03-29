# Logica Tutor PT

Questo file descrive la logica tutor attuale dell'app `workout-tracker`.

Serve a:
- verificare il comportamento dell'app lato coaching
- controllare calibrazione, guida sessione, recuperi e progressione
- dare a un PT un quadro chiaro di cosa l'app suggerisce davvero oggi

File applicativo principale:
- `../../src/App.jsx`

## Modalità presenti

L'app oggi ha due logiche diverse ma compatibili:

1. `Calibrazione`
- serve a trovare o ricalibrare il riferimento iniziale di un esercizio
- si attiva manualmente dalla scheda
- non vale per tutti gli esercizi: alcuni sono esclusi o gestiti come corpo libero / assistiti / tempo

2. `Modalità guidata`
- è attiva di default
- si può disattivare da `Impostazioni`
- affianca la seduta normale
- usa RIR, storico e range per guidare recupero e progressione
- non sostituisce la calibrazione

## Stato e persistenza

L'app salva in locale e anche nel backup JSON:
- `logs`
- `cardioLogs`
- `calibrationProfiles`
- `calibrationMode`
- `guidedMode`

Quindi:
- import/export conserva sia la calibrazione sia la modalità guidata
- `Reset totale` riporta `guidedMode` a `ON`

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

Non inserisce lì il RIR.

Dopo il click sulla spunta:
- si apre il modale di calibrazione
- il modale mostra le ripetizioni già registrate
- chiede:
  - se erano tutte pulite
  - quante erano davvero pulite, se serve
  - quante ripetizioni pulite restavano

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

### Recupero obbligatorio in calibrazione

Dopo il salvataggio di una risposta valida o non valida:
- parte il timer di recupero
- la serie successiva non può essere registrata fino a fine timer

Quindi in calibrazione:
- l'app forza l'uso del recupero

## Modalità guidata

### Attivazione

Stato attuale:
- è `ON` di default
- si può spegnere da `Impostazioni > Modalità guidata`

Quando è `OFF`:
- la scheda funziona normalmente

Quando è `ON`:
- compaiono briefing, prompt RIR, suggerimenti recupero e feedback finali

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
- esempi: Squat, Stacco, Panca, Military, Trazioni, Stacco Rumeno, Hip Thrust Bilanciere

2. `Accessorio composto`
- multiarticolare non heavy

3. `Monoarticolare`
- curl, tricipiti cavo, alzate laterali, face pull, ecc.

### Regole attuali

`RIR 0`
- heavy: `3 min`
- accessorio composto: `2 min`
- monoarticolare: `90s`

`RIR 1`
- heavy: `2.5-3 min`
- accessorio composto: `90-120s`
- monoarticolare: `60-90s`

`RIR 2`
- recupero standard della scheda

`RIR 3+`
- heavy: `2 min`
- accessorio composto: `60-90s`
- monoarticolare: `60s`

Il timer mostra anche un testo sintetico:
- esempio `RIR 2: resta sul recupero standard`

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
- Front Squat
- Pause Squat
- Push Press
- Stacco Sumo
- Hip Thrust Bilanciere
- T-bar Row

### Manubri
- `+1 kg per manubrio`

Esempi:
- Squat Bulgaro
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
- Tricipiti Cavo
- Woodchop
- esercizi con `Cavo`

### Corpo libero
- `+1 rip per serie`

Soglie oggi codificate nella logica guidata:
- `Push-Up`: se fai almeno `15 rip` in tutte le serie per `2 sessioni consecutive`, l'app suggerisce una variante più difficile, per esempio `Push-Up declino` o `diamante`
- `Trazioni` e `Trazioni Supine`: se fai almeno `8 rip` in tutte le serie per `2 sessioni consecutive`, l'app suggerisce zavorra leggera `+1.25 kg`
- `Dip alle Parallele`: se fai almeno `10 rip` in tutte le serie per `2 sessioni consecutive`, l'app suggerisce zavorra leggera `+1.25 kg`
- `Fitball Hamstring Curl`: progressione a `+1 rip per serie`

### Elastico assistenza
- `-1 tacca elastico`

### Sovraccarico incrementale leggero
- `Hyperextension con Sacco`: `+1 kg nel sacco`

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
- non dovrebbe bloccare la registrazione
- resta visibile durante la lettura della scheda
- mostra il recupero minimo consigliato dell'esercizio aperto
- in modalità guidata può mostrare anche il suggerimento contestuale sul recupero

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
