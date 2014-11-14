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

frisby.create('Verify Priority field from all items has correct value')
	.get('https://todo.ly/api/items.json')
		.inspectJSON()
		.expectStatus(200)
		.expectJSONTypes( '*',{
			"Priority":Number
		}
		)
.toss()