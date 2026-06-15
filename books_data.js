const books = [
  {
    "title": "The Summer I Turned Pretty Trilogy",
    "author": "Jenny Han",
    "rating": 4,
    "category": "Fiction",
    "year": "2009",
    "url": "https://openlibrary.org/works/OL17508740W",
    "image": "https://covers.openlibrary.org/b/id/7719210-M.jpg"
  },
  {
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "rating": 4,
    "category": "Fiction",
    "year": "1890",
    "url": "https://openlibrary.org/works/OL8193416W",
    "image": "https://covers.openlibrary.org/b/id/14314858-M.jpg"
  },
  {
    "title": "Shatter Me",
    "author": "Tahereh Mafi",
    "rating": 4,
    "category": "Fiction",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL16014245W",
    "image": "https://covers.openlibrary.org/b/id/6974992-M.jpg"
  },
  {
    "title": "The Silent Patient",
    "author": "Alex Michaelides",
    "rating": 4,
    "category": "Fiction",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL19096402W",
    "image": "https://covers.openlibrary.org/b/id/9407338-M.jpg"
  },
  {
    "title": "The Cruel Prince",
    "author": "Holly Black",
    "rating": 4,
    "category": "Fiction",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL17850410W",
    "image": "https://covers.openlibrary.org/b/id/8361789-M.jpg"
  },
  {
    "title": "Diary of a Wimpy Kid",
    "author": "Jeff Kinney",
    "rating": 4,
    "category": "Fiction",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL8483260W",
    "image": "https://covers.openlibrary.org/b/id/14376136-M.jpg"
  },
  {
    "title": "It Ends With Us",
    "author": "Colleen Hoover",
    "rating": 4,
    "category": "Fiction",
    "year": "2012",
    "url": "https://openlibrary.org/works/OL18020194W",
    "image": "https://covers.openlibrary.org/b/id/10473609-M.jpg"
  },
  {
    "title": "The Invisible Man",
    "author": "H. G. Wells",
    "rating": 4,
    "category": "Fiction",
    "year": "",
    "url": "https://openlibrary.org/works/OL52266W",
    "image": "https://covers.openlibrary.org/b/id/6419199-M.jpg"
  },
  {
    "title": "Powerless",
    "author": "Lauren Roberts",
    "rating": 4,
    "category": "Fiction",
    "year": "2023",
    "url": "https://openlibrary.org/works/OL34774028W",
    "image": "https://covers.openlibrary.org/b/id/14567864-M.jpg"
  },
  {
    "title": "Red, White & Royal Blue",
    "author": "Casey McQuiston",
    "rating": 4,
    "category": "Fiction",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20090688W",
    "image": "https://covers.openlibrary.org/b/id/9171544-M.jpg"
  },
  {
    "title": "Unravel me",
    "author": "Tahereh Mafi",
    "rating": 4,
    "category": "Fiction",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL19963111W",
    "image": "https://covers.openlibrary.org/b/id/12727567-M.jpg"
  },
  {
    "title": "Carmilla",
    "author": "Sheridan Le Fanu",
    "rating": 4,
    "category": "Fiction",
    "year": "1871",
    "url": "https://openlibrary.org/works/OL2895536W",
    "image": "https://covers.openlibrary.org/b/id/973851-M.jpg"
  },
  {
    "title": "The Summer I Turned Pretty",
    "author": "Jenny Han",
    "rating": 4,
    "category": "Fiction",
    "year": "2000",
    "url": "https://openlibrary.org/works/OL5819962W",
    "image": "https://covers.openlibrary.org/b/id/8783502-M.jpg"
  },
  {
    "title": "The Time Machine",
    "author": "H. G. Wells",
    "rating": 4,
    "category": "Fiction",
    "year": "1895",
    "url": "https://openlibrary.org/works/OL52267W",
    "image": "https://covers.openlibrary.org/b/id/9009316-M.jpg"
  },
  {
    "title": "The Eyes of Darkness",
    "author": "Dean Koontz",
    "rating": 4,
    "category": "Fiction",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL257746W",
    "image": "https://covers.openlibrary.org/b/id/12547107-M.jpg"
  },
  {
    "title": "Wuthering Heights",
    "author": "Emily Brontë",
    "rating": 4,
    "category": "Fiction",
    "year": "1846",
    "url": "https://openlibrary.org/works/OL21177W",
    "image": "https://covers.openlibrary.org/b/id/12818862-M.jpg"
  },
  {
    "title": "A Wizard of Earthsea",
    "author": "Ursula K. Le Guin",
    "rating": 4,
    "category": "Fiction",
    "year": "1968",
    "url": "https://openlibrary.org/works/OL59798W",
    "image": "https://covers.openlibrary.org/b/id/13617691-M.jpg"
  },
  {
    "title": "Anne of the Island",
    "author": "Lucy Maud Montgomery",
    "rating": 4,
    "category": "Fiction",
    "year": "1915",
    "url": "https://openlibrary.org/works/OL77748W",
    "image": "https://covers.openlibrary.org/b/id/14639028-M.jpg"
  },
  {
    "title": "They Both Die at the End",
    "author": "Adam Silvera",
    "rating": 4,
    "category": "Fiction",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL19713513W",
    "image": "https://covers.openlibrary.org/b/id/9280553-M.jpg"
  },
  {
    "title": "Anne of Green Gables",
    "author": "Lucy Maud Montgomery",
    "rating": 4,
    "category": "Fiction",
    "year": "1908",
    "url": "https://openlibrary.org/works/OL77746W",
    "image": "https://covers.openlibrary.org/b/id/14641084-M.jpg"
  },
  {
    "title": "The Scarlet Letter",
    "author": "Nathaniel Hawthorne",
    "rating": 3,
    "category": "Fiction",
    "year": "1800",
    "url": "https://openlibrary.org/works/OL455305W",
    "image": "https://covers.openlibrary.org/b/id/5654516-M.jpg"
  },
  {
    "title": "Caraval",
    "author": "Stephanie Garber",
    "rating": 4,
    "category": "Fiction",
    "year": "2000",
    "url": "https://openlibrary.org/works/OL17715454W",
    "image": "https://covers.openlibrary.org/b/id/7990753-M.jpg"
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "rating": 4,
    "category": "Fiction",
    "year": "1920",
    "url": "https://openlibrary.org/works/OL468431W",
    "image": "https://covers.openlibrary.org/b/id/10590366-M.jpg"
  },
  {
    "title": "A Princess of Mars",
    "author": "Edgar Rice Burroughs",
    "rating": 4,
    "category": "Fiction",
    "year": "1912",
    "url": "https://openlibrary.org/works/OL1418187W",
    "image": "https://covers.openlibrary.org/b/id/207226-M.jpg"
  },
  {
    "title": "Мастер и Маргарита",
    "author": "Михаил Афанасьевич Булгаков",
    "rating": 4,
    "category": "Fiction",
    "year": "1966",
    "url": "https://openlibrary.org/works/OL676009W",
    "image": "https://covers.openlibrary.org/b/id/12947486-M.jpg"
  },
  {
    "title": "The Shining",
    "author": "Stephen King",
    "rating": 4,
    "category": "Fiction",
    "year": "1977",
    "url": "https://openlibrary.org/works/OL81633W",
    "image": "https://covers.openlibrary.org/b/id/12376585-M.jpg"
  },
  {
    "title": "La Peste",
    "author": "Albert Camus",
    "rating": 4,
    "category": "Fiction",
    "year": "1942",
    "url": "https://openlibrary.org/works/OL1230715W",
    "image": "https://covers.openlibrary.org/b/id/13151272-M.jpg"
  },
  {
    "title": "Haunting Adeline",
    "author": "H. D. Carlton",
    "rating": 4,
    "category": "Fiction",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL27310398W",
    "image": "https://covers.openlibrary.org/b/id/12992962-M.jpg"
  },
  {
    "title": "Mrs. Dalloway",
    "author": "Virginia Woolf",
    "rating": 4,
    "category": "Fiction",
    "year": "1925",
    "url": "https://openlibrary.org/works/OL39349W",
    "image": "https://covers.openlibrary.org/b/id/6397580-M.jpg"
  },
  {
    "title": "The Wonderful Wizard of Oz",
    "author": "L. Frank Baum",
    "rating": 4,
    "category": "Fiction",
    "year": "1899",
    "url": "https://openlibrary.org/works/OL18417W",
    "image": "https://covers.openlibrary.org/b/id/552443-M.jpg"
  },
  {
    "title": "The Secret Garden",
    "author": "Frances Hodgson Burnett",
    "rating": 4,
    "category": "Fiction",
    "year": "1911",
    "url": "https://openlibrary.org/works/OL69612W",
    "image": "https://covers.openlibrary.org/b/id/12622062-M.jpg"
  },
  {
    "title": "Interview With the Vampire",
    "author": "Anne Rice",
    "rating": 4,
    "category": "Fiction",
    "year": "1672",
    "url": "https://openlibrary.org/works/OL77826W",
    "image": "https://covers.openlibrary.org/b/id/8401488-M.jpg"
  },
  {
    "title": "The Outsiders",
    "author": "S. E. Hinton",
    "rating": 4,
    "category": "Fiction",
    "year": "1967",
    "url": "https://openlibrary.org/works/OL2718328W",
    "image": "https://covers.openlibrary.org/b/id/7263662-M.jpg"
  },
  {
    "title": "Frankenstein; or, The Modern Prometheus",
    "author": "Mary Shelley",
    "rating": 4,
    "category": "Fiction",
    "year": "1818",
    "url": "https://openlibrary.org/works/OL450063W",
    "image": "https://covers.openlibrary.org/b/id/12356249-M.jpg"
  },
  {
    "title": "The Silmarillion",
    "author": "J.R.R. Tolkien",
    "rating": 4,
    "category": "Fiction",
    "year": "1977",
    "url": "https://openlibrary.org/works/OL27495W",
    "image": "https://covers.openlibrary.org/b/id/14627042-M.jpg"
  },
  {
    "title": "Atlas Shrugged (Centennial Ed. HC)",
    "author": "Ayn Rand",
    "rating": 3,
    "category": "Fiction",
    "year": "1936",
    "url": "https://openlibrary.org/works/OL731644W",
    "image": "https://covers.openlibrary.org/b/id/362277-M.jpg"
  },
  {
    "title": "The Sun Also Rises",
    "author": "Ernest Hemingway",
    "rating": 4,
    "category": "Fiction",
    "year": "1926",
    "url": "https://openlibrary.org/works/OL62979W",
    "image": "https://covers.openlibrary.org/b/id/78741-M.jpg"
  },
  {
    "title": "The Man in the Brown Suit",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1924",
    "url": "https://openlibrary.org/works/OL472549W",
    "image": "https://covers.openlibrary.org/b/id/11153508-M.jpg"
  },
  {
    "title": "The Secret of Chimneys",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1925",
    "url": "https://openlibrary.org/works/OL472542W",
    "image": "https://covers.openlibrary.org/b/id/12996574-M.jpg"
  },
  {
    "title": "Never Lie",
    "author": "Freida McFadden",
    "rating": 3,
    "category": "Mystery",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL34224558W",
    "image": "https://covers.openlibrary.org/b/id/13198561-M.jpg"
  },
  {
    "title": "At Bertram's Hotel",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1965",
    "url": "https://openlibrary.org/works/OL265415W",
    "image": "https://covers.openlibrary.org/b/id/6379981-M.jpg"
  },
  {
    "title": "4:50 from Paddington",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1957",
    "url": "https://openlibrary.org/works/OL471500W",
    "image": "https://covers.openlibrary.org/b/id/13151352-M.jpg"
  },
  {
    "title": "The Mirror Crack'd from Side to Side",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1960",
    "url": "https://openlibrary.org/works/OL471990W",
    "image": "https://covers.openlibrary.org/b/id/10561150-M.jpg"
  },
  {
    "title": "They Do It with Mirrors",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1952",
    "url": "https://openlibrary.org/works/OL471871W",
    "image": "https://covers.openlibrary.org/b/id/10249524-M.jpg"
  },
  {
    "title": "Hallowe'en Party",
    "author": "Agatha Christie",
    "rating": 3,
    "category": "Mystery",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL471832W",
    "image": "https://covers.openlibrary.org/b/id/11160095-M.jpg"
  },
  {
    "title": "The Big Four",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1927",
    "url": "https://openlibrary.org/works/OL471947W",
    "image": "https://covers.openlibrary.org/b/id/12996529-M.jpg"
  },
  {
    "title": "After the Funeral",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1953",
    "url": "https://openlibrary.org/works/OL471943W",
    "image": "https://covers.openlibrary.org/b/id/12996535-M.jpg"
  },
  {
    "title": "The Hidden Staircase",
    "author": "Carolyn Keene",
    "rating": 4,
    "category": "Mystery",
    "year": "1930",
    "url": "https://openlibrary.org/works/OL39160W",
    "image": "https://covers.openlibrary.org/b/id/15150728-M.jpg"
  },
  {
    "title": "Murder in Three Acts",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1934",
    "url": "https://openlibrary.org/works/OL471765W",
    "image": "https://covers.openlibrary.org/b/id/6874620-M.jpg"
  },
  {
    "title": "Poirot investigates",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1924",
    "url": "https://openlibrary.org/works/OL471940W",
    "image": "https://covers.openlibrary.org/b/id/13670505-M.jpg"
  },
  {
    "title": "The Murder of Roger Ackroyd",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1926",
    "url": "https://openlibrary.org/works/OL471932W",
    "image": "https://covers.openlibrary.org/b/id/13151356-M.jpg"
  },
  {
    "title": "The Big Sleep",
    "author": "Raymond Chandler",
    "rating": 4,
    "category": "Mystery",
    "year": "1939",
    "url": "https://openlibrary.org/works/OL15400582W",
    "image": "https://covers.openlibrary.org/b/id/7268475-M.jpg"
  },
  {
    "title": "Sleeping Murder",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1940",
    "url": "https://openlibrary.org/works/OL472250W",
    "image": "https://covers.openlibrary.org/b/id/10247294-M.jpg"
  },
  {
    "title": "Five Little Pigs",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1942",
    "url": "https://openlibrary.org/works/OL471666W",
    "image": "https://covers.openlibrary.org/b/id/14578138-M.jpg"
  },
  {
    "title": "Nemesis",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1970",
    "url": "https://openlibrary.org/works/OL472594W",
    "image": "https://covers.openlibrary.org/b/id/10249139-M.jpg"
  },
  {
    "title": "The Inmate",
    "author": "Freida McFadden",
    "rating": 5,
    "category": "Mystery",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL31191485W",
    "image": "https://covers.openlibrary.org/b/id/15125020-M.jpg"
  },
  {
    "title": "The Locked Door",
    "author": "Freida McFadden",
    "rating": 4,
    "category": "Mystery",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL28954802W",
    "image": "https://covers.openlibrary.org/b/id/13156268-M.jpg"
  },
  {
    "title": "The Sign of Four",
    "author": "Arthur Conan Doyle",
    "rating": 4,
    "category": "Mystery",
    "year": "1889",
    "url": "https://openlibrary.org/works/OL262438W",
    "image": "https://covers.openlibrary.org/b/id/9247987-M.jpg"
  },
  {
    "title": "Crooked House",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1949",
    "url": "https://openlibrary.org/works/OL471891W",
    "image": "https://covers.openlibrary.org/b/id/14570595-M.jpg"
  },
  {
    "title": "Peril at End House",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1932",
    "url": "https://openlibrary.org/works/OL472165W",
    "image": "https://covers.openlibrary.org/b/id/12996556-M.jpg"
  },
  {
    "title": "The Murder at the Vicarage",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1930",
    "url": "https://openlibrary.org/works/OL471895W",
    "image": "https://covers.openlibrary.org/b/id/12996560-M.jpg"
  },
  {
    "title": "Mrs. McGinty's Dead",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1951",
    "url": "https://openlibrary.org/works/OL472044W",
    "image": "https://covers.openlibrary.org/b/id/10249324-M.jpg"
  },
  {
    "title": "His Last Bow [8 stories]",
    "author": "Arthur Conan Doyle",
    "rating": 4,
    "category": "Mystery",
    "year": "1917",
    "url": "https://openlibrary.org/works/OL262452W",
    "image": "https://covers.openlibrary.org/b/id/8243267-M.jpg"
  },
  {
    "title": "The Red House Mystery",
    "author": "A. A. Milne",
    "rating": 4,
    "category": "Mystery",
    "year": "1922",
    "url": "https://openlibrary.org/works/OL476846W",
    "image": "https://covers.openlibrary.org/b/id/6299936-M.jpg"
  },
  {
    "title": "The Sittaford Mystery",
    "author": "Agatha Christie",
    "rating": 3,
    "category": "Mystery",
    "year": "1931",
    "url": "https://openlibrary.org/works/OL471664W",
    "image": "https://covers.openlibrary.org/b/id/13151831-M.jpg"
  },
  {
    "title": "And Then There Were None",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1939",
    "url": "https://openlibrary.org/works/OL471565W",
    "image": "https://covers.openlibrary.org/b/id/11172296-M.jpg"
  },
  {
    "title": "One for the Money",
    "author": "Janet Evanovich",
    "rating": 4,
    "category": "Mystery",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL48035W",
    "image": "https://covers.openlibrary.org/b/id/14361811-M.jpg"
  },
  {
    "title": "Murder on the Links",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1923",
    "url": "https://openlibrary.org/works/OL472073W",
    "image": "https://covers.openlibrary.org/b/id/14582832-M.jpg"
  },
  {
    "title": "Whose Body?",
    "author": "Dorothy L. Sayers",
    "rating": 4,
    "category": "Mystery",
    "year": "1923",
    "url": "https://openlibrary.org/works/OL2234917W",
    "image": "https://covers.openlibrary.org/b/id/8311819-M.jpg"
  },
  {
    "title": "Gone Girl",
    "author": "Gillian Flynn",
    "rating": 4,
    "category": "Mystery",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL16239762W",
    "image": "https://covers.openlibrary.org/b/id/8368314-M.jpg"
  },
  {
    "title": "Memoirs of Sherlock Holmes [11 stories]",
    "author": "Arthur Conan Doyle",
    "rating": 5,
    "category": "Mystery",
    "year": "1893",
    "url": "https://openlibrary.org/works/OL262463W",
    "image": "https://covers.openlibrary.org/b/id/9246429-M.jpg"
  },
  {
    "title": "The Adventures of Sherlock Holmes [12 stories]",
    "author": "Arthur Conan Doyle",
    "rating": 4,
    "category": "Mystery",
    "year": "1892",
    "url": "https://openlibrary.org/works/OL262421W",
    "image": "https://covers.openlibrary.org/b/id/6717853-M.jpg"
  },
  {
    "title": "Destination Unknown",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1954",
    "url": "https://openlibrary.org/works/OL471738W",
    "image": "https://covers.openlibrary.org/b/id/6487762-M.jpg"
  },
  {
    "title": "Die Softly",
    "author": "Christopher Pike",
    "rating": 5,
    "category": "Mystery",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL1000821W",
    "image": "https://covers.openlibrary.org/b/id/2394997-M.jpg"
  },
  {
    "title": "Um casamento arranjado",
    "author": "Zana Kheiron",
    "rating": 4,
    "category": "Romance",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL35351151W",
    "image": "https://covers.openlibrary.org/b/id/14321120-M.jpg"
  },
  {
    "title": "Twisted Games",
    "author": "Ana Huang",
    "rating": 4,
    "category": "Romance",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL25515697W",
    "image": "https://covers.openlibrary.org/b/id/12821465-M.jpg"
  },
  {
    "title": "Twisted Love",
    "author": "Ana Huang",
    "rating": 4,
    "category": "Romance",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL24390422W",
    "image": "https://covers.openlibrary.org/b/id/12940491-M.jpg"
  },
  {
    "title": "Twisted Hate",
    "author": "Ana Huang",
    "rating": 4,
    "category": "Romance",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL27245843W",
    "image": "https://covers.openlibrary.org/b/id/12928487-M.jpg"
  },
  {
    "title": "Married at first sight",
    "author": "Gu Lingfei",
    "rating": 5,
    "category": "Romance",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL35223328W",
    "image": "https://covers.openlibrary.org/b/id/14312142-M.jpg"
  },
  {
    "title": "Punk 57",
    "author": "Penelope Douglas",
    "rating": 4,
    "category": "Romance",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL20808172W",
    "image": "https://covers.openlibrary.org/b/id/10107803-M.jpg"
  },
  {
    "title": "It Starts with Us",
    "author": "Colleen Hoover",
    "rating": 4,
    "category": "Romance",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL27733867W",
    "image": "https://covers.openlibrary.org/b/id/12749873-M.jpg"
  },
  {
    "title": "The Sweetest Oblivion",
    "author": "Danielle Lori",
    "rating": 4,
    "category": "Romance",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL24314065W",
    "image": "https://covers.openlibrary.org/b/id/10831263-M.jpg"
  },
  {
    "title": "Twisted Lies",
    "author": "Ana Huang",
    "rating": 4,
    "category": "Romance",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL27818823W",
    "image": "https://covers.openlibrary.org/b/id/14425197-M.jpg"
  },
  {
    "title": "Corrupt",
    "author": "Penelope Douglas",
    "rating": 4,
    "category": "Romance",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL20893778W",
    "image": "https://covers.openlibrary.org/b/id/10226443-M.jpg"
  },
  {
    "title": "Breaking Point",
    "author": "Emma Darcy",
    "rating": 4,
    "category": "Romance",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL2959315W",
    "image": "https://covers.openlibrary.org/b/id/10387434-M.jpg"
  },
  {
    "title": "Devil and the Deep Sea",
    "author": "Sara Craven",
    "rating": 4,
    "category": "Romance",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL11327658W",
    "image": "https://covers.openlibrary.org/b/id/9620545-M.jpg"
  },
  {
    "title": "Heated Rivalry",
    "author": "Rachel Reid",
    "rating": 4,
    "category": "Romance",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL25434351W",
    "image": "https://covers.openlibrary.org/b/id/15226452-M.jpg"
  },
  {
    "title": "Hopeless",
    "author": "Colleen Hoover",
    "rating": 4,
    "category": "Romance",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL20564687W",
    "image": "https://covers.openlibrary.org/b/id/10549926-M.jpg"
  },
  {
    "title": "Before December",
    "author": "Joana Marcus",
    "rating": 4,
    "category": "Romance",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL26128903W",
    "image": "https://covers.openlibrary.org/b/id/12080400-M.jpg"
  },
  {
    "title": "A Man Possessed",
    "author": "Penny Jordan",
    "rating": 4,
    "category": "Romance",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL11327957W",
    "image": "https://covers.openlibrary.org/b/id/8577643-M.jpg"
  },
  {
    "title": "Destroy Me",
    "author": "Tahereh Mafi",
    "rating": 4,
    "category": "Romance",
    "year": "2012",
    "url": "https://openlibrary.org/works/OL21775531W",
    "image": "https://covers.openlibrary.org/b/id/14427908-M.jpg"
  },
  {
    "title": "Bought with His Name",
    "author": "Penny Jordan",
    "rating": 4,
    "category": "Romance",
    "year": "1982",
    "url": "https://openlibrary.org/works/OL3759285W",
    "image": "https://covers.openlibrary.org/b/id/7248501-M.jpg"
  },
  {
    "title": "Uncertain Destiny",
    "author": "Carole Mortimer",
    "rating": 4,
    "category": "Romance",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL3775397W",
    "image": "https://covers.openlibrary.org/b/id/15084828-M.jpg"
  },
  {
    "title": "The Marriage Deal",
    "author": "Sara Craven",
    "rating": 3,
    "category": "Romance",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL11327660W",
    "image": "https://covers.openlibrary.org/b/id/10322881-M.jpg"
  },
  {
    "title": "Falcon's Prey",
    "author": "Penny Jordan",
    "rating": 3,
    "category": "Romance",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL11327987W",
    "image": "https://covers.openlibrary.org/b/id/6460263-M.jpg"
  },
  {
    "title": "To Catch A Butterfly",
    "author": "Marjorie Lewty",
    "rating": 4,
    "category": "Romance",
    "year": "1977",
    "url": "https://openlibrary.org/works/OL1708087W",
    "image": "https://covers.openlibrary.org/b/id/10599967-M.jpg"
  },
  {
    "title": "Confirmed bachelor",
    "author": "Roberta Leigh",
    "rating": 4,
    "category": "Romance",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL4342701W",
    "image": "https://covers.openlibrary.org/b/id/7393889-M.jpg"
  },
  {
    "title": "Priest",
    "author": "Sierra Simone",
    "rating": 4,
    "category": "Romance",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL21833211W",
    "image": "https://covers.openlibrary.org/b/id/10409469-M.jpg"
  },
  {
    "title": "To Speak of Love",
    "author": "Claudia Jameson",
    "rating": 4,
    "category": "Romance",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL4215998W",
    "image": "https://covers.openlibrary.org/b/id/8577635-M.jpg"
  },
  {
    "title": "Not Once But Twice",
    "author": "Betty Neels",
    "rating": 4,
    "category": "Romance",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL3457830W",
    "image": "https://covers.openlibrary.org/b/id/2410565-M.jpg"
  },
  {
    "title": "Taggart's Woman",
    "author": "Carole Mortimer",
    "rating": 4,
    "category": "Romance",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL3775449W",
    "image": "https://covers.openlibrary.org/b/id/9530489-M.jpg"
  },
  {
    "title": "Temporary Bride",
    "author": "P. Wilson",
    "rating": 4,
    "category": "Romance",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL6794523W",
    "image": "https://covers.openlibrary.org/b/id/6888427-M.jpg"
  },
  {
    "title": "Season of Mists",
    "author": "Anne Mather",
    "rating": 3,
    "category": "Romance",
    "year": "1982",
    "url": "https://openlibrary.org/works/OL3771321W",
    "image": "https://covers.openlibrary.org/b/id/7321349-M.jpg"
  },
  {
    "title": "Out of Control",
    "author": "Charlotte Lamb",
    "rating": 4,
    "category": "Romance",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL11277304W",
    "image": "https://covers.openlibrary.org/b/id/9242841-M.jpg"
  },
  {
    "title": "Past Passion",
    "author": "Penny Jordan",
    "rating": 3,
    "category": "Romance",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL3759349W",
    "image": "https://covers.openlibrary.org/b/id/7248486-M.jpg"
  },
  {
    "title": "King of Pride",
    "author": "Ana Huang",
    "rating": 4,
    "category": "Romance",
    "year": "2023",
    "url": "https://openlibrary.org/works/OL29330646W",
    "image": "https://covers.openlibrary.org/b/id/13244526-M.jpg"
  },
  {
    "title": "Icebreaker",
    "author": "Hannah Grace",
    "rating": 4,
    "category": "Romance",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL28952677W",
    "image": "https://covers.openlibrary.org/b/id/13180728-M.jpg"
  },
  {
    "title": "Without Trust",
    "author": "Penny Jordan",
    "rating": 4,
    "category": "Romance",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL11327979W",
    "image": "https://covers.openlibrary.org/b/id/6695537-M.jpg"
  },
  {
    "title": "Contra Su Voluntad",
    "author": "Sara Craven",
    "rating": 4,
    "category": "Romance",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL3467487W",
    "image": "https://covers.openlibrary.org/b/id/1186726-M.jpg"
  },
  {
    "title": "Death's End (The Three-Body Problem Series Book 3)",
    "author": "刘慈欣",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL17610507W",
    "image": "https://covers.openlibrary.org/b/id/7893958-M.jpg"
  },
  {
    "title": "The Fall of Hyperion",
    "author": "Dan Simmons",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL1963251W",
    "image": "https://covers.openlibrary.org/b/id/484900-M.jpg"
  },
  {
    "title": "The Caves of Steel",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1953",
    "url": "https://openlibrary.org/works/OL46401W",
    "image": "https://covers.openlibrary.org/b/id/13790511-M.jpg"
  },
  {
    "title": "Понедельник начинается в субботу; Пикник на обочине",
    "author": "Аркадий Стругацкий",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1978",
    "url": "https://openlibrary.org/works/OL7967812W",
    "image": "https://covers.openlibrary.org/b/id/6752719-M.jpg"
  },
  {
    "title": "The Naked Sun",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1954",
    "url": "https://openlibrary.org/works/OL46398W",
    "image": "https://covers.openlibrary.org/b/id/6542967-M.jpg"
  },
  {
    "title": "The Dark Forest (The Three-Body Problem Series Book 2)",
    "author": "刘慈欣",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL16314245W",
    "image": "https://covers.openlibrary.org/b/id/10526598-M.jpg"
  },
  {
    "title": "The Foundation Trilogy",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1950",
    "url": "https://openlibrary.org/works/OL46390W",
    "image": "https://covers.openlibrary.org/b/id/6502517-M.jpg"
  },
  {
    "title": "Nightfall",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL46374W",
    "image": "https://covers.openlibrary.org/b/id/9302081-M.jpg"
  },
  {
    "title": "I Have No Mouth and I Must Scream",
    "author": "Harlan Ellison",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1972",
    "url": "https://openlibrary.org/works/OL1737320W",
    "image": "https://covers.openlibrary.org/b/id/5540875-M.jpg"
  },
  {
    "title": "Project Hail Mary",
    "author": "Andy Weir",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL21745884W",
    "image": "https://covers.openlibrary.org/b/id/11200092-M.jpg"
  },
  {
    "title": "The End of Eternity",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1955",
    "url": "https://openlibrary.org/works/OL46108W",
    "image": "https://covers.openlibrary.org/b/id/6622699-M.jpg"
  },
  {
    "title": "The Mote in God's Eye",
    "author": "Larry Niven",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1974",
    "url": "https://openlibrary.org/works/OL15331302W",
    "image": "https://covers.openlibrary.org/b/id/408133-M.jpg"
  },
  {
    "title": "God Emperor of Dune",
    "author": "Frank Herbert",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL893515W",
    "image": "https://covers.openlibrary.org/b/id/6711531-M.jpg"
  },
  {
    "title": "Snow Crash",
    "author": "Neal Stephenson",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL38501W",
    "image": "https://covers.openlibrary.org/b/id/392508-M.jpg"
  },
  {
    "title": "The Stars, Like Dust",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1951",
    "url": "https://openlibrary.org/works/OL46399W",
    "image": "https://covers.openlibrary.org/b/id/6565338-M.jpg"
  },
  {
    "title": "Dune Messiah",
    "author": "Frank Herbert",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL893526W",
    "image": "https://covers.openlibrary.org/b/id/2421405-M.jpg"
  },
  {
    "title": "Altered Carbon",
    "author": "Richard K. Morgan",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2002",
    "url": "https://openlibrary.org/works/OL29914687W",
    "image": "https://covers.openlibrary.org/b/id/13223488-M.jpg"
  },
  {
    "title": "Artemis",
    "author": "Andy Weir",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL17837968W",
    "image": "https://covers.openlibrary.org/b/id/8235551-M.jpg"
  },
  {
    "title": "Chapterhouse Dune",
    "author": "Frank Herbert",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL893508W",
    "image": "https://covers.openlibrary.org/b/id/5536140-M.jpg"
  },
  {
    "title": "2001",
    "author": "Arthur C. Clarke",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1968",
    "url": "https://openlibrary.org/works/OL17365W",
    "image": "https://covers.openlibrary.org/b/id/11344400-M.jpg"
  },
  {
    "title": "Solaris",
    "author": "Stanisław Lem",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1961",
    "url": "https://openlibrary.org/works/OL109524W",
    "image": "https://covers.openlibrary.org/b/id/12313764-M.jpg"
  },
  {
    "title": "Endymion",
    "author": "Dan Simmons",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL1963279W",
    "image": "https://covers.openlibrary.org/b/id/975059-M.jpg"
  },
  {
    "title": "The Robots of Dawn",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL46377W",
    "image": "https://covers.openlibrary.org/b/id/14372309-M.jpg"
  },
  {
    "title": "Dune",
    "author": "Frank Herbert",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1965",
    "url": "https://openlibrary.org/works/OL893415W",
    "image": "https://covers.openlibrary.org/b/id/11481354-M.jpg"
  },
  {
    "title": "Foundation",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1951",
    "url": "https://openlibrary.org/works/OL46125W",
    "image": "https://covers.openlibrary.org/b/id/14612610-M.jpg"
  },
  {
    "title": "The Martian Chronicles",
    "author": "Ray Bradbury",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1950",
    "url": "https://openlibrary.org/works/OL103134W",
    "image": "https://covers.openlibrary.org/b/id/9346537-M.jpg"
  },
  {
    "title": "Ubik",
    "author": "Philip K. Dick",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL2172454W",
    "image": "https://covers.openlibrary.org/b/id/5018327-M.jpg"
  },
  {
    "title": "Contact",
    "author": "Carl Sagan",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL2950903W",
    "image": "https://covers.openlibrary.org/b/id/4143957-M.jpg"
  },
  {
    "title": "Friday",
    "author": "Robert A. Heinlein",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1982",
    "url": "https://openlibrary.org/works/OL59706W",
    "image": "https://covers.openlibrary.org/b/id/14630717-M.jpg"
  },
  {
    "title": "Pandora's Star",
    "author": "Peter F. Hamilton",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2004",
    "url": "https://openlibrary.org/works/OL474061W",
    "image": "https://covers.openlibrary.org/b/id/7912438-M.jpg"
  },
  {
    "title": "The Long Way to a Small, Angry Planet",
    "author": "Becky Chambers",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL17716925W",
    "image": "https://covers.openlibrary.org/b/id/8902659-M.jpg"
  },
  {
    "title": "Lucifer's Hammer",
    "author": "Larry Niven",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1977",
    "url": "https://openlibrary.org/works/OL510435W",
    "image": "https://covers.openlibrary.org/b/id/4414184-M.jpg"
  },
  {
    "title": "A Closed and Common Orbit",
    "author": "Becky Chambers",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL17897265W",
    "image": "https://covers.openlibrary.org/b/id/8211950-M.jpg"
  },
  {
    "title": "Heretics of Dune",
    "author": "Frank Herbert",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1984",
    "url": "https://openlibrary.org/works/OL893502W",
    "image": "https://covers.openlibrary.org/b/id/284530-M.jpg"
  },
  {
    "title": "Burning Chrome",
    "author": "William Gibson",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL27254W",
    "image": "https://covers.openlibrary.org/b/id/28351-M.jpg"
  },
  {
    "title": "Debt",
    "author": "David Graeber",
    "rating": 5,
    "category": "History",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL14909099W",
    "image": "https://covers.openlibrary.org/b/id/6299464-M.jpg"
  },
  {
    "title": "The Story of Philosophy",
    "author": "Will Durant",
    "rating": 4,
    "category": "History",
    "year": "1926",
    "url": "https://openlibrary.org/works/OL1073898W",
    "image": "https://covers.openlibrary.org/b/id/405360-M.jpg"
  },
  {
    "title": "A People's History of the United States",
    "author": "Howard Zinn",
    "rating": 4,
    "category": "History",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL50283W",
    "image": "https://covers.openlibrary.org/b/id/10592817-M.jpg"
  },
  {
    "title": "Ringkasan sejarat filsafat",
    "author": "K. Bertens",
    "rating": 5,
    "category": "History",
    "year": "1975",
    "url": "https://openlibrary.org/works/OL18170596W",
    "image": "https://covers.openlibrary.org/b/id/8333070-M.jpg"
  },
  {
    "title": "The great conversation",
    "author": "Norman Melchert",
    "rating": 4,
    "category": "History",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL1810842W",
    "image": "https://covers.openlibrary.org/b/id/1454089-M.jpg"
  },
  {
    "title": "Thirty years of the Soviet state",
    "author": "Unknown",
    "rating": 4,
    "category": "History",
    "year": "1947",
    "url": "https://openlibrary.org/works/OL16597059M",
    "image": ""
  },
  {
    "title": "Mga gunita ng himagsikan",
    "author": "Emilio Aguinaldo",
    "rating": 4,
    "category": "History",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL2330507W",
    "image": ""
  },
  {
    "title": "The Lessons of History",
    "author": "Will Durant",
    "rating": 4,
    "category": "History",
    "year": "1968",
    "url": "https://openlibrary.org/works/OL1073956W",
    "image": "https://covers.openlibrary.org/b/id/7240225-M.jpg"
  },
  {
    "title": "Freedom at Midnight",
    "author": "Dominique Lapierre",
    "rating": 4,
    "category": "History",
    "year": "1975",
    "url": "https://openlibrary.org/works/OL1751683W",
    "image": "https://covers.openlibrary.org/b/id/4410-M.jpg"
  },
  {
    "title": "The Art of War",
    "author": "孙武 (Sun Tzu)",
    "rating": 4,
    "category": "History",
    "year": "1900",
    "url": "https://openlibrary.org/works/OL244537W",
    "image": "https://covers.openlibrary.org/b/id/4849549-M.jpg"
  },
  {
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "rating": 4,
    "category": "History",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL17075811W",
    "image": "https://covers.openlibrary.org/b/id/8634250-M.jpg"
  },
  {
    "title": "The Rise and Fall of the Third Reich",
    "author": "William L. Shirer",
    "rating": 4,
    "category": "History",
    "year": "1901",
    "url": "https://openlibrary.org/works/OL47181W",
    "image": "https://covers.openlibrary.org/b/id/6558536-M.jpg"
  },
  {
    "title": "Capitalist Realism",
    "author": "Mark Fisher",
    "rating": 4,
    "category": "History",
    "year": "2009",
    "url": "https://openlibrary.org/works/OL15683250W",
    "image": "https://covers.openlibrary.org/b/id/6707037-M.jpg"
  },
  {
    "title": "The story of art",
    "author": "E. H. Gombrich",
    "rating": 4,
    "category": "History",
    "year": "1950",
    "url": "https://openlibrary.org/works/OL686193W",
    "image": "https://covers.openlibrary.org/b/id/538390-M.jpg"
  },
  {
    "title": "The Age of Revolution",
    "author": "Eric Hobsbawm",
    "rating": 3,
    "category": "History",
    "year": "1962",
    "url": "https://openlibrary.org/works/OL495659W",
    "image": "https://covers.openlibrary.org/b/id/4765129-M.jpg"
  },
  {
    "title": "Bumi Manusia",
    "author": "Pramoedya Ananta Toer",
    "rating": 4,
    "category": "History",
    "year": "1972",
    "url": "https://openlibrary.org/works/OL307247W",
    "image": "https://covers.openlibrary.org/b/id/6643692-M.jpg"
  },
  {
    "title": "A history of the modern world",
    "author": "R. R. Palmer",
    "rating": 5,
    "category": "History",
    "year": "1950",
    "url": "https://openlibrary.org/works/OL3477033W",
    "image": "https://covers.openlibrary.org/b/id/6286058-M.jpg"
  },
  {
    "title": "The Dawn of Everything",
    "author": "David Graeber",
    "rating": 4,
    "category": "History",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL24663287W",
    "image": "https://covers.openlibrary.org/b/id/11359192-M.jpg"
  },
  {
    "title": "21 Lessons for the 21st Century",
    "author": "Yuval Noah Harari",
    "rating": 4,
    "category": "History",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL17917961W",
    "image": "https://covers.openlibrary.org/b/id/10108277-M.jpg"
  },
  {
    "title": "Art",
    "author": "Frederick Hartt",
    "rating": 5,
    "category": "History",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL3900754W",
    "image": "https://covers.openlibrary.org/b/id/6793480-M.jpg"
  },
  {
    "title": "The Unfinished Nation",
    "author": "Alan Brinkley",
    "rating": 4,
    "category": "History",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL176193W",
    "image": "https://covers.openlibrary.org/b/id/4948125-M.jpg"
  },
  {
    "title": "The discovery of India",
    "author": "Jawaharlal Nehru",
    "rating": 4,
    "category": "History",
    "year": "1946",
    "url": "https://openlibrary.org/works/OL296039W",
    "image": "https://covers.openlibrary.org/b/id/128122-M.jpg"
  },
  {
    "title": "Art history",
    "author": "Marilyn Stokstad",
    "rating": 4,
    "category": "History",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL29921W",
    "image": "https://covers.openlibrary.org/b/id/596109-M.jpg"
  },
  {
    "title": "Letters from a father to his daughter",
    "author": "Jawaharlal Nehru",
    "rating": 5,
    "category": "History",
    "year": "1930",
    "url": "https://openlibrary.org/works/OL296153W",
    "image": "https://covers.openlibrary.org/b/id/8210996-M.jpg"
  },
  {
    "title": "Postwar",
    "author": "Tony Judt",
    "rating": 4,
    "category": "History",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL1894813W",
    "image": "https://covers.openlibrary.org/b/id/111385-M.jpg"
  },
  {
    "title": "The Enduring Vision",
    "author": "Paul S. Boyer",
    "rating": 5,
    "category": "History",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL2024851W",
    "image": "https://covers.openlibrary.org/b/id/8237922-M.jpg"
  },
  {
    "title": "A history of the English-speaking peoples",
    "author": "Winston S. Churchill",
    "rating": 4,
    "category": "History",
    "year": "1950",
    "url": "https://openlibrary.org/works/OL134334W",
    "image": "https://covers.openlibrary.org/b/id/6602132-M.jpg"
  },
  {
    "title": "History of art",
    "author": "H. W. Janson",
    "rating": 4,
    "category": "History",
    "year": "1962",
    "url": "https://openlibrary.org/works/OL1719867W",
    "image": "https://covers.openlibrary.org/b/id/10075231-M.jpg"
  },
  {
    "title": "An echo in the darkness",
    "author": "Francine Rivers",
    "rating": 4,
    "category": "History",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL13015026W",
    "image": "https://covers.openlibrary.org/b/id/9157775-M.jpg"
  },
  {
    "title": "Traditions & encounters",
    "author": "Jerry H. Bentley",
    "rating": 5,
    "category": "History",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL4289172W",
    "image": "https://covers.openlibrary.org/b/id/65184-M.jpg"
  },
  {
    "title": "A History of Western Philosophy",
    "author": "Bertrand Russell",
    "rating": 4,
    "category": "History",
    "year": "1945",
    "url": "https://openlibrary.org/works/OL1088357W",
    "image": "https://covers.openlibrary.org/b/id/405359-M.jpg"
  },
  {
    "title": "A Room of One's Own",
    "author": "Virginia Woolf",
    "rating": 4,
    "category": "History",
    "year": "1929",
    "url": "https://openlibrary.org/works/OL39379W",
    "image": "https://covers.openlibrary.org/b/id/6559057-M.jpg"
  },
  {
    "title": "ההיסטוריה של המחר",
    "author": "Yuval Noah Harari",
    "rating": 4,
    "category": "History",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL17641518W",
    "image": "https://covers.openlibrary.org/b/id/7914168-M.jpg"
  },
  {
    "title": "Letters on demonology and witchcraft",
    "author": "Sir Walter Scott",
    "rating": 4,
    "category": "History",
    "year": "1830",
    "url": "https://openlibrary.org/works/OL863779W",
    "image": "https://covers.openlibrary.org/b/id/5645404-M.jpg"
  },
  {
    "title": "History of Egypt, Chaldea, Syria, Babylonia, And Assyria",
    "author": "Gaston Maspero",
    "rating": 3,
    "category": "History",
    "year": "1901",
    "url": "https://openlibrary.org/works/OL1101827W",
    "image": "https://covers.openlibrary.org/b/id/5570337-M.jpg"
  },
  {
    "title": "La conquête du pain",
    "author": "Peter Kropotkin",
    "rating": 4,
    "category": "History",
    "year": "1892",
    "url": "https://openlibrary.org/works/OL1105382W",
    "image": "https://covers.openlibrary.org/b/id/7296134-M.jpg"
  },
  {
    "title": "Ioannis Zonarae Annales",
    "author": "Zonaras, Joannes",
    "rating": 4,
    "category": "History",
    "year": "1841",
    "url": "https://openlibrary.org/works/OL20210369M",
    "image": ""
  },
  {
    "title": "Wings of Fire",
    "author": "A. P. J. Abdul Kalam",
    "rating": 4,
    "category": "Biography",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL1037811W",
    "image": "https://covers.openlibrary.org/b/id/9153819-M.jpg"
  },
  {
    "title": "The Diary of a Young Girl- Anne Frank",
    "author": "Anne Frank",
    "rating": 4,
    "category": "Biography",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL27294413W",
    "image": "https://covers.openlibrary.org/b/id/13526331-M.jpg"
  },
  {
    "title": "Autobiography of a Yogi",
    "author": "Yogananda Paramahansa",
    "rating": 4,
    "category": "Biography",
    "year": "1946",
    "url": "https://openlibrary.org/works/OL528094W",
    "image": "https://covers.openlibrary.org/b/id/805448-M.jpg"
  },
  {
    "title": "I'm Glad My Mom Died",
    "author": "Jennette McCurdy",
    "rating": 4,
    "category": "Biography",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL26663382W",
    "image": "https://covers.openlibrary.org/b/id/12855985-M.jpg"
  },
  {
    "title": "Commemorative biographical record of Wayne County, Ohio, containing biographical sketches of prominent and representative citizens, and of many of the early settled families",
    "author": "Unknown",
    "rating": 4,
    "category": "Biography",
    "year": "1889",
    "url": "https://openlibrary.org/works/OL271504M",
    "image": ""
  },
  {
    "title": "Fear and Loathing in Las Vegas",
    "author": "Hunter S. Thompson",
    "rating": 4,
    "category": "Biography",
    "year": "1971",
    "url": "https://openlibrary.org/works/OL158041W",
    "image": "https://covers.openlibrary.org/b/id/13396-M.jpg"
  },
  {
    "title": "Educated",
    "author": "Tara Westover",
    "rating": 5,
    "category": "Biography",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL18139176W",
    "image": "https://covers.openlibrary.org/b/id/8314077-M.jpg"
  },
  {
    "title": "The worldly philosophers",
    "author": "Robert L. Heilbroner",
    "rating": 4,
    "category": "Biography",
    "year": "1953",
    "url": "https://openlibrary.org/works/OL1847023W",
    "image": "https://covers.openlibrary.org/b/id/15106531-M.jpg"
  },
  {
    "title": "Persepolis 1 & 2",
    "author": "Marjane Satrapi",
    "rating": 4,
    "category": "Biography",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL20715162W",
    "image": "https://covers.openlibrary.org/b/id/12648909-M.jpg"
  },
  {
    "title": "Narrative of the life of Frederick Douglass",
    "author": "Frederick Douglass",
    "rating": 4,
    "category": "Biography",
    "year": "1845",
    "url": "https://openlibrary.org/works/OL69178W",
    "image": "https://covers.openlibrary.org/b/id/8247724-M.jpg"
  },
  {
    "title": "走ることについて語るときに僕の語ること",
    "author": "村上春樹",
    "rating": 4,
    "category": "Biography",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL2625422W",
    "image": "https://covers.openlibrary.org/b/id/7167416-M.jpg"
  },
  {
    "title": "Just Kids",
    "author": "Patti Smith",
    "rating": 4,
    "category": "Biography",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL15474046W",
    "image": "https://covers.openlibrary.org/b/id/6671097-M.jpg"
  },
  {
    "title": "Born a Crime",
    "author": "Trevor Noah",
    "rating": 5,
    "category": "Biography",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL17824318W",
    "image": "https://covers.openlibrary.org/b/id/8294078-M.jpg"
  },
  {
    "title": "Pimp",
    "author": "Iceberg Slim",
    "rating": 5,
    "category": "Biography",
    "year": "1967",
    "url": "https://openlibrary.org/works/OL1853064W",
    "image": "https://covers.openlibrary.org/b/id/13539771-M.jpg"
  },
  {
    "title": "Gifted hands",
    "author": "Ben Carson",
    "rating": 4,
    "category": "Biography",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL1933963W",
    "image": "https://covers.openlibrary.org/b/id/4942228-M.jpg"
  },
  {
    "title": "Girl, interrupted",
    "author": "Susanna Kaysen",
    "rating": 4,
    "category": "Biography",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL3954921W",
    "image": "https://covers.openlibrary.org/b/id/3956219-M.jpg"
  },
  {
    "title": "Ikigai",
    "author": "Chiemi Souen",
    "rating": 4,
    "category": "Biography",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL26864096W",
    "image": "https://covers.openlibrary.org/b/id/13110612-M.jpg"
  },
  {
    "title": "When Breath Becomes Air",
    "author": "Paul Kalanithi",
    "rating": 4,
    "category": "Biography",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL17356252W",
    "image": "https://covers.openlibrary.org/b/id/11463139-M.jpg"
  },
  {
    "title": "Elon Musk",
    "author": "Ashlee Vance",
    "rating": 4,
    "category": "Biography",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL17184556W",
    "image": "https://covers.openlibrary.org/b/id/8463846-M.jpg"
  },
  {
    "title": "All Creatures Great and Small (All Creatures Great and Small #1-2)",
    "author": "James Herriot",
    "rating": 4,
    "category": "Biography",
    "year": "1972",
    "url": "https://openlibrary.org/works/OL42308W",
    "image": "https://covers.openlibrary.org/b/id/6382107-M.jpg"
  },
  {
    "title": "Papillon",
    "author": "Henri Charrière",
    "rating": 4,
    "category": "Biography",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL262984W",
    "image": "https://covers.openlibrary.org/b/id/8752-M.jpg"
  },
  {
    "title": "On Writing",
    "author": "Stephen King",
    "rating": 4,
    "category": "Biography",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL81601W",
    "image": "https://covers.openlibrary.org/b/id/9255939-M.jpg"
  },
  {
    "title": "Livro do Desassossego",
    "author": "Fernando Pessoa",
    "rating": 4,
    "category": "Biography",
    "year": "1982",
    "url": "https://openlibrary.org/works/OL847061W",
    "image": "https://covers.openlibrary.org/b/id/900685-M.jpg"
  },
  {
    "title": "Elvis and me",
    "author": "Priscilla Beaulieu Presley",
    "rating": 5,
    "category": "Biography",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL5110680W",
    "image": "https://covers.openlibrary.org/b/id/9736400-M.jpg"
  },
  {
    "title": "I Know Why the Caged Bird Sings",
    "author": "Maya Angelou",
    "rating": 4,
    "category": "Biography",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL80021W",
    "image": "https://covers.openlibrary.org/b/id/9367075-M.jpg"
  },
  {
    "title": "Kitchen Confidential",
    "author": "Anthony Bourdain",
    "rating": 4,
    "category": "Biography",
    "year": "2000",
    "url": "https://openlibrary.org/works/OL3348011W",
    "image": "https://covers.openlibrary.org/b/id/843879-M.jpg"
  },
  {
    "title": "The Man Who Loved Only Numbers",
    "author": "Paul Hoffman",
    "rating": 4,
    "category": "Biography",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL1857638W",
    "image": "https://covers.openlibrary.org/b/id/5547150-M.jpg"
  },
  {
    "title": "Leonardo da Vinci",
    "author": "Walter Isaacson",
    "rating": 4,
    "category": "Biography",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL17802920W",
    "image": "https://covers.openlibrary.org/b/id/8087691-M.jpg"
  },
  {
    "title": "The Woman in Me",
    "author": "Britney Spears",
    "rating": 4,
    "category": "Biography",
    "year": "2023",
    "url": "https://openlibrary.org/works/OL29331033W",
    "image": "https://covers.openlibrary.org/b/id/14538012-M.jpg"
  },
  {
    "title": "Can't Hurt Me",
    "author": "David Goggins",
    "rating": 4,
    "category": "Biography",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL18108064W",
    "image": "https://covers.openlibrary.org/b/id/8305903-M.jpg"
  },
  {
    "title": "Einstein",
    "author": "Walter Isaacson",
    "rating": 4,
    "category": "Biography",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL4288870W",
    "image": "https://covers.openlibrary.org/b/id/474440-M.jpg"
  },
  {
    "title": "I am Malala",
    "author": "Malala Yousafzai",
    "rating": 4,
    "category": "Biography",
    "year": "2012",
    "url": "https://openlibrary.org/works/OL19669045W",
    "image": "https://covers.openlibrary.org/b/id/9358664-M.jpg"
  },
  {
    "title": "Twelve against the gods",
    "author": "William Bolitho",
    "rating": 5,
    "category": "Biography",
    "year": "1929",
    "url": "https://openlibrary.org/works/OL5917484W",
    "image": "https://covers.openlibrary.org/b/id/1448623-M.jpg"
  },
  {
    "title": "The Remarkable life of Col. James Gardiner",
    "author": "Unknown",
    "rating": 4,
    "category": "Biography",
    "year": "1813",
    "url": "https://openlibrary.org/works/OL15104131M",
    "image": ""
  },
  {
    "title": "Maybe You Should Talk to Someone",
    "author": "Lori Gottlieb",
    "rating": 4,
    "category": "Biography",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL19791590W",
    "image": "https://covers.openlibrary.org/b/id/8596019-M.jpg"
  },
  {
    "title": "How to sell anything to anybody",
    "author": "Joe Girard",
    "rating": 3,
    "category": "Biography",
    "year": "1977",
    "url": "https://openlibrary.org/works/OL3475268W",
    "image": "https://covers.openlibrary.org/b/id/788307-M.jpg"
  },
  {
    "title": "The Power of Your Subconscious Mind",
    "author": "Joseph Murphy",
    "rating": 4,
    "category": "Self Help",
    "year": "1963",
    "url": "https://openlibrary.org/works/OL55806W",
    "image": "https://covers.openlibrary.org/b/id/6553019-M.jpg"
  },
  {
    "title": "Don't Believe Everything You Think",
    "author": "Joseph Nguyen",
    "rating": 4,
    "category": "Self Help",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL28098879W",
    "image": "https://covers.openlibrary.org/b/id/15160816-M.jpg"
  },
  {
    "title": "12 Rules for Life",
    "author": "Jordan B. Peterson",
    "rating": 4,
    "category": "Self Help",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL17837119W",
    "image": "https://covers.openlibrary.org/b/id/8131760-M.jpg"
  },
  {
    "title": "Meditations",
    "author": "Marcus Aurelius",
    "rating": 4,
    "category": "Self Help",
    "year": "1626",
    "url": "https://openlibrary.org/works/OL1317211W",
    "image": "https://covers.openlibrary.org/b/id/211529-M.jpg"
  },
  {
    "title": "The Mountain Is You",
    "author": "Brianna Wiest",
    "rating": 3,
    "category": "Self Help",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL25436364W",
    "image": "https://covers.openlibrary.org/b/id/13838236-M.jpg"
  },
  {
    "title": "A Gentle Reminder",
    "author": "Bianca Sparacino",
    "rating": 4,
    "category": "Self Help",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL25296570W",
    "image": "https://covers.openlibrary.org/b/id/14424196-M.jpg"
  },
  {
    "title": "When You're Ready, This Is How You Heal",
    "author": "Brianna Wiest",
    "rating": 4,
    "category": "Self Help",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL26085514W",
    "image": "https://covers.openlibrary.org/b/id/15000579-M.jpg"
  },
  {
    "title": "Eat That Frog! 21 Great Ways to Stop Procrastinating and Get More Done in Less Time",
    "author": "Brian Tracy",
    "rating": 4,
    "category": "Self Help",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL2392324W",
    "image": "https://covers.openlibrary.org/b/id/847534-M.jpg"
  },
  {
    "title": "Atomic Habits",
    "author": "James Clear",
    "rating": 4,
    "category": "Self Help",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL17930368W",
    "image": "https://covers.openlibrary.org/b/id/12539702-M.jpg"
  },
  {
    "title": "101 Essays That Will Change The Way You Think",
    "author": "Brianna Wiest",
    "rating": 4,
    "category": "Self Help",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL23746568W",
    "image": "https://covers.openlibrary.org/b/id/10524689-M.jpg"
  },
  {
    "title": "Psycho-cybernetics",
    "author": "Maxwell Maltz",
    "rating": 4,
    "category": "Self Help",
    "year": "1960",
    "url": "https://openlibrary.org/works/OL99079W",
    "image": "https://covers.openlibrary.org/b/id/14428293-M.jpg"
  },
  {
    "title": "嫌われる勇気",
    "author": "Ichirō Kishimi",
    "rating": 4,
    "category": "Self Help",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL19744000W",
    "image": "https://covers.openlibrary.org/b/id/10873626-M.jpg"
  },
  {
    "title": "The Obstacle is the Way",
    "author": "Ryan Holiday",
    "rating": 4,
    "category": "Self Help",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL19977665W",
    "image": "https://covers.openlibrary.org/b/id/14428233-M.jpg"
  },
  {
    "title": "You Are a Badass",
    "author": "Jen Sincero",
    "rating": 4,
    "category": "Self Help",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL17102197W",
    "image": "https://covers.openlibrary.org/b/id/7436635-M.jpg"
  },
  {
    "title": "Control Your Mind and Master Your Feelings",
    "author": "Eric Robertson",
    "rating": 4,
    "category": "Self Help",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL25312237W",
    "image": "https://covers.openlibrary.org/b/id/12009823-M.jpg"
  },
  {
    "title": "What every BODY is saying",
    "author": "Joe Navarro",
    "rating": 3,
    "category": "Self Help",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL12926505W",
    "image": "https://covers.openlibrary.org/b/id/8734461-M.jpg"
  },
  {
    "title": "Breaking the habit of being yourself",
    "author": "Joe Dispenza",
    "rating": 4,
    "category": "Self Help",
    "year": "2012",
    "url": "https://openlibrary.org/works/OL16215950W",
    "image": "https://covers.openlibrary.org/b/id/11348192-M.jpg"
  },
  {
    "title": "Workbook for the Mountain Is You",
    "author": "Smart Reads",
    "rating": 4,
    "category": "Self Help",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL31113476W",
    "image": "https://covers.openlibrary.org/b/id/14426421-M.jpg"
  },
  {
    "title": "I Have to Tell You Something",
    "author": "Zara Bas",
    "rating": 4,
    "category": "Self Help",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL28110702W",
    "image": "https://covers.openlibrary.org/b/id/13945571-M.jpg"
  },
  {
    "title": "365 Days with Self-Discipline",
    "author": "Martin Meadows",
    "rating": 3,
    "category": "Self Help",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL22706549W",
    "image": "https://covers.openlibrary.org/b/id/10489426-M.jpg"
  },
  {
    "title": "Lost Book of Herbal Remedies",
    "author": "Nicole Apelian",
    "rating": 2,
    "category": "Self Help",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL26794101W",
    "image": ""
  },
  {
    "title": "Outwitting the devil",
    "author": "Napoleon Hill",
    "rating": 4,
    "category": "Self Help",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL16176999W",
    "image": "https://covers.openlibrary.org/b/id/8260315-M.jpg"
  },
  {
    "title": "As a man thinketh",
    "author": "James Allen",
    "rating": 5,
    "category": "Self Help",
    "year": "1902",
    "url": "https://openlibrary.org/works/OL43024W",
    "image": "https://covers.openlibrary.org/b/id/6268048-M.jpg"
  },
  {
    "title": "The untethered soul",
    "author": "Michael A. Singer",
    "rating": 4,
    "category": "Self Help",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL15845722W",
    "image": "https://covers.openlibrary.org/b/id/10630553-M.jpg"
  },
  {
    "title": "The Art of Public Speaking",
    "author": "Dale Carnegie",
    "rating": 4,
    "category": "Self Help",
    "year": "1915",
    "url": "https://openlibrary.org/works/OL1063254W",
    "image": "https://covers.openlibrary.org/b/id/2978374-M.jpg"
  },
  {
    "title": "The art of money getting, or, Golden rules for money getting",
    "author": "P. T. Barnum",
    "rating": 4,
    "category": "Self Help",
    "year": "1880",
    "url": "https://openlibrary.org/works/OL891636W",
    "image": "https://covers.openlibrary.org/b/id/756095-M.jpg"
  },
  {
    "title": "Tiny Habits",
    "author": "B. J. Fogg",
    "rating": 4,
    "category": "Self Help",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20641940W",
    "image": "https://covers.openlibrary.org/b/id/9261174-M.jpg"
  },
  {
    "title": "Dopamine Detox",
    "author": "Blake Rabizadeh",
    "rating": 5,
    "category": "Self Help",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL25957118W",
    "image": "https://covers.openlibrary.org/b/id/15126894-M.jpg"
  },
  {
    "title": "You can heal your life",
    "author": "Louise L. Hay",
    "rating": 5,
    "category": "Self Help",
    "year": "1984",
    "url": "https://openlibrary.org/works/OL52866W",
    "image": "https://covers.openlibrary.org/b/id/715608-M.jpg"
  },
  {
    "title": "The Rudest Book Ever",
    "author": "Shwetabh Gangwar",
    "rating": 5,
    "category": "Self Help",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL24350123W",
    "image": "https://covers.openlibrary.org/b/id/10874978-M.jpg"
  },
  {
    "title": "How to live on 24 hours a day",
    "author": "Arnold Bennett",
    "rating": 4,
    "category": "Self Help",
    "year": "1900",
    "url": "https://openlibrary.org/works/OL109213W",
    "image": "https://covers.openlibrary.org/b/id/1760143-M.jpg"
  },
  {
    "title": "You're Too Good to Feel This Bad",
    "author": "Nate Dallas",
    "rating": 4,
    "category": "Self Help",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL24620443W",
    "image": "https://covers.openlibrary.org/b/id/11291723-M.jpg"
  },
  {
    "title": "The Compound effect",
    "author": "Darren Hardy",
    "rating": 4,
    "category": "Self Help",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL16118274W",
    "image": "https://covers.openlibrary.org/b/id/7115046-M.jpg"
  },
  {
    "title": "Think Like a Monk",
    "author": "Jay Shetty",
    "rating": 4,
    "category": "Self Help",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL21237606W",
    "image": "https://covers.openlibrary.org/b/id/10355397-M.jpg"
  },
  {
    "title": "Buy Yourself the Damn Flowers",
    "author": "Tam Kaur",
    "rating": 5,
    "category": "Self Help",
    "year": "2024",
    "url": "https://openlibrary.org/works/OL38376217W",
    "image": "https://covers.openlibrary.org/b/id/14651388-M.jpg"
  },
  {
    "title": "Forgotten Home Apothecary",
    "author": "Nicole Apelian",
    "rating": 4,
    "category": "Self Help",
    "year": "2024",
    "url": "https://openlibrary.org/works/OL41892022W",
    "image": "https://covers.openlibrary.org/b/id/15129769-M.jpg"
  },
  {
    "title": "Glucose Revolution",
    "author": "Jessie Inchauspé",
    "rating": 4,
    "category": "Self Help",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL26599673W",
    "image": "https://covers.openlibrary.org/b/id/12769675-M.jpg"
  },
  {
    "title": "Alice in Wonderland in Five Acts",
    "author": "Lewis Carroll",
    "rating": 4,
    "category": "Children's",
    "year": "1897",
    "url": "https://openlibrary.org/works/OL13101191W",
    "image": "https://covers.openlibrary.org/b/id/13805873-M.jpg"
  },
  {
    "title": "Fantastic Mr Fox",
    "author": "Roald Dahl",
    "rating": 4,
    "category": "Children's",
    "year": "1970",
    "url": "https://openlibrary.org/works/OL45804W",
    "image": "https://covers.openlibrary.org/b/id/6498519-M.jpg"
  },
  {
    "title": "The Book of Dragons",
    "author": "Edith Nesbit",
    "rating": 4,
    "category": "Children's",
    "year": "1973",
    "url": "https://openlibrary.org/works/OL99529W",
    "image": "https://covers.openlibrary.org/b/id/4342323-M.jpg"
  },
  {
    "title": "James and the Giant Peach",
    "author": "Roald Dahl",
    "rating": 4,
    "category": "Children's",
    "year": "1961",
    "url": "https://openlibrary.org/works/OL45809W",
    "image": "https://covers.openlibrary.org/b/id/8252454-M.jpg"
  },
  {
    "title": "Love Potion",
    "author": "Steven Banks",
    "rating": 4,
    "category": "Children's",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL542079W",
    "image": "https://covers.openlibrary.org/b/id/438059-M.jpg"
  },
  {
    "title": "Chicken Little (Read-Aloud Storybook)",
    "author": "RH Disney",
    "rating": 4,
    "category": "Children's",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL8043889W",
    "image": "https://covers.openlibrary.org/b/id/462969-M.jpg"
  },
  {
    "title": "Ready, Alice?",
    "author": "Amanda Haley",
    "rating": 4,
    "category": "Children's",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL508806W",
    "image": "https://covers.openlibrary.org/b/id/10507160-M.jpg"
  },
  {
    "title": "First Day at Gymnastics",
    "author": "DK Publishing",
    "rating": 4,
    "category": "Children's",
    "year": "2002",
    "url": "https://openlibrary.org/works/OL7960215W",
    "image": "https://covers.openlibrary.org/b/id/1488099-M.jpg"
  },
  {
    "title": "Mildred and Sam",
    "author": "Sharleen Collicott",
    "rating": 5,
    "category": "Children's",
    "year": "2002",
    "url": "https://openlibrary.org/works/OL3961963W",
    "image": "https://covers.openlibrary.org/b/id/20215-M.jpg"
  },
  {
    "title": "The Twits",
    "author": "Roald Dahl",
    "rating": 4,
    "category": "Children's",
    "year": "1967",
    "url": "https://openlibrary.org/works/OL45884W",
    "image": "https://covers.openlibrary.org/b/id/14838233-M.jpg"
  },
  {
    "title": "The Classic Tale of the Velveteen Rabbit",
    "author": "Margery Williams Bianco",
    "rating": 4,
    "category": "Children's",
    "year": "1900",
    "url": "https://openlibrary.org/works/OL274433W",
    "image": "https://covers.openlibrary.org/b/id/11738076-M.jpg"
  },
  {
    "title": "Fear Street - Sunburn",
    "author": "Robert Lawrence Stine",
    "rating": 4,
    "category": "Children's",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL9964695W",
    "image": "https://covers.openlibrary.org/b/id/9738031-M.jpg"
  },
  {
    "title": "The Blue Umbrella",
    "author": "Ruskin Bond",
    "rating": 4,
    "category": "Children's",
    "year": "1974",
    "url": "https://openlibrary.org/works/OL62908W",
    "image": "https://covers.openlibrary.org/b/id/10389985-M.jpg"
  },
  {
    "title": "Guess How Much I Love You",
    "author": "Sam McBratney",
    "rating": 4,
    "category": "Children's",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL58402W",
    "image": "https://covers.openlibrary.org/b/id/13282906-M.jpg"
  },
  {
    "title": "Imagine Me",
    "author": "Tahereh Mafi",
    "rating": 5,
    "category": "Children's",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL20689526W",
    "image": "https://covers.openlibrary.org/b/id/9363194-M.jpg"
  },
  {
    "title": "George's Marvelous Medicine",
    "author": "Roald Dahl",
    "rating": 4,
    "category": "Children's",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL45866W",
    "image": "https://covers.openlibrary.org/b/id/11388220-M.jpg"
  },
  {
    "title": "The Enormous Potato",
    "author": "Aubrey Davis",
    "rating": 5,
    "category": "Children's",
    "year": "1997",
    "url": "https://openlibrary.org/works/OL8117439W",
    "image": "https://covers.openlibrary.org/b/id/769720-M.jpg"
  },
  {
    "title": "Five on a Treasure Island",
    "author": "Enid Blyton",
    "rating": 4,
    "category": "Children's",
    "year": "1942",
    "url": "https://openlibrary.org/works/OL1948704W",
    "image": "https://covers.openlibrary.org/b/id/14570937-M.jpg"
  },
  {
    "title": "Chicka chicka boom boom",
    "author": "Bill Martin Jr.",
    "rating": 4,
    "category": "Children's",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL59121W",
    "image": "https://covers.openlibrary.org/b/id/1320266-M.jpg"
  },
  {
    "title": "Where the Red Fern Grows",
    "author": "Wilson Rawls",
    "rating": 4,
    "category": "Children's",
    "year": "1961",
    "url": "https://openlibrary.org/works/OL465360W",
    "image": "https://covers.openlibrary.org/b/id/7996608-M.jpg"
  },
  {
    "title": "The Ugly Duckling",
    "author": "Hans Christian Andersen",
    "rating": 4,
    "category": "Children's",
    "year": "1851",
    "url": "https://openlibrary.org/works/OL15155002W",
    "image": "https://covers.openlibrary.org/b/id/446546-M.jpg"
  },
  {
    "title": "Rockets and Spaceships",
    "author": "DK Publishing",
    "rating": 4,
    "category": "Children's",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL7958320W",
    "image": "https://covers.openlibrary.org/b/id/1487904-M.jpg"
  },
  {
    "title": "The Incredible Journey",
    "author": "Sheila Burnford",
    "rating": 4,
    "category": "Children's",
    "year": "1960",
    "url": "https://openlibrary.org/works/OL2562769W",
    "image": "https://covers.openlibrary.org/b/id/14539398-M.jpg"
  },
  {
    "title": "Danny, The Champion of the World",
    "author": "Roald Dahl",
    "rating": 4,
    "category": "Children's",
    "year": "1975",
    "url": "https://openlibrary.org/works/OL45865W",
    "image": "https://covers.openlibrary.org/b/id/6794243-M.jpg"
  },
  {
    "title": "Hooked on Phonics",
    "author": "Hooked on Phonics",
    "rating": 4,
    "category": "Children's",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL8952297W",
    "image": "https://covers.openlibrary.org/b/id/2120066-M.jpg"
  },
  {
    "title": "Diving Dolphin",
    "author": "DK Publishing",
    "rating": 4,
    "category": "Children's",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL7958304W",
    "image": "https://covers.openlibrary.org/b/id/1487902-M.jpg"
  },
  {
    "title": "Coraline",
    "author": "Neil Gaiman",
    "rating": 4,
    "category": "Children's",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL679358W",
    "image": "https://covers.openlibrary.org/b/id/14171421-M.jpg"
  },
  {
    "title": "Mrs. Frisby and the Rats of Nimh",
    "author": "Robert C. O'Brien",
    "rating": 4,
    "category": "Children's",
    "year": "1970",
    "url": "https://openlibrary.org/works/OL5092623W",
    "image": "https://covers.openlibrary.org/b/id/7762286-M.jpg"
  },
  {
    "title": "The Berenstain Bears Hug and Make Up (Berenstain Bears)",
    "author": "Mike Berenstain",
    "rating": 4,
    "category": "Children's",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL275007W",
    "image": "https://covers.openlibrary.org/b/id/30271-M.jpg"
  },
  {
    "title": "Defy Me (Shatter Me)",
    "author": "Tahereh Mafi",
    "rating": 5,
    "category": "Children's",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20145719W",
    "image": "https://covers.openlibrary.org/b/id/8791330-M.jpg"
  },
  {
    "title": "The School for Good and Evil",
    "author": "Soman Chainani",
    "rating": 5,
    "category": "Children's",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL16810944W",
    "image": "https://covers.openlibrary.org/b/id/7879561-M.jpg"
  },
  {
    "title": "The Boxcar Children",
    "author": "Gertrude Chandler Warner",
    "rating": 4,
    "category": "Children's",
    "year": "1924",
    "url": "https://openlibrary.org/works/OL24656586W",
    "image": "https://covers.openlibrary.org/b/id/11349395-M.jpg"
  },
  {
    "title": "The Very Hungry Caterpillar",
    "author": "Eric Carle",
    "rating": 4,
    "category": "Children's",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL52987W",
    "image": "https://covers.openlibrary.org/b/id/7835968-M.jpg"
  },
  {
    "title": "Harry the Dirty Dog",
    "author": "Gene Zion",
    "rating": 4,
    "category": "Children's",
    "year": "1956",
    "url": "https://openlibrary.org/works/OL1973379W",
    "image": "https://covers.openlibrary.org/b/id/24282-M.jpg"
  },
  {
    "title": "Owl Babies",
    "author": "Martin Waddell",
    "rating": 4,
    "category": "Children's",
    "year": "1975",
    "url": "https://openlibrary.org/works/OL114136W",
    "image": "https://covers.openlibrary.org/b/id/799318-M.jpg"
  },
  {
    "title": "Where the Sidewalk Ends",
    "author": "Shel Silverstein",
    "rating": 4,
    "category": "Children's",
    "year": "1974",
    "url": "https://openlibrary.org/works/OL3368289W",
    "image": "https://covers.openlibrary.org/b/id/31070-M.jpg"
  },
  {
    "title": "Jenseits von Gut und Böse",
    "author": "Friedrich Nietzsche",
    "rating": 4,
    "category": "Philosophy",
    "year": "1885",
    "url": "https://openlibrary.org/works/OL98174W",
    "image": "https://covers.openlibrary.org/b/id/8245356-M.jpg"
  },
  {
    "title": "Tao te Ching",
    "author": "老子",
    "rating": 4,
    "category": "Philosophy",
    "year": "1842",
    "url": "https://openlibrary.org/works/OL45499W",
    "image": "https://covers.openlibrary.org/b/id/662232-M.jpg"
  },
  {
    "title": "Le mythe de Sisyphe",
    "author": "Albert Camus",
    "rating": 4,
    "category": "Philosophy",
    "year": "1941",
    "url": "https://openlibrary.org/works/OL1230601W",
    "image": "https://covers.openlibrary.org/b/id/1014395-M.jpg"
  },
  {
    "title": "The Myth of Sisyphus and Other Essays",
    "author": "Albert Camus",
    "rating": 4,
    "category": "Philosophy",
    "year": "1955",
    "url": "https://openlibrary.org/works/OL1230690W",
    "image": "https://covers.openlibrary.org/b/id/12726570-M.jpg"
  },
  {
    "title": "Ἀπολογία Σωκράτους",
    "author": "Πλάτων",
    "rating": 4,
    "category": "Philosophy",
    "year": "1675",
    "url": "https://openlibrary.org/works/OL51948W",
    "image": "https://covers.openlibrary.org/b/id/14407561-M.jpg"
  },
  {
    "title": "The Wisdom of Insecurity",
    "author": "Alan Watts",
    "rating": 3,
    "category": "Philosophy",
    "year": "1951",
    "url": "https://openlibrary.org/works/OL266158W",
    "image": "https://covers.openlibrary.org/b/id/254059-M.jpg"
  },
  {
    "title": "The Problems of Philosophy",
    "author": "Bertrand Russell",
    "rating": 3,
    "category": "Philosophy",
    "year": "1900",
    "url": "https://openlibrary.org/works/OL1088577W",
    "image": "https://covers.openlibrary.org/b/id/6947403-M.jpg"
  },
  {
    "title": "Why I am an atheist",
    "author": "Bhagat Singh",
    "rating": 4,
    "category": "Philosophy",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL11354728W",
    "image": "https://covers.openlibrary.org/b/id/15088375-M.jpg"
  },
  {
    "title": "Discours de la méthode",
    "author": "René Descartes",
    "rating": 4,
    "category": "Philosophy",
    "year": "1644",
    "url": "https://openlibrary.org/works/OL1151518W",
    "image": "https://covers.openlibrary.org/b/id/8236442-M.jpg"
  },
  {
    "title": "Sistematika filsafat",
    "author": "Sidi Gazalba",
    "rating": 5,
    "category": "Philosophy",
    "year": "1973",
    "url": "https://openlibrary.org/works/OL388472W",
    "image": ""
  },
  {
    "title": "The Tao of Physics",
    "author": "Fritjof Capra",
    "rating": 4,
    "category": "Philosophy",
    "year": "1975",
    "url": "https://openlibrary.org/works/OL3258255W",
    "image": "https://covers.openlibrary.org/b/id/6981251-M.jpg"
  },
  {
    "title": "Der Antichrist",
    "author": "Friedrich Nietzsche",
    "rating": 4,
    "category": "Philosophy",
    "year": "1895",
    "url": "https://openlibrary.org/works/OL15692719W",
    "image": "https://covers.openlibrary.org/b/id/1759313-M.jpg"
  },
  {
    "title": "Think",
    "author": "Simon Blackburn",
    "rating": 4,
    "category": "Philosophy",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL1807609W",
    "image": "https://covers.openlibrary.org/b/id/116928-M.jpg"
  },
  {
    "title": "Φαίδων",
    "author": "Plato",
    "rating": 4,
    "category": "Philosophy",
    "year": "1713",
    "url": "https://openlibrary.org/works/OL51805W",
    "image": "https://covers.openlibrary.org/b/id/14400104-M.jpg"
  },
  {
    "title": "Also sprach Zarathustra",
    "author": "Friedrich Nietzsche",
    "rating": 4,
    "category": "Philosophy",
    "year": "1883",
    "url": "https://openlibrary.org/works/OL98130W",
    "image": "https://covers.openlibrary.org/b/id/1017466-M.jpg"
  },
  {
    "title": "The Four Agreements",
    "author": "Don Miguel Ruiz",
    "rating": 4,
    "category": "Philosophy",
    "year": "1997",
    "url": "https://openlibrary.org/works/OL27203W",
    "image": "https://covers.openlibrary.org/b/id/924521-M.jpg"
  },
  {
    "title": "The 48 Laws of Power",
    "author": "Robert Greene",
    "rating": 4,
    "category": "Philosophy",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL1968368W",
    "image": "https://covers.openlibrary.org/b/id/6424160-M.jpg"
  },
  {
    "title": "Introduction to logic",
    "author": "Irving Marmer Copi",
    "rating": 4,
    "category": "Philosophy",
    "year": "1953",
    "url": "https://openlibrary.org/works/OL2949447W",
    "image": "https://covers.openlibrary.org/b/id/89707-M.jpg"
  },
  {
    "title": "The theory of everything",
    "author": "Stephen Hawking",
    "rating": 4,
    "category": "Philosophy",
    "year": "2002",
    "url": "https://openlibrary.org/works/OL1892616W",
    "image": "https://covers.openlibrary.org/b/id/942436-M.jpg"
  },
  {
    "title": "Indian philosophy",
    "author": "Sarvepalli Radhakrishnan",
    "rating": 4,
    "category": "Philosophy",
    "year": "1923",
    "url": "https://openlibrary.org/works/OL311445W",
    "image": "https://covers.openlibrary.org/b/id/6636401-M.jpg"
  },
  {
    "title": "Sofies verden",
    "author": "Jostein Gaarder",
    "rating": 4,
    "category": "Philosophy",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL922430W",
    "image": "https://covers.openlibrary.org/b/id/223463-M.jpg"
  },
  {
    "title": "A theory of justice",
    "author": "John Rawls",
    "rating": 5,
    "category": "Philosophy",
    "year": "1971",
    "url": "https://openlibrary.org/works/OL30310W",
    "image": "https://covers.openlibrary.org/b/id/4516035-M.jpg"
  },
  {
    "title": "The complete works of Friedrich Nietzsche",
    "author": "Friedrich Nietzsche",
    "rating": 3,
    "category": "Philosophy",
    "year": "1909",
    "url": "https://openlibrary.org/works/OL98172W",
    "image": "https://covers.openlibrary.org/b/id/5586642-M.jpg"
  },
  {
    "title": "Bluets",
    "author": "Maggie Nelson",
    "rating": 4,
    "category": "Philosophy",
    "year": "2009",
    "url": "https://openlibrary.org/works/OL5814581W",
    "image": "https://covers.openlibrary.org/b/id/8457107-M.jpg"
  },
  {
    "title": "Philosophische Untersuchungen",
    "author": "Ludwig Wittgenstein",
    "rating": 5,
    "category": "Philosophy",
    "year": "1953",
    "url": "https://openlibrary.org/works/OL1410380W",
    "image": "https://covers.openlibrary.org/b/id/397102-M.jpg"
  },
  {
    "title": "The Open Society and Its Enemies (1+2)",
    "author": "Karl Popper",
    "rating": 4,
    "category": "Philosophy",
    "year": "1945",
    "url": "https://openlibrary.org/works/OL1984583W",
    "image": "https://covers.openlibrary.org/b/id/997827-M.jpg"
  },
  {
    "title": "Wille zur Macht",
    "author": "Friedrich Nietzsche",
    "rating": 3,
    "category": "Philosophy",
    "year": "1909",
    "url": "https://openlibrary.org/works/OL15692701W",
    "image": "https://covers.openlibrary.org/b/id/6995217-M.jpg"
  },
  {
    "title": "Tractatus logico-philosophicus",
    "author": "Ludwig Wittgenstein",
    "rating": 4,
    "category": "Philosophy",
    "year": "1921",
    "url": "https://openlibrary.org/works/OL1410381W",
    "image": "https://covers.openlibrary.org/b/id/5415771-M.jpg"
  },
  {
    "title": "The Kybalion",
    "author": "Three Initiates",
    "rating": 5,
    "category": "Philosophy",
    "year": "1912",
    "url": "https://openlibrary.org/works/OL20156281W",
    "image": "https://covers.openlibrary.org/b/id/8801364-M.jpg"
  },
  {
    "title": "Misery",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1978",
    "url": "https://openlibrary.org/works/OL81634W",
    "image": "https://covers.openlibrary.org/b/id/8259296-M.jpg"
  },
  {
    "title": "The Exorcist",
    "author": "William Peter Blatty",
    "rating": 4,
    "category": "Horror",
    "year": "1971",
    "url": "https://openlibrary.org/works/OL927199W",
    "image": "https://covers.openlibrary.org/b/id/12715730-M.jpg"
  },
  {
    "title": "Cujo",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL81610W",
    "image": "https://covers.openlibrary.org/b/id/8570003-M.jpg"
  },
  {
    "title": "The Hellbound Heart",
    "author": "Clive Barker",
    "rating": 3,
    "category": "Horror",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL257785W",
    "image": "https://covers.openlibrary.org/b/id/1726053-M.jpg"
  },
  {
    "title": "The Long Walk",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1979",
    "url": "https://openlibrary.org/works/OL9973101W",
    "image": "https://covers.openlibrary.org/b/id/14653609-M.jpg"
  },
  {
    "title": "It",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL81613W",
    "image": "https://covers.openlibrary.org/b/id/8569284-M.jpg"
  },
  {
    "title": "Christine",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL81619W",
    "image": "https://covers.openlibrary.org/b/id/14655985-M.jpg"
  },
  {
    "title": "Four Past Midnight",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL81606W",
    "image": "https://covers.openlibrary.org/b/id/8413143-M.jpg"
  },
  {
    "title": "Fear Street - The Knife",
    "author": "Robert Lawrence Stine",
    "rating": 4,
    "category": "Horror",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL15094430W",
    "image": "https://covers.openlibrary.org/b/id/2547647-M.jpg"
  },
  {
    "title": "The Great God Pan",
    "author": "Arthur Machen",
    "rating": 4,
    "category": "Horror",
    "year": "1894",
    "url": "https://openlibrary.org/works/OL3388961W",
    "image": "https://covers.openlibrary.org/b/id/921610-M.jpg"
  },
  {
    "title": "House of Leaves",
    "author": "Mark Z. Danielewski",
    "rating": 4,
    "category": "Horror",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL32195W",
    "image": "https://covers.openlibrary.org/b/id/6450442-M.jpg"
  },
  {
    "title": "Thinner",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1984",
    "url": "https://openlibrary.org/works/OL149210W",
    "image": "https://covers.openlibrary.org/b/id/8274288-M.jpg"
  },
  {
    "title": "The Stepford Wives",
    "author": "Ira Levin",
    "rating": 4,
    "category": "Horror",
    "year": "1972",
    "url": "https://openlibrary.org/works/OL28319W",
    "image": "https://covers.openlibrary.org/b/id/8409254-M.jpg"
  },
  {
    "title": "Pet Sematary",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL81631W",
    "image": "https://covers.openlibrary.org/b/id/12015500-M.jpg"
  },
  {
    "title": "The New Girl",
    "author": "Robert Lawrence Stine",
    "rating": 4,
    "category": "Horror",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL72313W",
    "image": "https://covers.openlibrary.org/b/id/8203024-M.jpg"
  },
  {
    "title": "Phantoms",
    "author": "Dean Koontz",
    "rating": 4,
    "category": "Horror",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL263259W",
    "image": "https://covers.openlibrary.org/b/id/8274300-M.jpg"
  },
  {
    "title": "The Stand",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1978",
    "url": "https://openlibrary.org/works/OL81618W",
    "image": "https://covers.openlibrary.org/b/id/9255992-M.jpg"
  },
  {
    "title": "Haunted",
    "author": "Robert Lawrence Stine",
    "rating": 4,
    "category": "Horror",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL72282W",
    "image": "https://covers.openlibrary.org/b/id/4984834-M.jpg"
  },
  {
    "title": "Desperation",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL81611W",
    "image": "https://covers.openlibrary.org/b/id/8757374-M.jpg"
  },
  {
    "title": "The Sleepwalker",
    "author": "Robert Lawrence Stine",
    "rating": 4,
    "category": "Horror",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL72336W",
    "image": "https://covers.openlibrary.org/b/id/408246-M.jpg"
  },
  {
    "title": "Skeleton crew",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL81627W",
    "image": "https://covers.openlibrary.org/b/id/14657166-M.jpg"
  },
  {
    "title": "Danse Macabre",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL81605W",
    "image": "https://covers.openlibrary.org/b/id/8443662-M.jpg"
  },
  {
    "title": "Firestarter",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL81623W",
    "image": "https://covers.openlibrary.org/b/id/12015446-M.jpg"
  },
  {
    "title": "Fear Street - The New Boy",
    "author": "Robert Lawrence Stine",
    "rating": 4,
    "category": "Horror",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL72311W",
    "image": "https://covers.openlibrary.org/b/id/4975644-M.jpg"
  },
  {
    "title": "Fear Street - Missing",
    "author": "Robert Lawrence Stine",
    "rating": 3,
    "category": "Horror",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL72303W",
    "image": "https://covers.openlibrary.org/b/id/5005544-M.jpg"
  },
  {
    "title": "Works (Buried Talents / Dance of the Dead / Dress of White Silk / From Shadowed Places / I Am Legend / Mad House / Person to Person / Prey / The Funeral / The Near Departed / Witch War)",
    "author": "Richard Matheson",
    "rating": 4,
    "category": "Horror",
    "year": "1970",
    "url": "https://openlibrary.org/works/OL64225W",
    "image": "https://covers.openlibrary.org/b/id/6462252-M.jpg"
  },
  {
    "title": "Cell",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL81597W",
    "image": "https://covers.openlibrary.org/b/id/14654054-M.jpg"
  },
  {
    "title": "The Fall of the House of Usher",
    "author": "Edgar Allan Poe",
    "rating": 4,
    "category": "Horror",
    "year": "1704",
    "url": "https://openlibrary.org/works/OL41078W",
    "image": "https://covers.openlibrary.org/b/id/11838138-M.jpg"
  },
  {
    "title": "Carrie",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1974",
    "url": "https://openlibrary.org/works/OL81626W",
    "image": "https://covers.openlibrary.org/b/id/9256043-M.jpg"
  },
  {
    "title": "Books of Blood Volume One",
    "author": "Clive Barker",
    "rating": 4,
    "category": "Horror",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL457864W",
    "image": "https://covers.openlibrary.org/b/id/271223-M.jpg"
  },
  {
    "title": "Insomnia",
    "author": "Stephen King",
    "rating": 4,
    "category": "Horror",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL81603W",
    "image": "https://covers.openlibrary.org/b/id/7886954-M.jpg"
  },
  {
    "title": "The Mist",
    "author": "Stephen King",
    "rating": 5,
    "category": "Horror",
    "year": "1925",
    "url": "https://openlibrary.org/works/OL149144W",
    "image": "https://covers.openlibrary.org/b/id/9330636-M.jpg"
  },
  {
    "title": "The Queen of the Damned",
    "author": "Anne Rice",
    "rating": 4,
    "category": "Horror",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL77828W",
    "image": "https://covers.openlibrary.org/b/id/9255774-M.jpg"
  },
  {
    "title": "Fear Street - The Overnight",
    "author": "Robert Lawrence Stine",
    "rating": 3,
    "category": "Horror",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL480105W",
    "image": "https://covers.openlibrary.org/b/id/2547598-M.jpg"
  },
  {
    "title": "Fear Street - The Surprise Party",
    "author": "Robert Lawrence Stine",
    "rating": 3,
    "category": "Horror",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL72342W",
    "image": "https://covers.openlibrary.org/b/id/4974927-M.jpg"
  },
  {
    "title": "The Blade Itself",
    "author": "Joe Abercrombie",
    "rating": 4,
    "category": "Fantasy",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL8400950W",
    "image": "https://covers.openlibrary.org/b/id/14543422-M.jpg"
  },
  {
    "title": "The Hero of Ages",
    "author": "Brandon Sanderson",
    "rating": 5,
    "category": "Fantasy",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL5738154W",
    "image": "https://covers.openlibrary.org/b/id/14658094-M.jpg"
  },
  {
    "title": "The Lies of Locke Lamora",
    "author": "Scott Lynch",
    "rating": 4,
    "category": "Fantasy",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL8369445W",
    "image": "https://covers.openlibrary.org/b/id/6307636-M.jpg"
  },
  {
    "title": "The Assassin’s Blade",
    "author": "Sarah J. Maas",
    "rating": 4,
    "category": "Fantasy",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL17546674W",
    "image": "https://covers.openlibrary.org/b/id/7794980-M.jpg"
  },
  {
    "title": "Wizard's First Rule",
    "author": "Terry Goodkind",
    "rating": 4,
    "category": "Fantasy",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL2010436W",
    "image": "https://covers.openlibrary.org/b/id/1005963-M.jpg"
  },
  {
    "title": "Krew elfów",
    "author": "Andrzej Sapkowski",
    "rating": 4,
    "category": "Fantasy",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL2577486W",
    "image": "https://covers.openlibrary.org/b/id/8457619-M.jpg"
  },
  {
    "title": "The Poppy War",
    "author": "R. F. Kuang",
    "rating": 4,
    "category": "Fantasy",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL19351054W",
    "image": "https://covers.openlibrary.org/b/id/8463552-M.jpg"
  },
  {
    "title": "The Eye of the World",
    "author": "Robert Jordan",
    "rating": 4,
    "category": "Fantasy",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL7924103W",
    "image": "https://covers.openlibrary.org/b/id/980232-M.jpg"
  },
  {
    "title": "The Princess Bride",
    "author": "William Goldman",
    "rating": 4,
    "category": "Fantasy",
    "year": "1973",
    "url": "https://openlibrary.org/works/OL486967W",
    "image": "https://covers.openlibrary.org/b/id/9284881-M.jpg"
  },
  {
    "title": "Lord of Chaos",
    "author": "Robert Jordan",
    "rating": 4,
    "category": "Fantasy",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL7924208W",
    "image": "https://covers.openlibrary.org/b/id/182398-M.jpg"
  },
  {
    "title": "The Alloy of Law",
    "author": "Brandon Sanderson",
    "rating": 4,
    "category": "Fantasy",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL16597059W",
    "image": "https://covers.openlibrary.org/b/id/14658081-M.jpg"
  },
  {
    "title": "Small Gods",
    "author": "Terry Pratchett",
    "rating": 4,
    "category": "Fantasy",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL453697W",
    "image": "https://covers.openlibrary.org/b/id/14648232-M.jpg"
  },
  {
    "title": "The Way of Kings",
    "author": "Brandon Sanderson",
    "rating": 5,
    "category": "Fantasy",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL15358691W",
    "image": "https://covers.openlibrary.org/b/id/14658316-M.jpg"
  },
  {
    "title": "Phantastes",
    "author": "George MacDonald",
    "rating": 4,
    "category": "Fantasy",
    "year": "1850",
    "url": "https://openlibrary.org/works/OL15450W",
    "image": "https://covers.openlibrary.org/b/id/14358814-M.jpg"
  },
  {
    "title": "Elantris",
    "author": "Brandon Sanderson",
    "rating": 4,
    "category": "Fantasy",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL5738147W",
    "image": "https://covers.openlibrary.org/b/id/14658083-M.jpg"
  },
  {
    "title": "Sojourn",
    "author": "R. A. Salvatore",
    "rating": 4,
    "category": "Fantasy",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL516683W",
    "image": "https://covers.openlibrary.org/b/id/1005943-M.jpg"
  },
  {
    "title": "Pawn of Prophecy",
    "author": "David Eddings",
    "rating": 4,
    "category": "Fantasy",
    "year": "1982",
    "url": "https://openlibrary.org/works/OL1922990W",
    "image": "https://covers.openlibrary.org/b/id/1000455-M.jpg"
  },
  {
    "title": "Gardens of the Moon",
    "author": "Steven Erikson",
    "rating": 4,
    "category": "Fantasy",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL5734756W",
    "image": "https://covers.openlibrary.org/b/id/374277-M.jpg"
  },
  {
    "title": "The Shadow Rising",
    "author": "Robert Jordan",
    "rating": 4,
    "category": "Fantasy",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL7924199W",
    "image": "https://covers.openlibrary.org/b/id/603240-M.jpg"
  },
  {
    "title": "Miecz przeznaczenia",
    "author": "Andrzej Sapkowski",
    "rating": 4,
    "category": "Fantasy",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL2577472W",
    "image": "https://covers.openlibrary.org/b/id/6757701-M.jpg"
  },
  {
    "title": "The Shadow of the Torturer",
    "author": "Gene Wolfe",
    "rating": 4,
    "category": "Fantasy",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL14871979W",
    "image": "https://covers.openlibrary.org/b/id/7029509-M.jpg"
  },
  {
    "title": "Ship of Magic",
    "author": "Robin Hobb",
    "rating": 4,
    "category": "Fantasy",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL2707209W",
    "image": "https://covers.openlibrary.org/b/id/372583-M.jpg"
  },
  {
    "title": "The Emperor's Soul",
    "author": "Brandon Sanderson",
    "rating": 4,
    "category": "Fantasy",
    "year": "2012",
    "url": "https://openlibrary.org/works/OL19960448W",
    "image": "https://covers.openlibrary.org/b/id/14658408-M.jpg"
  },
  {
    "title": "The Fires of Heaven",
    "author": "Robert Jordan",
    "rating": 4,
    "category": "Fantasy",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL7924172W",
    "image": "https://covers.openlibrary.org/b/id/603821-M.jpg"
  },
  {
    "title": "Best served cold",
    "author": "Joe Abercrombie",
    "rating": 4,
    "category": "Fantasy",
    "year": "2009",
    "url": "https://openlibrary.org/works/OL8400949W",
    "image": "https://covers.openlibrary.org/b/id/14543410-M.jpg"
  },
  {
    "title": "Exile",
    "author": "R. A. Salvatore",
    "rating": 4,
    "category": "Fantasy",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL261586W",
    "image": "https://covers.openlibrary.org/b/id/547296-M.jpg"
  },
  {
    "title": "Wolves of the Calla",
    "author": "Stephen King",
    "rating": 4,
    "category": "Fantasy",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL81594W",
    "image": "https://covers.openlibrary.org/b/id/14652470-M.jpg"
  },
  {
    "title": "Ostatnie Życzenie",
    "author": "Andrzej Sapkowski",
    "rating": 4,
    "category": "Fantasy",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL2577482W",
    "image": "https://covers.openlibrary.org/b/id/7360819-M.jpg"
  },
  {
    "title": "House of Earth and Blood",
    "author": "Sarah J. Maas",
    "rating": 4,
    "category": "Fantasy",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20650912W",
    "image": "https://covers.openlibrary.org/b/id/9289603-M.jpg"
  },
  {
    "title": "Enchanters' End Game (The Belgariad)",
    "author": "David Eddings",
    "rating": 4,
    "category": "Fantasy",
    "year": "1984",
    "url": "https://openlibrary.org/works/OL1923013W",
    "image": "https://covers.openlibrary.org/b/id/209046-M.jpg"
  },
  {
    "title": "The Great Hunt (The Wheel of Time Book 2)",
    "author": "Robert Jordan",
    "rating": 4,
    "category": "Fantasy",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL7924135W",
    "image": "https://covers.openlibrary.org/b/id/182352-M.jpg"
  },
  {
    "title": "Assassin's Apprentice",
    "author": "Robin Hobb",
    "rating": 4,
    "category": "Fantasy",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL2707183W",
    "image": "https://covers.openlibrary.org/b/id/4915230-M.jpg"
  },
  {
    "title": "The Way of Shadows",
    "author": "Brent Weeks",
    "rating": 4,
    "category": "Fantasy",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL15015332W",
    "image": "https://covers.openlibrary.org/b/id/6306862-M.jpg"
  },
  {
    "title": "Onyx Storm",
    "author": "Rebecca Yarros",
    "rating": 4,
    "category": "Fantasy",
    "year": "2025",
    "url": "https://openlibrary.org/works/OL41943074W",
    "image": "https://covers.openlibrary.org/b/id/14826089-M.jpg"
  },
  {
    "title": "The ones who walk away from Omelas",
    "author": "Ursula K. Le Guin",
    "rating": 4,
    "category": "Fantasy",
    "year": "1973",
    "url": "https://openlibrary.org/works/OL15056584W",
    "image": "https://covers.openlibrary.org/b/id/3993167-M.jpg"
  },
  {
    "title": "The Housemaid",
    "author": "Freida McFadden",
    "rating": 4,
    "category": "Thriller",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL27729743W",
    "image": "https://covers.openlibrary.org/b/id/15105883-M.jpg"
  },
  {
    "title": "The Housemaid's Secret",
    "author": "Freida McFadden",
    "rating": 4,
    "category": "Thriller",
    "year": "2023",
    "url": "https://openlibrary.org/works/OL34113490W",
    "image": "https://covers.openlibrary.org/b/id/13439869-M.jpg"
  },
  {
    "title": "If We Were Villains",
    "author": "M. L. Rio",
    "rating": 4,
    "category": "Thriller",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL20054906W",
    "image": "https://covers.openlibrary.org/b/id/8835640-M.jpg"
  },
  {
    "title": "Brain Damage",
    "author": "Freida McFadden",
    "rating": 4,
    "category": "Thriller",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL28953746W",
    "image": "https://covers.openlibrary.org/b/id/15132892-M.jpg"
  },
  {
    "title": "Congo",
    "author": "Michael Crichton",
    "rating": 3,
    "category": "Thriller",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL46913W",
    "image": "https://covers.openlibrary.org/b/id/10653144-M.jpg"
  },
  {
    "title": "Suicide Med",
    "author": "Freida McFadden",
    "rating": 4,
    "category": "Thriller",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL34330474W",
    "image": "https://covers.openlibrary.org/b/id/13470475-M.jpg"
  },
  {
    "title": "The Perfect Marriage",
    "author": "Jeneva Rose",
    "rating": 4,
    "category": "Thriller",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL24315820W",
    "image": "https://covers.openlibrary.org/b/id/10833503-M.jpg"
  },
  {
    "title": "Recursion",
    "author": "Blake Crouch",
    "rating": 4,
    "category": "Thriller",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20073906W",
    "image": "https://covers.openlibrary.org/b/id/8748478-M.jpg"
  },
  {
    "title": "Casino Royale",
    "author": "Ian Fleming",
    "rating": 4,
    "category": "Thriller",
    "year": "1953",
    "url": "https://openlibrary.org/works/OL85753W",
    "image": "https://covers.openlibrary.org/b/id/5540820-M.jpg"
  },
  {
    "title": "The Bourne Identity (Read a Great Movie)",
    "author": "Robert Ludlum",
    "rating": 4,
    "category": "Thriller",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL2664705W",
    "image": "https://covers.openlibrary.org/b/id/499535-M.jpg"
  },
  {
    "title": "Die Trying",
    "author": "Lee Child",
    "rating": 4,
    "category": "Thriller",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL52939W",
    "image": "https://covers.openlibrary.org/b/id/14424757-M.jpg"
  },
  {
    "title": "The Lost World",
    "author": "Michael Crichton",
    "rating": 4,
    "category": "Thriller",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL46876W",
    "image": "https://covers.openlibrary.org/b/id/10656102-M.jpg"
  },
  {
    "title": "The Housemaid Is Watching",
    "author": "Freida McFadden",
    "rating": 4,
    "category": "Thriller",
    "year": "2024",
    "url": "https://openlibrary.org/works/OL37576476W",
    "image": "https://covers.openlibrary.org/b/id/14633291-M.jpg"
  },
  {
    "title": "The Husband",
    "author": "Dean Koontz",
    "rating": 4,
    "category": "Thriller",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL263251W",
    "image": "https://covers.openlibrary.org/b/id/12879929-M.jpg"
  },
  {
    "title": "The Wife Upstairs",
    "author": "Freida McFadden",
    "rating": 3,
    "category": "Thriller",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL26121595W",
    "image": "https://covers.openlibrary.org/b/id/12070655-M.jpg"
  },
  {
    "title": "The Butterfly Garden",
    "author": "Dot Hutchison",
    "rating": 3,
    "category": "Thriller",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL20036652W",
    "image": "https://covers.openlibrary.org/b/id/11576000-M.jpg"
  },
  {
    "title": "Intensity",
    "author": "Dean Koontz",
    "rating": 4,
    "category": "Thriller",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL263301W",
    "image": "https://covers.openlibrary.org/b/id/12879769-M.jpg"
  },
  {
    "title": "The Boyfriend",
    "author": "Freida McFadden",
    "rating": 4,
    "category": "Thriller",
    "year": "2024",
    "url": "https://openlibrary.org/works/OL37889158W",
    "image": "https://covers.openlibrary.org/b/id/14820506-M.jpg"
  },
  {
    "title": "Origin",
    "author": "Dan Brown",
    "rating": 4,
    "category": "Thriller",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL17878702W",
    "image": "https://covers.openlibrary.org/b/id/11013590-M.jpg"
  },
  {
    "title": "A Good Girl's Guide to Murder",
    "author": "Holly Jackson",
    "rating": 4,
    "category": "Thriller",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20646061W",
    "image": "https://covers.openlibrary.org/b/id/13156188-M.jpg"
  },
  {
    "title": "Digital Fortress",
    "author": "Dan Brown",
    "rating": 4,
    "category": "Thriller",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL76836W",
    "image": "https://covers.openlibrary.org/b/id/8396115-M.jpg"
  },
  {
    "title": "Kane & Abel",
    "author": "Jeffrey Archer",
    "rating": 4,
    "category": "Thriller",
    "year": "1979",
    "url": "https://openlibrary.org/works/OL1807144W",
    "image": "https://covers.openlibrary.org/b/id/11279169-M.jpg"
  },
  {
    "title": "Zodiac",
    "author": "Neal Stephenson",
    "rating": 4,
    "category": "Thriller",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL38503W",
    "image": "https://covers.openlibrary.org/b/id/9158744-M.jpg"
  },
  {
    "title": "A Savage Adoration",
    "author": "Penny Jordan",
    "rating": 4,
    "category": "Thriller",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL3759348W",
    "image": "https://covers.openlibrary.org/b/id/2343331-M.jpg"
  },
  {
    "title": "Response",
    "author": "Penny Jordan",
    "rating": 4,
    "category": "Thriller",
    "year": "1984",
    "url": "https://openlibrary.org/works/OL3735574W",
    "image": "https://covers.openlibrary.org/b/id/7248505-M.jpg"
  },
  {
    "title": "The Institute",
    "author": "Stephen King",
    "rating": 4,
    "category": "Thriller",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20126932W",
    "image": "https://covers.openlibrary.org/b/id/10712767-M.jpg"
  },
  {
    "title": "The Girl in Room 105",
    "author": "Chetan Bhagat",
    "rating": 5,
    "category": "Thriller",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL20764592W",
    "image": "https://covers.openlibrary.org/b/id/9637345-M.jpg"
  },
  {
    "title": "Layla",
    "author": "Colleen Hoover",
    "rating": 3,
    "category": "Thriller",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL20768985W",
    "image": "https://covers.openlibrary.org/b/id/10533096-M.jpg"
  },
  {
    "title": "Hidden Pictures",
    "author": "Jason Rekulak",
    "rating": 4,
    "category": "Thriller",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL25337698W",
    "image": "https://covers.openlibrary.org/b/id/12775985-M.jpg"
  },
  {
    "title": "Mr. Mercedes",
    "author": "Stephen King",
    "rating": 4,
    "category": "Thriller",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL16820059W",
    "image": "https://covers.openlibrary.org/b/id/14653120-M.jpg"
  },
  {
    "title": "Dolores Claiborne",
    "author": "Stephen King",
    "rating": 3,
    "category": "Thriller",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL81622W",
    "image": "https://covers.openlibrary.org/b/id/9255997-M.jpg"
  },
  {
    "title": "A short history of nearly everything",
    "author": "Bill Bryson",
    "rating": 4,
    "category": "Science",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL74128W",
    "image": "https://covers.openlibrary.org/b/id/12725620-M.jpg"
  },
  {
    "title": "Cosmos",
    "author": "Carl Sagan",
    "rating": 5,
    "category": "Science",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL15829966W",
    "image": "https://covers.openlibrary.org/b/id/8283901-M.jpg"
  },
  {
    "title": "Billions and billions",
    "author": "Carl Sagan",
    "rating": 4,
    "category": "Science",
    "year": "1997",
    "url": "https://openlibrary.org/works/OL2950946W",
    "image": "https://covers.openlibrary.org/b/id/417481-M.jpg"
  },
  {
    "title": "The Intelligent Man's Guide to Science",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science",
    "year": "1960",
    "url": "https://openlibrary.org/works/OL46214W",
    "image": "https://covers.openlibrary.org/b/id/13148661-M.jpg"
  },
  {
    "title": "The Demon-Haunted World",
    "author": "Carl Sagan",
    "rating": 4,
    "category": "Science",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL2950942W",
    "image": "https://covers.openlibrary.org/b/id/13129044-M.jpg"
  },
  {
    "title": "Bad Science",
    "author": "Ben Goldacre",
    "rating": 4,
    "category": "Science",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL10951W",
    "image": "https://covers.openlibrary.org/b/id/6680603-M.jpg"
  },
  {
    "title": "The Fabric of the Cosmos",
    "author": "Brian Greene",
    "rating": 4,
    "category": "Science",
    "year": "2004",
    "url": "https://openlibrary.org/works/OL1909291W",
    "image": "https://covers.openlibrary.org/b/id/6650337-M.jpg"
  },
  {
    "title": "A Brief History of Time",
    "author": "Stephen Hawking",
    "rating": 4,
    "category": "Science",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL1892617W",
    "image": "https://covers.openlibrary.org/b/id/10432365-M.jpg"
  },
  {
    "title": "Brief Answers to the Big Questions",
    "author": "Stephen Hawking",
    "rating": 4,
    "category": "Science",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL19552275W",
    "image": "https://covers.openlibrary.org/b/id/8815165-M.jpg"
  },
  {
    "title": "The art of doing science and engineering",
    "author": "Richard Hamming",
    "rating": 4,
    "category": "Science",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL1185120W",
    "image": "https://covers.openlibrary.org/b/id/14153910-M.jpg"
  },
  {
    "title": "The Pleasure of Finding Things Out",
    "author": "Richard Phillips Feynman",
    "rating": 4,
    "category": "Science",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL271751W",
    "image": "https://covers.openlibrary.org/b/id/463308-M.jpg"
  },
  {
    "title": "The real world",
    "author": "Kerry Ferris",
    "rating": 4,
    "category": "Science",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL9337520W",
    "image": "https://covers.openlibrary.org/b/id/2413037-M.jpg"
  },
  {
    "title": "Thing Explainer",
    "author": "Randall Munroe",
    "rating": 4,
    "category": "Science",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL17323593W",
    "image": "https://covers.openlibrary.org/b/id/7402068-M.jpg"
  },
  {
    "title": "Kindred",
    "author": "Octavia E. Butler",
    "rating": 4,
    "category": "Science",
    "year": "1979",
    "url": "https://openlibrary.org/works/OL35616W",
    "image": "https://covers.openlibrary.org/b/id/8745330-M.jpg"
  },
  {
    "title": "The Psychopath Test",
    "author": "Jon Ronson",
    "rating": 4,
    "category": "Science",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL16795887W",
    "image": "https://covers.openlibrary.org/b/id/7240390-M.jpg"
  },
  {
    "title": "Authority and the Individual",
    "author": "Bertrand Russell",
    "rating": 4,
    "category": "Science",
    "year": "1949",
    "url": "https://openlibrary.org/works/OL1088583W",
    "image": "https://covers.openlibrary.org/b/id/8242875-M.jpg"
  },
  {
    "title": "All About Love",
    "author": "bell hooks",
    "rating": 4,
    "category": "Science",
    "year": "2000",
    "url": "https://openlibrary.org/works/OL31111W",
    "image": "https://covers.openlibrary.org/b/id/42317-M.jpg"
  },
  {
    "title": "The Magic of Reality",
    "author": "Richard Dawkins",
    "rating": 4,
    "category": "Science",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL16116943W",
    "image": "https://covers.openlibrary.org/b/id/6954864-M.jpg"
  },
  {
    "title": "Siete breves lecciones de física",
    "author": "Carlo Rovelli",
    "rating": 4,
    "category": "Science",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL17319394W",
    "image": "https://covers.openlibrary.org/b/id/7398110-M.jpg"
  },
  {
    "title": "The End of Everything (Astrophysically Speaking)",
    "author": "Katie Mack",
    "rating": 4,
    "category": "Science",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL21181790W",
    "image": "https://covers.openlibrary.org/b/id/10342810-M.jpg"
  },
  {
    "title": "Classical Mechanics (Physics)",
    "author": "Leonard Susskind",
    "rating": 4,
    "category": "Science",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL17800180W",
    "image": "https://covers.openlibrary.org/b/id/12207860-M.jpg"
  },
  {
    "title": "One, two, three ... infinity",
    "author": "George Gamow",
    "rating": 3,
    "category": "Science",
    "year": "1947",
    "url": "https://openlibrary.org/works/OL1136296W",
    "image": "https://covers.openlibrary.org/b/id/310408-M.jpg"
  },
  {
    "title": "The Skeptics' Guide to the Universe",
    "author": "Steven Novella",
    "rating": 4,
    "category": "Science",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL19763505W",
    "image": "https://covers.openlibrary.org/b/id/9242613-M.jpg"
  },
  {
    "title": "Napoleon's Buttons",
    "author": "Penny LeCouteur",
    "rating": 3,
    "category": "Science",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL15175439W",
    "image": "https://covers.openlibrary.org/b/id/850255-M.jpg"
  },
  {
    "title": "The Gene",
    "author": "Siddhartha Mukherjee",
    "rating": 4,
    "category": "Science",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL17762235W",
    "image": "https://covers.openlibrary.org/b/id/11320163-M.jpg"
  },
  {
    "title": "Stuff Matters",
    "author": "Mark Miodownik",
    "rating": 4,
    "category": "Science",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL17778974W",
    "image": "https://covers.openlibrary.org/b/id/8055563-M.jpg"
  },
  {
    "title": "Über die spezielle und die allgemeine Relativitätstheorie",
    "author": "Albert Einstein",
    "rating": 4,
    "category": "Science",
    "year": "1917",
    "url": "https://openlibrary.org/works/OL1214190W",
    "image": "https://covers.openlibrary.org/b/id/10478466-M.jpg"
  },
  {
    "title": "Astronomy",
    "author": "Dinah L. Moché",
    "rating": 4,
    "category": "Science",
    "year": "1978",
    "url": "https://openlibrary.org/works/OL1942842W",
    "image": "https://covers.openlibrary.org/b/id/302728-M.jpg"
  },
  {
    "title": "Death by black hole : and other cosmic quandaries",
    "author": "Neil deGrasse Tyson",
    "rating": 4,
    "category": "Science",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL2744497W",
    "image": "https://covers.openlibrary.org/b/id/7322931-M.jpg"
  },
  {
    "title": "The Precipice",
    "author": "Toby Ord",
    "rating": 4,
    "category": "Science",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL20670327W",
    "image": "https://covers.openlibrary.org/b/id/9338949-M.jpg"
  },
  {
    "title": "Brown Girl in the Ring",
    "author": "Nalo Hopkinson",
    "rating": 3,
    "category": "Science",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL477817W",
    "image": "https://covers.openlibrary.org/b/id/288006-M.jpg"
  },
  {
    "title": "A Brief History of Everyone Who Ever Lived",
    "author": "Adam Rutherford",
    "rating": 4,
    "category": "Science",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL17715915W",
    "image": "https://covers.openlibrary.org/b/id/9155814-M.jpg"
  },
  {
    "title": "You Look Like a Thing and I Love You",
    "author": "Janelle Shane",
    "rating": 2,
    "category": "Science",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20889986W",
    "image": "https://covers.openlibrary.org/b/id/10220200-M.jpg"
  },
  {
    "title": "Far as human eye could see",
    "author": "Isaac Asimov",
    "rating": 5,
    "category": "Science",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL46297W",
    "image": "https://covers.openlibrary.org/b/id/12698068-M.jpg"
  },
  {
    "title": "The Secret of the Universe",
    "author": "Isaac Asimov",
    "rating": 3,
    "category": "Science",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL46184W",
    "image": "https://covers.openlibrary.org/b/id/10613081-M.jpg"
  },
  {
    "title": "The Canon",
    "author": "Natalie Angier",
    "rating": 4,
    "category": "Science",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL1989648W",
    "image": "https://covers.openlibrary.org/b/id/393900-M.jpg"
  },
  {
    "title": "I Don't Love You Anymore",
    "author": "Rithvik Singh",
    "rating": 4,
    "category": "Poetry",
    "year": "2024",
    "url": "https://openlibrary.org/works/OL38382569W",
    "image": "https://covers.openlibrary.org/b/id/15116470-M.jpg"
  },
  {
    "title": "Thank You for Leaving",
    "author": "Rithvik Singh",
    "rating": 3,
    "category": "Poetry",
    "year": "2025",
    "url": "https://openlibrary.org/works/OL42577236W",
    "image": "https://covers.openlibrary.org/b/id/14847895-M.jpg"
  },
  {
    "title": "The Raven",
    "author": "Edgar Allan Poe",
    "rating": 4,
    "category": "Poetry",
    "year": "1845",
    "url": "https://openlibrary.org/works/OL41081W",
    "image": "https://covers.openlibrary.org/b/id/8246077-M.jpg"
  },
  {
    "title": "The Prophet",
    "author": "Kahlil Gibran",
    "rating": 4,
    "category": "Poetry",
    "year": "1900",
    "url": "https://openlibrary.org/works/OL318900W",
    "image": "https://covers.openlibrary.org/b/id/418324-M.jpg"
  },
  {
    "title": "Veinte poemas de amor y una canción desesperada",
    "author": "Pablo Neruda",
    "rating": 4,
    "category": "Poetry",
    "year": "1924",
    "url": "https://openlibrary.org/works/OL979517W",
    "image": "https://covers.openlibrary.org/b/id/747596-M.jpg"
  },
  {
    "title": "Howl, and Other Poems",
    "author": "Allen Ginsberg",
    "rating": 4,
    "category": "Poetry",
    "year": "1956",
    "url": "https://openlibrary.org/works/OL102483W",
    "image": "https://covers.openlibrary.org/b/id/662901-M.jpg"
  },
  {
    "title": "the sun and her flowers",
    "author": "Rupi Kaur",
    "rating": 4,
    "category": "Poetry",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL17800586W",
    "image": "https://covers.openlibrary.org/b/id/8084615-M.jpg"
  },
  {
    "title": "The Odyssey",
    "author": "Όμηρος",
    "rating": 4,
    "category": "Poetry",
    "year": "1946",
    "url": "https://openlibrary.org/works/OL26446888W",
    "image": "https://covers.openlibrary.org/b/id/12474938-M.jpg"
  },
  {
    "title": "Pillow thoughts",
    "author": "Courtney Peppernell",
    "rating": 4,
    "category": "Poetry",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL19754878W",
    "image": "https://covers.openlibrary.org/b/id/12780684-M.jpg"
  },
  {
    "title": "Poems",
    "author": "William Butler Yeats",
    "rating": 4,
    "category": "Poetry",
    "year": "1895",
    "url": "https://openlibrary.org/works/OL38847W",
    "image": "https://covers.openlibrary.org/b/id/6968826-M.jpg"
  },
  {
    "title": "Milk and Honey",
    "author": "Rupi Kaur",
    "rating": 4,
    "category": "Poetry",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL17606111W",
    "image": "https://covers.openlibrary.org/b/id/8743595-M.jpg"
  },
  {
    "title": "The Great messenger of mortality, or, A Dialogue betwixt death and a lady",
    "author": "Unknown",
    "rating": 4,
    "category": "Poetry",
    "year": "1600",
    "url": "https://openlibrary.org/works/OL16796766M",
    "image": ""
  },
  {
    "title": "Love Is a Dog from Hell",
    "author": "Charles Bukowski",
    "rating": 4,
    "category": "Poetry",
    "year": "1977",
    "url": "https://openlibrary.org/works/OL50443W",
    "image": "https://covers.openlibrary.org/b/id/6617563-M.jpg"
  },
  {
    "title": "Ariel",
    "author": "Sylvia Plath",
    "rating": 4,
    "category": "Poetry",
    "year": "1965",
    "url": "https://openlibrary.org/works/OL1865549W",
    "image": "https://covers.openlibrary.org/b/id/33279-M.jpg"
  },
  {
    "title": "Revolting rhymes",
    "author": "Roald Dahl",
    "rating": 4,
    "category": "Poetry",
    "year": "1982",
    "url": "https://openlibrary.org/works/OL45878W",
    "image": "https://covers.openlibrary.org/b/id/9176010-M.jpg"
  },
  {
    "title": "Leaves of Grass",
    "author": "Walt Whitman",
    "rating": 4,
    "category": "Poetry",
    "year": "1855",
    "url": "https://openlibrary.org/works/OL16333W",
    "image": "https://covers.openlibrary.org/b/id/9000447-M.jpg"
  },
  {
    "title": "Falling Up",
    "author": "Shel Silverstein",
    "rating": 4,
    "category": "Poetry",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL3368286W",
    "image": "https://covers.openlibrary.org/b/id/26482-M.jpg"
  },
  {
    "title": "Paradise Lost",
    "author": "John Milton",
    "rating": 4,
    "category": "Poetry",
    "year": "1667",
    "url": "https://openlibrary.org/works/OL810991W",
    "image": "https://covers.openlibrary.org/b/id/5992814-M.jpg"
  },
  {
    "title": "De rerum natura",
    "author": "Titus Lucretius Carus",
    "rating": 4,
    "category": "Poetry",
    "year": "1486",
    "url": "https://openlibrary.org/works/OL1548597W",
    "image": "https://covers.openlibrary.org/b/id/566208-M.jpg"
  },
  {
    "title": "The Night Before Christmas",
    "author": "Clement Clarke Moore",
    "rating": 4,
    "category": "Poetry",
    "year": "1857",
    "url": "https://openlibrary.org/works/OL655908W",
    "image": "https://covers.openlibrary.org/b/id/8236410-M.jpg"
  },
  {
    "title": "The princess saves herself in this one",
    "author": "Amanda Lovelace",
    "rating": 3,
    "category": "Poetry",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL20048204W",
    "image": "https://covers.openlibrary.org/b/id/10479516-M.jpg"
  },
  {
    "title": "A Child's Garden of Verses",
    "author": "Robert Louis Stevenson",
    "rating": 4,
    "category": "Poetry",
    "year": "1885",
    "url": "https://openlibrary.org/works/OL24165W",
    "image": "https://covers.openlibrary.org/b/id/8777530-M.jpg"
  },
  {
    "title": "Poems and Prose",
    "author": "Edgar Allan Poe",
    "rating": 4,
    "category": "Poetry",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL40992W",
    "image": "https://covers.openlibrary.org/b/id/11718804-M.jpg"
  },
  {
    "title": "Old Possum's Book of Practical Cats",
    "author": "T. S. Eliot",
    "rating": 4,
    "category": "Poetry",
    "year": "1939",
    "url": "https://openlibrary.org/works/OL1142289W",
    "image": "https://covers.openlibrary.org/b/id/1015632-M.jpg"
  },
  {
    "title": "Barbie Horse Trouble Barbie Look Look",
    "author": "Golden Books",
    "rating": 4,
    "category": "Poetry",
    "year": "1921",
    "url": "https://openlibrary.org/works/OL8043761W",
    "image": "https://covers.openlibrary.org/b/id/2359079-M.jpg"
  },
  {
    "title": "Inferno",
    "author": "Dante Alighieri",
    "rating": 4,
    "category": "Poetry",
    "year": "1767",
    "url": "https://openlibrary.org/works/OL93227W",
    "image": "https://covers.openlibrary.org/b/id/6387077-M.jpg"
  },
  {
    "title": "The poetical works of Sir Walter Scott",
    "author": "Sir Walter Scott",
    "rating": 4,
    "category": "Poetry",
    "year": "1800",
    "url": "https://openlibrary.org/works/OL863810W",
    "image": "https://covers.openlibrary.org/b/id/8242238-M.jpg"
  },
  {
    "title": "Halloween Howls",
    "author": "Lee B. Hopkins",
    "rating": 4,
    "category": "Poetry",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL57884W",
    "image": "https://covers.openlibrary.org/b/id/20973-M.jpg"
  },
  {
    "title": "Ὀδύσσεια",
    "author": "Όμηρος",
    "rating": 4,
    "category": "Poetry",
    "year": "1488",
    "url": "https://openlibrary.org/works/OL61982W",
    "image": "https://covers.openlibrary.org/b/id/9045853-M.jpg"
  },
  {
    "title": "Metamorphoses",
    "author": "Ovid",
    "rating": 4,
    "category": "Poetry",
    "year": "1479",
    "url": "https://openlibrary.org/works/OL15292640W",
    "image": "https://covers.openlibrary.org/b/id/7212118-M.jpg"
  },
  {
    "title": "Meghadūta",
    "author": "Kālidāsa",
    "rating": 3,
    "category": "Poetry",
    "year": "1813",
    "url": "https://openlibrary.org/works/OL293343W",
    "image": "https://covers.openlibrary.org/b/id/8243134-M.jpg"
  },
  {
    "title": "When we were very young",
    "author": "A. A. Milne",
    "rating": 4,
    "category": "Poetry",
    "year": "1924",
    "url": "https://openlibrary.org/works/OL476630W",
    "image": "https://covers.openlibrary.org/b/id/101956-M.jpg"
  },
  {
    "title": "Dirty Beasts",
    "author": "Roald Dahl",
    "rating": 4,
    "category": "Poetry",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL45874W",
    "image": "https://covers.openlibrary.org/b/id/9159010-M.jpg"
  },
  {
    "title": "Cry Freedom",
    "author": "Unknown",
    "rating": 4,
    "category": "Poetry",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL11288561M",
    "image": ""
  },
  {
    "title": "A Light in the Attic",
    "author": "Shel Silverstein",
    "rating": 4,
    "category": "Poetry",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL15843795W",
    "image": "https://covers.openlibrary.org/b/id/6806998-M.jpg"
  },
  {
    "title": "A Walk in the Woods",
    "author": "Bill Bryson",
    "rating": 4,
    "category": "Travel",
    "year": "1997",
    "url": "https://openlibrary.org/works/OL74123W",
    "image": "https://covers.openlibrary.org/b/id/12722649-M.jpg"
  },
  {
    "title": "Eat, Pray, Love",
    "author": "Elizabeth Gilbert",
    "rating": 3,
    "category": "Travel",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL41815W",
    "image": "https://covers.openlibrary.org/b/id/111433-M.jpg"
  },
  {
    "title": "Wise and otherwise",
    "author": "Sudha Murti",
    "rating": 5,
    "category": "Travel",
    "year": "2002",
    "url": "https://openlibrary.org/works/OL13683225W",
    "image": "https://covers.openlibrary.org/b/id/10795720-M.jpg"
  },
  {
    "title": "Notes from a small island",
    "author": "Bill Bryson",
    "rating": 4,
    "category": "Travel",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL74129W",
    "image": "https://covers.openlibrary.org/b/id/8598315-M.jpg"
  },
  {
    "title": "Neither here nor there",
    "author": "Bill Bryson",
    "rating": 4,
    "category": "Travel",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL74125W",
    "image": "https://covers.openlibrary.org/b/id/6543636-M.jpg"
  },
  {
    "title": "A Time of Gifts",
    "author": "Patrick Leigh Fermor",
    "rating": 4,
    "category": "Travel",
    "year": "1977",
    "url": "https://openlibrary.org/works/OL3583229W",
    "image": "https://covers.openlibrary.org/b/id/6256726-M.jpg"
  },
  {
    "title": "Texas Insight Guide (Insight Guides)",
    "author": "Unknown",
    "rating": 4,
    "category": "Travel",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL9195992M",
    "image": "https://covers.openlibrary.org/b/id/1055104-M.jpg"
  },
  {
    "title": "Tracks",
    "author": "Robyn Davidson",
    "rating": 4,
    "category": "Travel",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL15857436W",
    "image": "https://covers.openlibrary.org/b/id/6820231-M.jpg"
  },
  {
    "title": "Laos Insight Compact Guide (Insight Compact Guides)",
    "author": "Unknown",
    "rating": 4,
    "category": "Travel",
    "year": "2000",
    "url": "https://openlibrary.org/works/OL9196002M",
    "image": "https://covers.openlibrary.org/b/id/2300835-M.jpg"
  },
  {
    "title": "Start with why",
    "author": "Simon Sinek",
    "rating": 4,
    "category": "Business",
    "year": "2009",
    "url": "https://openlibrary.org/works/OL13806374W",
    "image": "https://covers.openlibrary.org/b/id/6395237-M.jpg"
  },
  {
    "title": "Zero to One",
    "author": "Peter A. Thiel",
    "rating": 4,
    "category": "Business",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL17078706W",
    "image": "https://covers.openlibrary.org/b/id/9002334-M.jpg"
  },
  {
    "title": "$100M Offers",
    "author": "Alex Hormozi",
    "rating": 5,
    "category": "Business",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL25037516W",
    "image": "https://covers.openlibrary.org/b/id/11948182-M.jpg"
  },
  {
    "title": "Trading in the zone",
    "author": "Mark Douglas",
    "rating": 4,
    "category": "Business",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL4461578W",
    "image": "https://covers.openlibrary.org/b/id/460625-M.jpg"
  },
  {
    "title": "The Hard Thing About Hard Things",
    "author": "Ben Horowitz",
    "rating": 4,
    "category": "Business",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL16818208W",
    "image": "https://covers.openlibrary.org/b/id/7279515-M.jpg"
  },
  {
    "title": "Think and Grow Rich",
    "author": "Napoleon Hill",
    "rating": 4,
    "category": "Business",
    "year": "1937",
    "url": "https://openlibrary.org/works/OL527464W",
    "image": "https://covers.openlibrary.org/b/id/14542536-M.jpg"
  },
  {
    "title": "Never Split the Difference",
    "author": "Chris Voss",
    "rating": 4,
    "category": "Business",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL18819818W",
    "image": "https://covers.openlibrary.org/b/id/8365942-M.jpg"
  },
  {
    "title": "Everybody Writes",
    "author": "Ann Handley",
    "rating": 5,
    "category": "Business",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL19337438W",
    "image": "https://covers.openlibrary.org/b/id/8449611-M.jpg"
  },
  {
    "title": "Entrepreneurship",
    "author": "Robert D. Hisrich",
    "rating": 5,
    "category": "Business",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL2688120W",
    "image": "https://covers.openlibrary.org/b/id/8231771-M.jpg"
  },
  {
    "title": "Deep Work",
    "author": "Cal Newport",
    "rating": 4,
    "category": "Business",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL17713267W",
    "image": "https://covers.openlibrary.org/b/id/7988607-M.jpg"
  },
  {
    "title": "Rework",
    "author": "Jason Fried",
    "rating": 4,
    "category": "Business",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL15168112W",
    "image": "https://covers.openlibrary.org/b/id/6679955-M.jpg"
  },
  {
    "title": "Beyond entrepreneurship",
    "author": "Collins, James C.",
    "rating": 4,
    "category": "Business",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL3486272W",
    "image": "https://covers.openlibrary.org/b/id/3974652-M.jpg"
  },
  {
    "title": "Drive",
    "author": "Daniel H. Pink",
    "rating": 4,
    "category": "Business",
    "year": "2009",
    "url": "https://openlibrary.org/works/OL15016965W",
    "image": "https://covers.openlibrary.org/b/id/6404786-M.jpg"
  },
  {
    "title": "The Unicorn Project",
    "author": "Gene Kim",
    "rating": 4,
    "category": "Business",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20716769W",
    "image": "https://covers.openlibrary.org/b/id/9398045-M.jpg"
  },
  {
    "title": "How to Make Money in Stocks",
    "author": "William J. O'Neil",
    "rating": 4,
    "category": "Business",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL3498124W",
    "image": "https://covers.openlibrary.org/b/id/5934897-M.jpg"
  },
  {
    "title": "Convince them in 90 seconds or less",
    "author": "Nicholas Boothman",
    "rating": 4,
    "category": "Business",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL15910345W",
    "image": "https://covers.openlibrary.org/b/id/11610231-M.jpg"
  },
  {
    "title": "The Dip",
    "author": "Seth Godin",
    "rating": 3,
    "category": "Business",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL2329204W",
    "image": "https://covers.openlibrary.org/b/id/1977228-M.jpg"
  },
  {
    "title": "The Millionaire Fastlane",
    "author": "M. J. DeMarco",
    "rating": 5,
    "category": "Business",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL26428079W",
    "image": "https://covers.openlibrary.org/b/id/12393433-M.jpg"
  },
  {
    "title": "Crucial Conversations",
    "author": "Kerry Patterson",
    "rating": 4,
    "category": "Business",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL282391W",
    "image": "https://covers.openlibrary.org/b/id/1711809-M.jpg"
  },
  {
    "title": "Built to Last",
    "author": "Collins, James C.",
    "rating": 3,
    "category": "Business",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL3486276W",
    "image": "https://covers.openlibrary.org/b/id/684195-M.jpg"
  },
  {
    "title": "Steve Jobs",
    "author": "Walter Isaacson",
    "rating": 4,
    "category": "Business",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL16085155W",
    "image": "https://covers.openlibrary.org/b/id/12374726-M.jpg"
  },
  {
    "title": "Superhero Nutrition",
    "author": "Steve Zim",
    "rating": 4,
    "category": "Health",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL20567504W",
    "image": "https://covers.openlibrary.org/b/id/9209373-M.jpg"
  },
  {
    "title": "Unfuck your brain",
    "author": "Faith G. Harper",
    "rating": 4,
    "category": "Health",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL19729669W",
    "image": "https://covers.openlibrary.org/b/id/8851486-M.jpg"
  },
  {
    "title": "A wellness way of life",
    "author": "Gwen Robbins",
    "rating": 3,
    "category": "Health",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL1818706W",
    "image": "https://covers.openlibrary.org/b/id/1083077-M.jpg"
  },
  {
    "title": "Switch on your brain",
    "author": "Caroline Leaf",
    "rating": 5,
    "category": "Health",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL16812791W",
    "image": "https://covers.openlibrary.org/b/id/7272162-M.jpg"
  },
  {
    "title": "Body kindness",
    "author": "Rebecca Scritchfield",
    "rating": 3,
    "category": "Health",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL20045530W",
    "image": "https://covers.openlibrary.org/b/id/12708125-M.jpg"
  },
  {
    "title": "Dodging energy vampires",
    "author": "Christiane Northrup",
    "rating": 3,
    "category": "Health",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL19746021W",
    "image": "https://covers.openlibrary.org/b/id/12420957-M.jpg"
  },
  {
    "title": "Transcend",
    "author": "Ray Kurzweil",
    "rating": 3,
    "category": "Health",
    "year": "2009",
    "url": "https://openlibrary.org/works/OL1958848W",
    "image": "https://covers.openlibrary.org/b/id/6964051-M.jpg"
  },
  {
    "title": "52 small changes for the mind",
    "author": "Brett Blumenthal",
    "rating": 3,
    "category": "Health",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL20019975W",
    "image": "https://covers.openlibrary.org/b/id/12209050-M.jpg"
  },
  {
    "title": "Money, and the law of attraction",
    "author": "Esther Hicks",
    "rating": 5,
    "category": "Health",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL8700334W",
    "image": "https://covers.openlibrary.org/b/id/2738270-M.jpg"
  },
  {
    "title": "The Wellness Syndrome",
    "author": "Carl Cederström",
    "rating": 4,
    "category": "Health",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL19641736W",
    "image": "https://covers.openlibrary.org/b/id/8558361-M.jpg"
  },
  {
    "title": "The Deepest Well: Healing the Long-Term Effects of Childhood Adversity",
    "author": "Nadine Burke Harris M.D.",
    "rating": 4,
    "category": "Health",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL19354438W",
    "image": "https://covers.openlibrary.org/b/id/8468164-M.jpg"
  },
  {
    "title": "Reasons to stay alive",
    "author": "Matt Haig",
    "rating": 4,
    "category": "Health",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL20020049W",
    "image": "https://covers.openlibrary.org/b/id/12639532-M.jpg"
  },
  {
    "title": "Wellmania",
    "author": "Brigid Delaney",
    "rating": 3,
    "category": "Health",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL19734985W",
    "image": "https://covers.openlibrary.org/b/id/13845751-M.jpg"
  },
  {
    "title": "Become Your Own Personal Mental Fitness Trainer",
    "author": "Andrew Bostinto",
    "rating": 3,
    "category": "Health",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL8794545W",
    "image": "https://covers.openlibrary.org/b/id/1839530-M.jpg"
  },
  {
    "title": "Beard's massage",
    "author": "Giovanni De Domenico",
    "rating": 3,
    "category": "Health",
    "year": "1997",
    "url": "https://openlibrary.org/works/OL3261403W",
    "image": "https://covers.openlibrary.org/b/id/1358482-M.jpg"
  },
  {
    "title": "10 keys to happier living",
    "author": "King, Vanessa (Psychologist)",
    "rating": 3,
    "category": "Health",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL19732352W",
    "image": "https://covers.openlibrary.org/b/id/14436284-M.jpg"
  },
  {
    "title": "Max's checkup",
    "author": "Penguin Young Readers",
    "rating": 3,
    "category": "Health",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL18172778W",
    "image": "https://covers.openlibrary.org/b/id/10061521-M.jpg"
  },
  {
    "title": "The science of subjective well-being",
    "author": "Michael Eid",
    "rating": 3,
    "category": "Health",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL18355320W",
    "image": "https://covers.openlibrary.org/b/id/2960022-M.jpg"
  },
  {
    "title": "Positive Psychology",
    "author": "Alan Carr",
    "rating": 3,
    "category": "Health",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL25226491W",
    "image": "https://covers.openlibrary.org/b/id/14762499-M.jpg"
  },
  {
    "title": "Grail Springs Holistic Detox",
    "author": "Madeleine Marentette",
    "rating": 3,
    "category": "Health",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL9814902W",
    "image": "https://covers.openlibrary.org/b/id/2905121-M.jpg"
  },
  {
    "title": "Positive Psychology and You",
    "author": "Alan Carr",
    "rating": 3,
    "category": "Health",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL21651691W",
    "image": "https://covers.openlibrary.org/b/id/12439316-M.jpg"
  },
  {
    "title": "Workplace Wellness That Works",
    "author": "Laura Putnam",
    "rating": 3,
    "category": "Health",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL21574980W",
    "image": ""
  },
  {
    "title": "Grumpy Darling",
    "author": "Alexandra Moody",
    "rating": 4,
    "category": "Sports",
    "year": "2025",
    "url": "https://openlibrary.org/works/OL42539351W",
    "image": "https://covers.openlibrary.org/b/id/15101727-M.jpg"
  },
  {
    "title": "Relentless",
    "author": "Tim Grover",
    "rating": 4,
    "category": "Sports",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL19966051W",
    "image": "https://covers.openlibrary.org/b/id/13270543-M.jpg"
  },
  {
    "title": "The Deal / The Mistake / The Score / The Goal / The Legacy",
    "author": "Elle Kennedy",
    "rating": 5,
    "category": "Sports",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL36733687W",
    "image": "https://covers.openlibrary.org/b/id/15217419-M.jpg"
  },
  {
    "title": "Keeping 13",
    "author": "Chloe Walsh",
    "rating": 5,
    "category": "Sports",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL27965945W",
    "image": "https://covers.openlibrary.org/b/id/14654015-M.jpg"
  },
  {
    "title": "Un sogno sul ghiaccio per Colette",
    "author": "Elisabetta Dami",
    "rating": 4,
    "category": "Sports",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL20110429W",
    "image": "https://covers.openlibrary.org/b/id/8770311-M.jpg"
  },
  {
    "title": "Blind Side",
    "author": "Kandi Steiner",
    "rating": 4,
    "category": "Sports",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL28454346W",
    "image": "https://covers.openlibrary.org/b/id/12854338-M.jpg"
  },
  {
    "title": "Relax & win",
    "author": "Bud Winter",
    "rating": 4,
    "category": "Sports",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL6438864W",
    "image": "https://covers.openlibrary.org/b/id/9368754-M.jpg"
  },
  {
    "title": "The Foxhole Court",
    "author": "Nora Sakavic",
    "rating": 4,
    "category": "Sports",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL21780511W",
    "image": "https://covers.openlibrary.org/b/id/10404984-M.jpg"
  },
  {
    "title": "Shoe Dog",
    "author": "Phil Knight",
    "rating": 5,
    "category": "Sports",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL17825802W",
    "image": "https://covers.openlibrary.org/b/id/8858487-M.jpg"
  },
  {
    "title": "Game Changer",
    "author": "Rachel Reid",
    "rating": 4,
    "category": "Sports",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL27916409W",
    "image": "https://covers.openlibrary.org/b/id/11050489-M.jpg"
  },
  {
    "title": "The Champion's Mind",
    "author": "James A. Afremow",
    "rating": 5,
    "category": "Sports",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL19975980W",
    "image": "https://covers.openlibrary.org/b/id/14370897-M.jpg"
  },
  {
    "title": "The Mamba mentality",
    "author": "Kobe Bryant",
    "rating": 4,
    "category": "Sports",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL19754799W",
    "image": "https://covers.openlibrary.org/b/id/9261036-M.jpg"
  },
  {
    "title": "Sport in society",
    "author": "Jay J. Coakley",
    "rating": 3,
    "category": "Sports",
    "year": "1978",
    "url": "https://openlibrary.org/works/OL2667008W",
    "image": "https://covers.openlibrary.org/b/id/1084565-M.jpg"
  },
  {
    "title": "The Long Game",
    "author": "Rachel Reid",
    "rating": 4,
    "category": "Sports",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL26085843W",
    "image": "https://covers.openlibrary.org/b/id/13229174-M.jpg"
  },
  {
    "title": "Friday night lights",
    "author": "Buzz Bissinger",
    "rating": 4,
    "category": "Sports",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL2645895W",
    "image": "https://covers.openlibrary.org/b/id/165032-M.jpg"
  },
  {
    "title": "Carrie Soto Is Back",
    "author": "Taylor Jenkins Reid",
    "rating": 4,
    "category": "Sports",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL27305925W",
    "image": "https://covers.openlibrary.org/b/id/12900643-M.jpg"
  },
  {
    "title": "Quidditch Through the Ages",
    "author": "J. K. Rowling",
    "rating": 4,
    "category": "Sports",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL8119615W",
    "image": "https://covers.openlibrary.org/b/id/8273320-M.jpg"
  },
  {
    "title": "Foundations of sport and exercise psychology",
    "author": "Robert S. Weinberg",
    "rating": 5,
    "category": "Sports",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL2005230W",
    "image": "https://covers.openlibrary.org/b/id/1364042-M.jpg"
  },
  {
    "title": "Sports in Society",
    "author": "Jay J. Coakley",
    "rating": 3,
    "category": "Sports",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL2667007W",
    "image": "https://covers.openlibrary.org/b/id/10202679-M.jpg"
  },
  {
    "title": "Gender equity in intercollegiate athletics",
    "author": "Unknown",
    "rating": 3,
    "category": "Sports",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL14958204M",
    "image": ""
  },
  {
    "title": "Sport Management",
    "author": "Russell Hoye",
    "rating": 5,
    "category": "Sports",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL19903500W",
    "image": "https://covers.openlibrary.org/b/id/8722045-M.jpg"
  },
  {
    "title": "Among the thugs",
    "author": "Bill Buford",
    "rating": 5,
    "category": "Sports",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL4124702W",
    "image": "https://covers.openlibrary.org/b/id/420650-M.jpg"
  },
  {
    "title": "Fat city",
    "author": "Leonard Gardner",
    "rating": 5,
    "category": "Sports",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL3245490W",
    "image": "https://covers.openlibrary.org/b/id/8291226-M.jpg"
  },
  {
    "title": "Hello world",
    "author": "Hannah Fry",
    "rating": 4,
    "category": "Technology",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL19761312W",
    "image": "https://covers.openlibrary.org/b/id/10567981-M.jpg"
  },
  {
    "title": "Dark Matter",
    "author": "Blake Crouch",
    "rating": 4,
    "category": "Technology",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL17358795W",
    "image": "https://covers.openlibrary.org/b/id/7436634-M.jpg"
  },
  {
    "title": "Digital Minimalism",
    "author": "Cal Newport",
    "rating": 3,
    "category": "Technology",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL19541830W",
    "image": "https://covers.openlibrary.org/b/id/8507540-M.jpg"
  },
  {
    "title": "The Circle",
    "author": "Dave Eggers",
    "rating": 3,
    "category": "Technology",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL16808654W",
    "image": "https://covers.openlibrary.org/b/id/8334682-M.jpg"
  },
  {
    "title": "All Tomorrow's Parties",
    "author": "William Gibson",
    "rating": 4,
    "category": "Technology",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL27251W",
    "image": "https://covers.openlibrary.org/b/id/258725-M.jpg"
  },
  {
    "title": "Transactions on Engineering Technologies",
    "author": "Sio-Iong Ao",
    "rating": 3,
    "category": "Technology",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL20667190W",
    "image": "https://covers.openlibrary.org/b/id/9334768-M.jpg"
  },
  {
    "title": "Crossing the Chasm",
    "author": "Geoffrey A. Moore",
    "rating": 4,
    "category": "Technology",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL30695W",
    "image": "https://covers.openlibrary.org/b/id/684159-M.jpg"
  },
  {
    "title": "Small Is Beautiful",
    "author": "E. F. Schumacher",
    "rating": 4,
    "category": "Technology",
    "year": "1905",
    "url": "https://openlibrary.org/works/OL1622912W",
    "image": "https://covers.openlibrary.org/b/id/6738557-M.jpg"
  },
  {
    "title": "Industrial Society and Its Future",
    "author": "Theodore Kaczynski",
    "rating": 4,
    "category": "Technology",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL9003449W",
    "image": "https://covers.openlibrary.org/b/id/9329184-M.jpg"
  },
  {
    "title": "The Book",
    "author": "Hungry Minds",
    "rating": 4,
    "category": "Technology",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL37851715W",
    "image": "https://covers.openlibrary.org/b/id/15205968-M.jpg"
  },
  {
    "title": "Profiles of the future",
    "author": "Arthur C. Clarke",
    "rating": 5,
    "category": "Technology",
    "year": "1962",
    "url": "https://openlibrary.org/works/OL17414W",
    "image": "https://covers.openlibrary.org/b/id/380579-M.jpg"
  },
  {
    "title": "What technology wants",
    "author": "Kevin Kelly",
    "rating": 4,
    "category": "Technology",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL16327712W",
    "image": "https://covers.openlibrary.org/b/id/7879988-M.jpg"
  },
  {
    "title": "Life 3.0",
    "author": "Max Tegmark",
    "rating": 4,
    "category": "Technology",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL19717530W",
    "image": "https://covers.openlibrary.org/b/id/10239283-M.jpg"
  },
  {
    "title": "Operating manual for spaceship earth",
    "author": "R. Buckminster Fuller",
    "rating": 5,
    "category": "Technology",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL4109899W",
    "image": "https://covers.openlibrary.org/b/id/689663-M.jpg"
  },
  {
    "title": "Inspired",
    "author": "Marty Cagan",
    "rating": 4,
    "category": "Technology",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL16803591W",
    "image": "https://covers.openlibrary.org/b/id/9700654-M.jpg"
  },
  {
    "title": "Red Storm Rising",
    "author": "Tom Clancy",
    "rating": 4,
    "category": "Technology",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL159642W",
    "image": "https://covers.openlibrary.org/b/id/12928732-M.jpg"
  },
  {
    "title": "Techno-Feudalism",
    "author": "Yanis Varoufakis",
    "rating": 3,
    "category": "Technology",
    "year": "2023",
    "url": "https://openlibrary.org/works/OL34024904W",
    "image": "https://covers.openlibrary.org/b/id/15122209-M.jpg"
  },
  {
    "title": "The Innovators",
    "author": "Walter Isaacson",
    "rating": 4,
    "category": "Technology",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL17074268W",
    "image": "https://covers.openlibrary.org/b/id/7313659-M.jpg"
  },
  {
    "title": "Computer Concepts and Management Information Systems",
    "author": "C. P. Gupta",
    "rating": 5,
    "category": "Technology",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL21697044W",
    "image": "https://covers.openlibrary.org/b/id/14790669-M.jpg"
  },
  {
    "title": "How to Do Nothing",
    "author": "Jenny Odell",
    "rating": 4,
    "category": "Technology",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20078135W",
    "image": "https://covers.openlibrary.org/b/id/8750439-M.jpg"
  },
  {
    "title": "The infrared handbook",
    "author": "Unknown",
    "rating": 4,
    "category": "Technology",
    "year": "1978",
    "url": "https://openlibrary.org/works/OL20646270M",
    "image": ""
  },
  {
    "title": "Connections",
    "author": "Burke, James",
    "rating": 4,
    "category": "Technology",
    "year": "1978",
    "url": "https://openlibrary.org/works/OL1631407W",
    "image": "https://covers.openlibrary.org/b/id/188169-M.jpg"
  },
  {
    "title": "The nature and properties of soils",
    "author": "Nyle C. Brady",
    "rating": 4,
    "category": "Technology",
    "year": "1974",
    "url": "https://openlibrary.org/works/OL1853654W",
    "image": "https://covers.openlibrary.org/b/id/81319-M.jpg"
  },
  {
    "title": "Talking With Psychopaths and Savages",
    "author": "Christopher Berry-Dee",
    "rating": 4,
    "category": "True Crime",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL21216897W",
    "image": "https://covers.openlibrary.org/b/id/15125998-M.jpg"
  },
  {
    "title": "The private diary of Lyle Menendez",
    "author": "Lyle Menendez",
    "rating": 5,
    "category": "True Crime",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL3151202W",
    "image": "https://covers.openlibrary.org/b/id/547734-M.jpg"
  },
  {
    "title": "My life with a criminal",
    "author": "John Kiriamiti",
    "rating": 4,
    "category": "True Crime",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL16332124W",
    "image": "https://covers.openlibrary.org/b/id/2304824-M.jpg"
  },
  {
    "title": "The Phantom Prince",
    "author": "Elizabeth Kendall",
    "rating": 4,
    "category": "True Crime",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL6443533W",
    "image": "https://covers.openlibrary.org/b/id/9032959-M.jpg"
  },
  {
    "title": "All She Wanted",
    "author": "Aphrodite Jones",
    "rating": 3,
    "category": "True Crime",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL5858730W",
    "image": "https://covers.openlibrary.org/b/id/5417005-M.jpg"
  },
  {
    "title": "The only living witness",
    "author": "Stephen G. Michaud",
    "rating": 3,
    "category": "True Crime",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL1982449W",
    "image": "https://covers.openlibrary.org/b/id/5676949-M.jpg"
  },
  {
    "title": "Whoever fights monsters",
    "author": "Robert K. Ressler",
    "rating": 4,
    "category": "True Crime",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL16061864W",
    "image": "https://covers.openlibrary.org/b/id/6889253-M.jpg"
  },
  {
    "title": "Vulgar Favors",
    "author": "Maureen Orth",
    "rating": 4,
    "category": "True Crime",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL15840845W",
    "image": "https://covers.openlibrary.org/b/id/6739666-M.jpg"
  },
  {
    "title": "Invisible Darkness",
    "author": "Stephen Williams",
    "rating": 3,
    "category": "True Crime",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL6833143W",
    "image": "https://covers.openlibrary.org/b/id/372179-M.jpg"
  },
  {
    "title": "Small sacrifices",
    "author": "Ann Rule",
    "rating": 4,
    "category": "True Crime",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL892130W",
    "image": "https://covers.openlibrary.org/b/id/291624-M.jpg"
  },
  {
    "title": "House Of Secrets (True Crime)",
    "author": "Lowell Cauffiel",
    "rating": 4,
    "category": "True Crime",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL2644410W",
    "image": "https://covers.openlibrary.org/b/id/539118-M.jpg"
  },
  {
    "title": "The Big Book of Serial Killers",
    "author": "Jack Rosewood",
    "rating": 3,
    "category": "True Crime",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL24855651W",
    "image": "https://covers.openlibrary.org/b/id/11729442-M.jpg"
  },
  {
    "title": "Midnight in the Garden of Good and Evil",
    "author": "John Berendt",
    "rating": 4,
    "category": "True Crime",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL3524935W",
    "image": "https://covers.openlibrary.org/b/id/8231883-M.jpg"
  },
  {
    "title": "Blind Faith",
    "author": "Joe McGinniss",
    "rating": 4,
    "category": "True Crime",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL3928928W",
    "image": "https://covers.openlibrary.org/b/id/6383837-M.jpg"
  },
  {
    "title": "Helter skelter : the true story of the Manson murders",
    "author": "Vincent Bugliosi",
    "rating": 4,
    "category": "True Crime",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL18163270W",
    "image": "https://covers.openlibrary.org/b/id/372504-M.jpg"
  },
  {
    "title": "Killers of the Flower Moon",
    "author": "David Grann",
    "rating": 4,
    "category": "True Crime",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL17778665W",
    "image": "https://covers.openlibrary.org/b/id/8055064-M.jpg"
  },
  {
    "title": "In Cold Blood",
    "author": "Truman Capote",
    "rating": 4,
    "category": "True Crime",
    "year": "1965",
    "url": "https://openlibrary.org/works/OL1992198W",
    "image": "https://covers.openlibrary.org/b/id/228066-M.jpg"
  },
  {
    "title": "Games Criminals Play",
    "author": "Bud Allen",
    "rating": 5,
    "category": "True Crime",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL6342182W",
    "image": "https://covers.openlibrary.org/b/id/1690094-M.jpg"
  },
  {
    "title": "Killer Clown",
    "author": "Terry Sullivan",
    "rating": 3,
    "category": "True Crime",
    "year": "2000",
    "url": "https://openlibrary.org/works/OL17855326W",
    "image": "https://covers.openlibrary.org/b/id/539341-M.jpg"
  },
  {
    "title": "Killing for Company",
    "author": "Brian Masters",
    "rating": 5,
    "category": "True Crime",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL3636266W",
    "image": "https://covers.openlibrary.org/b/id/280676-M.jpg"
  },
  {
    "title": "The Beast of Gevaudan",
    "author": "Pierre Pourcher",
    "rating": 3,
    "category": "True Crime",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL8488689M",
    "image": "https://covers.openlibrary.org/b/id/764573-M.jpg"
  },
  {
    "title": "By Their Father's Hand",
    "author": "Monte Francis",
    "rating": 5,
    "category": "True Crime",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL276675W",
    "image": "https://covers.openlibrary.org/b/id/38798-M.jpg"
  },
  {
    "title": "Nobody's Girl",
    "author": "Virginia Roberts Giuffre",
    "rating": 3,
    "category": "True Crime",
    "year": "2025",
    "url": "https://openlibrary.org/works/OL44269610W",
    "image": "https://covers.openlibrary.org/b/id/15134796-M.jpg"
  },
  {
    "title": "Kiss me, kill me",
    "author": "Ann Rule",
    "rating": 4,
    "category": "True Crime",
    "year": "2004",
    "url": "https://openlibrary.org/works/OL892114W",
    "image": "https://covers.openlibrary.org/b/id/407397-M.jpg"
  },
  {
    "title": "Picture Perfect",
    "author": "Shanna Hogan",
    "rating": 3,
    "category": "True Crime",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL16805756W",
    "image": "https://covers.openlibrary.org/b/id/7260177-M.jpg"
  },
  {
    "title": "Spare",
    "author": "Prince Harry, Duke of Sussex",
    "rating": 4,
    "category": "Memoir",
    "year": "2023",
    "url": "https://openlibrary.org/works/OL29240850W",
    "image": "https://covers.openlibrary.org/b/id/13415348-M.jpg"
  },
  {
    "title": "Moonwalking with Einstein",
    "author": "Joshua Foer",
    "rating": 4,
    "category": "Memoir",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL15683431W",
    "image": "https://covers.openlibrary.org/b/id/14426425-M.jpg"
  },
  {
    "title": "Careless People",
    "author": "Sarah Wynn-Williams",
    "rating": 4,
    "category": "Memoir",
    "year": "2025",
    "url": "https://openlibrary.org/works/OL42735465W",
    "image": "https://covers.openlibrary.org/b/id/14852090-M.jpg"
  },
  {
    "title": "Mama's bank account",
    "author": "Kathryn Forbes",
    "rating": 3,
    "category": "Memoir",
    "year": "1956",
    "url": "https://openlibrary.org/works/OL15392770W",
    "image": "https://covers.openlibrary.org/b/id/6603476-M.jpg"
  },
  {
    "title": "Gender Queer",
    "author": "Maia Kobabe",
    "rating": 4,
    "category": "Memoir",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL21337755W",
    "image": "https://covers.openlibrary.org/b/id/12917625-M.jpg"
  },
  {
    "title": "Beyond the Wand",
    "author": "Tom Felton",
    "rating": 4,
    "category": "Memoir",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL28022286W",
    "image": "https://covers.openlibrary.org/b/id/12975513-M.jpg"
  },
  {
    "title": "Invent and Wander",
    "author": "Walter Isaacson",
    "rating": 4,
    "category": "Memoir",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL20895272W",
    "image": "https://covers.openlibrary.org/b/id/10229085-M.jpg"
  },
  {
    "title": "Sid Meier's Memoir!",
    "author": "Sid Meier",
    "rating": 4,
    "category": "Memoir",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL21679232W",
    "image": "https://covers.openlibrary.org/b/id/14809348-M.jpg"
  },
  {
    "title": "Call the Midwife",
    "author": "Jennifer Worth",
    "rating": 4,
    "category": "Memoir",
    "year": "2002",
    "url": "https://openlibrary.org/works/OL6570929W",
    "image": "https://covers.openlibrary.org/b/id/921852-M.jpg"
  },
  {
    "title": "Escape from St Hell",
    "author": "Lewis Hancox",
    "rating": 3,
    "category": "Memoir",
    "year": "2024",
    "url": "https://openlibrary.org/works/OL37570506W",
    "image": "https://covers.openlibrary.org/b/id/15102013-M.jpg"
  },
  {
    "title": "Tagebücher",
    "author": "Franz Kafka",
    "rating": 5,
    "category": "Memoir",
    "year": "1937",
    "url": "https://openlibrary.org/works/OL498793W",
    "image": "https://covers.openlibrary.org/b/id/995503-M.jpg"
  },
  {
    "title": "Sí, Si Es Contigo. Edición Especial / Yes, If Its with You. Special Edition",
    "author": "Calle",
    "rating": 3,
    "category": "Memoir",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL26808896W",
    "image": "https://covers.openlibrary.org/b/id/14616592-M.jpg"
  },
  {
    "title": "Farm City",
    "author": "Novella Carpenter",
    "rating": 4,
    "category": "Memoir",
    "year": "2009",
    "url": "https://openlibrary.org/works/OL13759884W",
    "image": "https://covers.openlibrary.org/b/id/8569949-M.jpg"
  },
  {
    "title": "The Thrill of the Chase",
    "author": "Forrest Fenn",
    "rating": 4,
    "category": "Memoir",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL16802260W",
    "image": "https://covers.openlibrary.org/b/id/8312251-M.jpg"
  },
  {
    "title": "Friends, Lovers, and the Big Terrible Thing",
    "author": "Matthew Perry",
    "rating": 4,
    "category": "Memoir",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL26911224W",
    "image": "https://covers.openlibrary.org/b/id/13133707-M.jpg"
  },
  {
    "title": "What My Bones Know",
    "author": "Stephanie Foo",
    "rating": 5,
    "category": "Memoir",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL25473797W",
    "image": "https://covers.openlibrary.org/b/id/13012344-M.jpg"
  },
  {
    "title": "Persepolis 1",
    "author": "Marjane Satrapi",
    "rating": 4,
    "category": "Memoir",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL5735174W",
    "image": "https://covers.openlibrary.org/b/id/12648915-M.jpg"
  },
  {
    "title": "Prozac nation",
    "author": "Elizabeth Wurtzel",
    "rating": 4,
    "category": "Memoir",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL15844727W",
    "image": "https://covers.openlibrary.org/b/id/6807845-M.jpg"
  },
  {
    "title": "Magical Language of Others",
    "author": "E. J. Koh",
    "rating": 3,
    "category": "Memoir",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL22037401W",
    "image": "https://covers.openlibrary.org/b/id/13732415-M.jpg"
  },
  {
    "title": "Never Grow Up",
    "author": "Jackie Chan",
    "rating": 3,
    "category": "Memoir",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL21201658W",
    "image": "https://covers.openlibrary.org/b/id/10481860-M.jpg"
  },
  {
    "title": "Shapes in the Sky",
    "author": "Josepha Sherman",
    "rating": 4,
    "category": "Nature",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL742483W",
    "image": "https://covers.openlibrary.org/b/id/4805364-M.jpg"
  },
  {
    "title": "Natural Wonders of the World",
    "author": "Unknown",
    "rating": 3,
    "category": "Nature",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL11327982M",
    "image": ""
  },
  {
    "title": "A Sand County Almanac",
    "author": "Aldo Leopold",
    "rating": 4,
    "category": "Nature",
    "year": "1964",
    "url": "https://openlibrary.org/works/OL3528858W",
    "image": "https://covers.openlibrary.org/b/id/10934389-M.jpg"
  },
  {
    "title": "Dick Gregory's natural diet for folks who eat",
    "author": "Dick Gregory",
    "rating": 5,
    "category": "Nature",
    "year": "1973",
    "url": "https://openlibrary.org/works/OL3875883W",
    "image": "https://covers.openlibrary.org/b/id/10615007-M.jpg"
  },
  {
    "title": "The botany of desire",
    "author": "Michael Pollan",
    "rating": 4,
    "category": "Nature",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL3296480W",
    "image": "https://covers.openlibrary.org/b/id/3232846-M.jpg"
  },
  {
    "title": "Bringing the Mountain Home",
    "author": "SueEllen Campbell",
    "rating": 1,
    "category": "Nature",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL3239084W",
    "image": "https://covers.openlibrary.org/b/id/8502181-M.jpg"
  },
  {
    "title": "Ina May's Guide to Childbirth",
    "author": "Ina May Gaskin",
    "rating": 5,
    "category": "Nature",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL4794512W",
    "image": "https://covers.openlibrary.org/b/id/369968-M.jpg"
  },
  {
    "title": "Pilgrim at Tinker Creek",
    "author": "Annie Dillard",
    "rating": 4,
    "category": "Nature",
    "year": "1974",
    "url": "https://openlibrary.org/works/OL23709639W",
    "image": "https://covers.openlibrary.org/b/id/11695184-M.jpg"
  },
  {
    "title": "Histoire naturelle",
    "author": "Georges-Louis Leclerc, comte de Buffon",
    "rating": 5,
    "category": "Nature",
    "year": "1749",
    "url": "https://openlibrary.org/works/OL1356870W",
    "image": "https://covers.openlibrary.org/b/id/6130908-M.jpg"
  },
  {
    "title": "Orthodoxy",
    "author": "Gilbert Keith Chesterton",
    "rating": 4,
    "category": "Nature",
    "year": "1874",
    "url": "https://openlibrary.org/works/OL76350W",
    "image": "https://covers.openlibrary.org/b/id/6268135-M.jpg"
  },
  {
    "title": "Back To Eden",
    "author": "Jethro Kloss",
    "rating": 5,
    "category": "Nature",
    "year": "1939",
    "url": "https://openlibrary.org/works/OL4658246W",
    "image": "https://covers.openlibrary.org/b/id/674047-M.jpg"
  },
  {
    "title": "The Way of Zen",
    "author": "Alan Watts",
    "rating": 4,
    "category": "Nature",
    "year": "1957",
    "url": "https://openlibrary.org/works/OL266160W",
    "image": "https://covers.openlibrary.org/b/id/228623-M.jpg"
  },
  {
    "title": "Entangled Life",
    "author": "Merlin Sheldrake",
    "rating": 4,
    "category": "Nature",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL20758206W",
    "image": "https://covers.openlibrary.org/b/id/10152882-M.jpg"
  },
  {
    "title": "Last Child in the Woods",
    "author": "Richard Louv",
    "rating": 3,
    "category": "Nature",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL2110114W",
    "image": "https://covers.openlibrary.org/b/id/803395-M.jpg"
  },
  {
    "title": "A Life on Our Planet",
    "author": "David Attenborough",
    "rating": 4,
    "category": "Nature",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL21691989W",
    "image": "https://covers.openlibrary.org/b/id/10508997-M.jpg"
  },
  {
    "title": "FROGS Sticker Safari Book (Discovery Kids)",
    "author": "Discovery Kids",
    "rating": 5,
    "category": "Nature",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL8333727W",
    "image": "https://covers.openlibrary.org/b/id/1269333-M.jpg"
  },
  {
    "title": "Biomimicry",
    "author": "Janine M. Benyus",
    "rating": 4,
    "category": "Nature",
    "year": "1997",
    "url": "https://openlibrary.org/works/OL3357280W",
    "image": "https://covers.openlibrary.org/b/id/8598259-M.jpg"
  },
  {
    "title": "Keeping a nature journal",
    "author": "Clare Walker Leslie",
    "rating": 5,
    "category": "Nature",
    "year": "2000",
    "url": "https://openlibrary.org/works/OL1859505W",
    "image": "https://covers.openlibrary.org/b/id/5386373-M.jpg"
  },
  {
    "title": "Nature",
    "author": "Ralph Waldo Emerson",
    "rating": 4,
    "category": "Nature",
    "year": "1836",
    "url": "https://openlibrary.org/works/OL62240W",
    "image": "https://covers.openlibrary.org/b/id/4151512-M.jpg"
  },
  {
    "title": "Petroleum geochemistry and geology",
    "author": "John Meacham Hunt",
    "rating": 5,
    "category": "Nature",
    "year": "1979",
    "url": "https://openlibrary.org/works/OL2947132W",
    "image": "https://covers.openlibrary.org/b/id/1354688-M.jpg"
  },
  {
    "title": "Handbook of nature-study for teachers and parents",
    "author": "Anna Botsford Comstock",
    "rating": 5,
    "category": "Nature",
    "year": "1911",
    "url": "https://openlibrary.org/works/OL5111033W",
    "image": "https://covers.openlibrary.org/b/id/5906208-M.jpg"
  },
  {
    "title": "My Family and other Animals",
    "author": "Gerald Malcolm Durrell",
    "rating": 5,
    "category": "Nature",
    "year": "1956",
    "url": "https://openlibrary.org/works/OL10509141W",
    "image": "https://covers.openlibrary.org/b/id/5547600-M.jpg"
  },
  {
    "title": "The Green Witch",
    "author": "Arin Murphy-Hiscock",
    "rating": 5,
    "category": "Nature",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL19680630W",
    "image": "https://covers.openlibrary.org/b/id/8575084-M.jpg"
  },
  {
    "title": "Watchmen",
    "author": "Alan Moore",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL2897798W",
    "image": "https://covers.openlibrary.org/b/id/7774899-M.jpg"
  },
  {
    "title": "Peanuts Treasury",
    "author": "Charles M. Schulz",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1968",
    "url": "https://openlibrary.org/works/OL25897W",
    "image": "https://covers.openlibrary.org/b/id/12522885-M.jpg"
  },
  {
    "title": "The Authoritative Calvin and Hobbes",
    "author": "Bill Watterson",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL3004222W",
    "image": "https://covers.openlibrary.org/b/id/636127-M.jpg"
  },
  {
    "title": "Attack of the Deranged Mutant Killer Monster Snow Goons",
    "author": "Bill Watterson",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL3004212W",
    "image": "https://covers.openlibrary.org/b/id/636156-M.jpg"
  },
  {
    "title": "Dream Country",
    "author": "Neil Gaiman",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL14975232W",
    "image": "https://covers.openlibrary.org/b/id/797919-M.jpg"
  },
  {
    "title": "人間失格",
    "author": "太宰 治",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1948",
    "url": "https://openlibrary.org/works/OL3923952W",
    "image": "https://covers.openlibrary.org/b/id/13190147-M.jpg"
  },
  {
    "title": "Batman",
    "author": "Alan Moore",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL2897789W",
    "image": "https://covers.openlibrary.org/b/id/2737891-M.jpg"
  },
  {
    "title": "Heartstopper, Volume 1",
    "author": "Alice Oseman",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL20354498W",
    "image": "https://covers.openlibrary.org/b/id/9020805-M.jpg"
  },
  {
    "title": "The Indispensable Calvin and Hobbes",
    "author": "Bill Watterson",
    "rating": 5,
    "category": "Graphic Novel",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL3004215W",
    "image": "https://covers.openlibrary.org/b/id/636164-M.jpg"
  },
  {
    "title": "A Game of You",
    "author": "Neil Gaiman",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL679281W",
    "image": "https://covers.openlibrary.org/b/id/4829799-M.jpg"
  },
  {
    "title": "V for Vendetta",
    "author": "Alan Moore",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL2897797W",
    "image": "https://covers.openlibrary.org/b/id/12293384-M.jpg"
  },
  {
    "title": "Uzumaki",
    "author": "Junji Itō",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL19720088W",
    "image": "https://covers.openlibrary.org/b/id/11888471-M.jpg"
  },
  {
    "title": "Heartstopper, Volume 2",
    "author": "Alice Oseman",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20354499W",
    "image": "https://covers.openlibrary.org/b/id/9020890-M.jpg"
  },
  {
    "title": "Naruto",
    "author": "Masashi Kishimoto",
    "rating": 5,
    "category": "Graphic Novel",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL13268171W",
    "image": "https://covers.openlibrary.org/b/id/7335243-M.jpg"
  },
  {
    "title": "Understanding Comics",
    "author": "Scott McCloud",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL276032W",
    "image": "https://covers.openlibrary.org/b/id/10679940-M.jpg"
  },
  {
    "title": "Awkward",
    "author": "Svetlana Chmakova",
    "rating": 5,
    "category": "Graphic Novel",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL17311132W",
    "image": "https://covers.openlibrary.org/b/id/14418413-M.jpg"
  },
  {
    "title": "Worlds' End",
    "author": "Neil Gaiman",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL679308W",
    "image": "https://covers.openlibrary.org/b/id/13235182-M.jpg"
  },
  {
    "title": "Dog Man",
    "author": "Dav Pilkey",
    "rating": 5,
    "category": "Graphic Novel",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL17798838W",
    "image": "https://covers.openlibrary.org/b/id/14415649-M.jpg"
  },
  {
    "title": "Maus I",
    "author": "Art Spiegelman",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL2056818W",
    "image": "https://covers.openlibrary.org/b/id/10210168-M.jpg"
  },
  {
    "title": "The Kindly Ones",
    "author": "Neil Gaiman",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL14975250W",
    "image": "https://covers.openlibrary.org/b/id/798045-M.jpg"
  },
  {
    "title": "Yukon Ho!",
    "author": "Bill Watterson",
    "rating": 5,
    "category": "Graphic Novel",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL3004226W",
    "image": "https://covers.openlibrary.org/b/id/8231820-M.jpg"
  },
  {
    "title": "A Girl in a Million",
    "author": "Kako Itō",
    "rating": 3,
    "category": "Graphic Novel",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL3458069W",
    "image": "https://covers.openlibrary.org/b/id/219035-M.jpg"
  },
  {
    "title": "The Walking Dead, Vol. 1",
    "author": "Robert Kirkman",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "2004",
    "url": "https://openlibrary.org/works/OL8548335W",
    "image": "https://covers.openlibrary.org/b/id/844763-M.jpg"
  },
  {
    "title": "The Giver",
    "author": "Lois Lowry",
    "rating": 4,
    "category": "Graphic Novel",
    "year": "1993",
    "url": "https://openlibrary.org/works/OL1846076W",
    "image": "https://covers.openlibrary.org/b/id/8352502-M.jpg"
  },
  {
    "title": "Music",
    "author": "Roger Kamien",
    "rating": 5,
    "category": "Music",
    "year": "1976",
    "url": "https://openlibrary.org/works/OL2770497W",
    "image": "https://covers.openlibrary.org/b/id/4341947-M.jpg"
  },
  {
    "title": "No Man's Mistress",
    "author": "Roberta Leigh",
    "rating": 4,
    "category": "Music",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL4342670W",
    "image": "https://covers.openlibrary.org/b/id/13799042-M.jpg"
  },
  {
    "title": "Musicophilia",
    "author": "Oliver Sacks",
    "rating": 4,
    "category": "Music",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL277255W",
    "image": "https://covers.openlibrary.org/b/id/9261340-M.jpg"
  },
  {
    "title": "Basic materials in music theory",
    "author": "Paul O. Harder",
    "rating": 3,
    "category": "Music",
    "year": "1965",
    "url": "https://openlibrary.org/works/OL804064W",
    "image": "https://covers.openlibrary.org/b/id/1145104-M.jpg"
  },
  {
    "title": "Discovering Classical Music",
    "author": "Ian Christians",
    "rating": 3,
    "category": "Music",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL8772290W",
    "image": "https://covers.openlibrary.org/b/id/2693703-M.jpg"
  },
  {
    "title": "The Enjoyment of Music",
    "author": "Kristine Forney",
    "rating": 4,
    "category": "Music",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL4466706W",
    "image": "https://covers.openlibrary.org/b/id/4615043-M.jpg"
  },
  {
    "title": "Songwriting",
    "author": "Stephen Citron",
    "rating": 3,
    "category": "Music",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL2675234W",
    "image": "https://covers.openlibrary.org/b/id/674378-M.jpg"
  },
  {
    "title": "How Music Works",
    "author": "David Byrne",
    "rating": 4,
    "category": "Music",
    "year": "2012",
    "url": "https://openlibrary.org/works/OL17068219W",
    "image": "https://covers.openlibrary.org/b/id/8867987-M.jpg"
  },
  {
    "title": "Music in theory and practice",
    "author": "Bruce Benward",
    "rating": 4,
    "category": "Music",
    "year": "1977",
    "url": "https://openlibrary.org/works/OL3002175W",
    "image": "https://covers.openlibrary.org/b/id/446144-M.jpg"
  },
  {
    "title": "The enjoyment of music",
    "author": "Joseph Machlis",
    "rating": 3,
    "category": "Music",
    "year": "1955",
    "url": "https://openlibrary.org/works/OL1921810W",
    "image": "https://covers.openlibrary.org/b/id/252542-M.jpg"
  },
  {
    "title": "The Rest Is Noise",
    "author": "Alex Ross",
    "rating": 5,
    "category": "Music",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL265777W",
    "image": "https://covers.openlibrary.org/b/id/1188468-M.jpg"
  },
  {
    "title": "The music kit",
    "author": "Tom Manoff",
    "rating": 4,
    "category": "Music",
    "year": "1976",
    "url": "https://openlibrary.org/works/OL3514545W",
    "image": "https://covers.openlibrary.org/b/id/252833-M.jpg"
  },
  {
    "title": "Can't stop, won't stop",
    "author": "Jeff Chang",
    "rating": 2,
    "category": "Music",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL15835141W",
    "image": "https://covers.openlibrary.org/b/id/6799005-M.jpg"
  },
  {
    "title": "The Lydian chromatic concept of tonal organization",
    "author": "George Russell",
    "rating": 3,
    "category": "Music",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL4903207W",
    "image": "https://covers.openlibrary.org/b/id/9922024-M.jpg"
  },
  {
    "title": "Pirates of the Caribbean",
    "author": "Klaus Badelt",
    "rating": 3,
    "category": "Music",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL8239524W",
    "image": "https://covers.openlibrary.org/b/id/1819889-M.jpg"
  },
  {
    "title": "Love Is a Mix Tape",
    "author": "Rob Sheffield",
    "rating": 5,
    "category": "Music",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL8423479W",
    "image": "https://covers.openlibrary.org/b/id/747187-M.jpg"
  },
  {
    "title": "Dear Evan Hansen",
    "author": "Steven Levenson",
    "rating": 1,
    "category": "Music",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL17794035W",
    "image": "https://covers.openlibrary.org/b/id/8076042-M.jpg"
  },
  {
    "title": "Norton anthology of western music",
    "author": "Claude V. Palisca",
    "rating": 3,
    "category": "Music",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL19662703W",
    "image": "https://covers.openlibrary.org/b/id/9331779-M.jpg"
  },
  {
    "title": "All You Need to Know About the Music Business",
    "author": "Donald S. Passman",
    "rating": 3,
    "category": "Music",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL20464343W",
    "image": "https://covers.openlibrary.org/b/id/9129818-M.jpg"
  },
  {
    "title": "SOLO PLUS",
    "author": "Music Sales Corporation",
    "rating": 4,
    "category": "Music",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL8164463M",
    "image": "https://covers.openlibrary.org/b/id/1569547-M.jpg"
  },
  {
    "title": "South Indian music",
    "author": "P Sambamoorthy",
    "rating": 2,
    "category": "Music",
    "year": "1954",
    "url": "https://openlibrary.org/works/OL358098W",
    "image": "https://covers.openlibrary.org/b/id/6727920-M.jpg"
  },
  {
    "title": "High Fidelity",
    "author": "Nick Hornby",
    "rating": 4,
    "category": "Music",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL1916907W",
    "image": "https://covers.openlibrary.org/b/id/824359-M.jpg"
  },
  {
    "title": "BTS",
    "author": "Triumph Books",
    "rating": 5,
    "category": "Music",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL20170862W",
    "image": "https://covers.openlibrary.org/b/id/8817350-M.jpg"
  },
  {
    "title": "Music therapy",
    "author": "Juliette Alvin",
    "rating": 5,
    "category": "Music",
    "year": "1966",
    "url": "https://openlibrary.org/works/OL4087500W",
    "image": "https://covers.openlibrary.org/b/id/7154973-M.jpg"
  },
  {
    "title": "What to Listen for in Music",
    "author": "Aaron Copland",
    "rating": 4,
    "category": "Music",
    "year": "1939",
    "url": "https://openlibrary.org/works/OL4468656W",
    "image": "https://covers.openlibrary.org/b/id/6015843-M.jpg"
  },
  {
    "title": "The Prince",
    "author": "Niccolò Machiavelli",
    "rating": 4,
    "category": "Politics",
    "year": "1515",
    "url": "https://openlibrary.org/works/OL1089297W",
    "image": "https://covers.openlibrary.org/b/id/12726168-M.jpg"
  },
  {
    "title": "Leviathan",
    "author": "Thomas Hobbes",
    "rating": 4,
    "category": "Politics",
    "year": "1651",
    "url": "https://openlibrary.org/works/OL653987W",
    "image": "https://covers.openlibrary.org/b/id/6525465-M.jpg"
  },
  {
    "title": "Mein Kampf",
    "author": "Adolf Hitler",
    "rating": 4,
    "category": "Politics",
    "year": "1922",
    "url": "https://openlibrary.org/works/OL1067314W",
    "image": "https://covers.openlibrary.org/b/id/12724015-M.jpg"
  },
  {
    "title": "Animal Farm",
    "author": "George Orwell",
    "rating": 4,
    "category": "Politics",
    "year": "1945",
    "url": "https://openlibrary.org/works/OL1168007W",
    "image": "https://covers.openlibrary.org/b/id/11261770-M.jpg"
  },
  {
    "title": "Animal Farm / Nineteen Eighty-Four",
    "author": "George Orwell",
    "rating": 4,
    "category": "Politics",
    "year": "1978",
    "url": "https://openlibrary.org/works/OL1167981W",
    "image": "https://covers.openlibrary.org/b/id/10524365-M.jpg"
  },
  {
    "title": "Πολιτικά (Politiká)",
    "author": "Aristotle",
    "rating": 4,
    "category": "Politics",
    "year": "1492",
    "url": "https://openlibrary.org/works/OL16247898W",
    "image": "https://covers.openlibrary.org/b/id/1277085-M.jpg"
  },
  {
    "title": "Power and Choice",
    "author": "W. Phillips Shively",
    "rating": 3,
    "category": "Politics",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL1904011W",
    "image": "https://covers.openlibrary.org/b/id/55369-M.jpg"
  },
  {
    "title": "A Modern Utopia",
    "author": "H. G. Wells",
    "rating": 3,
    "category": "Politics",
    "year": "1900",
    "url": "https://openlibrary.org/works/OL52256W",
    "image": "https://covers.openlibrary.org/b/id/8232021-M.jpg"
  },
  {
    "title": "Dell'Arte della Guerra",
    "author": "Niccolò Machiavelli",
    "rating": 4,
    "category": "Politics",
    "year": "1540",
    "url": "https://openlibrary.org/works/OL15968W",
    "image": "https://covers.openlibrary.org/b/id/5229470-M.jpg"
  },
  {
    "title": "Prince",
    "author": "Niccolò Machiavelli",
    "rating": 3,
    "category": "Politics",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL21456413W",
    "image": "https://covers.openlibrary.org/b/id/13345917-M.jpg"
  },
  {
    "title": "Political Ideologies",
    "author": "Leon P. Baradat",
    "rating": 1,
    "category": "Politics",
    "year": "1979",
    "url": "https://openlibrary.org/works/OL3252855W",
    "image": "https://covers.openlibrary.org/b/id/89886-M.jpg"
  },
  {
    "title": "A History of Political Theory",
    "author": "George Holland Sabine",
    "rating": 5,
    "category": "Politics",
    "year": "1937",
    "url": "https://openlibrary.org/works/OL1170849W",
    "image": "https://covers.openlibrary.org/b/id/11904785-M.jpg"
  },
  {
    "title": "Manifest der Kommunistischen Partei",
    "author": "Karl Marx",
    "rating": 4,
    "category": "Politics",
    "year": "1848",
    "url": "https://openlibrary.org/works/OL629052W",
    "image": "https://covers.openlibrary.org/b/id/11048623-M.jpg"
  },
  {
    "title": "State and Revolution",
    "author": "Vladimir Il’ich Lenin",
    "rating": 4,
    "category": "Politics",
    "year": "1900",
    "url": "https://openlibrary.org/works/OL301143W",
    "image": "https://covers.openlibrary.org/b/id/12727116-M.jpg"
  },
  {
    "title": "The human polity",
    "author": "Kay Lawson",
    "rating": 4,
    "category": "Politics",
    "year": "1984",
    "url": "https://openlibrary.org/works/OL3369481W",
    "image": "https://covers.openlibrary.org/b/id/392915-M.jpg"
  },
  {
    "title": "Dasar-dasar ilmu politik",
    "author": "Miriam Budiardjo",
    "rating": 5,
    "category": "Politics",
    "year": "1972",
    "url": "https://openlibrary.org/works/OL22479624W",
    "image": ""
  },
  {
    "title": "Pengantar ilmu politik",
    "author": "F. Isjwara",
    "rating": 3,
    "category": "Politics",
    "year": "1964",
    "url": "https://openlibrary.org/works/OL340740W",
    "image": "https://covers.openlibrary.org/b/id/6279986-M.jpg"
  },
  {
    "title": "An introduction to political philosophy",
    "author": "Jonathan Wolff",
    "rating": 3,
    "category": "Politics",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL2594805W",
    "image": "https://covers.openlibrary.org/b/id/120180-M.jpg"
  },
  {
    "title": "Radio Free Albemuth",
    "author": "Philip K. Dick",
    "rating": 4,
    "category": "Politics",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL2172484W",
    "image": "https://covers.openlibrary.org/b/id/6643179-M.jpg"
  },
  {
    "title": "Common Sense",
    "author": "Thomas Paine",
    "rating": 4,
    "category": "Politics",
    "year": "1776",
    "url": "https://openlibrary.org/works/OL60358W",
    "image": "https://covers.openlibrary.org/b/id/5921030-M.jpg"
  },
  {
    "title": "How Fascism Works",
    "author": "Jason Stanley",
    "rating": 4,
    "category": "Politics",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL17929883W",
    "image": "https://covers.openlibrary.org/b/id/8259064-M.jpg"
  },
  {
    "title": "So you want to talk about race",
    "author": "Ijeoma Oluo",
    "rating": 4,
    "category": "Politics",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL19664946W",
    "image": "https://covers.openlibrary.org/b/id/10844924-M.jpg"
  },
  {
    "title": "Why Nations Fail",
    "author": "Daron Acemoglu",
    "rating": 4,
    "category": "Economics",
    "year": "2012",
    "url": "https://openlibrary.org/works/OL16568759W",
    "image": "https://covers.openlibrary.org/b/id/7253519-M.jpg"
  },
  {
    "title": "Basic economics",
    "author": "Thomas Sowell",
    "rating": 4,
    "category": "Economics",
    "year": "2000",
    "url": "https://openlibrary.org/works/OL1935800W",
    "image": "https://covers.openlibrary.org/b/id/1468594-M.jpg"
  },
  {
    "title": "Your Next Five Moves",
    "author": "Patrick Bet-David",
    "rating": 3,
    "category": "Economics",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL21679891W",
    "image": "https://covers.openlibrary.org/b/id/10961423-M.jpg"
  },
  {
    "title": "Superfreakonomics",
    "author": "Steven D. Levitt",
    "rating": 4,
    "category": "Economics",
    "year": "2009",
    "url": "https://openlibrary.org/works/OL14909866W",
    "image": "https://covers.openlibrary.org/b/id/6304875-M.jpg"
  },
  {
    "title": "Freakonomics",
    "author": "Steven D. Levitt",
    "rating": 4,
    "category": "Economics",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL278022W",
    "image": "https://covers.openlibrary.org/b/id/11172914-M.jpg"
  },
  {
    "title": "Como Europa subdesarrollo a Africa",
    "author": "Walter Rodney",
    "rating": 4,
    "category": "Economics",
    "year": "1972",
    "url": "https://openlibrary.org/works/OL4062001W",
    "image": "https://covers.openlibrary.org/b/id/3353901-M.jpg"
  },
  {
    "title": "Das Kapital",
    "author": "Karl Marx",
    "rating": 4,
    "category": "Economics",
    "year": "1867",
    "url": "https://openlibrary.org/works/OL628450W",
    "image": "https://covers.openlibrary.org/b/id/10995820-M.jpg"
  },
  {
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "rating": 4,
    "category": "Economics",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL21640039W",
    "image": "https://covers.openlibrary.org/b/id/10389354-M.jpg"
  },
  {
    "title": "Economic development",
    "author": "Michael P. Todaro",
    "rating": 4,
    "category": "Economics",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL3258476W",
    "image": "https://covers.openlibrary.org/b/id/154259-M.jpg"
  },
  {
    "title": "Economics",
    "author": "Richard G. Lipsey",
    "rating": 4,
    "category": "Economics",
    "year": "1966",
    "url": "https://openlibrary.org/works/OL1972993W",
    "image": "https://covers.openlibrary.org/b/id/6492893-M.jpg"
  },
  {
    "title": "Russia and the G8",
    "author": "Unknown",
    "rating": 4,
    "category": "Economics",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL19664578M",
    "image": ""
  },
  {
    "title": "Manajemen pemasaran",
    "author": "Bambang Tri Cahyono",
    "rating": 5,
    "category": "Economics",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL3223317W",
    "image": ""
  },
  {
    "title": "Microeconomics",
    "author": "Robert S. Pindyck",
    "rating": 3,
    "category": "Economics",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL2637305W",
    "image": "https://covers.openlibrary.org/b/id/4140531-M.jpg"
  },
  {
    "title": "Economics, an introductory analysis",
    "author": "Paul Anthony Samuelson",
    "rating": 3,
    "category": "Economics",
    "year": "1948",
    "url": "https://openlibrary.org/works/OL2197894W",
    "image": "https://covers.openlibrary.org/b/id/10416536-M.jpg"
  },
  {
    "title": "Pengantar ilmu ekonomi",
    "author": "J. Bunardhi",
    "rating": 4,
    "category": "Economics",
    "year": "1965",
    "url": "https://openlibrary.org/works/OL396690W",
    "image": ""
  },
  {
    "title": "The millionaire next door",
    "author": "Thomas J. Stanley",
    "rating": 4,
    "category": "Economics",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL1986060W",
    "image": "https://covers.openlibrary.org/b/id/797467-M.jpg"
  },
  {
    "title": "Economics in One Lesson",
    "author": "Henry Hazlitt",
    "rating": 4,
    "category": "Economics",
    "year": "1946",
    "url": "https://openlibrary.org/works/OL541970W",
    "image": "https://covers.openlibrary.org/b/id/4437768-M.jpg"
  },
  {
    "title": "The Impact of the syncrude project on the economy of Alberta",
    "author": "Unknown",
    "rating": 4,
    "category": "Economics",
    "year": "1975",
    "url": "https://openlibrary.org/works/OL17319838M",
    "image": ""
  },
  {
    "title": "The Wealth of Nations",
    "author": "Adam Smith",
    "rating": 4,
    "category": "Economics",
    "year": "1776",
    "url": "https://openlibrary.org/works/OL76827W",
    "image": "https://covers.openlibrary.org/b/id/12816911-M.jpg"
  },
  {
    "title": "Strategic management",
    "author": "Gregory G. Dess",
    "rating": 4,
    "category": "Economics",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL16002869W",
    "image": "https://covers.openlibrary.org/b/id/12464587-M.jpg"
  },
  {
    "title": "Development as Freedom",
    "author": "Amartya Sen",
    "rating": 4,
    "category": "Economics",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL116534W",
    "image": "https://covers.openlibrary.org/b/id/120233-M.jpg"
  },
  {
    "title": "Mythos",
    "author": "Stephen Fry",
    "rating": 4,
    "category": "Mythology",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL17916664W",
    "image": "https://covers.openlibrary.org/b/id/8238803-M.jpg"
  },
  {
    "title": "Mythology",
    "author": "Edith Hamilton",
    "rating": 4,
    "category": "Mythology",
    "year": "1940",
    "url": "https://openlibrary.org/works/OL5262120W",
    "image": "https://covers.openlibrary.org/b/id/8765912-M.jpg"
  },
  {
    "title": "The Greek myths",
    "author": "Robert Graves",
    "rating": 3,
    "category": "Mythology",
    "year": "1955",
    "url": "https://openlibrary.org/works/OL5036951W",
    "image": "https://covers.openlibrary.org/b/id/5415692-M.jpg"
  },
  {
    "title": "The Immortals of Meluha",
    "author": "Amish Tripathi",
    "rating": 4,
    "category": "Mythology",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL15914981W",
    "image": "https://covers.openlibrary.org/b/id/11152324-M.jpg"
  },
  {
    "title": "Norse Mythology",
    "author": "Neil Gaiman",
    "rating": 4,
    "category": "Mythology",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL17619634W",
    "image": "https://covers.openlibrary.org/b/id/7898682-M.jpg"
  },
  {
    "title": "Circe",
    "author": "Madeline Miller",
    "rating": 4,
    "category": "Mythology",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL18012166W",
    "image": "https://covers.openlibrary.org/b/id/8739376-M.jpg"
  },
  {
    "title": "Neon Gods",
    "author": "Katee Robert",
    "rating": 4,
    "category": "Mythology",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL24514935W",
    "image": "https://covers.openlibrary.org/b/id/11371435-M.jpg"
  },
  {
    "title": "The Age of Fable",
    "author": "Thomas Bulfinch",
    "rating": 3,
    "category": "Mythology",
    "year": "1800",
    "url": "https://openlibrary.org/works/OL77559W",
    "image": "https://covers.openlibrary.org/b/id/419378-M.jpg"
  },
  {
    "title": "A Wonder Book for Girls and Boys",
    "author": "Nathaniel Hawthorne",
    "rating": 4,
    "category": "Mythology",
    "year": "1800",
    "url": "https://openlibrary.org/works/OL455667W",
    "image": "https://covers.openlibrary.org/b/id/10223576-M.jpg"
  },
  {
    "title": "The masks of God",
    "author": "Joseph Campbell",
    "rating": 4,
    "category": "Mythology",
    "year": "1959",
    "url": "https://openlibrary.org/works/OL2497176W",
    "image": "https://covers.openlibrary.org/b/id/5456717-M.jpg"
  },
  {
    "title": "The Titan's Curse",
    "author": "Rick Riordan",
    "rating": 4,
    "category": "Mythology",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL492647W",
    "image": "https://covers.openlibrary.org/b/id/14601475-M.jpg"
  },
  {
    "title": "Sita, Warrior of Mithila",
    "author": "Amish Tripathi",
    "rating": 4,
    "category": "Mythology",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL17752993W",
    "image": "https://covers.openlibrary.org/b/id/8789619-M.jpg"
  },
  {
    "title": "The Wanderings of Odysseus",
    "author": "Rosemary Sutcliff",
    "rating": 5,
    "category": "Mythology",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL1417809W",
    "image": "https://covers.openlibrary.org/b/id/239347-M.jpg"
  },
  {
    "title": "Black Ships Before Troy",
    "author": "Rosemary Sutcliff",
    "rating": 5,
    "category": "Mythology",
    "year": "1967",
    "url": "https://openlibrary.org/works/OL1417812W",
    "image": "https://covers.openlibrary.org/b/id/239008-M.jpg"
  },
  {
    "title": "Heroes, Gods and Monsters of the Greek Myths",
    "author": "Bernard Evslin",
    "rating": 4,
    "category": "Mythology",
    "year": "1967",
    "url": "https://openlibrary.org/works/OL4629690W",
    "image": "https://covers.openlibrary.org/b/id/368719-M.jpg"
  },
  {
    "title": "World mythology",
    "author": "Donna Rosenberg",
    "rating": 5,
    "category": "Mythology",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL1981909W",
    "image": "https://covers.openlibrary.org/b/id/642335-M.jpg"
  },
  {
    "title": "Ram - Scion of Ikshvaku",
    "author": "Amish Tripathi",
    "rating": 4,
    "category": "Mythology",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL17721384W",
    "image": "https://covers.openlibrary.org/b/id/15216694-M.jpg"
  },
  {
    "title": "Indian mythology",
    "author": "Veronica Ions",
    "rating": 3,
    "category": "Mythology",
    "year": "1967",
    "url": "https://openlibrary.org/works/OL5356878W",
    "image": "https://covers.openlibrary.org/b/id/8475290-M.jpg"
  },
  {
    "title": "D'Aulaires' Book of Greek Myths",
    "author": "Ingri Parin D'Aulaire",
    "rating": 4,
    "category": "Mythology",
    "year": "1962",
    "url": "https://openlibrary.org/works/OL4771358W",
    "image": "https://covers.openlibrary.org/b/id/10692832-M.jpg"
  },
  {
    "title": "The Complete World of Greek Mythology",
    "author": "Richard Buxton",
    "rating": 5,
    "category": "Mythology",
    "year": "2004",
    "url": "https://openlibrary.org/works/OL8009355W",
    "image": "https://covers.openlibrary.org/b/id/316250-M.jpg"
  },
  {
    "title": "The hero with a thousand faces",
    "author": "Joseph Campbell",
    "rating": 4,
    "category": "Mythology",
    "year": "1949",
    "url": "https://openlibrary.org/works/OL2497175W",
    "image": "https://covers.openlibrary.org/b/id/443668-M.jpg"
  },
  {
    "title": "Myths to live by",
    "author": "Joseph Campbell",
    "rating": 4,
    "category": "Mythology",
    "year": "1972",
    "url": "https://openlibrary.org/works/OL2497174W",
    "image": "https://covers.openlibrary.org/b/id/98229-M.jpg"
  },
  {
    "title": "The children of Odin",
    "author": "Padraic Colum",
    "rating": 3,
    "category": "Mythology",
    "year": "1920",
    "url": "https://openlibrary.org/works/OL2635376W",
    "image": "https://covers.openlibrary.org/b/id/6270967-M.jpg"
  },
  {
    "title": "Odyssey",
    "author": "Όμηρος",
    "rating": 3,
    "category": "Mythology",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL26784440W",
    "image": "https://covers.openlibrary.org/b/id/13489194-M.jpg"
  },
  {
    "title": "Vers une architecture",
    "author": "Le Corbusier",
    "rating": 5,
    "category": "Architecture",
    "year": "1923",
    "url": "https://openlibrary.org/works/OL15164456W",
    "image": "https://covers.openlibrary.org/b/id/310106-M.jpg"
  },
  {
    "title": "History of architecture",
    "author": "Fletcher, Banister Sir",
    "rating": 5,
    "category": "Architecture",
    "year": "1963",
    "url": "https://openlibrary.org/works/OL1087724W",
    "image": "https://covers.openlibrary.org/b/id/493320-M.jpg"
  },
  {
    "title": "Architecture",
    "author": "Donald E. Hepler",
    "rating": 4,
    "category": "Architecture",
    "year": "1965",
    "url": "https://openlibrary.org/works/OL4440440W",
    "image": "https://covers.openlibrary.org/b/id/14616979-M.jpg"
  },
  {
    "title": "The Stones of Venice",
    "author": "John Ruskin",
    "rating": 4,
    "category": "Architecture",
    "year": "1851",
    "url": "https://openlibrary.org/works/OL88640W",
    "image": "https://covers.openlibrary.org/b/id/8239410-M.jpg"
  },
  {
    "title": "The future of architecture",
    "author": "Frank Lloyd Wright",
    "rating": 5,
    "category": "Architecture",
    "year": "1953",
    "url": "https://openlibrary.org/works/OL961859W",
    "image": "https://covers.openlibrary.org/b/id/10429429-M.jpg"
  },
  {
    "title": "The Architecture of Happiness",
    "author": "Alain De Botton",
    "rating": 3,
    "category": "Architecture",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL107927W",
    "image": "https://covers.openlibrary.org/b/id/5314605-M.jpg"
  },
  {
    "title": "The Classical Language of Architecture",
    "author": "John N. Summerson",
    "rating": 3,
    "category": "Architecture",
    "year": "1707",
    "url": "https://openlibrary.org/works/OL1958665W",
    "image": "https://covers.openlibrary.org/b/id/315983-M.jpg"
  },
  {
    "title": "Architectural principles in the age of humanism",
    "author": "Rudolf Wittkower",
    "rating": 4,
    "category": "Architecture",
    "year": "1949",
    "url": "https://openlibrary.org/works/OL1995260W",
    "image": "https://covers.openlibrary.org/b/id/12363212-M.jpg"
  },
  {
    "title": "Indian architecture",
    "author": "Percy Brown",
    "rating": 3,
    "category": "Architecture",
    "year": "1940",
    "url": "https://openlibrary.org/works/OL63388W",
    "image": "https://covers.openlibrary.org/b/id/10765813-M.jpg"
  },
  {
    "title": "Clean Architecture",
    "author": "Robert C. Martin",
    "rating": 4,
    "category": "Architecture",
    "year": "2017",
    "url": "https://openlibrary.org/works/OL19809141W",
    "image": "https://covers.openlibrary.org/b/id/8605114-M.jpg"
  },
  {
    "title": "Arkitekturang Filipino",
    "author": "Gerard Lico",
    "rating": 4,
    "category": "Architecture",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL6065737W",
    "image": "https://covers.openlibrary.org/b/id/13054296-M.jpg"
  },
  {
    "title": "Modern architecture since 1900",
    "author": "William J. R. Curtis",
    "rating": 3,
    "category": "Architecture",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL2800829W",
    "image": "https://covers.openlibrary.org/b/id/4274956-M.jpg"
  },
  {
    "title": "Space, time and architecture",
    "author": "Sigfried Giedion",
    "rating": 5,
    "category": "Architecture",
    "year": "1941",
    "url": "https://openlibrary.org/works/OL1161577W",
    "image": "https://covers.openlibrary.org/b/id/9283364-M.jpg"
  },
  {
    "title": "Greek architecture",
    "author": "A. W. Lawrence",
    "rating": 3,
    "category": "Architecture",
    "year": "1957",
    "url": "https://openlibrary.org/works/OL2989221W",
    "image": "https://covers.openlibrary.org/b/id/3821618-M.jpg"
  },
  {
    "title": "A history of Western architecture",
    "author": "David Watkin",
    "rating": 3,
    "category": "Architecture",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL2859092W",
    "image": "https://covers.openlibrary.org/b/id/4872231-M.jpg"
  },
  {
    "title": "Interior Design",
    "author": "John F. Pile",
    "rating": 5,
    "category": "Architecture",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL3349951W",
    "image": "https://covers.openlibrary.org/b/id/1533931-M.jpg"
  },
  {
    "title": "Encyclopedia of vernacular architecture of the world",
    "author": "Oliver, Paul",
    "rating": 4,
    "category": "Architecture",
    "year": "1997",
    "url": "https://openlibrary.org/works/OL18966726W",
    "image": "https://covers.openlibrary.org/b/id/8461410-M.jpg"
  },
  {
    "title": "Architectural graphic standards",
    "author": "Charles George Ramsey",
    "rating": 5,
    "category": "Architecture",
    "year": "1970",
    "url": "https://openlibrary.org/works/OL550047W",
    "image": "https://covers.openlibrary.org/b/id/303604-M.jpg"
  },
  {
    "title": "Experiencing architecture",
    "author": "Steen Eiler Rasmussen",
    "rating": 3,
    "category": "Architecture",
    "year": "1959",
    "url": "https://openlibrary.org/works/OL3552774W",
    "image": "https://covers.openlibrary.org/b/id/6496804-M.jpg"
  },
  {
    "title": "House form and culture",
    "author": "Amos Rapoport",
    "rating": 4,
    "category": "Architecture",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL4445627W",
    "image": "https://covers.openlibrary.org/b/id/6513286-M.jpg"
  },
  {
    "title": "Man, climate and architecture",
    "author": "Baruch Givoni",
    "rating": 3,
    "category": "Architecture",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL2682054W",
    "image": "https://covers.openlibrary.org/b/id/9314672-M.jpg"
  },
  {
    "title": "Memórias póstumas de Brás Cubas",
    "author": "Machado de Assis",
    "rating": 4,
    "category": "Architecture",
    "year": "1881",
    "url": "https://openlibrary.org/works/OL1003017W",
    "image": "https://covers.openlibrary.org/b/id/123152-M.jpg"
  },
  {
    "title": "Home plans, featuring the home for all America",
    "author": "Unknown",
    "rating": 4,
    "category": "Architecture",
    "year": "1954",
    "url": "https://openlibrary.org/works/OL15168494M",
    "image": ""
  },
  {
    "title": "The Eyes of the Skin",
    "author": "Juhani Pallasmaa",
    "rating": 4,
    "category": "Architecture",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL2552544W",
    "image": "https://covers.openlibrary.org/b/id/2052727-M.jpg"
  },
  {
    "title": "An outline of European architecture",
    "author": "Nikolaus Pevsner",
    "rating": 5,
    "category": "Architecture",
    "year": "1945",
    "url": "https://openlibrary.org/works/OL1243097W",
    "image": "https://covers.openlibrary.org/b/id/4962211-M.jpg"
  },
  {
    "title": "Bible",
    "author": "Bible",
    "rating": 4,
    "category": "Religion",
    "year": "1200",
    "url": "https://openlibrary.org/works/OL17732W",
    "image": "https://covers.openlibrary.org/b/id/12707846-M.jpg"
  },
  {
    "title": "God Is Not Great",
    "author": "Christopher Hitchens",
    "rating": 4,
    "category": "Religion",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL2974379W",
    "image": "https://covers.openlibrary.org/b/id/6720937-M.jpg"
  },
  {
    "title": "The Power of Now",
    "author": "Eckhart Tolle",
    "rating": 4,
    "category": "Religion",
    "year": "1997",
    "url": "https://openlibrary.org/works/OL5727686W",
    "image": "https://covers.openlibrary.org/b/id/551262-M.jpg"
  },
  {
    "title": "The Varieties of Religious Experience",
    "author": "William James",
    "rating": 4,
    "category": "Religion",
    "year": "1817",
    "url": "https://openlibrary.org/works/OL1073561W",
    "image": "https://covers.openlibrary.org/b/id/2415434-M.jpg"
  },
  {
    "title": "Invitation to world religions",
    "author": "Jeffrey Brodd",
    "rating": 5,
    "category": "Religion",
    "year": "2012",
    "url": "https://openlibrary.org/works/OL16654388W",
    "image": "https://covers.openlibrary.org/b/id/11128198-M.jpg"
  },
  {
    "title": "Anatomy of the Sacred",
    "author": "James C. Livingston",
    "rating": 5,
    "category": "Religion",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL2710590W",
    "image": "https://covers.openlibrary.org/b/id/91752-M.jpg"
  },
  {
    "title": "Bhagavad-Gita",
    "author": "Vyasa",
    "rating": 4,
    "category": "Religion",
    "year": "1944",
    "url": "https://openlibrary.org/works/OL264706W",
    "image": "https://covers.openlibrary.org/b/id/11157767-M.jpg"
  },
  {
    "title": "When God Was a Woman",
    "author": "Merlin Stone",
    "rating": 4,
    "category": "Religion",
    "year": "1976",
    "url": "https://openlibrary.org/works/OL4477500W",
    "image": "https://covers.openlibrary.org/b/id/4734682-M.jpg"
  },
  {
    "title": "The Golden Bough",
    "author": "James George Frazer",
    "rating": 4,
    "category": "Religion",
    "year": "1890",
    "url": "https://openlibrary.org/works/OL1159648W",
    "image": "https://covers.openlibrary.org/b/id/8876695-M.jpg"
  },
  {
    "title": "Natural law in the spiritual world",
    "author": "Henry Drummond",
    "rating": 3,
    "category": "Religion",
    "year": "1835",
    "url": "https://openlibrary.org/works/OL1793944W",
    "image": "https://covers.openlibrary.org/b/id/8243650-M.jpg"
  },
  {
    "title": "Zukunft einer Illusion",
    "author": "Sigmund Freud",
    "rating": 3,
    "category": "Religion",
    "year": "1928",
    "url": "https://openlibrary.org/works/OL1069670W",
    "image": "https://covers.openlibrary.org/b/id/6503974-M.jpg"
  },
  {
    "title": "Coloring Book of Shadows",
    "author": "Amy Cesari",
    "rating": 3,
    "category": "Religion",
    "year": "2016",
    "url": "https://openlibrary.org/works/OL22708239W",
    "image": "https://covers.openlibrary.org/b/id/10491535-M.jpg"
  },
  {
    "title": "The perennial philosophy",
    "author": "Aldous Huxley",
    "rating": 5,
    "category": "Religion",
    "year": "1945",
    "url": "https://openlibrary.org/works/OL64463W",
    "image": "https://covers.openlibrary.org/b/id/30103-M.jpg"
  },
  {
    "title": "The God Delusion",
    "author": "Richard Dawkins",
    "rating": 4,
    "category": "Religion",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL1966485W",
    "image": "https://covers.openlibrary.org/b/id/386467-M.jpg"
  },
  {
    "title": "The Teachings of Don Juan",
    "author": "Carlos Castaneda",
    "rating": 3,
    "category": "Religion",
    "year": "1968",
    "url": "https://openlibrary.org/works/OL1884578W",
    "image": "https://covers.openlibrary.org/b/id/406890-M.jpg"
  },
  {
    "title": "People of the lie",
    "author": "M. Scott Peck",
    "rating": 4,
    "category": "Religion",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL2868907W",
    "image": "https://covers.openlibrary.org/b/id/4226967-M.jpg"
  },
  {
    "title": "God Is Not One",
    "author": "Stephen Prothero",
    "rating": 3,
    "category": "Religion",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL15188112W",
    "image": "https://covers.openlibrary.org/b/id/10838625-M.jpg"
  },
  {
    "title": "Are You There God? It's Me, Margaret.",
    "author": "Judy Blume",
    "rating": 4,
    "category": "Religion",
    "year": "1970",
    "url": "https://openlibrary.org/works/OL268217W",
    "image": "https://covers.openlibrary.org/b/id/12388102-M.jpg"
  },
  {
    "title": "The Book of the Dead",
    "author": "E. A. Wallis Budge",
    "rating": 4,
    "category": "Religion",
    "year": "1894",
    "url": "https://openlibrary.org/works/OL7973699W",
    "image": "https://covers.openlibrary.org/b/id/5110181-M.jpg"
  },
  {
    "title": "The World's Religions",
    "author": "Huston Smith",
    "rating": 4,
    "category": "Religion",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL3930654W",
    "image": "https://covers.openlibrary.org/b/id/8289774-M.jpg"
  },
  {
    "title": "Das Schloß",
    "author": "Franz Kafka",
    "rating": 4,
    "category": "Classic Literature",
    "year": "1926",
    "url": "https://openlibrary.org/works/OL498434W",
    "image": "https://covers.openlibrary.org/b/id/12605605-M.jpg"
  },
  {
    "title": "On top of spaghetti",
    "author": "Tom Glazer",
    "rating": 4,
    "category": "Classic Literature",
    "year": "1982",
    "url": "https://openlibrary.org/works/OL6091375W",
    "image": "https://covers.openlibrary.org/b/id/411242-M.jpg"
  },
  {
    "title": "Gunaho ka Devta",
    "author": "Unknown",
    "rating": 3,
    "category": "Classic Literature",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL42611094W",
    "image": "https://covers.openlibrary.org/b/id/14851422-M.jpg"
  },
  {
    "title": "Tanglewood Tales",
    "author": "Nathaniel Hawthorne",
    "rating": 4,
    "category": "Classic Literature",
    "year": "1853",
    "url": "https://openlibrary.org/works/OL455476W",
    "image": "https://covers.openlibrary.org/b/id/8243662-M.jpg"
  },
  {
    "title": "On The Road",
    "author": "Jack Kerouac",
    "rating": 4,
    "category": "Classic Literature",
    "year": "1957",
    "url": "https://openlibrary.org/works/OL65906W",
    "image": "https://covers.openlibrary.org/b/id/34655-M.jpg"
  },
  {
    "title": "Die Aufzeichnungen des Malte Laurids Brigge",
    "author": "Rainer Maria Rilke",
    "rating": 5,
    "category": "Classic Literature",
    "year": "1910",
    "url": "https://openlibrary.org/works/OL3801007W",
    "image": "https://covers.openlibrary.org/b/id/420111-M.jpg"
  },
  {
    "title": "Pagan Papers",
    "author": "Kenneth Grahame",
    "rating": 4,
    "category": "Classic Literature",
    "year": "1894",
    "url": "https://openlibrary.org/works/OL69600W",
    "image": "https://covers.openlibrary.org/b/id/5813881-M.jpg"
  },
  {
    "title": "Feeling Is the Secret",
    "author": "Neville Goddard",
    "rating": 4,
    "category": "Classic Literature",
    "year": "2004",
    "url": "https://openlibrary.org/works/OL4492042W",
    "image": "https://covers.openlibrary.org/b/id/13848693-M.jpg"
  },
  {
    "title": "Братья Карамазовы",
    "author": "Фёдор Михайлович Достоевский",
    "rating": 4,
    "category": "Classic Literature",
    "year": "1880",
    "url": "https://openlibrary.org/works/OL10432709W",
    "image": "https://covers.openlibrary.org/b/id/8272336-M.jpg"
  },
  {
    "title": "The Princess and Curdie",
    "author": "George MacDonald",
    "rating": 3,
    "category": "Classic Literature",
    "year": "1832",
    "url": "https://openlibrary.org/works/OL15448W",
    "image": "https://covers.openlibrary.org/b/id/14357835-M.jpg"
  },
  {
    "title": "Love and Freindship",
    "author": "Jane Austen",
    "rating": 4,
    "category": "Classic Literature",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL15079937W",
    "image": "https://covers.openlibrary.org/b/id/12641527-M.jpg"
  },
  {
    "title": "Post office",
    "author": "Charles Bukowski",
    "rating": 4,
    "category": "Classic Literature",
    "year": "1974",
    "url": "https://openlibrary.org/works/OL50457W",
    "image": "https://covers.openlibrary.org/b/id/670128-M.jpg"
  },
  {
    "title": "Tender is the Night",
    "author": "F. Scott Fitzgerald",
    "rating": 4,
    "category": "Classic Literature",
    "year": "1933",
    "url": "https://openlibrary.org/works/OL468485W",
    "image": "https://covers.openlibrary.org/b/id/6984433-M.jpg"
  },
  {
    "title": "A Man With a Maid",
    "author": "Anonymous",
    "rating": 3,
    "category": "Classic Literature",
    "year": "1968",
    "url": "https://openlibrary.org/works/OL264711W",
    "image": "https://covers.openlibrary.org/b/id/6681445-M.jpg"
  },
  {
    "title": "Ramayana, a Holy Bible of India",
    "author": "Vālmīki",
    "rating": 4,
    "category": "Classic Literature",
    "year": "1823",
    "url": "https://openlibrary.org/works/OL308980W",
    "image": "https://covers.openlibrary.org/b/id/8238736-M.jpg"
  },
  {
    "title": "Dork Diaries Collection",
    "author": "Rachel Renée Russell",
    "rating": 4,
    "category": "Fiction",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL25363307W",
    "image": "https://covers.openlibrary.org/b/id/15113010-M.jpg"
  },
  {
    "title": "The Fellowship of the Ring",
    "author": "J.R.R. Tolkien",
    "rating": 4,
    "category": "Fiction",
    "year": "1954",
    "url": "https://openlibrary.org/works/OL27513W",
    "image": "https://covers.openlibrary.org/b/id/14627060-M.jpg"
  },
  {
    "title": "A Little Princess",
    "author": "Frances Hodgson Burnett",
    "rating": 4,
    "category": "Fiction",
    "year": "1905",
    "url": "https://openlibrary.org/works/OL69630W",
    "image": "https://covers.openlibrary.org/b/id/2328315-M.jpg"
  },
  {
    "title": "We Were Never Meant To Be",
    "author": "Palle Vasu",
    "rating": 4,
    "category": "Fiction",
    "year": "2025",
    "url": "https://openlibrary.org/works/OL43113687W",
    "image": "https://covers.openlibrary.org/b/id/15024571-M.jpg"
  },
  {
    "title": "Записки изъ подполья",
    "author": "Фёдор Михайлович Достоевский",
    "rating": 4,
    "category": "Fiction",
    "year": "1864",
    "url": "https://openlibrary.org/works/OL21025633W",
    "image": "https://covers.openlibrary.org/b/id/10445973-M.jpg"
  },
  {
    "title": "Verity",
    "author": "Colleen Hoover",
    "rating": 4,
    "category": "Fiction",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL20068530W",
    "image": "https://covers.openlibrary.org/b/id/8747160-M.jpg"
  },
  {
    "title": "The War of the Worlds",
    "author": "H. G. Wells",
    "rating": 4,
    "category": "Fiction",
    "year": "",
    "url": "https://openlibrary.org/works/OL52114W",
    "image": "https://covers.openlibrary.org/b/id/36314-M.jpg"
  },
  {
    "title": "Restore me",
    "author": "Tahereh Mafi",
    "rating": 4,
    "category": "Fiction",
    "year": "2018",
    "url": "https://openlibrary.org/works/OL19737574W",
    "image": "https://covers.openlibrary.org/b/id/8797404-M.jpg"
  },
  {
    "title": "Emma",
    "author": "Jane Austen",
    "rating": 4,
    "category": "Fiction",
    "year": "1815",
    "url": "https://openlibrary.org/works/OL66513W",
    "image": "https://covers.openlibrary.org/b/id/9278312-M.jpg"
  },
  {
    "title": "White Fang",
    "author": "Jack London",
    "rating": 4,
    "category": "Fiction",
    "year": "1905",
    "url": "https://openlibrary.org/works/OL74504W",
    "image": "https://covers.openlibrary.org/b/id/8236920-M.jpg"
  },
  {
    "title": "The Mystery of the Blue Train",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Fiction",
    "year": "1928",
    "url": "https://openlibrary.org/works/OL471603W",
    "image": "https://covers.openlibrary.org/b/id/14575533-M.jpg"
  },
  {
    "title": "L’étranger",
    "author": "Albert Camus",
    "rating": 4,
    "category": "Fiction",
    "year": "1942",
    "url": "https://openlibrary.org/works/OL1230613W",
    "image": "https://covers.openlibrary.org/b/id/13151269-M.jpg"
  },
  {
    "title": "Double Down",
    "author": "Jeff Kinney",
    "rating": 4,
    "category": "Fiction",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL17603394W",
    "image": "https://covers.openlibrary.org/b/id/7888937-M.jpg"
  },
  {
    "title": "Anthem",
    "author": "Ayn Rand",
    "rating": 3,
    "category": "Fiction",
    "year": "1936",
    "url": "https://openlibrary.org/works/OL731737W",
    "image": "https://covers.openlibrary.org/b/id/802982-M.jpg"
  },
  {
    "title": "Voyage au Centre de la Terre",
    "author": "Jules Verne",
    "rating": 4,
    "category": "Fiction",
    "year": "1867",
    "url": "https://openlibrary.org/works/OL1099513W",
    "image": "https://covers.openlibrary.org/b/id/5890987-M.jpg"
  },
  {
    "title": "Howl's Moving Castle",
    "author": "Diana Wynne Jones",
    "rating": 4,
    "category": "Fiction",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL60149W",
    "image": "https://covers.openlibrary.org/b/id/8783945-M.jpg"
  },
  {
    "title": "The Queen of Nothing",
    "author": "Holly Black",
    "rating": 4,
    "category": "Fiction",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL20485895W",
    "image": "https://covers.openlibrary.org/b/id/9146990-M.jpg"
  },
  {
    "title": "Metamorphosis",
    "author": "Franz Kafka",
    "rating": 4,
    "category": "Fiction",
    "year": "1915",
    "url": "https://openlibrary.org/works/OL498556W",
    "image": "https://covers.openlibrary.org/b/id/12820198-M.jpg"
  },
  {
    "title": "Endless Night",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1905",
    "url": "https://openlibrary.org/works/OL472508W",
    "image": "https://covers.openlibrary.org/b/id/12855084-M.jpg"
  },
  {
    "title": "The Seven Dials Mystery",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1920",
    "url": "https://openlibrary.org/works/OL471784W",
    "image": "https://covers.openlibrary.org/b/id/14575632-M.jpg"
  },
  {
    "title": "A Study in Scarlet",
    "author": "Arthur Conan Doyle",
    "rating": 4,
    "category": "Mystery",
    "year": "1887",
    "url": "https://openlibrary.org/works/OL262496W",
    "image": "https://covers.openlibrary.org/b/id/13405534-M.jpg"
  },
  {
    "title": "The Clocks",
    "author": "Agatha Christie",
    "rating": 3,
    "category": "Mystery",
    "year": "1963",
    "url": "https://openlibrary.org/works/OL471670W",
    "image": "https://covers.openlibrary.org/b/id/12996554-M.jpg"
  },
  {
    "title": "Why Didn't they Ask Evans?",
    "author": "Agatha Christie",
    "rating": 3,
    "category": "Mystery",
    "year": "1934",
    "url": "https://openlibrary.org/works/OL472388W",
    "image": "https://covers.openlibrary.org/b/id/9831097-M.jpg"
  },
  {
    "title": "Evil Under the Sun",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1941",
    "url": "https://openlibrary.org/works/OL472049W",
    "image": "https://covers.openlibrary.org/b/id/13671433-M.jpg"
  },
  {
    "title": "The Big Bad Wolf",
    "author": "James Patterson",
    "rating": 3,
    "category": "Mystery",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL167179W",
    "image": "https://covers.openlibrary.org/b/id/189358-M.jpg"
  },
  {
    "title": "Hercule Poirot's Christmas",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1939",
    "url": "https://openlibrary.org/works/OL471841W",
    "image": "https://covers.openlibrary.org/b/id/12855074-M.jpg"
  },
  {
    "title": "Death in the Clouds",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1935",
    "url": "https://openlibrary.org/works/OL472324W",
    "image": "https://covers.openlibrary.org/b/id/11433305-M.jpg"
  },
  {
    "title": "The Secret of the Old Clock",
    "author": "Carolyn Keene",
    "rating": 4,
    "category": "Mystery",
    "year": "1930",
    "url": "https://openlibrary.org/works/OL39275W",
    "image": "https://covers.openlibrary.org/b/id/15150724-M.jpg"
  },
  {
    "title": "The Body in the Library",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1942",
    "url": "https://openlibrary.org/works/OL471610W",
    "image": "https://covers.openlibrary.org/b/id/12855259-M.jpg"
  },
  {
    "title": "The Secret Adversary",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1922",
    "url": "https://openlibrary.org/works/OL471789W",
    "image": "https://covers.openlibrary.org/b/id/14590159-M.jpg"
  },
  {
    "title": "Curtain",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1975",
    "url": "https://openlibrary.org/works/OL472470W",
    "image": "https://covers.openlibrary.org/b/id/12387503-M.jpg"
  },
  {
    "title": "Appointment with Death",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1938",
    "url": "https://openlibrary.org/works/OL471667W",
    "image": "https://covers.openlibrary.org/b/id/14561660-M.jpg"
  },
  {
    "title": "Roses Are Red",
    "author": "James Patterson",
    "rating": 4,
    "category": "Mystery",
    "year": "1752",
    "url": "https://openlibrary.org/works/OL167175W",
    "image": "https://covers.openlibrary.org/b/id/286934-M.jpg"
  },
  {
    "title": "Lord Edgware Dies",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1933",
    "url": "https://openlibrary.org/works/OL471767W",
    "image": "https://covers.openlibrary.org/b/id/9492111-M.jpg"
  },
  {
    "title": "The Moonstone",
    "author": "Wilkie Collins",
    "rating": 4,
    "category": "Mystery",
    "year": "1800",
    "url": "https://openlibrary.org/works/OL176092W",
    "image": "https://covers.openlibrary.org/b/id/8237041-M.jpg"
  },
  {
    "title": "The Pale Horse",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1952",
    "url": "https://openlibrary.org/works/OL471919W",
    "image": "https://covers.openlibrary.org/b/id/12996562-M.jpg"
  },
  {
    "title": "Cat Among the Pigeons",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1959",
    "url": "https://openlibrary.org/works/OL471641W",
    "image": "https://covers.openlibrary.org/b/id/12852588-M.jpg"
  },
  {
    "title": "The Hollow",
    "author": "Agatha Christie",
    "rating": 4,
    "category": "Mystery",
    "year": "1946",
    "url": "https://openlibrary.org/works/OL472526W",
    "image": "https://covers.openlibrary.org/b/id/13679064-M.jpg"
  },
  {
    "title": "Impossible Bargain",
    "author": "Patricia Wilson",
    "rating": 4,
    "category": "Romance",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL8315359W",
    "image": "https://covers.openlibrary.org/b/id/6628857-M.jpg"
  },
  {
    "title": "When Two Paths Meet",
    "author": "Betty Neels",
    "rating": 4,
    "category": "Romance",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL3457933W",
    "image": "https://covers.openlibrary.org/b/id/218961-M.jpg"
  },
  {
    "title": "Lover's Touch",
    "author": "Penny Jordan",
    "rating": 4,
    "category": "Romance",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL3759116W",
    "image": "https://covers.openlibrary.org/b/id/12394501-M.jpg"
  },
  {
    "title": "Never Count Tomorrow",
    "author": "Daphne Clair",
    "rating": 4,
    "category": "Romance",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL9367818W",
    "image": "https://covers.openlibrary.org/b/id/9242833-M.jpg"
  },
  {
    "title": "Dark Lover",
    "author": "J. R. Ward",
    "rating": 4,
    "category": "Romance",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL5091273W",
    "image": "https://covers.openlibrary.org/b/id/293803-M.jpg"
  },
  {
    "title": "No Alternative",
    "author": "Margaret Way",
    "rating": 4,
    "category": "Romance",
    "year": "1983",
    "url": "https://openlibrary.org/works/OL5236259W",
    "image": "https://covers.openlibrary.org/b/id/6907771-M.jpg"
  },
  {
    "title": "A High Price to Pay",
    "author": "Sara Craven",
    "rating": 4,
    "category": "Romance",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL11327666W",
    "image": "https://covers.openlibrary.org/b/id/9145110-M.jpg"
  },
  {
    "title": "The Fine Print",
    "author": "Lauren Asher",
    "rating": 4,
    "category": "Romance",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL26201864W",
    "image": "https://covers.openlibrary.org/b/id/14319054-M.jpg"
  },
  {
    "title": "The Girl with Green Eyes",
    "author": "Betty Neels",
    "rating": 4,
    "category": "Romance",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL3458001W",
    "image": "https://covers.openlibrary.org/b/id/1186940-M.jpg"
  },
  {
    "title": "Beyond Compare",
    "author": "Penny Jordan",
    "rating": 4,
    "category": "Romance",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL3759318W",
    "image": "https://covers.openlibrary.org/b/id/10504888-M.jpg"
  },
  {
    "title": "From Blood and Ash",
    "author": "Jennifer L. Armentrout",
    "rating": 4,
    "category": "Romance",
    "year": "2020",
    "url": "https://openlibrary.org/works/OL27838518W",
    "image": "https://covers.openlibrary.org/b/id/14105538-M.jpg"
  },
  {
    "title": "Levelling the Score",
    "author": "Penny Jordan",
    "rating": 4,
    "category": "Romance",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL11327953W",
    "image": "https://covers.openlibrary.org/b/id/7248515-M.jpg"
  },
  {
    "title": "Twist of Fate",
    "author": "Charlotte Lamb",
    "rating": 4,
    "category": "Romance",
    "year": "1979",
    "url": "https://openlibrary.org/works/OL11277315W",
    "image": "https://covers.openlibrary.org/b/id/7265400-M.jpg"
  },
  {
    "title": "Stormy Surrender",
    "author": "Patricia Wilson",
    "rating": 4,
    "category": "Romance",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL8315354W",
    "image": "https://covers.openlibrary.org/b/id/7282546-M.jpg"
  },
  {
    "title": "Perilous Refuge",
    "author": "Patricia Wilson",
    "rating": 4,
    "category": "Romance",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL8315362W",
    "image": "https://covers.openlibrary.org/b/id/7259787-M.jpg"
  },
  {
    "title": "Bittersweet Passion",
    "author": "Lynne Graham",
    "rating": 4,
    "category": "Romance",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL11328452W",
    "image": "https://covers.openlibrary.org/b/id/7322367-M.jpg"
  },
  {
    "title": "Love in the Dark",
    "author": "Charlotte Lamb",
    "rating": 4,
    "category": "Romance",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL11277298W",
    "image": "https://covers.openlibrary.org/b/id/9311897-M.jpg"
  },
  {
    "title": "Comparative Strangers",
    "author": "Sara Craven",
    "rating": 4,
    "category": "Romance",
    "year": "1988",
    "url": "https://openlibrary.org/works/OL3467485W",
    "image": "https://covers.openlibrary.org/b/id/10570362-M.jpg"
  },
  {
    "title": "Retribution",
    "author": "Charlotte Lamb",
    "rating": 4,
    "category": "Romance",
    "year": "1981",
    "url": "https://openlibrary.org/works/OL3294436W",
    "image": "https://covers.openlibrary.org/b/id/6773421-M.jpg"
  },
  {
    "title": "The Other Woman",
    "author": "Jessica Steele",
    "rating": 4,
    "category": "Romance",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL3845148W",
    "image": "https://covers.openlibrary.org/b/id/10528998-M.jpg"
  },
  {
    "title": "Passionate Scandal",
    "author": "Michelle Reid",
    "rating": 4,
    "category": "Romance",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL4233148W",
    "image": "https://covers.openlibrary.org/b/id/10199624-M.jpg"
  },
  {
    "title": "God of Malice",
    "author": "Rina Kent",
    "rating": 4,
    "category": "Romance",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL28181491W",
    "image": "https://covers.openlibrary.org/b/id/13291765-M.jpg"
  },
  {
    "title": "Pattern of Deceit",
    "author": "Emma Darcy",
    "rating": 4,
    "category": "Romance",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL2959270W",
    "image": "https://covers.openlibrary.org/b/id/10346679-M.jpg"
  },
  {
    "title": "Blindsight",
    "author": "Peter Watts",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL8514692W",
    "image": "https://covers.openlibrary.org/b/id/524560-M.jpg"
  },
  {
    "title": "Foundation and Earth",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL46347W",
    "image": "https://covers.openlibrary.org/b/id/9304027-M.jpg"
  },
  {
    "title": "Shatter Me Complete Collection",
    "author": "Tahereh Mafi",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL21802553W",
    "image": "https://covers.openlibrary.org/b/id/14428312-M.jpg"
  },
  {
    "title": "Robots and Empire",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL46178W",
    "image": "https://covers.openlibrary.org/b/id/9302088-M.jpg"
  },
  {
    "title": "I, Robot",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1950",
    "url": "https://openlibrary.org/works/OL46241W",
    "image": "https://covers.openlibrary.org/b/id/12385229-M.jpg"
  },
  {
    "title": "The Currents of Space",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1952",
    "url": "https://openlibrary.org/works/OL46385W",
    "image": "https://covers.openlibrary.org/b/id/14616014-M.jpg"
  },
  {
    "title": "三体",
    "author": "刘慈欣",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL17267881W",
    "image": "https://covers.openlibrary.org/b/id/9157544-M.jpg"
  },
  {
    "title": "Ancillary Sword",
    "author": "Ann Leckie",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2014",
    "url": "https://openlibrary.org/works/OL17062642W",
    "image": "https://covers.openlibrary.org/b/id/7422984-M.jpg"
  },
  {
    "title": "The Diamond Age",
    "author": "Neal Stephenson",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1995",
    "url": "https://openlibrary.org/works/OL38499W",
    "image": "https://covers.openlibrary.org/b/id/8598269-M.jpg"
  },
  {
    "title": "A Fire upon the Deep",
    "author": "Vernor Vinge",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL1975714W",
    "image": "https://covers.openlibrary.org/b/id/9261466-M.jpg"
  },
  {
    "title": "Starship Troopers",
    "author": "Robert A. Heinlein",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1959",
    "url": "https://openlibrary.org/works/OL59740W",
    "image": "https://covers.openlibrary.org/b/id/14630746-M.jpg"
  },
  {
    "title": "The Martian",
    "author": "Andy Weir",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL17091839W",
    "image": "https://covers.openlibrary.org/b/id/11447888-M.jpg"
  },
  {
    "title": "The Last Colony",
    "author": "John Scalzi",
    "rating": 4,
    "category": "Science Fiction",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL5734646W",
    "image": "https://covers.openlibrary.org/b/id/524768-M.jpg"
  },
  {
    "title": "Xenocide",
    "author": "Orson Scott Card",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL49604W",
    "image": "https://covers.openlibrary.org/b/id/10564838-M.jpg"
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1932",
    "url": "https://openlibrary.org/works/OL64365W",
    "image": "https://covers.openlibrary.org/b/id/8231823-M.jpg"
  },
  {
    "title": "I am Legend",
    "author": "Richard Matheson",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1954",
    "url": "https://openlibrary.org/works/OL11374287W",
    "image": "https://covers.openlibrary.org/b/id/911109-M.jpg"
  },
  {
    "title": "Foundation and Empire",
    "author": "Isaac Asimov",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1945",
    "url": "https://openlibrary.org/works/OL46224W",
    "image": "https://covers.openlibrary.org/b/id/9300695-M.jpg"
  },
  {
    "title": "Dawn",
    "author": "Octavia E. Butler",
    "rating": 4,
    "category": "Science Fiction",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL35628W",
    "image": "https://covers.openlibrary.org/b/id/285158-M.jpg"
  },
  {
    "title": "The Mother Tongue",
    "author": "Bill Bryson",
    "rating": 4,
    "category": "History",
    "year": "1656",
    "url": "https://openlibrary.org/works/OL74126W",
    "image": "https://covers.openlibrary.org/b/id/12857063-M.jpg"
  },
  {
    "title": "Der Untergang des Abendlandes",
    "author": "Oswald Spengler",
    "rating": 4,
    "category": "History",
    "year": "1918",
    "url": "https://openlibrary.org/works/OL3392002W",
    "image": "https://covers.openlibrary.org/b/id/4112807-M.jpg"
  },
  {
    "title": "The Silk Roads",
    "author": "Peter Frankopan",
    "rating": 4,
    "category": "History",
    "year": "2015",
    "url": "https://openlibrary.org/works/OL19666939W",
    "image": "https://covers.openlibrary.org/b/id/8963642-M.jpg"
  },
  {
    "title": "Rizal without the overcoat",
    "author": "Ambeth R. Ocampo",
    "rating": 5,
    "category": "History",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL1784164W",
    "image": "https://covers.openlibrary.org/b/id/14424641-M.jpg"
  },
  {
    "title": "History of Africa",
    "author": "Kevin Shillington",
    "rating": 2,
    "category": "History",
    "year": "1989",
    "url": "https://openlibrary.org/works/OL2701044W",
    "image": "https://covers.openlibrary.org/b/id/173446-M.jpg"
  },
  {
    "title": "History of the Filipino People",
    "author": "Teodoro A. Agoncillo",
    "rating": 4,
    "category": "History",
    "year": "1969",
    "url": "https://openlibrary.org/works/OL1629183W",
    "image": "https://covers.openlibrary.org/b/id/6682021-M.jpg"
  },
  {
    "title": "Ἱστορίαι",
    "author": "Ἡρόδοτος",
    "rating": 4,
    "category": "History",
    "year": "1494",
    "url": "https://openlibrary.org/works/OL15678068W",
    "image": "https://covers.openlibrary.org/b/id/9829028-M.jpg"
  },
  {
    "title": "Tragedy and hope",
    "author": "Carroll Quigley",
    "rating": 3,
    "category": "History",
    "year": "1966",
    "url": "https://openlibrary.org/works/OL5911681W",
    "image": "https://covers.openlibrary.org/b/id/6391850-M.jpg"
  },
  {
    "title": "The Eagle of the Ninth. 1400 Grundwörter.",
    "author": "Rosemary Sutcliff",
    "rating": 4,
    "category": "History",
    "year": "1954",
    "url": "https://openlibrary.org/works/OL1417723W",
    "image": "https://covers.openlibrary.org/b/id/1053251-M.jpg"
  },
  {
    "title": "Sleep walkers",
    "author": "Arthur Koestler",
    "rating": 4,
    "category": "History",
    "year": "1959",
    "url": "https://openlibrary.org/works/OL804233W",
    "image": "https://covers.openlibrary.org/b/id/98120-M.jpg"
  },
  {
    "title": "Lies My Teacher Told Me",
    "author": "James W. Loewen",
    "rating": 4,
    "category": "History",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL106813W",
    "image": "https://covers.openlibrary.org/b/id/804808-M.jpg"
  },
  {
    "title": "The Palace of Illusions",
    "author": "Chitra Banerjee Divakaruni",
    "rating": 4,
    "category": "History",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL1926995W",
    "image": "https://covers.openlibrary.org/b/id/2412074-M.jpg"
  },
  {
    "title": "The Emperor of All Maladies",
    "author": "Siddhartha Mukherjee",
    "rating": 4,
    "category": "History",
    "year": "2010",
    "url": "https://openlibrary.org/works/OL15540668W",
    "image": "https://covers.openlibrary.org/b/id/11320203-M.jpg"
  },
  {
    "title": "A Study of History",
    "author": "Arnold J. Toynbee",
    "rating": 4,
    "category": "History",
    "year": "1900",
    "url": "https://openlibrary.org/works/OL1108523W",
    "image": "https://covers.openlibrary.org/b/id/121255-M.jpg"
  },
  {
    "title": "A Distant Mirror",
    "author": "Barbara Tuchman",
    "rating": 4,
    "category": "History",
    "year": "1600",
    "url": "https://openlibrary.org/works/OL3378547W",
    "image": "https://covers.openlibrary.org/b/id/5071195-M.jpg"
  },
  {
    "title": "The Outline of History",
    "author": "H. G. Wells",
    "rating": 3,
    "category": "History",
    "year": "1919",
    "url": "https://openlibrary.org/works/OL52264W",
    "image": "https://covers.openlibrary.org/b/id/6983070-M.jpg"
  },
  {
    "title": "Documentary sources of Philippine history",
    "author": "Gregorio F. Zaide",
    "rating": 2,
    "category": "History",
    "year": "1990",
    "url": "https://openlibrary.org/works/OL19597448W",
    "image": ""
  },
  {
    "title": "America",
    "author": "Mary Lynn Rampolla",
    "rating": 3,
    "category": "History",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL15090363W",
    "image": "https://covers.openlibrary.org/b/id/13165243-M.jpg"
  },
  {
    "title": "1776",
    "author": "David McCullough",
    "rating": 4,
    "category": "History",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL16939881W",
    "image": "https://covers.openlibrary.org/b/id/8331093-M.jpg"
  },
  {
    "title": "What happened in history",
    "author": "V. Gordon Childe",
    "rating": 3,
    "category": "History",
    "year": "1942",
    "url": "https://openlibrary.org/works/OL1138722W",
    "image": "https://covers.openlibrary.org/b/id/7128865-M.jpg"
  },
  {
    "title": "The life of Olaudah Equiano, or Gustavus Vassa, the African",
    "author": "Olaudah Equiano",
    "rating": 4,
    "category": "Biography",
    "year": "1789",
    "url": "https://openlibrary.org/works/OL743333W",
    "image": "https://covers.openlibrary.org/b/id/2074044-M.jpg"
  },
  {
    "title": "Confessions of a video vixen",
    "author": "Karrine Steffans",
    "rating": 4,
    "category": "Biography",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL5847456W",
    "image": "https://covers.openlibrary.org/b/id/37858-M.jpg"
  },
  {
    "title": "Wild",
    "author": "Cheryl Strayed",
    "rating": 4,
    "category": "Biography",
    "year": "1767",
    "url": "https://openlibrary.org/works/OL16142316W",
    "image": "https://covers.openlibrary.org/b/id/7249596-M.jpg"
  },
  {
    "title": "The dictionary of national biography",
    "author": "Unknown",
    "rating": 4,
    "category": "Biography",
    "year": "1921",
    "url": "https://openlibrary.org/works/OL19969194M",
    "image": ""
  },
  {
    "title": "The night stalker",
    "author": "Philip Carlo",
    "rating": 4,
    "category": "Biography",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL1701098W",
    "image": "https://covers.openlibrary.org/b/id/828728-M.jpg"
  },
  {
    "title": "Just for fun",
    "author": "Linus Torvalds",
    "rating": 4,
    "category": "Biography",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL12494344W",
    "image": "https://covers.openlibrary.org/b/id/6933170-M.jpg"
  },
  {
    "title": "Trump",
    "author": "Tony Schwartz",
    "rating": 3,
    "category": "Biography",
    "year": "1987",
    "url": "https://openlibrary.org/works/OL15026140W",
    "image": "https://covers.openlibrary.org/b/id/211798-M.jpg"
  },
  {
    "title": "Messi",
    "author": "Guillem Balague",
    "rating": 5,
    "category": "Biography",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL21066655W",
    "image": "https://covers.openlibrary.org/b/id/11679405-M.jpg"
  },
  {
    "title": "\"Surely You're Joking, Mr. Feynman\"",
    "author": "Richard Phillips Feynman",
    "rating": 4,
    "category": "Biography",
    "year": "1984",
    "url": "https://openlibrary.org/works/OL514629W",
    "image": "https://covers.openlibrary.org/b/id/9274698-M.jpg"
  },
  {
    "title": "My Frozen Turbulence in Kashmir",
    "author": "Jagmohan",
    "rating": 5,
    "category": "Biography",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL2597404W",
    "image": "https://covers.openlibrary.org/b/id/4884901-M.jpg"
  },
  {
    "title": "Ball Four",
    "author": "Jim Bouton",
    "rating": 4,
    "category": "Biography",
    "year": "1970",
    "url": "https://openlibrary.org/works/OL3961899W",
    "image": "https://covers.openlibrary.org/b/id/14880-M.jpg"
  },
  {
    "title": "Cider with Rosie",
    "author": "Laurie Lee",
    "rating": 4,
    "category": "Biography",
    "year": "1959",
    "url": "https://openlibrary.org/works/OL1209517W",
    "image": "https://covers.openlibrary.org/b/id/107817-M.jpg"
  },
  {
    "title": "The 100",
    "author": "Michael H. Hart",
    "rating": 4,
    "category": "Biography",
    "year": "1978",
    "url": "https://openlibrary.org/works/OL525224W",
    "image": "https://covers.openlibrary.org/b/id/585166-M.jpg"
  },
  {
    "title": "A Beautiful Mind",
    "author": "Sylvia Nasar",
    "rating": 3,
    "category": "Biography",
    "year": "1998",
    "url": "https://openlibrary.org/works/OL937456W",
    "image": "https://covers.openlibrary.org/b/id/480024-M.jpg"
  },
  {
    "title": "Christians with courage",
    "author": "Ruth Johnson Jay",
    "rating": 4,
    "category": "Biography",
    "year": "1968",
    "url": "https://openlibrary.org/works/OL120755W",
    "image": "https://covers.openlibrary.org/b/id/13753701-M.jpg"
  },
  {
    "title": "Autobiography",
    "author": "John Stuart Mill",
    "rating": 4,
    "category": "Biography",
    "year": "1873",
    "url": "https://openlibrary.org/works/OL1068072W",
    "image": "https://covers.openlibrary.org/b/id/8982987-M.jpg"
  },
  {
    "title": "Travels with Charley",
    "author": "John Steinbeck",
    "rating": 4,
    "category": "Biography",
    "year": "1962",
    "url": "https://openlibrary.org/works/OL23192W",
    "image": "https://covers.openlibrary.org/b/id/8219483-M.jpg"
  },
  {
    "title": "Open",
    "author": "Andre Agassi",
    "rating": 5,
    "category": "Biography",
    "year": "2009",
    "url": "https://openlibrary.org/works/OL13826401W",
    "image": "https://covers.openlibrary.org/b/id/6714053-M.jpg"
  },
  {
    "title": "The magic of believing",
    "author": "Claude M. Bristol",
    "rating": 5,
    "category": "Self Help",
    "year": "1948",
    "url": "https://openlibrary.org/works/OL120672W",
    "image": "https://covers.openlibrary.org/b/id/14424610-M.jpg"
  },
  {
    "title": "No More Mr. Nice Guy",
    "author": "Robert A. Glover",
    "rating": 4,
    "category": "Self Help",
    "year": "2001",
    "url": "https://openlibrary.org/works/OL8502474W",
    "image": "https://covers.openlibrary.org/b/id/513564-M.jpg"
  },
  {
    "title": "3am Questions",
    "author": "Annika M. Zimmermann",
    "rating": 3,
    "category": "Self Help",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL26076883W",
    "image": "https://covers.openlibrary.org/b/id/12067557-M.jpg"
  },
  {
    "title": "The Secret",
    "author": "Rhonda Byrne",
    "rating": 4,
    "category": "Self Help",
    "year": "2000",
    "url": "https://openlibrary.org/works/OL15839737W",
    "image": "https://covers.openlibrary.org/b/id/845815-M.jpg"
  },
  {
    "title": "Stop Overthinking",
    "author": "Nick Trenton",
    "rating": 2,
    "category": "Self Help",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL26432522W",
    "image": "https://covers.openlibrary.org/b/id/12446559-M.jpg"
  },
  {
    "title": "Goodbye, things",
    "author": "Fumio Sasaki",
    "rating": 4,
    "category": "Self Help",
    "year": "2013",
    "url": "https://openlibrary.org/works/OL17801065W",
    "image": "https://covers.openlibrary.org/b/id/10206062-M.jpg"
  },
  {
    "title": "The Monk Who Sold His Ferrari",
    "author": "Robin S. Sharma",
    "rating": 4,
    "category": "Self Help",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL276492W",
    "image": "https://covers.openlibrary.org/b/id/48817-M.jpg"
  },
  {
    "title": "The highly sensitive person",
    "author": "Elaine N. Aron",
    "rating": 4,
    "category": "Self Help",
    "year": "1996",
    "url": "https://openlibrary.org/works/OL856010W",
    "image": "https://covers.openlibrary.org/b/id/367868-M.jpg"
  },
  {
    "title": "The art of persuasion",
    "author": "Bob Burg",
    "rating": 4,
    "category": "Self Help",
    "year": "2011",
    "url": "https://openlibrary.org/works/OL22367098W",
    "image": "https://covers.openlibrary.org/b/id/12719675-M.jpg"
  },
  {
    "title": "Self-esteem",
    "author": "Matthew McKay",
    "rating": 4,
    "category": "Self Help",
    "year": "1986",
    "url": "https://openlibrary.org/works/OL2764952W",
    "image": "https://covers.openlibrary.org/b/id/809461-M.jpg"
  },
  {
    "title": "477 Frases de Poder",
    "author": "Alejandro Cardona",
    "rating": 4,
    "category": "Self Help",
    "year": "2023",
    "url": "https://openlibrary.org/works/OL36719344W",
    "image": "https://covers.openlibrary.org/b/id/15092769-M.jpg"
  },
  {
    "title": "The Definitive Book of Body Language",
    "author": "Allan Pease",
    "rating": 4,
    "category": "Self Help",
    "year": "2004",
    "url": "https://openlibrary.org/works/OL5599445W",
    "image": "https://covers.openlibrary.org/b/id/499488-M.jpg"
  },
  {
    "title": "Pivot Year",
    "author": "Brianna Wiest",
    "rating": 5,
    "category": "Self Help",
    "year": "2023",
    "url": "https://openlibrary.org/works/OL29224726W",
    "image": "https://covers.openlibrary.org/b/id/14825419-M.jpg"
  },
  {
    "title": "Why Has Nobody Told Me This Before?",
    "author": "Julie Smith",
    "rating": 4,
    "category": "Self Help",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL25799307W",
    "image": "https://covers.openlibrary.org/b/id/12821544-M.jpg"
  },
  {
    "title": "The Strangest Secret",
    "author": "Earl Nightingale",
    "rating": 5,
    "category": "Self Help",
    "year": "1900",
    "url": "https://openlibrary.org/works/OL3407905W",
    "image": "https://covers.openlibrary.org/b/id/2292514-M.jpg"
  },
  {
    "title": "The porn trap",
    "author": "Wendy Maltz",
    "rating": 3,
    "category": "Self Help",
    "year": "2008",
    "url": "https://openlibrary.org/works/OL3338435W",
    "image": "https://covers.openlibrary.org/b/id/6416792-M.jpg"
  },
  {
    "title": "The Power of Positive Thinking",
    "author": "Norman Vincent Peale",
    "rating": 4,
    "category": "Self Help",
    "year": "1952",
    "url": "https://openlibrary.org/works/OL2917168W",
    "image": "https://covers.openlibrary.org/b/id/14570194-M.jpg"
  },
  {
    "title": "Do Epic Shit",
    "author": "Ankur Warikoo",
    "rating": 4,
    "category": "Self Help",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL27040669W",
    "image": "https://covers.openlibrary.org/b/id/12550538-M.jpg"
  },
  {
    "title": "Hard Times Create Strong Men",
    "author": "Stefan Aarnio",
    "rating": 3,
    "category": "Self Help",
    "year": "2019",
    "url": "https://openlibrary.org/works/OL21354559W",
    "image": "https://covers.openlibrary.org/b/id/14540653-M.jpg"
  },
  {
    "title": "NO GRID Survival Projects",
    "author": "Davis, Claude, Sr.",
    "rating": 5,
    "category": "Self Help",
    "year": "2021",
    "url": "https://openlibrary.org/works/OL27811141W",
    "image": "https://covers.openlibrary.org/b/id/13182065-M.jpg"
  },
  {
    "title": "Pathless Path",
    "author": "Paul Millerd",
    "rating": 5,
    "category": "Self Help",
    "year": "2022",
    "url": "https://openlibrary.org/works/OL27526176W",
    "image": "https://covers.openlibrary.org/b/id/14840711-M.jpg"
  },
  {
    "title": "If You Give a Mouse a Cookie",
    "author": "Laura Joffe Numeroff",
    "rating": 4,
    "category": "Children's",
    "year": "1985",
    "url": "https://openlibrary.org/works/OL61432W",
    "image": "https://covers.openlibrary.org/b/id/50977-M.jpg"
  },
  {
    "title": "Have You Seen My Cat?",
    "author": "Eric Carle",
    "rating": 4,
    "category": "Children's",
    "year": "1973",
    "url": "https://openlibrary.org/works/OL52990W",
    "image": "https://covers.openlibrary.org/b/id/3267591-M.jpg"
  },
  {
    "title": "Ozma of Oz",
    "author": "L. Frank Baum",
    "rating": 4,
    "category": "Children's",
    "year": "1907",
    "url": "https://openlibrary.org/works/OL18415W",
    "image": "https://covers.openlibrary.org/b/id/12648657-M.jpg"
  },
  {
    "title": "The Monster at the End of This Book",
    "author": "Jon Stone",
    "rating": 4,
    "category": "Children's",
    "year": "1971",
    "url": "https://openlibrary.org/works/OL3009031W",
    "image": "https://covers.openlibrary.org/b/id/8580217-M.jpg"
  },
  {
    "title": "The magic Faraway Tree",
    "author": "Enid Blyton",
    "rating": 4,
    "category": "Children's",
    "year": "1943",
    "url": "https://openlibrary.org/works/OL1948587W",
    "image": "https://covers.openlibrary.org/b/id/14605635-M.jpg"
  },
  {
    "title": "No Brainer",
    "author": "Jeff Kinney",
    "rating": 4,
    "category": "Children's",
    "year": "2023",
    "url": "https://openlibrary.org/works/OL34490931W",
    "image": "https://covers.openlibrary.org/b/id/13442265-M.jpg"
  },
  {
    "title": "Farmer Duck",
    "author": "Martin Waddell",
    "rating": 5,
    "category": "Children's",
    "year": "1991",
    "url": "https://openlibrary.org/works/OL114206W",
    "image": "https://covers.openlibrary.org/b/id/799300-M.jpg"
  },
  {
    "title": "Cabin Fever",
    "author": "Jeff Kinney",
    "rating": 5,
    "category": "Children's",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL16224122W",
    "image": "https://covers.openlibrary.org/b/id/7247522-M.jpg"
  },
  {
    "title": "The Phantom Tollbooth",
    "author": "Norton Juster",
    "rating": 4,
    "category": "Children's",
    "year": "1961",
    "url": "https://openlibrary.org/works/OL1636262W",
    "image": "https://covers.openlibrary.org/b/id/8578174-M.jpg"
  },
  {
    "title": "The Gruffalo",
    "author": "Julia Donaldson",
    "rating": 4,
    "category": "Children's",
    "year": "1999",
    "url": "https://openlibrary.org/works/OL1938178W",
    "image": "https://covers.openlibrary.org/b/id/8561698-M.jpg"
  },
  {
    "title": "The Stinky Cheese Man and Other Fairly Stupid Tales",
    "author": "Jon Scieszka",
    "rating": 4,
    "category": "Children's",
    "year": "1992",
    "url": "https://openlibrary.org/works/OL39518W",
    "image": "https://covers.openlibrary.org/b/id/2547013-M.jpg"
  },
  {
    "title": "The BFG",
    "author": "Roald Dahl",
    "rating": 4,
    "category": "Children's",
    "year": "1980",
    "url": "https://openlibrary.org/works/OL45885W",
    "image": "https://covers.openlibrary.org/b/id/9176033-M.jpg"
  },
  {
    "title": "The Green Fairy Book",
    "author": "Andrew Lang",
    "rating": 4,
    "category": "Children's",
    "year": "1892",
    "url": "https://openlibrary.org/works/OL1088797W",
    "image": "https://covers.openlibrary.org/b/id/2808709-M.jpg"
  },
  {
    "title": "A Cow Called Boy",
    "author": "C. Everard Palmer",
    "rating": 4,
    "category": "Children's",
    "year": "1973",
    "url": "https://openlibrary.org/works/OL5233135W",
    "image": "https://covers.openlibrary.org/b/id/5768995-M.jpg"
  },
  {
    "title": "Lucy and the Sea Monster",
    "author": "Karen Dolby",
    "rating": 4,
    "category": "Children's",
    "year": "1994",
    "url": "https://openlibrary.org/works/OL8377463W",
    "image": "https://covers.openlibrary.org/b/id/560411-M.jpg"
  },
  {
    "title": "Percy Jackson's Greek Gods",
    "author": "Rick Riordan",
    "rating": 5,
    "category": "Children's",
    "year": "2006",
    "url": "https://openlibrary.org/works/OL17054790W",
    "image": "https://covers.openlibrary.org/b/id/7396660-M.jpg"
  },
  {
    "title": "In Watermelon Sugar",
    "author": "Richard Brautigan",
    "rating": 4,
    "category": "Children's",
    "year": "1968",
    "url": "https://openlibrary.org/works/OL29654W",
    "image": "https://covers.openlibrary.org/b/id/74366-M.jpg"
  },
  {
    "title": "Childcraft",
    "author": "World Book",
    "rating": 5,
    "category": "Children's",
    "year": "1937",
    "url": "https://openlibrary.org/works/OL8372484W",
    "image": "https://covers.openlibrary.org/b/id/13629926-M.jpg"
  },
  {
    "title": "The Foot Book",
    "author": "Dr. Seuss",
    "rating": 4,
    "category": "Children's",
    "year": "1968",
    "url": "https://openlibrary.org/works/OL1898304W",
    "image": "https://covers.openlibrary.org/b/id/231794-M.jpg"
  },
  {
    "title": "The Fountainhead",
    "author": "Ayn Rand",
    "rating": 4,
    "category": "Philosophy",
    "year": "1943",
    "url": "https://openlibrary.org/works/OL731663W",
    "image": "https://covers.openlibrary.org/b/id/6767765-M.jpg"
  },
  {
    "title": "The pig that wants to be eaten",
    "author": "Julian Baggini",
    "rating": 4,
    "category": "Philosophy",
    "year": "2005",
    "url": "https://openlibrary.org/works/OL5745559W",
    "image": "https://covers.openlibrary.org/b/id/918843-M.jpg"
  },
  {
    "title": "Questions that matter",
    "author": "Miller, Ed. L.",
    "rating": 5,
    "category": "Philosophy",
    "year": "1984",
    "url": "https://openlibrary.org/works/OL1939486W",
    "image": "https://covers.openlibrary.org/b/id/54759-M.jpg"
  },
  {
    "title": "Nature, Man,& Woman",
    "author": "Alan Watts",
    "rating": 5,
    "category": "Philosophy",
    "year": "1958",
    "url": "https://openlibrary.org/works/OL266156W",
    "image": "https://covers.openlibrary.org/b/id/420103-M.jpg"
  },
  {
    "title": "Συμπόσιον",
    "author": "Plato",
    "rating": 4,
    "category": "Philosophy",
    "year": "1559",
    "url": "https://openlibrary.org/works/OL51815W",
    "image": "https://covers.openlibrary.org/b/id/14398918-M.jpg"
  },
  {
    "title": "Los Cuatro Acuerdos",
    "author": "Don Miguel Ruiz",
    "rating": 4,
    "category": "Philosophy",
    "year": "2003",
    "url": "https://openlibrary.org/works/OL27201W",
    "image": "https://covers.openlibrary.org/b/id/10723490-M.jpg"
  },
  {
    "title": "Die Welt als Wille und Vorstellung",
    "author": "Arthur Schopenhauer",
    "rating": 3,
    "category": "Philosophy",
    "year": "1819",
    "url": "https://openlibrary.org/works/OL1183657W",
    "image": "https://covers.openlibrary.org/b/id/308780-M.jpg"
  },
  {
    "title": "Pengantar ilmu hukum",
    "author": "Tuty Saleh",
    "rating": 5,
    "category": "Philosophy",
    "year": "1963",
    "url": "https://openlibrary.org/works/OL6792688W",
    "image": "https://covers.openlibrary.org/b/id/12868336-M.jpg"
  },
  {
    "title": "Pedagogia do Oprimido",
    "author": "Paulo Freire",
    "rating": 4,
    "category": "Philosophy",
    "year": "1967",
    "url": "https://openlibrary.org/works/OL1870556W",
    "image": "https://covers.openlibrary.org/b/id/630082-M.jpg"
  },
  {
    "title": "Justice",
    "author": "Michael J. Sandel",
    "rating": 4,
    "category": "Philosophy",
    "year": "2007",
    "url": "https://openlibrary.org/works/OL1810923W",
    "image": "https://covers.openlibrary.org/b/id/1129014-M.jpg"
  }
];
