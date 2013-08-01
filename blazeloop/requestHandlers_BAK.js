var querystring = require("querystring");
var https = require('https');
fs = require("fs");
//formidable = require("formidable");
events = require("events");
var  util = require("util");
var Quiche = require('quiche');
var moment = require('moment');
var querystring = require('querystring');

/* var Canvas = require("canvas")
  , canvas = new Canvas(200,200)
  , ctx = canvas.getContext('2d'); */

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

var INSTJAN=0; var HAJAN=0; var HWJAN=0; var CNJAN=0; var EMJAN=0; var SMSJAN=0; var DSKJAN=0; var PGJAN=0; var GWJAN=0; var PBXJAN=0; var HTMLJAN=0; var VCJAN=0; var TTSJAN=0; var CMPGNJAN=0; var BPJAN=0; var ANLGJAN=0; var CAPJAN=0;
var INSTFEB=0; var HAFEB=0; var HWFEB=0; var CNFEB=0; var EMFEB=0; var SMSFEB=0; var DSKFEB=0; var PGFEB=0; var GWFEB=0; var PBXFEB=0; var HTMLFEB=0; var VCFEB=0; var TTSFEB=0; var CMPGNFEB=0; var BPFEB=0; var ANLGFEB=0; var CAPFEB=0;
var INSTMAR=0; var HAMAR=0; var HWMAR=0; var CNMAR=0; var EMMAR=0; var SMSMAR=0; var DSKMAR=0; var PGMAR=0; var GWMAR=0; var PBXMAR=0; var HTMLMAR=0; var VCMAR=0; var TTSMAR=0; var CMPGNMAR=0; var BPMAR=0; var ANLGMAR=0; var CAPMAR=0;
var INSTAPR=0; var HAAPR=0; var HWAPR=0; var CNAPR=0; var EMAPR=0; var SMSAPR=0; var DSKAPR=0; var PGAPR=0; var GWAPR=0; var PBXAPR=0; var HTMLAPR=0; var VCAPR=0; var TTSAPR=0; var CMPGNAPR=0; var BPAPR=0; var ANLGAPR=0; var CAPAPR=0;
var INSTMAY=0; var HAMAY=0; var HWMAY=0; var CNMAY=0; var EMMAY=0; var SMSMAY=0; var DSKMAY=0; var PGMAY=0; var GWMAY=0; var PBXMAY=0; var HTMLMAY=0; var VCMAY=0; var TTSMAY=0; var CMPGNMAY=0; var BPMAY=0; var ANLGMAY=0; var CAPMAY=0;
var INSTJUN=0; var HAJUN=0; var HWJUN=0; var CNJUN=0; var EMJUN=0; var SMSJUN=0; var DSKJUN=0; var PGJUN=0; var GWJUN=0; var PBXJUN=0; var HTMLJUN=0; var VCJUN=0; var TTSJUN=0; var CMPGNJUN=0; var BPJUN=0; var ANLGJUN=0; var CAPJUN=0;
var INSTJUL=0; var HAJUL=0; var HWJUL=0; var CNJUL=0; var EMJUL=0; var SMSJUL=0; var DSKJUL=0; var PGJUL=0; var GWJUL=0; var PBXJUL=0; var HTMLJUL=0; var VCJUL=0; var TTSJUL=0; var CMPGNJUL=0; var BPJUL=0; var ANLGJUL=0; var CAPJUL=0;
var INSTAUG=0; var HAAUG=0; var HWAUG=0; var CNAUG=0; var EMAUG=0; var SMSAUG=0; var DSKAUG=0; var PGAUG=0; var GWAUG=0; var PBXAUG=0; var HTMLAUG=0; var VCAUG=0; var TTSAUG=0; var CMPGNAUG=0; var BPAUG=0; var ANLGAUG=0; var CAPAUG=0;
var INSTSEP=0; var HASEP=0; var HWSEP=0; var CNSEP=0; var EMSEP=0; var SMSSEP=0; var DSKSEP=0; var PGSEP=0; var GWSEP=0; var PBXSEP=0; var HTMLSEP=0; var VCSEP=0; var TTSSEP=0; var CMPGNSEP=0; var BPSEP=0; var ANLGSEP=0; var CAPSEP=0;
var INSTOCT=0; var HAOCT=0; var HWOCT=0; var CNOCT=0; var EMOCT=0; var SMSOCT=0; var DSKOCT=0; var PGOCT=0; var GWOCT=0; var PBXOCT=0; var HTMLOCT=0; var VCOCT=0; var TTSOCT=0; var CMPGNOCT=0; var BPOCT=0; var ANLGOCT=0; var CAPOCT=0;
var INSTNOV=0; var HANOV=0; var HWNOV=0; var CNNOV=0; var EMNOV=0; var SMSNOV=0; var DSKNOV=0; var PGNOV=0; var GWNOV=0; var PBXNOV=0; var HTMLNOV=0; var VCNOV=0; var TTSNOV=0; var CMPGNNOV=0; var BPNOV=0; var ANLGNOV=0; var CAPNOV=0;
var INSTDEC=0; var HADEC=0; var HWDEC=0; var CNDEC=0; var EMDEC=0; var SMSDEC=0; var DSKDEC=0; var PGDEC=0; var GWDEC=0; var PBXDEC=0; var HTMLDEC=0; var VCDEC=0; var TTSDEC=0; var CMPGNDEC=0; var BPDEC=0; var ANLGDEC=0; var CAPDEC=0;

var AMJAN=0;var ACJAN=0;var CUJAN=0;var CMJAN=0; var CHJAN=0; var CNJAN=0; var CTJAN=0; var DAJAN=0; var DRJAN=0; var DSJAN=0; var EUJAN=0; var ENJAN=0; var HMJAN=0; var JCJAN=0; var JIJAN=0; var JSJAN=0; var LAJAN=0; var MAJAN=0; var MCJAN=0; var MEJAN=0; var MIJAN=0; var NTJAN=0; var NMJAN=0; var NDJAN=0; var OUJAN=0; var PHJAN=0; var POJAN=0; var PNJAN=0; var RAJAN=0; var SBJAN=0; var SDJAN=0; var SEJAN=0; var SKJAN=0; var SPJAN=0; var SYJAN=0; var SWJAN=0; var TAJAN=0; var TNJAN=0; var TRJAN=0; var UMJAN=0; var VIJAN=0; var VEJAN=0; var VLJAN=0; var WEJAN=0; var WLJAN=0; var WQJAN=0;
var AMFEB=0;var ACFEB=0;var CUFEB=0;var CMFEB=0; var CHFEB=0; var CNFEB=0; var CTFEB=0; var DAFEB=0; var DRFEB=0; var DSFEB=0; var EUFEB=0; var ENFEB=0; var HMFEB=0; var JCFEB=0; var JIFEB=0; var JSFEB=0; var LAFEB=0; var MAFEB=0; var MCFEB=0; var MEFEB=0; var MIFEB=0; var NTFEB=0; var NMFEB=0; var NDFEB=0; var OUFEB=0; var PHFEB=0; var POFEB=0; var PNFEB=0; var RAFEB=0; var SBFEB=0; var SDFEB=0; var SEFEB=0; var SKFEB=0; var SPFEB=0; var SYFEB=0; var SWFEB=0; var TAFEB=0; var TNFEB=0; var TRFEB=0; var UMFEB=0; var VIFEB=0; var VEJAN=0; var VLFEB=0; var WEFEB=0; var WLFEB=0; var WQFEB=0;
var AMMAR=0;var ACMAR=0;var CUMAR=0;var CMMAR=0; var CHMAR=0; var CNMAR=0; var CTMAR=0; var DAMAR=0; var DRMAR=0; var DSMAR=0; var EUMAR=0; var ENMAR=0; var HMMAR=0; var JCMAR=0; var JIMAR=0; var JSMAR=0; var LAMAR=0; var MAMAR=0; var MCMAR=0; var MEMAR=0; var MIMAR=0; var NTMAR=0; var NMMAR=0; var NDMAR=0; var OUMAR=0; var PHMAR=0; var POMAR=0; var PNMAR=0; var RAMAR=0; var SBMAR=0; var SDMAR=0; var SEMAR=0; var SKMAR=0; var SPMAR=0; var SYMAR=0; var SWMAR=0; var TAMAR=0; var TNMAR=0; var TRMAR=0; var UMMAR=0; var VIMAR=0; var VEJAN=0; var VLMAR=0; var WEMAR=0; var WLMAR=0; var WQMAR=0;
var AMAPR=0;var ACAPR=0;var CUAPR=0;var CMAPR=0; var CHAPR=0; var CNAPR=0; var CTAPR=0; var DAAPR=0; var DRAPR=0; var DSAPR=0; var EUAPR=0; var ENAPR=0; var HMAPR=0; var JCAPR=0; var JIAPR=0; var JSAPR=0; var LAAPR=0; var MAAPR=0; var MCAPR=0; var MEAPR=0; var MIAPR=0; var NTAPR=0; var NMAPR=0; var NDAPR=0; var OUAPR=0; var PHAPR=0; var POAPR=0; var PNAPR=0; var RAAPR=0; var SBAPR=0; var SDAPR=0; var SEAPR=0; var SKAPR=0; var SPAPR=0; var SYAPR=0; var SWAPR=0; var TAAPR=0; var TNAPR=0; var TRAPR=0; var UMAPR=0; var VIAPR=0; var VEJAN=0; var VLAPR=0; var WEAPR=0; var WLAPR=0; var WQAPR=0;
var AMMAY=0;var ACMAY=0;var CUMAY=0;var CMMAY=0; var CHMAY=0; var CNMAY=0; var CTMAY=0; var DAMAY=0; var DRMAY=0; var DSMAY=0; var EUMAY=0; var ENMAY=0; var HMMAY=0; var JCMAY=0; var JIMAY=0; var JSMAY=0; var LAMAY=0; var MAMAY=0; var MCMAY=0; var MEMAY=0; var MIMAY=0; var NTMAY=0; var NMMAY=0; var NDMAY=0; var OUMAY=0; var PHMAY=0; var POMAY=0; var PNMAY=0; var RAMAY=0; var SBMAY=0; var SDMAY=0; var SEMAY=0; var SKMAY=0; var SPMAY=0; var SYMAY=0; var SWMAY=0; var TAMAY=0; var TNMAY=0; var TRMAY=0; var UMMAY=0; var VIMAY=0; var VEJAN=0; var VLMAY=0; var WEMAY=0; var WLMAY=0; var WQMAY=0;
var AMJUN=0;var ACJUN=0;var CUJUN=0;var CMJUN=0; var CHJUN=0; var CNJUN=0; var CTJUN=0; var DAJUN=0; var DRJUN=0; var DSJUN=0; var EUJUN=0; var ENJUN=0; var HMJUN=0; var JCJUN=0; var JIJUN=0; var JSJUN=0; var LAJUN=0; var MAJUN=0; var MCJUN=0; var MEJUN=0; var MIJUN=0; var NTJUN=0; var NMJUN=0; var NDJUN=0; var OUJUN=0; var PHJUN=0; var POJUN=0; var PNJUN=0; var RAJUN=0; var SBJUN=0; var SDJUN=0; var SEJUN=0; var SKJUN=0; var SPJUN=0; var SYJUN=0; var SWJUN=0; var TAJUN=0; var TNJUN=0; var TRJUN=0; var UMJUN=0; var VIJUN=0; var VEJAN=0; var VLJUN=0; var WEJUN=0; var WLJUN=0; var WQJUN=0;
var AMJUL=0;var ACJUL=0;var CUJUL=0;var CMJUL=0; var CHJUL=0; var CNJUL=0; var CTJUL=0; var DAJUL=0; var DRJUL=0; var DSJUL=0; var EUJUL=0; var ENJUL=0; var HMJUL=0; var JCJUL=0; var JIJUL=0; var JSJUL=0; var LAJUL=0; var MAJUL=0; var MCJUL=0; var MEJUL=0; var MIJUL=0; var NTJUL=0; var NMJUL=0; var NDJUL=0; var OUJUL=0; var PHJUL=0; var POJUL=0; var PNJUL=0; var RAJUL=0; var SBJUL=0; var SDJUL=0; var SEJUL=0; var SKJUL=0; var SPJUL=0; var SYJUL=0; var SWJUL=0; var TAJUL=0; var TNJUL=0; var TRJUL=0; var UMJUL=0; var VIJUL=0; var VEJAN=0; var VLJUL=0; var WEJUL=0; var WLJUL=0; var WQJUL=0;
var AMAUG=0;var ACAUG=0;var CUAUG=0;var CMAUG=0; var CHAUG=0; var CNAUG=0; var CTAUG=0; var DAAUG=0; var DRAUG=0; var DSAUG=0; var EUAUG=0; var ENAUG=0; var HMAUG=0; var JCAUG=0; var JIAUG=0; var JSAUG=0; var LAAUG=0; var MAAUG=0; var MCAUG=0; var MEAUG=0; var MIAUG=0; var NTAUG=0; var NMAUG=0; var NDAUG=0; var OUAUG=0; var PHAUG=0; var POAUG=0; var PNAUG=0; var RAAUG=0; var SBAUG=0; var SDAUG=0; var SEAUG=0; var SKAUG=0; var SPAUG=0; var SYAUG=0; var SWAUG=0; var TAAUG=0; var TNAUG=0; var TRAUG=0; var UMAUG=0; var VIAUG=0; var VEJAN=0; var VLAUG=0; var WEAUG=0; var WLAUG=0; var WQAUG=0;
var AMSEP=0;var ACSEP=0;var CUSEP=0;var CMSEP=0; var CHSEP=0; var CNSEP=0; var CTSEP=0; var DASEP=0; var DRSEP=0; var DSSEP=0; var EUSEP=0; var ENSEP=0; var HMSEP=0; var JCSEP=0; var JISEP=0; var JSSEP=0; var LASEP=0; var MASEP=0; var MCSEP=0; var MESEP=0; var MISEP=0; var NTSEP=0; var NMSEP=0; var NDSEP=0; var OUSEP=0; var PHSEP=0; var POSEP=0; var PNSEP=0; var RASEP=0; var SBSEP=0; var SDSEP=0; var SESEP=0; var SKSEP=0; var SPSEP=0; var SYSEP=0; var SWSEP=0; var TASEP=0; var TNSEP=0; var TRSEP=0; var UMSEP=0; var VISEP=0; var VEJAN=0; var VLSEP=0; var WESEP=0; var WLSEP=0; var WQSEP=0;
var AMOCT=0;var ACOCT=0;var CUOCT=0;var CMOCT=0; var CHOCT=0; var CNOCT=0; var CTOCT=0; var DAOCT=0; var DROCT=0; var DSOCT=0; var EUOCT=0; var ENOCT=0; var HMOCT=0; var JCOCT=0; var JIOCT=0; var JSOCT=0; var LAOCT=0; var MAOCT=0; var MCOCT=0; var MEOCT=0; var MIOCT=0; var NTOCT=0; var NMOCT=0; var NDOCT=0; var OUOCT=0; var PHOCT=0; var POOCT=0; var PNOCT=0; var RAOCT=0; var SBOCT=0; var SDOCT=0; var SEOCT=0; var SKOCT=0; var SPOCT=0; var SYOCT=0; var SWOCT=0; var TAOCT=0; var TNOCT=0; var TROCT=0; var UMOCT=0; var VIOCT=0; var VEJAN=0; var VLOCT=0; var WEOCT=0; var WLOCT=0; var WQOCT=0;
var AMNOV=0;var ACNOV=0;var CUNOV=0;var CMNOV=0; var CHNOV=0; var CNNOV=0; var CTNOV=0; var DANOV=0; var DRNOV=0; var DSNOV=0; var EUNOV=0; var ENNOV=0; var HMNOV=0; var JCNOV=0; var JINOV=0; var JSNOV=0; var LANOV=0; var MANOV=0; var MCNOV=0; var MENOV=0; var MINOV=0; var NTNOV=0; var NMNOV=0; var NDNOV=0; var OUNOV=0; var PHNOV=0; var PONOV=0; var PNNOV=0; var RANOV=0; var SBNOV=0; var SDNOV=0; var SENOV=0; var SKNOV=0; var SPNOV=0; var SYNOV=0; var SWNOV=0; var TANOV=0; var TNNOV=0; var TRNOV=0; var UMNOV=0; var VINOV=0; var VEJAN=0; var VLNOV=0; var WENOV=0; var WLNOV=0; var WQNOV=0;
var AMDEC=0;var ACDEC=0;var CUDEC=0;var CMDEC=0; var CHDEC=0; var CNDEC=0; var CTDEC=0; var DADEC=0; var DRDEC=0; var DSDEC=0; var EUDEC=0; var ENDEC=0; var HMDEC=0; var JCDEC=0; var JIDEC=0; var JSDEC=0; var LADES=0; var MADEC=0; var MCDEC=0; var MEDEC=0; var MIDEC=0; var NTDEC=0; var NMDEC=0; var NDDEC=0; var OUDEC=0; var PHDEC=0; var PODEC=0; var PNDEC=0; var RADEC=0; var SBDEC=0; var SDDEC=0; var SEDEC=0; var SKDEC=0; var SPDEC=0; var SYDEC=0; var SWDEC=0; var TADEC=0; var TNDEC=0; var TRDEC=0; var UMDEC=0; var VIDEC=0; var VEJAN=0; var VLDEC=0; var WEDEC=0; var WLDEC=0; var WQDEC=0;

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

