import chalk from 'chalk';

console.log(chalk.blue('Trabalhando com NPM'));
console.log(chalk.red('--------------------'));
console.log();

let aluno = "Marcello";
let idade = 4

if ( idade >= 18 ) {
    console.log(`${aluno} ${chalk.blue.bgYellow.bold(`é maior de idade!`)}`);
} else { 
    console.log(`${aluno} ${chalk.blue.bgRed.bold("é menor de idade!")}`);
}
console.log();
console.log(chalk.magenta('--------------------'));

// Obs: para instalar o chalk, utilizamos o comando 'npm install chalk' (readme.md)
console.log();
