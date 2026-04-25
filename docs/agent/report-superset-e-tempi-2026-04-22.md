# Report superset e tempi — 2026-04-22

## Obiettivo

Allineare app e documenti alla revisione finale V4, rinominando i blocchi rapidi in `superset`, rendendo gli accoppiamenti visibili a colpo d'occhio e verificando i tempi di seduta.

## Modifiche applicate

### App (`src/App.jsx`)

- Modalità `superset` rinominata in UI:
  - da `accessori in coppia`
  - a `superset`
- Le coppie del giorno vengono mostrate esplicitamente nel selettore formato:
  - nome coppia
  - recupero
  - nota extra sulla serie singola finale, quando presente
- Badge e pannelli interni rinominati:
  - `Coppia rapida` -> `Superset`
  - `Coppia 1/2` -> `Superset 1/2`
- Accoppiamenti attivi confermati:
  - G1: `Leg Curl al Cavo + Ab Wheel` — recupero `60s` — nota `4a serie Leg Curl da sola`
  - G2: `Band Pull-Apart con rotazione esterna + Curl Bicipiti` — recupero `60s`
  - G4: `Hyperextension + Abduzione laterale IR` — recupero `60s` — nota `4a serie Hyperextension da sola`
  - G5: `Push-Up + Woodchop` — recupero `45s` — nota `4a serie Push-Up da sola`
- Split AM/PM corretto:
  - G1 PM contiene solo il superset
  - G5 PM mostra `Trazioni Supine`, poi il superset, poi `Alzate Laterali`
- G3 coerente col brief finale:
  - niente coach testuale nella card light
  - `Alzate Laterali` a `RPE 8`
- Sequenza settimana coerente:
  - `G1`, `G2`, `G3`, `Cardio`, `G4`, `G5`, `Riposo`
- Cardio aggiornato con stima visibile:
  - `dur: 30-75 min`
  - `tEst: 45`

### Documenti aggiornati

- `docs/agent/workout_plan_v4.csv`
  - focus e ordine giorni riallineati
  - G3 aggiornato con `Goblet Squat`
  - G5 aggiornato con `Alzate Laterali`
  - cardio spostato prima del riposo
- `docs/agent/PROGRAMMA_COMPLETO_V4_REVISIONE_2026-04-22.md`
  - terminologia `superset` resa coerente
  - riepilogo AM/PM corretto
  - domande di controllo per l'agente corrette
  - G3 corretto con `Goblet Squat`
  - G5 corretto con `Alzate Laterali` separate dal superset

## Verifica tempi

Tempi coerenti dopo il controllo, aggiornati il 2026-04-23 dopo l'inserimento delle serie di avvicinamento su Ab Wheel, Curl Bicipiti e Hyperextension:

- G1: `~85 min`
  - coerente con 3 blocchi singoli pesanti + 1 superset finale, Ab Wheel a 5 serie totali
- G2: `~90 min`
  - coerente con 3 esercizi principali + 1 superset finale, Curl Bicipiti a 5 serie totali
- G3: `~35 min`
  - coerente con lavoro leggero + protocollo anca separato
- Cardio: `30-75 min` + mobilità `~10 min`
  - impostato `tEst ~45 min` come valore medio visibile in app
- G4: `~90 min`
  - coerente con stacco, split squat e superset finale, Hyperextension a 5 serie totali
- G5: `~80 min`
  - coerente con 2 fondamentali, 1 trazione separata, 1 superset e chiusura alzate

## Stato finale

- Superset rinominati e leggibili a colpo d'occhio: `OK`
- Accoppiamenti corretti in app: `OK`
- Accoppiamenti corretti nei documenti repo: `OK`
- Tempi controllati e coerenti: `OK`
- Brief originale in `Downloads`: `non ancora aggiornato direttamente`
  - richiede permesso di scrittura fuori dal workspace
