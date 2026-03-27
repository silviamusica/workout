# Controllo Agente: Tecniche Preliminari

Questo file riassume la nuova modalita `Tecniche preliminari` introdotta nell'app e le scelte da mantenere coerenti in eventuali modifiche future.

## Obiettivo del livello

`Tecniche preliminari` e un livello separato, precedente a `Principiante`.

Serve a costruire 7 competenze base:
- colonna neutra + brace
- hip hinge
- controllo del bacino
- squat pattern base
- stabilita core anti-movimento
- controllo scapolare
- pattern base di spinta e tirata

Non e una scheda di progressione carichi. Non e una fase di calibrazione. Non deve sembrare una scheda "allenante" come principiante o avanzata.
Il principio chiave da mantenere e questo: queste competenze non servono a "sentire" muscoli isolati, ma a muovere carichi e corpo in modo efficiente, stabile e ripetibile.

## Regole UI da mantenere

### Programmi selezionabili

In Home i livelli sono:
- `Tecniche preliminari`
- `Principiante`
- `Ipertrofia avanzato`

### Modalita Tecniche preliminari

Quando il livello attivo e `Tecniche preliminari`:

- non deve comparire la tab `Progressi`
- non deve comparire `Calibrazione`
- non devono comparire registrazione pesi, storico, andamento o suggerimenti di progressione
- non deve comparire il box `Come leggere la serie`
- non devono comparire badge progressione tipo `Nessun dato`
- non deve comparire il chip `Tecniche` negli esercizi, perche gli esercizi stessi sono gia tecniche

### Navigazione

Le tab principali disponibili in questo livello devono restare:
- `Scheda`
- `Teoria`
- `Esercizi`

In Home, gli accessi rapidi devono escludere `Progressi`.

## Teoria: struttura corretta

La teoria del livello preliminare deve parlare solo di:
- tecniche preliminari da acquisire
- perche servono
- in quali esercizi future servono
- quando passare al livello `Principiante`
- come usare questo livello senza inseguire carichi
- come migliorano la trasmissione di forza e la qualita dei pattern

Non devono comparire contenuti da scheda avanzata:
- double progression
- mesociclo
- calibrazione
- andamento dei carichi
- gestione progressi
- deload come focus centrale

Le sezioni da mantenere sono:
- `🎯 Tecniche preliminari`
- `📌 Perche servono e quando passare oltre`
- `🗂️ Come usare il livello preliminare`

## Le 7 competenze da mantenere

### 1. Colonna neutra + brace addominale
- immagine di riferimento: `Breathing + Brace supino`
- link video aggiornato: `https://www.youtube.com/watch?v=izT3xD8X0WA`
- deve citare anche la progressione Rippetoe: prono → in piedi → mezzo squat
- va spiegata come base per rigidita del tronco e trasmissione di forza, non come semplice "pancia dura"

### 2. Hip hinge
- immagine di riferimento: `Test del bastone`
- deve includere il test del bastone a 3 punti di contatto: testa, dorsale alta, sacro
- va presentato come skill centrale della catena posteriore, piu importante dei curl femorali per imparare a usare glutei e femorali

### 3. Controllo del bacino
- immagine di riferimento: `Pelvic Tilt a terra`
- deve includere la distinzione tra anteroversione e retroversione a comando

### 4. Squat pattern base
- immagine di riferimento: `Goblet Squat`
- deve citare la tenuta in buca e i gomiti contro le ginocchia
- dove compare `Goblet Squat`, deve esserci un link diretto a cosa sia

### 5. Stabilita core anti-movimento
- immagine di riferimento: `Dead Bug`
- deve includere dead bug, bird dog e varianti coerenti
- il core va spiegato come trasmissione di forza tra arti inferiori, tronco e carico, non come "addominali"

### 6. Controllo scapolare
- immagine di riferimento: `Band Pull-Apart con elastico`
- deve essere collegato anche al riscaldamento upper della scheda avanzata
- deve citare che nei giorni upper l'attivazione scapolare avviene tramite:
  - scapular pull-up
  - band pull-apart
  - retrazione scapolare al muro
- non va descritto solo come posizione scapolare, ma come controllo dinamico durante spinte e tirate

### 7. Pattern base di spinta e tirata
- immagine di riferimento: `Push-Up`
- non usare `lat machine controllata` come prerequisito obbligatorio se non coerente con attrezzi disponibili
- usare invece:
  - push-up su rialzo
  - floor press manubri
  - trazioni assistite con elastico
  - trazioni negative
  - pulley leggero

## Mappa competenze → esercizi

Le competenze preliminari devono essere richiamate negli esercizi di:
- `Principiante`
- `Ipertrofia avanzato`

Il richiamo deve restare nei dettagli dell'esercizio e nella libreria `Esercizi`, ma non deve affollare troppo la riga chiusa della scheda.

Esempi chiave:
- `Squat` → brace, bacino, squat pattern
- `Stacco da Terra` → brace, hip hinge
- `Stacco Rumeno` → brace, hip hinge
- `Trazioni` → brace, scapole, pattern tirata
- `Panca` → brace, scapole, pattern spinta
- `Push-Up` → brace, core, pattern spinta
- `Hip Thrust Bilanciere` → brace, controllo del bacino
- `Rematore Manubri / T-bar Row / Pulley` → hip hinge o scapole o pattern tirata secondo il caso

## Immagini e media gia collegati

Sono state aggiunte e collegate immagini dedicate per:
- `Breathing + Brace supino`
- `Bird Dog`
- `Dead Bug`
- `Glute Bridge`
- `Goblet Squat`
- `Band Pull-Apart con elastico`

Le competenze preliminari devono mostrare un'immagine gia nella lista, non solo dentro il dettaglio aperto.

## Comportamento delle card esercizio in questo livello

Nel livello `Tecniche preliminari` le card devono essere essenziali:
- immagine a fianco
- nome esercizio
- serie / tempo
- obiettivo tecnico
- errori da evitare

Da escludere:
- registrazione serie
- progressi
- storico
- calibrazione
- andamento carichi

## Stato attuale da preservare

### Home
- accessi rapidi senza `Progressi`

### Teoria
- contenuti solo coerenti con il livello preliminare

### Scheda
- nessuna calibrazione
- nessun tracciamento progressi

### Esercizi
- immagini presenti
- link diretti alle competenze utili

## File principali coinvolti

- `./src/App.jsx`
- `./workout_plan_beginner.csv`
- `./workout_plan.csv`
- `./documento_per_agente_v4.md`
