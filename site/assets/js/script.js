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

const currency_nav = document.querySelector('.iconnav-currency')
fetch('../../../../site/content/docs/currency_nav.html')
.then(res=>res.text())
.then(data=>{
    currency_nav.innerHTML=data
});

const other_footer = document.querySelector('.other-footer')
fetch('other_footer.html')
.then(res=>res.text())
.then(data=>{
    other_footer.innerHTML=data
});

const jkcss_footer = document.querySelector('.other-footer')
fetch('../../../../site/content/docs/other_footer.html')
.then(res=>res.text())
.then(data=>{
    other_footer.innerHTML=data
});