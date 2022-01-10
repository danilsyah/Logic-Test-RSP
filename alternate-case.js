function alternateCase(text){
    textArr = []
   for (let i = 0; i < text.length; i++){
        if (text.charAt(i) == text.charAt(i).toUpperCase()){
            textArr[i] = text.charAt(i).toLowerCase()
        }else{
            textArr[i] = text.charAt(i).toUpperCase()
        }
   }

   console.log(textArr.join(""))

}

alternateCase("abc")
alternateCase("ABC")
alternateCase("Hello World")

