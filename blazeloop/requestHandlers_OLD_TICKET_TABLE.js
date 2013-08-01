var querystring = require("querystring");
var https = require('https');
var fs = require("fs");
var events = require("events");
var  util = require("util");
//var Quiche = require('quiche');
var moment = require('moment');

var _mysql = require('mysql');

var HOST = '192.168.223.58';
var PORT = 3306;
var MYSQL_USER = 'mysql';
var MYSQL_PASS = 'Must0ng11';
var DATABASE = 'stats';
var TABLE = 'speaker';

var mysql = _mysql.createClient({
    host: HOST,
    port: PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
});



var category = ["INSINSTALL","INSUPGRADE","HAFAIL","HACONF","HACONN","HRDWRFAIL","HRDWRCONN","HRDWRCONF","CNTCTIMPORT","CNTCTENTRY","CNTCTCONF", "EMLSMTP", "EMLCONF","EMLCONN","SMSBCKEYWORD", "SMSBCTXT","SMSBCCONF","SMSBCCONN","SMSBCCONTACT", "SMSBCOPTIN", "DSKPC","DSKMAC", "DSKCONN", "DSKCONF", "PGLICENSE", "PGTRUNKS", "PGENDPOINTS", "PGFAIL","PGTIMEOUT","PGDELAY","PGCONN","PGCONF", "PGDIALPLAN","PGSPEAKER", "PGPHONE", "PGGROUP", "GTWCONN", "GTWTRUNKS","GTWCONF","GTWSIPPEER","GTWSIPUSER", "GTWDIALPLN","PBXCONF", "PBXCONN","PBXFAIL", "HTMLCONF", "HTMLCONN", "VCELICENSE", "VCETRUNKS", "VCECONF", "VCECONN", "VCEFAIL", "TTSLICENSE", "TTSCONF", "TTSCONN", "CMPGNLICENSE", "CMPGNCONF", "CMPGNCONN", "BLZPNTCONN", "BLZPNTFAIL", "BLZPNTCONF", "BLZPNTREGISTER", "ANLGCONN", "ANLGCONF", "ANLGFAIL", "AGGCONF", "AGGFAIL", "AGGCONN"];
var description = ["New BlazeCast Installation","Upgrade to BlazeCast Servers","HA Failover did not Complete Correctly","Cannot Connect to an HA Server (Primary or Secondary)","Problem with HA Configuration","Server Hardware failure, cannot connect or ping server","Cannot access Blazecast GUI but server is running, i.e. kernel or memory errors","Problems found or changes needed to hardware or backend configuration","Issue with Contact Imports (task or manual)","Issue due to incorrect Contact entry","Issue regarding Contact configurations", "Email SMTP settings", "Issues with current Email settings","Unable to connect to customer Email","SMS keyword routing issues", "Problems relating to display or Text for SMS","SMS Configuration setup or issues","SMS Connectivity problems","SMS problems relating to Contact information", "SMS Opt-in issues or process questions", "PC Desktop client setup or problems","MAC Desktop client setup or problems", "General Desktop Connectivity issues or questions", "General problems with Desktop client configuration or questions", "Paging License requests or limits exceeded", "Issues or questions related to Paging Trunks", "Questions on Paging Endpoint or problems with Endpoints reported", "Paging Broadcasts Failing","Paging Broadcasts timeout without completing","Paging Broadcasts delays experienced","BlazeCast cannot connect to Paging Endpoints","Questions or Problems with Paging Configuration", "Paging Dial-Plan configuration and or setup","Problems reported with Paging to Speakers", "Problems reported with Paging to Phones", "Questions or Problems with Paging Groups", "Problems Connecting to Gateway configured in BlazeCast", "Setup or Questions regarding Gateway Trunk Configuration","Issues reported on Gateway Configuration in BlazeCast","Issues Connecting to Gateway SIP Peer Profile","Issues Connecting to Gateway SIP Generic User", "Correcting Dial Plan Configuration", "Issues found on PBX setup for BlazeCast","BlazeCast is unable to connect to customer PBX", "Broadcasts failing on customer PBX", "Setup or Issues in HTML Application Setup", "HTML Phones unable to connect to BlazeCast", "Voice License request or Limits exceeded", "Issues or Questions related to Voice Trunks", "Questions or Problems with Voice Configuration", "BlazeCast cannot connect to Voice Extensions/Numbers", "Voice Broadcasts are failing in BlazeCast", "TTS License request or Limits exceeded", "Questions or Problems with TTS Configuration", "BlazeCast cannot connect to TTS engine during broadcasts", "Campaign Dialing License request or Questions", "Questions or Problems discovered in Customer Campaign Dialing Configuration and Setup", "Issues with Campaign Dialing broadcast connecting and or completing", "Problems connecting to BlazePoint Speakers via the backend", "Broadcasts to BlazePoint speakers failing", "Questions or Problems with Configuration of BlazePoint Speakers", "BlazePoint Speaker(s) will not register with BlazeCast", "Problems connecting or broadcasting to Analog speakers", "Questions or Problems Configuring Analog Speakers", "Broadcasts to Analog speakers not connecting or failing", "Questions or Problems with CAP Aggregator Configuration", "CAP Aggregrator Broadcasts not starting or failing", "BlazeCast is unable to Poll CAP Aggregrator server"];
var heading = ["- INS","- HA","- HRDWR","- CNT","- EML","- SMSBC","- DSK","- PG","- GTW","- PBX","- HTML","- VC","- TTS","- CMPGN","- BLZPNT","- ANLG","- AGG"];
var reason = ["BlazeCast Install","HA","Hardware","Contacts","Email","SMS","Desktop","Paging","Gateway","PBX(3300)","HTML Application","Voice Dialing","Text to Speech","Campaign Dialing","BlazePoint Speakers","Analog Devices","CAP Aggregator"];

var customers = ["Amityville", "Adult Community", "Buckeye", "CU","Carleton", "CM -","Chelsea","College EM", "Conestoga","CTS","Darcy","Dryden", "DSBN", "Eunice","ENPQ","HL", "HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial", "MHCD", "Mitel", "Nanticoke", "NMC", "Notre Dame","OU", "UO", "Phelps", "timore", "Philemon", "Princeton", "Rayburn","SBCCD","SDCCD","San Joaquin", "Sequoia","Skokie","St Paul", "Syniverse","Switch", "TAMU","TNCDSB", "Trinity","UMAN","Vechtdal", "Vigo","Villanova","Weirton", "Westerville", "WLU","WQSB"];
var description = ["Amityville", "Adult Community","Buckeye", "Carleton","Carletonu", "Celtic Manor","WQSB Chelsea","College EM","Conestoga","CTS","WQSB Darcy","Dryden", "DSBN", "Eunice","ENPQ","HL","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial", "MHCD", "Mitel", "Nanticoke", "NMC", "Notre Dame", "Ottawa U", "U Ottawa", "Phelps", "WQSB Poltimore", "WQSB Philemon","Princeton", "Rayburn","Santa Barbara","San Diego","San Joaquin", "Sequoia", "Skokie","St Paul", "Syniverse", "Switch", "TAMU","TNCDSB", "Trinity","U Manitoba","Vechtdal", "Vigo","Villanova","Weirton", "Westerville", "Wilfrid Laurier","WQSB - Not Defined"];

