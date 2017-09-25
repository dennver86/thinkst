//import libs
const express = require('express');
const app = express();

//primary data
const data_alerts_ticket = {
  "alerts": [
    {
      "acknowledged": "True",
      "created": "1438253021",
      "created_age": "37 weeks",
      "created_age_seconds": 22853773,
      "created_printable": "Thu Jul 30 2015 10:43:41 GMT+0000 (UTC)",
      "description": "HTTP Login Attempt",
      "dst_host": "10.103.48.144",
      "dst_port": "80",
      "events_count": "1",
      "ip_address": "",
      "ippers": "",
      "key": "incident:httplogin:172.15.187.125:1438253021",
      "local_time": "2015-07-26 06:31:48",
      "logtype": "3001",
      "mac_address": "",
      "node_id": "0000000007a9e025",
      "notified": "False",
      "src_host": "172.15.187.125",
      "src_host_reverse": "blahblahblah.example.com",
      "src_port": "59806",
      "updated": "True"
    },
    {
      "acknowledged": "True",
      "created": "1438607783",
      "created_age": "37 weeks",
      "created_age_seconds": 22499011,
      "created_printable": "Mon Aug 03 2015 13:16:23 GMT+0000 (UTC)",
      "description": "Canary Disconnected",
      "events_count": "1",
      "key": "incident:devicedied::1438607783",
      "logtype": "1004",
      "node_id": "0000000007a9e025",
      "notified": "False",
      "src_host": "",
      "updated": "True"
    }   
  ],
  "device_list": [
    {
      "current_settings": "devicesettings:3e17336e68a21e426385b32a:1459325218",
      "description": "SecOps",
      "device_id": "0000000007a9e025",
      "device_id_hash": "3e17336e68a21e426385b32a",
      "device_live": "True",
      "dst_host": "",
      "dst_port": "-1",
      "first_seen": "1455274239",
      "first_seen_age": "9 weeks",
      "first_seen_printable": "Fri Feb 12 2016 10:50:39 GMT+0000 (UTC)",
      "ghost": "False",
      "ignore_notifications_disconnect": "False",
      "ignore_notifications_general": "False",
      "ip_address": "172.16.98.137",
      "ippers": "linux",
      "last_heartbeat": "1461106788",
      "last_heartbeat_age": "6 seconds",
      "last_heartbeat_printable": "Tue Apr 19 2016 22:59:48 GMT+0000 (UTC)",
      "local_time": "2016-03-28 23:54:13",
      "logdata": "",
      "logtype": "1004",
      "mac": "f0:4d:a2:a9:e0:25",
      "mac_address": "F0:4D:A2:A9:E0:25",
      "name": "SecOps",
      "node_id": "0000000007a9e025",
      "service_count": "14",
      "settings": {
        "device.desc": "SecOps",
        "device.version": "1.6"
      },
      "src_host": "",
      "src_host_reverse": "",
      "src_port": "-1",
      "uptime": "45445",
      "uptime_age": "12 hours"
    }
  ]
};

//INIT: Home page accessed
app.get('/', function(request, response) {
	//Retrieve new data
	
});

//REQUEST: Get new data from application server
app.get('/retrieve data', function(request, response) {
	response.send('Retrieve data test');

});

//SERVER: inital load 
app.listen(3000, function() {
	console.log('Local server started on port 3000. Access using http://localhost:3000');
});