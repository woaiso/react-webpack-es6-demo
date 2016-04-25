/*jshint esversion:6*/
const https = require('https');

var options = {
	hostname: 'api.ionic.io',
	port: 443,
	path: '/push/notifications',
	method: 'POST',
	headers:{
		"Content-Type":"application/json",
		"Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3OTk4NzNkYi02MDVkLTQxNzItOGI4Yy02NDQwNzg2ZDZjMTEifQ.M8tGtAV5D2UwqJQ4Bla_xF2rvqwYv4tOdhxERZ5MClo"
	}
};

var req = https.request(options, (res) => {
	console.log('statusCode: ', res.statusCode);

	res.on('data', (d) => {
		process.stdout.write(d);
	});
});
const postData={
	"tokens": ["DEV-23d720fb-695b-4c9f-825d-e17bb91dde07"],
	"profile": "fake_push_profile",
	"notification": {
		"title": "Hi",
		"message": "Hello world!测试推送"
	}
};
req.write(JSON.stringify(postData));
req.end();
req.on('error', (e) => {
	console.error(e);
});