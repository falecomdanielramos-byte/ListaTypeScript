// Condicional
import { questao01C as quest1 } from "./Exercicios/condicao/questao01C.js";
import { questao02C as quest2 } from "./Exercicios/condicao/questao02C.js";
import { questao03C as quest3 } from "./Exercicios/condicao/questao03C.js";
import { questao04C as quest4 } from "./Exercicios/condicao/questao04C.js";

// Repetição
import { questao01R as quest1R } from "./Exercicios/repeticao/questao01R.js";
import { questao02R as quest2R } from "./Exercicios/repeticao/questao02R.js";
import { questao03R as quest3R } from "./Exercicios/repeticao/questao03R.js";
import { questao04R as quest4R } from "./Exercicios/repeticao/questao04R.js";
import { questao05R as quest5R } from "./Exercicios/repeticao/questao05R.js";

// Função
import { questao01F as quest1F } from "./Exercicios/funcao/questao01F.js";
import { questao02F as quest2F } from "./Exercicios/funcao/questao02F.js";
import { questao03F as quest3F } from "./Exercicios/funcao/questao03F.js";


//Array
import { questao01A as quest1A } from "./Exercicios/array/questao01A.js";


//POO
import { questao01P as quest1P } from "./Exercicios/POO/questao01P.js";
import { questao02P as quest2P } from "./Exercicios/POO/questao02P.js";
import { questao03P as quest3P } from "./Exercicios/POO/questao03P.js";
import { questao04P as quest4P } from "./Exercicios/POO/questao04P.js";
import { questao05P as quest5P } from "./Exercicios/POO/questao05P.js";
import { questao06P as quest6P } from "./Exercicios/POO/questao06P.js";

import { questao31P as quest31P } from "./Exercicios/POO/questao31P.js";


//Extra
import { attEx } from "./Exercicios/attEx.js";



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
document.getElementById("bt11")?.addEventListener("click", quest2F )
document.getElementById("bt12")?.addEventListener("click", quest3F )

//Array
document.getElementById("bt13")?.addEventListener("click", quest1A )

//POO
document.getElementById("bt23")?.addEventListener("click",quest1P)
document.getElementById("bt24")?.addEventListener("click",quest2P)
document.getElementById("bt25")?.addEventListener("click",quest3P)
document.getElementById("bt26")?.addEventListener("click",quest4P)
document.getElementById("bt27")?.addEventListener("click",quest5P)
document.getElementById("bt28")?.addEventListener("click",quest6P)

document.getElementById("bt59")?.addEventListener("click",quest31P)


//Questão extra
document.getElementById("bt01Ex")?.addEventListener("click",attEx)