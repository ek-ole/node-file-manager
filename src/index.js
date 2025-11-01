import { cwd } from 'node:process';

const args = process.argv.slice(2);
const usernameArg = args.find(arg => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : 'Anonym';

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${cwd()}!`);

process.stdin.on('data', (data) => {
  const input = data.toString().trim()
  if (input === '.exit') {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0)
  }
})

process.on('SIGINT', () => { 
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
});