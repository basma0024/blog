$('#upIcon').on('click', function(){
    $(window).scrollTop(0);
})


document.getElementById('navbarToggle').addEventListener('click', function() {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('active'); 
});
