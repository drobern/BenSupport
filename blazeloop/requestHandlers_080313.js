var querystring = require("querystring");
var https = require('https');
var fs = require("fs");
var events = require("events");
var  util = require("util");
var Quiche = require('quiche');
var moment = require('moment');
var querystring = require('querystring');

var _mysql = require('mysql');

var HOST = 'localhost';
var PORT = 3306;
var MYSQL_USER = 'root';
var MYSQL_PASS = 'Must0ng11';
var DATABASE = 'stats';
var TABLE = 'speaker';

var mysql = _mysql.createClient({
    host: HOST,
    port: PORT,
    user: MYSQL_USER,
    password: MYSQL_PASS,
});


var columns = '<td><b>ID</td>' +
              '<td><b>Subject</td>' +
              '<td><b>Type</td>' +
              '<td><b>Priority</td>' +
              '<td><b>Requester</td>' +
              '<td><b>Request Date</td>' +
              '<td><b>Update Date</td>' +
              '<td><b>Solve Date</td>' +
              '<td><b>Status</td>' +
              '<td><b>Assigned</td>' +
              '</tr>';

var tableTop = '<table border="1" bordercolor="#ffffff" style="background-color:#ffffff" width="75%" cellpadding="0" cellspacing="2">' +
               '<tr>' +
               '<td>';

var ticketBottom = '</tr></table>' +
                   '<table border="1" bordercolor="#ff00ff" style="background-color:#c0c0c0" width="100%" cellpadding="2" cellspacing="1">' +
                   '<tr>';

function writeTop(heading, label) {
  var top =     '<html>'+
                '<head>'+
                '<meta http-equiv="Content-Type" '+
                'content="text/html; charset=UTF-8" />'+
                '</head>'+
                '<body>' +
                '<H2><center>'+ heading + '</H2></P>' +
                '<form action="/' + label + '" method="post">'+
                '<input type="submit" value="' + label + '" />'+
                '</form>';
  return top;
}

