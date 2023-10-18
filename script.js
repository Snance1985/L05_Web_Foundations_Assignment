async function fetchCat() {
    try {
        let response = await fetch('https://catfact.ninja/fact?max_length=140');
        let data = await response.json();
        let factWrapper = document.getElementById('factWrapper');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        h3.innerText = 'Random Cat Fact';
        p.innerText = data.fact;
        factWrapper.appendChild(h3);
        factWrapper.appendChild(p);
    } catch (error) {
        console.log(error);
    }
}

fetchCat();
