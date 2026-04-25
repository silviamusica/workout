# Checklist verifica logica coach — da eseguire dopo ogni modifica alla scheda

## Istruzione

Dopo ogni modifica alla lista esercizi del programma V4, l'agente deve verificare che TUTTE le liste e funzioni della logica coach siano allineate. Ogni esercizio attivo deve essere presente nelle liste corrette. Ogni esercizio rimosso deve essere tolto.

## Esercizi attualmente attivi nel V4 (aggiornato 2026-04-23)

**Giorni pesi** (logica coach completa):
G1: Squat, Stacco Rumeno, Glute Bridge Bilanciere, Leg Curl al Cavo, Ab Wheel
G2: Trazioni, Panca, Pulley, Band Pull-Apart con rotazione esterna, Curl Bicipiti
G4: Stacco da Terra, Bulgarian Split Squat, Hyperextension, Abduzione laterale IR
G5: T-bar Row, Military Press, Push-Up, Trazioni Supine, Woodchop

**Giorno leggero G3** (tipo `light: true` — logica coach NON si applica):
G3: Alzate Laterali, Band Pull-Apart con rotazione esterna, Abduzione laterale IR, Goblet Squat, TRX Row lento

Gli esercizi del G3 NON devono essere in ACCESSORY_PROGRESS_EX, MAX_PROGRESS_EX, keyLiftNames, FAST_MODE_SUPERSETS, V4_DAY_SPLIT_PLAN.

## 10 punti da verificare

Per ogni punto: cercare la riga nel codice, confrontare con la lista esercizi attivi, segnalare discrepanze.

### 1. MAX_PROGRESS_EX
Deve contenere SOLO: Push-Up, Trazioni Supine
(non è la lista dei fondamentali — è per esercizi a corpo libero senza peso fisso)
- Cerca: `var MAX_PROGRESS_EX`
- Verifica: nessun esercizio aggiunto che non sia BW senza peso

### 2. ACCESSORY_PROGRESS_EX
Deve contenere tutti gli accessori attivi:
`Stacco Rumeno, Glute Bridge Bilanciere, Leg Curl al Cavo, Pulley, Curl Bicipiti, Bulgarian Split Squat, Hyperextension, Abduzione laterale IR, Woodchop, Push-Up, Trazioni Supine, T-bar Row, Band Pull-Apart con rotazione esterna`
- Cerca: `var ACCESSORY_PROGRESS_EX`
- Verifica: nessun esercizio rimosso (Squat Bulgaro, Face Pull, Fitball Hamstring Curl, Tricipiti Cavo, Dip, Hip Thrust)

### 3. CORE_PROGRESS_EX
Deve contenere: Ab Wheel (solo)
- Cerca: `var CORE_PROGRESS_EX`
- Verifica: Slackline non presente

### 4. CALIBRATION_BODYWEIGHT_EX
Deve contenere: Push-Up, Trazioni, Trazioni Supine, Ab Wheel, Abduzione laterale IR
- Cerca: `var CALIBRATION_BODYWEIGHT_EX`
- Verifica: non deve contenere Nordic Curl, Slackline, Dip alle Parallele, Fitball Hamstring Curl

### 5. usesElasticScale
Deve contenere: Trazioni, Trazioni Supine (solo)
- Cerca: `function usesElasticScale`
- Verifica: nessun altro aggiunto

### 6. BARBELL_TOTAL_EX
Deve contenere: Squat, Panca, Military Press, Stacco da Terra, Stacco Rumeno, Glute Bridge Bilanciere
(più varianti legacy: Front Squat, Pause Squat, Push Press, Stacco Sumo, Rematore Bilanciere, Pendlay Row, Good Morning)
- Cerca: `var BARBELL_TOTAL_EX`
- Verifica: Glute Bridge Bilanciere presente

### 7. getGuidedExerciseClass
- heavy: Squat, Stacco da Terra, Panca, Military Press, Trazioni, Trazioni Supine, T-bar Row, Stacco Rumeno, Glute Bridge Bilanciere, Pulley
- mono: Curl Bicipiti, Woodchop, Abduzione laterale IR, Band Pull-Apart con rotazione esterna, Leg Curl al Cavo
- compound (default): Bulgarian Split Squat, Push-Up, Hyperextension, Ab Wheel
- Cerca: `function getGuidedExerciseClass`
- Verifica: non deve contenere Hip Thrust Bilanciere, Tricipiti Cavo, Face Pull

### 8. getCalibrationType
Ogni esercizio attivo deve avere il tipo corretto:
- weighted: Squat, Panca, Military Press, Stacco da Terra, Stacco Rumeno, Glute Bridge Bilanciere, T-bar Row, Hyperextension, Bulgarian Split Squat→dumbbell, Curl Bicipiti→dumbbell
- cable: Pulley, Leg Curl al Cavo, Woodchop
- dumbbell: Bulgarian Split Squat, Curl Bicipiti
- band-assist: Trazioni, Trazioni Supine
- bodyweight: Push-Up, Ab Wheel, Abduzione laterale IR, Band Pull-Apart con rotazione esterna
- body-control: Ab Wheel
- Cerca: `function getCalibrationType`

### 9. getGuidedIncrementInfo
Ogni esercizio attivo deve avere l'incremento corretto:
- +2.5 kg: Squat, Panca, Military, Stacco, Stacco Rumeno, Glute Bridge Bilanciere, T-bar Row (default weighted)
- +1 kg per manubrio: Bulgarian Split Squat, Curl Bicipiti
- +1 scatto cavo: Pulley, Leg Curl al Cavo, Woodchop
- +1 rip per serie: Push-Up, Ab Wheel, Abduzione laterale IR, Band Pull-Apart con rotazione esterna
- +1 tacca elastico: Trazioni, Trazioni Supine
- +1 kg: Hyperextension
- Cerca: `function getGuidedIncrementInfo`