var customerB = ["A&W","GE","FarmBoy","BL - Marriott","IHG", "ICSF","BeaverTails","BL - Celtic Manor","BL GE", "Doubletree","Brookstreet", "NewCrestImage", "Lucayan"];
var descriptionB = ["A&W","GE","Farm Boy","Marriott","IHG","ICSF","BeaverTails", "Celtic Manor", "GE", "Doubletree", "Brookstreet", "New Crest Image", "Grand Lucayan"];





function dateDifference(endDate, startDate) {
  var one_day=1000*60*60*24;

  var x=endDate.split("/");     
  var y=startDate.split("/");

  var date1=new Date(x[2],(x[1]-1),x[0]);  
  var date2=new Date(y[2],(y[1]-1),y[0]);
  var month1=x[1]-1;
  var month2=y[1]-1; 

  Diff=Math.ceil((date1.getTime()-date2.getTime())/(one_day));

  return Diff;

}

function convertMonth(hold_month) {
  switch(hold_month) {
            case 'Jan':
              request_month=01;
              break;
            case 'Feb':
              request_month=02;
              break;
            case 'Mar':
              request_month=03;
              break;
            case 'Apr':
              request_month=04;
              break;
            case 'May':
              request_month=05;
              break;
            case 'Jun':
              request_month=06;
              break;
            case 'Jul':
              request_month=07;
              break;
            case 'Aug':
              request_month=08;
              break;
            case 'Sep':
              request_month=09;
              break;
            case 'Oct':
              request_month=10;
              break;
            case 'Nov':
              request_month=11;
              break;
            case 'Dec':
              request_month=12;
              break;
            }

            return request_month;
}
  
function storeGraph(description, count) {
    graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
    return graphData;
}

function storeCat (description, count) {
    graphData = {"c":[{"v":description,"f":null},{"v":count,"f":null}]};
    return graphData;
}

function Start(response, postData) {
  console.log("Request handler 'Start' was called.");
      var title = "Home Page";
      var label = "BlazeLoop";
      var form = [];
      var formHeaders = new Array("Tickets");
      var top = writeTop(title, label);
      var form = writeForm(formHeaders);
    
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(top);
      for (var i = 0; i < form.length; i++) {
          var line = form[i];
          response.write(line);
          console.log(line);
      }
      response.end();
}

function Tickets(response, request) {
  console.log("request for handler 'Tickets' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  var a = 0;
  graphData.cols[0] = {"id":"","label":"ID","type":"number"};
  graphData.cols[1] = {"subject":"","label":"SUBJECT","type":"string"};
  graphData.cols[2] = {"type":"","label":"TYPE","type":"string"};
  graphData.cols[3] = {"priority":"","label":"PRIORITY","type":"string"};
  graphData.cols[4] = {"requestor":"","label":"REQUESTER","type":"string"};
  graphData.cols[5] = {"requested":"","label":"REQUESTED","type":"string"};
  graphData.cols[6] = {"updated":"","label":"UPDATED","type":"string"};
  graphData.cols[7] = {"solved":"","label":"SOLVED","type":"string"};
  graphData.cols[8] = {"status":"","label":"STATUS","type":"string"};
  graphData.cols[9] = {"assignee":"","label":"ASSIGNEE","type":"string"};
  
  mysql.query('use ' + DATABASE);
  var data = mysql.query('select * from tickets order by id DESC', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  for (var i in results) {
    var tickets = results[i];
    graphData.rows[a] = {"c":[{"v":tickets.id,"f":null},{"v":tickets.subject,"f":null},{"v":tickets.type,"f":null},{"v":tickets.priority,"f":null},{"v":tickets.requester,"f":null},{"v":tickets.requested,"f":null},{"v":tickets.updated,"f":null},{"v":tickets.solved,"f":null},{"v":tickets.status,"f":null},{"v":tickets.assignee,"f":null}]};
    a++;
  }
  response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
  });
  graph=JSON.stringify(graphData);
  response.end(graph);
  });
}

function Status(response, request) {

  var requested = 0;
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"MONTH","type":"string"};
  graphData.cols[1] = {"requested":"","label":"Requested","type":"number"};
  graphData.cols[2] = {"solved":"","label":"Solved","type":"number"};
  var a = 0; 
  
  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where requested like "Jan%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  requested = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where solved like "Jan%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"January","f":null},{"v":requested,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where requested like "Feb%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  requested = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where solved like "Feb%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"February","f":null},{"v":requested,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where requested like "Mar%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  requested = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where (solved like "Mar%") and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"March","f":null},{"v":requested,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where requested like "Apr%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  requested = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where (solved like "Apr%") and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"April","f":null},{"v":requested,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where requested like "May%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  requested = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where (solved like "May%") and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"May","f":null},{"v":requested,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where requested like "Jun%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  requested = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where (solved like "Jun%") and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"June","f":null},{"v":requested,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  

  response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
  });
  graph=JSON.stringify(graphData);
  console.log(graph);
  response.end(graph);

  });
  
}

function Compare(response, request) {

  var blazeloop = 0;
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"MONTH","type":"string"};
  graphData.cols[1] = {"blazeloop":"","label":"BlazLoop","type":"number"};
  graphData.cols[2] = {"blazeloop":"","label":"BlazeCast","type":"number"};
  var a = 0; 
  
  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject like "% - BL - %" and requested like "Jan%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  blazeloop = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject not like "% - BL - %" and requested like "Jan%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"January","f":null},{"v":blazeloop,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject like "% - BL - %" and requested like "Feb%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  blazeloop = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject not like "% - BL - %" and requested like "Feb%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"February","f":null},{"v":blazeloop,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject like "% - BL - %" and requested like "Mar%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  blazeloop = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject not like "% - BL - %" and requested like "Mar%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"March","f":null},{"v":blazeloop,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject like "% - BL - %" and requested like "Apr%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  blazeloop = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject not like "% - BL - %" and requested like "Apr%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"April","f":null},{"v":blazeloop,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject like "% - BL - %" and requested like "May%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  blazeloop = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject not like "% - BL - %" and requested like "May%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"May","f":null},{"v":blazeloop,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject like "% - BL - %" and requested like "Jun%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  blazeloop = results[0]["count(*)"];
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where subject not like "% - BL - %" and requested like "Jun%" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"June","f":null},{"v":blazeloop,"f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  

  response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
  });
  graph=JSON.stringify(graphData);
  console.log(graph);
  response.end(graph);

  });
  
}


function Priority(response, request) {
  console.log("request for handler 'Tickets' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  var a = 0;
  graphData.cols[0] = {"priority":"","label":"Priority","type":"string"};
  graphData.cols[1] = {"count":"","label":"Count","type":"number"};
  
  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where priority = "Urgent" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"Urgent","f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where priority = "High" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"High","f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where priority = "Normal" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"Normal","f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where priority = "Low" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"Low","f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  

  response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
  });
  graph=JSON.stringify(graphData);
  response.end(graph);
  });
  
}

