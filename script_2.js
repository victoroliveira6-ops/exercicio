const capital = Number(process.argv[2]);
const taxa = Number(process.argv[3]);
const tempo = Number(process.argv[4]);
const montante = capital * (1 + taxa * tempo);
console.log("Montante final:", montante.toFixed(2));