### 10. getRecoveryFillerSuggestion
Ogni esercizio attivo con recupero ≥60s deve avere un filler:
- Squat → band pull-apart leggero
- Stacco da Terra / Stacco Rumeno → respirazione diaframmatica
- Panca → retrazione scapolare
- Military Press → dead hang passivo
- Glute Bridge Bilanciere → cat-cow lento
- Bulgarian Split Squat → ankle circles
- Tutti gli altri → filler generico
- Cerca: `function getRecoveryFillerSuggestion`
- Verifica: non deve contenere Hip Thrust Bilanciere, Squat Bulgaro

### 11. V4_DAY_SPLIT_PLAN
- G1 AM: Squat, Stacco Rumeno, Glute Bridge Bilanciere — G1 PM: Leg Curl al Cavo, Ab Wheel
- G2 AM: Trazioni, Panca — G2 PM: Pulley, Band Pull-Apart con rotazione esterna, Curl Bicipiti
- G4 AM: Stacco da Terra, Bulgarian Split Squat — G4 PM: Hyperextension, Abduzione laterale IR
- G5 AM: T-bar Row, Military Press — G5 PM: Push-Up, Trazioni Supine, Woodchop
- Cerca: `var V4_DAY_SPLIT_PLAN`

### 12. FAST_MODE_SUPERSETS
- G1: Leg Curl al Cavo + Ab Wheel (rest 60s)
- G2: Band Pull-Apart con rotazione esterna + Curl Bicipiti (rest 60s)
- G4: Hyperextension + Abduzione laterale IR (rest 60s)
- G5: Push-Up + Woodchop (rest 45s)
- Cerca: `var FAST_MODE_SUPERSETS`
- Verifica: non deve contenere Face Pull, Fitball Hamstring Curl, Tricipiti Cavo

### 13. keyLiftNames (tab Progressi)
Deve contenere i fondamentali e compound pesanti attivi:
`Squat, Stacco da Terra, Panca, Military Press, Trazioni, Trazioni Supine, Push-Up, T-bar Row, Stacco Rumeno, Glute Bridge Bilanciere`
- Cerca: `var keyLiftNames`
- Verifica: non deve contenere Dip alle Parallele, Hip Thrust Bilanciere
- Verifica: non deve contenere esercizi esclusivi del G3 Leggero (Alzate Laterali, Clamshell, Goblet Squat, TRX Row lento)

### 14. Serie di avvicinamento escluse dalle progressioni
Questi esercizi hanno 5 serie totali ma solo 3 serie lavoro:
- `Ab Wheel`: 5x8-10, prime 2 avvicinamento
- `Curl Bicipiti`: 5x10-12, prime 2 avvicinamento
- `Hyperextension`: 5x12-15, prime 2 avvicinamento

Verifiche:
- Nel `DAYS_V4` devono avere `approachSets: 2`
- In scheda devono mostrare il badge `2 avvicinamento + 3 lavoro`
- In registrazione serie 1-2 devono essere etichettate `Avvicinamento`, serie 3-5 `Lavoro`
- In `Progressi`, `getProgressAdvice`, `getStableLoadStallInfo` e analisi guidata devono usare solo le 3 serie lavoro
- L'archivio deve continuare a mostrare tutte le serie salvate

### 15. Cardio nei Progressi
Il cardio del giovedì deve poter essere registrato anche senza compilare manualmente i campi:
- Bottone `Segna fatto`
- Salvataggio in `cardioLogs` con `completed: true`
- Default minuti dalla durata del formato; rucking con default 15 kg se non compilato
- Tab Progressi con sezione `Cardio registrato`, confronto con la seduta precedente e conteggio sedute

### 16. Giorno leggero G3 (tipo `light: true`)
Il giorno leggero ha regole proprie — verificare che il codice rispetti queste 6 regole:
1. `light: true` nell'oggetto Giorno 3 in `DAYS_V4`
2. `activeDays` filtra `!d.light` — G3 NON è nei giorni pesi
3. `startWorkoutSession` ha `|| workoutSelectedWeightDay.light` nel guard — niente sessione guidata
4. I bottoni "Inizia allenamento" e "Coach attivo" hanno `!dayData.light` nel check
5. La sezione Esercizi pesi (`section-esercizi`) ha `!dayData.light` nel check
6. `renderLightDay` viene chiamato quando `workoutSelectedDay.light` è true
- Cerca: `day.light` nel codice
- Verifica: nessun esercizio del G3 è in `ACCESSORY_PROGRESS_EX`, `MAX_PROGRESS_EX`, `keyLiftNames`, `V4_DAY_SPLIT_PLAN`, `FAST_MODE_SUPERSETS`

## Come eseguire la verifica

Per ogni punto:
1. Cerca la riga nel codice
2. Confronta con la lista esercizi attivi scritta sopra
3. Segnala: esercizi presenti che non dovrebbero esserci, esercizi mancanti che dovrebbero esserci
4. Correggi nel codice
5. Conferma la correzione

## Quando eseguire la verifica

- Dopo ogni aggiunta di esercizio
- Dopo ogni rimozione di esercizio
- Dopo ogni spostamento di esercizio tra giorni
- Prima di ogni rilascio/export del backup
