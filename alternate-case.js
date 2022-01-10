function alternateCase(text){
    textArr = []
   for (let i = 0; i < text.length; i++){
    //    console.log(text.charAt(i))
        if (text.charAt(i) == text.charAt(i).toUpperCase()){
            // console.log(text.charAt(i), "besar")
            textArr[i] = text.charAt(i).toLowerCase()
        }else{
            // console.log(text.charAt(i), "kecil")
            textArr[i] = text.charAt(i).toUpperCase()
        }
   }

   console.log(textArr.join(""))

}

alternateCase("abc")
alternateCase("ABC")
alternateCase("Hello World")

