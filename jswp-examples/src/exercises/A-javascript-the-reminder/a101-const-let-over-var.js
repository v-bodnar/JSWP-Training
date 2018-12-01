/**

 Po 2015 dostajemy zasięg leksykalny zmiennych i 2 słowa kluczowe
 używamy let i const zamiast var

 Sprawdzenie czy przeglądarka rozpoznaje te słowa kluczowe:
 @see {@link https://caniuse.com/#search=let}
 @see {@link https://caniuse.com/#search=const}

 Jeśli nie, pozostaje nam użycie transpilera:
 @see {@link https://babeljs.io/}
 
 #Cel:
 Osiągniecie zasięgu leksykalnego.
 Faworyzowanie const - wtedy nie można ponownie przypisać zmiennej.
*/

// Nowe sposoby deklarowania zmiennych: let, const
let x = 1;
x++;
console.log('My ex is:', x);

const y = 100;
console.log('Hello I\'m', y, 'I cannot be reassigned');


// Zadanie:

// #1 spróbuj przypisać inną wartość do y, co się stanie?
