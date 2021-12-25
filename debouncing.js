const fetch = () => {
    console.log("fetched...")
}

function debouncing(callback, delay){
    let timerId;
    
    return function(){

        timerId = setTimeout(fetch.call(this))
        clearTimeout(timerId)
    }
} 

debouncing()