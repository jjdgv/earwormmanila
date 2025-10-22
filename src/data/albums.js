export const verifiedAlbums = [
  {
    id: 1,
    artist: "Frank Ocean",
    album: "Blonde",
    price: "₱1,500"
  },
  {
    id: 2,
    artist: "Tyler, The Creator",
    album: "IGOR",
    price: "₱1,400"
  },
  {
    id: 3,
    artist: "Daniel Caesar",
    album: "Freudian",
    price: "₱1,300"
  },
  {
    id: 4,
    artist: "Cigarettes After Sex",
    album: "Cigarettes After Sex",
    price: "₱1,200"
  },
  {
    id: 5,
    artist: "Clairo",
    album: "Immunity",
    price: "₱1,100"
  },
  {
    id: 6,
    artist: "Brent Faiyaz",
    album: "Fuck The World",
    price: "₱1,200"
  },
  {
    id: 7,
    artist: "Bryson Tiller",
    album: "T R A P S O U L",
    price: "₱1,300"
  },
  {
    id: 8,
    artist: "Bruno Major",
    album: "A Song For Every Moon",
    price: "₱1,100"
  },
  {
    id: 9,
    artist: "Frank Ocean",
    album: "Channel Orange",
    price: "₱1,500"
  },
  {
    id: 10,
    artist: "Tyler, The Creator",
    album: "Flower Boy",
    price: "₱1,400"
  },
  {
    id: 11,
    artist: "Daniel Caesar",
    album: "Case Study 01",
    price: "₱1,300"
  },
  {
    id: 12,
    artist: "Clairo",
    album: "Sling",
    price: "₱1,100"
  },
  {
    id: 13,
    artist: "Brent Faiyaz",
    album: "Wasteland",
    price: "₱1,200"
  },
  {
    id: 14,
    artist: "Keshi",
    album: "Gabriel",
    price: "₱1,200"
  },
  {
    id: 15,
    artist: "Bryson Tiller",
    album: "True to Self",
    price: "₱1,300"
  },
  {
    id: 16,
    artist: "Bruno Major",
    album: "To Let A Good Thing Die",
    price: "₱1,100"
  },
  {
    id: 17,
    artist: "Cigarettes After Sex",
    album: "Cry",
    price: "₱1,200"
  },
  {
    id: 18,
    artist: "Tyler, The Creator",
    album: "Call Me If You Get Lost",
    price: "₱1,400"
  },
  {
    id: 19,
    artist: "Keshi",
    album: "Always",
    price: "₱1,100"
  },
  {
    id: 20,
    artist: "Bryson Tiller",
    album: "Anniversary",
    price: "₱1,300"
  },
  {
    id: 21,
    artist: "Steve Lacy",
    album: "Gemini Rights",
    price: "₱1,200"
  },
  {
    id: 22,
    artist: "Steve Lacy",
    album: "Apollo XXI",
    price: "₱1,200"
  },
  {
    id: 23,
    artist: "Dijon",
    album: "Absolutely",
    price: "₱1,100"
  },
  {
    id: 24,
    artist: "Dijon",
    album: "How Do You Feel About Getting Married?",
    price: "₱1,100"
  },
  {
    id: 25,
    artist: "Jeff Bernat",
    album: "The Gentleman Approach",
    price: "₱1,000"
  },
  {
    id: 26,
    artist: "Jeff Bernat",
    album: "Violet",
    price: "₱1,000"
  },
  {
    id: 27,
    artist: "Luke Chiang",
    album: "All the Colours",
    price: "₱1,000"
  },
  {
    id: 28,
    artist: "Luke Chiang",
    album: "Someone New",
    price: "₱1,000"
  },
  {
    id: 29,
    artist: "Jeremy Passion",
    album: "For More Than a Feeling",
    price: "₱1,000"
  },
  {
    id: 30,
    artist: "Jeremy Passion",
    album: "II",
    price: "₱1,000"
  },
  {
    id: 31,
    artist: "Dylan Sinclair",
    album: "Red Like Crimson",
    price: "₱1,100"
  },
  {
    id: 32,
    artist: "Dylan Sinclair",
    album: "Proverb",
    price: "₱1,100"
  },
  {
    id: 33,
    artist: "Khamari",
    album: "A Brief Nirvana",
    price: "₱1,100"
  },
  {
    id: 34,
    artist: "Khamari",
    album: "Eldorado",
    price: "₱1,100"
  },
  {
    id: 35,
    artist: "Three Sacred Souls",
    album: "Three Sacred Souls",
    price: "₱1,000"
  },
  {
    id: 36,
    artist: "Three Sacred Souls",
    album: "Sacred",
    price: "₱1,000"
  }
]

export const featuredAlbums = verifiedAlbums

export const getRandomAlbums = (count = 4) => {
  const shuffled = [...verifiedAlbums].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export const getAllAlbums = () => {
  return [...verifiedAlbums] 
}
