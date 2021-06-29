
// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================
Chart.plugins.register({
    afterUpdate: function(chart) {
        var dataset = chart.config.data.datasets[0];
        var offset = 0;
        for (var i = 0; i < dataset.data.length; i++) {
            var model = dataset._meta[0].data[i]._model;
            model.x += offset;
            model.controlPointNextX += offset;
            model.controlPointPreviousX += offset;
        }
    }
});
var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(4, 155, 215, 1);

gradient.addColorStop(0, 'rgba(4, 155,215, 0.07)');


var data  = {
    labels: [ 'Dec 01', 'Dec 13', 'Dec 25', 'Jan 05', 'Jan 17' ],
    datasets: [{
      label: '',
      backgroundColor: gradient,
      pointBackgroundColor: '#0296D0',
      borderWidth: 2,
      borderColor: '#049BD7',
      // boxshadow:'0px 4px 4px rgba(0, 0, 0, 0.25) inset',
      data: [37, 37, 100, 42, 80]
    }]
};


var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: 'easeInOutQuad',
    duration: 520
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: '#C3D8E0',
        lineWidth: 1
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 10,
                min:0,
                max: 200,
               
            }
    }]
  },
  elements: {
    line: {
      tension: 0.4
    }
  },
  legend: {
    display: false
  },
  point: {
    backgroundColor: 'white'
  },
  tooltips: {
    titleFontFamily: 'Quicksand',
    backgroundColor: '#0296D0',
    titleFontColor: 'white',
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10
  }
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
    options: options
});