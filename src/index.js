class hero{
    constructor(name,age,job){
        this.name = name
        this.age = age
        this.job = job.charAt(0).toUpperCase() + job.slice(1).toLowerCase()
    }

    atack(){

        let power = ""
        switch(this.job){
            case "Mago":
                power = "Magia"
                break
            case "Guerreiro":
                power = "Espada"
                break
            case "Monge":
                power = "Báculo"
                break
            case "Ninja":
                power = "Shurikens"
                break
            default:
                console.log("Por favor escolha sua classe:")
                break
        }

        console.log(`O ${this.job} atacou usando ${power}`)
    }
}

heroTree = new hero("Madeuz",25,"Mago")

heroTree.atack()