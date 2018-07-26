    



    // // Load the Visualization API and the corechart package.
    // google.charts.load('visualization', 'current', {'packages':['corechart']});

    // // Set a callback to run when the Google Visualization API is loaded.
    // google.charts.setOnLoadCallback(drawChart);

    // // Callback that creates and populates a data table,
    // // instantiates the pie chart, passes in the data and
    // // draws it.
    // function drawChart() {

    //   // Create the data table.
    //   var data = new google.visualization.DataTable();
    //   data.addColumn('string', 'Topping');
    //   data.addColumn('number', '');
    //   data.addRows([
    //     ['S', 20],
    //     ['M', 220],
    //     ['T', 290],
    //     ['W', 360],
    //     ['T', 190],
    //     ['F', 210],
    //     ['S', 100],
    //     ['S', 20],
    //     ['M', 310],
    //     ['T', 370],
    //     ['W', 215],
    //     ['T', 195],
    //     ['F', 120],
    //     ['S', 75],
    //   ]);

    //   // Set chart options
    //   var options = {'title':'How Much Pizza I Ate Last Night',
    //                  // 'width':350,
    //                  // 'height':180,
    //                  'legend': 'none',
    //                 };

    //   // Instantiate and draw our chart, passing in some options.
    //   var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    //   chart.draw(data, options);
    // }

    // $(window).resize(function(){
    //   drawChart();
    // });


    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart1);
    function drawChart1() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales'],
            ['S', 20],
            ['M', 220],
            ['T', 290],
            ['W', 360],
            ['T', 190],
            ['F', 210],
            ['S', 100],
            ['S', 20],
            ['M', 310],
            ['T', 370],
            ['W', 215],
            ['T', 195],
            ['F', 120],
            ['S', 75],
      ]);

      var options = {
        'legend': 'none',
     };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
      chart.draw(data, options);
    }

    $(window).resize(function(){
      drawChart1();
    });