console.log(1)

const contar = async() => {
   console.log(2)
   console.log(await Promise.resolve(3))
}
contar()

console.log(4)