function writeForm(formFields) {

  var x = 0;
  var content = [];
  for (var i in formFields) {
    x++;
    var field = formFields[i];
    if (x == 1) {
      content[i] = '<form action="/'+ field + '" method="post\">'+
                   '<table border="1" bordercolor="#ffffff" style="background-color:#ffffff" width="100%" cellpadding="0" cellspacing="2">' +
                   '<tr>' +
                   '<td><input type="submit" value="'+ field +'" /></td>'+
                   '</form>';
    } else {
      content[i] = '<form action="/'+ field +'" method="post">'+
                 '<td><input type="submit" value="'+ field + '"></td>'+
                 '</form>';
    }
                   
  }
 
 return content;
}

  
function storeGraph(description, count) {
      switch(description) {
          case 'Amityville':
             graphData = {"c":[{"v":description,"f":null},{"v":count,"f":null}]};
             break;
          case 'Adult Community':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]}; 
             break;
          case 'Carletonu':
             graphData= {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'Celtic Manor':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'WQSB Chelsea':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'Conestoga':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'CTS':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'WQSB Darcy':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'Dryden':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'DSBN':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'Eunice':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'ENPQ':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'HMR':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'Jay County':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'JITB':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
           case 'JSCC':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Lakehead':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Marriott':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'McDowell':
             graphData= {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Memorial':
             graphData= {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Mitel':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Nanticoke':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'NMC':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Notre Dame':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'U Ottawa':
             graphData= {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Phelps':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'WQSB Poltimore':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'WQSB Philemon':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Rayburn':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Santa Barbara':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'San Diego':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Sequoia':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Skokie':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'St Paul':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Syniverse':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Switch':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'TAMU':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'TNCDSB':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Trinity':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'U Manitoba':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Vechtdal':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Vigo':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Villanova':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Westerville':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            case 'Wilfrid Laurier':
             graphData = {"c":[{"v":description ,"f":null},{"v":count,"f":null}]};
             break;
            
          }

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

function CustAll(response, request) {

  console.log("request for handler 'Customer ALL' was called.");
  var carleton=0; var ottawau=0; var westquebec=0;
  var customers = ["Amityville", "Adult Community", "CU","Carleton", "CM","Chelsea","Conestoga","CTS","Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame","OU", "UO", "Phelps", "timore", "Philemon", "Rayburn","SBCCD","SDCCD","Sequoia","Skokie","St Paul", "Syniverse","Switch", "TAMU","TNCDSB", "Trinity","UMAN","Vechtdal", "Vigo","Villanova", "Westerville", "WLU","WQSB"];
  var description = ["Amityville", "Adult Community", "Carleton","Carletonu", "Celtic Manor","WQSB Chelsea","Conestoga","CTS","WQSB Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame", "Ottawa U", "U Ottawa", "Phelps", "WQSB Poltimore", "WQSB Philemon", "Rayburn","Santa Barbara","San Diego", "Sequoia", "Skokie","St Paul", "Syniverse", "Switch", "TAMU","TNCDSB", "Trinity","U Manitoba","Vechtdal", "Vigo","Villanova", "Westerville", "Wilfrid Laurier","WQSB - Not Defined"];
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
  var customers = ["Amityville", "Adult Community", "CU","Carleton", "CM","Chelsea","Conestoga","CTS","Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame","OU", "UO", "Phelps", "timore", "Philemon", "Rayburn","SBCCD","SDCCD","Sequoia","Skokie","St Paul", "Syniverse","Switch", "TAMU","TNCDSB", "Trinity","UMAN","Vechtdal", "Vigo","Villanova", "Westerville", "WLU","WQSB"];
  var description = ["Amityville", "Adult Community", "Carleton","Carletonu", "Celtic Manor","WQSB Chelsea","Conestoga","CTS","WQSB Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame", "Ottawa U", "U Ottawa", "Phelps", "WQSB Poltimore", "WQSB Philemon", "Rayburn","Santa Barbara","San Diego", "Sequoia", "Skokie","St Paul", "Syniverse", "Switch", "TAMU","TNCDSB", "Trinity","U Manitoba","Vechtdal", "Vigo","Villanova", "Westerville", "Wilfrid Laurier","WQSB - Not Defined"];
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
  var customers = ["Amityville", "Adult Community", "CU","Carleton", "CM","Chelsea","Conestoga","CTS","Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame","OU", "UO", "Phelps", "timore", "Philemon", "Rayburn","SBCCD","SDCCD","Sequoia","Skokie","St Paul", "Syniverse","Switch", "TAMU","TNCDSB", "Trinity","UMAN","Vechtdal", "Vigo","Villanova", "Westerville", "WLU","WQSB"];
  var description = ["Amityville", "Adult Community", "Carleton","Carletonu", "Celtic Manor","WQSB Chelsea","Conestoga","CTS","WQSB Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame", "Ottawa U", "U Ottawa", "Phelps", "WQSB Poltimore", "WQSB Philemon", "Rayburn","Santa Barbara","San Diego", "Sequoia", "Skokie","St Paul", "Syniverse", "Switch", "TAMU","TNCDSB", "Trinity","U Manitoba","Vechtdal", "Vigo","Villanova", "Westerville", "Wilfrid Laurier","WQSB - Not Defined"];
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
  var customers = ["Amityville", "Adult Community", "CU","Carleton", "CM","Chelsea","Conestoga","CTS","Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame","OU", "UO", "Phelps", "timore", "Philemon", "Rayburn","SBCCD","SDCCD","Sequoia","Skokie","St Paul", "Syniverse","Switch", "TAMU","TNCDSB", "Trinity","UMAN","Vechtdal", "Vigo","Villanova", "Westerville", "WLU","WQSB"];
  var description = ["Amityville", "Adult Community", "Carleton","Carletonu", "Celtic Manor","WQSB Chelsea","Conestoga","CTS","WQSB Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame", "Ottawa U", "U Ottawa", "Phelps", "WQSB Poltimore", "WQSB Philemon", "Rayburn","Santa Barbara","San Diego", "Sequoia", "Skokie","St Paul", "Syniverse", "Switch", "TAMU","TNCDSB", "Trinity","U Manitoba","Vechtdal", "Vigo","Villanova", "Westerville", "Wilfrid Laurier","WQSB - Not Defined"];
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
  var customers = ["Amityville", "Adult Community", "CU","Carleton", "CM","Chelsea","Conestoga","CTS","Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame","OU", "UO", "Phelps", "timore", "Philemon", "Rayburn","SBCCD","SDCCD","Sequoia","Skokie","St Paul", "Syniverse","Switch", "TAMU","TNCDSB", "Trinity","UMAN","Vechtdal", "Vigo","Villanova", "Westerville", "WLU","WQSB"];
  var description = ["Amityville", "Adult Community", "Carleton","Carletonu", "Celtic Manor","WQSB Chelsea","Conestoga","CTS","WQSB Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame", "Ottawa U", "U Ottawa", "Phelps", "WQSB Poltimore", "WQSB Philemon", "Rayburn","Santa Barbara","San Diego", "Sequoia", "Skokie","St Paul", "Syniverse", "Switch", "TAMU","TNCDSB", "Trinity","U Manitoba","Vechtdal", "Vigo","Villanova", "Westerville", "Wilfrid Laurier","WQSB - Not Defined"];
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

exports.Start = Start;
exports.CustAll = CustAll;
exports.CustWeek = CustWeek;
exports.CustJan = CustJan;
exports.CustFeb = CustFeb;
exports.CustMar = CustMar;
