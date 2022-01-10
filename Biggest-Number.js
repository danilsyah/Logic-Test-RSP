function maxRedigit(value){
    let digits = (""+value).split("")
    
   if (digits.length <= 2 || digits.length >= 4){
       return null
   }else{
       nilaiSorting = digits.sort(function(a,b){return b-a}).join("")
       return nilaiSorting
   }
   
}

console.log(maxRedigit(231))