function storeCustomer(month, type, count) {

  //console.log(month+','+type+','+count);
  switch(month) {
            case 'Jan':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMJAN=count; 
                  break;
              case 'Adult Community':
                  ACJAN=count;
                  break;
              case 'Carletonu':
                  //console.log(type+','+count+','+CUMAR);
                  CUJAN=count;
                  break;
              case 'Celtic Manor':
                  CMJAN=count;
                  break;
              case 'WQSB Chelsea':
                  CHJAN=count;
                  break;
              case 'Conestoga':
                  CNJAN=count;
                  break;
              case 'CTS':
                  CTJAN=count;
                  break;
              case 'WQSB Darcy':
                  DAJAN=count;
                  break;
              case 'Dryden':
                  DRJAN=count;
                  break;
              case 'DSBN':
                  DSJAN=count;
                  break;
              case 'Eunice':
                  EUJAN=count;
                  break;
              case 'ENPQ':
                  ENJAN=count;
                  break;
              case 'HMR':
                  HMJAN=count;
                  break;
              case 'Jay County':
                  JCJAN=count;
                  break;
              case 'JITB':
                  JIJAN=count;
                  break;
              case 'JSCC':
                  JSJAN=count;
                  break;
              case 'Lakehead':
                  LAJAN=count;
                  break;
              case 'Marriott':
                  MAJAN=count;
                  break;
              case 'McDowell':
                  MCJAN=count;
                  break;
              case 'Memorial':
                  MEJAN=count;
                  break;
              case 'Mitel':
                  MIJAN=count;
                  break;
              case 'NMC':
                  NMJAN=count;
                  break;
             case 'Nanticoke':
                  NTJAN=count;
                  break;
             case 'Notre Dame':
                  NDJAN=count;
                  break;
             case 'U Ottawa':
                  OUJAN=count;
                  break;
              case 'Phelps':
                  PHJAN=count;
                  break;
              case 'WQSB Poltimore':
                  POJAN=count;
                  break;
              case 'WQSB Philemon':
                  PNJAN=count;
                  break;
              case 'Rayburn':
                  RAJAN=count;
                  break;
              case 'Santa Barbara':
                  SBJAN=count;
                  break;
              case 'San Diego':
                  SDJAN=count;
                  break;
              case 'Sequoia':
                  SEJAN=count;
                  break;
              case 'Skokie':
                  SKJAN=count;
                  break;
              case 'St Paul':
                  SPJAN=count;
                  break;
              case 'Syniverse':
                  SYJAN=count;
                  break;
              case 'Switch':
                  SWJAN=count;
                  break;
              case 'TAMU':
                  TAJAN=count;
                  break;
              case 'TNCDSB':
                  TNJAN=count;
                  break;
              case 'Trinity':
                  TRJAN=count;
                  break;
              case 'U Manitoba':
                  UMJAN=count;
                  break;
              case 'Vechtdal':
                  VEJAN=count;
                  break;
              case 'Vigo':
                  VIJAN=count;
                  break;
              case 'Villanova':
                  VLJAN=count;
                  break;
              case 'Westerville':
                  WEJAN=count;
                  break;
              case 'Wilfrid Laurier':
                  WLJAN=count;
                  break;
              case 'WQSB - Not Defined':
                  WQJAN=count;
                  break;
              }
            break;
            case 'Feb':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMFEB=count; 
                  break;
              case 'Adult Community':
                  ACFEB=count;
                  break;
              case 'Carletonu':
                  //console.log(type+','+count+','+CUFEB);
                  CUFEB=count;
                  break;
              case 'Celtic Manor':
                  CMFEB=count;
                  break;
              case 'WQSB Chelsea':
                  CHFEB=count;
                  break;
              case 'Conestoga':
                  CNFEB=count;
                  break;
              case 'CTS':
                  CTFEB=count;
                  break;
              case 'WQSB Darcy':
                  DAFEB=count;
                  break;
              case 'Dryden':
                  DRFEB=count;
                  break;
              case 'DSBN':
                  DSFEB=count;
                  break;
              case 'Eunice':
                  EUFEB=count;
                  break;
              case 'ENPQ':
                  ENFEB=count;
                  break;
              case 'HMR':
                  HMFEB=count;
                  break;
              case 'Jay County':
                  JCFEB=count;
                  break;
              case 'JITB':
                  JIFEB=count;
                  break;
              case 'JSCC':
                  JSFEB=count;
                  break;
              case 'Lakehead':
                  LAFEB=count;
                  break;
              case 'Marriott':
                  MAFEB=count;
                  break;
              case 'McDowell':
                  MCFEB=count;
                  break;
              case 'Memorial':
                  MEFEB=count;
                  break;
              case 'Mitel':
                  MIFEB=count;
                  break;
              case 'Nanticoke':
                  NTFEB=count;
                  break;
              case 'NMC':
                  NMFEB=count;
                  break;
             case 'Notre Dame':
                  NDFEB=count;
                  break;
             case 'U Ottawa':
                  OUFEB=count;
                  break;
              case 'Phelps':
                  PHFEB=count;
                  break;
              case 'WQSB Poltimore':
                  POFEB=count;
                  break;
              case 'WQSB Philemon':
                  PNFEB=count;
                  break;
              case 'Rayburn':
                  RAFEB=count;
                  break;
              case 'Santa Barbara':
                  SBFEB=count;
                  break;
              case 'San Diego':
                  SDFEB=count;
                  break;
              case 'Sequoia':
                  SEFEB=count;
                  break;
              case 'Skokie':
                  SKFEB=count;
                  break;
              case 'St Paul':
                  SPFEB=count;
                  break;
              case 'Syniverse':
                  SYFEB=count;
                  break;
              case 'Switch':
                  SWFEB=count;
                  break;
              case 'TAMU':
                  TAFEB=count;
                  break;
              case 'TNCDSB':
                  TNFEB=count;
                  break;
              case 'Trinity':
                  TRFEB=count;
                  break;
              case 'U Manitoba':
                  UMFEB=count;
                  break;
              case 'Vechtdal':
                  VEFEB=count;
                  break;
              case 'Vigo':
                  VIFEB=count;
                  break;
              case 'Villanova':
                  VLFEB=count;
                  break;
              case 'Westerville':
                  WEFEB=count;
                  break;
              case 'Wilfrid Laurier':
                  WLFEB=count;
                  break;
              case 'WQSB - Not Defined':
                  WQFEB=count;
                  break;
              }
            break;            
            case 'Mar':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMMAR=count; 
                  break;
              case 'Adult Community':
                  ACMAR=count;
                  break;
              case 'Carletonu':
                  //console.log(type+','+count+','+CUMAR);
                  CUMAR=count;
                  break;
              case 'Celtic Manor':
                  CMMAR=count;
                  break;
              case 'WQSB Chelsea':
                  CHMAR=count;
                  break;
              case 'Conestoga':
                  CNMAR=count;
                  break;
              case 'CTS':
                  CTMAR=count;
                  break;
              case 'WQSB Darcy':
                  DAMAR=count;
                  break;
              case 'Dryden':
                  DRMAR=count;
                  break;
              case 'DSBN':
                  DSMAR=count;
                  break;
              case 'Eunice':
                  EUMAR=count;
                  break;
              case 'ENPQ':
                  ENMAR=count;
                  break;
              case 'HMR':
                  HMMAR=count;
                  break;
              case 'Jay County':
                  JCMAR=count;
                  break;
              case 'JITB':
                  JIMAR=count;
                  break;
              case 'JSCC':
                  JSMAR=count;
                  break;
              case 'Lakehead':
                  LAMAR=count;
                  break;
              case 'Marriott':
                  MAMAR=count;
                  break;
              case 'McDowell':
                  MCMAR=count;
                  break;
              case 'Memorial':
                  MEMAR=count;
                  break;
              case 'Mitel':
                  MIMAR=count;
                  break;
              case 'Nanticoke':
                  NTMAR=count;
                  break;
              case 'NMC':
                  NMMAR=count;
                  break;
             case 'Notre Dame':
                  NDMAR=count;
                  break;
             case 'U Ottawa':
                  OUMAR=count;
                  break;
              case 'Phelps':
                  PHMAR=count;
                  break;
              case 'WQSB Poltimore':
                  POMAR=count;
                  break;
              case 'WQSB Philemon':
                  PNMAR=count;
                  break;
              case 'Rayburn':
                  RAMAR=count;
                  break;
              case 'Santa Barbara':
                  SBMAR=count;
                  break;
              case 'San Diego':
                  SDMAR=count;
                  break;
              case 'Sequoia':
                  SEMAR=count;
                  break;
              case 'Skokie':
                  SKMAR=count;
                  break;
              case 'St Paul':
                  SPMAR=count;
                  break;
              case 'Syniverse':
                  SYMAR=count;
                  break;
              case 'Switch':
                  SWMAR=count;
                  break;
              case 'TAMU':
                  TAMAR=count;
                  break;
              case 'TNCDSB':
                  TNMAR=count;
                  break;
              case 'Trinity':
                  TRMAR=count;
                  break;
              case 'U Manitoba':
                  UMMAR=count;
                  break;
              case 'Vechtdal':
                  VEMAR=count;
                  break;
              case 'Vigo':
                  VIMAR=count;
                  break;
              case 'Villanova':
                  VLMAR=count;
                  break;
              case 'Westerville':
                  WEMAR=count;
                  break;
              case 'Wilfrid Laurier':
                  WLMAR=count;
                  break;
              case 'WQSB - Not Defined':
                  WQMAR=count;
                  break;
              }
            break;

            case 'Apr':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMAPR=count; 
                  break;
              case 'Adult Community':
                  ACAPR=count;
                  break;
              case 'Carletonu':
                  CUAPR=count;
                  break;
              case 'Celtic Manor':
                  CMAPR=count;
                  break;
              case 'WQSB Chelsea':
                  CHAPR=count;
                  break;
              case 'Conestoga':
                  CNAPR=count;
                  break;
              case 'CTS':
                  CTAPR=count;
                  break;
              case 'WQSB Darcy':
                  DAAPR=count;
                  break;
              case 'Dryden':
                  DRAPR=count;
                  break;
              case 'DSBN':
                  DSAPR=count;
                  break;
              case 'Eunice':
                  EUAPR=count;
                  break;
              case 'ENPQ':
                  ENAPR=count;
                  break;
              case 'HMR':
                  HMAPR=count;
                  break;
              case 'Jay County':
                  JCAPR=count;
                  break;
              case 'JITB':
                  JIAPR=count;
                  break;
              case 'JSCC':
                  JSAPR=count;
                  break;
              case 'Lakehead':
                  LAAPR=count;
                  break;
              case 'Marriott':
                  MAAPR=count;
                  break;
              case 'McDowell':
                  MCAPR=count;
                  break;
              case 'Memorial':
                  MEAPR=count;
                  break;
              case 'Mitel':
                  MIAPR=count;
                  break;
              case 'Nanticoke':
                  NTAPR=count;
                  break;
              case 'NMC':
                  NMAPR=count;
                  break;
              case 'Notre Dame':
                  NDAPR=count;
                  break;
              case 'U Ottawa':
                  OUAPR=count;
                  break;
              case 'Phelps':
                  PHAPR=count;
                  break;
              case 'WQSB Poltimore':
                  POAPR=count;
                  break;
              case 'WQSB Philemon':
                  PNAPR=count;
                  break;
              case 'Rayburn':
                  RAAPR=count;
                  break;
              case 'Santa Barbara':
                  SBAPR=count;
                  break;
              case 'San Diego':
                  SDAPR=count;
                  break;
              case 'Sequoia':
                  SEAPR=count;
                  break;
              case 'Skokie':
                  SKAPR=count;
                  break;
              case 'St Paul':
                  SPAPR=count;
                  break;
              case 'Syniverse':
                  SYAPR=count;
                  break;
              case 'Switch':
                  SWAPR=count;
                  break;
              case 'TAMU':
                  TAAPR=count;
                  break;
              case 'TNCDSB':
                  TNAPR=count;
                  break;
              case 'Trinity':
                  TRAPR=count;
                  break;
              case 'U Manitoba':
                  UMAPR=count;
                  break;
              case 'Vechtdal':
                  VEAPR=count;
                  break;
              case 'Vigo':
                  VIAPR=count;
                  break;
              case 'Villanova':
                  VLAPR=count;
                  break;
              case 'Westerville':
                  WEAPR=count;
                  break;
              case 'Wilfrid Laurier':
                  WLAPR=count;
                  break;
              case 'WQSB - Not Defined':
                  WQAPR=count;
                  break;
              }
            break;

            case 'May':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMMAY=count; 
                  break;
              case 'Adult Community':
                  ACMAY=count;
                  break;
              case 'Carletonu':
                  CUMAY=count;
                  break;
              case 'Celtic Manor':
                  CMMAY=count;
                  break;
              case 'WQSB Chelsea':
                  CHMAY=count;
                  break;
              case 'Conestoga':
                  CNMAY=count;
                  break;
              case 'CTS':
                  CTMAY=count;
                  break;
              case 'WQSB Darcy':
                  DAMAY=count;
                  break;
              case 'Dryden':
                  DRMAY=count;
                  break;
              case 'DSBN':
                  DSMAY=count;
                  break;
              case 'Eunice':
                  EUMAY=count;
                  break;
              case 'ENPQ':
                  ENMAY=count;
                  break;
              case 'HMR':
                  HMMAY=count;
                  break;
              case 'Jay County':
                  JCMAY=count;
                  break;
              case 'JITB':
                  JIMAY=count;
                  break;
              case 'JSCC':
                  JSMAY=count;
                  break;
              case 'Lakehead':
                  LAMAY=count;
                  break;
              case 'Marriott':
                  MAMAY=count;
                  break;
              case 'McDowell':
                  MCMAY=count;
                  break;
              case 'Memorial':
                  MEMAY=count;
                  break;
              case 'Mitel':
                  MIMAY=count;
                  break;
              case 'Nanticoke':
                  NTMAY=count;
                  break;
              case 'NMC':
                  NMMAY=count;
                  break;
              case 'Notre Dame':
                  NDMAY=count;
                  break;
              case 'U Ottawa':
                  OUMAY=count;
                  break;
              case 'Phelps':
                  PHMAY=count;
                  break;
              case 'WQSB Poltimore':
                  POMAY=count;
                  break;
              case 'WQSB Philemon':
                  PNMAY=count;
                  break;
              case 'Rayburn':
                  RAMAY=count;
                  break;
              case 'Santa Barbara':
                  SBMAY=count;
                  break;
              case 'San Diego':
                  SDMAY=count;
                  break;
              case 'Sequoia':
                  SEMAY=count;
                  break;
              case 'Skokie':
                  SKMAY=count;
                  break;
              case 'St Paul':
                  SPMAY=count;
                  break;
              case 'Syniverse':
                  SYMAY=count;
                  break;
              case 'Switch':
                  SWMAY=count;
                  break;
              case 'TAMU':
                  TAMAY=count;
                  break;
              case 'TNCDSB':
                  TNMAY=count;
                  break;
              case 'Trinity':
                  TRMAY=count;
                  break;
              case 'U Manitoba':
                  UMMAY=count;
                  break;
              case 'Vechtdal':
                  VEMAY=count;
                  break;
              case 'Vigo':
                  VIMAY=count;
                  break;
              case 'Villanova':
                  VLMAY=count;
                  break;
              case 'Westerville':
                  WEMAY=count;
                  break;
              case 'Wilfrid Laurier':
                  WLMAY=count;
                  break;
              case 'WQSB - Not Defined':
                  WQMAY=count;
                  break;
              }
            break;

            case 'Jun':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMJUN=count; 
                  break;
              case 'Adult Community':
                  ACJUN=count;
                  break;
              case 'Carletonu':
                  CUJUN=count;
                  break;
              case 'Celtic Manor':
                  CMJUN=count;
                  break;
              case 'WQSB Chelsea':
                  CHJUN=count;
                  break;
              case 'Conestoga':
                  CNJUN=count;
                  break;
              case 'CTS':
                  CTJUN=count;
                  break;
              case 'WQSB Darcy':
                  DAJUN=count;
                  break;
              case 'Dryden':
                  DRJUN=count;
                  break;
              case 'DSBN':
                  DSJUN=count;
                  break;
              case 'Eunice':
                  EUJUN=count;
                  break;
              case 'ENPQ':
                  ENJUN=count;
                  break;
              case 'HMR':
                  HMJUN=count;
                  break;
              case 'Jay County':
                  JCJUN=count;
                  break;
              case 'JITB':
                  JIJUN=count;
                  break;
              case 'JSCC':
                  JSJUN=count;
                  break;
              case 'Lakehead':
                  LAJUN=count;
                  break;
              case 'Marriott':
                  MAJUN=count;
                  break;
              case 'McDowell':
                  MCJUN=count;
                  break;
              case 'Memorial':
                  MEJUN=count;
                  break;
              case 'Mitel':
                  MIJUN=count;
                  break;
              case 'Nanticoke':
                  NTJUN=count;
                  break;
              case 'NMC':
                  NMJUN=count;
                  break;
              case 'Notre Dame':
                  NDJUN=count;
                  break;
              case 'U Ottawa':
                  OUJUN=count;
                  break;
              case 'Phelps':
                  PHJUN=count;
                  break;
              case 'WQSB Poltimore':
                  POJUN=count;
                  break;
              case 'WQSB Philemon':
                  PNJUN=count;
                  break;
              case 'Rayburn':
                  RAJUN=count;
                  break;
              case 'Santa Barbara':
                  SBJUN=count;
                  break;
              case 'San Diego':
                  SDJUN=count;
                  break;
              case 'Sequoia':
                  SEJUN=count;
                  break;
              case 'Skokie':
                  SKJUN=count;
                  break;
              case 'St Paul':
                  SPJUN=count;
                  break;
              case 'Syniverse':
                  SYJUN=count;
                  break;
              case 'Switch':
                  SWJUN=count;
                  break;
              case 'TAMU':
                  TAJUN=count;
                  break;
              case 'TNCDSB':
                  TNJUN=count;
                  break;
              case 'Trinity':
                  TRJUN=count;
                  break;
              case 'U Manitoba':
                  UMJUN=count;
                  break;
              case 'Vechtdal':
                  VEJUN=count;
                  break;
              case 'Vigo':
                  VIJUN=count;
                  break;
              case 'Villanova':
                  VLJUN=count;
                  break;
              case 'Westerville':
                  WEJUN=count;
                  break;
              case 'Wilfrid Laurier':
                  WLJUN=count;
                  break;
              case 'WQSB - Not Defined':
                  WQJUN=count;
                  break;
              }
            break;

            case 'Jul':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMJUL=count; 
                  break;
              case 'Adult Community':
                  ACJUL=count;
                  break;
              case 'Carletonu':
                  CUJUL=count;
                  break;
              case 'Celtic Manor':
                  CMJUL=count;
                  break;
              case 'WQSB Chelsea':
                  CHJUL=count;
                  break;
              case 'Conestoga':
                  CNJUL=count;
                  break;
              case 'CTS':
                  CTAPR=count;
                  break;
              case 'WQSB Darcy':
                  DAJUL=count;
                  break;
              case 'Dryden':
                  DRJUL=count;
                  break;
              case 'DSBN':
                  DSJUL=count;
                  break;
              case 'Eunice':
                  EUJUL=count;
                  break;
              case 'ENPQ':
                  ENJUL=count;
                  break;
              case 'HMR':
                  HMJUL=count;
                  break;
              case 'Jay County':
                  JCJUL=count;
                  break;
              case 'JITB':
                  JIJUL=count;
                  break;
              case 'JSCC':
                  JSJUL=count;
                  break;
              case 'Lakehead':
                  LAJUL=count;
                  break;
              case 'Marriott':
                  MAJUL=count;
                  break;
              case 'McDowell':
                  MCJUL=count;
                  break;
              case 'Memorial':
                  MEJUL=count;
                  break;
              case 'Mitel':
                  MIJUL=count;
                  break;
              case 'Nanticoke':
                  NTJUL=count;
                  break;
              case 'NMC':
                  NMJUL=count;
                  break;
              case 'Notre Dame':
                  NDJUL=count;
                  break;
              case 'U Ottawa':
                  OUJUL=count;
                  break;
              case 'Phelps':
                  PHJUL=count;
                  break;
              case 'WQSB Poltimore':
                  POJUL=count;
                  break;
              case 'WQSB Philemon':
                  PNJUL=count;
                  break;
              case 'Rayburn':
                  RAJUL=count;
                  break;
              case 'Santa Barbara':
                  SBJUL=count;
                  break;
              case 'San Diego':
                  SDJUL=count;
                  break;
              case 'Sequoia':
                  SEJUL=count;
                  break;
              case 'Skokie':
                  SKJUL=count;
                  break;
              case 'St Paul':
                  SPJUL=count;
                  break;
              case 'Syniverse':
                  SYJUL=count;
                  break;
              case 'Switch':
                  SWJUL=count;
                  break;
              case 'TAMU':
                  TAJUL=count;
                  break;
              case 'TNCDSB':
                  TNJUL=count;
                  break;
              case 'Trinity':
                  TRJUL=count;
                  break;
              case 'U Manitoba':
                  UMJUL=count;
                  break;
              case 'Vechtdal':
                  VEJUL=count;
                  break;
              case 'Vigo':
                  VIJUL=count;
                  break;
              case 'Villanova':
                  VLJUL=count;
                  break;
              case 'Westerville':
                  WEJUL=count;
                  break;
              case 'Wilfrid Laurier':
                  WLJUL=count;
                  break;
              case 'WQSB - Not Defined':
                  WQJUL=count;
                  break;
              }
            break;

            case 'Aug':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMAUG=count; 
                  break;
              case 'Adult Community':
                  ACAUG=count;
                  break;
              case 'Carletonu':
                  CUAUG=count;
                  break;
              case 'Celtic Manor':
                  CMAUG=count;
                  break;
              case 'WQSB Chelsea':
                  CHAUG=count;
                  break;
              case 'Conestoga':
                  CNAUG=count;
                  break;
              case 'CTS':
                  CTAUG=count;
                  break;
              case 'WQSB Darcy':
                  DAAUG=count;
                  break;
              case 'Dryden':
                  DRAUG=count;
                  break;
              case 'DSBN':
                  DSAUG=count;
                  break;
              case 'Eunice':
                  EUAUG=count;
                  break;
              case 'ENPQ':
                  ENAUG=count;
                  break;
              case 'HMR':
                  HMAUG=count;
                  break;
              case 'Jay County':
                  JCAUG=count;
                  break;
              case 'JITB':
                  JIAUG=count;
                  break;
              case 'JSCC':
                  JSAUG=count;
                  break;
              case 'Lakehead':
                  LAAUG=count;
                  break;
              case 'Marriott':
                  MAAUG=count;
                  break;
              case 'McDowell':
                  MCAUG=count;
                  break;
              case 'Memorial':
                  MEAUG=count;
                  break;
              case 'Mitel':
                  MIAUG=count;
                  break;
              case 'Nanticoke':
                  NTAUG=count;
                  break;
              case 'NMC':
                  NMAUG=count;
                  break;
              case 'Notre Dame':
                  NDAUG=count;
                  break;
              case 'U Ottawa':
                  OUAUG=count;
                  break;
              case 'Phelps':
                  PHAUG=count;
                  break;
              case 'WQSB Poltimore':
                  POAUG=count;
                  break;
              case 'WQSB Philemon':
                  PNAUG=count;
                  break;
              case 'Rayburn':
                  RAAUG=count;
                  break;
              case 'Santa Barbara':
                  SBAUG=count;
                  break;
              case 'San Diego':
                  SDAUG=count;
                  break;
              case 'Sequoia':
                  SEAUG=count;
                  break;
              case 'Skokie':
                  SKAUG=count;
                  break;
              case 'St Paul':
                  SPAUG=count;
                  break;
              case 'Syniverse':
                  SYAUG=count;
                  break;
              case 'Switch':
                  SWAUG=count;
                  break;
              case 'TAMU':
                  TAAUG=count;
                  break;
              case 'TNCDSB':
                  TNAUG=count;
                  break;
              case 'Trinity':
                  TRAUG=count;
                  break;
              case 'U Manitoba':
                  UMAUG=count;
                  break;
              case 'Vechtdal':
                  VEAUG=count;
                  break;
              case 'Vigo':
                  VIAUG=count;
                  break;
              case 'Villanova':
                  VLAUG=count;
                  break;
              case 'Westerville':
                  WEAUG=count;
                  break;
              case 'Wilfrid Laurier':
                  WLAUG=count;
                  break;
              case 'WQSB - Not Defined':
                  WQAUG=count;
                  break;
              }
            break;

            case 'Sep':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMSEP=count; 
                  break;
              case 'Adult Community':
                  ACSEP=count;
                  break;
              case 'Carletonu':
                  CUSEP=count;
                  break;
              case 'Celtic Manor':
                  CMSEP=count;
                  break;
              case 'WQSB Chelsea':
                  CMSEP=count;
                  break;
              case 'Conestoga':
                  CNSEP=count;
                  break;
              case 'CTS':
                  CTSEP=count;
                  break;
              case 'WQSB Darcy':
                  DASEP=count;
                  break;
              case 'Dryden':
                  DRSEP=count;
                  break;
              case 'DSBN':
                  DSSEP=count;
                  break;
              case 'Eunice':
                  EUSEP=count;
                  break;
              case 'ENPQ':
                  ENSEP=count;
                  break;
              case 'HMR':
                  HMSEP=count;
                  break;
              case 'Jay County':
                  JCSEP=count;
                  break;
              case 'JITB':
                  JISEP=count;
                  break;
              case 'JSCC':
                  JSSEP=count;
                  break;
              case 'Lakehead':
                  LASEP=count;
                  break;
              case 'Marriott':
                  MASEP=count;
                  break;
              case 'McDowell':
                  MCSEP=count;
                  break;
              case 'Memorial':
                  MESEP=count;
                  break;
              case 'Mitel':
                  MISEP=count;
                  break;
              case 'Nanticoke':
                  NTSEP=count;
                  break;
              case 'NMC':
                  NMSEP=count;
                  break;
              case 'Notre Dame':
                  NDSEP=count;
                  break;
              case 'U Ottawa':
                  OUSEP=count;
                  break;
              case 'Phelps':
                  PHSEP=count;
                  break;
              case 'WQSB Poltimore':
                  POSEP=count;
                  break;
              case 'WQSB Philemon':
                  PNSEP=count;
                  break;
              case 'Rayburn':
                  RASEP=count;
                  break;
              case 'Santa Barbara':
                  SBSEP=count;
                  break;
              case 'San Diego':
                  SDSEP=count;
                  break;
              case 'Sequoia':
                  SESEP=count;
                  break;
              case 'Skokie':
                  SKSEP=count;
                  break;
              case 'St Paul':
                  SPSEP=count;
                  break;
              case 'Syniverse':
                  SYSEP=count;
                  break;
              case 'Switch':
                  SWSEP=count;
                  break;
              case 'TAMU':
                  TASEP=count;
                  break;
              case 'TNCDSB':
                  TNSEP=count;
                  break;
              case 'Trinity':
                  TRSEP=count;
                  break;
              case 'U Manitoba':
                  UMSEP=count;
                  break;
              case 'Vechtdal':
                  VESEP=count;
                  break;
              case 'Vigo':
                  VISEP=count;
                  break;
              case 'Villanova':
                  VLSEP=count;
                  break;
              case 'Westerville':
                  WESEP=count;
                  break;
              case 'Wilfrid Laurier':
                  WLSEP=count;
                  break;
              case 'WQSB - Not Defined':
                  WQSEP=count;
                  break;
              }
            break;

            case 'Oct':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMOCT=count; 
                  break;
              case 'Adult Community':
                  ACOCT=count;
                  break;
              case 'Carletonu':
                  CUOCT=count;
                  break;
              case 'Celtic Manor':
                  CMOCT=count;
                  break;
              case 'WQSB Chelsea':
                  CHOCT=count;
                  break;
              case 'Conestoga':
                  CNOCT=count;
                  break;
              case 'CTS':
                  CTOCT=count;
                  break;
              case 'WQSB Darcy':
                  DAOCT=count;
                  break;
              case 'Dryden':
                  DROCT=count;
                  break;
              case 'DSBN':
                  DSOCT=count;
                  break;
              case 'Eunice':
                  EUOCT=count;
                  break;
              case 'ENPQ':
                  ENOCT=count;
                  break;
              case 'HMR':
                  HMOCT=count;
                  break;
              case 'Jay County':
                  JCOCT=count;
                  break;
              case 'JITB':
                  JIOCT=count;
                  break;
              case 'JSCC':
                  JSOCT=count;
                  break;
              case 'Lakehead':
                  LAOCT=count;
                  break;
              case 'Marriott':
                  MAOCT=count;
                  break;
              case 'McDowell':
                  MCOCT=count;
                  break;
              case 'Memorial':
                  MEOCT=count;
                  break;
              case 'Mitel':
                  MIOCT=count;
                  break;
              case 'Nanticoke':
                  NTOCT=count;
                  break;
              case 'NMC':
                  NMOCT=count;
                  break;
              case 'Notre Dame':
                  NDOCT=count;
                  break;
              case 'U Ottawa':
                  OUOCT=count;
                  break;
              case 'Phelps':
                  PHOCT=count;
                  break;
              case 'WQSB Poltimore':
                  POOCT=count;
                  break;
              case 'WQSB Philemon':
                  PNOCT=count;
                  break;
              case 'Rayburn':
                  RAOCT=count;
                  break;
              case 'Santa Barbara':
                  SBOCT=count;
                  break;
              case 'San Diego':
                  SDOCT=count;
                  break;
              case 'Sequoia':
                  SEOCT=count;
                  break;
              case 'Skokie':
                  SKOCT=count;
                  break;
              case 'St Paul':
                  SPOCT=count;
                  break;
              case 'Syniverse':
                  SYOCT=count;
                  break;
              case 'Switch':
                  SWOCT=count;
                  break;
              case 'TAMU':
                  TAOCT=count;
                  break;
              case 'TNCDSB':
                  TNOCT=count;
                  break;
              case 'Trinity':
                  TROCT=count;
                  break;
              case 'U Manitoba':
                  UMOCT=count;
                  break;
              case 'Vechtdal':
                  VEOCT=count;
                  break;
              case 'Vigo':
                  VIOCT=count;
                  break;
              case 'Villanova':
                  VLOCT=count;
                  break;
              case 'Westerville':
                  WEOCT=count;
                  break;
              case 'Wilfrid Laurier':
                  WLOCT=count;
                  break;
              case 'WQSB - Not Defined':
                  WQOCT=count;
                  break;
              }
            break;

            case 'Nov':
              //console.log(type+','+count);
              switch(type) {
                case 'Amityville':
                  AMNOV=count; 
                  break;
              case 'Adult Community':
                  ACNOV=count;
                  break;
              case 'Carletonu':
                  CUNOV=count;
                  break;
              case 'Celtic Manor':
                  CMNOV=count;
                  break;
              case 'WQSB Chelsea':
                  CHNOV=count;
                  break;
              case 'Conestoga':
                  CNMOV=count;
                  break;
              case 'CTS':
                  CTNOV=count;
                  break;
              case 'WQSB Darcy':
                  DANOV=count;
                  break;
              case 'Dryden':
                  DRNOV=count;
                  break;
              case 'DSBN':
                  DSNOV=count;
                  break;
              case 'Eunice':
                  EUNOV=count;
                  break;
              case 'ENPQ':
                  ENNOV=count;
                  break;
              case 'HMR':
                  HMNOV=count;
                  break;
              case 'Jay County':
                  JCNOV=count;
                  break;
              case 'JITB':
                  JINOV=count;
                  break;
              case 'JSCC':
                  JSNOV=count;
                  break;
              case 'Lakehead':
                  LANOV=count;
                  break;
              case 'Marriott':
                  MANOV=count;
                  break;
              case 'McDowell':
                  MCNOV=count;
                  break;
              case 'Memorial':
                  MENOV=count;
                  break;
              case 'Mitel':
                  MINOV=count;
                  break;
              case 'Nanticoke':
                  NTNOV=count;
                  break;
              case 'NMC':
                  NMNOV=count;
                  break;
              case 'Notre Dame':
                  NDNOV=count;
                  break;
              case 'U Ottawa':
                  OUNOV=count;
                  break;
              case 'Phelps':
                  PHNOV=count;
                  break;
              case 'WQSB Poltimore':
                  PONOV=count;
                  break;
              case 'WQSB Philemon':
                  PNNOV=count;
                  break;
              case 'Rayburn':
                  RANOV=count;
                  break;
              case 'Santa Barbara':
                  SBNOV=count;
                  break;
              case 'Sequoia':
                  SENOV=count;
                  break;
              case 'San Diego':
                  SDNOV=count;
                  break;
              case 'Skokie':
                  SKNOV=count;
                  break;
              case 'St Paul':
                  SPNOV=count;
                  break;
              case 'Syniverse':
                  SYNOV=count;
                  break;
              case 'Switch':
                  SWNOV=count;
                  break;
              case 'TAMU':
                  TANOV=count;
                  break;
              case 'TNCDSB':
                  TNNOV=count;
                  break;
              case 'Trinity':
                  TRNOV=count;
                  break;
              case 'U Manitoba':
                  UMNOV=count;
                  break;
              case 'Vechtdal':
                  VENOV=count;
                  break;
              case 'Vigo':
                  VINOV=count;
                  break;
              case 'Villanova':
                  VLNOV=count;
                  break;
              case 'Westerville':
                  WENOV=count;
                  break;
              case 'Wilfrid Laurier':
                  WLNOV=count;
                  break;
              case 'WQSB - Not Defined':
                  WQNOV=count;
                  break;
              }
              break; 

              case 'Dec':
              console.log('DAVE '+type+','+count);
              switch(type) {
                case 'Amityville':
                  AMDEC=count; 
                  break;
              case 'Adult Community':
                  ACDEC=count;
                  break;
              case 'Carletonu':
                  CUDEC=count;
                  break;
              case 'Celtic Manor':
                  CMDEC=count;
                  break;
              case 'WQSB Chelsea':
                  CHDEC=count;
                  break;
              case 'Conestoga':
                  CNDEC=count;
                  break;
              case 'CTS':
                  CTDEC=count;
                  break;
              case 'WQSB Darcy':
                  DADEC=count;
                  break;
              case 'Dryden':
                  DRDEC=count;
                  break;
              case 'DSBN':
                  DSDEC=count;
                  break;
              case 'Eunice':
                  EUDEC=count;
                  break;
              case 'ENPQ':
                  ENDEC=count;
                  break;
              case 'HMR':
                  HMDEC=count;
                  break;
              case 'Jay County':
                  JCDEC=count;
                  break;
              case 'JITB':
                  JIDEC=count;
                  break;
              case 'JSCC':
                  JSDEC=count;
                  break;
              case 'Lakehead':
                  LADEC=count;
                  break;
              case 'Marriott':
                  MADEC=count;
                  break;
              case 'McDowell':
                  MCDEC=count;
                  break;
              case 'Memorial':
                  MEDEC=count;
                  break;
              case 'Mitel':
                  MIDEC=count;
                  break;
              case 'Nanticoke':
                  NTDEC=count;
                  break;
              case 'NMC':
                  NMDEC=count;
                  break;
              case 'Notre Dame':
                  NDDEC=count;
                  break;
              case 'U Ottawa':
                  OUDEC=count;
                  break;
              case 'Phelps':
                  PHDEC=count;
                  break;
              case 'WQSB Poltimore':
                  PODEC=count;
                  break;
              case 'WQSB Philemon':
                  PNDEC=count;
                  break;
              case 'Rayburn':
                  RADEC=count;
                  break;
              case 'Santa Barbara':
                  SBDEC=count;
                  break;
              case 'San Diego':
                  SDDEC=count;
                  break;
              case 'Sequoia':
                  SEDEC=count;
                  break;
              case 'Skokie':
                  SKDEC=count;
                  break;
              case 'St Paul':
                  SPDEC=count;
                  break;
              case 'Syniverse':
                  SYDEC=count;
                  break;
              case 'Switch':
                  SWDEC=count;
                  break;
              case 'TAMU':
                  TADEC=count;
                  break;
              case 'TNCDSB':
                  TNDEC=count;
                  break;
              case 'Trinity':
                  TRDEC=count;
                  break;
              case 'U Manitoba':
                  UMDEC=count;
                  break;
              case 'Vechtdal':
                  VEDEC=count;
                  break;
              case 'Vigo':
                  VIDEC=count;
                  break;
              case 'Villanova':
                  VLDEC=count;
                  break;
              case 'Westerville':
                  WEDEC=count;
                  break;
              case 'Wilfrid Laurier':
                  WLDEC=count;
                  break;
              case 'WQSB - Not Defined':
                  WQDEC=count;
                  break;
              }
            break;

  }

}

