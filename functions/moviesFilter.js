const moviesData = [{
    title: "Joker",
    director: ["Todd Phillips"],
    date: "4.10.2019",
    tags: ["Crime", "Drama", "Thriller"]
  },
  {
    title: "Once Upon a Time... in Hollywood",
    director: ["Quentin Tarantino"],
    date: "26.07.2019",
    tags: ["Comedy", "Drama"]
  },
  {
    title: "Avengers: Endgame",
    director: ["Anthony Russo"],
    date: "26.04.2019",
    tags: ["Action", "Adventure", "Drama"]
  },
  {
    title: "Captain Marvel",
    director: ["Anna Boden"],
    date: "8.03.2019",
    tags: ["Action", "Adventure", "Sci-Fi"]
  },
  {
    title: "It Chapter Two",
    director: ["Andy Muschietti"],
    date: "6.09.2019",
    tags: ["Drama", "Fantasy", "Horror"]
  }
]

const filters = {
  title: ['It Chapter Two'],
  // director: ['Andy Muschietti'],
  // date: ['6.09.2019'],
  // tags: ['Comedy', 'Sci-Fi'],
};



const moviesFilter = (movies, filters) => {
  return movies.filter((movie) => {
    return Object.entries(filters).every(([filterProperty, filterValues]) => {

      if (Array.isArray(movie[filterProperty])) {
        return movie[filterProperty].some((productValue) => {
          return filterValues.includes(productValue);
        });
      } else {
        return filterValues.includes(movie[filterProperty]);
      }

    });
  });
};

const result = moviesFilter(moviesData, filters);

console.log(result);