function Type(response, request) {
  console.log("request for handler 'Tickets' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  var a = 0;
  graphData.cols[0] = {"type":"","label":"Type","type":"string"};
  graphData.cols[1] = {"count":"","label":"Count","type":"number"};
  
  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where type = "Incident" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"Incident","f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where type = "Problem" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"Problem","f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where type = "Question" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"Information","f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  });

  mysql.query('use ' + DATABASE);
  var data1 = mysql.query('SELECT count(*) from tickets where type = "Task" and id>290', function selectCb(err, results, fields) {
  if (err) {
     throw err;
     response.end();
  }
  graphData.rows[a] = {"c":[{"v":"Task","f":null},{"v":results[0]["count(*)"],"f":null}]};
  a++;
  

  response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
  });
  graph=JSON.stringify(graphData);
  response.end(graph);
  });
  
}

function Metrics(response, request) {
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"month":"","label":"Month","type":"string"};
  graphData.cols[1] = {"closing":"","label":"Avg. Days to Close/Solve","type":"number"};
  graphData.cols[2] = {"open":"","label":"Avg. Age of Open Tickets","type":"number"};
  var closingJanDays = 0;
  var closingFebDays = 0;
  var closingMarDays = 0;
  var closingAprDays = 0;
  var closingMayDays = 0;
  var closingJuneDays = 0;
  var openJanDays = 0;
  var openFebDays = 0;
  var openMarDays = 0;
  var openAprDays = 0;
  var openMayDays = 0;
  var openJuneDays = 0;
  var a = 0;
  var year = "2013"

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where (status="Closed" or status="Solved") and solved like "Jan%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var request_month = convertMonth(hold_month);
      var rDate = (request_day+"/"+request_month+"/"+year);
          
      // GET THE SOLVED DATE
      date=tickets.solved;
      var hold_month = date.substring(0,3);
      var solve_day = date.substring(4,6);
      var solve_month = convertMonth(hold_month);
      sDate = (solve_day+"/"+solve_month+"/"+year);
       
      // CALCULATE THE DAYS BETWEEN REQUEST AND SOLVE
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
    } 
    var Days = totalDays / count;
    closingJanDays = Days.toFixed(0);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where requested like "Jan%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    // GET THE CURRENT DATE
    var now = new Date();
    var mm = now.getMonth() +1;
    var nDate = now.getDate()+"/"+mm+"/"+now.getFullYear();
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var request_month = convertMonth(hold_month);
      var rDate = (request_day+"/"+request_month+"/"+year);

      // IF SOLVED GET SOVLED DATE ELSE COMPARE TO TODAY
      if (tickets.solved.length > 1) {
        //console.log(tickets.solved);
        var sdate=tickets.solved;
        var shold_month = sdate.substring(0,3);
        var solve_day = sdate.substring(4,6);
        var solve_month = convertMonth(shold_month);
        sDate = (solve_day+"/"+solve_month+"/"+year);
      } else {
        sDate = nDate;
      }
       
      // CALCULATE THE DAYS BETWEEN REQUEST AND TODAY
      //console.log ('solve date '+sDate+' request date '+rDate);
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
        
    }
    
    var Days = totalDays / count;
    var openJanDays = Days.toFixed(0);
    console.log ('Closing Jan Days '+closingJanDays+' Open Jan Days '+openJanDays);
    graphData.rows[a] = {"c":[{"v":"January","f":null},{"v":closingJanDays,"f":null},{"v":openJanDays,"f":null}]};
    a++
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where (status="Closed" or status="Solved") and solved like "Feb%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var year = "2013"
      var request_month = convertMonth(hold_month);
      var rDate = (request_day+"/"+request_month+"/"+year);
          
      // GET THE SOLVED DATE
      date=tickets.solved;
      var hold_month = date.substring(0,3);
      var solve_day = date.substring(4,6);
      var solve_month = convertMonth(hold_month);
      sDate = (solve_day+"/"+solve_month+"/"+year);
      
      // CALCULATE THE DAYS BETWEEN REQUEST AND SOLVE
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
    } 
    var Days = totalDays / count;
    closingFebDays = Days.toFixed(0);
    });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where requested like "Feb%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    // GET THE CURRENT DATE
    var now = new Date();
    var mm = now.getMonth() +1;
    var nDate = now.getDate()+"/"+mm+"/"+now.getFullYear();
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var request_month = convertMonth(hold_month);
      // var rDate = new Date(Date.parse(request_month+"/"+request_day+"/"+year, "mm/dd/yyyy"));
      var rDate = (request_day+"/"+request_month+"/"+year);
      
      // IF SOLVED GET SOVLED DATE ELSE COMPARE TO TODAY
      if (tickets.solved.length > 1) {
        var sdate=tickets.solved;
        var shold_month = sdate.substring(0,3);
        var solve_day = sdate.substring(4,6);
        var solve_month = convertMonth(shold_month);
        sDate = (solve_day+"/"+solve_month+"/"+year);
      } else {
        console.log ('FEB - GOT HERE '+nDate+ ' FOR REQUEST DATE '+rDate);
        sDate = nDate;
      }

      // CALCULATE THE DAYS BETWEEN REQUEST AND TODAY
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
        
    }
    
    var Days = totalDays / count;
    var openFebDays = Days.toFixed(0);
    console.log ('Closing Feb Days '+closingFebDays+' Open Feb Days '+openFebDays);
    graphData.rows[a] = {"c":[{"v":"February","f":null},{"v":closingFebDays,"f":null},{"v":openFebDays,"f":null}]};
    a++
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where (status="Closed" or status="Solved") and solved like "Mar%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var request_month = convertMonth(hold_month);
      var rDate = (request_day+"/"+request_month+"/"+year);
      //console.log('Request Date: '+rDate);
      //console.log(rDate)
          
      // GET THE SOLVED DATE
      date=tickets.solved;
      var hold_month = date.substring(0,3);
      var solve_day = date.substring(4,6);
      var solve_month = convertMonth(hold_month);
      sDate = (solve_day+"/"+solve_month+"/"+year);
      //console.log('Solved Date: '+sDate);
       
      // CALCULATE THE DAYS BETWEEN REQUEST AND SOLVE
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
    } 
    var Days = totalDays / count;
    closingMarDays = Days.toFixed(0);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where requested like "Mar%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    // GET THE CURRENT DATE
    var now = new Date();
    var mm = now.getMonth() +1;
    var nDate = now.getDate()+"/"+mm+"/"+now.getFullYear();
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var year = "2013"
      var request_month = convertMonth(hold_month);
      // var rDate = new Date(Date.parse(request_month+"/"+request_day+"/"+year, "mm/dd/yyyy"));
      var rDate = (request_day+"/"+request_month+"/"+year);
      
      // IF SOLVED GET SOVLED DATE ELSE COMPARE TO TODAY
      if (tickets.solved.length > 1) {
        var sdate=tickets.solved;
        var shold_month = sdate.substring(0,3);
        var solve_day = sdate.substring(4,6);
        var solve_month = convertMonth(shold_month);
        sDate = (solve_day+"/"+solve_month+"/"+year);
      } else {
        console.log ('MAR - GOT HERE '+nDate+ ' FOR REQUEST DATE '+rDate);
        sDate = nDate;
      }

      // CALCULATE THE DAYS BETWEEN REQUEST AND TODAY
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
        
    }
    
    var Days = totalDays / count;
    var openMarDays = Days.toFixed(0);
    console.log ('Closing Mar Days '+closingMarDays+' Open Mar Days '+openMarDays);
    graphData.rows[a] = {"c":[{"v":"March","f":null},{"v":closingMarDays,"f":null},{"v":openMarDays,"f":null}]};
    a++
  });

   mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where (status="Closed" or status="Solved") and solved like "Apr%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var request_month = convertMonth(hold_month);
      var rDate = (request_day+"/"+request_month+"/"+year);
        
      // GET THE SOLVED DATE
      date=tickets.solved;
      var hold_month = date.substring(0,3);
      var solve_day = date.substring(4,6);
      var solve_month = convertMonth(hold_month);
      sDate = (solve_day+"/"+solve_month+"/"+year);
       
      // CALCULATE THE DAYS BETWEEN REQUEST AND SOLVE
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
    } 
    var Days = totalDays / count;
    closingAprDays = Days.toFixed(0);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where requested like "Apr%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    // GET THE CURRENT DATE
    var now = new Date();
    var mm = now.getMonth() +1;
    var nDate = now.getDate()+"/"+mm+"/"+now.getFullYear();
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var year = "2013"
      var request_month = convertMonth(hold_month);
      // var rDate = new Date(Date.parse(request_month+"/"+request_day+"/"+year, "mm/dd/yyyy"));
      var rDate = (request_day+"/"+request_month+"/"+year);
      
      // IF SOLVED GET SOVLED DATE ELSE COMPARE TO TODAY
      if (tickets.solved.length > 1) {
        var sdate=tickets.solved;
        var shold_month = sdate.substring(0,3);
        var solve_day = sdate.substring(4,6);
        var solve_month = convertMonth(shold_month);
        sDate = (solve_day+"/"+solve_month+"/"+year);
      } else {
        console.log ('APR - GOT HERE '+nDate+ ' FOR REQUEST DATE '+rDate);
        sDate = nDate;
      }

      // CALCULATE THE DAYS BETWEEN REQUEST AND TODAY
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
        
    }
    
    var Days = totalDays / count;
    var openAprDays = Days.toFixed(0);
    console.log ('Closing Apr Days '+closingAprDays+' Open Apr Days '+openAprDays);
    graphData.rows[a] = {"c":[{"v":"April","f":null},{"v":closingAprDays,"f":null},{"v":openAprDays,"f":null}]};
    a++
   });

    mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where (status="Closed" or status="Solved") and solved like "May%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var request_month = convertMonth(hold_month);
      var rDate = (request_day+"/"+request_month+"/"+year);
        
      // GET THE SOLVED DATE
      date=tickets.solved;
      var hold_month = date.substring(0,3);
      var solve_day = date.substring(4,6);
      var solve_month = convertMonth(hold_month);
      sDate = (solve_day+"/"+solve_month+"/"+year);
       
      // CALCULATE THE DAYS BETWEEN REQUEST AND SOLVE
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
    } 
    var Days = totalDays / count;
    closingMayDays = Days.toFixed(0);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where requested like "May%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    // GET THE CURRENT DATE
    var now = new Date();
    var mm = now.getMonth() +1;
    var nDate = now.getDate()+"/"+mm+"/"+now.getFullYear();
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var year = "2013"
      var request_month = convertMonth(hold_month);
      // var rDate = new Date(Date.parse(request_month+"/"+request_day+"/"+year, "mm/dd/yyyy"));
      var rDate = (request_day+"/"+request_month+"/"+year);
      
      // IF SOLVED GET SOVLED DATE ELSE COMPARE TO TODAY
      if (tickets.solved.length > 1) {
        var sdate=tickets.solved;
        var shold_month = sdate.substring(0,3);
        var solve_day = sdate.substring(4,6);
        var solve_month = convertMonth(shold_month);
        sDate = (solve_day+"/"+solve_month+"/"+year);
      } else {
        console.log ('MAY - GOT HERE '+nDate+ ' FOR REQUEST DATE '+rDate);
        sDate = nDate;
      }

      // CALCULATE THE DAYS BETWEEN REQUEST AND TODAY
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
        
    }
    
    var Days = totalDays / count;
    var openMayDays = Days.toFixed(0);
    console.log ('Closing May Days '+closingMayDays+' Open May Days '+openMayDays);
    graphData.rows[a] = {"c":[{"v":"May","f":null},{"v":closingMayDays,"f":null},{"v":openMayDays,"f":null}]};
    a++
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where (status="Closed" or status="Solved") and solved like "Jun%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var request_month = convertMonth(hold_month);
      var rDate = (request_day+"/"+request_month+"/"+year);
        
      // GET THE SOLVED DATE
      date=tickets.solved;
      var hold_month = date.substring(0,3);
      var solve_day = date.substring(4,6);
      var solve_month = convertMonth(hold_month);
      sDate = (solve_day+"/"+solve_month+"/"+year);
       
      // CALCULATE THE DAYS BETWEEN REQUEST AND SOLVE
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
    } 
    var Days = totalDays / count;
    closingJuneDays = Days.toFixed(0);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where requested like "Jun%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    // GET THE CURRENT DATE
    var now = new Date();
    var mm = now.getMonth() +1;
    var nDate = now.getDate()+"/"+mm+"/"+now.getFullYear();
    var count = 0;
    var totalDays = 0;
    for (var i in results) {
      var tickets= results[i];
      count++;
      // GET THE REQUEST_DATE
      var date=tickets.requested;
      var hold_month = date.substring(0,3);
      var request_day = date.substring(4,6);
      var year = "2013"
      var request_month = convertMonth(hold_month);
      // var rDate = new Date(Date.parse(request_month+"/"+request_day+"/"+year, "mm/dd/yyyy"));
      var rDate = (request_day+"/"+request_month+"/"+year);
      
      // IF SOLVED GET SOVLED DATE ELSE COMPARE TO TODAY
      if (tickets.solved.length > 1) {
        var sdate=tickets.solved;
        var shold_month = sdate.substring(0,3);
        var solve_day = sdate.substring(4,6);
        var solve_month = convertMonth(shold_month);
        sDate = (solve_day+"/"+solve_month+"/"+year);
      } else {
        console.log ('JUNE - GOT HERE '+nDate+ ' FOR REQUEST DATE '+rDate);
        sDate = nDate;
      }

      // CALCULATE THE DAYS BETWEEN REQUEST AND TODAY
      var diffDate = dateDifference(sDate, rDate);
      totalDays += diffDate;
        
    }
    
    var Days = totalDays / count;
    var openJuneDays = Days.toFixed(0);
    console.log ('Closing June Days '+closingJuneDays+' Open May Days '+openJuneDays);
    graphData.rows[a] = {"c":[{"v":"June","f":null},{"v":closingJuneDays,"f":null},{"v":openJuneDays,"f":null}]};
    a++
    response.writeHead(200, {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin' : '*'
    });
    graph=JSON.stringify(graphData);
    response.end(graph);
  });
}

