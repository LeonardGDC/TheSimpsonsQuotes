const quoteWrapper = document.querySelector(".quote-wrapper");
const btn = document.querySelector(".button");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    getAQuote();
})


async function getAQuote() {
    const res = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`);
    const data = await res.json();
    const character = data[0].character;
    const image = data[0].image;
    const quote = data[0].quote;
    quoteWrapper.style.backgroundImage = `url(${image})`;
    quoteWrapper.innerHTML = `
        <div class="text-wrapper">
            <p class="quote">"${quote}"</p>
            <p class="character"><i>${character}</i></p>
        <div>
    `;
    console.log(data)
}
