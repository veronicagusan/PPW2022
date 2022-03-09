/*
SARCINA 1
La încărcarea paginii, culoarea textului se setează în albatsru și în pagina se adaugă un element div cu
textul "START".
*/
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.color = "blue";
    let div = document.createElement('div');
    div.className = "block";
    div.innerHTML = "START";
    document.body.append(div);
});


/*
SARCINA 2
Creați 2 elemente de tip input, cu numele x și y, un buton "Media" la apăsarea căruia, în elementul div cu
id="rezultat" va fi afișată media aritmetică a numerelor x și y.
*/
const med = () => {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);
    let result = (x + y) / 2;
    document.getElementById("rezultat").innerHTML = "Media este " + result;
};


/*
SARCINA 3
Creați 2 elemente de tip input, cu numele x și y, un buton "Schimb" la apăsarea căruia, vor fi schimbate
cu locul valorile între aceste input-uri.
*/
const move = () => {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);
    document.getElementById("x").value = y;
    document.getElementById("y").value = x;
};

/*
SARCINA 4
Este dat elementul #container. Aplicați acestui element clasa .verde {background: green}, la trecerea
cursorului deasupra elementului.
*/
document.getElementById("container").addEventListener("mouseover", () => {
    let element = document.getElementById("container");
    element.classList.add("verde");
});


/*
SARCINA 5
Înserați în pagina 10 elemente p cu textul "Paragraful Nr {i}", 1<=i<=10 (elementele sunt adăugate static).
Scrieți codul JavaScript, care setează elementele cu numărul de ordine par culoarea fundalului în albastru,
iar celor cu număr de ordine impar culoarea fundalului galben.
*/
const container = document.getElementById("paragraf");
for (let j = 1; j <= 10; j++) {
    container.innerHTML += `<p> Paragraful Nr ${j}</p>`
};

/*
SARCINA 6
Scrieți codul JavaScript, care generează o listă ordonată peste 5 secunde, formată din 10 elemente, cu
textul "Element Nr {i}", 1<=i<=10.
*/
setTimeout(() => {
    let list = document.createElement('ol');
    const addElement = () => {
        let elementOfList = [];
        let i = 0;
        let timer = setInterval(() => {
            i++;
            elementOfList = document.createElement('li');
            elementOfList.innerHTML = `Element Nr ${i}`;
            list.append(elementOfList);
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
        }, 10000);
    }
    document.body.append(list);
    addElement();
}, 5000);
document.getElementsByTagName("ol").id = "lista6";

/*
SARCINA 7
Pentru lista din punctul 6, setați atributul id="lista". Scrieți codul JS, care setează pentru ultimul element
al listei culoarea violetă.
*/
let i = 1;

function myLoop() {
    setTimeout(function () {
        el = document.createElement('li');
        el.innerHTML = i;
        document.getElementById('ulList2').appendChild(el);
        i++;
        if (i < 7) {
            myLoop();
        }
        if (i === 7) {
            el.style.color = "magenta"
        }
    }, 500);
}
myLoop();


/*
SARCINA 8
Înserați în pagină 10 elemente cu clasa "cerc". Scrieți codul CSS care setează culoarea fundalului în negru
pentru toate elementele cu clasa "cerc".
*/
const collection = document.getElementsByClassName("cerc");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "black";
}


/*
SARCINA 9
Scrieți codul JS, care șterge peste 20 secunde din pagina lista creată în punctul 6 și afișează mesajul
"END".
const delLoop = () => {
    setTimeout(function () {
        document.getElementById("lista6").remove();
        console.log('END');
    }, 1000)
}
delLoop();
*/

/*
SARCINA 10
Creați un masiv cu 10 elemente (numere întregi). Scrieți codul care parcurge acest masiv și afișează în
pagină aceste elemente în ordine crescătoare.
*/
let array = [3, 4, 6, 1, 2, 8, 10, 11, 0, 5];
const uniqueSorted = (elemet) => [...new Set(elemet)].sort((a, b) => a - b);
console.log(uniqueSorted(array));

/*
SARCINA 11
Înserați în pagină un buton cu textul "Contor = 1". Scrieți codul JS care la fiecare apăsare a butonului, va
mări valoarea cifrei de pe buton cu 2.
*/
document.addEventListener('click', ({
    target: t
}) => {
    if (t.classList.contains('click-count')) {

        t.children[0].innerText = (t.children[0].innerText | 0) + 2;
    }
});

/*
SARCINA 12
Scrieți o funcție JS care afișează elementele unui masiv din 10 numere întregi cu o pauză de 1 secundă
(în fiecare secundă va fi afișat cîte un element). Numerele trebuie sa fie afișate într-o listă HTML nenumerotată.
let i = 1;
const myLoop = () => {
    setTimeout(function () {
        el = document.createElement('li');
        el.innerHTML = i;
        document.getElementById('ulList1').appendChild(el);
        i++;
        if (i < 11) {
            myLoop();
        }
    }, 1000)
}
myLoop();
*/



/*
SARCINA 13
Creați o listă de selecții (select) din 5 elemente (opțiunile sunt adăugate static) cu disciplinele școlare și
un buton "Disciplina selectata" la apăsarea căruia, în elementul div cu id="element" va fi afișată opțiunea selectată.
*/
document.getElementById("myselect").addEventListener("change", function () {
    document.getElementById('element').innerHTML = "Disciplina: " + this.value;
});