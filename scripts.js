console.log(document.title);

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.getElementById("gen-1").innerText = "Generasión 1 Pokimon";

// 2. Cambia el color de fondo de la primera generación de Pokimon.
//document.querySelector(".infocard-list-pkmn-lg").style.backgroundColor = "red";
const todasLasListas = document.querySelectorAll('.infocard-list-pkmn-lg');
todasLasListas[0].querySelectorAll('.infocard').forEach(box => {
    box.style.backgroundColor = 'red';
});

//body > main > div:nth-child(6)
//body > main > div:nth-child(6) > div:nth-child(1)

// 3. Imprime por consola la URL de la página.
console.log(document);

// 4. Imprime por consola el dominio de la página.
console.log(document.doamin);

// 5. Imprime todos los nodos de imagen.
document.querySelectorAll(".img-sprite").forEach(img => {
    console.log(img.src);
});

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
document.querySelectorAll(".img-sprite").forEach(img => {
    img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
});

// 7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
document.querySelectorAll('.infocard').forEach(card => {
    if (card.querySelector('.itype.flying')) {
        const infoData = card.querySelector('.infocard-lg-data.text-muted');
        if (infoData) {
            infoData.style.backgroundColor = 'yellow';
        }
    }
});

/*
document.querySelectorAll(".flying").forEach(elemento => {
    elemento.style.backgroundColor = "yellow";
});
*/