function storeMonth(month, type, count) {

  console.log(month+','+type+','+count);
  switch(month) {
            case 'Jan':
              //console.log(type+','+count);
              switch(type) {
                case 'BlazeCast Install':
                  INSTJAN=count;
                  break;
                case 'HA':
                  HAJAN=count;
                  break;
                case 'Hardware':
                  HWJAN=count;
                  break;
                case 'Contacts':
                  CNJAN=count;
                  break;
                case 'Email':
                  EMJAN=count;
                  break;
                case 'SMS':
                  SMSJAN=count;
                  break;
                case 'Desktop':
                  DSKJAN=count;
                  break;
                case 'Paging':
                 PGJAN=count;
                  break;
                case 'Gateway':
                  GWJAN=count;
                  break;
                case 'PBX(3300)':
                  PBXJAN=count;
                  break;
                case 'HTML Application':
                  HTMLJAN=count;
                  break;
                case 'Voice Dialing':
                  VCJAN=count;
                  break;
                case 'Text to Speech':
                  TTSTJAN=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNJAN=count;
                  break;
                case 'BlazePoint Speakers':
                  BPJAN=count;
                  break;
                case 'Analog Devices':
                  ANLGJAN=count;
                  break;
                case 'CAP Aggregator':
                  CAPJAN=count;
                  break;
                }
            break;
            case 'Feb':
              //console.log(type+','+count);
              switch(type) {
                case 'BlazeCast Install':
                  INSTFEB=count;
                  break;
                case 'HA':
                  HAFEB=count;
                  break;
                case 'Hardware':
                  HWFEB=count;
                  break;
                case 'Contacts':
                  CNFEB=count;
                  break;
                case 'Email':
                  EMFEB=count;
                  break;
                case 'SMS':
                  SMSFEB=count;
                  break;
                case 'Desktop':
                  DSKFEB=count;
                  break;
                case 'Paging':
                 PGFEB=count;
                  break;
                case 'Gateway':
                  GWFEB=count;
                  break;
                case 'PBX(3300)':
                  PBXFEB=count;
                  break;
                case 'HTML Application':
                  HTMLFEB=count;
                  break;
                case 'Voice Dialing':
                  VCFEB=count;
                  break;
                case 'Text to Speech':
                  TTSTFEB=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNFEB=count;
                  break;
                case 'BlazePoint Speakers':
                  BPFEB=count;
                  break;
                case 'Analog Devices':
                  ANLGFEB=count;
                  break;
                case 'CAP Aggregator':
                  CAPFEB=count;
                  break;
                }
            break;
            case 'Mar':
              //console.log(type+','+count);
              switch(type) {
                case 'BlazeCast Install':
                  INSTMAR=count;
                  break;
                case 'HA':
                  HAMAR=count;
                  break;
                case 'Hardware':
                  HWMAR=count;
                  break;
                case 'Contacts':
                  CNMAR=count;
                  break;
                case 'Email':
                  EMMAR=count;
                  break;
                case 'SMS':
                  SMSMAR=count;
                  break;
                case 'Desktop':
                  DSKMAR=count;
                  break;
                case 'Paging':
                 PGMAR=count;
                  break;
                case 'Gateway':
                  GWMAR=count;
                  break;
                case 'PBX(3300)':
                  PBXMAR=count;
                  break;
                case 'HTML Application':
                  HTMLMAR=count;
                  break;
                case 'Voice Dialing':
                  VCMAR=count;
                  break;
                case 'Text to Speech':
                  TTSTMAR=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNMAR=count;
                  break;
                case 'BlazePoint Speakers':
                  BPMAR=count;
                  break;
                case 'Analog Devices':
                  ANLGMAR=count;
                  break;
                case 'CAP Aggregator':
                  CAPMAR=count;
                  break;
                }
            break;
            case 'Apr':
              //console.log(type+','+count);
              switch(type) {
                case 'BlazeCast Install':
                  INSTAPR=count;
                  break;
                case 'HA':
                  HAAPR=count;
                  break;
                case 'Hardware':
                  HWAPR=count;
                  break;
                case 'Contacts':
                  CNAPR=count;
                  break;
                case 'Email':
                  EMAPR=count;
                  break;
                case 'SMS':
                  SMSAPR=count;
                  break;
                case 'Desktop':
                  DSKAPR=count;
                  break;
                case 'Paging':
                 PGAPR=count;
                  break;
                case 'Gateway':
                  GWAPR=count;
                  break;
                case 'PBX(3300)':
                  PBXAPR=count;
                  break;
                case 'HTML Application':
                  HTMLAPR=count;
                  break;
                case 'Voice Dialing':
                  VCAPR=count;
                  break;
                case 'Text to Speech':
                  TTSTAPR=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNAPR=count;
                  break;
                case 'BlazePoint Speakers':
                  BPAPR=count;
                  break;
                case 'Analog Devices':
                  ANLGAPR=count;
                  break;
                case 'CAP Aggregator':
                  CAPAPR=count;
                  break;
                }
            break;
            case 'May':
              //console.log(type+','+count);
              switch(type) {
                case 'BlazeCast Install':
                  INSTMAY=count;
                  break;
                case 'HA':
                  HAMAY=count;
                  break;
                case 'Hardware':
                  HWMAY=count;
                  break;
                case 'Contacts':
                  CNMAY=count;
                  break;
                case 'Email':
                  EMMAY=count;
                  break;
                case 'SMS':
                  SMSMAY=count;
                  break;
                case 'Desktop':
                  DSKMAY=count;
                  break;
                case 'Paging':
                 PGMAY=count;
                  break;
                case 'Gateway':
                  GWMAY=count;
                  break;
                case 'PBX(3300)':
                  PBXMAY=count;
                  break;
                case 'HTML Application':
                  HTMLMAY=count;
                  break;
                case 'Voice Dialing':
                  VCMAY=count;
                  break;
                case 'Text to Speech':
                  TTSTMAY=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNMAY=count;
                  break;
                case 'BlazePoint Speakers':
                  BPMAY=count;
                  break;
                case 'Analog Devices':
                  ANLGMAY=count;
                  break;
                case 'CAP Aggregator':
                  CAPMAY=count;
                  break;
                }
            break;
            case 'Jun':
              //console.log(type+','+count);
              switch(type) {
                case 'BlazeCast Install':
                  INSTJUN=count;
                  break;
                case 'HA':
                  HAJUN=count;
                  break;
                case 'Hardware':
                  HWJUN=count;
                  break;
                case 'Contacts':
                  CNJUN=count;
                  break;
                case 'Email':
                  EMJUN=count;
                  break;
                case 'SMS':
                  SMSJUN=count;
                  break;
                case 'Desktop':
                  DSKJUN=count;
                  break;
                case 'Paging':
                 PGJUN=count;
                  break;
                case 'Gateway':
                  GWJUN=count;
                  break;
                case 'PBX(3300)':
                  PBXJUN=count;
                  break;
                case 'HTML Application':
                  HTMLJUN=count;
                  break;
                case 'Voice Dialing':
                  VCJUN=count;
                  break;
                case 'Text to Speech':
                  TTSTJUN=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNJUN=count;
                  break;
                case 'BlazePoint Speakers':
                  BPJUN=count;
                  break;
                case 'Analog Devices':
                  ANLGJUN=count;
                  break;
                case 'CAP Aggregator':
                  CAPJUN=count;
                  break;
                }
            break;
            case 'Jul':
              //console.log(type+','+count);
              switch(type) {
                case 'BlazeCast Install':
                  INSTJUL=count;
                  break;
                case 'HA':
                  HAJUL=count;
                  break;
                case 'Hardware':
                  HWJUL=count;
                  break;
                case 'Contacts':
                  CNJUL=count;
                  break;
                case 'Email':
                  EMJUL=count;
                  break;
                case 'SMS':
                  SMSJUL=count;
                  break;
                case 'Desktop':
                  DSKJUL=count;
                  break;
                case 'Paging':
                 PGJUL=count;
                  break;
                case 'Gateway':
                  GWJUL=count;
                  break;
                case 'PBX(3300)':
                  PBXJUL=count;
                  break;
                case 'HTML Application':
                  HTMLJUL=count;
                  break;
                case 'Voice Dialing':
                  VCJUL=count;
                  break;
                case 'Text to Speech':
                  TTSTJUL=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNJUL=count;
                  break;
                case 'BlazePoint Speakers':
                  BPJUL=count;
                  break;
                case 'Analog Devices':
                  ANLGJUL=count;
                  break;
                case 'CAP Aggregator':
                  CAPJUL=count;
                  break;
                }
            break;

            case 'Aug':
              //console.log(type+','+count);
              switch(type) {
                case 'BlazeCast Install':
                  INSTAUG=count;
                  break;
                case 'HA':
                  HAAUG=count;
                  break;
                case 'Hardware':
                  HWAUG=count;
                  break;
                case 'Contacts':
                  CNAUG=count;
                  break;
                case 'Email':
                  EMAUG=count;
                  break;
                case 'SMS':
                  SMSAUG=count;
                  break;
                case 'Desktop':
                  DSKAUG=count;
                  break;
                case 'Paging':
                 PGAUG=count;
                  break;
                case 'Gateway':
                  GWAUG=count;
                  break;
                case 'PBX(3300)':
                  PBXAUGcount;
                  break;
                case 'HTML Application':
                  HTMLAUG=count;
                  break;
                case 'Voice Dialing':
                  VCAUG=count;
                  break;
                case 'Text to Speech':
                  TTSTAUG=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNAUG=count;
                  break;
                case 'BlazePoint Speakers':
                  BPAUG=count;
                  break;
                case 'Analog Devices':
                  ANLGAUG=count;
                  break;
                case 'CAP Aggregator':
                  CAPAUG=count;
                  break;
                }
            break;

            case 'Sep':
              //console.log(type+','+count);
              switch(type) {
                case 'BlazeCast Install':
                  INSTSEP=count;
                  break;
                case 'HA':
                  HASEP=count;
                  break;
                case 'Hardware':
                  HWSEP=count;
                  break;
                case 'Contacts':
                  CNSEP=count;
                  break;
                case 'Email':
                  EMSEP=count;
                  break;
                case 'SMS':
                  SMSSEP=count;
                  break;
                case 'Desktop':
                  DSKSEP=count;
                  break;
                case 'Paging':
                 PGSEP=count;
                  break;
                case 'Gateway':
                  GWSEP=count;
                  break;
                case 'PBX(3300)':
                  PBXSEP=count;
                  break;
                case 'HTML Application':
                  HTMLSEP=count;
                  break;
                case 'Voice Dialing':
                  VCSEP=count;
                  break;
                case 'Text to Speech':
                  TTSTSEP=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNSEP=count;
                  break;
                case 'BlazePoint Speakers':
                  BPSEP=count;
                  break;
                case 'Analog Devices':
                  ANLGSEP=count;
                  break;
                case 'CAP Aggregator':
                  CAPSEP=count;
                  break;
                }
            break;

            case 'Oct':
             //console.log(type+','+count);
              switch(type) {
                case 'BlazeCast Install':
                  INSTOCT=count;
                  break;
                case 'HA':
                  HAOCT=count;
                  break;
                case 'Hardware':
                  HWOCT=count;
                  break;
                case 'Contacts':
                  CNOCT=count;
                  break;
                case 'Email':
                  EMOCT=count;
                  break;
                case 'SMS':
                  SMSOCT=count;
                  break;
                case 'Desktop':
                  DSKOCT=count;
                  break;
                case 'Paging':
                 PGOCT=count;
                  break;
                case 'Gateway':
                  GWOCT=count;
                  break;
                case 'PBX(3300)':
                  PBXOCT=count;
                  break;
                case 'HTML Application':
                  HTMLOCT=count;
                  break;
                case 'Voice Dialing':
                  VCOCT=count;
                  break;
                case 'Text to Speech':
                  TTSTOCT=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNOCT=count;
                  break;
                case 'BlazePoint Speakers':
                  BPOCT=count;
                  break;
                case 'Analog Devices':
                  ANLGOCT=count;
                  break;
                case 'CAP Aggregator':
                  //console.log(type+','+count);
                  CAPOCT=count;
                  break;
                }
              break;
              case 'Nov':
                switch(type) {
                case 'BlazeCast Install':
                  INSTNOV=count;
                  break;
                case 'HA':
                  HANOV=count;
                  break;
                case 'Hardware':
                  HWNOV=count;
                  break;
                case 'Contacts':
                  CNNOV=count;
                  break;
                case 'Email':
                  EMNOV=count;
                  break;
                case 'SMS':
                  SMSNOV=count;
                  break;
                case 'Desktop':
                  DSKNOV=count;
                  break;
                case 'Paging':
                  PGNOV=count;
                  break;
                case 'Gateway':
                  GWNOV=count;
                  break;
                case 'PBX(3300)':
                  BCSTNOV=count;
                  break;
                case 'HTML Application':
                  HTMLNOV=count;
                  break;
                case 'Voice Dialing':
                  VCNOV=count;
                  break;
                case 'Text to Speech':
                  TTSNOV=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNNOV=count;
                  break;
                case 'BlazePoint Speakers':
                  BPNOV=count;
                  break;
                case 'Analog Devices':
                  ANLGNOV=count;
                  break;
                case 'CAP Aggregator':
                  CAPNOV=count;
                  break;
                }
                break;
                case 'Dec':
                console.log (count);
                switch(type) {
                case 'BlazeCast Install':
                  INSTDEC=count;
                  break;
                case 'HA':
                  HADEC=count;
                  break;
                case 'Hardware':
                  HWDEC=count;
                  break;
                case 'Contacts':
                  CNDEC=count;
                  break;
                case 'Email':
                  EMDEC=count;
                  break;
                case 'SMS':
                  SMSDEC=count;
                  break;
                case 'Desktop':
                  DSKDEC=count;
                  break;
                case 'Paging':
                  PGDEC=count;
                  break;
                case 'Gateway':
                  GWDEC=count;
                  break;
                case 'PBX(3300)':
                  BCSTDEC=count;
                  break;
                case 'HTML Application':
                  HTMLDEC=count;
                  break;
                case 'Voice Dialing':
                  VCDEC=count;
                  break;
                case 'Text to Speech':
                  TTSDEC=count;
                  break;
                case 'Campaign Dialing':
                  CMPGNDEC=count;
                  break;
                case 'BlazePoint Speakers':
                  BPDEC=count;
                  break;
                case 'Analog Devices':
                  ANLGDEC=count;
                  break;
                case 'CAP Aggregator':
                  CAPDEC=count;
                  break;
                }
              break;
  }

}

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

  
function writeBottom(feature, x) {
  var bottom = '</table>' +
               '<p><b>Total Number of ' +  feature + ' Tickets: '+ x +              
               '</body></html>'; 
  return bottom;
}

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

