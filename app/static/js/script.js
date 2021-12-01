/////// INIT FUNCTION ////////

function init() {
  barChart()
  pieChart()
  lineChart()
  carousel()
}

/////// BAR CHART FUNCTION ////////

function barChart() {
  // Read in data with JSON
  d3.json('static/data/games.json').then((json_data) => {
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
    for (let i = 0; i <= 49; i++) {
      sampleData.push(data[i])
      sampleRank.push(data[i].rank)
      sampleNames.push(data[i].name)
      sampleSales.push(data[i].global_sales)
      samplePublishers.push(data[i].publisher)
      sampleGenre.push(data[i].genre)
      samplePlatform.push(data[i].platform)
    }
    let xticks = sampleRank
      .map((x) => +x)
      .slice(0, 100)
      .reverse()
    let barData = [
      {
        x: xticks,
        y: sampleSales,
        text: sampleNames,
        // base: [sampleSales],
        type: 'bar',
        hoverinfo: sampleNames.slice(0, 100).reverse(),
        marker: {
          color: 'maroon',
        },
      },
    ]
    let barLayout = {
      width: 800,
      height: 400,
      title: 'Global Sales Data',
      xaxis: { title: 'Game Rank' },
      yaxis: { title: 'Global Sales $' },
      hovermode: sampleNames,
      plot_bgcolor: 'black',
      paper_bgcolor: '#0d0d0d',
      font: {
        color: 'white',
        family: 'Roboto, san-serif',
      },
      margin: {
        pad: 4,
      },
      automargin: true,
      autosize: false,
    }
    Plotly.newPlot('bar', barData, barLayout)
  })
}

/////// PIE CHART FUNCTION ////////

function pieChart() {}

/////// LINE GRAPH FUNCTION ////////

function lineChart() {

  d3.json('../static/data/games_sorted.json').then((json_sorted) => {
  let sorted_data = json_sorted
  
  // Grab specific variables
  let sampleGlobalSales = []
  let sampleNASales = []
  let sampleEUSales = []
  let sampleJPSales = []
  let sampleYear = []
  
  // Loop through 50
  for (let i = 0; i <= 49; i++) {
    sampleGlobalSales.push(sorted_data[i].global_sales)
    sampleNASales.push(sorted_data[i].na_sales)
    sampleEUSales.push(sorted_data[i].eu_sales)
    sampleJPSales.push(sorted_data[i].jp_sales)
    sampleYear.push(sorted_data[i].year)
  };

  var GLOBAL = {
    x: sampleYear,
    y: sampleGlobalSales,
    type: 'scatter'
  };

  var NA = {
    x: sampleYear,
    y: sampleNASales,
    type: 'scatter'
  };

  var EU = {
    x: sampleYear,
    y: sampleEUSales,
    type: 'scatter'
  };

  var JP = {
    x: sampleYear,
    y: sampleJPSales,
    type: 'scatter'
  };

  var salesData = [GLOBAL, NA, EU, JP];

  Plotly.newPlot('line', salesData);

  });
};

/////// CAROUSEL FUNCTION ////////

function carousel() {}

/////// INITIALIZING ALL FUNCTIONS TO RUN ////////

init()