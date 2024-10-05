export async function reqFromDb(method, endpoint, body) {
    let init = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if(typeof body !== "undefined") {
        init['body'] = body
    }
    return (await fetch('http://localhost:8080/' + endpoint, init)).json();
}