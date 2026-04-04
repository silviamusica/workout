# Esercizi, Varianti, Obiettivi e Guida Sessione

Questo file serve al tuo agente personal trainer come riferimento operativo rapido.

Obiettivo:
- controllare gli esercizi dell'app con il loro pattern reale
- distinguere variante, regressione e alternativa senza confonderle
- capire quale obiettivo tecnico o allenante ha ogni variante
- leggere correttamente la `Modalità guidata` senza attribuirle logiche che oggi l'app non ha

File applicativi da tenere allineati:
- `../../src/App.jsx`
- `../../src/data/exerciseWorkflow.js`
- `../../src/data/exerciseGuidePatches.json`
- `../../src/data/exerciseGuidePatchesGobletBird.json`

## Come deve ragionare l'agente PT

Quando controlla un esercizio, l'agente deve separare 4 cose:

1. `Pattern`
- squat
- hinge
- spinta orizzontale
- spinta verticale
- tirata orizzontale
- tirata verticale
- core / anti-movimento
- unilaterale / affondo

2. `Obiettivo della variante`
- costruire forza
- costruire ipertrofia
- imparare il pattern
- ridurre richiesta tecnica
- ridurre stress articolare
- aumentare stabilita o controllo
- sostituire un attrezzo non disponibile

3. `Ruolo nella scheda`
- lift prioritario
- accessorio principale
- accessorio tecnico
- regressione
- alternativa per attrezzatura

4. `Criterio di coerenza`
- la variante deve mantenere lo stesso pattern principale
- se cambia davvero il pattern, non va trattata come semplice variante ma come sostituzione

## Regole di lettura: variante, regressione, alternativa, progressione

### Variante

Stesso pattern, enfasi diversa.

Esempi:
- `Squat` → `Front Squat`, `Pause Squat`
- `Panca` → `Floor Press`, `Push-Up`
- `Trazioni` → `Trazioni supine`

### Regressione

Stesso pattern ma richiesta tecnica o carico piu bassa.

Esempi:
- `Push-Up` → `Push-Up ginocchia`, `Push-Up su rialzo`
- `Trazioni` → `Lat machine`, `elastico assistito`
- `Split squat` → `TRX split squat`

### Alternativa

Serve soprattutto quando cambia l'attrezzo disponibile o quando una variante equivalente e piu sostenibile.

Esempi:
- `Hip Thrust Bilanciere` → `Hip Thrust al cavo`
- `Pulley` → `Rematore elastico`
- `Panca manubri` → `Cable chest press`

### Progressione

Stesso pattern ma richiesta piu alta di stabilita, carico o ROM.

Esempi:
- `Goblet Squat` → `Squat`
- `Push-Up su rialzo` → `Push-Up a terra` → `Push-Up declino`
- `Glute Bridge` → `Hip Thrust Bilanciere`

## Mappa rapida dei fondamentali e delle varianti utili

### Squat

Pattern:
- dominante ginocchio / squat

Obiettivo base:
- forza e ipertrofia di quadricipiti e glutei
- brace sotto carico
- coordinazione caviglia-anca-tronco

Varianti da riconoscere:
- `Front Squat`
  - piu quadricipiti
  - piu richiesta di busto verticale
  - utile se vuoi pulizia tecnica e meno leva sulla schiena
- `Pause Squat`
  - forza nel punto critico
  - controllo della buca
  - utile se perdi assetto in inversione
- `Goblet Squat`
  - apprendimento pattern
  - aiuta brace e busto verticale
  - regressione tecnica molto utile
- `TRX Squat`
  - regressione per equilibrio e profondita
  - non va letta come variante forza
- `Squat Bulgaro`
  - variante unilaterale
  - piu stabilita e lavoro gamba singola
  - non sostituisce perfettamente uno squat bilaterale heavy

### Stacco da Terra

Pattern:
- hinge / catena posteriore

Obiettivo base:
- forza globale
- carico alto su glutei, femorali, erettori e dorsali
- rigidita del tronco

Varianti da riconoscere:
- `Stacco Rumeno`
  - enfasi femorali e controllo eccentrico
  - meno partenza da terra
  - piu ipertrofia tecnica che forza pura
- `Stacco Sumo`
  - piu quad e adduttori
  - meno leva sulla schiena
  - utile se la leva convenzionale e sfavorevole
- `Single Leg Deadlift`
  - equilibrio e stabilita
  - non sostituisce il ruolo di forza dello stacco classico
- `Cable Pull-Through`
  - regressione / alternativa tecnica
  - utile per insegnare estensione d'anca

### Panca / Spinta Orizzontale

Pattern:
- spinta orizzontale

Obiettivo base:
- forza e ipertrofia petto-tricipiti-deltoide anteriore
- controllo scapolare in appoggio

Varianti da riconoscere:
- `Floor Press Manubri`
  - ROM ridotto
  - piu tollerabile sulle spalle
  - utile come alternativa stabile
- `Push-Up`
  - variante a corpo libero dello stesso pattern
  - aggiunge richiesta di core
