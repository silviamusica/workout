# Handoff App Allenamento

Questo file serve ai prossimi agenti che lavoreranno su questo progetto.

## Stato attuale

- L'app e stata semplificata per uso reale quotidiano.
- La modalita attiva e una sola: `v4`.
- In UI il programma mostrato e solo `Ipertrofia avanzato`.
- `Tecniche preliminari` e `Principiante` non sono piu selezionabili.
- Import, restore e preferenze salvate vengono normalizzati a `v4`.
- La Home vecchia e stata rimossa.
- La Scheda e la schermata centrale.
- La Teoria e stata appiattita in una pagina unica, senza le vecchie sotto-tab principali.
- `Coach attivo` e il solo sistema guidato attivo ed e ON di default.

## Backup da usare per tornare indietro

Prima della pulizia verso `v4-only` e stato creato questo backup completo del file principale:

- [App.pre-v4-only-backup-2026-04-17.jsx](/Users/silvia/SVILUPPO/workout-tracker/backups/App.pre-v4-only-backup-2026-04-17.jsx)

Questo backup rappresenta il punto piu semplice per recuperare la versione precedente con:

- modalita `basics`
- modalita `beginner`
- logica multi-programma ancora attiva
- file `src/App.jsx` prima della rimozione operativa

## Come ripristinare tutto

Se il target e tornare davvero alla versione precedente, il percorso consigliato e:

1. Leggere questo handoff.
2. Aprire il backup `backups/App.pre-v4-only-backup-2026-04-17.jsx`.
3. Confrontarlo con `src/App.jsx`.
4. Sostituire `src/App.jsx` con il backup, oppure reintegrare solo i blocchi necessari.
5. Eseguire `npm run build`.

Non fare affidamento solo sui dati ancora presenti nel file corrente: alcune parti legacy esistono ancora, ma l'app e stata resa `v4-only` a livello di comportamento, restore e import.

## Cosa e stato tolto o neutralizzato

- Selezione programma nelle impostazioni.
- Uso attivo di `basics` e `beginner`.
- Normalizzazione dei salvataggi su programmi multipli.
- Vecchia Home come schermata intermedia.
- Vecchie sotto-viste `workoutView` della Home.
- Struttura a tab annidate della Teoria.
- `Recuperi guidati` come concetto separato.

## Cosa e ancora presente ma non attivo

Nel file corrente possono restare contenuti o dataset legacy non piu raggiungibili direttamente dalla UI, ad esempio:

- `DAYS_BASICS`
- `DAYS_BEGINNER`
- blocchi `PRELIM_*`
- blocchi `BEGINNER_*`

Questi non devono essere interpretati come feature ancora supportate. Sono residui di codice/contenuto non ancora eliminati del tutto.

## File toccati in questa fase

- [src/App.jsx](/Users/silvia/SVILUPPO/workout-tracker/src/App.jsx)
- [backups/App.pre-v4-only-backup-2026-04-17.jsx](/Users/silvia/SVILUPPO/workout-tracker/backups/App.pre-v4-only-backup-2026-04-17.jsx)

## Cose importanti da non rompere

- Sync Supabase e conflitti locale/cloud.
- Export/import JSON e CSV.
- Salvataggio automatico.
- `Coach attivo` di default.
- Timer mobile.
- Flusso Scheda unificato con stretching inline.

## Regola pratica per i prossimi agenti

Se la richiesta e "semplificare ancora", lavorare solo su `v4`.

Se la richiesta e "riportare indietro basics o beginner", partire dal backup in `backups/` invece di tentare di ricostruire a mano dai residui del file corrente.
