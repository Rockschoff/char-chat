class Agent {
    constructor (id=0 ,persona=null){
        if (persona){
            this.persona= persona
        }else{
            //create a persona
            this.persona = "I am a happy helper!"
        }
        this.memory=[]
        if(id){
            this.name=`Agent${id}`
        }else{
            this.name="Agent"
        }
        
    }

    status(){
        console.log("I am doing great")
    }

    readAndRespond(store , action){
        console.log("with the agent")
        if (Math.random() >= 0.5){
            store.dispatch(action({text:"this shit is for real" , from:this.name}))
        }
    }
}

const customAgents = []
const numAgents=1
for(var i=0; i < numAgents ; i++){
    let a = new Agent(i)
    customAgents.push(a)
}

export default  customAgents