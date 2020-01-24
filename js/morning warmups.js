let movies =
    [
        {
            "title": "Casablanca",
            "rating": "4",
            "description": "movie description",
            "genre": "Movie Genre",
            "id": 1
        },
        {
            "title": "Star Wars: A New Hope",
            "rating": "5",
            "description": "movie description",
            "genre": "Movie Genre",
            "id": 5
        }
    ]

}

movies.forEach(movie) => {
    if(movies.rating === 1){
        return movies.title + 'is boring';

    }else if (movies.rating === 5){
        return `${movies.title} is 2 thumbs up!`;
    }else{
        return `${movies.title} was okay!`
    }
};


