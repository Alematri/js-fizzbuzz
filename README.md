Title: Js-FizzBuzz
===
**Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
**BONUS:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
Applica stili differenti agli elementi aggiunti al DOM, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

**1** Creiamo un file html caricando BS5 perchè gli stili di default sennò so brutti ma anche perchè siamo pigri e non abbiamo tanta voglia di scrivere troppo CSS
**2** Struttriamo l'html a modino, h1 con il titolo, container bootstrappiano con dentro un div che conterrà i box che creeremo in JS. Nel css ci creiamo le classi fizz, buzz e fizzbuz
**3** Nel file JS impostiamo la const Boxes e creiamo il ciclo che ci farà comparire ben 100 box
**4** Visto che sappiamo che i programmi girano da sopra a sotto la prima condizione sarà che il numero del box deve essere divisibile per 3 e per 5, se la condizione si verifica aggiungiamo la classe fizzbuzz e il testo fizzbuzz all'interno del box usando innerHtml
**5** seconda e terza condizione saranno quelle che fanno triggherare fizz e buzz. Importante che fizzbuzz stia in cima altrimenti il box prende la classe fizz e buzz prima di prendere fizzbuzz.
**6** ringrazia i tutor che ti hanno aiutato a non impazzire.