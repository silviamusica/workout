# Dossier Completo Per Agente PT

Questo file serve come riferimento operativo rapido per un agente PT esterno.

Obiettivo:
- capire cosa fa davvero l'app oggi
- evitare suggerimenti incoerenti rispetto al comportamento reale dell'app
- sapere quali file leggere prima di proporre modifiche

Fonte primaria:
- `../../src/App.jsx`

Fonti secondarie da tenere coerenti:
- `./logica_tutor_pt.md`
- `./workout_plan_v4.csv`
- `./esercizi_varianti_obiettivi_guided.md`
- `./programma_avanzato_v4.md`

Nota:
- oggi `workout_plan_v4.csv` e `programma_avanzato_v4.md` non sono perfettamente allineati in tutti i dettagli; se c'e dubbio, prevale sempre `src/App.jsx`

## 1. Livelli presenti nell'app

L'app oggi gestisce 3 livelli:

1. `Tecniche preliminari`
- livello pre-principiante
- centrato su competenze base e controllo tecnico

2. `Principiante`
- full body su 3 giorni
- costruzione basi muscolari e motorie

3. `Ipertrofia avanzato`
- programma `V4`
- struttura: `G1 Lower A · G2 Upper A · G3 Leggero · Cardio giovedi · G4 Lower B · G5 Upper B · Riposo`
- e il livello con la logica tutor piu completa

## 2. Ordine di lettura per il PT

1. `../../src/App.jsx`
2. `logica_tutor_pt.md`
3. `workout_plan_v4.csv` solo come supporto, non come fonte finale
4. `esercizi_varianti_obiettivi_guided.md`
5. `programma_avanzato_v4.md` solo come contesto teorico
6. `tecniche_preliminari.md`

## 3. Logiche tutor presenti oggi

Le logiche tutor da conoscere sono 2:

### A. Calibrazione

- si attiva manualmente
- compare solo sugli esercizi che ne hanno davvero bisogno
- non si applica ai giorni `light` o `cardio`
- il riferimento salvato scade se calibrazione o ultimo log utile hanno piu di 14 giorni

### B. Modalita guidata

- e `ON` di default
- si puo spegnere da `Impostazioni`
- se un backup vecchio non contiene il flag, l'app la considera `ON`

Fa queste cose:
- briefing pre-sessione
- richiesta RIR dopo le serie
- recupero guidato
- feedback se resti sotto il minimo del range
- decisione finale a fine esercizio

## 4. Impostazioni importanti

### Modalita guidata

- `ON` = briefing, RIR, recuperi guidati, decisioni finali
- `OFF` = scheda piu semplice, senza tutor attivo

### Info aggiuntive esercizi

Se e `OFF`, l'app nasconde:
- respirazione
- guida completa
- tecnica estesa
- errori
- storico tecnico esteso

Il toggle non spegne il tutor.

## 5. Dati salvati dall'app

Nel backup JSON l'app salva:
- `logs`
- `cardioLogs`
- `stretchLogs`
- `calibrationProfiles`
- `calibrationMode`
- `guidedMode`
- `preferences.exerciseLoadPrefs`

### Preferenze attrezzo e peso per esercizio

L'app ora salva una preferenza separata per alcuni esercizi dove cambia il significato del carico.

Chiavi da conoscere:
- `barbell`
- `dumbbells`

Interpretazione:
- `barbell`:
  - su molti esercizi il dato utente puo essere mostrato come `peso totale`
  - nei campi di registrazione puo apparire come `kg dischi`, sommati al `barbellWeight` globale
- `dumbbells`:
  - il valore va letto come `kg per manubrio`

Ordine di priorita reale del dato:
1. `setEntry.m` sulla singola serie, se presente
2. `preferences.exerciseLoadPrefs[exercise].mode`
3. default hardcoded in `src/App.jsx`

## 6. V4 attiva oggi

### G1 Lower A

- Riscaldamento: Dorsiflessione al muro, Posizione del quadrato, Alfredson eccentrico, T-spine rotation in quadrupedia, Ponte monopodalico, Shoulder Tap, Serie avvicinamento squat
- Lavoro: Squat, Stacco Rumeno, Glute Bridge Bilanciere, Leg Curl al Cavo, Ab Wheel
- Stretching: Quadricipiti, Flessori anca, Glutei
- Split: AM `Squat, Stacco Rumeno, Glute Bridge Bilanciere` | PM `Leg Curl al Cavo, Ab Wheel`
- Superset rapido: `Leg Curl al Cavo + Ab Wheel`

### G2 Upper A

- Riscaldamento: T-spine rotation in quadrupedia, FMS spalle, Dorsiflessione al muro, Cable Pull-Apart con rotazione esterna, Shoulder Tap, Serie avvicinamento trazioni prone
- Lavoro: Trazioni, Panca, Pulley, Cable Pull-Apart con rotazione esterna, Curl Bicipiti, Alzate Laterali
- Stretching: Doorway Pec Stretch, Overhead Lat Stretch, Cross-Body Shoulder Stretch, Wrist Flexor/Extensor Stretch
- Split: AM `Trazioni, Panca` | PM `Pulley, Cable Pull-Apart con rotazione esterna, Curl Bicipiti, Alzate Laterali`
- Superset rapido: `Cable Pull-Apart con rotazione esterna + Curl Bicipiti`

### G3 Leggero

