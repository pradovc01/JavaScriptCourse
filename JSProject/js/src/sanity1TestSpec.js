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

var JSONValues ={
	"Email":String,
	"FullName":String,
	"Id":Number
}
frisby.create('get all items')
	.get('https://todo.ly/api/user.json')
		.inspectJSON()
		.expectStatus(200)
		.expectJSONTypes(JSONValues)
.toss()