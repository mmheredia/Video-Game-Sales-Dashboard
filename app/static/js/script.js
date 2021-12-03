function init() {
  let firstRegion = "na_sales"
  barChart(firstRegion)
  pieChart(firstRegion)
  lineChart()
  carousel()
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

function pieChart(region) {
  // Read in data with JSON
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
        text: `Top Played Genres in Region: ${regionName}`,
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
    let regionName = ""

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
      type: 'scatter'
    };

    var trace2 = {
      x: sampleYear,
      y: sampleEUSales,
      type: 'scatter'
    };

    var trace3 = {
      x: sampleYear,
      y: sampleJPSales,
      type: 'scatter'
    };

    var trace4 = {
      x: sampleYear,
      y: sampleOtherSales,
      type: 'scatter'
    };

    var trace5 = {
      x: sampleYear,
      y: sampleGlobalSales,
      type: 'scatter'
    };
    
    let lineData = [trace1, trace2, trace3, trace4, trace5];

    let lineLayout = {
      width: 600,
      height: 400,
      title: `${regionName} Sales Data`,
      xaxis: { title: 'Year' },
      yaxis: { title: `${regionName} Sales Data ($)` },
      hovermode: sampleSales,
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
    Plotly.newPlot('line', lineData, lineLayout)
  })
}

/////// DROPDOWN FUNCTION ////////
function optionChanged(newRegion) {
  // Fetch new data each time a new sample is selected
  barChart(newRegion)
  pieChart(newRegion)
};
/////// CAROUSEL FUNCTION ////////

function carousel() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:4,
      loop:true,
      margin:15,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[2000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  })
}
/////// INITIALIZING ALL FUNCTIONS TO RUN ////////

init()