- Tipo giorno: `light: true`
- Riscaldamento: Dorsiflessione al muro, Posizione del quadrato, T-spine rotation in quadrupedia, Ponte monopodalico, Cable Pull-Apart con rotazione esterna
- Lavoro: Alzate Laterali, Goblet Squat, Cable Pull-Apart con rotazione esterna, Abduzione laterale IR, Leg Extension al Cavo, TRX Row lento, Push-Up, Leg Curl al Cavo, Hollow Position
- Protocollo anca completo: Half Kneeling Lunge, Half Kneeling Lunge + Reach verticale, Couch Stretch, Figure-Four Supino, Happy Baby, Leg Cradle Supino, Supported Low Lunge
- Superset automatici:
  - Alzate Laterali + Goblet Squat
  - Cable Pull-Apart con rotazione esterna + Abduzione laterale IR
  - Leg Extension al Cavo + TRX Row lento
  - Push-Up + Leg Curl al Cavo

Regole chiave:
- il G3 entra in `activeDays`
- usa le card standard `Esercizi`/`Registra`
- non entra nella calibrazione automatica
- non alimenta i Progressi fondamentali
- il toggle alternativo esiste solo per `Abduzione laterale IR` -> `Clamshell`

### Cardio giovedi

Formati attivi:
- Corsa 30 min zona 2
- HIIT upper + core 30 min
- Corsa lunga 50-60 min zona 2
- Rucking 45-60 min

Note chiave:
- la rotazione A -> B -> C -> D e solo suggerita
- l'HIIT esclude sprint, salti e affondi
- la seduta si registra in `cardioLogs`

### G4 Lower B

- Riscaldamento: Dorsiflessione al muro, Posizione del quadrato, Calf Raises con pallina, T-spine rotation in quadrupedia, Ponte monopodalico, Shoulder Tap, Serie avvicinamento stacco
- Lavoro: Stacco da Terra, Squat Bulgaro, Hyperextension, Abduzione laterale IR
- Stretching: Supine Assisted Leg Pull, Figure-Four Supino, Cat-Cow Lento, Half Kneeling Lunge
- Split: AM `Stacco da Terra, Squat Bulgaro` | PM `Hyperextension, Abduzione laterale IR`
- Superset rapido: `Hyperextension + Abduzione laterale IR`

### G5 Upper B

- Riscaldamento: T-spine rotation in quadrupedia, FMS spalle, Dorsiflessione al muro, Scapular Pull-Up, Cable Pull-Apart con rotazione esterna, Serie avvicinamento military press
- Lavoro: T-bar Row, Military Press, Push-Up, Woodchop, Trazioni Supine, Alzate Laterali
- Stretching: Doorway Pec Stretch, Overhead Triceps Stretch, Overhead Lat Stretch, Band Dislocate Lento
- Split: AM `T-bar Row, Military Press` | PM `Trazioni Supine, Push-Up, Woodchop, Alzate Laterali`
- Superset rapido: `Push-Up + Woodchop`

## 7. Punti chiave per il PT

- `MAX_PROGRESS_EX` oggi contiene: Squat, Stacco da Terra, Panca, Military Press, Trazioni
- `ACCESSORY_PROGRESS_EX` contiene gli accessori attivi dei giorni pesi, compresi Push-Up, Trazioni Supine, T-bar Row e Alzate Laterali
- `CALIBRATION_BODYWEIGHT_EX` contiene: Push-Up, Trazioni, Trazioni Supine, Ab Wheel, Abduzione laterale IR
- `keyLiftNames` nella tab Progressi contiene: Squat, Stacco da Terra, Panca, Military Press, Trazioni, Trazioni Supine, Push-Up, T-bar Row, Stacco Rumeno, Glute Bridge Bilanciere
- esiste una mappa esplicita `EXERCISE_LOAD_MODE_OPTIONS` per gli esercizi che supportano scelta attrezzo/peso

### Esercizi con scelta attrezzo/carico esplicita

Misti `bilanciere/manubri`:
- Squat
- Stacco Rumeno
- Push Press
- Military Press

Solo `bilanciere`:
- Panca
- Front Squat
- Pause Squat
- Stacco da Terra
- Stacco Sumo
- Rematore Bilanciere
- Pendlay Row
- Good Morning
- Glute Bridge Bilanciere

Solo `manubri`:
- Press Manubri da Seduta
- Arnold Press
- Alzate Laterali
- Curl Bicipiti
- Curl Martello
- Floor Press Manubri
- French Press Manubri
- Overhead Extension
- Rematore Manubri
- Single Leg Deadlift
- Walking Lunge
- Affondi
- Squat Bulgaro
- Kick Back Manubri
- Croci Manubri a Terra

## 8. File da aggiornare insieme

Se si modifica la logica tutor o i programmi, mantenere coerenti:
- `../../src/App.jsx`
- `./logica_tutor_pt.md`
- `./workout_plan_v4.csv`
- `./dossier_pt_claude.md`
- `./checklist-verifica-logica-coach.md`

## 9. Sintesi finale per il PT

- la fonte vera resta `src/App.jsx`
- la V4 attiva oggi include G3 leggero dentro il flusso standard, non come card separata
- la modalita guidata e `ON` di default
- la calibrazione compare solo se serve e non si applica al G3
- il cardio del giovedi e tracciato separatamente in `cardioLogs`
- alcuni esercizi ora hanno una preferenza persistente `attrezzo + peso`, quindi `kg`, `kg tot` e `kg per manubrio` non sono equivalenti