- `Push-Up su rialzo`
  - regressione tecnica
  - ottima per imparare linea corpo e scapole
- `Push-Up declino`
  - progressione
  - enfasi petto alto e carico relativo maggiore
- `Cable Chest Press` / `TRX Chest Press`
  - alternative con maggiore richiesta di stabilita
  - utili quando mancano panca o manubri

### Dip alle Parallele

Pattern:
- spinta con enfasi tricipiti
- ponte tra spinta verticale e orizzontale, ma da leggere come pattern di spinta upper

Obiettivo base:
- forza e ipertrofia su tricipiti, petto basso e deltoide anteriore
- controllo scapolare in catena chiusa
- lavoro ad alta intensita sul pattern di spinta

Varianti da riconoscere:
- `Dip alle Parallele con elastico`
  - regressione principale
  - mantiene il pattern meglio di una macchina
  - utile se l'app usa scala assistita o supporto elastico
- `Panca stretta`
  - alternativa se le spalle tollerano poco il dip
  - piu stabile e meno stressante in allungamento
- `Pushdown`
  - alternativa da isolamento
  - non equivalente come richiesta tecnica o transfer sul pattern

Nota pratica:
- nell'app il dip va letto come esercizio che puo usare assistenza con elastico
- se serve assistenza, non va giudicato come fallimento ma come regressione coerente del pattern

### Trazioni / Tirata Verticale

Pattern:
- tirata verticale

Obiettivo base:
- dorsali e bicipiti
- depressione scapolare
- controllo del corpo in sospensione

Varianti da riconoscere:
- `Trazioni supine`
  - piu bicipiti
  - spesso piu accessibili
- `Trazioni facilitate con elastico`
  - regressione principale
  - mantiene il pattern meglio della lat machine
- `Lat machine`
  - alternativa utile se manca una base minima di trazione libera
  - meno richiesta di stabilita globale
- `Negative`
  - costruzione forza specifica sul pattern
- `Scapular pull-up`
  - non e una trazione completa
  - e drill tecnico per scapole

### Military Press / Spinta Verticale

Pattern:
- spinta verticale

Obiettivo base:
- deltoidi e tricipiti
- controllo costole-bacino sotto carico verticale

Varianti da riconoscere:
- `Push Press`
  - piu carico assoluto
  - meno isolamento spalle
  - non va usata se l'obiettivo e valutare forza di spinta pura delle spalle
- `Press Manubri da Seduta`
  - piu stabile
  - ottima variante intermedia
- `Arnold Press`
  - piu ROM e lavoro deltoideo
  - piu ipertrofia che forza
- `Half-Kneeling Single Arm Cable Press`
  - non e una vera vertical press
  - va letta come spinta con forte componente anti-rotazione e controllo tronco

### Rematore / Tirata Orizzontale

Pattern:
- tirata orizzontale

Obiettivo base:
- dorsali, romboidi, posteriore spalla
- controllo scapolare e stabilita del tronco

Varianti da riconoscere:
- `Rematore Manubri`
  - unilaterale
  - piu facile da apprendere
- `Rematore Bilanciere`
  - bilaterale pesante
  - piu richiesta isometrica su hinge
- `Pendlay Row`
  - piu esplosivo, da terra
  - meno tempo sotto tensione continuo
- `Pulley`
  - variante guidata e stabile
  - utile per volume pulito
- `TRX Row` / `TRX High Row`
  - regressione o variante tecnica
  - carico modulabile con inclinazione
- `One Arm Cable Row`
  - alternativa unilaterale con anti-rotazione

## Mappa rapida accessori e loro obiettivo

### Hip Thrust / Glute Bridge

Obiettivo:
- estensione d'anca
- glutei
- controllo bacino in lockout

Lettura corretta:
- `Glute Bridge` = regressione tecnica o variante piu leggera
- `Hip Thrust Bilanciere` = variante da carico principale
- `Hip Thrust al cavo` = alternativa se vuoi tensione continua o manca il bilanciere

### Leg Curl al Cavo

Pattern:
- flessione di ginocchio
- accessorio femorali

Obiettivo:
- ipertrofia dei femorali
- controllo dell'eccentrica
- lavoro locale senza trasformarlo in altro hinge

Lettura corretta:
- `Leg Curl al Cavo` = accessorio principale per flessione di ginocchio
- `Nordic Curl assistito` = progressione o alternativa piu impegnativa sullo stesso distretto
- `Fitball Hamstring Curl` = alternativa piu accessibile con maggiore richiesta di core e controllo bacino

Nota pratica:
- non va confuso con `Stacco Rumeno`
- stesso distretto principale, ma pattern diverso

### Split Squat / Affondi / Bulgarian

Obiettivo:
- lavoro unilaterale
- stabilita
- rinforzo quad-glutei con minor carico assiale

Lettura corretta:
- `Affondi`
  - pattern dinamico
  - piu richiesta di equilibrio
- `Squat Bulgaro`
  - maggiore ROM e stress locale
  - ottimo accessorio ipertrofico
- `TRX Split Squat` / `TRX Reverse Lunge`
  - regressioni guidate
