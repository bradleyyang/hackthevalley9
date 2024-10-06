const server = 'http://localhost:8080'

export async function dbRequest(method, endpoint, body) {
    let init = {
        method: method,
    };
    if(typeof body !== 'undefined') {
        init['headers'] = {
            'Content-Type': 'application/json'
        };
        init['body'] = body;
    }
    return (await fetch(server + endpoint, init)).json();
}