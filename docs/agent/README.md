# Contesto Agente

Questa cartella contiene solo i file indispensabili per capire e modificare i programmi presenti nell'app.

Per un controllo specifico della `V4`, l'ordine migliore oggi è:

1. `logica_tutor_pt.md`
2. `workout_plan_v4.csv`
3. `programma_avanzato_v4.md`
4. `dossier_pt_claude.md`

Ordine consigliato di lettura:

1. `dossier_pt_claude.md`
   Dossier unico per agente PT esterno: livelli, programmi, logica tutor, calibrazione, guided mode, dati e file da controllare.

2. `logica_tutor_pt.md`
   Logica tutor attuale dell'app: calibrazione, modalità guidata, RIR, recuperi, progressione, export.

3. `programma_avanzato_v4.md`
   Logica completa del programma avanzato V4, teoria e struttura giorno per giorno.

4. `tecniche_preliminari.md`
   Regole e vincoli del livello `Tecniche preliminari`, con focus su competenze, UI e collegamenti agli esercizi.

5. `workout_plan_v4.csv`
   Scheda CSV del programma avanzato V4.

6. `workout_plan_beginner.csv`
   Scheda CSV del programma principiante.

7. `workout_plan_basics.csv`
   Scheda CSV del livello `Tecniche preliminari`.

File applicativo principale:

- `../../src/App.jsx`

Questa cartella sostituisce i vecchi file sparsi in root.
