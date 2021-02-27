const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const url = document.querySelector('input').value;
    document.location.href = url;
    console.log('foi?')
})


