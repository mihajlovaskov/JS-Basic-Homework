//solution for the first task
console.log("Solution for the first task:")
function noGiBo(girls, boys){
    console.log(`${girls} girls ${boys} boys`);
}
noGiBo(15,18); //check functionality
//solution for the bonus task
console.log("Solution fot the bonus task:")
function giBo(women, men){
    if(parseInt(women)!=parseFloat(women)||parseInt(men)!=parseFloat(men)){
        console.log("Please insert integer number for both women and men")
    }
    else if(women<10 && men<10 && women>=0 && men>=0){
        console.log(`0${women} girls 0${men} boys`);
    }
    else if (women<10 && men>=10 && women>=0){
        console.log(`0${women} girls ${men} boys`);
    }
    else if (women>=10 && men<10 && men>=0){
        console.log(`${women} girls 0${men} boys`);    
    }
    else if (women>=10 && men>=10){
        console.log(`${women} girls ${men} boys`);
    }
    else if (parseInt(women)!=parseFloat(women)||parseInt(men)!=parseFloat(men)){
        console.log("Please insert integer number for both women and men")
    }
    else{
        console.log("Please insert positive number for both women and men")
    }
}
giBo(5,2); //check functionality
giBo(7,10); //functionality check
giBo(10,4); //functionality check
giBo(18,15); //functionality check
giBo(-7,10); //functionality check
giBo(8,-15); //functionality check
giBo(0,0); //functionality check
giBo(7.5,8.6);//functionality check
