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

function pieChart() {
// Read in data with JSON
d3.json('static/data/games.json').then((json_data) => {
  // Grab json data
  let data = json_data
  console.log(json_data)
  let sampleGenre = []
  let sampleRank = []
  // Loop through 100
  for (let i = 0; i <= 49; i++) {
    sampleGenre.push(data[i].genre)
    sampleRank.push(data[i].rank)
  }
  // Setting Values for pie chart
  let pieValues = sampleGenre
   .slice(0, 10)
  // Setting Data points
   let pieData = [
   { 
    values: sampleRank,
    labels: pieValues,
    type: 'pie',
    marker: {
      colors: ['#002047','#084081', '#0868ac', '#2b8cbe', '#4eb3d3', '#7bccc4', '#a8ddb5', '#ccebc5', '#e0f3db' ,'#f7fcf0']
    }
  }]
  
  let pieLayout = {
    title: {
      text: 'Pie Chart'
    },
    showlegend: true
  }

  Plotly.newplot('pie', pieData, pieLayout)

 })
  console.log('GLHF')
}
/////// LINE GRAPH FUNCTION ////////

function lineChart() {}

/////// CAROUSEL FUNCTION ////////

function carousel() {}

/////// INITIALIZING ALL FUNCTIONS TO RUN ////////

init()
