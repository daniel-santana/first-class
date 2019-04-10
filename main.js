document.addEventListener('DOMContentLoaded',(event)=>{
    let buttonList = document.getElementsByClassName('button');
    for (let button of buttonList) {
        if (button.classList[1] == 'is-primary') {
            button.addEventListener('click',(event)=>{
                document.getElementById('modal1').classList.add('is-active');
                console.log(document.getElementById('modal1').classList);
            })
        }
    }
})

function closeModal(){
    document.getElementById('modal1').classList.remove('is-active')
    console.log(document.getElementById('modal1').classList)
}

