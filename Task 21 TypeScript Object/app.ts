interface items {
    name:string
    price:number
}
// create two objects
const book: items ={
    name: 'ESSENTIAL TYPESCRIPT',
    price:450
}
const apple: items ={
    name: 'apple',
    price:200
}
console.log(`book name: ${book.name}, price: ${book.price}`)
console.log(`apple name: ${apple.name}, price: ${apple.price}`)