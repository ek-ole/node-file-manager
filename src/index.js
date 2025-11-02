import { cwd } from 'node:process';

const args = process.argv.slice(2);
const usernameArg = args.find(arg => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : 'Anonym';

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${cwd()}!`);

process.stdout.write('>');

process.stdin.on('data', (data) => {
  const input = data.toString().trim()
  if (input === '.exit') {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  } else if (input === 'up') {
    console.log("Going up one directory...");
    try {
      const currentDir = cwd();
      const parentDir = join(currentDir, '..');
    } catch (error) { 
      console.log("Operation failed");
    }    
  } else {
    console.log('Invalid input')
  }

  console.log(`You entered: ${input}`)
  console.log(`You are currently in ${cwd()}`);

  process.stdout.write(">");
})

process.on('SIGINT', () => { 
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
});