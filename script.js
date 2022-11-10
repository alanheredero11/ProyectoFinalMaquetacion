class Movie {

    constructor(title, releaseYear, nacionality, lenguage, plataforma, isMCU, mainCharacterName, producer, distributor, genre, foto) {
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
    // printAll() {
    //     console.log(
    //         "\n Title - " + this.title +
    //         "\n Release Year - " + this.releaseYear +
    //         "\n Nacionality - " + this.nacionality +
    //         "\n Lenguage - " + this.lenguage +
    //         "\n Plataforma - " + this.plataforma +
    //         "\n isMCU - " + this.isMCU +
    //         "\n Main Character Name - " + this.mainCharacterName +
    //         "\n Producer - " + this.producer +
    //         "\n Distributor - " + this.distributor +
    //         "\n Genre - " + this.genre) ;
    // }
}

let memoria = [];

function addFilm(){
    memoria = []
    let obj = new Movie(
        document.getElementById("title").value, 
        document.getElementById("año").value,
        document.getElementById("nacionalidad").value,
        document.getElementById("lenguaje").value,
        document.getElementById("plataforma").value,
        document.getElementById("IsMCU").value,
        document.getElementById("protagonista").value,
        document.getElementById("productor").value,
        document.getElementById("distribuidor").value,
        document.getElementById("genero").value,
        document.getElementById("portada").value        
    );
    memoria.push(obj);
    showFilms();
    formReset();
    alert("Pelicula Añadida");
}

function showFilms(){
    for(let i = 0; i < memoria.length; i++){             
    
        if (memoria[i].isMCU == "on"){
            memoria[i].isMCU = "Si"
        }else{
            memoria[i].isMCU = "No"
        }


        document.getElementById("contenedorMovies").innerHTML += '<div class="col-2 border border-info w-25 ms-5 me-5 mb-5 "> <img src="' + memoria[i].foto + '" class="w-100" /><div class="pt-3 ps-3 pe-3" style="font-size: 120%;"> <p><span class="fw-bold">Título: </span> ' + memoria[i].title + 
        '</p> <p> <span class="fw-bold">Año: </span> ' + memoria[i].releaseYear + '</p> <p > <span class="fw-bold">Nacionalidad: </span> ' + memoria[i].nacionality + '</p> <p> <span class="fw-bold">Lenguaje: </span>' + memoria[i].lenguage + '</p> <p> <span class="fw-bold">Plataforma: </span> ' + memoria[i].plataforma + '</p> <p> <span class="fw-bold">IsMCU: </span> ' + memoria[i].isMCU + ' </p> <p> <span class="fw-bold">Protagonista: </span> ' + memoria[i].mainCharacterName + '</p> <p> <span class="fw-bold">Productor: </span>' + memoria[i].producer + '</p> <p> <span class="fw-bold">Distibuidor: </span>' + memoria[i].distributor + '</p> <p> <span class="fw-bold">Género: </span>' + memoria[i].genre + '</p> </div> </div > '

}
}

function formReset(){    
        document.getElementById("title").value = "",
        document.getElementById("año").value = "",
        document.getElementById("nacionalidad").value = "",
        document.getElementById("lenguaje").value = "",
        document.getElementById("plataforma").value = "",
        document.getElementById("IsMCU").value = "",
        document.getElementById("protagonista").value = "",
        document.getElementById("productor").value = "",
        document.getElementById("distribuidor").value = "",
        document.getElementById("genero").value = "",
        document.getElementById("portada").value = ""
}
