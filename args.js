console.log("Hello form args:)")
console.log(process.argv)
const args = process.argv.slice(2);
for (const arg of args) {
    console.log(`Hi there, ${arg}.`)
}
