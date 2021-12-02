function init() {
  barChart()
  pieChart()
  lineChart()
  carousel()
  // Dropdown menu event handler ID
  const selector = d3.select('#selDataset')
  // Populate dropdown menu option
  d3.json('static/data/games.json').then((json_data) => {
    let sampleYears = data.years
  })
}

/////// BAR CHART FUNCTION ////////

function barChart() {
  // Read in data with JSON
  d3.json('/data').then((json_data) => {
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
    let sampleGenre = []
    let sampleRank = []
    // Loop through 100
    for (let i = 0; i <= 49; i++) {
      sampleGenre.push(data[i].genre)
      sampleRank.push(data[i].rank)
    }
    // Setting Values for pie chart
    let pieValues = sampleGenre.slice(0, 10)
    // Setting Data points
    let pieData = [
      {
        values: sampleRank,
        labels: pieValues,
        type: 'pie',
        hole: 0.4,
        textinfo: 'label+percent',
        textposition: 'outside',
        automargin: true,
        plot_bgcolor: 'black',
        paper_bgcolor: '#0d0d0d',
        marker: {
          colors: [
            '#002047',
            '#084081',
            '#0868ac',
            '#2b8cbe',
            '#4eb3d3',
            '#7bccc4',
            '#a8ddb5',
            '#ccebc5',
            '#e0f3db',
            '#f7fcf0',
          ],
        },
      },
    ]

    let pieLayout = {
      height: 400,
      width: 600,
      margin: { t: 90, b: 50, l: 0, r: 0, pad: 4 },
      title: {
        text: 'Top Played Genres',
      },
      showlegend: true,
      plot_bgcolor: 'black',
      paper_bgcolor: '#0d0d0d',
      font: {
        color: 'white',
        family: 'Roboto, san-serif',
      },
    }

    Plotly.newPlot('pie', pieData, pieLayout)
  })
}
/////// LINE GRAPH FUNCTION ////////

function lineChart() {
  d3.json('../json/salesByYear.json').then((json_years) => {
    let year_data = json_years
    // Grab specific variables
    let sampleGlobalSales = []
    let sampleNASales = []
    let sampleEUSales = []
    let sampleJPSales = []
    let sampleYear = []

    // Loop through 50
    for (let i = 0; i <= 4; i++) {
      sampleGlobalSales.push(year_data[i].global_sales)
      sampleNASales.push(year_data[i].na_sales)
      sampleEUSales.push(year_data[i].eu_sales)
      sampleJPSales.push(year_data[i].jp_sales)
      sampleYear.push(year_data[i].year)
    }

    var GLOBAL = {
      x: sampleYear,
      y: sampleGlobalSales,
      type: 'scatter',
    }

    var NA = {
      x: sampleYear,
      y: sampleNASales,
      type: 'scatter',
    }

    var EU = {
      x: sampleYear,
      y: sampleEUSales,
      type: 'scatter',
    }

    var JP = {
      x: sampleYear,
      y: sampleJPSales,
      type: 'scatter',
    }

    var salesData = [GLOBAL, NA, EU, JP]

    var lineLayout = {
      height: 400,
      width: 600,
      title: {
        text: 'Sales by Region',
      },
      // showlegend: true,
      plot_bgcolor: 'black',
      paper_bgcolor: '#0d0d0d',
      font: {
        color: 'white',
        family: 'Roboto, san-serif',
      },
      margin: {
        pad: 2,
      },
    }

    Plotly.newPlot('line', salesData, lineLayout)
  })
}

/////// CAROUSEL FUNCTION ////////

function carousel() {}

/////// INITIALIZING ALL FUNCTIONS TO RUN ////////

init()
