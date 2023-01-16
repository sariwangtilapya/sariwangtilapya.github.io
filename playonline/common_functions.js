function write_menu(selected_idx) {
  var str = "\
    <div id='header'>\
        <h1><b>Play Super Master Mind online</b></h1>\
        <h2><b><font color='#333333'>Mastermind & code breaker games</font></b></h2>\
      <div id='menubar'>\
        <ul id='menu'>\
          <!-- put class='selected' in the li tag for the selected page - to highlight which page you're on -->";
  switch (selected_idx) {
    case 1:
      str = str + "\
              <li><a href='index.html'><span style='font-weight: normal;'>&#127922;</span>&#x2009;Game</a></li>\
              <li><a href='optimal_strategy.html'><span style='font-weight: normal;'>&#x1F9E9;</span>&#x2009;Optimal strategy</a></li>\
              <li class='selected'><a href='screenshots.html'><b><span style='font-weight: normal;'>&#x1F5BC;&#xFE0F;</span>&#x2009;Screenshots</b></a></li>\
              <li><a href='contact_info.html'><span style='font-weight: normal;'>&#x1F4E7;</span>&#x2009;Contact</a></li>";
      break;
    case 2:
      str = str + "\
              <li><a href='index.html'><span style='font-weight: normal;'>&#127922;</span>&#x2009;Game</a></li>\
              <li class='selected'><a href='optimal_strategy.html'><b><span style='font-weight: normal;'>&#x1F9E9;</span>&#x2009;Optimal strategy</b></a></li>\
              <li><a href='screenshots.html'><span style='font-weight: normal;'>&#x1F5BC;&#xFE0F;</span>&#x2009;Screenshots</a></li>\
              <li><a href='contact_info.html'><span style='font-weight: normal;'>&#x1F4E7;</span>&#x2009;Contact</a></li>";
      break;
    case 3:
      str = str + "\
              <li><a href='index.html'><span style='font-weight: normal;'>&#127922;</span>&#x2009;Game</a></li>\
              <li><a href='optimal_strategy.html'><span style='font-weight: normal;'>&#x1F9E9;</span>&#x2009;Optimal strategy</a></li>\
              <li><a href='screenshots.html'><span style='font-weight: normal;'>&#x1F5BC;&#xFE0F;</span>&#x2009;Screenshots</a></li>\
              <li class='selected'><a href='contact_info.html'><b><span style='font-weight: normal;'>&#x1F4E7;</span>&#x2009;Contact</b></a></li>";
      break;
    default:
      str = str + "\
              <li class='selected'><a href='index.html'><b><span style='font-weight: normal;'>&#127922;</span>&#x2009;Game</b></a></li>\
              <li><a href='optimal_strategy.html'><span style='font-weight: normal;'>&#x1F9E9;</span>&#x2009;Optimal strategy</a></li>\
              <li><a href='screenshots.html'><span style='font-weight: normal;'>&#x1F5BC;&#xFE0F;</span>&#x2009;Screenshots</a></li>\
              <li><a href='contact_info.html'><span style='font-weight: normal;'>&#x1F4E7;</span>&#x2009;Contact</a></li>";
  }
  str = str + "\
        </ul>\
      </div>\
    </div>";
  document.write(str);
}

