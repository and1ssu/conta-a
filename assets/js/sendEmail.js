function sendEmail() {
    try {
        const name = document.getElementById('name').value;
        const name = document.getElementById('sobrenome').value;
        const email = document.getElementById('email').value;

        const Body = document.getElementById('message').value;
        const emailPrimary = 'contaaonline@gmail.com';

        if ((name === '') || (email === '') || (message === '')) {
            alert('Preencha todos os campos!')
        } else {
            Email.send({
                SecureToken: " 4e14064e-1f73-44a4-8e87-f7b356f360a2",
                To: emailPrimary,
                From: emailPrimary,
                Subject,
                Body: 'Cliente: ' + name + ' | E-mail:  ' + email + ' - ' + Body
            }).then(
                message => {
                    if (message === 'OK') {
                        alert('E-mail enviado com sucesso! Em breve entraremos em contato.')
                    }
                }
            );
        }
    } catch (e) {
        console.log(e)
    }
}