
var players = [
    { name: "sunilgavasker", debue: 1974, retired: 1987, runs: 10122 },
    { name: "sachin tendulkar", debue: 1989, retired: 2012, runs: 18426 },
    { name: "kumar Sangakkara", debue: 2000, retired: 2015, runs: 14234 },
    { name: "ricky Ponting", debue: 1995, retired: 2012, runs: 13704 },
    { name: "sanath Jayasuriya", debue: 1989, retired: 2011, runs: 13430 },
    { name: "mahela Jayawardene", debue: 1998, retired: 2015, runs: 12650 },
    { name: "sourav Ganguly", debue: 1992, retired: 2007, runs: 11363 },
    { name: "mS Dhoni", debue: 2004, retired: 2019, runs: 10773 }

]

// print all playername in uppercase.
players.forEach(player => console.log(player.name.toUpperCase()))


// print all player name who experience more than 18 years
players.filter(player => (player.retired - player.debue) >= 18).forEach(player => console.log(player.name))

// find player who scored highest runs in his account
var runs = players.map(player => player.runs).reduce((run1, run2) => run1 > run2 ? run1 : run2)
players.filter(player => player.runs == runs).forEach(player => console.log(player.name))







