//Important init arguments
//headers
//credentials
//cache 

'use strict'

const url = 'http://localhost:5500'
const init = {
    referrer: "http://localhost:5500/fake.html"
}

//fetching a resource
fetch(url).
    then(response => response.json()).
    then(resp => console.log("resp:", resp)).
    catch(err => console.log("error:", err))
