
var frisby = require ('frisby')
frisby.globalSetup({
	request:{
		headers:{
					Authorization: 'Basic cHJhZG92YzAxQGdtYWlsLmNvbTpDb250cm9sMTIz'
				},
		json:true
			}
	}
)
frisby.create('Get Token Authentication')
	.get('https://todo.ly/api/authentication/token.json')		
		.inspectJSON()
		.expectStatus(200)
.toss()