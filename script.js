async function carregarNavbar() {
    const response = await fetch('navbar.html');
    const html = await response.text();
    document.getElementById('navbar-container').innerHTML = html;
}

carregarNavbar();