let spins = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

let time = 0;
for (let spin of spins) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, time);
}