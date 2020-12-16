function sendEmail() {
    try {
        const name = document.getElementById('name').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const email = document.getElementById('email').value;

        const Body = document.getElementById('message').value;
        const emailPrimary = 'contaaonline@gmail.com';

        if ((name === '') || (email === '') || (message === '')) {
            alert('Preencha todos os campos!')
        } else {
            Email.send({
                SecureToken: "07dda9a1-ea3a-494d-800b-7e137a266a33",
                To: emailPrimary,
                From: emailPrimary,
                Subject: "Contato do Site",
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