function WeekOpen(response, request) {
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"day":"","label":"Day","type":"string"};
  graphData.cols[1] = {"open":"","label":"Tickets Opened","type":"number"};
 // graphData.cols[2] = {"closed":"","label":"Tickets Closed","type":"number"};
 
  var test7=moment().subtract('days', 7);
  var test6=moment().subtract('days', 6);
  var test5=moment().subtract('days', 5);
  var test4=moment().subtract('days', 4);
  var test3=moment().subtract('days', 3);
  var test2=moment().subtract('days', 2);
  var test1=moment().subtract('days', 1);
  var test=moment();
  var holdDate7=test7.format("MMM-DD");
  var holdDate6=test6.format("MMM-DD");
  var holdDate5=test5.format("MMM-DD");
  var holdDate4=test4.format("MMM-DD");
  var holdDate3=test3.format("MMM-DD");
  var holdDate2=test2.format("MMM-DD");
  var holdDate1=test1.format("MMM-DD");
  var holdDate=test.format("MMM-DD");
  var a = 0; 

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where requested="'+holdDate7+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate7,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where requested="'+holdDate6+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate6,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  
  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where requested="'+holdDate5+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate5,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where requested="'+holdDate4+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate4,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where requested="'+holdDate3+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate3,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where requested="'+holdDate2+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate2,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where requested="'+holdDate1+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate1,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where requested="'+holdDate+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  
        response.writeHead(200, {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin' : '*'
        });
        graph=JSON.stringify(graphData);
        //console.log(graph);
        response.end(graph);
  });
}

