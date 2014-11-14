/*1.  Verify information (email& fullname) about user is getting correctly*/
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

frisby.create('Verify Content and number of items about projects are returned correclty')
	.get('https://todo.ly/api/projects.json')
		.inspectJSON()
		.expectStatus(200)
		.expectJSONTypes( '*',{
			"Content":String,
			"ItemsCount":Number
		}
		)
.toss()