let apiData = {

    listCate() {
        // A completer
        // fait une requete ajax et renvoie 
        // une promesse
        return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e648c11d875bc2bd94b3f19f1dfc73e0&language=fr-FR')
            .then(res => res.json())
            .then(data => data['genres']);

    },

    listFeat1(page, categorie) {
        return fetch('https://api.themoviedb.org/3/movie/popular?api_key=e648c11d875bc2bd94b3f19f1dfc73e0&page=' + page + '&language=fr-FR&with_genres=' + categorie)
            .then(res => res.json())
            .then(data => data['results']);
    },

    listFeat2(page, categorie) {
        return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e648c11d875bc2bd94b3f19f1dfc73e0&page=' + page + '&language=fr-FR&with_genres=' + categorie)
            .then(res => res.json())
            .then(data => data['results']);
    },

    listFeat3(page, categorie) {
        return fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=e648c11d875bc2bd94b3f19f1dfc73e0&page=' + page + '&language=fr-FR&with_genres=' + categorie)
            .then(res => res.json())
            .then(data => data['results']);
    },

    listFeat4(page, categorie) {
        return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e648c11d875bc2bd94b3f19f1dfc73e0&page=' + page + '&language=fr-FR&with_genres=' + categorie)
            .then(res => res.json())
            .then(data => data['results']);
    },
}