function WeekClose(response, request) {
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"day":"","label":"Day","type":"string"};
  //graphData.cols[1] = {"open":"","label":"Tickets Opened","type":"number"};
  graphData.cols[1] = {"closed":"","label":"Tickets Closed","type":"number"};
 
  var test7=moment().subtract('days', 7);
  var test6=moment().subtract('days', 6);
  var test5=moment().subtract('days', 5);
  var test4=moment().subtract('days', 4);
  var test3=moment().subtract('days', 3);
  var test2=moment().subtract('days', 2);
  var test1=moment().subtract('days', 1);
  var test=moment();
  var holdDate7=test7.format("MMM-DD");
  var holdDate6=test6.format("MMM-DD");
  var holdDate5=test5.format("MMM-DD");
  var holdDate4=test4.format("MMM-DD");
  var holdDate3=test3.format("MMM-DD");
  var holdDate2=test2.format("MMM-DD");
  var holdDate1=test1.format("MMM-DD");
  var holdDate=test.format("MMM-DD");
  var a = 0;

 mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where solved="'+holdDate7+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        closed = results[0]["count(*)"];
        graphData.rows[a] = {"c":[{"v":holdDate7,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where solved="'+holdDate6+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate6,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where solved="'+holdDate5+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate5,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where solved="'+holdDate4+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate4,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where solved="'+holdDate3+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate3,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where solved="'+holdDate2+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate2,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where solved="'+holdDate1+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate1,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
  });

  mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where solved="'+holdDate+'" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        graphData.rows[a] = {"c":[{"v":holdDate,"f":null},{"v":results[0]["count(*)"],"f":null}]};
        a++;
        response.writeHead(200, {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin' : '*'
        });
        graph=JSON.stringify(graphData);
        //console.log(graph);
        response.end(graph);
  });
}



function CustAll(response, request) {

  console.log("request for handler 'Customer ALL' was called.");
  var carleton=0; var ottawau=0; var westquebec=0;
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0; 
  
  for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];

        if (count > 0) {
          if ( (description[j] != 'Carleton') && (description[j] != 'Ottawa U') && (description[j] != 'WQSB - Not Defined')) {
            switch (description[j]) {
              case 'Carletonu' :
                carleton += count;
                graphData.rows[a] = storeGraph(description[j], carleton);
                a++;
                break;
              case 'U Ottawa' :
                ottawau += count;
                graphData.rows[a] = storeGraph(description[j], ottawau);
                a++;
                break;
              case 'WQSB Chelsea' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Darcy' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'McDowell' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Philemon' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Poltimore' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              default :
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
            }
          } else { 
            switch  (description[j]) {
              case 'Carleton' :
                carleton = count;
                break;
              case 'Ottawa U' :
                ottawau = count;
                break;
              case 'WQSB - Not Defined' :
                westquebec += count;
                break;
            }

          }
        }
        j++

        if (j == customers.length) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            if (westquebec > 0) {
                graphData.rows[a] = {"c":[{"v":"WQSB Total","f":null},{"v":westquebec,"f":null}]};
            }
            graph=JSON.stringify(graphData);
            //console.log(graph);
            response.end(graph);
            
        }
      });
    }
}

function CustWeek(response, request) {

  console.log("request for handler 'Customer WEEK' was called.");
  var carleton=0; var ottawau=0; var westquebec=0;
  var tableHead = '<table border="1" bordercolor="#ff00ff" style="background-color:#c0c0c0" width="25%" cellpadding="3" cellspacing="3"><tr><td>Customer Name</td><td>Count</td></tr><tr>';
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0;
  var test7=moment().subtract('days', 7);
  var test6=moment().subtract('days', 6);
  var test5=moment().subtract('days', 5);
  var test4=moment().subtract('days', 4);
  var test3=moment().subtract('days', 3);
  var test2=moment().subtract('days', 2);
  var test1=moment().subtract('days', 1);
  var test=moment();
  var holdDate7=test7.format("MMM-DD");
  var holdDate6=test6.format("MMM-DD");
  var holdDate5=test5.format("MMM-DD");
  var holdDate4=test4.format("MMM-DD");
  var holdDate3=test3.format("MMM-DD");
  var holdDate2=test2.format("MMM-DD");
  var holdDate1=test1.format("MMM-DD");
  var holdDate=test.format("MMM-DD");

  console.log(holdDate);

  for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%") and (requested="'+holdDate+'" or requested ="'+holdDate1+'" or requested ="'+holdDate6+'" or requested ="'+holdDate7+'" or requested ="'+holdDate2+'" or requested ="'+holdDate3+'" or requested ="'+holdDate4+'" or requested ="'+holdDate5+'") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];
       
        if (count > 0) {
          console.log(description[j]);
          if ( (description[j] != 'Carleton') && (description[j] != 'Ottawa U') && (description[j] != 'WQSB - Not Defined')) {
            switch (description[j]) {
              case 'Carletonu' :
                carleton += count;
                graphData.rows[a] = storeGraph(description[j], carleton);
                a++;
                break;
              case 'U Ottawa' :
                ottawau += count;
                graphData.rows[a] = storeGraph(description[j], ottawau);
                a++;
                break;
              case 'WQSB Chelsea' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++
                break;
              case 'WQSB Darcy' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++
                break;
              case 'McDowell' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++
                break;
              case 'WQSB Philemon' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++
                break;
              case 'WQSB Poltimore' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++
                break;
              default :
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
            }
          } else { 
            switch  (description[j]) {
              case 'Carleton' :
                carleton = count;
                break;
              case 'Ottawa U' :
                ottawau = count;
                break;
              case 'WQSB - Not Defined' :
                westquebec += count;
                break;
            }

          }
        }
        j++
        if (j == customers.length) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
           // westquebec += chelsea + darcy + mcdowell + philemon + poltimore;
            if (westquebec > 0) {
                graphData.rows[a] = {"c":[{"v":"WQSB Total","f":null},{"v":westquebec,"f":null}]};
            }
            graph=JSON.stringify(graphData);
            //console.log(graph);
            response.end(graph);
            
        }
      });
    }
}

