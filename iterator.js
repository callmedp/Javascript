class Experiment {
    constructor(user){
        this.userInfo = user
    }
    user(){
        console.log("user is ", this.userInfo)
    }

}

exp1 = new Experiment("pandey")
exp2 = new Experiment("dibbu")

console.log(exp1.user === exp2.user)
Experiment.prototype.user.call(exp1) // Here we are calling class method and passing thisArgs explicitly


