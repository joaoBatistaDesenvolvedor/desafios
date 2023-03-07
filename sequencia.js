// Sequência a)
let a = 7;
a += 2;
console.log(`Próximo elemento da sequência a): ${a}`);

// Sequência b)
let b = 64;
b *= 2;
console.log(`Próximo elemento da sequência b): ${b}`);

// Sequência c)
let c = 6;
c = Math.pow((c + 1), 2);
console.log(`Próximo elemento da sequência c): ${c}`);

// Sequência d)
let d = 64;
d += 12;
console.log(`Próximo elemento da sequência d): ${d}`);

// Sequência e)
let e1 = 8;
let e2 = 5;
let e_next = e1 + e2;
console.log(`Próximo elemento da sequência e): ${e_next}`);

// Sequência f)
let f = [2, 10, 12, 16, 17, 18, 19];
let words = ["dois", "dez", "doze", "dezesseis", "dezessete", "dezoito", "dezenove"];
let f_next = words[f.length] - "vinte".length;
console.log(`Próximo elemento da sequência f): ${f_next}`);
