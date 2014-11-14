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
		.expectStatus(200)
		.afterJSON(function (data){			
			for(var pos=0; pos< data.length; pos++) {
				icon = data[pos].Icon
				frisby.create('Get url icon')
					.get('https://todo.ly/api/icons/'+icon+'.json')
					.inspectJSON()
					.expectJSONTypes({
						"URL":String
					}
					)
				.toss()
			}
		
		}
		)
		
.toss()