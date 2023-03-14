let speed = 100;
let line = "|/-\\|/-\\|"
let i = 0;
const spinner = () => {
  if (i < line.length) {
    process.stdout.write(`\r${line.charAt(i)}`);
    i++;
    speed += 20
    setTimeout(spinner, speed)
  }
}

spinner();