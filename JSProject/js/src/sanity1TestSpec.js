
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

var JSONValues ={
	"Email":String,
	"FullName":String,
	"Id":Number
}
frisby.create('Get correct values from user')
	.get('https://todo.ly/api/user.json')
		.inspectJSON()
		.expectStatus(200)
		.expectJSONTypes(JSONValues)
.toss()