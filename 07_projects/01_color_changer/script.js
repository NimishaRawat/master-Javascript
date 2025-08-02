const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')


buttons.forEach(function (button) {
    button.addEventListener('click',function(e){
        const ID = e.target.id;
        if(ID == 'red'){
            alert(`Now your background will turn ${ID}`)
            body.style.backgroundColor = 'red'
        }
        if(ID == 'pink'){
            alert(`Now your background will turn ${ID}`)
            body.style.backgroundColor = 'pink'
        }
        if(ID == 'green'){
            alert(`Now your background will turn ${ID}`)
            body.style.backgroundColor = 'green'
        }
        if(ID == 'orange'){
            alert(`Now your background will turn ${ID}`)
            body.style.backgroundColor = 'orange'
        }

    })
})





