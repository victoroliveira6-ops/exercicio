const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("usuarios: ", (u) => {
    readline.question("senha: ", (s) => {

        console.log(
            u === "admin" && s === "1234"
            ? "acesso autorizado"
            : "acesso negado"
        );
        readline.close();
    });
});