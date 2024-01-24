
const myObserver = new IntersectionObserver((entrieds) =>{
    entrieds.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
})

const elements = document.querySelectorAll('.product');

elements.forEach((element) =>myObserver.observe(element));

const el = document.querySelector('.text');
const text = 'Nova coleção!';
const interval = 200;

function showText(el, text, interval) {

    const char = text.split('').reverse();

    const typer = setInterval(() =>{
        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;
    }, interval);
}

showText(el, text, interval)