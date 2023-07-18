const http = require('https');

const options = {
	method: 'GET',
	hostname: 'edamam-recipe-search.p.rapidapi.com',
	port: null,
	path: '/search?q=breakfast',
	headers: {
		'X-RapidAPI-Key': '22ed34f99cmshd2b377300c390d9p13765fjsn09ce418aac9d',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();