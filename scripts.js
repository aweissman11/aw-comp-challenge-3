
    
    var day1 = createCustomHTMLContent('Sunday', '22nd', 20, 2);
    var day2 = createCustomHTMLContent('Monday', '23rd', 220, 22);
    var day3 = createCustomHTMLContent('Tuesday', '24th', 290, 29);
    var day4 = createCustomHTMLContent('Wednesday', '25th', 360, 36);
    var day5 = createCustomHTMLContent('Thursday', '26th', 190, 19);
    var day6 = createCustomHTMLContent('Friday', '27th', 210, 21);
    var day7 = createCustomHTMLContent('Saturday', '28th', 100, 10);    
    var day8 = createCustomHTMLContent('Sunday', '22nd', 20, 2);
    var day9 = createCustomHTMLContent('Monday', '23rd', 220, 22);
    var day10 = createCustomHTMLContent('Tuesday', '24th', 290, 29);
    var day11 = createCustomHTMLContent('Wednesday', '25th', 360, 36);
    var day12 = createCustomHTMLContent('Thursday', '26th', 190, 19);
    var day13 = createCustomHTMLContent('Friday', '27th', 210, 21);
    var day14 = createCustomHTMLContent('Saturday', '28th', 100, 10);

    google.load("visualization", "1", {packages:["corechart"]});
    google.setOnLoadCallback(drawChart1);
    function drawChart1() {
      var data = google.visualization.arrayToDataTable([
        ['Day', 'applicants', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}, 'stack', {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
            ['S', 20, day1, 480, '<p style="display: none"></p>'],
            ['M', 220, day2, 280, '<p style="display: none"></p>'],
            ['T', 290, day3, 210, '<p style="display: none"></p>'],
            ['W', 360, day4, 140, '<p style="display: none"></p>'],
            ['T', 190, day5, 310, '<p style="display: none"></p>'],
            ['F', 210, day6, 290, '<p style="display: none"></p>'],
            ['S', 100, day7, 400, '<p style="display: none"></p>'],
            ['S', 20, day8, 480, '<p style="display: none"></p>'],
            ['M', 310, day9, 190, '<p style="display: none"></p>'],
            ['T', 370, day10, 130, '<p style="display: none"></p>'],
            ['W', 215, day11, 285, '<p style="display: none"></p>'],
            ['T', 195, day12, 305, '<p style="display: none"></p>'],
            ['F', 120, day13, 380, '<p style="display: none"></p>'],
            ['S', 75, day14, 425, '<p style="display: none"></p>'],
      ]);

      var options = {
        legend: { position: 'none' },
        colors: ['#4DBAC0', '#D9E4EA'],
        backgroundColor: {fill: '#ECF2F6', strokeWidth: 0},
        chartArea: {left: 40, right: 0 },
        fontSize: '10',
        fontName: 'Open sans',
        tooltip: {isHtml: true},
        bar: {groupWidth: "45%"},
        isStacked: true,
        vAxis: { format: 'decimal', ticks: [ 0, 100, 200, 300, 400, 500 ]},
        // vAxis: { gridlines.units: { 0, 100, 200, 300, 400, 500 } },
     };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
      chart.draw(data, options);
    }


    function createCustomHTMLContent(dayOfWeek, date, applicantTotal, interviewTotal) {
      return '<p class="tool-tip">' + dayOfWeek + ', July ' 
      + date + ', 2018<br /><span class="applicant-total">' + applicantTotal 
      + '</span> Applicants / <span class="interview-total>' 
      + interviewTotal + '</span> Interviews</p>'
    }

      $('.icon-text').mouseenter(hoverEffects);
    function hoverEffects() {
        $( event.target ).closest('.icon-text').css("color", "#FFFFFF");
        $( event.target ).children().css("color", "#FFFFFF");
        $( event.target ).parent().css("border-left", "solid #26A6F7");
        $( event.target ).parent().css( "background-color", "#303949");
      }
    
      $('.icon-text').mouseout(hoverEffectsOff);
    function hoverEffectsOff() {
        $( event.target ).closest('.icon-text').css("color", "#A1ABBE");
        $( event.target ).children().css("color", "#A1ABBE");
        $( event.target ).parent().css("border-left", "none");
        $( event.target ).parent().css( "background-color", "#354052");
      }
    


    $(document).ready(function(){
      drawChart1();

    });
