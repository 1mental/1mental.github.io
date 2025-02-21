window.addEventListener("scroll",function () {

    let header = document.getElementsByClassName('navigation-bar')[0];
    if (window.scrollY > 0)
    {
        header.classList.add('sticky');
    }
    else
    {

        header.classList.remove('sticky');
    }
})



function CloseImageShow()
{
    document.getElementById('img-show').style.display = 'none';
    document.body.style.overflow = 'visible';
}


var certificates = document.querySelectorAll('.Cert-Image');
var ImagePreview = document.getElementById('image-preview');

certificates.forEach((item) => {

    item.addEventListener('click', function(){

        ImagePreview.src = item.src;
        document.getElementById('img-show').style.display = 'flex';
        document.body.style.overflow = 'hidden';

    });
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

