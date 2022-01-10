function productArray(products){
    let total = 1
    products.forEach(product => {
        total *= product
    });
    
    for(let i = 0; i < products.length; i++){
        products[i] = total / products[i]
    }
    console.log(products)
}

// const products = [16,17,4,3,5,2]
productArray([12,20])
productArray([3,27,4,2])
productArray([13,10,5,2,9])
productArray([16,17,4,3,5,2])