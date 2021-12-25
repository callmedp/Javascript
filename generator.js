class Deepanshu{
    constructor(name){
        this.name = name
    }
    run(age) {
        console.log(`run ${this.name} ${age}`)
    }
}



dp1= new Deepanshu("DP");
dp2=new Deepanshu('DY');

console.log(dp2.run())