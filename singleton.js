const webSeries = (function(){
    let faws;

    const createSeries = function() {

        const captainAmericaType = "old"

        const shieldHolder = function(name){
            return  name == "Steve" ? "captain americal old": "captain america new";
        }

        return {
            shieldHolder
        }
    }

    return {
        getSeries() {
            
            if(!faws){
                faws = createSeries();
            return faws;
        }
    }
    }
})()

const firstAvenger = webSeries.getSeries()
console.log(firstAvenger)
const secondAvenger = webSeries.getSeries()
console.log(secondAvenger)