function getValues(tickets) {
  var table = '<tr>' +
                  '<td>'+tickets.id+'</td>' +
                  '<td>'+tickets.subject+'</td>' +
                  '<td>'+tickets.type+'</td>' +
                  '<td>'+tickets.priority+'</td>' +
                  '<td>'+tickets.requester+'</td>' +
                  '<td>'+tickets.requested+'</td>' +
                  '<td>'+tickets.updated+'</td>' +
                  '<td>'+tickets.solved+'</td>' +
                  '<td>'+tickets.status+'</td>' +
                  '<td>'+tickets.assignee+'</td>' +
                  '</tr>';
    return table;
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

        http.createServer(function (req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('_testcb(\'{"message": "Hello world!"}\')');
        
       /* var formHeaders = new Array("Open", "Pending", "Solved", "Closed", "Statistics", "Tags", "Customer", "Categories");
        var title = "All Tickets";
        var label = "Start";
        var top = writeTop(title, label);
        var form = [];
        var form = writeForm(formHeaders);

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(top);
        
        for (var i = 0; i < form.length; i++) {
          var line = form[i];
          response.write(line);
          console.log(line);
        } 
        response.write(ticketBottom);
        response.write(columns);
        
        /* mysql Query - ALL Tickets */
      /*  mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets order by id', function selectCb(err, results, fields) {
        if (err) {
          throw err;
        }
        var feature = "";
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
   
        var bottom = writeBottom(feature, x);
        response.write(bottom);
        response.end();
      }); */
 
}

/*function Statistics(response, request) {
  var title = "Statistics";
  var label = "Tickets";
  var top = writeTop(title, label);
  var labelCount = '<p><b>COUNTS</b></p>';
  var labelDate = '<p><b>DATES</b></p>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(top);
  response.write(labelCount);
        
  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "All";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature, count);
    response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where status="Open"', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Open";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where status="Pending"', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Pending";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where type="Incident"', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Incident";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where type="Problem"', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Problem";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where type="Question"', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Information";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where Priority="Urgent"', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Urgent Priority";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where Priority="High"', function selectCb(err, results, fields) {
      if (err) {
        throw err;
      }
    var feature = "High Priority";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

   mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where Priority="Normal"', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Normal Priority";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where Priority="Low"', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Low Priority";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where id<291', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in 2012";
    var count = results[0]["count(*)"]
    response.write(labelDate);
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

 mysql.query('use ' + DATABASE);
   var data = mysql.query('select count(*) from tickets where solved != "" and id<291', function selectCb(err, results, fields) {
   if (err) {
     throw err;
   }
   var feature = "Closed in 2012";
   var count = results[0]["count(*)"]
   var bottom = writeBottom(feature,count);
   response.write(bottom);
 });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Jan%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in January";
    var count = results[0]["count(*)"]
    //response.write(labelDate);
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

 mysql.query('use ' + DATABASE);
   var data = mysql.query('select count(*) from tickets where solved like "Jan%" and id>290', function selectCb(err, results, fields) {
   if (err) {
     throw err;
   }
   var feature = "Closed in January";
   var count = results[0]["count(*)"]
   var bottom = writeBottom(feature,count);
   response.write(bottom);
 });

 mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Feb%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in Febuary";
    var count = results[0]["count(*)"]
    //response.write(labelDate);
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

 mysql.query('use ' + DATABASE);
   var data = mysql.query('select count(*) from tickets where solved like "Feb%" and id>290', function selectCb(err, results, fields) {
   if (err) {
     throw err;
   }
   var feature = "Closed in Febuary";
   var count = results[0]["count(*)"]
   var bottom = writeBottom(feature,count);
   response.write(bottom);
 });

 /* mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Mar%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in March";
    var count = results[0]["count(*)"]
    response.write(labelDate);
    var bottom = writeBottom(feature,count);
    response.write(bottom);
  });

 mysql.query('use ' + DATABASE);
   var data = mysql.query('select count(*) from tickets where solved like "Mar%" and id>290', function selectCb(err, results, fields) {
   if (err) {
     throw err;
   }
   var feature = "Closed in March";
   var count = results[0]["count(*)"]
   var bottom = writeBottom(feature,count);
   response.write(bottom);
 });

 mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Apr%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Open in April";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
 });

 mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where solved like "Apr%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Closed in April";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "May%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in May";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

 mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where solved like "May%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Closed in May";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Jun%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in June";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where solved like "Jun%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Closed in June";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Jul%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in July";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where solved like "Jul%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Closed in July";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

    mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Aug%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in August";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where solved like "Aug%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Closed in August";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Sep%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in September";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where solved like "Sep%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Closed in September";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Oct%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in October";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where solved like "Oct%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Closed in October";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Nov%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in November";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where solved like "Nov%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Closed in November";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where requested like "Dec%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Opened in December";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
});

mysql.query('use ' + DATABASE);
    var data = mysql.query('select count(*) from tickets where solved like "Dec%" and id>290', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var feature = "Closed in December";
    var count = results[0]["count(*)"]
    var bottom = writeBottom(feature,count);
    response.write(bottom);
}); */
/*      
mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where (status="Closed" or status="Solved") and id>290', function selectCb(err, results, fields) {
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
     // console.log('Difference in date '+diffDate);
      totalDays += diffDate;
    } 
    console.log('COUNT '+count);
    var Days = totalDays / count;
    var finalDays = Days.toFixed(0);
    console.log(finalDays);
    var bottom = '<p><b>Average Number of Days  to Close/Solve Tickets in 2013: '+ finalDays ;              
    response.write(bottom);
        
  }); 

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where (status="Open" or status="Pending") and id>290', function selectCb(err, results, fields) {
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
       
      // CALCULATE THE DAYS BETWEEN REQUEST AND TODAY
      var diffDate = dateDifference(nDate, rDate);
      //console.log(tickets.subject + " Days Open " + diffDate);
      totalDays += diffDate;
        
    }
    
    var Days = totalDays / count;
    var finalDays = Days.toFixed(0);
    var bottom = '<p><b>Avg. Number of Days of Opened or Pending Tickets in 2013: '+ finalDays ;             
    response.write(bottom);
    response.end();
 
  });

}

function Tags(response, request) {

var tableTop = '<table font-family="Trebuchet MS" border="1 solid #98bf21" style="font-size:15;background-color:#EAF2D3;color:#000000;text-align:center;padding-top:5px;padding-bottom:4px" width="50%">' +
               '<tr>';
var columns = '<tr><th>ID</th><th>Tag Name</th><th>Count</th></tr>';

  var options = {
  host: 'benbria.zendesk.com',
  port: 443,
  path: '/tags.json',
  method: 'GET',
  auth: 'drobern@benbria.com:Stwn1hgb4!'
  };

  var title = "TAGS";
  var label = "Tickets";
  var top = writeTop(title, label);
  var req = https.request(options, function(res) {
  
  res.on('data', function(d) {
      // DO STUFF HERE
      var tag = JSON.parse(d);
     
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(top);
      response.write(tableTop);
      response.write(columns);

      for (var i = 0; i < tag.length; i++) {
        var table = '<tr>' +
                    '<td>'+tag[i].id+'</td>' +
                    '<td><center>'+tag[i].name+'</center></td>' +
                    '<td>'+tag[i].count+'</td>' +
                    '</tr>';

        response.write(table);
      }
     response.end(); 
    });
  });

req.end();
 
req.on('error', function(e) {
  console.error(e);
});

}

function Open(response, request) {
  var title = "Open Tickets";
  var label = "Tickets";
  var top = writeTop(title, label);

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(top);
  
  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where type="Incident" and status="Open" order by requested', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var incident =  '<center><H3>Open BY Type</H3></center>' +
                    '<H4>Incidents</H4>';
    var x = 0;
    response.write(incident);
    response.write(ticketBottom);
    response.write(columns);
    for (var i in results) {
      x++;
      var tickets = results[i];
      var table = getValues(tickets);
      response.write(table);
    }
   
    var feature = "Open Incident";
    var bottom = writeBottom(feature,x);
    response.write(bottom);
        
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where type="Problem" and status="Open" order by requested', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var problem = '<H4>Problem</H4>';
    response.write(problem);
    response.write(ticketBottom);
    response.write(columns);
    var x = 0;
    for (var i in results) {
      x++;
      var tickets = results[i];
      var table = getValues(tickets);
      response.write(table);
    }
    var feature = "Open Problem";
    var bottom = writeBottom(feature,x);
    response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
    var data = mysql.query('select * from tickets where type="Question" and status="Open" order by requested', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var question = '<H4>Information</H4>';
    response.write(question);
    response.write(ticketBottom);
    response.write(columns);
    var x = 0;
    for (var i in results) {
      x++;
      var tickets = results[i];
      var table = getValues(tickets);
      response.write(table);
    }
    var feature = "Open Information";
    var bottom = writeBottom(feature,x);
    response.write(bottom);
  });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Urgent" and status="Open" order by requested', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var urgent = '<center><H3>Open BY Priority</H3></center>' +
                     '<H4>Urgent</H4>';
        response.write(urgent);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Open Urgent";
        var bottom = writeBottom(feature,x);  
        response.write(bottom);
   });

   mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="High" and status="Open" order by requested', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var high =  '<H4>High</H4>';
        response.write(high);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Open High";
        var bottom = writeBottom(feature,x); 
        response.write(bottom);
   });

   mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Normal" and status="Open" order by requested', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var normal =  '<H4>Normal</H4>';
        response.write(normal);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Open Normal";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Low" and status="Open" order by requested', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var low = '<H4>Low</H4>';
        response.write(low);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Open Low";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
        response.end();  
      });
}

function Pending(response, request) {
  var title = "Pending Tickets";
  var label = "Tickets";
  var top = writeTop(title, label);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(top);
  mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where type="Incident" and status="Pending"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
        }
        var incident =  '<center><H3>Pending BY Type</H3></center>' +
                        '<H4>Incidents</H4>';
        response.write(incident);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Pending Incident";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where type="Problem" and status="Pending"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var problem = '<H4>Problem</H4>';
        response.write(problem);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Pending Problem";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where type="Question" and status="Pending"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var question = '<H4>Information</H4>';
        response.write(question);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Pending Information";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Urgent" and status="Pending"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var urgent =  '<center><H3>Pending BY Priority</H3></center>' +
                      '<p><H4>Urgent</H4>';
        response.write(urgent);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Pending Urgent";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="High" and status="Pending"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }

        var high =  '<H4>High</H4>';
        response.write(high);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Pending High";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Normal" and status="Pending"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var normal =  '<H4>Normal</H4>';
        response.write(normal);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Pending Normal";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
  });

  mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Low" and status="Pending"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var low = '<H4>Low</H4>';
        response.write(low);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Pending low";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
        response.end();  
      });

}

function Solved(response, request) {
  var title = "Solved Tickets";
  var label = "Tickets";
  var top = writeTop(title, label);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(top);
  mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where type="Incident" and status="Solved"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
        }
        var incident =  '<center><H3>Solved BY Type</H3></center>' +
                        '<H4>Incidents</H4>';
        response.write(incident);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Solved Incident";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
  });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where type="Problem" and status="Solved"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var problem = '<H4>Problem</H4>';
        response.write(problem);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Solved Problem";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
       });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where type="Question" and status="Solved"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var question = '<H4>Information</H4>';
        response.write(question);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Solved Information";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
          
      });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Urgent" and status="Solved"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var urgent =  '<center><H3>Solved BY Priority</H3></center>' +
                      '<H4>Urgent</H4>';
        response.write(urgent);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Solved Urgent";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
       });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="High" and status="Solved"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var high =  '<H4>High</H4>';
        response.write(high);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Solved High Priority";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
        });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Normal" and status="Solved"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var normal =  '<H4>Normal</H4>';
        response.write(normal);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Solved Normal Priority";
        var bottom = writeBottom(feature,x);response.write(bottom);
       });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Low" and status="Solved"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var low =     '<H4>Low</H4>';
        response.write(low);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Solved Low Priority";
        var bottom = writeBottom(feature,x);response.write(bottom);
        response.write(bottom);
        response.end();  
      });
}

function Closed(response, request) {
        var title = "Closed Tickets";
        var label = "Tickets";
        var top = writeTop(title, label);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(top);
  
        mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where type="Incident" and status="Closed"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
        }
        var incident =  '<center><H3>Closed BY Type</H3></center>' +
                        '<H4>Incidents</H4>';
        response.write(incident);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Closed Incident";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
        
      });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where type="Problem" and status="Closed"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var problem = '<H4>Problem</H4>';
        response.write(problem);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Closed Problem";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
      });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where type="Question" and status="Closed"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var question = '<H4>Information</H4>';
        response.write(question);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Closed Information";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
      });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Urgent" and status="Closed"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var urgent =  '<center><H3>Closed BY Priority</H3></center>' +
                      '<H4>Urgent</H4>';
        response.write(urgent);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Closed Urgent Priority";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
      });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="High" and status="Closed"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var high =  '<H4>High</H4>';
        response.write(high);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Closed High Priority";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
      });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Normal" and status="Closed"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var normal =  '<H4>Normal</H4>';
        response.write(normal);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        
        }
        var feature = "Closed Normal Priority";
        var bottom = writeBottom(feature,x);
        response.write(bottom);
      });

      mysql.query('use ' + DATABASE);
        var data = mysql.query('select * from tickets where priority="Low" and status="Closed"', function selectCb(err, results, fields) {
        if (err) {
            throw err;
        }
        var low =     '<H4>Low</H4>';
        response.write(low);
        response.write(ticketBottom);
        response.write(columns);
        var x = 0;
        for (var i in results) {
          x++;
          var tickets = results[i];
          var table = getValues(tickets);
          response.write(table);
        }
        var feature = "Closed Low Priority";
        var bottom = writeBottom(feature,x);response.write(bottom);
        response.end();  
      });
}

function Inventory(response, request) {
 var top = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>' +
        '<H2><center>Speakers</H2></P>' +
        '<form action="/Start" method="post">'+
        '<input type="submit" value="Back" />'+
        '</form>'+
        '<table border="1" bordercolor="#ff00ff" style="background-color:#c0c0c0" width="100%" cellpadding="3" cellspacing="3">' +
        '<tr>' +
        '<td><b>Serial Number</td>' +
        '<td><b>MAC</td>' +
        '<td><b>Location</td>' +
        '<td><b>Last Update</td>' +
        '</tr>';
  



          
  response.writeHead(200, {"Content-Type": "text/html"});
        
  /* mysql Speaker Inventory */
  /*response.write(top);
  
  mysql.query('use ' + DATABASE);
  var data = mysql.query('select serial_number, MAC, location, last_update from speaker order by serial_number', function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
  
    console.log('here is the data');
    for (var i in results) {
      var speaker = results[i];
      /* console.log(speaker.serial_number +': '+ speaker.MAC +': '+ speaker.location);
      p = speaker.serial_number;
      response.write(p);
      console.log(JSON.stringify(results));
      response.write("getSpeakerData("+JSON.stringify(results)+")"); */
     /* var table = '<tr>' +
                  '<td>'+speaker.serial_number+'</td>' +
                  '<td>'+speaker.MAC+'</td>' +
                  '<td>'+speaker.location+'</td>' +
                  '<td>'+speaker.last_update+'</td>' +
                  '</tr>'
      response.write(table)
    }
   
      var bottom = '</table>' +
                   '<p style="font-family:verdana,arial,sans-serif;font-size:10px;"><a href="http://www.quackit.com/html/html_table_tutorial.cfm" target="_top">HTML Tables</a></p>' +
                   '</body></html>';

      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(bottom);
      response.end();
  }); 
}

function Customer(response, postData) {
  console.log("request for handler 'Customer' was called.");
  var title = "CUSTOMER QUERY";
  var label = "Tickets";
  var carleton=0; var amityville=0; var ac=0; var celtic=0; var chelsea=0; var conestoga=0; var cts=0; var darcy=0; var dryden=0; var dsbn=0; var eunice=0; var enpq=0; var hmr=0; var jay=0; var jitb=0; var jscc=0; var lakehead=0; var marriott=0; var mcdowell=0; var memorial=0; var mitel=0; var nanticoke=0; var nmc=0; var notredame=0; var ottawau=0; var phelps=0; var poltimore=0; var philemon=0; var rayburn=0; var barbara=0; var diego=0; var sequoia=0; var skokie=0; var stpaul=0; var syniverse=0; var Switch=0; var texas=0; var tncdsb=0; var trinity=0; var uman=0; var vechtdal=0; var vigo=0; var villanova=0; var westerville=0; var wilfrid=0; var westquebec=0;
  var customers = ["Amityville", "Adult Community", "CU","Carleton", "CM","Chelsea","Conestoga","CTS","Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame","OU", "UO", "Phelps", "timore", "Philemon", "Rayburn","SBCCD","SDCCD","Sequoia","Skokie","St Paul", "Syniverse","Switch", "TAMU","TNCDSB", "Trinity","UMAN","Vechtdal", "Vigo","Villanova", "Westerville", "WLU","WQSB"];
  var description = ["Amityville", "Adult Community", "Carleton","Carletonu", "Celtic Manor","WQSB Chelsea","Conestoga","CTS","WQSB Darcy","Dryden", "DSBN", "Eunice","ENPQ","HMR", "Jay County","JITB","JSCC","Lakehead","Marriott", "McDowell", "Memorial","Mitel", "Nanticoke", "NMC", "Notre Dame", "Ottawa U", "U Ottawa", "Phelps", "WQSB Poltimore", "WQSB Philemon", "Rayburn","Santa Barbara","San Diego", "Sequoia", "Skokie","St Paul", "Syniverse", "Switch", "TAMU","TNCDSB", "Trinity","U Manitoba","Vechtdal", "Vigo","Villanova", "Westerville", "Wilfrid Laurier","WQSB - Not Defined"];
  var tableHead = '<table border="1" bordercolor="#ff00ff" style="background-color:#c0c0c0" width="25%" cellpadding="3" cellspacing="3"><tr><td>Customer Name</td><td>Count</td></tr><tr>';
  var top = writeTop(title, label);
  var sepTotal = 0; var decTotal = 0;
  var j = 0; var a = 0; var b = 0; var c = 0; var d = 0; var e = 0; var f = 0; var g = 0; var h = 0; var k = 0;
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

  var body = '<form id="input" action="/Viewer" method="post">'+
      '<select name="select">' +
      '<option value="Amityville">Amityville</option>'+
      '<option value="Adult Community">Adult Community</option>'+
      '<option value="CU">Careleton</option>' +
      '<option value="CM">Celtic Manor</option>' +
      '<option value="Chelsea">Chelsea</option>' +
      '<option value="Conestoga">Conestoga</option>' +
      '<option value="CTS">CTS</option>' +
      '<option value="Darcy">Darcy McGee</option>' +
      '<option value="Dryden">Dryden</option>' +
      '<option value="DSBN">Distric School Board of Niagara</option>' +
      '<option value="Eunice">Eunice</option>' +
      '<option value="ENPQ">ENPQ</option>' +
      '<option value="HMR">HMR</option>' +
      '<option value="Jay County">Jay County</option>' +
      '<option value="JITB">Jack-in-the-Box</option>' +
      '<option value="JSCC">Jackson State</option>' +
      '<option value="Lakehead">Lakehead</option>' +
      '<option value="Marriott">Marriott</option>' +
      '<option value="McDowell">McDowell</option>' +
      '<option value="Memorial">Memorial</option>' +
      '<option value="Mitel">Mitel</option>' +
      '<option value="Nanticoke">Nanticoke Hospitals</option>' +
      '<option value="NMC">North Western Michigan College</option>' +
      '<option value="Notre Dame">College Notre Dame</option>' +
      '<option value="OU">Ottawa University</option>' +
      '<option value="Phelps">Phelps</option>' +
      '<option value="Poltimore">Paltimore</option>' +
      '<option value="Philemon">Philemon-Wright</option>' +
      '<option value="Rayburn">Rayburn Electric</option>' +
      '<option value="SBCCD">Santa Barbara Community College</option>' +
      '<option value="SDCCD">San Diego Community Colege</option>' +
      '<option value="Sequoia">Sequoia</option>' +
      '<option value="Skokie">Skokie</option>' +
      '<option value="St Paul">St. Paul</option>' +
      '<option value="Switch">Switch</option>' +
      '<option value="Syniverse">Syniverse</option>' +
      '<option value="TAMU">Texas A&M</option>' +
      '<option value="TNCDSB">The Northwest Catholic District School Board</option>' +
      '<option value="Trinity">Trinity Western College</option>' +
      '<option value="UMAN">University Manitoba</option>' +
      '<option value="Vechtdal">Vigo County</option>' +
      '<option value="Vigo">Vigo County</option>' +
      '<option value="Villanova">Villanova</option>' +
      '<option value="Westerville">Westerville</option>' +
      '<option value="WLU">Wilfrid Laurier University</option>' +
      '<option value="WQSB">West Quebec School Board</option>' +
      '</select>' + 
      //'</br><textarea name="client" value= theform.option.selected rows="1" cols="20"></textarea>' +
      '</p><input type="submit" value="Select Customer" />'+
      '</form><p>';

       

      for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];

        switch(description[j]) {
          case 'Amityville':
             if (count > 0) {
                 amityville=count; 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 ac=count; 
              }
             break;
          case 'Carleton':
            // console.log(description[j]+'-'+count);
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
          //  console.log(description[j]+'-'+count);
             if (count > 0) {
                carleton+=count;
             }
             break;
           case 'Celtic Manor':
             if (count > 0) {
                celtic=count;
             }
             break;
           case 'WQSB Chelsea':
             if (count > 0) {
                chelsea=count;
             }
             break;
           case 'Conestoga':
             if (count > 0) {
                conestoga=count;
             }
             break;
           case 'CTS':
             if (count > 0) {
                cts=count;
             }
             break;
           case 'WQSB Darcy':
             if (count > 0) {
                darcy=count;
             }
             break;
           case 'Dryden':
             if (count > 0) {
                dryden=count;
             }
             break;
           case 'DSBN':
             if (count > 0) {
                dsbn=count;
             }
             break;
           case 'Eunice':
             if (count > 0) {
                eunice=count;
             }
             break;
           case 'ENPQ':
             if (count > 0) {
                enpq=count;
             }
             break;
           case 'HMR':
             if (count > 0) {
                hmr=count;
             }
             break;
           case 'Jay County':
             if (count > 0) {
                jay=count;
             }
             break;
           case 'JITB':
             if (count > 0) {
                jitb=count;
             }
             break;
           case 'JSCC':
             if (count > 0) {
               jscc=count;
             }
             break;
            case 'Lakehead':
             if (count > 0) {
               lakehead=count;
             }
             break;
            case 'Marriott':
             if (count > 0) {
               marriott=count;
             }
             break;
            case 'McDowell':
             if (count > 0) {
               mcdowell=count;
             }
             break;
            case 'Memorial':
             if (count > 0) {
               memorial=count;
             }
             break;
            case 'Mitel':
             if (count > 0) {
               mitel=count;
             }
             break;
            case 'Nanticoke':
             if (count > 0) {
               nanticoke=count;
             }
             break;
            case 'NMC':
             if (count > 0) {
               nmc=count;
             }
             break;
            case 'Notre Dame':
             if (count > 0) {
               notredame=count;
             }
             break;
            case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
            case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
             }
             break;
            case 'Phelps':
             if (count > 0) {
               phelps=count;
             }
             break;
            case 'WQSB Poltimore':
             if (count > 0) {
               poltimore=count;
             }
             break;
            case 'WQSB Philemon':
             if (count > 0) {
               philemon=count;
             }
             break;
            case 'Rayburn':
             if (count > 0) {
               rayburn=count;
             }
             break;
            case 'Santa Barbara':
             if (count > 0) {
               barbara=count;
             }
             break;
            case 'San Diego':
             if (count > 0) {
               diego=count;
             }
             break;
            case 'Sequoia':
             if (count > 0) {
               sequoia=count;
             }
             break;
            case 'Skokie':
             if (count > 0) {
               skokie=count;
             }
             break;
            case 'St Paul':
             if (count > 0) {
               stpaul=count;
             }
             break;
            case 'Syniverse':
             if (count > 0) {
               syniverse=count;
             }
             break;
            case 'Switch':
             if (count > 0) {
               Switch=count;
             }
             break;
            case 'TAMU':
             if (count > 0) {
               texas=count;
             }
             break;
            case 'TNCDSB':
             if (count > 0) {
               tncdsb=count;
             }
             break;
            case 'Trinity':
             if (count > 0) {
               trinity=count;
             }
             break;
            case 'U Manitoba':
             if (count > 0) {
               uman=count;
             }
             break;
            case 'Vechtdal':
             if (count > 0) {
               vechtdal=count;
             }
             break;
            case 'Vigo':
             if (count > 0) {
               vigo=count;
             }
             break;
            case 'Villanova':
             if (count > 0) {
               villanova=count;
             }
             break;
            case 'Westerville':
             if (count > 0) {
               westerville=count;
             }
             break;
            case 'Wilfrid Laurier':
             if (count > 0) {
               wilfrid=count;
             }
             break;
            case 'WQSB - Not Defined':
             if (count > 0) {
               westquebec=count;
             }
             break;
          }
          
          var table ='<td>'+customers[j]+'</td>' +
                   '<td>'+count+'</td>' +
                   '</tr>';
          response.write(table);
          j++;
          if (j == customers.length) {
            westquebec += chelsea + darcy + mcdowell + philemon + poltimore;

            var bar = new Quiche('bar');
            bar.setWidth(600);
            bar.setHeight(500);
            bar.setTitle('Tickets by Customer');
            bar.setBarSpacing(10); // 10 pixles between bars/groups
            bar.setLegendBottom(); // Put legend at bottom
            bar.setTransparentBackground(); // Make background transparent
            bar.addData([amityville, ac, carleton, celtic, chelsea, conestoga, cts, darcy, dryden, dsbn, eunice, enpq, hmr, jay, jitb, jscc, lakehead, marriott, mcdowell, memorial, mitel, nanticoke, nmc, notredame, ottawau, phelps, poltimore, philemon, rayburn, barbara, diego, sequoia, skokie, stpaul, syniverse, Switch, texas, tncdsb, trinity, uman, vechtdal, vigo, villanova, westerville, wilfrid, westquebec], 'Counts', 'CC6600'); 
            bar.setAutoScaling(); // Auto scale y axis
            bar.addAxisLabels('r',["WQSB - Aggregate "+westquebec,"Wilfrid Laurier "+wilfrid,"Westerville "+westerville,"Villanova "+villanova,"Vigo "+vigo,"Vetchdal "+vechtdal, "U Manitoba "+uman,"Trinity "+trinity,"TNCDSB "+tncdsb,"TAMU "+texas,"Switch "+Switch,"Syniverse "+syniverse,"St Paul "+stpaul,"Skokie "+skokie,"Sequoia "+sequoia,"San Diego "+diego,"Santa Barbara "+barbara,"Rayburn "+rayburn,"WQSB Philemon "+philemon,"WQSB Poltimore "+poltimore,"Phelps "+phelps,"UOttawa "+ottawau,"Notre Dame "+notredame,"NMC "+nmc,"Nanticoke "+nanticoke,"Mitel "+mitel,"Memorial "+memorial,"McDowell "+mcdowell,"Marriott "+marriott,"Lakehead "+lakehead, "JSCC "+jscc,"JITB "+jitb,"Jay County "+jay,"HMR "+hmr,"ENPQ "+enpq,"Eunice "+eunice,"DSBN "+dsbn,"Dryden "+dryden,"WQSB Darcy "+darcy,"CTS "+cts,"Conestoga "+conestoga,"WQSB Chelsea "+chelsea,"Celtic Manor "+celtic,"Carelton "+carleton, "Adult Community "+ac,"Amityville "+amityville]);
            bar.setBarHorizontal();

           

            var imageUrl = bar.getUrl(true); // First param controls http vs. https
            response.write('<br><img src="'+imageUrl+'" alt="some_text">');
            carleton=0; ottawau=0; j=0;
            carleton=0; amityville=0; ac=0; celtic=0;   chelsea=0;   conestoga=0;   cts=0;   darcy=0;   dryden=0;   dsbn=0;   eunice=0;   enpq=0;   hmr=0;   jay=0;   jitb=0;   jscc=0;   lakehead=0;   marriott=0;   mcdowell=0;   memorial=0;   mitel=0; nanticoke=0;  nmc=0;   notredame=0;   ottawau=0;   phelps=0;   poltimore=0;   philemon=0;   rayburn=0;   barbara=0;   diego=0;   sequoia=0;   skokie=0;   stpaul=0;   syniverse=0;   Switch=0;   texas=0;   tncdsb=0;   trinity=0;   uman=0; vechtdal=0,  vigo=0;   villanova=0;   westerville=0;   wilfrid=0; westquebec=0;
          }
      });
    }

    for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%") and (requested="'+holdDate+'" or requested ="'+holdDate1+'" or requested ="'+holdDate6+'" or requested ="'+holdDate7+'" or requested ="'+holdDate2+'" or requested ="'+holdDate3+'" or requested ="'+holdDate4+'" or requested ="'+holdDate5+'") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];

        switch(description[j]) {
          case 'Amityville':
             if (count > 0) {
                 amityville=count; 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 ac=count; 
              }
             break;
          case 'Carleton':
            // console.log(description[j]+'-'+count);
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
          //  console.log(description[j]+'-'+count);
             if (count > 0) {
                carleton+=count;
             }
             break;
           case 'Celtic Manor':
             if (count > 0) {
                celtic=count;
             }
             break;
           case 'WQSB Chelsea':
             if (count > 0) {
                chelsea=count;
             }
             break;
           case 'Conestoga':
             if (count > 0) {
                conestoga=count;
             }
             break;
           case 'CTS':
             if (count > 0) {
                cts=count;
             }
             break;
           case 'WQSB Darcy':
             if (count > 0) {
                darcy=count;
             }
             break;
           case 'Dryden':
             if (count > 0) {
                dryden=count;
             }
             break;
           case 'DSBN':
             if (count > 0) {
                dsbn=count;
             }
             break;
           case 'Eunice':
             if (count > 0) {
                eunice=count;
             }
             break;
           case 'ENPQ':
             if (count > 0) {
                enpq=count;
             }
             break;
           case 'HMR':
             if (count > 0) {
                hmr=count;
             }
             break;
           case 'Jay County':
             if (count > 0) {
                jay=count;
             }
             break;
           case 'JITB':
             if (count > 0) {
                jitb=count;
             }
             break;
           case 'JSCC':
             if (count > 0) {
               jscc=count;
             }
             break;
            case 'Lakehead':
             if (count > 0) {
               lakehead=count;
             }
             break;
            case 'Marriott':
             if (count > 0) {
               marriott=count;
             }
             break;
            case 'McDowell':
             if (count > 0) {
               mcdowell=count;
             }
             break;
            case 'Memorial':
             if (count > 0) {
               memorial=count;
             }
             break;
            case 'Mitel':
             if (count > 0) {
               mitel=count;
             }
             break;
            case 'Nanticoke':
             if (count > 0) {
               nanticoke=count;
             }
             break;
            case 'NMC':
             if (count > 0) {
               nmc=count;
             }
             break;
            case 'Notre Dame':
             if (count > 0) {
               notredame=count;
             }
             break;
            case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
            case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
             }
             break;
            case 'Phelps':
             if (count > 0) {
               phelps=count;
             }
             break;
            case 'WQSB Poltimore':
             if (count > 0) {
               poltimore=count;
             }
             break;
            case 'WQSB Philemon':
             if (count > 0) {
               philemon=count;
             }
             break;
            case 'Rayburn':
             if (count > 0) {
               rayburn=count;
             }
             break;
            case 'Santa Barbara':
             if (count > 0) {
               barbara=count;
             }
             break;
            case 'San Diego':
             if (count > 0) {
               diego=count;
             }
             break;
            case 'Sequoia':
             if (count > 0) {
               sequoia=count;
             }
             break;
            case 'Skokie':
             if (count > 0) {
               skokie=count;
             }
             break;
            case 'St Paul':
             if (count > 0) {
               stpaul=count;
             }
             break;
            case 'Syniverse':
             if (count > 0) {
               syniverse=count;
             }
             break;
            case 'Switch':
             if (count > 0) {
               Switch=count;
             }
             break;
            case 'TAMU':
             if (count > 0) {
               texas=count;
             }
             break;
            case 'TNCDSB':
             if (count > 0) {
               tncdsb=count;
             }
             break;
            case 'Trinity':
             if (count > 0) {
               trinity=count;
             }
             break;
            case 'U Manitoba':
             if (count > 0) {
               uman=count;
             }
             break;
            case 'Vechtdal':
             if (count > 0) {
               vechtdal=count;
             }
             break;
            case 'Vigo':
             if (count > 0) {
               vigo=count;
             }
             break;
            case 'Villanova':
             if (count > 0) {
               villanova=count;
             }
             break;
            case 'Westerville':
             if (count > 0) {
               westerville=count;
             }
             break;
            case 'Wilfrid Laurier':
             if (count > 0) {
               wilfrid=count;
             }
             break;
            case 'WQSB - Not Defined':
             if (count > 0) {
               westquebec=count;
             }
             break;
          }
          
         
          j++;
          if (j == customers.length) {
            westquebec += chelsea + darcy + mcdowell + philemon + poltimore;

            var bar = new Quiche('bar');
            bar.setWidth(600);
            bar.setHeight(500);
            bar.setTitle('Week BY Customer');
            bar.setBarSpacing(10); // 10 pixles between bars/groups
            bar.setLegendBottom(); // Put legend at bottom
            bar.setTransparentBackground(); // Make background transparent
            bar.addData([amityville, ac, carleton, celtic, chelsea, conestoga, cts, darcy, dryden, dsbn, eunice, enpq, hmr, jay, jitb, jscc, lakehead, marriott, mcdowell, memorial, mitel, nanticoke, nmc, notredame, ottawau, phelps, poltimore, philemon, rayburn, barbara, diego, sequoia, skokie, stpaul, syniverse, Switch, texas, tncdsb, trinity, uman, vechtdal, vigo, villanova, westerville, wilfrid, westquebec], 'Counts', 'CC6600'); 
            bar.setAutoScaling(); // Auto scale y axis
            bar.addAxisLabels('r',["WQSB - Aggregate "+westquebec,"Wilfrid Laurier "+wilfrid,"Westerville "+westerville,"Villanova "+villanova,"Vigo "+vigo,"Vechtdal "+vechtdal, "U Manitoba "+uman,"Trinity "+trinity,"TNCDSB "+tncdsb,"TAMU "+texas,"Switch "+Switch,"Syniverse "+syniverse,"St Paul "+stpaul,"Skokie "+skokie,"Sequoia "+sequoia,"San Diego "+diego,"Santa Barbara "+barbara,"Rayburn "+rayburn,"WQSB Philemon "+philemon,"WQSB Poltimore "+poltimore,"Phelps "+phelps,"UOttawa "+ottawau,"Notre Dame "+notredame,"NMC "+nmc,"Nanticoke "+nanticoke,"Mitel "+mitel,"Memorial "+memorial,"McDowell "+mcdowell,"Marriott "+marriott,"Lakehead "+lakehead, "JSCC "+jscc,"JITB "+jitb,"Jay County "+jay,"HMR "+hmr,"ENPQ "+enpq,"Eunice "+eunice,"DSBN "+dsbn,"Dryden "+dryden,"WQSB Darcy "+darcy,"CTS "+cts,"Conestoga "+conestoga,"WQSB Chelsea "+chelsea,"Celtic Manor "+celtic,"Carelton "+carleton, "Adult Community "+ac,"Amityville "+amityville]);
            bar.setBarHorizontal();

           

            var imageUrl = bar.getUrl(true); // First param controls http vs. https
            response.write('<br><img src="'+imageUrl+'" alt="some_text">');
            carleton=0; ottawau=0; 
            carleton=0; amityville=0; ac=0; celtic=0;   chelsea=0;   conestoga=0;   cts=0;   darcy=0;   dryden=0;   dsbn=0;   eunice=0;   enpq=0;   hmr=0;   jay=0;   jitb=0;   jscc=0;   lakehead=0;   marriott=0;   mcdowell=0;   memorial=0;   mitel=0; nanticoke=0;  nmc=0;   notredame=0;   ottawau=0;   phelps=0;   poltimore=0;   philemon=0;   rayburn=0;   barbara=0;   diego=0;   sequoia=0;   skokie=0;   stpaul=0;   syniverse=0;   Switch=0;   texas=0;   tncdsb=0;   trinity=0;   uman=0; vechtdal=0;  vigo=0;   villanova=0;   westerville=0;   wilfrid=0; westquebec=0;
          }
      });
    } 

    for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%" and requested like "Jan%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Jan';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);

          switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 amityville=count; 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 ac=count; 
              }
             break;
          case 'Carleton':
            if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
          //  console.log(description[j]+'-'+count);
             if (count > 0) {
                carleton+=count;
             }
             break;
           case 'Celtic Manor':
             if (count > 0) {
                celtic=count;
             }
             break;
           case 'WQSB Chelsea':
             if (count > 0) {
                chelsea=count;
             }
             break;
           case 'Conestoga':
             if (count > 0) {
                conestoga=count;
             }
             break;
           case 'CTS':
             if (count > 0) {
                cts=count;
             }
             break;
           case 'WQSB Darcy':
             if (count > 0) {
                darcy=count;
             }
             break;
           case 'Dryden':
             if (count > 0) {
                dryden=count;
             }
             break;
           case 'DSBN':
             if (count > 0) {
                dsbn=count;
             }
             break;
           case 'Eunice':
             if (count > 0) {
                eunice=count;
             }
             break;
           case 'ENPQ':
             if (count > 0) {
                enpq=count;
             }
             break;
           case 'HMR':
             if (count > 0) {
                hmr=count;
             }
             break;
           case 'Jay County':
             if (count > 0) {
                jay=count;
             }
             break;
           case 'JITB':
             if (count > 0) {
                jitb=count;
             }
             break;
           case 'JSCC':
             if (count > 0) {
               jscc=count;
             }
             break;
            case 'Lakehead':
             if (count > 0) {
               lakehead=count;
             }
             break;
            case 'Marriott':
             if (count > 0) {
               marriott=count;
             }
             break;
            case 'McDowell':
             if (count > 0) {
               mcdowell=count;
             }
             break;
            case 'Memorial':
             if (count > 0) {
               memorial=count;
             }
             break;
            case 'Mitel':
             if (count > 0) {
               mitel=count;
             }
             break;
            case 'Nanticoke':
             if (count > 0) {
               nanticoke=count;
             }
             break;
            case 'NMC':
             if (count > 0) {
               nmc=count;
             }
             break;
            case 'Notre Dame':
             if (count > 0) {
               notredame=count;
             }
             break;
            case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
            case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
             }
             break;
            case 'Phelps':
             if (count > 0) {
               phelps=count;
             }
             break;
            case 'WQSB Poltimore':
             if (count > 0) {
               poltimore=count;
             }
             break;
            case 'WQSB Philemon':
             if (count > 0) {
               philemon=count;
             }
             break;
            case 'Rayburn':
             if (count > 0) {
               rayburn=count;
             }
             break;
            case 'Santa Barbara':
             if (count > 0) {
               barbara=count;
             }
             break;
            case 'San Diego':
             if (count > 0) {
               diego=count;
             }
             break;
            case 'Sequoia':
             if (count > 0) {
               sequoia=count;
             }
             break;
            case 'Skokie':
             if (count > 0) {
               skokie=count;
             }
             break;
            case 'St Paul':
             if (count > 0) {
               stpaul=count;
             }
             break;
            case 'Syniverse':
             if (count > 0) {
               syniverse=count;
             }
             break;
            case 'Switch':
             if (count > 0) {
               Switch=count;
             }
             break;
            case 'TAMU':
             if (count > 0) {
               texas=count;
             }
             break;
            case 'TNCDSB':
             if (count > 0) {
               tncdsb=count;
             }
             break;
            case 'Trinity':
             if (count > 0) {
               trinity=count;
             }
             break;
            case 'U Manitoba':
             if (count > 0) {
               uman=count;
             }
             break;
            case 'Vechtdal':
             if (count > 0) {
               vechtdal=count;
             }
             break;
            case 'Vigo':
             if (count > 0) {
               vigo=count;
             }
             break;
            case 'Villanova':
             if (count > 0) {
               villanova=count;
             }
             break;
            case 'Westerville':
             if (count > 0) {
               westerville=count;
             }
             break;
            case 'Wilfrid Laurier':
             if (count > 0) {
               wilfrid=count;
             }
             break;
            case 'WQSB - Not Defined':
             if (count > 0) {
               westquebec=count;
             }
             break;
          }



      /*    switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 piej.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 piej.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                piej.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                piej.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'FF0033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '99FF00');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Lakehead':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'F8E0F1');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Nanticoke':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '00FF00');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'NMC':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               //console.log('GOT HERE 1 '+description[a]+'-'+ottawau);
               piej.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
               // console.log('GOT HERE 2 '+description[a]+'-'+ottawau);
                piej.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '734A12');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                piej.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          } */
       /*   a++;
          if (a == customers.length) {
            //console.log ('TOTALS '+ westquebec +' '+ chelsea +' '+ darcy +' '+ mcdowell+ ' '+philemon+ ' '+poltimore);
            westquebec += chelsea + darcy + mcdowell + philemon + poltimore;

            var bar = new Quiche('bar');
            bar.setWidth(600);
            bar.setHeight(500);
            bar.setTitle('Customer Tickets JANUARY');
            bar.setBarSpacing(10); // 10 pixles between bars/groups
            bar.setLegendBottom(); // Put legend at bottom
            bar.setTransparentBackground(); // Make background transparent
            bar.addData([amityville, ac, carleton, celtic, chelsea, conestoga, cts, darcy, dryden, dsbn, eunice, enpq, hmr, jay, jitb, jscc, lakehead, marriott, mcdowell, memorial, mitel, nanticoke, nmc, notredame, ottawau, phelps, poltimore, philemon, rayburn, barbara, diego, sequoia, skokie, stpaul, syniverse, Switch, texas, tncdsb, trinity, uman, vechtdal, vigo, villanova, westerville, wilfrid, westquebec], 'Counts', 'CC6600'); 
            bar.setAutoScaling(); // Auto scale y axis
            bar.addAxisLabels('r',["WQSB - Aggregate "+westquebec,"Wilfrid Laurier "+wilfrid,"Westerville "+westerville,"Villanova "+villanova,"Vigo "+vigo,"Vechtdal "+vechtdal, "U Manitoba "+uman,"Trinity "+trinity,"TNCDSB "+tncdsb,"TAMU "+texas,"Switch "+Switch,"Syniverse "+syniverse,"St Paul "+stpaul,"Skokie "+skokie,"Sequoia "+sequoia,"San Diego "+diego,"Santa Barbara "+barbara,"Rayburn "+rayburn,"WQSB Philemon "+philemon,"WQSB Poltimore "+poltimore,"Phelps "+phelps,"UOttawa "+ottawau,"Notre Dame "+notredame,"NMC "+nmc,"Nanticoke "+nanticoke,"Mitel "+mitel,"Memorial "+memorial,"McDowell "+mcdowell,"Marriott "+marriott,"Lakehead "+lakehead, "JSCC "+jscc,"JITB "+jitb,"Jay County "+jay,"HMR "+hmr,"ENPQ "+enpq,"Eunice "+eunice,"DSBN "+dsbn,"Dryden "+dryden,"WQSB Darcy "+darcy,"CTS "+cts,"Conestoga "+conestoga,"WQSB Chelsea "+chelsea,"Celtic Manor "+celtic,"Carelton "+carleton, "Adult Community "+ac,"Amityville "+amityville]);
            bar.setBarHorizontal();

            var imageUrl = bar.getUrl(true); // First param controls http vs. https
            response.write('<br><img src="'+imageUrl+'" alt="some_text">');
            carleton=0; ottawau=0; 
            carleton=0; amityville=0; ac=0; celtic=0;   chelsea=0;   conestoga=0;   cts=0;   darcy=0;   dryden=0;   dsbn=0;   eunice=0;   enpq=0;   hmr=0;   jay=0;   jitb=0;   jscc=0;   lakehead=0;   marriott=0;   mcdowell=0;   memorial=0;   mitel=0; nanticoke=0;  nmc=0;   notredame=0;   ottawau=0;   phelps=0;   poltimore=0;   philemon=0;   rayburn=0;   barbara=0;   diego=0;   sequoia=0;   skokie=0;   stpaul=0;   syniverse=0;   Switch=0;   texas=0;   tncdsb=0;   trinity=0;   uman=0; vechtdaL=0;  vigo=0;   villanova=0;   westerville=0;   wilfrid=0; westquebec=0;

           // response.end();


            /*response.write('<p><center>JANUARY<p>');
            var imageUrl = piej.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center>');
            a = 0;
            carleton=0; ottawau=0; */

            
        /*  }
      });
    }

   for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        //var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%" and requested like "Feb%"', function selectCb(err, results, fields) {
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%" and requested like "Feb%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Feb';
        //console.log('I AM HERE!! '+description[b]); 
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
        switch(description[b]) {
          case 'Amityville':
             if (count > 0) {
                 amityville=count; 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 ac=count; 
              }
             break;
          case 'Carleton':
            // console.log(description[j]+'-'+count);
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
          //  console.log(description[j]+'-'+count);
             if (count > 0) {
                carleton+=count;
             }
             break;
           case 'Celtic Manor':
             if (count > 0) {
                celtic=count;
             }
             break;
           case 'WQSB Chelsea':
             if (count > 0) {
                chelsea=count;
             }
             break;
           case 'Conestoga':
             if (count > 0) {
                conestoga=count;
             }
             break;
           case 'CTS':
             if (count > 0) {
                cts=count;
             }
             break;
           case 'WQSB Darcy':
             if (count > 0) {
                darcy=count;
             }
             break;
           case 'Dryden':
             if (count > 0) {
                dryden=count;
             }
             break;
           case 'DSBN':
             if (count > 0) {
                dsbn=count;
             }
             break;
           case 'Eunice':
             if (count > 0) {
                eunice=count;
             }
             break;
           case 'ENPQ':
             if (count > 0) {
                enpq=count;
             }
             break;
           case 'HMR':
             if (count > 0) {
                hmr=count;
             }
             break;
           case 'Jay County':
             if (count > 0) {
                jay=count;
             }
             break;
           case 'JITB':
             if (count > 0) {
                jitb=count;
             }
             break;
           case 'JSCC':
             if (count > 0) {
               jscc=count;
             }
             break;
            case 'Lakehead':
             if (count > 0) {
               lakehead=count;
             }
             break;
            case 'Marriott':
             if (count > 0) {
               marriott=count;
             }
             break;
            case 'McDowell':
             if (count > 0) {
               mcdowell=count;
             }
             break;
            case 'Memorial':
             if (count > 0) {
               memorial=count;
             }
             break;
            case 'Mitel':
             if (count > 0) {
               mitel=count;
             }
             break;
            case 'Nanticoke':
             if (count > 0) {
               nanticoke=count;
             }
             break;
            case 'NMC':
             if (count > 0) {
               nmc=count;
             }
             break;
            case 'Notre Dame':
             if (count > 0) {
               notredame=count;
             }
             break;
            case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
            case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
             }
             break;
            case 'Phelps':
             if (count > 0) {
               phelps=count;
             }
             break;
            case 'WQSB Poltimore':
             if (count > 0) {
               poltimore=count;
             }
             break;
            case 'WQSB Philemon':
             if (count > 0) {
               philemon=count;
             }
             break;
            case 'Rayburn':
             if (count > 0) {
               rayburn=count;
             }
             break;
            case 'Santa Barbara':
             if (count > 0) {
               barbara=count;
             }
             break;
            case 'San Diego':
             if (count > 0) {
               diego=count;
             }
             break;
            case 'Sequoia':
             if (count > 0) {
               sequoia=count;
             }
             break;
            case 'Skokie':
             if (count > 0) {
               skokie=count;
             }
             break;
            case 'St Paul':
             if (count > 0) {
               stpaul=count;
             }
             break;
            case 'Syniverse':
             if (count > 0) {
               syniverse=count;
             }
             break;
            case 'Switch':
             if (count > 0) {
               Switch=count;
             }
             break;
            case 'TAMU':
             if (count > 0) {
               texas=count;
             }
             break;
            case 'TNCDSB':
             if (count > 0) {
               tncdsb=count;
             }
             break;
            case 'Trinity':
             if (count > 0) {
               trinity=count;
             }
             break;
            case 'U Manitoba':
             if (count > 0) {
               uman=count;
             }
             break;
            case 'Vechtdal':
             if (count > 0) {
               vechtdal=count;
             }
             break;
            case 'Vigo':
             if (count > 0) {
               vigo=count;
             }
             break;
            case 'Villanova':
             if (count > 0) {
               villanova=count;
             }
             break;
            case 'Westerville':
             if (count > 0) {
               westerville=count;
             }
             break;
            case 'Wilfrid Laurier':
             if (count > 0) {
               wilfrid=count;
             }
             break;
            case 'WQSB - Not Defined':
             if (count > 0) {
               westquebec=count;
             }
             break;
          }



         /* switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 piek.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 piek.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                piek.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                piek.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '99FF00');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Lakehead':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'F8E0F1');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               //console.log('GOT HERE 1 '+description[a]+'-'+ottawau);
               piek.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
               // console.log('GOT HERE 2 '+description[a]+'-'+ottawau);
                piek.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                piek.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          } */
         /* b++;
          if (b == customers.length) {
            westquebec += chelsea + darcy + mcdowell + philemon + poltimore;

            var bar = new Quiche('bar');
            bar.setWidth(600);
            bar.setHeight(500);
            bar.setTitle('Customer Tickets FEBRUARY');
            bar.setBarSpacing(10); // 10 pixles between bars/groups
            bar.setLegendBottom(); // Put legend at bottom
            bar.setTransparentBackground(); // Make background transparent
            bar.addData([amityville, ac, carleton, celtic, chelsea, conestoga, cts, darcy, dryden, dsbn, eunice, enpq, hmr, jay, jitb, jscc, lakehead, marriott, mcdowell, memorial, mitel, nanticoke, nmc, notredame, ottawau, phelps, poltimore, philemon, rayburn, barbara, diego, sequoia, skokie, stpaul, syniverse, Switch, texas, tncdsb, trinity, uman, vechtdal, vigo, villanova, westerville, wilfrid, westquebec], 'Counts', 'CC6600'); 
            bar.setAutoScaling(); // Auto scale y axis
            bar.addAxisLabels('r',["WQSB - Aggregate "+westquebec,"Wilfrid Laurier "+wilfrid,"Westerville "+westerville,"Villanova "+villanova,"Vigo "+vigo,"Vechtdal "+vechtdal, "U Manitoba "+uman,"Trinity "+trinity,"TNCDSB "+tncdsb,"TAMU "+texas,"Switch "+Switch,"Syniverse "+syniverse,"St Paul "+stpaul,"Skokie "+skokie,"Sequoia "+sequoia,"San Diego "+diego,"Santa Barbara "+barbara,"Rayburn "+rayburn,"WQSB Philemon "+philemon,"WQSB Poltimore "+poltimore,"Phelps "+phelps,"UOttawa "+ottawau,"Notre Dame "+notredame,"NMC "+nmc,"Nanticoke "+nanticoke,"Mitel "+mitel,"Memorial "+memorial,"McDowell "+mcdowell,"Marriott "+marriott,"Lakehead "+lakehead, "JSCC "+jscc,"JITB "+jitb,"Jay County "+jay,"HMR "+hmr,"ENPQ "+enpq,"Eunice "+eunice,"DSBN "+dsbn,"Dryden "+dryden,"WQSB Darcy "+darcy,"CTS "+cts,"Conestoga "+conestoga,"WQSB Chelsea "+chelsea,"Celtic Manor "+celtic,"Carelton "+carleton, "Adult Community "+ac,"Amityville "+amityville]);
            bar.setBarHorizontal();

            var imageUrl = bar.getUrl(true); // First param controls http vs. https
            response.write('<br><img src="'+imageUrl+'" alt="some_text">');
            carleton=0; ottawau=0; 
            carleton=0; amityville=0; ac=0; celtic=0;   chelsea=0;   conestoga=0;   cts=0;   darcy=0;   dryden=0;   dsbn=0;   eunice=0;   enpq=0;   hmr=0;   jay=0;   jitb=0;   jscc=0;   lakehead=0;   marriott=0;   mcdowell=0;   memorial=0;   mitel=0;   nmc=0;   notredame=0;   ottawau=0;   phelps=0;   poltimore=0;   philemon=0;   rayburn=0;   barbara=0;   diego=0;   sequoia=0;   skokie=0;   stpaul=0;   syniverse=0;   Switch=0;   texas=0;   tncdsb=0;   trinity=0;   uman=0; vechtdal=0;  vigo=0;   villanova=0;   westerville=0;   wilfrid=0; westquebec=0;

            b=0;
           // response.end();


            /*response.write('<p><center>FEBUARY<p>');
            var imageUrl = piek.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center>');
            a = 0;
            carleton=0; ottawau=0;

            var bar = new Quiche('bar');
            bar.setWidth(400);
            bar.setHeight(600);
            bar.setTitle('Customers BY Month');
            bar.setBarStacked(); // Stacked chart
            bar.setBarWidth(0); 
            bar.setBarSpacing(6); // 6 pixles between bars/groups
            bar.setLegendBottom(); // Put legend at bottom
            bar.setTransparentBackground(); // Make background transparent 


            //console.log('DECEMBER '+decTotal);
            //console.log(AMDEC+' '+ACDEC+' '+CUDEC+' '+CMDEC+' '+CHDEC+' '+CNDEC+' '+DADEC+' '+DRDEC+' '+DSDEC+' '+EUDEC+' '+ENDEC+' '+HMDEC+' '+JCDEC+' '+JSDEC+' '+MADEC+' '+MCDEC+' '+MEDEC+' '+MIDEC+' '+NMDEC+' '+NMDEC);

            bar.addData([AMJAN, AMFEB], 'Amityville', 'FF0000'); 
            bar.addData([ACJAN, ACFEB], 'Adult Community', 'FFFF00');  
            bar.addData([CUJAN, CUFEB], 'Carleton', '0099CC'); 
            bar.addData([CMJAN, CMFEB], 'Celtic Manor', '330033'); 
            bar.addData([CHJAN, CHFEB], 'Chelsea', 'FF0099'); 
            bar.addData([CNJAN, CNFEB], 'Conestoga', '003300'); 
            bar.addData([CTJAN, CTFEB], 'CTS', '99FF00'); 
            bar.addData([DAJAN, DAFEB], 'Darcy', '00CC99'); 
            bar.addData([DRJAN, DRFEB], 'Dryden', '999999'); 
            bar.addData([DSJAN, DSFEB], 'DSBN', 'FFFF66'); 
            bar.addData([EUJAN, EUFEB], 'Eunice', 'FFCC99'); 
            bar.addData([ENJAN, ENFEB], 'ENPQ', 'CC3300'); 
            bar.addData([HMJAN, HMFEB], 'HMR', '0033FF'); 
            bar.addData([JCJAN, JCFEB], 'Jay County', '9966CC'); 
            bar.addData([JIJAN, JIFEB], 'JITB', 'FF3300'); 
            bar.addData([JSJAN, JSFEB], 'JSCC', 'CC6600'); 
            bar.addData([LAJAN, LAFEB], 'Lakehead', 'F8E0F1');
            bar.addData([MAJAN, MAFEB], 'Marriott', '9999ff');
            bar.addData([MCJAN, MCFEB], 'McDowell', '1B87E0');
            bar.addData([MEJAN, MEFEB], 'Memorial', '1BE0D3');
            bar.addData([MIJAN, MIFEB], 'Mitel', '1BE060');
            bar.addData([NTJAN, NTFEB], 'Nanticoke', '00FF00');
            bar.addData([NMJAN, NMFEB], 'NMC', 'D0E01B');
            bar.addData([NDJAN, NDFEB], 'Notre Dame', '76EEC6');
            bar.addData([OUJAN, OUFEB], 'UOttawa', 'E0841B');
            bar.addData([PHJAN, PHFEB], 'Phelps', 'E0251B');
            bar.addData([POJAN, POFEB], 'Poltimore', 'E01B74');
            bar.addData([PNJAN, PNFEB], 'Philemon', 'C91BE0');
            bar.addData([RAJAN, RAFEB], 'Rayburn', '290F3D');
            bar.addData([SBJAN, SBFEB], 'Santa Barbara', '05EB83');
            bar.addData([SDJAN, SDFEB], 'San Diego', 'BAD4C8');
            bar.addData([SEJAN, SEFEB], 'Sequoia', '734A12');
            bar.addData([SKJAN, SKFEB], 'Skokie', 'CFD3E3');
            bar.addData([SPJAN, SPFEB], 'St Paul', '6E2E61');
            bar.addData([SYJAN, SYFEB], 'Syniverse', '7A3843');
            bar.addData([SWJAN, SWFEB], 'Switch', 'A8AD87');
            bar.addData([TAJAN, TAFEB], 'TAMU', 'CFF207');
            bar.addData([TNJAN, TNFEB], 'TNCDSB', 'E0A884');
            bar.addData([TRJAN, TRFEB], 'Trinity', 'ED884A');
            bar.addData([UMJAN, UMFEB], 'UMAN', 'ED544A');
            bar.addData([VIJAN, VIFEB], 'Vigo', 'E88B84');
            bar.addData([VLJAN, VLFEB], 'Villanova', 'AD8380');
            bar.addData([WEJAN, WEFEB], 'Westerville', '487057');
            bar.addData([WLJAN, WLFEB], 'WLU', 'B2B54C');
            bar.addData([WQJAN, WQFEB], 'WQSB', 'C7C7C7');
            bar.setAutoScaling(); // Auto scale y axis
            bar.addAxisLabels('x', ['Jan', 'Feb']); 

           /* bar.addData([AMMAR, AMAPR, AMMAY, AMJUN, AMJUL, AMAUG, AMSEP, AMOCT, AMNOV, AMDEC], 'Amityville', 'FF0000'); 
            bar.addData([ACMAR, ACAPR, ACMAY, ACJUN, ACJUL, ACAUG, ACSEP, ACOCT, ACNOV, ACDEC], 'Adult Community', 'FFFF00');  
            bar.addData([CUMAR, CUAPR, CUMAY, CUJUN, CUJUL, CUAUG, CUSEP, CUOCT, CUNOV, CUDEC], 'Carleton', '0099CC'); 
            bar.addData([CMMAR, CMAPR, CMMAY, CMJUN, CMJUL, CMAUG, CMSEP, CMOCT, CMNOV, CMDEC], 'Celtic Manor', '330033'); 
            bar.addData([CHMAR, CHAPR, CHMAY, CHJUN, CHJUL, CHAUG, CHSEP, CHOCT, CHNOV, CHDEC], 'Chelsea', 'FF0099'); 
            bar.addData([CNMAR, CNAPR, CNMAY, CNJUN, CNJUL, CNAUG, CNSEP, CNOCT, CNNOV, CNDEC], 'Conestoga', '003300'); 
            bar.addData([CTMAR, CTAPR, CTMAY, CTJUN, CTJUL, CTAUG, CTSEP, CTOCT, CTNOV, CTDEC], 'CTS', '99FF00'); 
            bar.addData([DAMAR, DAAPR, DAMAY, DAJUN, DAJUL, DAAUG, DASEP, DAOCT, DANOV, DADEC], 'Darcy', '00CC99'); 
            bar.addData([DRMAR, DRAPR, DRMAY, DRJUN, DRJUL, DRAUG, DRSEP, DROCT, DRNOV, DRDEC], 'Dryden', '999999'); 
            bar.addData([DSMAR, DSAPR, DSMAY, DSJUN, DSJUL, DSAUG, DSSEP, DSOCT, DSNOV, DSDEC], 'DSBN', 'FFFF66'); 
            bar.addData([EUMAR, EUAPR, EUMAY, EUJUN, EUJUL, EUAUG, EUSEP, EUOCT, EUNOV, EUDEC], 'Eunice', 'FFCC99'); 
            bar.addData([ENMAR, ENAPR, ENMAY, ENJUN, ENJUL, ENAUG, ENSEP, ENOCT, ENNOV, ENDEC], 'ENPQ', 'CC3300'); 
            bar.addData([HMMAR, HMAPR, HMMAY, HMJUN, HMJUL, HMAUG, HMSEP, HMOCT, HMNOV, HMDEC], 'HMR', '0033FF'); 
            bar.addData([JCMAR, JCAPR, JCMAY, JCJUN, JCJUL, JCAUG, JCSEP, JCOCT, JCNOV, JCDEC], 'Jay County', '9966CC'); 
            bar.addData([JIMAR, JIAPR, JIMAY, JIJUN, JIJUL, JIAUG, JISEP, JIOCT, JINOV, JIDEC], 'JITB', 'FF3300'); 
            bar.addData([JSMAR, JSAPR, JSMAY, JSJUN, JSJUL, JSAUG, JSSEP, JSOCT, JSNOV, JSDEC], 'JSCC', 'CC6600'); 
            bar.addData([MAMAR, MAAPR, MAMAY, MAJUN, MAJUL, MAAUG, MASEP, MAOCT, MANOV, MADEC], 'Marriott', '9999ff');
            bar.addData([MCMAR, MCAPR, MCMAY, MCJUN, MCJUL, MCAUG, MCSEP, MCOCT, MCNOV, MCDEC], 'McDowell', '1B87E0');
            bar.addData([MEMAR, MEAPR, MEMAY, MEJUN, MEJUL, MEAUG, MESEP, MEOCT, MENOV, MEDEC], 'Memorial', '1BE0D3');
            bar.addData([MIMAR, MIAPR, MIMAY, MIJUN, MIJUL, MIAUG, MISEP, MIOCT, MINOV, MIDEC], 'Mitel', '1BE060');
            bar.addData([NMMAR, NMAPR, NMMAY, NMJUN, NMJUL, NMAUG, NMSEP, NMOCT, NMNOV, NMDEC], 'NMC', 'D0E01B');
            bar.addData([NDMAR, NDAPR, NDMAY, NDJUN, NDJUL, NDAUG, NDSEP, NDOCT, NDNOV, NDDEC], 'Notre Dame', '76EEC6');
            bar.addData([OUMAR, OUAPR, OUMAY, OUJUN, OUJUL, OUAUG, OUSEP, OUOCT, OUNOV, OUDEC], 'UOttawa', 'E0841B');
            bar.addData([PHMAR, PHAPR, PHMAY, PHJUN, PHJUL, PHAUG, PHSEP, PHOCT, PHNOV, PHDEC], 'Phelps', 'E0251B');
            bar.addData([POMAR, POAPR, POMAY, POJUN, POJUL, POAUG, POSEP, POOCT, PONOV, PODEC], 'Poltimore', 'E01B74');
            bar.addData([PNMAR, PNAPR, PNMAY, PNJUN, PNJUL, PNAUG, PNSEP, PNOCT, PNNOV, PNDEC], 'Philemon', 'C91BE0');
            bar.addData([RAMAR, RAAPR, RAMAY, RAJUN, RAJUL, RAAUG, RASEP, RAOCT, RANOV, RADEC], 'Rayburn', '290F3D');
            bar.addData([SBMAR, SBAPR, SBMAY, SBJUN, SBJUL, SBAUG, SBSEP, SBOCT, SBNOV, SBDEC], 'Santa Barbara', '05EB83');
            bar.addData([SDMAR, SDAPR, SDMAY, SDJUN, SDJUL, SDAUG, SDSEP, SDOCT, SDNOV, SDDEC], 'San Diego', 'BAD4C8');
            bar.addData([SEMAR, SEAPR, SEMAY, SEJUN, SEJUL, SEAUG, SESEP, SEOCT, SENOV, SEDEC], 'Sequoia', '734A12');
            bar.addData([SKMAR, SKAPR, SKMAY, SKJUN, SKJUL, SKAUG, SKSEP, SKOCT, SKNOV, SKDEC], 'Skokie', 'CFD3E3');
            bar.addData([SPMAR, SPAPR, SPMAY, SPJUN, SPJUL, SPAUG, SPSEP, SPOCT, SPNOV, SPDEC], 'St Paul', '6E2E61');
            bar.addData([SYMAR, SYAPR, SYMAY, SYJUN, SYJUL, SYAUG, SYSEP, SYOCT, SYNOV, SYDEC], 'Syniverse', '7A3843');
            bar.addData([SWMAR, SWAPR, SWMAY, SWJUN, SWJUL, SWAUG, SWSEP, SWOCT, SWNOV, SWDEC], 'Switch', 'A8AD87');
            bar.addData([TAMAR, TAAPR, TAMAY, TAJUN, TAJUL, TAAUG, TASEP, TAOCT, TANOV, TADEC], 'TAMU', 'CFF207');
            bar.addData([TNMAR, TNAPR, TNMAY, TNJUN, TNJUL, TNAUG, TNSEP, TNOCT, TNNOV, TNDEC], 'TNCDSB', 'E0A884');
            bar.addData([TRMAR, TRAPR, TRMAY, TRJUN, TRJUL, TRAUG, TRSEP, TROCT, TRNOV, TRDEC], 'Trinity', 'ED884A');
            bar.addData([UMMAR, UMAPR, UMMAY, UMJUN, UMJUL, UMAUG, UMSEP, UMOCT, UMNOV, UMDEC], 'UMAN', 'ED544A');
            bar.addData([VIMAR, VIAPR, VIMAY, VIJUN, VIJUL, VIAUG, VISEP, VIOCT, VINOV, VIDEC], 'Vigo', 'E88B84');
            bar.addData([VLMAR, VLAPR, VLMAY, VLJUN, VLJUL, VLAUG, VLSEP, VLOCT, VLNOV, VLDEC], 'Villanova', 'AD8380');
            bar.addData([WEMAR, WEAPR, WEMAY, WEJUN, WEJUL, WEAUG, WESEP, WEOCT, WENOV, WEDEC], 'Westerville', '487057');
            bar.addData([WLMAR, WLAPR, WLMAY, WLJUN, WLJUL, WLAUG, WLSEP, WLOCT, WLNOV, WLDEC], 'WLU', 'B2B54C');
            bar.addData([WQMAR, WQAPR, WQMAY, WQJUN, WQJUL, WQAUG, WQSEP, WQOCT, WQNOV, WQDEC], 'WQSB', 'C7C7C7');
            bar.setAutoScaling(); // Auto scale y axis
            bar.addAxisLabels('x', ['Mar','Apr','May','Jun','Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']); 

            response.write('<P>')
            var imageUrl = bar.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text">'); 

            response.write('<h3>ALL TICKETS BY CUSTOMER</h3><p>');
            response.write ('</body></html>');
            response.end(); */
     /*     }
      });
    }

    for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+customers[i]+'%" and requested like "Mar%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Mar';
        var count = results[0]["count(*)"];
        
        switch(description[b]) {
          case 'Amityville':
             if (count > 0) {
                 amityville=count; 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 ac=count; 
              }
             break;
          case 'Carleton':
            // console.log(description[j]+'-'+count);
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
          //  console.log(description[j]+'-'+count);
             if (count > 0) {
                carleton+=count;
             }
             break;
           case 'Celtic Manor':
             if (count > 0) {
                celtic=count;
             }
             break;
           case 'WQSB Chelsea':
             if (count > 0) {
                chelsea=count;
             }
             break;
           case 'Conestoga':
             if (count > 0) {
                conestoga=count;
             }
             break;
           case 'CTS':
             if (count > 0) {
                cts=count;
             }
             break;
           case 'WQSB Darcy':
             if (count > 0) {
                darcy=count;
             }
             break;
           case 'Dryden':
             if (count > 0) {
                dryden=count;
             }
             break;
           case 'DSBN':
             if (count > 0) {
                dsbn=count;
             }
             break;
           case 'Eunice':
             if (count > 0) {
                eunice=count;
             }
             break;
           case 'ENPQ':
             if (count > 0) {
                enpq=count;
             }
             break;
           case 'HMR':
             if (count > 0) {
                hmr=count;
             }
             break;
           case 'Jay County':
             if (count > 0) {
                jay=count;
             }
             break;
           case 'JITB':
             if (count > 0) {
                jitb=count;
             }
             break;
           case 'JSCC':
             if (count > 0) {
               jscc=count;
             }
             break;
            case 'Lakehead':
             if (count > 0) {
               lakehead=count;
             }
             break;
            case 'Marriott':
             if (count > 0) {
               marriott=count;
             }
             break;
            case 'McDowell':
             if (count > 0) {
               mcdowell=count;
             }
             break;
            case 'Memorial':
             if (count > 0) {
               memorial=count;
             }
             break;
            case 'Mitel':
             if (count > 0) {
               mitel=count;
             }
             break;
            case 'Nanticoke':
             if (count > 0) {
               nanticoke=count;
             }
             break;
            case 'NMC':
             if (count > 0) {
               nmc=count;
             }
             break;
            case 'Notre Dame':
             if (count > 0) {
               notredame=count;
             }
             break;
            case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
            case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
             }
             break;
            case 'Phelps':
             if (count > 0) {
               phelps=count;
             }
             break;
            case 'WQSB Poltimore':
             if (count > 0) {
               poltimore=count;
             }
             break;
            case 'WQSB Philemon':
             if (count > 0) {
               philemon=count;
             }
             break;
            case 'Rayburn':
             if (count > 0) {
               rayburn=count;
             }
             break;
            case 'Santa Barbara':
             if (count > 0) {
               barbara=count;
             }
             break;
            case 'San Diego':
             if (count > 0) {
               diego=count;
             }
             break;
            case 'Sequoia':
             if (count > 0) {
               sequoia=count;
             }
             break;
            case 'Skokie':
             if (count > 0) {
               skokie=count;
             }
             break;
            case 'St Paul':
             if (count > 0) {
               stpaul=count;
             }
             break;
            case 'Syniverse':
             if (count > 0) {
               syniverse=count;
             }
             break;
            case 'Switch':
             if (count > 0) {
               Switch=count;
             }
             break;
            case 'TAMU':
             if (count > 0) {
               texas=count;
             }
             break;
            case 'TNCDSB':
             if (count > 0) {
               tncdsb=count;
             }
             break;
            case 'Trinity':
             if (count > 0) {
               trinity=count;
             }
             break;
            case 'U Manitoba':
             if (count > 0) {
               uman=count;
             }
             break;
            case 'Vechtdal':
             if (count > 0) {
               vechtdal=count;
             }
             break;
            case 'Vigo':
             if (count > 0) {
               vigo=count;
             }
             break;
            case 'Villanova':
             if (count > 0) {
               villanova=count;
             }
             break;
            case 'Westerville':
             if (count > 0) {
               westerville=count;
             }
             break;
            case 'Wilfrid Laurier':
             if (count > 0) {
               wilfrid=count;
             }
             break;
            case 'WQSB - Not Defined':
             if (count > 0) {
               westquebec=count;
             }
             break;
          }

        //console.log(count);
        //console.log(reason[d]+' total '+count);
        /*  switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 pie.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 pie.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                pie.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                pie.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '99FF00');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               //console.log('GOT HERE 1 '+description[a]+'-'+ottawau);
               pie.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
               // console.log('GOT HERE 2 '+description[a]+'-'+ottawau);
                pie.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          }
          */
       /*   b++;
          if (b == customers.length) {
            westquebec += chelsea + darcy + mcdowell + philemon + poltimore;

            var bar = new Quiche('bar');
            bar.setWidth(600);
            bar.setHeight(500);
            bar.setTitle('Customer Tickets MARCH');
            bar.setBarSpacing(10); // 10 pixles between bars/groups
            bar.setLegendBottom(); // Put legend at bottom
            bar.setTransparentBackground(); // Make background transparent
            bar.addData([amityville, ac, carleton, celtic, chelsea, conestoga, cts, darcy, dryden, dsbn, eunice, enpq, hmr, jay, jitb, jscc, lakehead, marriott, mcdowell, memorial, mitel, nanticoke, nmc, notredame, ottawau, phelps, poltimore, philemon, rayburn, barbara, diego, sequoia, skokie, stpaul, syniverse, Switch, texas, tncdsb, trinity, uman, vechtdal, vigo, villanova, westerville, wilfrid, westquebec], 'Counts', 'CC6600'); 
            bar.setAutoScaling(); // Auto scale y axis
            bar.addAxisLabels('r',["WQSB - Aggregate "+westquebec,"Wilfrid Laurier "+wilfrid,"Westerville "+westerville,"Villanova "+villanova,"Vigo "+vigo,"Vechtdal "+vechtdal, "U Manitoba "+uman,"Trinity "+trinity,"TNCDSB "+tncdsb,"TAMU "+texas,"Switch "+Switch,"Syniverse "+syniverse,"St Paul "+stpaul,"Skokie "+skokie,"Sequoia "+sequoia,"San Diego "+diego,"Santa Barbara "+barbara,"Rayburn "+rayburn,"WQSB Philemon "+philemon,"WQSB Poltimore "+poltimore,"Phelps "+phelps,"UOttawa "+ottawau,"Notre Dame "+notredame,"NMC "+nmc,"Nanticoke "+nanticoke,"Mitel "+mitel,"Memorial "+memorial,"McDowell "+mcdowell,"Marriott "+marriott,"Lakehead "+lakehead, "JSCC "+jscc,"JITB "+jitb,"Jay County "+jay,"HMR "+hmr,"ENPQ "+enpq,"Eunice "+eunice,"DSBN "+dsbn,"Dryden "+dryden,"WQSB Darcy "+darcy,"CTS "+cts,"Conestoga "+conestoga,"WQSB Chelsea "+chelsea,"Celtic Manor "+celtic,"Carelton "+carleton, "Adult Community "+ac,"Amityville "+amityville]);
            bar.setBarHorizontal();

            var imageUrl = bar.getUrl(true); // First param controls http vs. https
            response.write('<br><img src="'+imageUrl+'" alt="some_text">');
            carleton=0; ottawau=0; 
            carleton=0; amityville=0; ac=0; celtic=0;   chelsea=0;   conestoga=0;   cts=0;   darcy=0;   dryden=0;   dsbn=0;   eunice=0;   enpq=0;   hmr=0;   jay=0;   jitb=0;   jscc=0;   lakehead=0;   marriott=0;   mcdowell=0;   memorial=0;   mitel=0;   nmc=0;   notredame=0;   ottawau=0;   phelps=0;   poltimore=0;   philemon=0;   rayburn=0;   barbara=0;   diego=0;   sequoia=0;   skokie=0;   stpaul=0;   syniverse=0;   Switch=0;   texas=0;   tncdsb=0;   trinity=0;   uman=0; vechtdal=0;  vigo=0;   villanova=0;   westerville=0;   wilfrid=0; westquebec=0;

            b=0;
            response.end();
          /*a++;
          if (a == customers.length) {
            response.write('<p><center>MARCH<p>');
            var imageUrl = pie.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center>');
            a = 0;
            carleton=0; ottawau=0; */
      /*     } 
      });
    }

   /* for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%" and requested like "Apr%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Apr';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 pieb.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 pieb.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                pieb.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                pieb.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               pieb.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
                pieb.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '734A12');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                pieb.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          }
          a++;
          if (a == customers.length) {
            response.write('<p><center>APRIL<p>');
            var imageUrl = pieb.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center><p>');
            a = 0;
            carleton=0; ottawau=0;
          }
      });
    }

    for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%" and requested like "May%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='May';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 piea.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 piea.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                piea.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                piea.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               piea.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
                piea.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '734A12');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                piea.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          }
          a++;
          if (a == customers.length) {
            response.write('<p><center>MAY<p>');
            var imageUrl = piea.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center><p>');
            a = 0;
            carleton=0; ottawau=0;
          }
      });
    }

    for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%" and requested like "Jun%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Jun';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 piec.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 piec.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                piec.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                piec.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               piec.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
                piec.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '734A12');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                piec.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          }
          a++;
          if (a == customers.length) {
            response.write('<p><center>JUNE<p>');
            var imageUrl = piec.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center><p>');
            a = 0;
            carleton=0; ottawau=0;
          }
      });
    }

    for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%" and requested like "Jul%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Jul';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 pied.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 pied.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                pied.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                pied.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               pied.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
                pied.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '734A12');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                pied.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          }
          a++;
          if (a == customers.length) {
            response.write('<p><center>JULY<p>');
            var imageUrl = pied.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center><p>');
            a = 0;
            carleton=0; ottawau=0;
          }
      });
    }

    for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%" and requested like "Aug%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Aug';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 piee.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 piee.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                piee.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                piee.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               piee.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
                piee.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '734A12');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                piee.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          }
          a++;
          if (a == customers.length) {
            response.write('<p><center>AUGUST<p>');
            var imageUrl = piee.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center><p>');
            a = 0;
            carleton=0; ottawau=0;
          }
      });
    }

    for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%" and requested like "Sep%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Sep';
        var count = results[0]["count(*)"];
        sepTotal+=count;

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 pief.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 pief.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                pief.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                pief.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               pief.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
                pief.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '734A12');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                pief.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          }
          a++;
          if (a == customers.length) {
            response.write('<p><center>SEPTEMBER<p>');
            var imageUrl = pief.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center><p>');
            //console.log('September '+sepTotal);
            a = 0;
            carleton=0; ottawau=0;
          }
      });
    }

    for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%" and requested like "Oct%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Oct';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 pieg.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 pieg.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                pieg.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                pieg.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               pieg.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
                pieg.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '734A12');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                pieg.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          }
          a++;
          if (a == customers.length) {
            response.write('<p><center>OCTOBER<p>');
            var imageUrl = pieg.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center><p>');
            a = 0;
            carleton=0; ottawau=0;
          }
      });
    }

    for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%" and requested like "Nov%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Nov';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 pieh.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 pieh.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
            case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                pieh.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                pieh.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               pieh.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
                pieh.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '734A12');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                pieh.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          }
          a++;
          if (a == customers.length) {
            response.write('<p><center>NOVEMBER<p>');
            var imageUrl = pieh.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center><p>');
            a = 0;
            carleton=0; ottawau=0;
          }
        });
      }

      for (var i=0; i < customers.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customers[i]+'%" and requested like "Dec%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        month='Dec';
        var count = results[0]["count(*)"];
        decTotal+=count;

        switch(description[a]) {
          case 'Amityville':
             if (count > 0) {
                 piei.addData(count, description[a]+' '+count, 'FF0000');
                 storeCustomer(month,description[a],count); 
              }
             break;
          case 'Adult Community':
             if (count > 0) {
                 piei.addData(count, description[a]+' '+count, 'FFFF00');
                 storeCustomer(month,description[a],count);
              }
             break;
          case 'Carleton':
             if (count > 0) {
                carleton=count;
             }
             break;
          case 'Carletonu':
             if (count > 0) {
                carleton+=count;
                console.log('carleton a '+count);
                piei.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
             } else {
              if (carleton > 0) {
                console.log('carleton b '+count);
                piei.addData(carleton, description[a]+' '+carleton, '0099CC');
                storeCustomer(month,description[a],carleton);
              }
             }
             break;
          case 'Celtic Manor':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '330033');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Chelsea':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'FF0099');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Conestoga':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '003300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'CTS':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Darcy':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '00CC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Dryden':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '999999');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'DSBN':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'FFFF66');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Eunice':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'FFCC99');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'ENPQ':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'CC3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'HMR':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '0033FF');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Jay County':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '9966CC');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JITB':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'FF3300');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'JSCC':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'CC6600');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Marriott':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '9999ff');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'McDowell':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '1B87E0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Memorial':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '1BE0D3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Mitel':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '1BE060');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'NMC':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'D0E01B');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Notre Dame':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '76EEC6');
               storeCustomer(month,description[a],count);
             }
             break;
          case 'Ottawa U':
             if (count > 0) {
               ottawau=count;
             }
             break;
          case 'U Ottawa':
             if (count > 0) {
               ottawau+=count;
               piei.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
               storeCustomer(month,description[a],ottawau);
             } else {
              if (ottawau > 0) {
                piei.addData(ottawau, description[a]+' '+ottawau, 'E0841B');
                storeCustomer(month,description[a],ottawau);
              }
             }
             break;
          case 'Phelps':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'E0251B');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Poltimore':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'E01B74');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB Philemon':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'C91BE0');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Rayburn':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '290F3D');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Santa Barbara':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '05EB83');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'San Diego':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'BAD4C8');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Sequoia':
              if (count > 0) {
                pie.addData(count, description[a]+' '+count, '734A12');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Skokie':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'CFD3E3');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'St Paul':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '6E2E61');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Syniverse':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '7A3843');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Switch':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'A8AD87');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TAMU':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'CFF207');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'TNCDSB':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'E0A884');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Trinity':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'ED884A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'U Manitoba':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'ED544A');
                storeCustomer(month,description[a],count);
              }
              break;
          case 'Vigo':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'E88B84');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Villanova':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'AD8380');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Westerville':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, '487057');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'Wilfrid Laurier':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'B2B54C');
               storeCustomer(month,description[a],count);
              }
              break;
          case 'WQSB - Not Defined':
              if (count > 0) {
                piei.addData(count, description[a]+' '+count, 'C7C7C7');
               storeCustomer(month,description[a],count);
              }
              break;
          }
          a++;
          if (a == customers.length) {
            response.write('<p><center>DECEMBER<p>');
            var imageUrl = piei.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text"></center><p>');

          var bar = new Quiche('bar');
            bar.setWidth(400);
            bar.setHeight(600);
            bar.setTitle('Customers BY Month');
            bar.setBarStacked(); // Stacked chart
            bar.setBarWidth(0); 
            bar.setBarSpacing(6); // 6 pixles between bars/groups
            bar.setLegendBottom(); // Put legend at bottom
            bar.setTransparentBackground(); // Make background transparent 


            //console.log('DECEMBER '+decTotal);
            console.log(AMDEC+' '+ACDEC+' '+CUDEC+' '+CMDEC+' '+CHDEC+' '+CNDEC+' '+DADEC+' '+DRDEC+' '+DSDEC+' '+EUDEC+' '+ENDEC+' '+HMDEC+' '+JCDEC+' '+JSDEC+' '+MADEC+' '+MCDEC+' '+MEDEC+' '+MIDEC+' '+NMDEC+' '+NMDEC);

            bar.addData([AMJAN, AMFEB, AMMAR, AMAPR, AMMAY, AMJUN, AMJUL, AMAUG, AMSEP, AMOCT, AMNOV, AMDEC], 'Amityville', 'FF0000'); 
            bar.addData([ACJAN, ACFEB, ACMAR, ACAPR, ACMAY, ACJUN, ACJUL, ACAUG, ACSEP, ACOCT, ACNOV, ACDEC], 'Adult Community', 'FFFF00');  
            bar.addData([CUJAN, CUFEB, CUMAR, CUAPR, CUMAY, CUJUN, CUJUL, CUAUG, CUSEP, CUOCT, CUNOV, CUDEC], 'Carleton', '0099CC'); 
            bar.addData([CMJAN, CMFEB, CMMAR, CMAPR, CMMAY, CMJUN, CMJUL, CMAUG, CMSEP, CMOCT, CMNOV, CMDEC], 'Celtic Manor', '330033'); 
            bar.addData([CHJAN, CHFEB, CHMAR, CHAPR, CHMAY, CHJUN, CHJUL, CHAUG, CHSEP, CHOCT, CHNOV, CHDEC], 'Chelsea', 'FF0099'); 
            bar.addData([CNJAN, CNFEB, CNMAR, CNAPR, CNMAY, CNJUN, CNJUL, CNAUG, CNSEP, CNOCT, CNNOV, CNDEC], 'Conestoga', '003300'); 
            bar.addData([CTJAN. CTFEB, CTMAR, CTAPR, CTMAY, CTJUN, CTJUL, CTAUG, CTSEP, CTOCT, CTNOV, CTDEC], 'CTS', '99FF00'); 
            bar.addData([DAJAN, DAFEB, DAMAR, DAAPR, DAMAY, DAJUN, DAJUL, DAAUG, DASEP, DAOCT, DANOV, DADEC], 'Darcy', '00CC99'); 
            bar.addData([DRJAN, DRFEB, DRMAR, DRAPR, DRMAY, DRJUN, DRJUL, DRAUG, DRSEP, DROCT, DRNOV, DRDEC], 'Dryden', '999999'); 
            bar.addData([DSJAN, DSFEB, DSMAR, DSAPR, DSMAY, DSJUN, DSJUL, DSAUG, DSSEP, DSOCT, DSNOV, DSDEC], 'DSBN', 'FFFF66'); 
            bar.addData([EUJAN, EUFEB, EUMAR, EUAPR, EUMAY, EUJUN, EUJUL, EUAUG, EUSEP, EUOCT, EUNOV, EUDEC], 'Eunice', 'FFCC99'); 
            bar.addData([ENJAN, ENFEB, ENMAR, ENAPR, ENMAY, ENJUN, ENJUL, ENAUG, ENSEP, ENOCT, ENNOV, ENDEC], 'ENPQ', 'CC3300'); 
            bar.addData([HMJAN, HMFEB, HMMAR, HMAPR, HMMAY, HMJUN, HMJUL, HMAUG, HMSEP, HMOCT, HMNOV, HMDEC], 'HMR', '0033FF'); 
            bar.addData([JCJAN, JCFEB, JCMAR, JCAPR, JCMAY, JCJUN, JCJUL, JCAUG, JCSEP, JCOCT, JCNOV, JCDEC], 'Jay County', '9966CC'); 
            bar.addData([JIJAN, JIFEB, JIMAR, JIAPR, JIMAY, JIJUN, JIJUL, JIAUG, JISEP, JIOCT, JINOV, JIDEC], 'JITB', 'FF3300'); 
            bar.addData([JSJAN, JSFEB, JSMAR, JSAPR, JSMAY, JSJUN, JSJUL, JSAUG, JSSEP, JSOCT, JSNOV, JSDEC], 'JSCC', 'CC6600'); 
            bar.addData([MAJAN, MAFEB, MAMAR, MAAPR, MAMAY, MAJUN, MAJUL, MAAUG, MASEP, MAOCT, MANOV, MADEC], 'Marriott', '9999ff');
            bar.addData([MCJAN, MCFEB, MCMAR, MCAPR, MCMAY, MCJUN, MCJUL, MCAUG, MCSEP, MCOCT, MCNOV, MCDEC], 'McDowell', '1B87E0');
            bar.addData([MEJAN, MCFEB, MEMAR, MEAPR, MEMAY, MEJUN, MEJUL, MEAUG, MESEP, MEOCT, MENOV, MEDEC], 'Memorial', '1BE0D3');
            bar.addData([MIJAN, MIFEB, MIMAR, MIAPR, MIMAY, MIJUN, MIJUL, MIAUG, MISEP, MIOCT, MINOV, MIDEC], 'Mitel', '1BE060');
            bar.addData([NMJAN, NMFEB, NMMAR, NMAPR, NMMAY, NMJUN, NMJUL, NMAUG, NMSEP, NMOCT, NMNOV, NMDEC], 'NMC', 'D0E01B');
            bar.addData([NDJAN, NDFEB, NDMAR, NDAPR, NDMAY, NDJUN, NDJUL, NDAUG, NDSEP, NDOCT, NDNOV, NDDEC], 'Notre Dame', '76EEC6');
            bar.addData([OUJAN, OUFEB, OUMAR, OUAPR, OUMAY, OUJUN, OUJUL, OUAUG, OUSEP, OUOCT, OUNOV, OUDEC], 'UOttawa', 'E0841B');
            bar.addData([PHJAN, PHFEB, PHMAR, PHAPR, PHMAY, PHJUN, PHJUL, PHAUG, PHSEP, PHOCT, PHNOV, PHDEC], 'Phelps', 'E0251B');
            bar.addData([POJAN, POFEB, POMAR, POAPR, POMAY, POJUN, POJUL, POAUG, POSEP, POOCT, PONOV, PODEC], 'Poltimore', 'E01B74');
            bar.addData([PNJAN, PNFEB, PNMAR, PNAPR, PNMAY, PNJUN, PNJUL, PNAUG, PNSEP, PNOCT, PNNOV, PNDEC], 'Philemon', 'C91BE0');
            bar.addData([RAJAN, RAFEB, RAMAR, RAAPR, RAMAY, RAJUN, RAJUL, RAAUG, RASEP, RAOCT, RANOV, RADEC], 'Rayburn', '290F3D');
            bar.addData([SBJAN, SBFEB, SBMAR, SBAPR, SBMAY, SBJUN, SBJUL, SBAUG, SBSEP, SBOCT, SBNOV, SBDEC], 'Santa Barbara', '05EB83');
            bar.addData([SDJAN, SDFEB, SDMAR, SDAPR, SDMAY, SDJUN, SDJUL, SDAUG, SDSEP, SDOCT, SDNOV, SDDEC], 'San Diego', 'BAD4C8');
            bar.addData([SEJAN, SEFEB, SEMAR, SEAPR, SEMAY, SEJUN, SEJUL, SEAUG, SESEP, SEOCT, SENOV, SEDEC], 'Sequoia', '734A12');
            bar.addData([SKJAN, SKFEB, SKMAR, SKAPR, SKMAY, SKJUN, SKJUL, SKAUG, SKSEP, SKOCT, SKNOV, SKDEC], 'Skokie', 'CFD3E3');
            bar.addData([SPJAN, SPFEB, SPMAR, SPAPR, SPMAY, SPJUN, SPJUL, SPAUG, SPSEP, SPOCT, SPNOV, SPDEC], 'St Paul', '6E2E61');
            bar.addData([SYJAN, SYFEB, SYMAR, SYAPR, SYMAY, SYJUN, SYJUL, SYAUG, SYSEP, SYOCT, SYNOV, SYDEC], 'Syniverse', '7A3843');
            bar.addData([SWJAN, SWFEB, SWMAR, SWAPR, SWMAY, SWJUN, SWJUL, SWAUG, SWSEP, SWOCT, SWNOV, SWDEC], 'Switch', 'A8AD87');
            bar.addData([TAJAN, TAFEB, TAMAR, TAAPR, TAMAY, TAJUN, TAJUL, TAAUG, TASEP, TAOCT, TANOV, TADEC], 'TAMU', 'CFF207');
            bar.addData([TNJAN, TNFEB, TNMAR, TNAPR, TNMAY, TNJUN, TNJUL, TNAUG, TNSEP, TNOCT, TNNOV, TNDEC], 'TNCDSB', 'E0A884');
            bar.addData([TRJAN, TRFEB, TRMAR, TRAPR, TRMAY, TRJUN, TRJUL, TRAUG, TRSEP, TROCT, TRNOV, TRDEC], 'Trinity', 'ED884A');
            bar.addData([UMJAN, UMFEB, UMMAR, UMAPR, UMMAY, UMJUN, UMJUL, UMAUG, UMSEP, UMOCT, UMNOV, UMDEC], 'UMAN', 'ED544A');
            bar.addData([VIJAN, VIFEB, VIMAR, VIAPR, VIMAY, VIJUN, VIJUL, VIAUG, VISEP, VIOCT, VINOV, VIDEC], 'Vigo', 'E88B84');
            bar.addData([VLJAN, VLFEB, VLMAR, VLAPR, VLMAY, VLJUN, VLJUL, VLAUG, VLSEP, VLOCT, VLNOV, VLDEC], 'Villanova', 'AD8380');
            bar.addData([WEJAN, WEFEB, WEMAR, WEAPR, WEMAY, WEJUN, WEJUL, WEAUG, WESEP, WEOCT, WENOV, WEDEC], 'Westerville', '487057');
            bar.addData([WLJAN, WLFEB, WLMAR, WLAPR, WLMAY, WLJUN, WLJUL, WLAUG, WLSEP, WLOCT, WLNOV, WLDEC], 'WLU', 'B2B54C');
            bar.addData([WQJAN, WQFEB, WQMAR, WQAPR, WQMAY, WQJUN, WQJUL, WQAUG, WQSEP, WQOCT, WQNOV, WQDEC], 'WQSB', 'C7C7C7');
            bar.setAutoScaling(); // Auto scale y axis
            bar.addAxisLabels('x', ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']); 

            bar.addData([AMMAR, AMAPR, AMMAY, AMJUN, AMJUL, AMAUG, AMSEP, AMOCT, AMNOV, AMDEC], 'Amityville', 'FF0000'); 
            bar.addData([ACMAR, ACAPR, ACMAY, ACJUN, ACJUL, ACAUG, ACSEP, ACOCT, ACNOV, ACDEC], 'Adult Community', 'FFFF00');  
            bar.addData([CUMAR, CUAPR, CUMAY, CUJUN, CUJUL, CUAUG, CUSEP, CUOCT, CUNOV, CUDEC], 'Carleton', '0099CC'); 
            bar.addData([CMMAR, CMAPR, CMMAY, CMJUN, CMJUL, CMAUG, CMSEP, CMOCT, CMNOV, CMDEC], 'Celtic Manor', '330033'); 
            bar.addData([CHMAR, CHAPR, CHMAY, CHJUN, CHJUL, CHAUG, CHSEP, CHOCT, CHNOV, CHDEC], 'Chelsea', 'FF0099'); 
            bar.addData([CNMAR, CNAPR, CNMAY, CNJUN, CNJUL, CNAUG, CNSEP, CNOCT, CNNOV, CNDEC], 'Conestoga', '003300'); 
            bar.addData([CTMAR, CTAPR, CTMAY, CTJUN, CTJUL, CTAUG, CTSEP, CTOCT, CTNOV, CTDEC], 'CTS', '99FF00'); 
            bar.addData([DAMAR, DAAPR, DAMAY, DAJUN, DAJUL, DAAUG, DASEP, DAOCT, DANOV, DADEC], 'Darcy', '00CC99'); 
            bar.addData([DRMAR, DRAPR, DRMAY, DRJUN, DRJUL, DRAUG, DRSEP, DROCT, DRNOV, DRDEC], 'Dryden', '999999'); 
            bar.addData([DSMAR, DSAPR, DSMAY, DSJUN, DSJUL, DSAUG, DSSEP, DSOCT, DSNOV, DSDEC], 'DSBN', 'FFFF66'); 
            bar.addData([EUMAR, EUAPR, EUMAY, EUJUN, EUJUL, EUAUG, EUSEP, EUOCT, EUNOV, EUDEC], 'Eunice', 'FFCC99'); 
            bar.addData([ENMAR, ENAPR, ENMAY, ENJUN, ENJUL, ENAUG, ENSEP, ENOCT, ENNOV, ENDEC], 'ENPQ', 'CC3300'); 
            bar.addData([HMMAR, HMAPR, HMMAY, HMJUN, HMJUL, HMAUG, HMSEP, HMOCT, HMNOV, HMDEC], 'HMR', '0033FF'); 
            bar.addData([JCMAR, JCAPR, JCMAY, JCJUN, JCJUL, JCAUG, JCSEP, JCOCT, JCNOV, JCDEC], 'Jay County', '9966CC'); 
            bar.addData([JIMAR, JIAPR, JIMAY, JIJUN, JIJUL, JIAUG, JISEP, JIOCT, JINOV, JIDEC], 'JITB', 'FF3300'); 
            bar.addData([JSMAR, JSAPR, JSMAY, JSJUN, JSJUL, JSAUG, JSSEP, JSOCT, JSNOV, JSDEC], 'JSCC', 'CC6600'); 
            bar.addData([MAMAR, MAAPR, MAMAY, MAJUN, MAJUL, MAAUG, MASEP, MAOCT, MANOV, MADEC], 'Marriott', '9999ff');
            bar.addData([MCMAR, MCAPR, MCMAY, MCJUN, MCJUL, MCAUG, MCSEP, MCOCT, MCNOV, MCDEC], 'McDowell', '1B87E0');
            bar.addData([MEMAR, MEAPR, MEMAY, MEJUN, MEJUL, MEAUG, MESEP, MEOCT, MENOV, MEDEC], 'Memorial', '1BE0D3');
            bar.addData([MIMAR, MIAPR, MIMAY, MIJUN, MIJUL, MIAUG, MISEP, MIOCT, MINOV, MIDEC], 'Mitel', '1BE060');
            bar.addData([NMMAR, NMAPR, NMMAY, NMJUN, NMJUL, NMAUG, NMSEP, NMOCT, NMNOV, NMDEC], 'NMC', 'D0E01B');
            bar.addData([NDMAR, NDAPR, NDMAY, NDJUN, NDJUL, NDAUG, NDSEP, NDOCT, NDNOV, NDDEC], 'Notre Dame', '76EEC6');
            bar.addData([OUMAR, OUAPR, OUMAY, OUJUN, OUJUL, OUAUG, OUSEP, OUOCT, OUNOV, OUDEC], 'UOttawa', 'E0841B');
            bar.addData([PHMAR, PHAPR, PHMAY, PHJUN, PHJUL, PHAUG, PHSEP, PHOCT, PHNOV, PHDEC], 'Phelps', 'E0251B');
            bar.addData([POMAR, POAPR, POMAY, POJUN, POJUL, POAUG, POSEP, POOCT, PONOV, PODEC], 'Poltimore', 'E01B74');
            bar.addData([PNMAR, PNAPR, PNMAY, PNJUN, PNJUL, PNAUG, PNSEP, PNOCT, PNNOV, PNDEC], 'Philemon', 'C91BE0');
            bar.addData([RAMAR, RAAPR, RAMAY, RAJUN, RAJUL, RAAUG, RASEP, RAOCT, RANOV, RADEC], 'Rayburn', '290F3D');
            bar.addData([SBMAR, SBAPR, SBMAY, SBJUN, SBJUL, SBAUG, SBSEP, SBOCT, SBNOV, SBDEC], 'Santa Barbara', '05EB83');
            bar.addData([SDMAR, SDAPR, SDMAY, SDJUN, SDJUL, SDAUG, SDSEP, SDOCT, SDNOV, SDDEC], 'San Diego', 'BAD4C8');
            bar.addData([SEMAR, SEAPR, SEMAY, SEJUN, SEJUL, SEAUG, SESEP, SEOCT, SENOV, SEDEC], 'Sequoia', '734A12');
            bar.addData([SKMAR, SKAPR, SKMAY, SKJUN, SKJUL, SKAUG, SKSEP, SKOCT, SKNOV, SKDEC], 'Skokie', 'CFD3E3');
            bar.addData([SPMAR, SPAPR, SPMAY, SPJUN, SPJUL, SPAUG, SPSEP, SPOCT, SPNOV, SPDEC], 'St Paul', '6E2E61');
            bar.addData([SYMAR, SYAPR, SYMAY, SYJUN, SYJUL, SYAUG, SYSEP, SYOCT, SYNOV, SYDEC], 'Syniverse', '7A3843');
            bar.addData([SWMAR, SWAPR, SWMAY, SWJUN, SWJUL, SWAUG, SWSEP, SWOCT, SWNOV, SWDEC], 'Switch', 'A8AD87');
            bar.addData([TAMAR, TAAPR, TAMAY, TAJUN, TAJUL, TAAUG, TASEP, TAOCT, TANOV, TADEC], 'TAMU', 'CFF207');
            bar.addData([TNMAR, TNAPR, TNMAY, TNJUN, TNJUL, TNAUG, TNSEP, TNOCT, TNNOV, TNDEC], 'TNCDSB', 'E0A884');
            bar.addData([TRMAR, TRAPR, TRMAY, TRJUN, TRJUL, TRAUG, TRSEP, TROCT, TRNOV, TRDEC], 'Trinity', 'ED884A');
            bar.addData([UMMAR, UMAPR, UMMAY, UMJUN, UMJUL, UMAUG, UMSEP, UMOCT, UMNOV, UMDEC], 'UMAN', 'ED544A');
            bar.addData([VIMAR, VIAPR, VIMAY, VIJUN, VIJUL, VIAUG, VISEP, VIOCT, VINOV, VIDEC], 'Vigo', 'E88B84');
            bar.addData([VLMAR, VLAPR, VLMAY, VLJUN, VLJUL, VLAUG, VLSEP, VLOCT, VLNOV, VLDEC], 'Villanova', 'AD8380');
            bar.addData([WEMAR, WEAPR, WEMAY, WEJUN, WEJUL, WEAUG, WESEP, WEOCT, WENOV, WEDEC], 'Westerville', '487057');
            bar.addData([WLMAR, WLAPR, WLMAY, WLJUN, WLJUL, WLAUG, WLSEP, WLOCT, WLNOV, WLDEC], 'WLU', 'B2B54C');
            bar.addData([WQMAR, WQAPR, WQMAY, WQJUN, WQJUL, WQAUG, WQSEP, WQOCT, WQNOV, WQDEC], 'WQSB', 'C7C7C7');
            bar.setAutoScaling(); // Auto scale y axis
            bar.addAxisLabels('x', ['Mar','Apr','May','Jun','Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']); 

            response.write('<P>')
            var imageUrl = bar.getUrl(true); // First param controls http vs. https
            response.write('<img src="'+imageUrl+'" alt="some_text">'); 

            response.write('<h3>ALL TICKETS BY CUSTOMER</h3><p>');
            response.write ('</body></html>');
            response.end();
          }
      }); 
    } */
     
   /*  var pie = new Quiche('pie');
     pie.setHeight(400);
     pie.setWidth(500);
     pie.enableEvents;

     var piej = new Quiche('pie');
     piej.setHeight(400);
     piej.setWidth(500);
     //pie.setAutoScaling;
     piej.setTransparentBackground(); // Make background transparent

     var piek = new Quiche('pie');
     piek.setHeight(400);
     piek.setWidth(500);
     //pie.setAutoScaling;
     piek.setTransparentBackground(); // Make background transparent

     var piea = new Quiche('pie');
     piea.setHeight(400);
     piea.setWidth(500);
     //pie.setAutoScaling;
     piea.setTransparentBackground(); // Make background transparent


      
     //pie.setAutoScaling;
     pie.setTransparentBackground(); // Make background transparent

     var pieb = new Quiche('pie');
     pieb.setHeight(400);
     pieb.setWidth(450);
     //pie.setAutoScaling;
     pieb.setTransparentBackground(); // Make background transparent

     var piea = new Quiche('pie');
     piea.setHeight(400);
     piea.setWidth(500);
     //pie.setAutoScaling;
     piea.setTransparentBackground(); // Make background transparent

     var piec = new Quiche('pie');
     piec.setHeight(350);
     piec.setWidth(500);
     //pie.setAutoScaling;
     piec.setTransparentBackground(); // Make background transparent

     var pied = new Quiche('pie');
     pied.setHeight(350);
     pied.setWidth(500);
     //pie.setAutoScaling;
     pied.setTransparentBackground(); // Make background transparent

     var piee = new Quiche('pie');
     piee.setHeight(350);
     piee.setWidth(500);
     //pie.setAutoScaling;
     piee.setTransparentBackground(); // Make background transparent

     var pief = new Quiche('pie');
     pief.setHeight(450);
     pief.setWidth(500);
     //pie.setAutoScaling;
     pief.setTransparentBackground(); // Make background transparent

     var pieg = new Quiche('pie');
     pieg.setHeight(400);
     pieg.setWidth(500);
     //pie.setAutoScaling;
     pieg.setTransparentBackground(); // Make background transparent

     var pieh = new Quiche('pie');
     pieh.setHeight(350);
     pieh.setWidth(500);
     //pie.setAutoScaling;
     pieh.setTransparentBackground(); // Make background transparent

     var piei = new Quiche('pie');
     piei.setHeight(350);
     piei.setWidth(500);
     //pie.setAutoScaling;
     piei.setTransparentBackground(); // Make background transparent

    response.write(top);
    response.write(tableHead);
    response.write(body);

}


function Viewer(response, postData) {
  console.log("request for handler 'Viewer' was called.");
  
  var title = "CUSTOMER TICKETS";
  var label = "Customer";
  var top = writeTop(title, label);
  //console.log(postData);

  var customer=querystring.parse(postData);
  console.log(customer);
  console.log(customer.select);

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(top);
  
  mysql.query('use ' + DATABASE);
    var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+customer.select+'%"', function selectCb(err, results, fields) {
    if (err) {
      throw err;
      response.end();
    }

    var count = results[0]["count(*)"];
    var table = '<table border="1" bordercolor="#ff00ff" style="background-color:#c0c0c0" width="25%" cellpadding="3" cellspacing="3">' +
                '<tr>'+
                '<td>Customer Name</td>' +
                '<td>Tickets</td>' +
                '</tr><tr>' +
                '<td>'+customer.select+'</td>' +
                '<td>'+count+'</td>' +
                '</tr>';
    response.write(table); 
    response.end();
  });
}

function Categories(response, request) {
  console.log("request for handler 'Category' was called.");
  var title = "CATEGORY QUERY";
  var label = "Tickets";
  var category = ["INSINSTALL","INSUPGRADE","HAFAIL","HACONF","HACONN","HRDWRFAIL","HRDWRCONN","HRDWRCONF","CNTCTIMPORT","CNTCTENTRY","CNTCTCONF", "EMLSMTP", "EMLCONF","EMLCONN","SMSBCKEYWORD", "SMSBCTXT","SMSBCCONF","SMSBCCONN","SMSBCCONTACT", "SMSBCOPTIN", "DSKPC","DSKMAC", "DSKCONN", "DSKCONF", "PGLICENSE", "PGTRUNKS", "PGENDPOINTS", "PGFAIL","PGTIMEOUT","PGDELAY","PGCONN","PGCONF", "PGDIALPLAN","PGSPEAKER", "PGPHONE", "PGGROUP", "GTWCONN", "GTWTRUNKS","GTWCONF","GTWSIPPEER","GTWSIPUSER", "GTWDIALPLN","PBXCONF", "PBXCONN","PBXFAIL", "HTMLCONF", "HTMLCONN", "VCELICENSE", "VCETRUNKS", "VCECONF", "VCECONN", "VCEFAIL", "TTSLICENSE", "TTSCONF", "TTSCONN", "CMPGNLICENSE", "CMPGNCONF", "CMPGNCONN", "BLZPNTCONN", "BLZPNTFAIL", "BLZPNTCONF", "BLZPNTREGISTER", "ANLGCONN", "ANLGCONF", "ANLGFAIL", "AGGCONF", "AGGFAIL", "AGGCONN"];
  var description = ["New BlazeCast Installation","Upgrade to BlazeCast Servers","HA Failover did not Complete Correctly","Cannot Connect to an HA Server (Primary or Secondary)","Problem with HA Configuration","Server Hardware failure, cannot connect or ping server","Cannot access Blazecast GUI but server is running, i.e. kernel or memory errors","Problems found or changes needed to hardware or backend configuration","Issue with Contact Imports (task or manual)","Issue due to incorrect Contact entry","Issue regarding Contact configurations", "Email SMTP settings", "Issues with current Email settings","Unable to connect to customer Email","SMS keyword routing issues", "Problems relating to display or Text for SMS","SMS Configuration setup or issues","SMS Connectivity problems","SMS problems relating to Contact information", "SMS Opt-in issues or process questions", "PC Desktop client setup or problems","MAC Desktop client setup or problems", "General Desktop Connectivity issues or questions", "General problems with Desktop client configuration or questions", "Paging License requests or limits exceeded", "Issues or questions related to Paging Trunks", "Questions on Paging Endpoint or problems with Endpoints reported", "Paging Broadcasts Failing","Paging Broadcasts timeout without completing","Paging Broadcasts delays experienced","BlazeCast cannot connect to Paging Endpoints","Questions or Problems with Paging Configuration", "Paging Dial-Plan configuration and or setup","Problems reported with Paging to Speakers", "Problems reported with Paging to Phones", "Questions or Problems with Paging Groups", "Problems Connecting to Gateway configured in BlazeCast", "Setup or Questions regarding Gateway Trunk Configuration","Issues reported on Gateway Configuration in BlazeCast","Issues Connecting to Gateway SIP Peer Profile","Issues Connecting to Gateway SIP Generic User", "Correcting Dial Plan Configuration", "Issues found on PBX setup for BlazeCast","BlazeCast is unable to connect to customer PBX", "Broadcasts failing on customer PBX", "Setup or Issues in HTML Application Setup", "HTML Phones unable to connect to BlazeCast", "Voice License request or Limits exceeded", "Issues or Questions related to Voice Trunks", "Questions or Problems with Voice Configuration", "BlazeCast cannot connect to Voice Extensions/Numbers", "Voice Broadcasts are failing in BlazeCast", "TTS License request or Limits exceeded", "Questions or Problems with TTS Configuration", "BlazeCast cannot connect to TTS engine during broadcasts", "Campaign Dialing License request or Questions", "Questions or Problems discovered in Customer Campaign Dialing Configuration and Setup", "Issues with Campaign Dialing broadcast connecting and or completing", "Problems connecting to BlazePoint Speakers via the backend", "Broadcasts to BlazePoint speakers failing", "Questions or Problems with Configuration of BlazePoint Speakers", "BlazePoint Speaker(s) will not register with BlazeCast", "Problems connecting or broadcasting to Analog speakers", "Questions or Problems Configuring Analog Speakers", "Broadcasts to Analog speakers not connecting or failing", "Questions or Problems with CAP Aggregator Configuration", "CAP Aggregrator Broadcasts not starting or failing", "BlazeCast is unable to Poll CAP Aggregrator server"];
  var heading = ["- INS","- HA","- HRDWR","- CNT","- EML","- SMSBC","- DSK","- PG","- GTW","- PBX","- HTML","- VC","- TTS","- CMPGN","- BLZPNT","- ANLG","- AGG"];
  var reason = ["BlazeCast Install","HA","Hardware","Contacts","Email","SMS","Desktop","Paging","Gateway","PBX(3300)","HTML Application","Voice Dialing","Text to Speech","Campaign Dialing","BlazePoint Speakers","Analog Devices","CAP Aggregator"];
  var tableHead = '<table border="1" bordercolor="#ff00ff" style="background-color:#c0c0c0" width="25%" cellpadding="3" cellspacing="3"><tr><td>Category Name</td><td>Count</td></tr><tr>';
  var top = writeTop(title, label);
  var k = 0;
  var l = 0;
  var m = 0;
  var n = 0;
  var o = 0;
  var p = 0;
  var j = 0;
  var x = 0;
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  var e = 0;

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


  var body = '<form id="input" action="/Descriptor" method="post">'+
      '<select name="select">' +
      '<option value="INSTINSTALL">New BlazeCast Installation</option>'+
      '<option value="INSTUPGRADE">Upgrade to BlazeCast Servers</option>'+
      '<option value="HAFAIL">HA Failover did not Complete Correctly</option>'+
      '<option value="HACONF">Cannot Connect to an HA Server (Primary or Secondary)</option>'+
      '<option value="HACONN">Problem with HA Configuration</option>'+
      '<option value="HRDWRFAIL">Server Hardware failure, cannot connect or ping server</option>'+
      '<option value="HRDWRCONN">Cannot access Blazecast GUI but server is running, i.e. kernel or memory errors</option>'+
      '<option value="HRDWRCONF">Problems found or changes needed to hardware or backend configuration</option>'+
      '<option value="CNTCTIMPORT">Issue with Contact Imports (task or manual)</option>'+
      '<option value="CNTCTENTRY">Issue due to incorrect Contact entry</option>'+
      '<option value="CNTCTCONF">Issue regarding Contact configurations</option>'+
      '<option value="EMLSMTP">Email SMTP settings</option>'+
      '<option value="EMLCONF">Issues with current Email settings</option>'+
      '<option value="EMLCONN">Unable to connect to customer Email</option>'+
      '<option value="SMSBCKEYWORD">SMS keyword routing issues</option>'+
      '<option value="SMSBCTXT">Problems relating to display or Text for SMS</option>'+
      '<option value="SMSBCCONF">SMS Configuration setup or issues</option>'+
      '<option value="SMSBCCONN">SMS Connectivity problems</option>'+
      '<option value="SMSCBCONTACT">SMS problems relating to Contact information</option>'+
      '<option value="SMSBCOPTIN">SMS Opt-in issues or process questions</option>'+
      '<option value="DSKPC">PC Desktop client setup or problems</option>'+
      '<option value="DSKMAC">MAC Desktop client setup or problems</option>'+
      '<option value="DSKCONN">General Desktop Connectivity issues or questions</option>'+
      '<option value="DSKCONF">General problems with Desktop client configuration or questions</option>'+
      '<option value="PGLICENSE">Paging License requests or limits exceeded</option>'+
      '<option value="PGTRUNKS">Issues or questions related to Paging Trunks</option>'+
      '<option value="PGENDPOINTS">Questions on Paging Endpoint or problems with Endpoints reported</option>'+
      '<option value="PGFAIL">Paging Broadcasts Failing</option>'+
      '<option value="PGTIMEOUT">Paging Broadcasts timeout without completing</option>' +
      '<option value="PGDELAY">Paging Broadcasts delays experienced</option>' +
      '<option value="PGCONN">BlazeCast cannot connect to Paging Endpoints</option>' +
      '<option value="PGCONF">Questions or Problems with Paging Configuration</option>' +
      '<option value="PGDIALPLAN">Paging Dial-Plan configuration and or setup</option>' +
      '<option value="PGSPEAKER">Problems reported with Paging to Speakers</option>' +
      '<option value="PGPHONE">Problems reported with Paging to Phones</option>' +
      '<option value="PGGROUP">Questions or Problems with Paging Groups</option>' +
      '<option value="GTWCONN">Problems Connecting to Gateway configured in BlazeCast</option>' +
      '<option value="GTWTRUNKS">Setup or Questions regarding Gateway Trunk Configuration</option>' +
      '<option value="GTWCONF">Issues reported on Gateway Configuration in BlazeCast</option>' +
      '<option value="GTWSIPPEER">Issues Connecting to Gateway SIP Peer Profile</option>' +
      '<option value="GTWSIPUSER">Issues Connecting to Gateay SIP Generic User</option>' +
      '<option value="GTWDIALPLN">Correcting Dial Plan Configuration</option>' +
      '<option value="PBXCONF">Issues found on PBX setup for BlazeCast</option>' +
      '<option value="PBXCONN">BlazeCast is unable to connect to customer PBX</option>' +
      '<option value="PBXFAIL">Broadcasts failing on customer PBX</option>' +
      '<option value="HTMLCONF">Setup or Issues in HTML Application Setup</option>' +
      '<option value="HTMLCONN">HTML Phones unable to connect to BlazeCast</option>' +
      '<option value="VCELICENSE">Voice License request or Limits exceeded</option>' +
      '<option value="VCETRUNKS">Issues or Questions related to Voice Trunks</option>' +
      '<option value="VCECONF">Questions or Problems with Voice Configuration</option>' +
      '<option value="VCECONN">BlazeCast cannot connect to Voice Extensions/Numbers</option>' +
      '<option value="VCEFAIL">Voice Broadcasts are failing in BlazeCast</option>' +
      '<option value="TTSLICENSE">TTS License request or Limits exceeded</option>' +
      '<option value="TTSCONF">Questions or Problems with TTS Configuration</option>' +
      '<option value="TTSCONN">BlazeCast cannot connect to TTS engine during broadcasts</option>' +
      '<option value="CMPGNLICENSE">Campaign Dialing License request or Questions</option>' +
      '<option value="CMPGNCONF">Questions or Problems discovered in Customer Campaign Dialing Configuration and Setup</option>' +
      '<option value="CMPGNCONN">Issues with Campaign Dialing broadcast connecting and or completing</option>' +
      '<option value="BLZPNTCONN">Problems connecting to BlazePoint Speakers via the backend</option>' +
      '<option value="BLZPNTFAIL">Broadcasts to BlazePoint speakers failing</option>' +
      '<option value="BLZPNTCONF">Questions or Problems with Configuration of BlazePoint Speakers</option>' +
      '<option value="BLZPNTREGISTER">BlazePoint Speaker(s) will not register with BlazeCast</option>' +
      '<option value="ANLGCONN">Problems connecting or broadcasting to Analog speakers</option>' +
      '<option value="ANLGCONF">Questions or Problems Configuring Analog Speakers</option>' +
      '<option value="ANLGFAIL">Broadcasts to Analog speakers not connecting or failing</option>' +
      '<option value="AGGCONF">Questions or Problems with CAP Aggregator Configuration</option>' +
      '<option value="AGGFAIL">CAP Aggregrator Broadcasts not starting or failing</option>' +
      '<option value="AGGCONN">BlazeCast is unable to Poll CAP Aggregrator server</option>' +
      '</select>' + 
      //'</br><textarea name="client" value= theform.option.selected rows="1" cols="20"></textarea>' +
      '</p><input type="submit" value="Select Description" />'+
      '</form><p>';

      


      for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[x])
        switch(reason[x]) {
            case 'BlazeCast Install':
                //console.log(count);
                if (count > 0) {
                pie.addData(count, 'Install '+count, 'FF0000');
              }
              break;
            case 'HA':
                if (count > 0) {
                pie.addData(count, 'HA '+count, 'FFFF00');
              }
              break;
            case 'Hardware':
                if (count > 0) {
                pie.addData(count, 'Hardware '+count, 'FF00FF');
              }
              break;
            case 'Contacts':
              if (count > 0) {
                pie.addData(count, 'Contacts '+count, '0099CC');
              }
              break;
            case 'Email':
              if (count > 0) {
                pie.addData(count, 'EMAIL '+count, '330033');
              }
              break;
            case 'SMS':
              if (count > 0) {
                pie.addData(count, 'SMS '+count, 'FF0099');
              }
              break;
            case 'Desktop':
              if (count > 0) {
                pie.addData(count, 'Desktop '+count, '003300');
              }
              break;
            case 'Paging':
              if (count > 0) {
                pie.addData(count, 'Paging '+count, '99FF00');
              }
              break;
            case 'Gateway':
              if (count > 0) {
                pie.addData(count, 'Gateway '+count, '00CC99');
              }
              break;
            case 'PBX(3300)':
              if (count > 0) {
                pie.addData(count, 'PBX '+count, 'FF0000');
              }
              break;
            case 'HTML Application':
              if (count > 0) {
                pie.addData(count, 'PBX(3300) '+count, 'FFFF66');
              }
              break;
            case 'Voice Dialing':
              if (count > 0) {
                pie.addData(count, 'Voice Dialing '+count, 'FFCC99');
              }
              break;
            case 'Text to Speech':
              if (count > 0) {
                pie.addData(count, 'TTS '+count, 'CC3300');
              }
              break;
            case 'Campaign Dialing':
              if (count > 0) {
                pie.addData(count, 'Campaign Dialing '+count, '0033FF');
              }
              break;
            case 'BlazePoint Speakers':
              if (count > 0) {
                pie.addData(count, 'BlazePoint '+count, '9966CC');
              }
              break;
            case 'Analog Devices':
              if (count > 0) {
                pie.addData(count, 'Analog Devices '+count, 'FF3300');
              }
              break;
            case 'CAP Aggregator':
              if (count > 0) {
                pie.addData(count, 'CAP Aggregator '+count, 'CC6600');
              }
              break;
        }

        var table ='<td>'+reason[x]+'</td>' +
                   '<td>'+count+'</td>' +
                   '</tr>';
        response.write(table);
        x++;
        if (x == heading.length) {
          var imageUrl = pie.getUrl(true); // First param controls http vs. https
          response.write('<img src="'+imageUrl+'" alt="some_text">');

          response.write('</table><p>');
          x=0;
         }
        });
      }

      for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+heading[i]+'%") and (requested="'+holdDate+'" or requested ="'+holdDate1+'" or requested ="'+holdDate6+'" or requested ="'+holdDate7+'" or requested ="'+holdDate2+'" or requested ="'+holdDate3+'" or requested ="'+holdDate4+'" or requested ="'+holdDate5+'") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[x])
        switch(reason[x]) {
            case 'BlazeCast Install':
                //console.log(count);
                if (count > 0) {
                piew.addData(count, 'Install '+count, 'FF0000');
              }
              break;
            case 'HA':
                if (count > 0) {
                piew.addData(count, 'HA '+count, 'FFFF00');
              }
              break;
            case 'Hardware':
                if (count > 0) {
                piew.addData(count, 'Hardware '+count, 'FF00FF');
              }
              break;
            case 'Contacts':
              if (count > 0) {
                piew.addData(count, 'Contacts '+count, '0099CC');
              }
              break;
            case 'Email':
              if (count > 0) {
                piew.addData(count, 'EMAIL '+count, '330033');
              }
              break;
            case 'SMS':
              if (count > 0) {
                piew.addData(count, 'SMS '+count, 'FF0099');
              }
              break;
            case 'Desktop':
              if (count > 0) {
                piew.addData(count, 'Desktop '+count, '003300');
              }
              break;
            case 'Paging':
              if (count > 0) {
                piew.addData(count, 'Paging '+count, '99FF00');
              }
              break;
            case 'Gateway':
              if (count > 0) {
                piew.addData(count, 'Gateway '+count, '00CC99');
              }
              break;
            case 'PBX(3300)':
              if (count > 0) {
                piew.addData(count, 'PBX '+count, 'FF0000');
              }
              break;
            case 'HTML Application':
              if (count > 0) {
                pie.addData(count, 'PBX(3300) '+count, 'FFFF66');
              }
              break;
            case 'Voice Dialing':
              if (count > 0) {
                piew.addData(count, 'Voice Dialing '+count, 'FFCC99');
              }
              break;
            case 'Text to Speech':
              if (count > 0) {
                piew.addData(count, 'TTS '+count, 'CC3300');
              }
              break;
            case 'Campaign Dialing':
              if (count > 0) {
                piew.addData(count, 'Campaign Dialing '+count, '0033FF');
              }
              break;
            case 'BlazePoint Speakers':
              if (count > 0) {
                piew.addData(count, 'BlazePoint '+count, '9966CC');
              }
              break;
            case 'Analog Devices':
              if (count > 0) {
                piew.addData(count, 'Analog Devices '+count, 'FF3300');
              }
              break;
            case 'CAP Aggregator':
              if (count > 0) {
                piew.addData(count, 'CAP Aggregator '+count, 'CC6600');
              }
              break;
        }

        
        x++;
        if (x == heading.length) {
          var imageUrl = piew.getUrl(true); // First param controls http vs. https
          response.write('<br><H2>WEEKLY CATEGORIES<br><img src="'+imageUrl+'" alt="some_text">');

          x=0;
         }
        });
      }

      for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+heading[i]+'%" and requested like "Jan%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        var july='Jan';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(reason[k]) {
          case 'BlazeCast Install':
            if (count > 0) {
               storeMonth(july,reason[k],count);
             }
             break;
          case 'HA':
             if (count > 0) {
               storeMonth(july,reason[k],count);
             }
             break;
          case 'Hardware':
             if (count > 0) {
               storeMonth(july,reason[k],count);
             }
             break;
          case 'Contacts':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'Email':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'SMS':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'Desktop':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'Paging':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'Gateway':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'PBX(3300)':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'HTML Application':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'Voice Dialing':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'Text to Speech':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'Campaign Dialing':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'BlazePoint Speakers':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'Analog Devices':
             if (count > 0) {
               storeMonth(july,reason[k],count)
             }
             break;
           case 'CAP Aggregator':
             if (count > 0) {
              // console.log(september+','+ reason[d]+','+count);
               storeMonth(july,reason[k],count)
             }
             break;
          }
          k++;
          
        });
      }

      for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and requested like "Feb%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        var july='Feb';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(reason[l]) {
          case 'BlazeCast Install':
            if (count > 0) {
               storeMonth(july,reason[l],count);
             }
             break;
          case 'HA':
             if (count > 0) {
               storeMonth(july,reason[l],count);
             }
             break;
          case 'Hardware':
             if (count > 0) {
               storeMonth(july,reason[l],count);
             }
             break;
          case 'Contacts':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'Email':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'SMS':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'Desktop':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'Paging':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'Gateway':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'PBX(3300)':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'HTML Application':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Voice Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Text to Speech':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'Campaign Dialing':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'BlazePoint Speakers':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'Analog Devices':
             if (count > 0) {
               storeMonth(july,reason[l],count)
             }
             break;
           case 'CAP Aggregator':
             if (count > 0) {
              // console.log(september+','+ reason[d]+','+count);
               storeMonth(july,reason[l],count)
             }
             break;
          }
          l++;
        });
      }

     for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where (subject like "%'+heading[i]+'%" and requested like "Mar%") and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        var july='Mar';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(reason[m]) {
          case 'BlazeCast Install':
            if (count > 0) {
               storeMonth(july,reason[c],count);
             }
             break;
          case 'HA':
             if (count > 0) {
               storeMonth(july,reason[c],count);
             }
             break;
          case 'Contacts':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Email':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'SMS':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Desktop':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Paging':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Gateway':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'PBX(3300)':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'HTML Application':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Voice Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Text to Speech':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Campaign Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'BlazePoint Speakers':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Analog Devices':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'CAP Aggregator':
             if (count > 0) {
              // console.log(september+','+ reason[d]+','+count);
               storeMonth(july,reason[c],count)
             }
             break;
          }
          m++;
          if (m == heading.length) { 
             //console.log (BCSTJUL+','+BCSTAUG+','+BCSTSEP+','+BCSTOCT+','+BCSTNOV);
             bar.addData([INSTJAN, INSTFEB, INSTMAR], 'Install', 'FF0000'); 
             bar.addData([HAJAN, HAFEB, HAMAR], 'HA', 'FFFF00'); 
             bar.addData([HWJAN, HWFEB, HWMAR], 'Hardware', 'FF00FF'); 
             bar.addData([CNJAN, CNFEB, CNMAR], 'Contacts', '0099CC'); 
             bar.addData([EMJAN, EMFEB, EMMAR], 'Email', '330033'); 
             bar.addData([SMSJAN, SMSFEB, SMSMAR], 'SMS', 'FF0099'); 
             bar.addData([DSKJAN, DSKFEB, DSKMAR], 'Desktop', '003300'); 
             bar.addData([PGJAN, PGFEB, PGMAR], 'Paging', '99FF00'); 
             bar.addData([GWJAN, GWFEB, GWMAR], 'Gateway', '00CC99'); 
             bar.addData([PBXJAN, PBXFEB, PBXMAR], 'PBX', '999999'); 
             bar.addData([HTMLJAN, HTMLFEB, HTMLMAR], 'HTML', 'FFFF66'); 
             bar.addData([VCJAN, VCFEB, VCMAR], 'Voice', 'FFCC99'); 
             bar.addData([TTSJAN, TTSFEB, TTSMAR], 'TTS', 'CC3300'); 
             bar.addData([CMPGNJAN, CMPGNFEB, CMPGNMAR], 'Campaign', '0033FF'); 
             bar.addData([BPJAN, BPFEB, BPMAR], 'BlazePoint', '9966CC'); 
             bar.addData([ANLGJAN, ANLGFEB, ANLGMAR], 'Analog', 'FF3300'); 
             bar.addData([CAPJAN, CAPFEB, CAPMAR], 'CAP', 'CC6600'); 
             bar.setAutoScaling(); // Auto scale y axis
             bar.addAxisLabels('x', ['Jan', 'Feb', 'Mar']); 

             var imageUrl = bar.getUrl(true); // First param controls http vs. https
             response.write('<br><img src="'+imageUrl+'" alt="some_text">'); 
             response.write('<h3>TICKETS BY DETAILED DESCRIPTION</h3><p>');
             response.write(tableHead);
            }
        });
      }

     /* for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and requested like "Apr%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        var july='Apr';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(reason[n]) {
          case 'BlazeCast Install':
            if (count > 0) {
               storeMonth(july,reason[c],count);
             }
             break;
          case 'HA':
             if (count > 0) {
               storeMonth(july,reason[c],count);
             }
             break;
          case 'Contacts':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Email':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'SMS':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Desktop':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Paging':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Gateway':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'PBX(3300)':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'HTML Application':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Voice Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Text to Speech':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Campaign Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'BlazePoint Speakers':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Analog Devices':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'CAP Aggregator':
             if (count > 0) {
              // console.log(september+','+ reason[d]+','+count);
               storeMonth(july,reason[c],count)
             }
             break;
          }
          n++;
        });
      }
      
      for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and requested like "May%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        var july='May';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(reason[o]) {
          case 'BlazeCast Install':
            if (count > 0) {
               storeMonth(july,reason[c],count);
             }
             break;
          case 'HA':
             if (count > 0) {
               storeMonth(july,reason[c],count);
             }
             break;
          case 'Contacts':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Email':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'SMS':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Desktop':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Paging':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Gateway':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'PBX(3300)':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'HTML Application':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Voice Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Text to Speech':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Campaign Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'BlazePoint Speakers':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Analog Devices':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'CAP Aggregator':
             if (count > 0) {
              // console.log(september+','+ reason[d]+','+count);
               storeMonth(july,reason[c],count)
             }
             break;
          }
          o++;
        });
      }

      for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and requested like "Jun%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        var july='Jun';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(reason[p]) {
          case 'BlazeCast Install':
            if (count > 0) {
               storeMonth(july,reason[c],count);
             }
             break;
          case 'HA':
             if (count > 0) {
               storeMonth(july,reason[c],count);
             }
             break;
          case 'Contacts':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Email':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'SMS':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Desktop':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Paging':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Gateway':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'PBX(3300)':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'HTML Application':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Voice Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Text to Speech':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Campaign Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'BlazePoint Speakers':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Analog Devices':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'CAP Aggregator':
             if (count > 0) {
              // console.log(september+','+ reason[d]+','+count);
               storeMonth(july,reason[c],count)
             }
             break;
          }
          p++;
        });
      }

      for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and requested like "Jul%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        var july='Jul';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(reason[c]) {
          case 'BlazeCast Install':
            if (count > 0) {
               storeMonth(july,reason[c],count);
             }
             break;
          case 'HA':
             if (count > 0) {
               storeMonth(july,reason[c],count);
             }
             break;
          case 'Contacts':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Email':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'SMS':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Desktop':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Paging':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Gateway':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'PBX(3300)':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'HTML Application':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Voice Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Text to Speech':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Campaign Dialing':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'BlazePoint Speakers':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'Analog Devices':
             if (count > 0) {
               storeMonth(july,reason[c],count)
             }
             break;
           case 'CAP Aggregator':
             if (count > 0) {
              // console.log(september+','+ reason[d]+','+count);
               storeMonth(july,reason[c],count)
             }
             break;
          }
          c++;
        });
        }

        for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and requested like "Aug%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        var august='Aug';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(reason[e]) {
          case 'BlazeCast Install':
             if (count > 0) {
               storeMonth(august,reason[e],count);
             }
             break;
          case 'HA':
             if (count > 0) {
               storeMonth(august,reason[e],count);
             }
             break;
          case 'Contacts':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'Email':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'SMS':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'Desktop':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'Paging':
             if (count > 0) {
               vstoreMonth(august,reason[e],count)
             }
             break;
           case 'Gateway':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'PBX(3300)':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'HTML Application':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'Voice Dialing':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'Text to Speech':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'Campaign Dialing':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'BlazePoint Speakers':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'Analog Devices':
             if (count > 0) {
               storeMonth(august,reason[e],count)
             }
             break;
           case 'CAP Aggregator':
             if (count > 0) {
              // console.log(september+','+ reason[d]+','+count);
               storeMonth(august,reason[e],count)
             }
             break;
          }
          e++;
        });
      }

      for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and requested like "Sep%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        var september='Sep';
        var count = results[0]["count(*)"];

        //console.log(count);
        //console.log(reason[d]+' total '+count);
          switch(reason[d]) {
          case 'BlazeCast Install':
             if (count > 0) {
               storeMonth(september,reason[d],count);
             }
             break;
          case 'HA':
             if (count > 0) {
               storeMonth(september,reason[d],count);
             }
             break;
          case 'Contacts':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'Email':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'SMS':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'Desktop':
             if (count > 0) {
               storeMonth(september,reason[a],count)
             }
             break;
           case 'Paging':
             if (count > 0) {
               vstoreMonth(september,reason[d],count)
             }
             break;
           case 'Gateway':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'PBX(3300)':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'HTML Application':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'Voice Dialing':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'Text to Speech':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'Campaign Dialing':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'BlazePoint Speakers':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'Analog Devices':
             if (count > 0) {
               storeMonth(september,reason[d],count)
             }
             break;
           case 'CAP Aggregator':
             if (count > 0) {
              // console.log(september+','+ reason[d]+','+count);
               storeMonth(september,reason[d],count)
             }
             break;
          }
          d++;
        });
      }

      for (var i=0; i < heading.length; i++) {
        mysql.query('use ' + DATABASE);
                
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and requested like "Oct%"', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }

        var october='Oct';
        var count = results[0]["count(*)"];

        //console.log(count);
        console.log (reason[a]+ ' '+count);
        switch(reason[a]) {
          case 'BlazeCast Install':
             if (count > 0) {
               storeMonth(october,reason[a],count);
             }
             break;
          case 'HA':
             if (count > 0) {
               storeMonth(october,reason[a],count);
             }
             break;
          case 'Contacts':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'Email':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'SMS':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'Desktop':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'Paging':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'Gateway':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'PBX(3300)':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'HTML Application':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'Voice Dialing':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'Text to Speech':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'Campaign Dialing':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'BlazePoint Speakers':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'Analog Devices':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
           case 'CAP Aggregator':
             if (count > 0) {
               storeMonth(october,reason[a],count)
             }
             break;
          }
          a++;
        });
      }

      for (var i=0; i < heading.length; i++) {
          mysql.query('use ' + DATABASE);
          var data2 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and requested like "Nov%"', function selectCb(err, results, fields) {
          if (err) {
            throw err;
            response.end();
          }

        
          var count = results[0]["count(*)"];
          var november = 'Nov';
          //console.log(reason[b]);
          // console.log (reason[b]+ ' '+count);
          switch(reason[b]) {
            case 'BlazeCast Install':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'HA':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Contacts':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Email':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'SMS':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Desktop':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Paging':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Gateway':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'PBX(3300)':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'HTML Application':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Voice Dialing':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Text to Speech':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Campaign Dialing':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'BlazePoint Speakers':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Analog Devices':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'CAP Aggregator':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
           }
           b++;
           if (b == heading.length) { 
             b = 0;
            }

         });
       }

       for (var i=0; i < heading.length; i++) {
          mysql.query('use ' + DATABASE);
          var data2 = mysql.query('SELECT count(*) from tickets where subject like "%'+heading[i]+'%" and requested like "Dec%"', function selectCb(err, results, fields) {
          if (err) {
            throw err;
            response.end();
          }

        
          var count = results[0]["count(*)"];
          var november = 'Dec';
          //console.log(reason[b]);
          // console.log (reason[b]+ ' '+count);
          switch(reason[b]) {
            case 'BlazeCast Install':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'HA':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Contacts':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Email':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'SMS':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Desktop':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Paging':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Gateway':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'PBX(3300)':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'HTML Application':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Voice Dialing':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Text to Speech':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Campaign Dialing':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'BlazePoint Speakers':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'Analog Devices':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
            case 'CAP Aggregator':
              if (count > 0) {
                storeMonth(november,reason[b],count)
              }
              break;
           }
           b++;
           if (b == heading.length) { 
             //console.log (BCSTJUL+','+BCSTAUG+','+BCSTSEP+','+BCSTOCT+','+BCSTNOV);
             bar.addData([INSTJAN, INSTFEB, INSTMAR, INSTAPR, INSTMAY, INSTJUN, INSTJUL, INSTAUG, INSTSEP, INSTOCT, INSTNOV, INSTDEC], 'Install', 'FF0000'); 
             bar.addData([HAJAN, HAFEB, HAMAR, HAAPR, HAMAY, HAJUN, HAJUL, HAAUG, HASEP, HAOCT, HANOV, HADEC], 'HA', 'FFFF00');  
             bar.addData([CNJAN, CNFEB, CNMAR, CNAPR, CNMAY, CNJUN, CNJUL, CNAUG, CNSEP, CNOCT, CNNOV, CNDEC], 'Contacts', '0099CC'); 
             bar.addData([EMJAN, EMFEB, EMMAR, EMAPR, EMMAY, EMJUN, EMJUL, EMAUG, EMSEP, EMOCT, EMNOV, EMDEC], 'Email', '330033'); 
             bar.addData([SMSJAN, SMSFEB, SMSMAR, SMSAPR, SMSMAY, SMSJUN, SMSJUL, SMSAUG, SMSSEP, SMSOCT, SMSNOV, SMSDEC], 'SMS', 'FF0099'); 
             bar.addData([DSKJAN, DSKFEB, DSKMAR, DSKAPR, DSKMAY, DSKJUN, DSKJUL, DSKAUG, DSKSEP, DSKOCT, DSKNOV, DSKDEC], 'Desktop', '003300'); 
             bar.addData([PGJAN, PGFEB, PGMAR, PGAPR, PGMAY, PGJUN, PGJUL, PGAUG, PGSEP, PGOCT, PGNOV, PGDEC], 'Paging', '99FF00'); 
             bar.addData([GWJAN, GWFEB, GWMAR, GWAPR, GWMAY, GWJUN, GWJUL, GWAUG, GWSEP, GWOCT, GWNOV, GWDEC], 'Gateway', '00CC99'); 
             bar.addData([PBXJAN, PBXFEB, PBXMAR, PBXAPR, PBXMAY, PBXJUN, PBXJUL, PBXAUG, PBXSEP, PBXOCT, PBXNOV, PBXDEC], 'PBX', '999999'); 
             bar.addData([HTMLJAN, HTMLFEB, HTMLMAR, HTMLAPR, HTMLMAY, HTMLJUN, HTMLJUL, HTMLAUG, HTMLSEP, HTMLOCT, HTMLNOV, HTMLDEC], 'HTML', 'FFFF66'); 
             bar.addData([VCJAN, VCFEB, VCMAR, VCAPR, VCMAY, VCJUN, VCJUL, VCAUG, VCSEP, VCOCT, VCNOV, VCDEC], 'Voice', 'FFCC99'); 
             bar.addData([TTSJAN, TTSFEB, TTSMAR, TTSAPR, TTSMAY, TTSJUN, TTSJUL, TTSAUG, TTSSEP, TTSOCT, TTSNOV, TTSDEC], 'TTS', 'CC3300'); 
             bar.addData([CMPGNJAN, CMPGNFEB, CMPGNMAR, CMPGNAPR, CMPGNMAY, CMPGNJUN, CMPGNJUL, CMPGNAUG, CMPGNSEP, CMPGNOCT, CMPGNNOV, CMPGNDEC], 'Campaign', '0033FF'); 
             bar.addData([BPJAN, BPFEB, BPMAR, BPAPR, BPMAY, BPJUN, BPJUL, BPAUG, BPSEP, BPOCT, BPNOV, BPDEC], 'BlazePoint', '9966CC'); 
             bar.addData([ANLGJAN, ANLGFEB, ANLGMAR, ANLGAPR, ANLGMAY, ANLGJUN, ANLGJUL, ANLGAUG, ANLGSEP, ANLGOCT, ANLGNOV, ANLGDEC], 'Analog', 'FF3300'); 
             bar.addData([CAPJAN, CAPFEB, CAPMAR, CAPAPR, CAPMAY, CAPJUN, CAPJUL, CAPAUG, CAPSEP, CAPOCT, CAPNOV, CAPDEC], 'CAP', 'CC6600'); 
             bar.setAutoScaling(); // Auto scale y axis
             bar.addAxisLabels('x', ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']); 

             var imageUrl = bar.getUrl(true); // First param controls http vs. https
             response.write('<img src="'+imageUrl+'" alt="some_text">'); 
             response.write('<h3>TICKETS BY DETAILED DESCRIPTION</h3><p>');
             response.write(tableHead);
            }

         });
       } */
      
      /* for (var i=0; i < category.length; i++) {
        mysql.query('use ' + DATABASE);
        
        var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+category[i]+'%" and id>290', function selectCb(err, results, fields) {
        if (err) {
          throw err;
          response.end();
        }
        var count = results[0]["count(*)"];
        //console.log(j+ " " +count);
        var table ='<td>'+description[j]+'</td>' +
                   '<td>'+count+'</td>' +
                   '</tr>';
        response.write(table);
        j++;
        if (j == category.length) {
          
          response.write ('</body></html>');
          response.end();
        }
        });
      }
      
      response.write(top);
      response.write(body);
      response.write('<h3>ALL TICKETS BY CATEGORIES</h3><p>');
      var pie = new Quiche('pie');
      pie.setTransparentBackground(); // Make background transparent
      pie.setHeight(400);
      pie.setWidth(450);
      

      var piew = new Quiche('pie');
      piew.setTransparentBackground(); // Make background transparent
      piew.setHeight(400);
      piew.setWidth(450);
      response.write(tableHead);

      var bar = new Quiche('bar');
      bar.setWidth(500);
      bar.setHeight(400);
      bar.setTitle('Categories BY Month');
      bar.setBarStacked(); // Stacked chart
      bar.setBarWidth(0); 
      bar.setBarSpacing(6); // 6 pixles between bars/groups
      bar.setLegendBottom(); // Put legend at bottom
      bar.setTransparentBackground(); // Make background transparent 
    
  }

function Descriptor(response, postData) {
  console.log("request for handler 'Descriptor' was called.");
  
  var title = "TYPES OF TICKETS";
  var label = "Categories";
  var top = writeTop(title, label);
  //console.log(postData);

  var category=querystring.parse(postData);
  console.log(category);
  console.log(category.select);

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(top);
  
  mysql.query('use ' + DATABASE);
    var data1 = mysql.query('SELECT count(*) from tickets where subject like "%'+category.select+'%"', function selectCb(err, results, fields) {
    if (err) {
      throw err;
      response.end();
    }

    var count = results[0]["count(*)"];
    var table = '<table border="1" bordercolor="#ff00ff" style="background-color:#c0c0c0" width="25%" cellpadding="3" cellspacing="3">' +
                '<tr>'+
                '<td>Category Name</td>' +
                '<td>Tickets</td>' +
                '</tr><tr>' +
                '<td>'+category.select+'</td>' +
                '<td>'+count+'</td>' +
                '</tr>';
    response.write(table); 
    response.end();
  });
}

/* function Organize(response, request) {

var tableTop = '<table font-family="Trebuchet MS" border="1 solid #98bf21" style="font-size:15;background-color:#EAF2D3;color:#000000;text-align:center;padding-top:5px;padding-bottom:4px" width="50%">' +
               '<tr>';
var columns = '<tr><th>ID</th><th>ID</th><th>Subject</th><th>Type</th><th>Priority</th><th>Requester</th<th>Requested></th><th>Updated</th><th>Status</th><th>Assigned</th></tr>';

  var options = {
  host: 'benbria.zendesk.com',
  port: 443,
  path: '/api/v2/tickets.json',
  method: 'GET',
  auth: 'drobern@benbria.com:Stwn1hgb4!'
  };

  var title = "TICKETS";
  var label = "Tickets";
  var top = writeTop(title, label);
  var req = https.request(options, function(res) {
  
  res.on('data', function(d) {
      // DO STUFF HERE
      var tag = JSON.parse(d);
     
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(top);
      response.write(tableTop);
      response.write(columns);

      for (var i = 0; i < tag.length; i++) {
        var table = '<tr>' +
                    '<td>'+tag[i].id+'</td>' +
                    '<td><center>'+tag[i].subject+'</center></td>' +
                    '<td>'+tag[i].type+'</td>' +
                    '<td>'+tag[i].priority+'</td>' +
                    '<td>'+tag[i].requester_id+'</td>' +
                    '<td>'+tag[i].created_at+'</td>' +
                    '<td>'+tag[i].updated_at+'</td>' +
                    '<td>'+tag[i].status+'</td>' +
                    '<td>'+tag[i].asignee_id+'</td>' +
                    '</tr>';

        response.write(table);
      }
     response.end(); 
    });
  });

req.end();
 
req.on('error', function(e) {
  console.error(e);
});

} */
/*
function Modify(response, postData) {
  console.log("request for handler 'Modify' was called.");

  var body = '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" '+
      'content="text/html; charset=UTF-8" />'+
      '</head>'+
      '<body>'+
      '<form action="/execute" method="post">'+
   //   '<input type="file" name="upload" multiple="multiple">'+
      '<textarea name="serials" rows="5" cols="20"></textarea>'+
      '</br><textarea name="location" rows="1" cols="20"></textarea>'+
      '</br><textarea name="date" rows="1" cols="10"></textarea>'+
      '</p><input type="submit" value="Modify" />'+
      '</form>'+
      '</body>'+
      '</html>';
  
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(body);
      response.end();
}

function execute(response, postData) {
  
  //response.write("You've sent the text: ") ;
  //querystring.parse(postData).fields);
  var test=querystring.parse(postData);
  
  console.log(test);
  //console.log(test.serials.split("\r\n"));
  var serials=test.serials.split("\r\n");
  var location=test.location;
  var date=test.date;
 // console.log(location + " " + date);  
  for (var i=0; i < serials.length; i++) {
    console.log(serials[i]);
    var serialNo=serials[i];
    mysql.query('use ' + DATABASE);
    var data1 = mysql.query('select count(*) from speaker where serial_number='+serials[i], function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }
    var count = results[0]["count(*)"];
    if (count == 0) {
      var top = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>' +
        '<H2><center>Speakers Update</H2></P>' +
        '<form action="/Start" method="post">'+
        '<input type="submit" value="Back" />'+
        '</form>'+
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(top);
        response.write(count + " records updated for  Serial Number "+ serialNo);
        console.log(count + " records updated for  Serial Number "+ serialNo);
        response.end();
    } else {
    var top = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>' +
        '<H2><center>Speakers Update</H2></P>' +
        '<form action="/Start" method="post">'+
        '<input type="submit" value="Back" />'+
        '</form>'+
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(top);
        response.write(count + " records updated for  Serial Number "+ serialNo);
        console.log(count + " records updated for  Serial Number "+ serialNo);
        response.end();
      }
      });

    
        mysql.query('use ' + DATABASE);
        var data2 = mysql.query('update speaker set location=?, last_update=? where serial_number=?',[location, date, serials[i]], function (err, info) {
        if (err) {
          throw err;
        } 
    //console.log("YOU UPDATE "+info.affectedRows+" RECORDS");
        

    });
        
  }
  
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");
  
  var body = '<html>'+
            '<head>'+
            '<meta http-equiv="Content-Type" content="text/html; '+
            'charset=UTF-8" />'+
            '</head>'+
            '<body>'+
            '<form action="/Start" method="post">'+
            '<input type="submit" value="Back" />'+
            '</form>'+
            '</body>'+
            '</html>';
  
  var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    
    /* Possible error on Windows systems:
       tried to rename to an already existing file */
       
  /*  fs.rename(files.upload.path, "/tmp/test.png", function(err) {
       if (err) {
          fs.unlink("/tmp/test.png");
          fs.rename(files.upload.path, "/tmp/test.png");
       }
    });
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>"); 
    response.write("<img src='/show' /><p/>");
    response.write(body);
    response.end();
  });
}

function show(response) {
  console.log("Request handler 'show' was called.");
  
         
  fs.readFile("/tmp/test.png", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
      
    }
  });
  
} */

exports.Start = Start;
exports.Tickets = Tickets;
