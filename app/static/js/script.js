function init() {
  let firstRegion = "na_sales"
  barChart(firstRegion)
  pieChart(firstRegion)
  lineChart()
  carousel()
  // Dropdown menu event handler ID
  //const selector = d3.select('#selDataset')
  // Populate dropdown menu option
  //d3.json('static/data/games.json').then((json_data) => {
    //let sampleYears = data.years
  //})
}

/////// BAR CHART FUNCTION ////////

function barChart(region) {
  // Query the SQL Database for Data
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
    let regionName = ""
    // Loop through 100
    for (let i = 0; i <= 49; i++) {
      sampleData.push(data[i])
      sampleRank.push(data[i].rank)
      sampleNames.push(data[i].name)
      samplePublishers.push(data[i].publisher)
      sampleGenre.push(data[i].genre)
      samplePlatform.push(data[i].platform)
      if (region == 'na_sales') {
        sampleSales.push(data[i].na_sales)
        regionName = 'North America'
      }
      else if (region == 'eu_sales') {
        sampleSales.push(data[i].eu_sales)
        regionName = 'Europe'
      }
      else if (region == 'jp_sales') {
        sampleSales.push(data[i].jp_sales)
        regionName = 'Japan'
      }
      else if ( region == 'other_sales') {
        sampleSales.push(data[i].other_sales)
        regionName = 'Other'
      }
      else if ( region == 'global_sales') {
        sampleSales.push(data[i].global_sales)
        regionName = 'Global'
      }
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
      width: 600,
      height: 400,
      title: `${regionName} Sales Data`,
      xaxis: { title: 'Game Rank' },
      yaxis: { title: `${regionName} Sales ($)` },
      hovermode: sampleNames,
      plot_bgcolor: '#111111',
      paper_bgcolor: '#111111',
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

function pieChart(region) {
  // Query the SQL Database for Data
  d3.json('/data').then((json_data) => {
    // Grab json data
    let data = json_data
    let sampleGenre = []
    let sampleSales = []
    let regionName = ""
    // Loop through 100
    for (let i = 0; i <= 49; i++) {
      sampleGenre.push(data[i].genre)
      
      if (region == 'na_sales') {
        sampleSales.push(data[i].na_sales)
        regionName = 'North America'
      }
      else if (region == 'eu_sales') {
        sampleSales.push(data[i].eu_sales)
        regionName = 'Europe'
      }
      else if (region == 'jp_sales') {
        sampleSales.push(data[i].jp_sales)
        regionName = 'Japan'
      }
      else if ( region == 'other_sales') {
        sampleSales.push(data[i].other_sales)
        regionName = 'Other'
      }
      else if ( region == 'global_sales') {
        sampleSales.push(data[i].global_sales)
        regionName = 'Global'
      }
    }
    // Setting Values for pie chart
    let pieValues = sampleGenre.slice(0, 10)
    // Setting Data points
    let pieData = [
      {
        values: sampleSales,
        labels: pieValues,
        type: 'pie',
        hole: 0.4,
        textinfo: 'label+percent',
        textposition: 'outside',
        automargin: true,
        plot_bgcolor: 'black',
        paper_bgcolor: '#111111',
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
        text: `Top Played Genres in Region: ${regionName}`,
      },
      showlegend: true,
      plot_bgcolor: 'black',
      paper_bgcolor: '#111111',
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

  let sampleYears = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2020]
  let sampleNASales = [608.48, 482.00, 309.86, 309.54, 263.94, 205.64, 45.32, 0.00, 0.54]
  let sampleEUSales = [353.14, 334.62, 237.52, 251.60, 254.26, 195.42, 53.52, 0.00, 0.00]
  let sampleJPSales = [118.98, 106.08, 95.18, 78.92, 67.44, 27.34, 0.10, 0.00]
  let sampleOtherSales = [119.80, 108.78, 75.64, 79.64, 80.04, 60.02, 15.50, 0.00, 0.04]
  let sampleGlobalSales = [1200.40, 1031.48, 726.50, 674.16, 528.52, 141.68]

  var GLOBAL = {
    x: sampleYears,
    y: sampleGlobalSales,
    type: 'scatter',
    name: 'Global',
  }

  var NA = {
    x: sampleYears,
    y: sampleNASales,
    type: 'scatter',
    name: 'NA America Sales',
  }

  var EU = {
    x: sampleYears,
    y: sampleEUSales,
    type: 'scatter',
    name: 'EU Sales',
  }

  var JP = {
    x: sampleYears,
    y: sampleJPSales,
    type: 'scatter',
    name: 'JP Sales',
  }

  var OTHER = {
    x: sampleYears,
    y: sampleOtherSales,
    type: 'scatter',
    name: 'Other',
  }

  var salesData = [GLOBAL, NA, EU, JP, OTHER]

  var lineLayout = {
    height: 400,
    width: 600,
    title: {
      text: 'Sales by Region',
    },
    // showlegend: true,
    plot_bgcolor: '#111111',
    paper_bgcolor: '#111111',
    font: {
      color: 'white',
      family: 'Roboto, san-serif',
    },
    margin: {
      pad: 2,
    },
  }

  Plotly.newPlot('line', salesData, lineLayout)
}

/////// DROPDOWN FUNCTION ////////
function optionChanged(newRegion) {
  // Fetch new data each time a new sample is selected
  barChart(newRegion)
  pieChart(newRegion)
};
/////// CAROUSEL FUNCTION ////////

function carousel() {
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
}
/////// INITIALIZING ALL FUNCTIONS TO RUN ////////




init()
