# Checklist verifica logica coach

Da eseguire dopo ogni modifica alla scheda V4 o alla logica tutor.

Fonte primaria:
- `../../src/App.jsx`

## Esercizi attivi V4

### Giorni pesi

- G1: Squat, Stacco Rumeno, Glute Bridge Bilanciere, Leg Curl al Cavo, Ab Wheel
- G2: Trazioni, Panca, Pulley (alias: Rematore Manubri), Cable Pull-Apart con rotazione esterna, Curl Bicipiti, Alzate Laterali
- G4: Stacco da Terra, Squat Bulgaro, Hyperextension, Abduzione laterale IR
- G5: T-bar Row, Military Press, Push-Up, Woodchop, Trazioni Supine, Alzate Laterali

### Giorno leggero G3

- G3: Alzate Laterali, Goblet Squat, Cable Pull-Apart con rotazione esterna, Abduzione laterale IR, Leg Extension al Cavo, TRX Row lento, Push-Up, Leg Curl al Cavo, Hollow Position

Gli esercizi esclusivi del G3 non devono finire in split AM/PM o Progressi fondamentali.

## Cose da verificare

### 1. Liste progressione

- `MAX_PROGRESS_EX`: Squat, Stacco da Terra, Panca, Military Press, Trazioni
- `ACCESSORY_PROGRESS_EX`: Stacco Rumeno, Glute Bridge Bilanciere, Leg Curl al Cavo, Pulley (alias: Rematore Manubri), Cable Pull-Apart con rotazione esterna, Curl Bicipiti, Squat Bulgaro, Hyperextension, Abduzione laterale IR, Push-Up, Trazioni Supine, Woodchop, T-bar Row, Alzate Laterali
- `CORE_PROGRESS_EX`: Ab Wheel

### 2. Calibrazione

- `CALIBRATION_BODYWEIGHT_EX`: Push-Up, Trazioni, Trazioni Supine, Ab Wheel, Abduzione laterale IR
- `usesElasticScale`: solo Trazioni, Trazioni Supine
- `isCalibrationAllowedDay(day)`: deve escludere `cardio`, `rest`, `light`

### 3. Barbell e tipi calibrazione

- `BARBELL_TOTAL_EX` deve includere: Squat, Panca, Military Press, Stacco da Terra, Stacco Rumeno, Glute Bridge Bilanciere
- `EXERCISE_LOAD_MODE_OPTIONS` deve riflettere gli esercizi con preferenza esplicita di attrezzo/carico:
  - misti `bilanciere/manubri`: Squat, Stacco Rumeno, Push Press, Military Press
  - solo `bilanciere`: Panca, Front Squat, Pause Squat, Stacco da Terra, Stacco Sumo, Rematore Bilanciere, Pendlay Row, Good Morning, Glute Bridge Bilanciere
  - solo `manubri`: Press Manubri da Seduta, Arnold Press, Alzate Laterali, Curl Bicipiti, Curl Martello, Floor Press Manubri, French Press Manubri, Overhead Extension, Rematore Manubri, Single Leg Deadlift, Walking Lunge, Affondi, Squat Bulgaro, Kick Back Manubri, Croci Manubri a Terra
- `getExerciseLoadModes` non deve dipendere da helper definiti solo dentro il componente React
- `getStoredSetLoadMode` deve leggere:
  - `setEntry.m` se presente
  - altrimenti `exerciseLoadPrefs[exercise].mode`
  - altrimenti il default della mappa globale
- `getCalibrationType`:
  - `weighted`: Squat, Panca, Military Press, Stacco da Terra, Stacco Rumeno, Glute Bridge Bilanciere, T-bar Row, Hyperextension
  - `dumbbell`: Squat Bulgaro, Curl Bicipiti, Alzate Laterali
  - `cable`: Pulley (alias: Rematore Manubri), Leg Curl al Cavo, Woodchop, Cable Pull-Apart con rotazione esterna, Leg Extension al Cavo
  - `band-assist`: Trazioni, Trazioni Supine
  - `bodyweight`: Push-Up, Ab Wheel, Abduzione laterale IR, TRX Row lento, Hollow Position

