
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
var user_Values = {
	"Email":"test@gmail.com",
	"Password":"Control123",
	"FullName":""
}


frisby.create('verify an error is displayed trying to created a user without password')
	.post('https://todo.ly/api/user.json', user_Values )
		.inspectJSON()
		.expectStatus(200)
		.expectJSON(
			{
			ErrorMessage: 'Account with this email address already exists',
			ErrorCode:201
			}
			)
		.expectJSONTypes({
			ErrorMessage:String,
			ErrorCode:Number
		})		
.toss()