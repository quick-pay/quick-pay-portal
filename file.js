const scriptURL = 'https://script.google.com/macros/s/AKfycbypQf2UJG5tmKvlcf1EAxlxFSKMshGm7jJVJP2TKNzmxlZzHArY-hugz1cU-4phqVdAjA/exec'

const form = document.forms['customer-data']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
         if(ValidCaptcha())
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(()=>{
                if(ValidCaptcha())
                    window.location.assign("loading.html");
                else
                    alert("invalid captcha");})
                .catch(error => console.error('Error!', error.message))
        else
           alert("Invalid Captcha");
            })