// SAMPLE FUNCTION SHOWING HOW TO GRAB JSON DATA
function init() {
  // Populate select options
  d3.json("/static/data/games.json").then((results) => {
    let gameList = []
    let data = results.data
    for (let i = 0; i < data.length; i++){
      gameList.push(data[i])
      let gameName = gameList[i]["name"]
      let gameRank = gameList[i]["rank"]
      let gameSales = gameList[i]["global_sales"]
    }
  });
}
init()







