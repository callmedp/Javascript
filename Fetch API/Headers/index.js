//Forbidden header names cannot be modified programmatically as user agent have full control over them
//Some Forbidden header name 
    //Proxy-*
    //Sec-*
    //Access-Control-Request-Headers
    //Content-Length
    //Cookie
//Only whitelisted cors headers are allowed in no-cors mode

console.log("Into Headers")

const url = 'http://localhost:5500'

const init = {
    headers: {
        myheader: true,             // it will get included only in case of cors of the type same origin 
        'Sec-Fetch-Mode':"mymode"  //this is forbidden header, so it cannot be modified
    }
}

fetch(url, init).
    then(resp => resp.json())