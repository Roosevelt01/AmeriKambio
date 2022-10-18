let item=Array.from(document.querySelectorAll('.index'))
let seguidores=document.querySelectorAll('.seguidores')
let contenedor=document.getElementById('contenedor')
let cont=0
let cont2=0
let cont3=0
let cont4=0
let tiem=0
let hijos=[...contenedor.children]
let nietos1= hijos[0].children[2],
nietos2= hijos[1].children[2],
nietos3= hijos[2].children[2]
nietos4= hijos[3].children[2]
let tiempo=setInterval(() => {
nietos1.textContent=cont+=1

    if(cont===397)
    {
        clearInterval(tiempo)
    }
},` ${tiem}`);

let tiempo2=setInterval(() => {
    nietos2.textContent=cont2+=1

    if(cont2===62)
    {
        clearInterval(tiempo2)
    }
}, ` ${tiem}`);

let tiempo3=setInterval(() => {
    nietos3.textContent=cont3+=1

    if(cont3===1489)
    {
        clearInterval(tiempo3)
    }
}, ` ${tiem}`);

let tiempo4=setInterval(() => {
    nietos4.textContent=cont4+=1

    if(cont4===53)
    {
        clearInterval(tiempo4)
    }
}, ` ${tiem}`);
