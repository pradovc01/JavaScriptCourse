
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
frisby.create('Get List of Filters')
	.get('https://todo.ly/api/filters.json')		
		.inspectJSON()
		.expectStatus(200)
.toss()