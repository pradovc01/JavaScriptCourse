/*1.  Verify all Project are getting*/
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
frisby.create('get all projects')
	.get('https://todo.ly/api/projects.json')
		.inspectJSON()
		.expectStatus(200)
.toss()