function CustJan(response, request) {

  console.log("request for handler 'Customer' was called.");
  var carleton=0; var chelsea=0; var darcy=0; var mcdowell=0; var ottawau=0; var poltimore=0; var philemon=0; var westquebec=0;
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0; 
  
  for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%" and requested like "Jan%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];

        //console.log(description[j]+' COUNT '+count);

        if (count > 0) {
          if ( (description[j] != 'Carleton') && (description[j] != 'Ottawa U') && (description[j] != 'WQSB - Not Defined')) {
            switch (description[j]) {
              case 'Carletonu' :
                carleton += count;
                graphData.rows[a] = storeGraph(description[j], carleton);
                a++;
                break;
              case 'U Ottawa' :
                ottawau += count;
                graphData.rows[a] = storeGraph(description[j], ottawau);
                a++;
                break;
              case 'WQSB Chelsea' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Darcy' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'McDowell' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Philemon' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Poltimore' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              default :
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
            }
          } else { 
            switch  (description[j]) {
              case 'Carleton' :
                carleton = count;
                break;
              case 'Ottawa U' :
                ottawau = count;
                break;
              case 'WQSB - Not Defined' :
                westquebec += count;
                break;
            }

          }
        }
        j++

        if (j == customers.length) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            if (westquebec > 0) {
                graphData.rows[a] = {"c":[{"v":"WQSB Total","f":null},{"v":westquebec,"f":null}]};
            }
            graph=JSON.stringify(graphData);
            //console.log(graph);
            response.end(graph);
            
        }
      });
    }
}

function CustFeb(response, request) {

  console.log("request for handler 'Customer FEBRUARY' was called.");
  var carleton=0; var chelsea=0; var darcy=0; var mcdowell=0; var ottawau=0; var poltimore=0; var philemon=0; var westquebec=0;
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0; 
  
  for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%" and requested like "Feb%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];

        //console.log(description[j]+' COUNT '+count);

        if (count > 0) {
          if ( (description[j] != 'Carleton') && (description[j] != 'Ottawa U') && (description[j] != 'WQSB - Not Defined')) {
            switch (description[j]) {
              case 'Carletonu' :
                carleton += count;
                graphData.rows[a] = storeGraph(description[j], carleton);
                a++;
                break;
              case 'U Ottawa' :
                ottawau += count;
                graphData.rows[a] = storeGraph(description[j], ottawau);
                a++;
                break;
              case 'WQSB Chelsea' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Darcy' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'McDowell' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Philemon' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Poltimore' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              default :
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
            }
          } else { 
            switch  (description[j]) {
              case 'Carleton' :
                carleton = count;
                break;
              case 'Ottawa U' :
                ottawau = count;
                break;
              case 'WQSB - Not Defined' :
                westquebec += count;
                break;
            }

          }
        }
        j++

        if (j == customers.length) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            if (westquebec > 0) {
                graphData.rows[a] = {"c":[{"v":"WQSB Total","f":null},{"v":westquebec,"f":null}]};
            }
            graph=JSON.stringify(graphData);
            //console.log(graph);
            response.end(graph);
            
        }
      });
    }
}

function CustMar(response, request) {

  console.log("request for handler 'Customer MARCH' was called.");
  var carleton=0; var chelsea=0; var darcy=0; var mcdowell=0; var ottawau=0; var poltimore=0; var philemon=0; var westquebec=0;
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0; 
  
  for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%" and requested like "Mar%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];

        //console.log(description[j]+' COUNT '+count);

        if (count > 0) {
          if ( (description[j] != 'Carleton') && (description[j] != 'Ottawa U') && (description[j] != 'WQSB - Not Defined')) {
            switch (description[j]) {
              case 'Carletonu' :
                carleton += count;
                graphData.rows[a] = storeGraph(description[j], carleton);
                a++;
                break;
              case 'U Ottawa' :
                ottawau += count;
                graphData.rows[a] = storeGraph(description[j], ottawau);
                a++;
                break;
              case 'WQSB Chelsea' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Darcy' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'McDowell' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Philemon' :  
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Poltimore' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              default :
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
            }
          } else { 
            switch  (description[j]) {
              case 'Carleton' :
                carleton = count;
                break;
              case 'Ottawa U' :
                ottawau = count;
                break;
              case 'WQSB - Not Defined' :
                westquebec += count;
                break;
            }

          }
        }
        j++

        if (j == customers.length) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            if (westquebec > 0) {
                graphData.rows[a] = {"c":[{"v":"WQSB Total","f":null},{"v":westquebec,"f":null}]};
            }
            graph=JSON.stringify(graphData);
            //console.log(graph);
            response.end(graph);
            
        }
      });
    }
}

function CustApr(response, request) {

  console.log("request for handler 'Customer APRIL' was called.");
  var carleton=0; var chelsea=0; var darcy=0; var mcdowell=0; var ottawau=0; var poltimore=0; var philemon=0; var westquebec=0;
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0; 
  
  for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%" and requested like "Apr%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];

        //console.log(description[j]+' COUNT '+count);

        if (count > 0) {
          if ( (description[j] != 'Carleton') && (description[j] != 'Ottawa U') && (description[j] != 'WQSB - Not Defined')) {
            switch (description[j]) {
              case 'Carletonu' :
                carleton += count;
                graphData.rows[a] = storeGraph(description[j], carleton);
                a++;
                break;
              case 'U Ottawa' :
                ottawau += count;
                graphData.rows[a] = storeGraph(description[j], ottawau);
                a++;
                break;
              case 'WQSB Chelsea' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Darcy' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'McDowell' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Philemon' :  
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Poltimore' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              default :
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
            }
          } else { 
            switch  (description[j]) {
              case 'Carleton' :
                carleton = count;
                break;
              case 'Ottawa U' :
                ottawau = count;
                break;
              case 'WQSB - Not Defined' :
                westquebec += count;
                break;
            }

          }
        }
        j++

        if (j == customers.length) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            if (westquebec > 0) {
                graphData.rows[a] = {"c":[{"v":"WQSB Total","f":null},{"v":westquebec,"f":null}]};
            }
            graph=JSON.stringify(graphData);
            //console.log(graph);
            response.end(graph);
            
        }
      });
    }
}

function CustMay(response, request) {

  console.log("request for handler 'Customer MAY' was called.");
  var carleton=0; var chelsea=0; var darcy=0; var mcdowell=0; var ottawau=0; var poltimore=0; var philemon=0; var westquebec=0;
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0; 
  
  for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%" and requested like "May%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];

        //console.log(description[j]+' COUNT '+count);

        if (count > 0) {
          if ( (description[j] != 'Carleton') && (description[j] != 'Ottawa U') && (description[j] != 'WQSB - Not Defined')) {
            switch (description[j]) {
              case 'Carletonu' :
                carleton += count;
                graphData.rows[a] = storeGraph(description[j], carleton);
                a++;
                break;
              case 'U Ottawa' :
                ottawau += count;
                graphData.rows[a] = storeGraph(description[j], ottawau);
                a++;
                break;
              case 'WQSB Chelsea' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Darcy' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'McDowell' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Philemon' :  
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Poltimore' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              default :
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
            }
          } else { 
            switch  (description[j]) {
              case 'Carleton' :
                carleton = count;
                break;
              case 'Ottawa U' :
                ottawau = count;
                break;
              case 'WQSB - Not Defined' :
                westquebec += count;
                break;
            }

          }
        }
        j++

        if (j == customers.length) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            if (westquebec > 0) {
                graphData.rows[a] = {"c":[{"v":"WQSB Total","f":null},{"v":westquebec,"f":null}]};
            }
            graph=JSON.stringify(graphData);
            //console.log(graph);
            response.end(graph);
            
        }
      });
    }
}

