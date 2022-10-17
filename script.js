
const listaDeJogos = [
    {
        nomeDoJogo: "GTA IV", // STRING
        tipoDeJogo: "Ação",
        anoDelancamento: 2014 , // NUMBER
        criadorDoJogo: "Rockstar" ,
        eMultiPlayer: true, // BOOLEAN
    },

    {
        nomeDoJogo: "FIFA 22",
        tipoDeJogo: "Esporte",
        anoDelancamento: 2021 ,
        criadorDoJogo: "EA GAMES" ,
        eMultiPlayer: false,
    },

    {
        nomeDoJogo: "SUPER MARIO WORLD",
        tipoDeJogo: "Aventura",
        anoDelancamento: 1990 ,
        criadorDoJogo: "Nintendo" ,
        eMultiPlayer: false,
    },

    {
        nomeDoJogo: "SONIC",
        tipoDeJogo: "Aventura",
        anoDelancamento: 1991 ,
        criadorDoJogo: "SEGA" ,
        eMultiPlayer: false,
    },

    {
        nomeDoJogo: "LoL leagues os legends",
        tipoDeJogo: "RPG",
        anoDelancamento: 2014 ,
        criadorDoJogo: "Riot" ,
        eMultiPlayer: true,
    },

    {
        nomeDoJogo: "Call of Dut",
        tipoDeJogo: "Tiro",
        anoDelancamento: 2003 ,
        criadorDoJogo: "Activision" ,
        eMultiPlayer: true,
    },

    {
        nomeDoJogo: "Fortnite",
        tipoDeJogo: "Ação",
        anoDelancamento: 2017 ,
        criadorDoJogo: "Epic Games" ,
        eMultiPlayer: true,
    },

    {
        nomeDoJogo: "Minecraft",
        tipoDeJogo: "Ação",
        anoDelancamento: 2011 ,
        criadorDoJogo: "Mojang Studio" ,
        eMultiPlayer: true,
    },

    {
        nomeDoJogo: "Counter-Strike",
        tipoDeJogo: "Ação",
        anoDelancamento: 2000 ,
        criadorDoJogo: "Valve Corporation" ,
        eMultiPlayer: true,
    },

    {
        nomeDoJogo: "Mortal Kombat",
        tipoDeJogo: "Luta",
        anoDelancamento: 2015 ,
        criadorDoJogo: "Warner Brosr" ,
        eMultiPlayer: true,
    }
]

function search_jogos() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('jogo');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}



// alert("Aperte ok")
// console.log(listaDeJogos)

