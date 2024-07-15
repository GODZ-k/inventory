const usageandpurchase = document.getElementById('usageandpurchase').getContext('2d');
const chart = new Chart(usageandpurchase, {
    type: 'bar',
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Sales',
            data: [7, 6, 5, 4, 3, 2],
            backgroundColor: '#f88880',
            borderColor: '#f88880',
            borderWidth: 1,
            borderRadius: 15 // Adjust this value to control the rounding of the bars
        }, {
            label: 'Purchases',
            data: [1, 2, 3, 4, 5, 6],
            backgroundColor: '#b39ef0',
            borderColor: '#b39ef0',
            borderWidth: 1,
            borderRadius: 15 ,// Adjust this value to control the rounding of the bars
        }
    ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'bottom' // Position the legend at the bottom
            }
        }
    }
});

const stockoverviewgraph = document.getElementById('stockoverviewgraph').getContext('2d');
const stockoverviewgraphchart = new Chart(stockoverviewgraph, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' // Position the legend at the bottom
            }
        }
    }
});



// Fake data for demonstration
const sourceData = [
    { label: 0, sent: 0, received: 0 },
    { label: 1, sent: 10000, received: 200 },
    { label: 2, sent: 1000, received: 9000 },
    { label: 3, sent: 10000, received: 2400 },
    { label: 4, sent: 1030, received: 2300 },
    { label: 5, sent: 0, received: 3300 },
    { label: 6, sent: 1300, received: 20330 },
    { label: 7, sent: 1003, received: 2003 }
  ];
  
  // Access the canvas element
  const paymentOverviewGraph = document.getElementById("payment-overview-graph");
  
  // Configure the Chart.js chart
  const paymentOverviewGraphChart = new Chart(paymentOverviewGraph, {
    type: 'line',
    data: {
      labels: sourceData.map(data => data.label),
      datasets: [
        {
          label: "Payment Sent",
          data: sourceData.map(data => data.sent),
          backgroundColor: "transparent",
          borderColor: "#ff4c4b",
        },
        {
          label: "Payment Received",
          data: sourceData.map(data => data.received),
          backgroundColor: "transparent",
          borderColor: "#676eff",
        }
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            stepSize: 1, // Ensure ticks are spaced by 1
            callback: function(value, index, values) {
              return value; // Just return the label as is (1, 2, 3, ...)
            }
          }
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            callback: function(value, index, values) {
              return value >= 1000 ? (value / 1000) + 'k' : value; // Convert to k if >= 1000
            }
          }
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    }
  });
  