
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
var project_Values = {
	"Content":"",
	"Icon":5
}


frisby.create('Verify an error is displayed if the get project by id receive an word instead of a id Number to field Id')
	.post('https://todo.ly/api/projects.json', project_Values )
		.inspectJSON()
		.expectStatus(200)
		.expectJSON(
			{
			ErrorMessage: 'Too Short Project Name',
			ErrorCode:305
			}
			)
		.expectJSONTypes({
			ErrorMessage:String,
			ErrorCode:Number
		})		
.toss()