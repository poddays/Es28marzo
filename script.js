function insText() {
    const form = document.querySelector('#message-form')
    form.addEventListener('submit',(evento)=>{
        evento.preventDefault()
        const messaggio = document.querySelector('#messages')
        const feedback = document.querySelector('.feedback')
        const messaggioRiuscito = document.querySelector('.message')
        if (messaggio.value === "") {
            feedback.classList.add('show')
            setTimeout(() => {
                feedback.classList.remove('show')
            }, 3000);

        }
        else{
        
            messaggioRiuscito.textContent = messaggio.value
        }
    })

}
insText()
    