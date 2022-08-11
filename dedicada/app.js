import {artistas} from './modulo.mjs';

let tamanho = artistas.length;
let i;
for ( i = 0; i < tamanho; i++) {
    console.log(`${i} -  ${artistas[i]}`)
}

console.log('-----------------------');
i = 0;
while (i < tamanho) {
    console.log(`${i} -  ${artistas[i]}`);
    i ++;
}