- `Split Squat al cavo`
  - variante con tensione continua e richiesta tronco elevata

### Core

Obiettivo:
- anti-estensione
- anti-rotazione
- trasmissione di forza

Lettura corretta:
- `Dead Bug` e `Bird Dog`
  - competenze preliminari
  - non esercizi da carico
- `Plank`
  - tenuta base
- `Ab Wheel`
  - progressione vera di anti-estensione
- `Pallof Press`
  - anti-rotazione

### Woodchop

Pattern:
- core rotazionale

Obiettivo:
- insegnare o allenare rotazione del tronco sotto controllo
- trasferire forza tra anche, tronco e arti superiori
- lavorare obliqui e controllo dinamico senza strappare con le braccia

Lettura corretta:
- `Woodchop` = esercizio rotazionale dinamico
- `Pallof Press` = alternativa anti-rotazione, non identica ma complementare
- `Cable Woodchop` con carico piu alto non deve diventare esercizio per braccia

Nota pratica:
- se il controllo del tronco non regge, meglio leggere `Pallof Press` come regressione funzionale
- se l'obiettivo del giorno e resistere alla rotazione, non va spacciato come equivalente perfetto del woodchop

## Regole pratiche per assegnare l'obiettivo giusto a ogni variante

Se la variante:
- aumenta stabilita richiesta, l'obiettivo non e solo muscolare ma anche controllo
- riduce ROM o instabilita, spesso serve per tolleranza articolare o apprendimento
- cambia attrezzo ma non pattern, puo restare una vera alternativa equivalente
- sposta enfasi da forza a volume, va descritta come variante ipertrofica e non come sostituto uno a uno del lift prioritario

L'agente non deve fare queste semplificazioni sbagliate:
- `piu difficile = sempre meglio`
- `variante con piu carico = stessa funzione`
- `alternativa macchina = stessa richiesta tecnica del libero`
- `regressione = esercizio minore`

## Modalita guidata: cosa controllare davvero

La `Modalità guidata` dell'app non e un coach intelligente generale. E una logica locale che fa alcune cose precise.

### Fa davvero queste cose

- briefing pre-sessione nei giorni pesi
- mostra obiettivi del giorno
- genera un suggerimento per ogni esercizio basato su storico recente e uniformita della seduta
- chiede il `RIR` dopo una serie se manca
- suggerisce recuperi guidati
- mostra feedback finale di consolidamento o progressione

### Non fa queste cose

- non cambia automaticamente il programma
- non sostituisce il giudizio tecnico del PT
- non sceglie nuove varianti in automatico
- non riscrive mesociclo, volumi o split
- non valuta video o ROM reale

## Obiettivi della sessione guidata: come devono essere letti

Quando l'agente controlla il blocco `Obiettivi della sessione`, deve verificare che:
- siano coerenti con il focus del giorno
- non duplicano semplicemente il nome degli esercizi
- diano una priorita operativa reale

Esempi di obiettivi validi:
- consolidare il carico sul fondamentale
- restare uniforme tra le serie
- chiudere il top del range sugli accessori
- proteggere la tecnica nelle ultime serie

Esempi di obiettivi deboli:
- fare bene gli esercizi
- allenare gambe e braccia
- aumentare tutto

## Stati guidati esercizio per esercizio

Gli stati che oggi l'agente deve aspettarsi sono questi:
- `Nessun dato`
- `Sessione non uniforme`
- `Aumenta carico`
- `Resta così, prova 1 rip in più`
- `Consolida`
- `Chiuse ma troppo tirate`

Interpretazione corretta:
- `Aumenta carico` non significa per forza che la tecnica fosse perfetta: significa che storico, range e margine dicono che il carico e probabilmente basso
- `Consolida` non significa fallimento: significa che serve stabilizzare il peso o la variante
- `Sessione non uniforme` e un alert sulla qualita del dato, non solo sulla fatica

## Checklist rapida per il controllo agente PT

Per ogni esercizio controllato:
- il pattern dichiarato e corretto?
- la variante mantiene davvero lo stesso pattern?
- l'obiettivo della variante e esplicitato?
- la regressione serve a tecnica/attrezzi o e solo una sostituzione casuale?
- la progressione proposta aumenta la richiesta in modo sensato?
- la lettura guided e coerente con storico, range e RIR?

Per ogni giornata:
- i fondamentali hanno priorita chiara?
- le varianti usate come accessori completano davvero il fondamentale?
- le regressioni non rubano il posto a esercizi che dovrebbero restare allenanti?
- gli obiettivi del briefing guidato sono operativi e non vaghi?

## Quando l'agente deve proporre una modifica

L'agente puo proporre modifica se:
- manca una variante chiave per attrezzi realmente usati nell'app
- una variante e etichettata come equivalente ma cambia troppo il pattern
- un obiettivo variante e vago o contraddittorio
- la guided mode sta leggendo male un esercizio per categoria o ruolo

L'agente non deve proporre modifiche solo per:
- preferenze personali da coach
- gusto estetico sui nomi
- differenze teoriche minori se il comportamento attuale resta coerente
