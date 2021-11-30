// Read in data with JSON
d3.json('static/data/games.json').then(function (json_data){
  // Grab json data
  let data = json_data
  // Grab specific variables
  let sampleData = []
  let sampleRank = []
  let sampleNames = []
  let sampleSales = []
  let samplePublishers = []
  let sampleGenre = []
  let samplePlatform = []
  // Loop through 100 
  for (let i = 0; i <= 49; i++){
    sampleData.push(data[i])
    sampleRank.push(data[i].rank)
    sampleNames.push(data[i].name)
    sampleSales.push(data[i].global_sales)
    samplePublishers.push(data[i].publisher)
    sampleGenre.push(data[i].genre)
    samplePlatform.push(data[i].platform)
  }
  let xticks = sampleRank.map(x => + x).slice(0,100).reverse();
  let barData = [{
    x: xticks,
    y: sampleSales,
    text: sampleNames,
    // base: [sampleSales],
    type: 'bar',
    hoverinfo: sampleNames.slice(0,100).reverse(),
    marker: {
      color: "blue",
    },
  }]
  let barLayout = {
    width: 800,
    height: 400,
    title: "Global Sales Data",
    xaxis: {title: "Game Rank"},
    yaxis: {title: "Global Sales $"},
    hovermode: sampleNames,
    plot_bgcolor: "black",
    paper_bgcolor: "#0d0d0d",
    font: {
      color: "white",
      family: 'Roboto, san-serif',
    },
    margin: {
      pad: 4
    },
    automargin: true,
    autosize: false,
  }
  Plotly.newPlot("bar", barData, barLayout)
})






