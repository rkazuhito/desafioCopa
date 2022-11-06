function createGame(){
    return`
    <li>
        <img src="assets/icon-brazil.svg" alt="Brazil">
        <strong>07:00</strong>
        <img src="assets/icon-cameroon.svg" alt="Cameroon">
    </li>`
}

function createCard(date,day,games){
    return `
    <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>`
}

document.querySelector('#app').innerHTML=`
<header>
    <img src="assets/logo.svg" alt="logo do catar">
</header>
<main id="cards">
    ${createCard("24/11","quinta",createGame())}
    ${createCard("28/11","segunda",createGame())}
    ${createCard("02/12","sexta",createGame())}
</main>
`
