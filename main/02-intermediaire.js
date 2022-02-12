/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */

    function combine(tableau1, tableau2) {
        var newArray = []
        if (array1.length !== array2.length) return
        for (var i = 0; i < array1.length; i++) {
            newArray[i * 2] = array1[i];
            newArray[i * 2 + 1] = array2[i];
        }
        return newArray;
    
    }
    var array1Combine = [1, 2, 3, 4, 5];
    var array2Combine = ['raspberry', 'apple', 'strawberry', 'pear', 'banana'];
    console.log(combine(array1Combine, array2Combine))
    




/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
 * de offset.
 * 
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */
function rotate(tableau, offset) {
    var array1 = [];
    var array2 = [];
    array1.push(tableau.slice(0, offset));

    array2.push(tableau.slice(offset));

    var array3=
    array2.concat(array3)
    console.log(array3);

}

/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */
function syracuse(nombre) {

}
