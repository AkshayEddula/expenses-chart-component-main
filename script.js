let myChart = document.getElementById('myChart').getContext('2d');

let barChart = new Chart(myChart, {
    type:'bar',
    data:{
        labels:['mon','tue','wed','thu','fri','sat','sun'],
        datasets:[{
            label:'',
            data: [17.45,34.91,52.36,31.07,23.39,43.28,25.48],
            backgroundColor: 'hsl(10, 79%, 65%)',
            borderRadius:10,
            borderSkipped: false,
            hoverBackgroundColor:'hsl(186, 34%, 60%)'
        }]
    },
    options:{
        maintainAspectRatio:true,
        scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
                ticks: {
                    display: false
                },
                grid: {
                  display: false
                }
            },
          },

          plugins: {
            legend: {
                labels:{
                    boxWidth:0,
                    font: {
                        family:"'DM Sans', sans-serif",
                        size: 14
                    }
                }
            },
            tooltip:{
                backgroundColor:'hsl(25, 47%, 15%)',
                displayColors: false,
                
            }
          },

          
    }
});