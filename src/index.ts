// Condicional
import { questao01 as quest1 } from "./Exercicios/condicao/questao01.js";
import { questao02 as quest2 } from "./Exercicios/condicao/questao02.js";
import { questao03 as quest3 } from "./Exercicios/condicao/questao03.js";
import { questao04 as quest4 } from "./Exercicios/condicao/questao04.js";

// Repetição
import { questao01 as quest1R } from "./Exercicios/repeticao/questao01.js";
import { questao02 as quest2R } from "./Exercicios/repeticao/questao02.js";
import { questao03 as quest3R } from "./Exercicios/repeticao/questao03.js";
import { questao04 as quest4R } from "./Exercicios/repeticao/questao04.js";
import { questao05 as quest5R } from "./Exercicios/repeticao/questao05.js";

// Função
import { questao01 as quest1F } from "./Exercicios/funcao/questao01.js";
import { questao03 as quest3F } from "./Exercicios/funcao/questao03.js";


//Array
import { questao01 as quest1A } from "./Exercicios/array/questao01.js";



// Condicional
document.getElementById("bt1")?.addEventListener("click", quest1 )
document.getElementById("bt2")?.addEventListener("click", quest2 )
document.getElementById("bt3")?.addEventListener("click", quest3 )
document.getElementById("bt4")?.addEventListener("click", quest4 )

// Repetição
document.getElementById("bt5")?.addEventListener("click", quest1R )
document.getElementById("bt6")?.addEventListener("click", quest2R )
document.getElementById("bt7")?.addEventListener("click", quest3R )
document.getElementById("bt8")?.addEventListener("click", quest4R )
document.getElementById("bt9")?.addEventListener("click", quest5R )


//Funçâo
document.getElementById("bt10")?.addEventListener("click", quest1F )
document.getElementById("bt13")?.addEventListener("click", quest3F )

//Array
document.getElementById("bt11")?.addEventListener("click", quest1A )