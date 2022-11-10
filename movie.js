
export class Movie
{
    
    constructor(title, releaseYear, nacionality, lenguage, plataforma, isMCU, mainCharacterName, producer, distributor, genre, foto)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.lenguage = lenguage;
        this.plataforma = plataforma;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.genre = genre;
        this.foto = foto;

    }

    printAll()
    {
        console.log(
                    "\n Title - " + this.title +
                    "\n Release Year - " + this.releaseYear +
                    "\n Nacionality - " + this.nacionality +                    
                    "\n Lenguage - " + this.lenguage +
                    "\n Plataforma - " + this.plataforma +
                    "\n isMCU - " + this.isMCU +
                    "\n Main Character Name - " + this.mainCharacterName +
                    "\n Producer - " + this.producer +
                    "\n Distributor - " + this.distributor +
                    "\n Genre - " + this.genre);
    }
}
    