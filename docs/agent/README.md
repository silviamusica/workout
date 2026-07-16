# Contesto Agente

Questa cartella contiene i riferimenti operativi da usare per capire e modificare il programma attivo.

## Priorita delle fonti

Se c'e conflitto tra documenti, l'ordine corretto e:

1. `../../src/App.jsx`
2. `dossier_pt_claude.md`
3. `logica_tutor_pt.md`

Il resto serve come contesto o storico, non come fonte primaria.

## Ordine di lettura consigliato

1. `../../src/App.jsx` — fonte reale dello stato attivo dell'app
2. `dossier_pt_claude.md` — sintesi operativa V4 allineata al codice
3. `logica_tutor_pt.md` — logica coach, calibrazione, guided mode, split, superset, regole `light/cardio`
4. `workout_plan_v4.csv` — scheda strutturata utile, ma da ricontrollare sempre contro `src/App.jsx`
4a. `workout_plan_metabolico.csv` — scheda metabolica (v2) pensata per lavoro a densita e conditioning
5. `esercizi_varianti_obiettivi_guided.md` — pattern, varianti, regressioni e lettura guided
6. `programma_avanzato_v4.md` — teoria e razionale del V4; non sempre aggiornato riga per riga
7. `../../testi-coaching-sessione-v4-ui-ready.md` — testi coaching/stretching per la UI

## File secondari ancora utili

- `checklist-verifica-logica-coach.md` — checklist tecnica aggiornata per controllare costanti e comportamento coach
- `tecniche_preliminari.md` — regole del livello Tecniche preliminari
- `workout_plan_beginner.csv` — scheda principiante legacy
- `workout_plan_basics.csv` — scheda Tecniche preliminari legacy
 - `workout_plan_metabolico.csv` — scheda metabolica (v2) disponibile per test e allineamento

## File storico

- `PROGRAMMA_COMPLETO_V4_REVISIONE_2026-04-22.md` — snapshot storico della revisione PT del 2026-04-22; non usarlo come fonte operativa corrente

## File da riallineare

- `workout_plan_v4.csv` — contiene ancora alcune entry non allineate all'app
- `programma_avanzato_v4.md` — contiene snapshot e note placeholder non piu coerenti in tutti i punti

## Nota

I report temporanei, handoff vecchi e controlli puntuali vengono rimossi quando non sono piu fonte affidabile. Se c'e conflitto, prevale sempre `src/App.jsx`.

## Aggiornamento 2026-05-27

Da questa data l'app gestisce anche una preferenza persistente per `attrezzo + peso` a livello di singolo esercizio.

Impatto pratico per l'agente:
- non assumere piu che un esercizio usi sempre e solo un carico generico in kg
- distinguere tra:
  - `bilanciere` con logica `peso totale` o `dischi + bilanciere base`
  - `manubri` con logica `kg per manubrio`
- quando controlli backup, stato persistito o cloud sync, verificare anche `preferences.exerciseLoadPrefs`

File da riallineare quando questa logica cambia:
- `../../src/App.jsx`
- `dossier_pt_claude.md`
- `checklist-verifica-logica-coach.md`
