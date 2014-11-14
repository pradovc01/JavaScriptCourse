
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
	"Content":"New Project workflow Test 1",
	"Icon":4
}


frisby.create(' Verify URL to icon about projects have format http://')
	.post('https://todo.ly/api/projects.json', project_Values )		
		.expectStatus(200)
		.expectJSON(project_Values )
		.expectJSONTypes({
			"Content":String,
			"Icon":Number
		})
		.afterJSON( function (JSonData){
			var projectID= JSonData.Id
			var icon = JSonData.Icon
			frisby.create('get infomartion about icon')
				.get('https://todo.ly/api/icons/'+ icon +'.json')
				.expectStatus(200)
				.afterJSON(function(data){
					expect(data.URL).toMatch('http://')
				})
			.toss()
			frisby.create('Delete project')
				.delete('https://todo.ly/api/projects/'+projectID+'.json')
					.expectStatus(200)
			.toss()
		}
		)
.toss()