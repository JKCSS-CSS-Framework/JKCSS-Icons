const nav = document.querySelector('.navbar')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
});

const footer = document.querySelector('.footerbar')
fetch('footerbar.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
});

const get_nav = document.querySelector('.get-nav')
fetch('get_nav.html')
.then(res=>res.text())
.then(data=>{
    get_nav.innerHTML=data
});

const icon_nav = document.querySelector('.example-nav')
fetch('icon_nav.html')
.then(res=>res.text())
.then(data=>{
    icon_nav.innerHTML=data
});
