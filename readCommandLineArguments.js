let userName = "";
console.log(process.argv)
for(let i=2; i<process.argv.length; i++) {
    userName += ` ${process.argv[i]}`;
}
console.log(`Hello${userName}`);