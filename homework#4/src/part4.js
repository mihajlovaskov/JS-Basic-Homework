// ne znam dali ja sfativ zadacava sto treba da napravam. kako razbrav - vo edna niza od 1 do 20 
//posle neparen broj treba da ima prazno mesto, pa paren broj, a posle paren broj da pocnuva nova linija, 
//nov red, vo koj povtorno ke ima neparen broj, itn...???
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let index = 0;
function func(arrays){
    while (index < arrays.length){
        if (arrays[index]%2!== 0){
            console.log(`${arrays[index]}" "${arrays[index+1]}\n`); // adding empty space between every odd
            // and even number in the array, followed by adding new line after every even number. 
            //the empty space is denoted by " ". 
        }
        index++
    } 
}
func(array);
//ili pa ocekuvaniot rezult treba da bide poinakov -  sekoj broj treba da bide isprintan vo konzola,
//so toa sto posle sekoj neparen broj treba da ima prazno mesto, a posle sekoj paren broj da se otvara 
//nova linija- ja davam i taa solucija
let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let index1 = 0;
function func1(arrays1){
    while (index1 < arrays1.length){
        if (arrays1[index1]%2!== 0){
            console.log(`${arrays1[index1]}" "`); // empty space after every odd number
        }
        else{console.log(`${arrays1[index1]} \n`)} // new line after every even number
        index1++
    } 
}
func1(array1);