function CustJune(response, request) {

  console.log("request for handler 'Customer June' was called.");
  var carleton=0; var chelsea=0; var darcy=0; var mcdowell=0; var ottawau=0; var poltimore=0; var philemon=0; var westquebec=0;
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0; 
  
  for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%" and requested like "Jun%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];

        console.log(description[j]+' COUNT '+count);

        if (count > 0) {
          if ( (description[j] != 'Carleton') && (description[j] != 'Ottawa U') && (description[j] != 'WQSB - Not Defined')) {
            switch (description[j]) {
              case 'Carletonu' :
                carleton += count;
                graphData.rows[a] = storeGraph(description[j], carleton);
                a++;
                break;
              case 'U Ottawa' :
                ottawau += count;
                graphData.rows[a] = storeGraph(description[j], ottawau);
                a++;
                break;
              case 'WQSB Chelsea' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Darcy' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'McDowell' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Philemon' :  
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              case 'WQSB Poltimore' :
                westquebec += count;
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
                break;
              default :
                graphData.rows[a] = storeGraph(description[j], count);
                a++;
            }
          } else { 
            switch  (description[j]) {
              case 'Carleton' :
                carleton = count;
                break;
              case 'Ottawa U' :
                ottawau = count;
                break;
              case 'WQSB - Not Defined' :
                westquebec += count;
                break;
            }

          }
        }
        j++

        if (j == customers.length) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            if (westquebec > 0) {
                graphData.rows[a] = {"c":[{"v":"WQSB Total","f":null},{"v":westquebec,"f":null}]};
            }
            graph=JSON.stringify(graphData);
            //console.log(graph);
            response.end(graph);
            
        }
      });
    }
}


function CatAll(response, request) {
  console.log("request for handler 'Category ALL' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Category","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0;

  for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = storeCat(reason[j], count);
          a++;
        }
        j++;
        if (j == heading.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
        });
      }
    }

 function CatWeek(response, request) {

  console.log("request for handler 'Category WEEK' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Category","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0;

  var test7=moment().subtract('days', 7);
  var test6=moment().subtract('days', 6);
  var test5=moment().subtract('days', 5);
  var test4=moment().subtract('days', 4);
  var test3=moment().subtract('days', 3);
  var test2=moment().subtract('days', 2);
  var test1=moment().subtract('days', 1);
  var test=moment();
  var holdDate7=test7.format("MMM-DD");
  var holdDate6=test6.format("MMM-DD");
  var holdDate5=test5.format("MMM-DD");
  var holdDate4=test4.format("MMM-DD");
  var holdDate3=test3.format("MMM-DD");
  var holdDate2=test2.format("MMM-DD");
  var holdDate1=test1.format("MMM-DD");
  var holdDate=test.format("MMM-DD");


  for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+heading[i]+'%") and (requested="'+holdDate+'" or requested ="'+holdDate1+'" or requested ="'+holdDate6+'" or requested ="'+holdDate7+'" or requested ="'+holdDate2+'" or requested ="'+holdDate3+'" or requested ="'+holdDate4+'" or requested ="'+holdDate5+'") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = storeCat(reason[j], count);
          a++;
        }
        j++;
        if (j == heading.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
        });
      }
    }
 
function CatJan(response, request) {

  console.log("request for handler 'Category JAN' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Category","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0;

  for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+heading[i]+'%" and requested like "Jan%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = storeCat(reason[j], count);
          a++;
        }
        j++;
        if (j == heading.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
        });
      }
    }

