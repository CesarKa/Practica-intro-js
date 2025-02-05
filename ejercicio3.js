console.log('03');

//Ejer 3.1

const concatArrays = (array) => {

    let result = '';
    const lastIndex = array.length - 1;
    let i = 0;

    for (element of array){
        if (i === lastIndex) {
            result += "." + element;
        } else {
            result += (i === 0 ? element: "/" + element);
        }
        i++;
    };
    return result;
};


//console.log(concatArrays(['programing','casy','beginner','CodingGame','Python','py']));

//Ejer 3.2


const splitNumbers = (num) => {
    return num.toString().split("").join("-");
};

 //console.log(splitNumbers(11234))


//Ejer 3.3

const mirrorSize = (str) => {
    return str.length + ' ' + str.split("").reverse().join("");
};


//console.log(mirrorSize('pointor'));

