function solution(value){
    let jumlah = 0
    for (let i = 0; i < value; i++) {
        
        if (i % 3 == 0 || i % 5 == 0){
            jumlah += i
        }
    }

    console.log(jumlah)
}

solution(10)
solution(20)