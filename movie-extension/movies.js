const movies = [

/* ACTION */

{
    title: "John Wick",
    genre: "Action",
    rating: "7.9",
    image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
},

{
    title: "Avengers Endgame",
    genre: "Action",
    rating: "8.4",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
},

{
    title: "Mad Max Fury Road",
    genre: "Action",
    rating: "8.1",
    image: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg"
},

{
    title: "The Dark Knight",
    genre: "Action",
    rating: "9.0",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
},

{
    title: "Mission Impossible Fallout",
    genre: "Action",
    rating: "7.7",
    image: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg"
},

{
    title: "Gladiator",
    genre: "Action",
    rating: "8.5",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
},

{
    title: "Extraction",
    genre: "Action",
    rating: "6.8",
    image: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg"
},


/* SCI-FI */

{
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: "8.7",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
},

{
    title: "Inception",
    genre: "Sci-Fi",
    rating: "8.8",
    image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
},

{
    title: "The Matrix",
    genre: "Sci-Fi",
    rating: "8.7",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
},

{
    title: "Avatar",
    genre: "Sci-Fi",
    rating: "7.8",
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
},

{
    title: "Dune",
    genre: "Sci-Fi",
    rating: "8.0",
    image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
},

{
    title: "Blade Runner 2049",
    genre: "Sci-Fi",
    rating: "8.0",
    image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
},


/* HORROR */

{
    title: "The Conjuring",
    genre: "Horror",
    rating: "7.5",
    image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
},

{
    title: "IT",
    genre: "Horror",
    rating: "7.3",
    image: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg"
},

{
    title: "Insidious",
    genre: "Horror",
    rating: "6.8",
    image: "https://image.tmdb.org/t/p/w500/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
},

{
    title: "Smile",
    genre: "Horror",
    rating: "6.6",
    image: "https://image.tmdb.org/t/p/w500/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg"
},

{
    title: "The Nun",
    genre: "Horror",
    rating: "5.3",
    image: "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg"
},

{
    title: "Annabelle",
    genre: "Horror",
    rating: "5.4",
    image: "https://image.tmdb.org/t/p/w500/yAgxZ0x7fK9J9jW4YbN5n3K9VJx.jpg"
},


/* ROMANCE */

{
    title: "Titanic",
    genre: "Romance",
    rating: "7.9",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
},

{
    title: "La La Land",
    genre: "Romance",
    rating: "8.0",
    image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"
},

{
    title: "The Notebook",
    genre: "Romance",
    rating: "7.8",
    image: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg"
},

{
    title: "Me Before You",
    genre: "Romance",
    rating: "7.4",
    image: "https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg"
},

{
    title: "Five Feet Apart",
    genre: "Romance",
    rating: "7.2",
    image: "https://image.tmdb.org/t/p/w500/kreTuJBkUjVWePRfhHZuYfhNE1T.jpg"
},


/* COMEDY */

{
    title: "Free Guy",
    genre: "Comedy",
    rating: "7.1",
    image: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"
},

{
    title: "The Hangover",
    genre: "Comedy",
    rating: "7.7",
    image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg"
},

{
    title: "Jumanji",
    genre: "Comedy",
    rating: "6.9",
    image: "https://image.tmdb.org/t/p/w500/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg"
},

{
    title: "Home Alone",
    genre: "Comedy",
    rating: "7.7",
    image: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg"
},

{
    title: "Red Notice",
    genre: "Comedy",
    rating: "6.3",
    image: "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg"
}

];