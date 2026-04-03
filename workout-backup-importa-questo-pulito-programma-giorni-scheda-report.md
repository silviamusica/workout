# Backup con giorni scheda

- File base: `workout-backup-importa-questo-pulito-programma.json`
- File generato: `workout-backup-importa-questo-pulito-programma-giorni-scheda.json`
- Correzione: aggiunto `dayLabel` in formato scheda (`Giorno 1/2/4/5`) invece del solo indice interno.

## Mappa usata
- day 0 -> Giorno 1
- day 1 -> Giorno 2
- day 2 -> Giorno 4
- day 3 -> Giorno 5

## Nota
- Il campo `day` resta invariato per non rompere l'import dell'app; ho aggiunto `dayLabel` leggibile per il controllo esterno.