function write_sidebar() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var d = new Date();
  var month_and_year_str = '(' + month[d.getMonth()] + ' ' + d.getFullYear() + ')';

  document.write("\
    <div class='sidebar'>\
      <h1 style='margin-top:0'>History</h1>\
      <b>Current version: 4.0<br>"
      + month_and_year_str +
      "</b><br><br>\
      Version 4.0<br>\
      optimal strategy optimizations<br><br>\
      Version 3.0<br>\
      optimal strategy assessed for a great proportion of Super Master Mind games (5 columns, 8 colors)<br><br>\
      Version 2.0<br>\
      optimal strategy assessed for all possible Master Mind games (4 columns, 6 colors)<br><br>\
      Version 1.0<br>\
      basic gameplay, online game scores<br><br>\
      <h1>Interesting links</h1>\
      <ul>\
        <li style='margin-left:0;'><a href='https://en.wikipedia.org/wiki/Mastermind_(board_game)'>Mastermind on wikipedia</a></li>\
        <li style='margin-left:0;margin-top:0;'><a href='https://wearethemutants.com/2017/03/27/cunning-and-logic-the-international-imagery-of-mastermind/'>The international imagery of Mastermind</a></li>\
        <li style='margin-left:0;'><a href='http://mathworld.wolfram.com/Mastermind.html'>Mastermind strategies</a></li>\
      </ul>\
      <h1>Android app</h1>\
      Get it on Google Play:<br>\
      <a href='https://play.google.com/store/apps/details?id=supermastermind.github.io'>\
      <img alt='Get it on Google Play' style='width:5.0rem;margin-top:0.5rem;margin-bottom:0.5rem' src='img/Playstore_icon.png'/></a><br>\
    </div>");
}

function write_introduction() {
  document.write("\
    <a href='game.html' onfocus='this.blur()'>\
      <div id='game_images'>");
  var img_str = "<hr style='height:0.75vh; visibility:hidden;' /><img src='img/SuperMasterMind_1.png' style='width:4.5rem;border:0;margin:0px'><img src='img/SuperMasterMind_2.png' style='width:4.5rem;border:0;margin:0px'><img src='img/SuperMasterMind_3.png' style='width:4.5rem;border:0;margin:0px'>";
  if (window.innerWidth >= 360) {
    img_str = img_str + "<img src='img/SuperMasterMind_5.png' style='width:4.5rem;border:0;margin:0px'>";
  }
  if (window.innerWidth >= 500) {
    // img_str = img_str + "<img src='img/SuperMasterMind_4.png' style='width:4.5rem;border:0;margin:0px'>";
  }
  document.write(img_str);
  document.write("\
      </div>\
    </a>");
}

var optimal_strategy_descr = "The optimal strategy is determined thanks to a recursive algorithm which goes through all possible games (enumeration of all games with some &quot;equivalent games&quot; tricks for optimization). The goal of this algorithm is to minimize the average number of attempts to find secret codes, all secret codes having the same weight (i.e. same probability to be selected).<br>In this algorithm, only the possible/logical codes are considered at each stage of the game. ";

function write_optimal_strategy_details_1() {
  var str = "<div id='strategy_details' onclick=\"document.getElementById('strategy_details').innerHTML='" + optimal_strategy_descr + "In some situations, playing an impossible/illogical code may be better than playing the best possible/logical code(s)! This could be called a &quot;useful mistake&quot;. ";
  str += "This will thus result in the above number being strictly positive (e.g. <b>+0.25</b>). If you get such a positive number (voluntarily), you are good!<br><div style=margin-top:5px;><a href=optimal_strategy.html><b>Optimal strategy & tricks to play optimally</b></a></div>';\"><font color=#A4AA04 style=cursor:pointer;><u><b>More details on the optimal strategy...</b></u></font></div><div style='margin-top:5px;'><a href=screenshots.html><b>Game examples & screenshots</b></a></div>";
  document.write(str);
}

function write_optimal_strategy_details_2() {
  document.write(optimal_strategy_descr + "This strategy could thus be called the <b><font color=#CC0099>optimal logical strategy</font></b>.<hr style='height:0.75vh; visibility:hidden;' />Other strategies exist which also allow playing impossible/illogical codes at each stage of the game (in addition to the possible/logical codes). \"Mathematically optimal strategies\" are among them, but processing times to fully evaluate them can be very long (especially for Super Master Mind games). They offer slightly better statistics than the <b><font color=#CC0099>optimal logical strategy</font></b> (some comparison is made in this page).");
}
