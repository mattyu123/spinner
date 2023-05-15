let start = 100;

let positions = ["|", "/", "-", "\b", "|", "/", "-", "\b", "|", "/", "-", "\b"]

for (let item of positions) {
  setTimeout(() => {
    process.stdout.write(`\r${item}    `);
  }, start);
  start += 100
}