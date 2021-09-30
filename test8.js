const movies = [
  {
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "Rated": "R",
    "Released": "14 Oct 1994",
    "Runtime": "2 h 22 min",
    "Genre": "Crime, Drama",
    "Director": "Frank Darabont",
    "Writer": "Stephen King, Frank Darabont",
    "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
    "imdbRating": "9.3",
    "imdbVotes": "1,078,045",
    "imdbID": "tt0111161",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/6hB3S9bIaco?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Godfather",
    "Year": "1972",
    "Rated": "R",
    "Released": "24 Mar 1972",
    "Runtime": "2 h 55 min",
    "Genre": "Crime, Drama",
    "Director": "Francis Ford Coppola",
    "Writer": "Mario Puzo, Francis Ford Coppola",
    "Actors": "Marlon Brando, Al Pacino, James Caan, Diane Keaton",
    "Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX300.jpg",
    "imdbRating": "9.2",
    "imdbVotes": "762,332",
    "imdbID": "tt0068646",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/sY1S34973zA?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Godfather: Part II",
    "Year": "1974",
    "Rated": "R",
    "Released": "20 Dec 1974",
    "Runtime": "3 h 20 min",
    "Genre": "Crime, Drama",
    "Director": "Francis Ford Coppola",
    "Writer": "Francis Ford Coppola, Mario Puzo",
    "Actors": "Al Pacino, Robert De Niro, Robert Duvall, Diane Keaton",
    "Plot": "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BNDc2NTM3MzU1Nl5BMl5BanBnXkFtZTcwMTA5Mzg3OA@@._V1_SX300.jpg",
    "imdbRating": "9.0",
    "imdbVotes": "496,772",
    "imdbID": "tt0071562",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/qJr92K_hKl0?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Pulp Fiction",
    "Year": "1994",
    "Rated": "R",
    "Released": "14 Oct 1994",
    "Runtime": "2 h 48 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Quentin Tarantino",
    "Writer": "Quentin Tarantino, Roger Avary",
    "Actors": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "Plot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjE0ODk2NjczOV5BMl5BanBnXkFtZTYwNDQ0NDg4._V1_SX300.jpg",
    "imdbRating": "9.0",
    "imdbVotes": "843,376",
    "imdbID": "tt0110912",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/s7EdQ4FqbhY?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Good, the Bad and the Ugly",
    "Year": "1966",
    "Rated": "M",
    "Released": "29 Dec 1967",
    "Runtime": "2 h 41 min",
    "Genre": "Adventure, Western",
    "Director": "Sergio Leone",
    "Writer": "Luciano Vincenzoni, Sergio Leone",
    "Actors": "Clint Eastwood, Eli Wallach, Lee Van Cleef, Aldo Giuffr\u00e8",
    "Plot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjIxNjYwNDMzMl5BMl5BanBnXkFtZTcwODA5Mzg3OA@@._V1_SX300.jpg",
    "imdbRating": "9.0",
    "imdbVotes": "325,579",
    "imdbID": "tt0060196",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/JdkSuurdbDA?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "2 h 32 min",
    "Genre": "Action, Crime, Drama, Thriller",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "imdbRating": "9.0",
    "imdbVotes": "1,050,810",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/yQ5U8suTUw0?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "12 Angry Men",
    "Year": "1957",
    "Rated": "Approved",
    "Released": "01 Apr 1957",
    "Runtime": "1 h 36 min",
    "Genre": "Drama",
    "Director": "Sidney Lumet",
    "Writer": "Reginald Rose",
    "Actors": "Henry Fonda, Lee J. Cobb, Martin Balsam, John Fiedler",
    "Plot": "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg",
    "imdbRating": "8.9",
    "imdbVotes": "266,350",
    "imdbID": "tt0050083",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/A7CBKT0PWFA?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Schindler's List",
    "Year": "1993",
    "Rated": "R",
    "Released": "15 Dec 1993",
    "Runtime": "3 h 15 min",
    "Genre": "Biography, Drama, History, War",
    "Director": "Steven Spielberg",
    "Writer": "Thomas Keneally, Steven Zaillian",
    "Actors": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Caroline Goodall",
    "Plot": "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@._V1_SX300.jpg",
    "imdbRating": "8.9",
    "imdbVotes": "553,804",
    "imdbID": "tt0108052",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/dwfIf1WMhgc?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Lord of the Rings: The Return of the King",
    "Year": "2003",
    "Rated": "PG-13",
    "Released": "17 Dec 2003",
    "Runtime": "3 h 21 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh",
    "Actors": "Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom",
    "Plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_SX300.jpg",
    "imdbRating": "8.9",
    "imdbVotes": "767,958",
    "imdbID": "tt0167260",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/r5X-hFf6Bwo?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Fight Club",
    "Year": "1999",
    "Rated": "R",
    "Released": "15 Oct 1999",
    "Runtime": "2 h 19 min",
    "Genre": "Drama",
    "Director": "David Fincher",
    "Writer": "Chuck Palahniuk, Jim Uhls",
    "Actors": "Brad Pitt, Edward Norton, Helena Bonham Carter, Meat Loaf",
    "Plot": "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more...",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.8",
    "imdbVotes": "819,812",
    "imdbID": "tt0137523",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/SUXWAEX2jlg?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "Rated": "PG",
    "Released": "21 May 1980",
    "Runtime": "2 h 7 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Irvin Kershner",
    "Writer": "Leigh Brackett, Lawrence Kasdan",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    "Plot": "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg",
    "imdbRating": "8.8",
    "imdbVotes": "522,846",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/PkEKIw0FU6Y?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Year": "2001",
    "Rated": "PG-13",
    "Released": "19 Dec 2001",
    "Runtime": "2 h 58 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh",
    "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom, Sean Bean",
    "Plot": "A meek hobbit of The Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SX300.jpg",
    "imdbRating": "8.8",
    "imdbVotes": "798,909",
    "imdbID": "tt0120737",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/VIgkpEgCV-I?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "One Flew Over the Cuckoo's Nest",
    "Year": "1975",
    "Rated": "R",
    "Released": "21 Nov 1975",
    "Runtime": "2 h 13 min",
    "Genre": "Drama",
    "Director": "Milos Forman",
    "Writer": "Lawrence Hauben, Bo Goldman",
    "Actors": "Jack Nicholson, Louise Fletcher, Michael Berryman, Peter Brocco",
    "Plot": "Upon admittance to a mental institution, a brash rebel rallies the patients to take on the oppressive head nurse.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTk5OTA4NTc0NF5BMl5BanBnXkFtZTcwNzI5Mzg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.8",
    "imdbVotes": "451,957",
    "imdbID": "tt0073486",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/2WSyJgydTsA?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "2 h 28 min",
    "Genre": "Action, Adventure, Mystery, Sci-Fi, Thriller",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Ken Watanabe",
    "Plot": "A skilled extractor is offered a chance to regain his old life as payment for a task considered to be impossible.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "imdbRating": "8.8",
    "imdbVotes": "851,292",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/66TuSJo4dZM?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Goodfellas",
    "Year": "1990",
    "Rated": "R",
    "Released": "19 Sep 1990",
    "Runtime": "2 h 26 min",
    "Genre": "Biography, Crime, Drama, Thriller",
    "Director": "Martin Scorsese",
    "Writer": "Nicholas Pileggi, Nicholas Pileggi",
    "Actors": "Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco",
    "Plot": "Henry Hill and his friends work their way up through the mob hierarchy.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjU3MTQ4OTA0MV5BMl5BanBnXkFtZTYwNjAyMDg4._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "473,919",
    "imdbID": "tt0099685",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/qo5jJpHtI1Y?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Star Wars",
    "Year": "1977",
    "Rated": "PG",
    "Released": "25 May 1977",
    "Runtime": "2 h 1 min",
    "Genre": "Action, Adventure, Fantasy, Sci-Fi",
    "Director": "George Lucas",
    "Writer": "George Lucas",
    "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness",
    "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "588,148",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/9gvqpFbRKtQ?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Seven Samurai",
    "Year": "1954",
    "Rated": "Unrated",
    "Released": "19 Nov 1956",
    "Runtime": "2 h 38 min",
    "Genre": "Action, Drama",
    "Director": "Akira Kurosawa",
    "Writer": "Akira Kurosawa, Shinobu Hashimoto",
    "Actors": "Toshir\u00f4 Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki",
    "Plot": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BNzg5Mzk5Nzc0NF5BMl5BanBnXkFtZTcwNjg3MDQzMQ@@._V1_SX300.jpg",
    "imdbRating": "8.8",
    "imdbVotes": "162,278",
    "imdbID": "tt0047478",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/xnRUHtSgJ9o?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Forrest Gump",
    "Year": "1994",
    "Rated": "PG-13",
    "Released": "06 Jul 1994",
    "Runtime": "2 h 22 min",
    "Genre": "Drama, Romance",
    "Director": "Robert Zemeckis",
    "Writer": "Winston Groom, Eric Roth",
    "Actors": "Tom Hanks, Robin Wright, Gary Sinise, Sally Field",
    "Plot": "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTQwMTA5MzI1MF5BMl5BanBnXkFtZTcwMzY5Mzg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "722,459",
    "imdbID": "tt0109830",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/uPIEn0M8su0?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Matrix",
    "Year": "1999",
    "Rated": "R",
    "Released": "31 Mar 1999",
    "Runtime": "2 h 16 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Andy Wachowski, Lana Wachowski",
    "Writer": "Andy Wachowski, Lana Wachowski",
    "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjEzNjg1NTg2NV5BMl5BanBnXkFtZTYwNjY3MzQ5._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "779,661",
    "imdbID": "tt0133093",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/m8e-FF8MsqU?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Lord of the Rings: The Two Towers",
    "Year": "2002",
    "Rated": "PG-13",
    "Released": "18 Dec 2002",
    "Runtime": "2 h 59 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Peter Jackson",
    "Writer": "J.R.R. Tolkien, Fran Walsh",
    "Actors": "Elijah Wood, Ian McKellen, Viggo Mortensen, Orlando Bloom",
    "Plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "689,276",
    "imdbID": "tt0167261",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/Wek5UClasY8?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Once Upon a Time in America",
    "Year": "1984",
    "Rated": "R",
    "Released": "23 May 1984",
    "Runtime": "2 h 19 min",
    "Genre": "Crime, Drama",
    "Director": "Sergio Leone",
    "Writer": "Harry Grey, Leonardo Benvenuti",
    "Actors": "Robert De Niro, James Woods, Elizabeth McGovern, Joe Pesci",
    "Plot": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BNDMwMDcyODkzOV5BMl5BanBnXkFtZTcwNTQ1Njg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.4",
    "imdbVotes": "148,708",
    "imdbID": "tt0087843",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/mzhX2PD6Srw?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "City of God",
    "Year": "2002",
    "Rated": "R",
    "Released": "N\/A",
    "Runtime": "2 h 10 min",
    "Genre": "Crime, Drama",
    "Director": "Fernando Meirelles, K\u00e1tia Lund",
    "Writer": "Paulo Lins, Br\u00e1ulio Mantovani",
    "Actors": "Alexandre Rodrigues, Matheus Nachtergaele, Leandro Firmino, Phellipe Haagensen",
    "Plot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "355,070",
    "imdbID": "tt0317248",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/ioUE_5wpg_E?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Se7en",
    "Year": "1995",
    "Rated": "R",
    "Released": "22 Sep 1995",
    "Runtime": "2 h 7 min",
    "Genre": "Crime, Mystery, Thriller",
    "Director": "David Fincher",
    "Writer": "Andrew Kevin Walker",
    "Actors": "Morgan Freeman, Brad Pitt, Kevin Spacey, Andrew Kevin Walker",
    "Plot": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTQwNTU3MTE4NF5BMl5BanBnXkFtZTcwOTgxNDM2Mg@@._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "632,133",
    "imdbID": "tt0114369",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/J4YV2_TcCoE?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Silence of the Lambs",
    "Year": "1991",
    "Rated": "R",
    "Released": "14 Feb 1991",
    "Runtime": "1 h 58 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Jonathan Demme",
    "Writer": "Thomas Harris, Ted Tally",
    "Actors": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney, Kasi Lemmons",
    "Plot": "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "531,335",
    "imdbID": "tt0102926",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/lQKs169Sl0I?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Once Upon a Time in the West",
    "Year": "1968",
    "Rated": "M",
    "Released": "21 Dec 1968",
    "Runtime": "2 h 55 min",
    "Genre": "Adventure, Western",
    "Director": "Sergio Leone",
    "Writer": "Sergio Leone, Sergio Donati",
    "Actors": "Henry Fonda, Charles Bronson, Claudia Cardinale, Jason Robards",
    "Plot": "Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTgwMzU1MDEyMl5BMl5BanBnXkFtZTcwNDc5Mzg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "147,078",
    "imdbID": "tt0064116",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/MNGQ1hUyx-k?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Casablanca",
    "Year": "1942",
    "Rated": "PG",
    "Released": "23 Jan 1943",
    "Runtime": "1 h 42 min",
    "Genre": "Drama, Romance, War",
    "Director": "Michael Curtiz",
    "Writer": "Julius J. Epstein, Philip G. Epstein",
    "Actors": "Humphrey Bogart, Ingrid Bergman, Paul Henreid, Claude Rains",
    "Plot": "Set in unoccupied Africa during the early days of World War II: An American expatriate meets a former lover, with unforeseen complications.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTcwNDI5MjI1Ml5BMl5BanBnXkFtZTYwODE4NDI2._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "280,085",
    "imdbID": "tt0034583",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/TLU41jUnWM4?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Usual Suspects",
    "Year": "1995",
    "Rated": "R",
    "Released": "16 Aug 1995",
    "Runtime": "1 h 46 min",
    "Genre": "Crime, Mystery, Thriller",
    "Director": "Bryan Singer",
    "Writer": "Christopher McQuarrie",
    "Actors": "Kevin Spacey, Gabriel Byrne, Chazz Palminteri, Stephen Baldwin",
    "Plot": "A boat has been destroyed, criminals are dead, and the key to this mystery lies with the only survivor and his twisted, convoluted story beginning with five career crooks in a seemingly random police lineup.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX300.jpg",
    "imdbRating": "8.7",
    "imdbVotes": "487,894",
    "imdbID": "tt0114814",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/9MjV4EwR7Mg?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Raiders of the Lost Ark",
    "Year": "1981",
    "Rated": "PG",
    "Released": "12 Jun 1981",
    "Runtime": "1 h 55 min",
    "Genre": "Action, Adventure",
    "Director": "Steven Spielberg",
    "Writer": "Lawrence Kasdan, George Lucas",
    "Actors": "Harrison Ford, Karen Allen, Paul Freeman, John Rhys-Davies",
    "Plot": "Archeologist and adventurer Indiana Jones is hired by the US government to find the Ark of the Covenant before the Nazis.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SX300.jpg",
    "imdbRating": "8.6",
    "imdbVotes": "443,705",
    "imdbID": "tt0082971",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/0ZOcoxjeUYo?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Rear Window",
    "Year": "1954",
    "Rated": "Approved",
    "Released": "29 Jan 1955",
    "Runtime": "1 h 52 min",
    "Genre": "Mystery, Thriller",
    "Director": "Alfred Hitchcock",
    "Writer": "John Michael Hayes, Cornell Woolrich",
    "Actors": "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
    "Plot": "A wheelchair bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BNDUzMTY0NTE3NF5BMl5BanBnXkFtZTYwNDEyOTM2._V1_SX300.jpg",
    "imdbRating": "8.6",
    "imdbVotes": "215,144",
    "imdbID": "tt0047396",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/6kCcZCMYw38?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "It's a Wonderful Life",
    "Year": "1946",
    "Rated": "Approved",
    "Released": "07 Jan 1947",
    "Runtime": "2 h 10 min",
    "Genre": "Drama, Family, Fantasy",
    "Director": "Frank Capra",
    "Writer": "Frances Goodrich, Albert Hackett",
    "Actors": "James Stewart, Donna Reed, Lionel Barrymore, Thomas Mitchell",
    "Plot": "An angel helps a compassionate but despairingly frustrated businessman by showing what life would have been like if he never existed.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTMzMzY5NDc4M15BMl5BanBnXkFtZTcwMzc4NjIxNw@@._V1_SX300.jpg",
    "imdbRating": "8.6",
    "imdbVotes": "181,144",
    "imdbID": "tt0038650",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/LJfZaT8ncYk?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Psycho",
    "Year": "1960",
    "Rated": "R",
    "Released": "08 Sep 1960",
    "Runtime": "1 h 49 min",
    "Genre": "Horror, Mystery, Thriller",
    "Director": "Alfred Hitchcock",
    "Writer": "Joseph Stefano, Robert Bloch",
    "Actors": "Anthony Perkins, Janet Leigh, Vera Miles, John Gavin",
    "Plot": "A Phoenix secretary steals $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTgyNDIxNzQ4MF5BMl5BanBnXkFtZTYwMzkyNTQ2._V1_SX300.jpg",
    "imdbRating": "8.6",
    "imdbVotes": "273,991",
    "imdbID": "tt0054215",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/NG3-GlvKPcg?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "L\u00e9on: The Professional",
    "Year": "1994",
    "Rated": "Unrated",
    "Released": "18 Nov 1994",
    "Runtime": "1 h 50 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Luc Besson",
    "Writer": "Luc Besson",
    "Actors": "Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello",
    "Plot": "A professional assassin rescues a young girl whose parents were killed in a police raid.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTgzMzg4MDkwNF5BMl5BanBnXkFtZTcwODAwNDg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.6",
    "imdbVotes": "463,013",
    "imdbID": "tt0110413",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/DcsirofJrlM?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Sunset Blvd.",
    "Year": "1950",
    "Rated": "Not Rated",
    "Released": "25 Aug 1950",
    "Runtime": "1 h 50 min",
    "Genre": "Drama, Film-Noir",
    "Director": "Billy Wilder",
    "Writer": "Charles Brackett, Billy Wilder",
    "Actors": "William Holden, Gloria Swanson, Erich von Stroheim, Nancy Olson",
    "Plot": "A hack screenwriter writes a screenplay for a former silent-film star who has faded into Hollywood obscurity.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTk2OTQ5NDA4MV5BMl5BanBnXkFtZTcwNDIyNzE3OQ@@._V1_SX300.jpg",
    "imdbRating": "8.6",
    "imdbVotes": "95,968",
    "imdbID": "tt0043014",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/xzYqUpV_B-A?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "American History X",
    "Year": "1998",
    "Rated": "R",
    "Released": "12 Feb 1999",
    "Runtime": "1 h 59 min",
    "Genre": "Crime, Drama",
    "Director": "Tony Kaye",
    "Writer": "David McKenna",
    "Actors": "Edward Norton, Edward Furlong, Beverly D'Angelo, Jennifer Lien",
    "Plot": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjMzNDUwNTIyMF5BMl5BanBnXkFtZTcwNjMwNDg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.6",
    "imdbVotes": "505,207",
    "imdbID": "tt0120586",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/UV0VEstvjMM?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Apocalypse Now",
    "Year": "1979",
    "Rated": "R",
    "Released": "15 Aug 1979",
    "Runtime": "2 h 33 min",
    "Genre": "Drama, War",
    "Director": "Francis Ford Coppola",
    "Writer": "John Milius, Francis Ford Coppola",
    "Actors": "Martin Sheen, Marlon Brando, Robert Duvall, Frederic Forrest",
    "Plot": "During the U.S.-Viet Nam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade colonel who has set himself up as a god among a local tribe.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTcyMzQ5NDM4OV5BMl5BanBnXkFtZTcwODUwNDg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "311,517",
    "imdbID": "tt0078788",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/Tt0xxAMTp8M?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Terminator 2: Judgment Day",
    "Year": "1991",
    "Rated": "R",
    "Released": "03 Jul 1991",
    "Runtime": "2 h 32 min",
    "Genre": "Action, Sci-Fi, Thriller",
    "Director": "James Cameron",
    "Writer": "James Cameron, William Wisher Jr.",
    "Actors": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick",
    "Plot": "The cyborg who once tried to kill Sarah Connor is dead, and another T-101 must now protect her teenage son, John Connor, from an even more powerful and advanced Terminator, the T-1000.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTg5NzUwMDU5NF5BMl5BanBnXkFtZTcwMjk2MDA4Mg@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "488,507",
    "imdbID": "tt0103064",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/eajuMYNYtuY?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Saving Private Ryan",
    "Year": "1998",
    "Rated": "TV-MA",
    "Released": "24 Jul 1998",
    "Runtime": "2 h 49 min",
    "Genre": "Action, Drama, War",
    "Director": "Steven Spielberg",
    "Writer": "Robert Rodat",
    "Actors": "Tom Hanks, Matt Damon, Tom Sizemore, Edward Burns",
    "Plot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BNjczODkxNTAxN15BMl5BanBnXkFtZTcwMTcwNjUxMw@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "553,260",
    "imdbID": "tt0120815",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/zwhP5b4tD6g?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Memento",
    "Year": "2000",
    "Rated": "R",
    "Released": "11 Oct 2000",
    "Runtime": "1 h 53 min",
    "Genre": "Mystery, Thriller",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan, Jonathan Nolan",
    "Actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
    "Plot": "A man, suffering from short-term memory loss, uses notes and tattoos to hunt for the man he thinks killed his wife.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTc4MjUxNDAwN15BMl5BanBnXkFtZTcwMDMwNDg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "562,835",
    "imdbID": "tt0209144",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/0vS0E9bBSL0?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "City Lights",
    "Year": "1931",
    "Rated": "G",
    "Released": "07 Mar 1931",
    "Runtime": "1 h 27 min",
    "Genre": "Comedy, Drama, Romance",
    "Director": "Charles Chaplin",
    "Writer": "Charles Chaplin",
    "Actors": "Charles Chaplin, Virginia Cherrill, Florence Lee, Harry Myers",
    "Plot": "The Tramp struggles to help a blind flower girl he has fallen in love with.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTc2NzYxMzY5MV5BMl5BanBnXkFtZTYwNzY5MTE5._V1_SX300.jpg",
    "imdbRating": "8.6",
    "imdbVotes": "63,396",
    "imdbID": "tt0021749",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/X_W1tOngo-w?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "Year": "1964",
    "Rated": "Approved",
    "Released": "29 Jan 1964",
    "Runtime": "1 h 35 min",
    "Genre": "Comedy, Sci-Fi, War",
    "Director": "Stanley Kubrick",
    "Writer": "Stanley Kubrick, Terry Southern",
    "Actors": "Peter Sellers, George C. Scott, Sterling Hayden, Keenan Wynn",
    "Plot": "An insane general starts a process to nuclear holocaust that a war room of politicians and generals frantically try to stop.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTU2ODM2NTkxNF5BMl5BanBnXkFtZTcwOTMwMzU3Mg@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "249,706",
    "imdbID": "tt0057012",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/71I4bdA7lDA?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Alien",
    "Year": "1979",
    "Rated": "TV-14",
    "Released": "22 Jun 1979",
    "Runtime": "1 h 57 min",
    "Genre": "Horror, Sci-Fi",
    "Director": "Ridley Scott",
    "Writer": "Dan O'Bannon, Ronald Shusett",
    "Actors": "Sigourney Weaver, Tom Skerritt, John Hurt, Veronica Cartwright",
    "Plot": "The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTk3NzkwMjA3OV5BMl5BanBnXkFtZTYwMTIwOTk2._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "366,499",
    "imdbID": "tt0078748",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/bEVY_lonKf4?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Modern Times",
    "Year": "1936",
    "Rated": "Approved",
    "Released": "25 Feb 1936",
    "Runtime": "1 h 27 min",
    "Genre": "Comedy, Drama",
    "Director": "Charles Chaplin",
    "Writer": "Charles Chaplin",
    "Actors": "Charles Chaplin, Paulette Goddard, Henry Bergman, Tiny Sandford",
    "Plot": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjMwMDA5NzEwOF5BMl5BanBnXkFtZTcwMzgwNDg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "80,905",
    "imdbID": "tt0027977",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/Ekwbgtp1_Vg?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Spirited Away",
    "Year": "2001",
    "Rated": "PG",
    "Released": "20 Jul 2001",
    "Runtime": "2 h 5 min",
    "Genre": "Animation, Adventure, Family, Fantasy",
    "Director": "Hayao Miyazaki",
    "Writer": "Hayao Miyazaki",
    "Actors": "Daveigh Chase, Suzanne Pleshette, Miyu Irino, Susan Egan",
    "Plot": "In the middle of her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and monsters; where humans are changed into animals; and a bathhouse for these creatures.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_SX300.jpg",
    "imdbRating": "8.6",
    "imdbVotes": "249,265",
    "imdbID": "tt0245429",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/6az9wGfeSgM?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "North by Northwest",
    "Year": "1959",
    "Rated": "Approved",
    "Released": "26 Sep 1959",
    "Runtime": "2 h 16 min",
    "Genre": "Action, Adventure, Crime, Mystery, Thriller",
    "Director": "Alfred Hitchcock",
    "Writer": "Ernest Lehman",
    "Actors": "Cary Grant, Eva Marie Saint, James Mason, Jessie Royce Landis",
    "Plot": "A hapless New York advertising executive is mistaken for a government agent by a group of foreign spies, and is pursued across the country while he looks for a way to survive.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTc1MjczNTgxM15BMl5BanBnXkFtZTcwOTYwNDg3OA@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "156,431",
    "imdbID": "tt0053125",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/HRfmTpmIUwo?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Back to the Future",
    "Year": "1985",
    "Rated": "PG",
    "Released": "03 Jul 1985",
    "Runtime": "1 h 56 min",
    "Genre": "Adventure, Comedy, Sci-Fi",
    "Director": "Robert Zemeckis",
    "Writer": "Robert Zemeckis, Bob Gale",
    "Actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover",
    "Plot": "A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend, Dr. Emmett Brown, and must make sure his high-school-age parents unite in order to save his own existence.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTk4OTQ1OTMwN15BMl5BanBnXkFtZTcwOTIwMzM3MQ@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "437,347",
    "imdbID": "tt0088763",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/yosuvf7Unmg?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Life Is Beautiful",
    "Year": "1997",
    "Rated": "PG-13",
    "Released": "12 Feb 1999",
    "Runtime": "1 h 56 min",
    "Genre": "Comedy, Drama, Romance, War",
    "Director": "Roberto Benigni",
    "Writer": "Vincenzo Cerami, Roberto Benigni",
    "Actors": "Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini, Giustino Durano",
    "Plot": "A Jewish man has a wonderful romance with the help of his humour, but must use that same quality to protect his son in a Nazi death camp.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTM3NDg0OTkxOV5BMl5BanBnXkFtZTcwMTk2NzIyMQ@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "239,414",
    "imdbID": "tt0118799",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/16RZHqCIy9M?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Shining",
    "Year": "1980",
    "Rated": "R",
    "Released": "23 May 1980",
    "Runtime": "2 h 22 min",
    "Genre": "Horror, Mystery",
    "Director": "Stanley Kubrick",
    "Writer": "Stephen King, Stanley Kubrick",
    "Actors": "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
    "Plot": "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "382,542",
    "imdbID": "tt0081505",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/5Cb3ik6zP2I?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Pianist",
    "Year": "2002",
    "Rated": "R",
    "Released": "28 Mar 2003",
    "Runtime": "2 h 30 min",
    "Genre": "Biography, Drama, History, War",
    "Director": "Roman Polanski",
    "Writer": "Ronald Harwood, Wladyslaw Szpilman",
    "Actors": "Adrien Brody, Thomas Kretschmann, Frank Finlay, Emilia Fox",
    "Plot": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTc4OTkyOTA3OF5BMl5BanBnXkFtZTYwMDIxNjk5._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "299,214",
    "imdbID": "tt0253474",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/u_jE7-6Uv7E?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Citizen Kane",
    "Year": "1941",
    "Rated": "Approved",
    "Released": "05 Sep 1941",
    "Runtime": "1 h 59 min",
    "Genre": "Drama, Mystery",
    "Director": "Orson Welles",
    "Writer": "Herman J. Mankiewicz, Orson Welles",
    "Actors": "Orson Welles, Joseph Cotten, Dorothy Comingore, Agnes Moorehead",
    "Plot": "Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTQ2Mjc1MDQwMl5BMl5BanBnXkFtZTcwNzUyOTUyMg@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "217,872",
    "imdbID": "tt0033467",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/zyv19bg0scg?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "The Departed",
    "Year": "2006",
    "Rated": "R",
    "Released": "06 Oct 2006",
    "Runtime": "2 h 31 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Martin Scorsese",
    "Writer": "William Monahan, Alan Mak",
    "Actors": "Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg",
    "Plot": "An undercover state cop who has infiltrated an Irish gang and a mole in the police force working for the same mob race to track down and identify each other before being exposed to the enemy, after both sides realize their outfit has a rat.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "550,166",
    "imdbID": "tt0407887",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/SGWvwjZ0eDc?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "M",
    "Year": "1931",
    "Rated": "Not Rated",
    "Released": "31 Aug 1931",
    "Runtime": "1 h 39 min",
    "Genre": "Crime, Drama, Thriller",
    "Director": "Fritz Lang",
    "Writer": "Thea von Harbou, Fritz Lang",
    "Actors": "Peter Lorre, Ellen Widmann, Inge Landgut, Otto Wernicke",
    "Plot": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTIwNDU4OTI2MF5BMl5BanBnXkFtZTcwNzI5MjcyMQ@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "69,261",
    "imdbID": "tt0022100",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/cIj3Bk0bhL8?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
  {
    "Title": "Django Unchained",
    "Year": "2012",
    "Rated": "R",
    "Released": "25 Dec 2012",
    "Runtime": "2 h 45 min",
    "Genre": "Adventure, Drama, Western",
    "Director": "Quentin Tarantino",
    "Writer": "Quentin Tarantino",
    "Actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
    "Plot": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    "Poster": "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
    "imdbRating": "8.5",
    "imdbVotes": "459,782",
    "imdbID": "tt1853728",
    "Type": "movie",
    "Response": "True",
    "0": {
      "trailer": "https:\/\/www.youtube.com\/v\/eUdM9vrCbow?version=3&amp;f=videos&amp;app=youtube_gdata"
    }
  },
]

let a = movies[0];
console.log(movies)
const movie = ["The Godfather", "The Good, the Bad and the Ugly", "Once Upon a Time in the West"];
movie[1] = "The Godfather";
movie[2] = "The Good, the Bad and the Ugly";
movie[3] = "Once Upon a Time in the West";

console.log(movie[1])
console.log(movie[2])
console.log(movie[3])

        /// movies realase between 1962-1972/////
