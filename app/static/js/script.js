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

  console.log('barchart test');
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

    let sampleGlobalSales = [1200.40, 1031.48, 726.50, 674.16, 528.52, 141.68]
    let sampleNASales = [608.48, 482.00, 309.86, 309.54, 263.94, 205.64, 45.32, 0.00, 0.54]
    let sampleEUSales = [353.14, 334.62, 237.52, 251.60, 254.26, 195.42, 53.52, 0.00, 0.00]
    let sampleJPSales = [118.98, 106.08, 95.18, 78.92, 67.44, 27.34, 0.10, 0.00]
    let sampleOtherSales = [119.80, 108.78, 75.64, 79.64, 80.04, 60.02, 15.50, 0.00, 0.04]

    var GLOBAL = {
      x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2020],
      y: sampleGlobalSales,
      type: 'scatter',
    }

    var NA = {
      x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2020],
      y: sampleNASales,
      type: 'scatter',
    }

    var EU = {
      x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2020],
      y: sampleEUSales,
      type: 'scatter',
    }

    var JP = {
      x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2020],
      y: sampleJPSales,
      type: 'scatter',
    }

    var OTHER = {
      x: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2020],
      y: sampleOtherSales,
      type: 'scatter',
    }

    var salesData = [GLOBAL, NA, EU, JP, OTHER]

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
