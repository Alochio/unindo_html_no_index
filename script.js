async function carregarNavbar() {
    const response = await fetch('navbar.html');
    const html = await response.text();
    document.getElementById('navbar-container').innerHTML = html;
}

carregarNavbar();

async function carregarFooter() {
    const response = await fetch('footer.html');
    const html = await response.text();
    document.getElementById('footer-container').innerHTML = html;
}

carregarFooter();