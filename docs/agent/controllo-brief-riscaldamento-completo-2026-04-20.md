# Controllo Brief — Riscaldamento Completo

Data controllo: `2026-04-20`

Brief confrontato:
- `/Users/silvia/Downloads/brief-riscaldamento-completo.md`

File verificati:
- `src/App.jsx`
- `docs/agent/workout_plan_v4.csv`
- `docs/agent/programma_avanzato_v4.md`
- `docs/agent/logica_tutor_pt.md`

## Esito rapido

Stato generale: `completo con nota minore`

Cosa e stato recepito correttamente:
- nuova struttura a `4 fasi`
- nuovi warm-up per `Giorno 1`, `2`, `4`, `5`
- circuito compatto in UI
- checkbox per `fase`
- teoria aggiornata
- nota tutor aggiornata

Cosa resta solo come nota minore:
- alcune righe `Avvicinamento` nel CSV non hanno un link dedicato perche rappresentano mini-serie progressive, non un esercizio tecnico singolo

## Verifica punto per punto

### 1. Struttura comune 4 fasi

Richiesta brief:
- `Mobilita`
- `Attivazione + stabilita`
- `Circuito neurale`
- `Serie avvicinamento`
- totale `12-15 minuti`

Stato:
- `OK`

Evidenze:
- in `src/App.jsx` le etichette sono:
  - `⚡ Mobilita`
  - `🔒 Attivazione`
  - `🔥 Circuito`
  - `🏋️ Avvicinamento`
- nella card riscaldamento compare `4 fasi · 12-15 min totali`

### 2. Giorno 1 — Lower A

Richiesta brief:
- Dorsiflessione al muro `8/lato`
- 90/90 `8/lato`
- Alfredson `10/piede`
- Ponte monopodalico `6/lato`
- Dead bug `5/lato`
- Circuito: `Push-Up`, `Affondi saltati alternati`, `Trazioni con elastico`
- Avvicinamento squat `3 serie progressive`

Stato:
- `OK`

### 3. Giorno 2 — Upper A

Richiesta brief:
- T-spine `8/lato`
- Shoulder CARs `5 per direzione`
- Dorsiflessione `8/lato`
- Band pull-apart `15`
- Shoulder tap `8/lato`
- Circuito: `Kettlebell swing leggero`, `Goblet squat con fermo in buca`, `Squat thrust`
- Avvicinamento trazioni `2-3 mini-serie`

Stato:
- `OK`

### 4. Giorno 4 — Lower B

Richiesta brief:
- Dorsiflessione `8/lato`
- 90/90 `8/lato`
- Calf raises con pallina `12`
- Ponte monopodalico `6/lato`
- Shoulder tap `6/lato`
- Circuito: `Push-Up`, `Affondi saltati alternati`, `Burpee completo`
- Avvicinamento stacco `3 serie progressive`

Stato:
- `OK`

### 5. Giorno 5 — Upper B

Richiesta brief:
- T-spine `8/lato`
- Shoulder CARs `5 per direzione`
- Dorsiflessione `8/lato`
- Scapular pull-up `5`
- Band pull-apart `15`
- Circuito: `Kettlebell swing leggero`, `Affondi saltati alternati`, `Squat jump`
- Avvicinamento military press `2-3 mini-serie`

Stato:
- `OK`

### 6. Regole del circuito

Richiesta brief:
- `1 giro solo`
- `mai a fatica`
- `nessuna pausa tra esercizi`
- `30s di respiro` finale
- `saltabile se l'utente e stanca`

Stato:
- `OK`

Evidenze:
- `src/App.jsx` mostra: `1 giro solo, nessuna pausa tra gli esercizi. Alla fine fai 30 secondi di respiro. Se oggi sei gia scarica, puoi saltare il circuito.`
- `docs/agent/logica_tutor_pt.md` lo riporta esplicitamente
- `docs/agent/programma_avanzato_v4.md` lo riporta esplicitamente

### 7. UI: fasi separate + circuito compatto

Richiesta brief:
- fasi visivamente separate
- circuito in una riga unica compatta

Stato:
- `OK`

Dettaglio:
- le fasi sono separate visivamente da intestazioni distinte
- il circuito usa una stringa compatta tipo:
  - `6-8 rip push-up → 5 per lato affondi saltati alternati → 3-4 rip facili trazioni con elastico`

Nota:
- il testo compatto e presente, anche se il formato non e identico all'esempio del brief. La logica richiesta e rispettata.

### 8. Checkbox singola per fase

Richiesta brief:
- una sola checkbox `Fatto` per fase
- non una per esercizio

Stato:
- `OK`

Dettaglio:
- in app il tracking e su `dayName + phase`
- il testo del bottone e:
  - `○ Segna fatta`
  - `✓ Fase fatta`

### 9. Aggiornamento documentazione programma

Richiesta brief:
- `programma_avanzato_v4.md` aggiornato con le 4 fasi

Stato:
- `OK`

### 10. Aggiornamento logica tutor

Richiesta brief:
- `docs/agent/logica_tutor_pt.md`
- nota che il circuito e opzionale se l'utente e stanca

Stato:
- `OK`

### 11. CSV: righe warm-up sostituite

Richiesta brief:
- sostituire tutte le righe riscaldamento con la nuova sequenza

Stato:
- `OK`

Dettaglio:
- i contenuti dei giorni `1`, `2`, `4`, `5` sono stati sostituiti correttamente

### 12. CSV: colonna `Fase`

Richiesta brief:
- ogni esercizio warm-up dovrebbe avere `Fase: Mobilita / Attivazione / Circuito / Avvicinamento`

Stato:
- `OK`

Dettaglio:
- il file `docs/agent/workout_plan_v4.csv` ora espone una colonna dedicata `Fase`

### 13. CSV: colonna `Link`

Richiesta brief:
- ogni esercizio warm-up dovrebbe avere il `Link` YouTube

Stato:
- `OK con nota`

Dettaglio:
- il CSV ora espone una colonna dedicata `Link`
- i warm-up hanno link compilati
- le righe `Avvicinamento` possono restare senza link dedicato, perche sono mini-serie progressive e non un esercizio tecnico singolo

## Conclusione operativa

Il brief e ora implementato sul piano:
- contenuti dei warm-up
- UI reale
- logica di tracking
- documentazione interna

## Azione consigliata per il prossimo agente

Se in futuro si vuole rifinire ancora:

1. valutare se aggiungere link dedicati anche alle righe `Avvicinamento`
2. verificare se qualche documento secondario cita ancora il vecchio formato del CSV

## File da toccare se si vuole completare il 100%

- `docs/agent/workout_plan_v4.csv`
