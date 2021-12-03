function init() {
  let firstRegion = 'na_sales'
  barChart(firstRegion)
  pieChart()
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
    var regionName = ''
    // Loop through 50
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
      } else if (region == 'eu_sales') {
        sampleSales.push(data[i].eu_sales)
        regionName = 'Europe'
      } else if (region == 'jp_sales') {
        sampleSales.push(data[i].jp_sales)
        regionName = 'Japan'
      } else if (region == 'other_sales') {
        sampleSales.push(data[i].other_sales)
        regionName = 'Other'
      } else if (region == 'global_sales') {
        sampleSales.push(data[i].global_sales)
        regionName = 'Global'
      }
    }
    let xticks = sampleRank
      .map((x) => +x)
      .slice(0, 50)
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
          color: [
            '#274472',
            '#41729F',
            '#665191',
            '#a05195',
            '#d45087',
            '#f95d6a',
            '#DF362D',
            '#ff7c43',
            '#ffa600',
            '#ECF87F',
            '#274472',
            '#41729F',
            '#665191',
            '#a05195',
            '#d45087',
            '#f95d6a',
            '#DF362D',
            '#ff7c43',
            '#ffa600',
            '#ECF87F',
            '#274472',
            '#41729F',
            '#665191',
            '#a05195',
            '#d45087',
            '#f95d6a',
            '#DF362D',
            '#ff7c43',
            '#ffa600',
            '#ECF87F',
            '#274472',
            '#41729F',
            '#665191',
            '#a05195',
            '#d45087',
            '#f95d6a',
            '#DF362D',
            '#ff7c43',
            '#ffa600',
            '#ECF87F',
            '#274472',
            '#41729F',
            '#665191',
            '#a05195',
            '#d45087',
            '#f95d6a',
            '#DF362D',
            '#ff7c43',
            '#ffa600',
            '#ECF87F',
          ],
        },
      },
    ]
    let barLayout = {
      width: 800,
      height: 400,
      title: `${regionName} Sales Data`,
      xaxis: { title: 'Game Rank' },
      yaxis: { title: `${regionName} Sales ($)` },
      hovermode: sampleNames,
      plot_bgcolor: 'black',
      paper_bgcolor: '#0d0d0d',
      font: {
        color: 'white',
        family: 'Roboto, san-serif',
      },
    }
    Plotly.newPlot('bar', barData, barLayout)
  })
}

/////// PIE CHART FUNCTION ////////

function pieChart() {
  d3.json('/data').then((json_data) => {
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
            '#274472',
            '#41729F',
            '#665191',
            '#a05195',
            '#d45087',
            '#f95d6a',
            '#DF362D',
            '#ff7c43',
            '#ffa600',
            '#ECF87F',
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
  d3.json('/linedata').then((json_data) => {
    let data = json_data

    let sampleYear = []
    let sampleNASales = []
    let sampleEUSales = []
    let sampleJPSales = []
    let sampleOtherSales = []
    let sampleGlobalSales = []
    let sampleSales = []
    let regionName = ''

    for (let i = 0; i <= 8; i++) {
      sampleYear.push(data[i].year)
      sampleNASales.push(data[i].na_sales)
      sampleEUSales.push(data[i].eu_sales)
      sampleJPSales.push(data[i].jp_sales)
      sampleOtherSales.push(data[i].other_sales)
      sampleGlobalSales.push(data[i].global_sales)
    }

    var trace1 = {
      x: sampleYear,
      y: sampleNASales,
      type: 'scatter',
      name: 'NA Sales',
      marker: {
        color: '#ffa600',
      },
    }

    var trace2 = {
      x: sampleYear,
      y: sampleEUSales,
      type: 'scatter',
      name: 'EU Sales',
      marker: {
        color: '#274472',
      },
    }

    var trace3 = {
      x: sampleYear,
      y: sampleJPSales,
      type: 'scatter',
      name: 'JP Sales',
      marker: {
        color: '#d45087',
      },
    }

    var trace4 = {
      x: sampleYear,
      y: sampleOtherSales,
      type: 'scatter',
      name: 'Other Sales',
      marker: {
        color: '#DF362D',
      },
    }

    var trace5 = {
      x: sampleYear,
      y: sampleGlobalSales,
      type: 'scatter',
      name: 'Global Sales',
      marker: {
        color: '#ECF87F',
      },
    }

    let lineData = [trace1, trace2, trace3, trace4, trace5]

    let lineLayout = {
      width: 600,
      height: 400,
      title: `${regionName} Sales Data`,
      xaxis: { title: 'Year' },
      yaxis: { title: `${regionName} Sales Data ($)` },
      hovermode: sampleSales,
      plot_bgcolor: 'black',
      paper_bgcolor: '#0d0d0d',
      showlegend: true,
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
    Plotly.newPlot('line', lineData, lineLayout)
  })
}

/////// DROPDOWN FUNCTION ////////
function optionChanged(newRegion) {
  // Fetch new data each time a new sample is selected
  barChart(newRegion)
  pieChart(newRegion)
}
/////// CAROUSEL FUNCTION ////////

function carousel() {
  var owl = $('.owl-carousel')
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  })
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [2000])
  })
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
  })
}
/////// INITIALIZING ALL FUNCTIONS TO RUN ////////

init()
