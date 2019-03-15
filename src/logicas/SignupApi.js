import 'isomorphic-fetch';

export default class SignupApi {
    static sendSignup(login, senha, url) {
        return fetch('http://localhost:8080/api/usuarios', {
            headers: {
                'Content-type': 'application/json',
                'X-AUTH-TOKEN': ''
            },
            method: 'POST',
            body: JSON.stringify({ login, senha, urlPerfil: url })
        })
    }
}