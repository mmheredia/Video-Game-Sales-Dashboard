function init() {
  //  Grab dropdown event handler id
  const selector = d3.select("#selDataset");

  // Populate select options
  d3.json("/static/data/games.json").then((data) => {
    console.log(data.rank)
    let dataRanks = data;
    dataRanks.forEach((rank) => {
      selector 
        .append("option")
        .text(rank)
        .property("value", rank);
    });
  });
}
// Initialize dashboard app
init()