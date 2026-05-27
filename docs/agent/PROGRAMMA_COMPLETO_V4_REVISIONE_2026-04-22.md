# PROGRAMMA COMPLETO V4 — Revisione 2026-04-22

Questo file viene mantenuto solo come riferimento storico della revisione PT del `2026-04-22`.

## Stato attuale

Non usarlo come fonte operativa corrente.

Le fonti da usare oggi sono:
- `../../src/App.jsx`
- `./dossier_pt_claude.md`
- `./logica_tutor_pt.md`
- `./workout_plan_v4.csv`

## Motivo

Il contenuto originale di questo file era una bozza di revisione con:
- domande aperte al PT
- placeholder ancora presenti
- snapshot non piu allineati al programma attivo

Per evitare che un agente usi indicazioni stale, il dettaglio operativo e stato spostato nei file sopra.

## Nota pratica

Se serve ricostruire la versione attiva del programma:
1. leggere `src/App.jsx`
2. confrontare `workout_plan_v4.csv`
3. usare `dossier_pt_claude.md` come sintesi rapida

## Aggiornamento successivo rilevante

Dopo questa revisione storica l'app ha introdotto anche:
- preferenza persistente `attrezzo + peso` per alcuni esercizi
- distinzione esplicita tra `bilanciere` e `manubri`
- salvataggio di questa preferenza dentro `preferences.exerciseLoadPrefs`

Questa logica non e descritta nel documento storico originale.
Per quella parte usare solo:
- `../../src/App.jsx`
- `./dossier_pt_claude.md`
- `./checklist-verifica-logica-coach.md`
