
//Classe de Herói
class hero{
    constructor(name,age,job){
        this.name = name
        this.age = age
        this.job = job.charAt(0).toUpperCase() + job.slice(1).toLowerCase()
    }

//Função para ataque do herói
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
        }
        console.log(`O ${this.job} atacou usando ${power}`)
    }
}

heroTree = new hero("Madeuz",25,"Mago")

heroTree.atack()