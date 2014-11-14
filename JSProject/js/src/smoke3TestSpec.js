
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
frisby.create('Get information from user')
	.get('https://todo.ly/api/user.json')	
		.inspectJSON()
		.expectStatus(200)
.toss()