### 4. Classificazione guided

- `getGuidedExerciseClass`
  - `heavy`: Squat, Stacco da Terra, Panca, Military Press, Trazioni, Trazioni Supine, T-bar Row, Stacco Rumeno, Glute Bridge Bilanciere, Pulley
  - `mono`: Curl Bicipiti, Woodchop, Abduzione laterale IR, Cable Pull-Apart con rotazione esterna, Leg Curl al Cavo, Alzate Laterali
  - `compound`: il resto dei giorni pesi

### 5. Incrementi guided

- `+2.5 kg`: weighted di default
- `+1 kg`: Hyperextension
- `+1 kg per manubrio`: Squat Bulgaro, Curl Bicipiti, Alzate Laterali
- `+1 scatto cavo`: Pulley, Leg Curl al Cavo, Woodchop, Cable Pull-Apart con rotazione esterna, Leg Extension al Cavo
- `+1 tacca elastico`: Trazioni, Trazioni Supine
- `+1 rip per serie`: Push-Up, Ab Wheel, Abduzione laterale IR, TRX Row lento

### 6. Split e superset

- `V4_DAY_SPLIT_PLAN`
  - G1 AM: Squat, Stacco Rumeno, Glute Bridge Bilanciere
  - G1 PM: Leg Curl al Cavo, Ab Wheel
  - G2 AM: Trazioni, Panca
  - G2 PM: Pulley, Cable Pull-Apart con rotazione esterna, Curl Bicipiti, Alzate Laterali
  - G4 AM: Stacco da Terra, Squat Bulgaro
  - G4 PM: Hyperextension, Abduzione laterale IR
  - G5 AM: T-bar Row, Military Press
  - G5 PM: Trazioni Supine, Push-Up, Woodchop, Alzate Laterali

- `FAST_MODE_SUPERSETS`
  - G1: Leg Curl al Cavo + Ab Wheel
  - G2: Cable Pull-Apart con rotazione esterna + Curl Bicipiti
  - G3: Alzate Laterali + Goblet Squat
  - G3: Cable Pull-Apart con rotazione esterna + Abduzione laterale IR
  - G3: Leg Extension al Cavo + TRX Row lento
  - G3: Push-Up + Leg Curl al Cavo
  - G4: Hyperextension + Abduzione laterale IR
  - G5: Push-Up + Woodchop

### 7. Progressi

- `keyLiftNames`: Squat, Stacco da Terra, Panca, Military Press, Trazioni, Trazioni Supine, Push-Up, T-bar Row, Stacco Rumeno, Glute Bridge Bilanciere
- gli esercizi esclusivi del G3 non devono comparire qui

### 8. Giorno leggero G3

Verificare che:

1. il giorno abbia `light: true`
2. entri in `activeDays`
3. usi le card standard `Esercizi`/`Registra`
4. resti fuori dalla calibrazione automatica
5. usi solo i superset definiti in `FAST_MODE_SUPERSETS["Giorno 3"]`

### 9. Persistenza preferenze attrezzo/peso

Verificare che:

1. `exerciseLoadPrefs` venga letto da `localStorage`
2. `exerciseLoadPrefs` venga risalvato in `localStorage`
3. `exerciseLoadPrefs` entri nello snapshot tramite `preferences.exerciseLoadPrefs`
4. il reset totale rimuova anche `wt-exercise-load-prefs`
5. i set storici possano conservare `m: "barbell"` o `m: "dumbbells"` senza rompere riepiloghi e progressi

## Procedura

Per ogni punto:
1. cerca la costante o funzione nel codice
2. confronta con la lista sopra
3. segnala mismatch o esercizi legacy rimasti dentro
4. correggi codice e documenti insieme
