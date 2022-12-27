let food = "coffee";
let favorite = "dinner";
console.log("I eat " +  food  + " at every " + favorite);

//Exercice 2

let myWatchedSeriesLengthmyWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesSentence = "I watched 3 series : ";
console.log(myWatchedSeriesSentence + myWatchedSeriesLengthmyWatchedSeries );
// DEUXIEME PARTIE
myWatchedSeriesLengthmyWatchedSeries.splice(2 , 2, "friend");
console.log(myWatchedSeriesLengthmyWatchedSeries);
myWatchedSeriesLengthmyWatchedSeries.push("prison break");
console.log(myWatchedSeriesLengthmyWatchedSeries);
myWatchedSeriesLengthmyWatchedSeries.unshift("naruto");
console.log(myWatchedSeriesLengthmyWatchedSeries);
myWatchedSeriesLengthmyWatchedSeries[1] = " ";
console.log(myWatchedSeriesLengthmyWatchedSeries);
let serie =  "money heist";
let char = serie.charAt(3);
console.log(char);
console.log();

//Exerxice 3
let TempCel = 10 ;
let TempFah = ( (TempCel / 5) * 9 ) + 32 ;
console.log( TempCel + "°C " + " is " + TempFah + "°F");

//Exercice 4
let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55 parceque a et b sont des nombres
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23 parceque a et b sont des nombres
    // Actual: 23

    // la variable c n'a pas de valeur parceque son type est non defini ou underfined.


    console.log(3 + 4 + '5'); //le resultat sera 345


    // Exercice 5 : Devinez Les Réponses #2     
    
    typeof(15)
// Prediction: le typpe sera number number car 15 est un nombre
// Actual: 'number'

typeof(5.5)
// Prediction:  le typpe sera number car les nombres à virgule sont de type number.
// En javascript le type number comprend le s entiers et les nombres à virgules 
// Actual: 'number'

typeof(NaN)
// Prediction: undefined 
// Actual: 'number' 

typeof("hello")
// Prediction: string car c'est une chaine de caractères
// Actual: 'string'

typeof(true)
// Prediction: boolean
// Actual: 'boolean'

typeof(1 != 2)
// Prediction: boolean
// Actual: 'boolean'

"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: 'hamburgers'

"hamburgers" - "s"
// Prediction: erreur car javascript ne pas effectuer  l'operation de soustraction sur des chaines de caractères
// Actual: NaN

"1" + "3"
// Prediction: 13 car 1 et 3 sont des chaines de caractères et javascript va concatener 1 et 3
// Actual: '13'

"1" - "3"
// Prediction: -2 car 2 et 3 sont des chaines de caractères et javascript va faire une conversion de 1 et 3 en nombre
// et effectuer la soustraction
// Actual: -2

"johnny" + 5
// Prediction: 'johnny5' car 5 est un string par defaut, donc javasript va concaténer johnny et 5
// Actual: 'johnny5'

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: NaN 
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1" 
// Prediction: false car  les deux valeurs n'ont pas le meme type.
// Actual: alse

//Exercice 6 : Devinez Les Réponses #3

5 + "34"
// Prediction:  le résultat sera 534 car par defaut 5 est une chaine de caractère
// Actual: '534'

5 - "4"
// Prediction: 1 car 4 sera convertit en number
// Actual: 1 

10 % 5
// Prediction: le resultat est 0
// Actual: 0

5 % 10
// Prediction: 5 car c'est une division entière
// Actual: 5

"Java" + "Script"
// Prediction: "JavaScript"
// Actual: 'JavaScript'

" " + " "
// Prediction: " "
// Actual: ' '

" " + 0
// Prediction: ' 0'
// Actual: ' 0'

true + true
// Prediction: true
// Actual: 2

true + false
// Prediction: true 
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN