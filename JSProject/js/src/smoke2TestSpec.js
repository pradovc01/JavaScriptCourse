/*2.  Verify all items are getting*/
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
frisby.create('get all items')
	.get('https://todo.ly/api/items.json')
		.inspectJSON()
		.expectStatus(200)
.toss()