let like = document.querySelector('i');
let post = document.querySelector('img')

post.addEventListener('dblclick',()=>{
    setTimeout(() => {
        like.style.opacity = 1.0;
        // like.style.color = "red";
        like.style.transform = " translate(-50%, -50%) scale(1)";
    },1000)
    setTimeout(() => {
        like.style.opacity = 0;
    }, 1800);
})