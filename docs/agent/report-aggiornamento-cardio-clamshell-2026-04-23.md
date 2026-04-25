# Report aggiornamento cardio programmato + Clamshell

Data controllo: 2026-04-23

Brief applicato: `/Users/silvia/Downloads/brief-cardio-programmato-clamshell.md`

## Implementato

- Cardio del giovedì aggiornato con 4 formati sempre selezionabili: A corsa 30 min zona 2, B HIIT upper + core 30 min, C corsa lunga 50-60 min zona 2, D rucking 45-60 min con zaino 15-20 kg.
- Rotazione A/B/C/D gestita come suggerimento visivo, non come blocco della scelta.
- HIIT upper + core inserito con circuito dedicato e timer automatico 30s lavoro / 15s pausa, selezionabile su 4 o 5 giri.
- Vincoli HIIT esplicitati: niente sprint, salti, affondi, squat jump, corsa in salita o lavoro gambe pesante.
- Mobilità post-cardio lasciata invariata.
- G3 aggiornato a 11 serie totali: Alzate Laterali 3, Band Pull-Apart 2, Abduzione laterale IR/Clamshell 2, Goblet Squat 2, TRX Row lento 2.
- Abduzione laterale IR del G3 ha toggle persistente verso Clamshell tramite `localStorage` (`wt-exercise-alt-mode`).
- Nel G4 l'accessorio resta fisso su Abduzione laterale IR e non ha alternativa.
- Liste progressione allineate: gli esercizi esclusivi G3 non entrano in `ACCESSORY_PROGRESS_EX`.
- Cleanup eseguito: rimossi tutti i `workout-backup-*` precedenti, la cartella `backups/`, il backup storico `src/App.backup_pre_beginner_mode_2026-03-26.jsx`, il controllo brief vecchio del 2026-04-21 e gli asset/riferimenti del vecchio `Curl al Cavo Basso` non più attivo.

## Tempi controllati

- Cardio A: 30 min + mobilità post-cardio.
- Cardio B HIIT: 30 min totali, timer 30/15 su 4-5 giri.
- Cardio C: 50-60 min + mobilità post-cardio.
- Cardio D: 45-60 min + mobilità post-cardio.
- G3: ~35 min, coerente con 5 min riscaldamento + 11 serie leggere + protocollo anca 8-10 min.

## File aggiornati

- `src/App.jsx`
- `docs/agent/workout_plan_v4.csv`
- `docs/agent/programma_avanzato_v4.md`
- `docs/agent/logica_tutor_pt.md`
- `docs/agent/dossier_pt_claude.md`
- `docs/agent/esercizi_varianti_obiettivi_guided.md`
- `docs/agent/PROGRAMMA_COMPLETO_V4_REVISIONE_2026-04-22.md`
- `docs/agent/checklist-verifica-logica-coach.md`
- `docs/agent/report-aggiornamento-cardio-clamshell-2026-04-23.md`

## Verifiche

- `npm run build`: passato.
- `git diff --check`: passato.
- `npm run lint`: non passato per problemi già presenti e non collegati all'aggiornamento, inclusi file in `backups/`, `vite.config.js` e molte variabili/empty catch esistenti in `src/App.jsx`.

## Note residue

- I backup workout precedenti sono stati cancellati come richiesto.
- La build segnala solo il warning Vite sui chunk oltre 500 kB, non bloccante.
