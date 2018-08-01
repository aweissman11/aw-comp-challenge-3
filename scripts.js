

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
 };

var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}


function createCustomHTMLContent(dayOfWeek, date, applicantTotal, interviewTotal) {
  return '<p class="tool-tip">' + dayOfWeek + ', July ' 
          + date + ', 2018<br /><span class="applicant-total">' + applicantTotal 
          + '</span> Applicants / <span class="interview-total">' 
          + interviewTotal + '</span> Interviews</p>';
}

var jmediaqueryMobile = window.matchMedia( "(max-width: 654px)" );
jmediaqueryMobile.addListener(handleOrientationChange);
handleOrientationChange(jmediaqueryMobile);

function handleOrientationChange(jmediaqueryMobile) {
    if (jmediaqueryMobile.matches) {
        console.log('works');
        var sidebarDiv = $('.sidebar');
        var mainSection = $('main');
        var sidebarGroup = $('.sidebar-group');
        var sidebarGroupHeader = $('.sidebar-group-header');
        var hoverDiv = $('.hover-div');
        var sidebarToggle = $('button.sidebar-toggle');
        var graphVar = $('.graph');
        var bodyVar = $('body');
        var searchInput = $('search-input');
        sidebarDiv.css('width', '100%');
        sidebarDiv.css('display', 'block');
        sidebarDiv.css('position', 'static');
        sidebarDiv.css('height', '100%');
        sidebarDiv.css('margin', '0');
        mainSection.css('margin-left', '0');
        sidebarGroup.css('display', 'flex');
        sidebarGroup.css('flex-wrap', 'wrap');
        sidebarGroup.css('flex-direction', 'row');
        sidebarGroup.css('justify-content', 'center');
        sidebarGroupHeader.css('margin', '10px auto');
        sidebarGroupHeader.css('text-align', 'center');
        sidebarGroupHeader.css('width', '100%');
        sidebarGroupHeader.css('color', '#7f89ac')
        hoverDiv.css('display', 'flex');
        hoverDiv.css('justify-content', 'center');
        sidebarToggle.css('display', 'none');
        sidebarToggle.css('width', '80px');
        graphVar.css('width', '200%');
        bodyVar.css('display', 'grid');
        bodyVar.css('grid-template-columns', '1fr');
        bodyVar.css('width', '100vw');
        searchInput.css('min-width', '80px');
        searchInput.css('max-width', '50%');
        sidedbarOut = !sidedbarOut;
        // Window width is less than 653px
    } else {
        var bodyVar = $('body');
        var mainSection = $('main');
        var sidebarDiv = $('.sidebar');
        var sidebarGroup = $('.sidebar-group');
        var sidebarGroupHeader = $('.sidebar-group-header');
        var hoverDiv = $('.hover-div');
        var sidebarToggle = $('button.sidebar-toggle');
        var graphVar = $('.graph');
        var searchInput = $('search-input');
        bodyVar.css('display', 'block');
        bodyVar.css('margin', '0');
        //come back to this one
        bodyVar.css('width', '100vw');
        mainSection.css('margin-left', '200px');
        sidebarDiv.css('width', '200px');
        sidebarDiv.css('position', 'absolute');
        sidebarDiv.css('z-index', '1');
        sidebarDiv.css('top', '0');
        sidebarDiv.css('left', '0');
        sidebarDiv.css('bottom', '0');
        sidebarGroup.css('flex-wrap', 'nowrap');
        sidebarGroup.css('flex-direction', 'column');
        sidebarGroup.css('justify-content', 'flex-start');
        sidebarGroupHeader.css('margin', '30px 15px 10px');
        sidebarGroupHeader.css('text-align', 'left');
        hoverDiv.css('display', 'block');
        sidebarToggle.css('display', 'block');
        sidebarToggle.css('width', '80px');
        graphVar.css('width', '400px');
        searchInput.css('min-width', '100%');
        navControlSide();
    }
}

var sidedbarOut = false;

function navControlSide() {
    var sidebarDiv = $('.sidebar');
    var mainSection = $('main');
    if (sidedbarOut == false) {
        sidebarDiv.css('width', '0');
        mainSection.css('margin-left', '0');
        sidebarDiv.css('display', 'none');
        sidedbarOut = !sidedbarOut;        
    } else {
        sidebarDiv.css('width', '200px');
        sidebarDiv.css('display', 'block');
        mainSection.css('margin-left', '200px');
        sidedbarOut = !sidedbarOut;
    }
}






















