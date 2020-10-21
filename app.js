function socksForSale() {
    //write your code here
    
    //DECLARE SOCKS ARRAY//
    const socks  = [10, 20, 20, 10, 10, 30, 50, 10, 20];
   
    //THIS FUNCTION TAKES TWO NUMBERS FROM SOCKS ARRAY AND FINDS THEIR DIFFERENCE//
    socks.sort((num1,num2)=>{
      return num1-num2
    })
    
    //THIS WILL INCREMENT ONCE A MATCHING PAIR OF SOCKS IS FOUND//
    let thisCounter =0

    //LOOP THROUGH THE ARRAY//
    for(let x=0; x<socks.length; x++){
        //CHECKS IF THE ADJACENT ITEMS ARE EQUAL//
        if(socks[x] === socks[x+1]){
            //IF THE ADJACENT ITEMS ARE EQUAL THE COUNTER INCREMENTS//
            thisCounter++
            //THE INDEX OF THE ARRAY ALSO INCREMENTS//
            x++
        }
    }
 
    //RETURNS TO COUNTER NUMBER//
    return thisCounter
    

}


module.exports = socksForSale;