function CatFeb(response, request) {

  console.log("request for handler 'Category Feb' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Category","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0;

  for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+heading[i]+'%" and requested like "Feb%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = storeCat(reason[j], count);
          a++;
        }
        j++;
        if (j == heading.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
        });
      }
    }

  function CatMar(response, request) {

  console.log("request for handler 'Category Mar' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Category","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0;

  for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+heading[i]+'%" and requested like "Mar%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = storeCat(reason[j], count);
          a++;
        }
        j++;
        if (j == heading.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
        });
      }
    }

  function CatApr(response, request) {

  console.log("request for handler 'Category Apr' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Category","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0;

  for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+heading[i]+'%" and requested like "Apr%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = storeCat(reason[j], count);
          a++;
        }
        j++;
        if (j == heading.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
        });
      }
    }

  function CatMay(response, request) {

  console.log("request for handler 'Category May' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Category","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0;

  for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+heading[i]+'%" and requested like "May%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = storeCat(reason[j], count);
          a++;
        }
        j++;
        if (j == heading.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
        });
      }
    }

    function CatJune(response, request) {

  console.log("request for handler 'Category June' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Category","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0;

  for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+heading[i]+'%" and requested like "Jun%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = storeCat(reason[j], count);
          a++;
        }
        j++;
        if (j == heading.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
        });
      }
    }

  function BlAll (response, request) {
  console.log("request for handler 'BlazeLoop ALL' was called.");
  var graphData = {};
  graphData.cols = [];
  graphData.rows = [];
  graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
  graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
  var j = 0; var a = 0;

  for (var i=0; i < customerB.length; i++) {
        mysql.query('use ' + DATABASE);

        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customerB[i]+'%" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        console.log(descriptionB[j]);
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = {"c":[{"v":descriptionB[j],"f":null},{"v":count,"f":null}]};
          a++;
        }
        j++;
        if (j == customerB.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
      });
    }
   }

   function BlWeek (response, request) {
      console.log("request for handler 'Blazeloop WEEK' was called.");
      var tableHead = '<table border="1" bordercolor="#ff00ff" style="background-color:#c0c0c0" width="25%" cellpadding="3" cellspacing="3"><tr><td>Customer Name</td><td>Count</td></tr><tr>';
      var graphData = {};
      graphData.cols = [];
      graphData.rows = [];
      graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
      graphData.cols[1] = {"id":"","label":"COUNT","type":"number"};
      var j = 0; var a = 0;
      var test7=moment().subtract('days', 7);
      var test6=moment().subtract('days', 6);
      var test5=moment().subtract('days', 5);
      var test4=moment().subtract('days', 4);
      var test3=moment().subtract('days', 3);
      var test2=moment().subtract('days', 2);
      var test1=moment().subtract('days', 1);
      var test=moment();
      var holdDate7=test7.format("MMM-DD");
      var holdDate6=test6.format("MMM-DD");
      var holdDate5=test5.format("MMM-DD");
      var holdDate4=test4.format("MMM-DD");
      var holdDate3=test3.format("MMM-DD");
      var holdDate2=test2.format("MMM-DD");
      var holdDate1=test1.format("MMM-DD");
      var holdDate=test.format("MMM-DD");

      console.log(holdDate);

      for (var i=0; i < customerB.length; i++) {
        mysql.query('use ' + DATABASE);

        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customerB[i]+'%") and (requested="'+holdDate+'" or requested ="'+holdDate1+'" or requested ="'+holdDate6+'" or requested ="'+holdDate7+'" or requested ="'+holdDate2+'" or requested ="'+holdDate3+'" or requested ="'+holdDate4+'" or requested ="'+holdDate5+'") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        console.log(descriptionB[j]);
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = {"c":[{"v":descriptionB[j],"f":null},{"v":count,"f":null}]};
          a++;
        }
        j++;
        if (j == customerB.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
      });
    }
   }

   function BlJan (response, request) {
      console.log("request for handler 'BlazeLoop ALL' was called.");
      var graphData = {};
      graphData.cols = [];
      graphData.rows = [];
      graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
      graphData.cols[1] = {"id":"","label":"COUNT","type":"number"}; 
      var j = 0; var a = 0;
      for (var i=0; i < customerB.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customerB[i]+'%" and requested like "Jan%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        console.log(descriptionB[j]);
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = {"c":[{"v":descriptionB[j],"f":null},{"v":count,"f":null}]};
          a++;
        }
        j++;
        if (j == customerB.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
      });
    }
   }

   function BlFeb (response, request) {
      console.log("request for handler 'BlazeLoop ALL' was called.");
      var graphData = {};
      graphData.cols = [];
      graphData.rows = [];
      graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
      graphData.cols[1] = {"id":"","label":"COUNT","type":"number"}; 
      var j = 0; var a = 0;
      for (var i=0; i < customerB.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customerB[i]+'%" and requested like "Feb%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        console.log(descriptionB[j]);
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = {"c":[{"v":descriptionB[j],"f":null},{"v":count,"f":null}]};
          a++;
        }
        j++;
        if (j == customerB.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
      });
    }
   }

   function BlMar (response, request) {
      console.log("request for handler 'BlazeLoop ALL' was called.");
      var graphData = {};
      graphData.cols = [];
      graphData.rows = [];
      graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
      graphData.cols[1] = {"id":"","label":"COUNT","type":"number"}; 
      var j = 0; var a = 0;
      for (var i=0; i < customerB.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customerB[i]+'%" and requested like "Mar%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        console.log(descriptionB[j]);
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = {"c":[{"v":descriptionB[j],"f":null},{"v":count,"f":null}]};
          a++;
        }
        j++;
        if (j == customerB.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
      });
    }
   }

   function BlApr (response, request) {
      console.log("request for handler 'BlazeLoop ALL' was called.");
      var graphData = {};
      graphData.cols = [];
      graphData.rows = [];
      graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
      graphData.cols[1] = {"id":"","label":"COUNT","type":"number"}; 
      var j = 0; var a = 0;
      for (var i=0; i < customerB.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customerB[i]+'%" and requested like "Apr%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        console.log(descriptionB[j]);
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = {"c":[{"v":descriptionB[j],"f":null},{"v":count,"f":null}]};
          a++;
        }
        j++;
        if (j == customerB.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
      });
    }
   }

   function BlMay (response, request) {
      console.log("request for handler 'BlazeLoop ALL' was called.");
      var graphData = {};
      graphData.cols = [];
      graphData.rows = [];
      graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
      graphData.cols[1] = {"id":"","label":"COUNT","type":"number"}; 
      var j = 0; var a = 0;
      for (var i=0; i < customerB.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customerB[i]+'%" and requested like "May%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        console.log(descriptionB[j]);
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = {"c":[{"v":descriptionB[j],"f":null},{"v":count,"f":null}]};
          a++;
        }
        j++;
        if (j == customerB.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
      });
    }
   }

   function BlJune (response, request) {
      console.log("request for handler 'BlazeLoop ALL' was called.");
      var graphData = {};
      graphData.cols = [];
      graphData.rows = [];
      graphData.cols[0] = {"id":"","label":"Customer","type":"string"};
      graphData.cols[1] = {"id":"","label":"COUNT","type":"number"}; 
      var j = 0; var a = 0;
      for (var i=0; i < customerB.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customerB[i]+'%" and requested like "Jun%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        console.log(descriptionB[j]);
        var count = results[0]["count(*)"];

        if (count > 0) {
          graphData.rows[a] = {"c":[{"v":descriptionB[j],"f":null},{"v":count,"f":null}]};
          a++;
        }
        j++;
        if (j == customerB.length) {
          response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            graph=JSON.stringify(graphData);
            console.log(graph);
            response.end(graph);
         }
      });
    }
   }

   function ticketDetails (response, request) {
      var id  = request;
      console.log(id);
      var options = {
      host: 'benbria.zendesk.com',  
      port: 443,
      path: '/api/v2/tickets/'+id+'.json',
      method: 'GET',
      auth: 'drobern@benbria.com:Stwn1hgb4!'
      };

      var req = https.request(options, function(res) {
      
          res.on('data', function(d) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            response.write(d);
            response.end();
          });
      });

    req.end();
     
    req.on('error', function(e) {
    console.error(e);
  });

}

function ForumList (response, request) {
      var options = {
      host: 'benbria.zendesk.com',  
      port: 443,
      path: '/api/v2/forums.json',
      method: 'GET',
      auth: 'drobern@benbria.com:Stwn1hgb4!'
      };

      var req = https.request(options, function(res) {
      
          res.on('data', function(d) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            response.write(d);
            response.end();
          });
      });

    req.end();
     
    req.on('error', function(e) {
    console.error(e);
  });

}

function ForumDetail (response, request) {
      console.log("request for handler 'Forum' "+request+" was called.");
      var id  = request;
      console.log(id);
      var options = {
      host: 'benbria.zendesk.com',  
      port: 443,
      path: '/api/v2/forums/'+id+'/topics.json',
      method: 'GET',
      auth: 'drobern@benbria.com:Stwn1hgb4!'
      };

      var req = https.request(options, function(res) {
      
          res.on('data', function(d) {
            response.writeHead(200, {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin' : '*'
            });
            response.write(d);
            response.end();
          });
      });

    req.end();
     
    req.on('error', function(e) {
    console.error(e);
  });

}

exports.Start = Start;
exports.Tickets = Tickets;
exports.Status = Status;
exports.Priority = Priority;
exports.Type = Type;
exports.Compare = Compare;
exports.Metrics = Metrics;
exports.WeekOpen = WeekOpen;
exports.WeekClose = WeekClose;
exports.CustAll = CustAll;
exports.CustWeek = CustWeek;
exports.CustJan = CustJan;
exports.CustFeb = CustFeb;
exports.CustMar = CustMar;
exports.CustApr = CustApr;
exports.CustMay = CustMay;
exports.CustJune = CustJune;
exports.CatAll = CatAll;
exports.CatWeek = CatWeek;
exports.CatJan = CatJan;
exports.CatFeb = CatFeb;
exports.CatMar = CatMar;
exports.CatApr = CatApr;
exports.CatMay = CatMay;
exports.CatJune = CatJune;
exports.BlAll = BlAll;
exports.BlWeek = BlWeek;
exports.BlJan = BlJan;
exports.BlFeb = BlFeb;
exports.BlMar = BlMar;
exports.BlApr = BlApr;
exports.BlMay = BlMay;
exports.BlJune = BlJune;
exports.ticketDetails = ticketDetails;
exports.ForumList = ForumList;
exports.ForumDetail = ForumDetail;