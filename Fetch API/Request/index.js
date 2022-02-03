'use strict'

const url = 'https://fake-movie-database-api.herokuapp.com/api?s=batman'

//preparing an HTTPS GET request
const request = new Request(url)


//fetching through a request 

fetch(request).
    then(response => response.json()).
    then(resp => console.log("resp:", resp)).
    catch(err => console.log("error:", err))

const postUrl = 'https://reqres.in/api/users'

//preparing an HTTPS POST Request
const postRequest = new Request(postUrl, {
    method: 'POST',
    body: JSON.stringify({
        "name": "morpheus",
        "job": "leader"
    }), 
}) 

fetch(postRequest).
    then(response => response.json()).
    then(resp => console.log("post resp:", resp)).
    catch(err => console.log("post error:", err))

