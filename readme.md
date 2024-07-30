L'obiettivo di questo esercizio era in primis creare in pagina una carta slide all'interno di un container con le proprietà degli oggetti presenti nell'array passato in consegna, quindi una card con image, title e text.

Successivamente creare la stessa struttura ma non in pagina index ma dal file javaScript.
Ho quindi richiamato il container salvandolo in una variabile.
Ho usato un ciclo for of.. con all'interno una variabile che replicasse la struttura creata inizialmente in index.
Riesco così ad avere in pagina 5 slide

L'obiettivo a questo punto è di rendere visibile solo una slide e tramite due bottoni (prev, next) spostarmi avanti o indietro.
Di base le rendo tutte non visibili tramite un `display:none` in css creando anche una classe `active` che aggiungo sulla prima slide in modo da visualizzarla in pagina.

A questo punto inizio a lavorare sui bottoni aggiungendogli un evento il `.addEventListner` al click sul bottone fa partire una funzione.
Salvo in una costante l'indice dell'ultima slide.
La funzione si occupa di togliere la classe `active` alla slide attiva e aggiungere la classe `active` alla slide successiva o precedente in base al bottone
cliccato.
Facendo anche dei controlli:
- se l'utente clicca il bottone next e la slide attiva è l'ultima, allora la slide successiva sarà la prima.
- se l'utente clicca il bottone prev e la slide attiva è la prima allora la slide precedente sarà l'ultima.

