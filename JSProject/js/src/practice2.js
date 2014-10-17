var guessGame = function(){	
	var regExprNumber  = new RegExp(/^\d{1,2}$/)
	var getMatrixSize = function(){
		do{
			var nsize = prompt('Introduce the size of the game (even number)');
			n = parseInt(nsize);
		} while ((n % 2 !=0) ||	(regExprNumber.test(nsize)==false)) ;
		return n;
	}
	var createMatrix =  function(n){
		var m = [];
		for (var i = 0; i< n; i++){
			m[i]=[];
		}
		return m;	
	}
	
	var generateTmpMatrix= function (n){
		var tmpM = createMatrix(n);
		for (var idx= 0; idx< n; idx++){
			for (var idy= 0; idy< n; idy++){
				tmpM[idx][idy]='*';
			}
		}
		return tmpM
	}
	var generateMatrix = function(n){		
		var m = createMatrix(n);
		for (i = 0;i< (n * n)/2 ; i++){
			
			var character = String.fromCharCode(65 + i);
			for (var ntimes=0;ntimes<2;ntimes++){
				var isCellReady =  false;
				do{
					var idx = parseInt(Math.random() * n);
					var idy = parseInt(Math.random() * n);
					if (m[idx][idy] == undefined){
						m[idx][idy] = character;
						isCellReady = true;
					}					
				} while (!isCellReady);
			}
			
		}
				
		return (m);
	}
	
	var getStatusTmpMatrix = function(m){
		for (var idx= 0; idx< m.length; idx++){
			for (var idy= 0; idy< m.length; idy++){
				var tmpP1 = m[idx][idy];				
				if (tmpP1.localeCompare('*')== 0)
					return false;
			}
		}
		return true;
	}
	var validatePointx = function (px,m){
		if(px> (m-1))
			return (m-1);
		return px;
	}
	var ShowMatrix =  function (m){
		document.write('<p> The game was generated on following matrix with characteres of alphabet</p>');
		for (var x =0;x<m.length;x++){
			for(var y=0;y<m.length;y++){
				if (y==0)
					document.writeln('<p>');
				if(y==(m.length-1))
					document.writeln(m[x][y] + '</p>');
				else
					document.write(m[x][y]+'_');
			}
		}
	}
	var startGame = function(m, tmpM){
		
		
		do{
			var expRegular =  new RegExp(/^\d{1,2}[,]\d{1,2}$/); 
			do{
			
				var firstGues = prompt('Enter the first position (x,y)to specific the letter of alphabet');						
			
			} while(expRegular.test(firstGues)==false);
			var firstPosition =  firstGues.split(',');				
			var idx1 = validatePointx(parseInt(firstPosition[0]),m.length);
			var idy1 = validatePointx(parseInt(firstPosition[1]),m.length);
			do{
				var secondGues = prompt('Enter the second position (x,y)to specific the letter of alphabet');
			} while(expRegular.test(secondGues)==false);
			
			var secondPosition =  secondGues.split(',');			
			var idx2 = validatePointx(parseInt(secondPosition[0]),m.length);
			var idy2 = validatePointx(parseInt(secondPosition[1]),m.length);
			var valueP1 = m[idx1][idy1];
			var valueP2 = m[idx2][idy2];						
			if(valueP1.localeCompare(valueP2)==0){
				tmpM[idx1][idy1] = valueP1;
				tmpM[idx2][idy2] = valueP2;
				alert('Perfect!! you identified the character '+valueP1);
				document.writeln('<p>Character ' + valueP1 +' was found on (' + idx1 + ',' + idy1 + ') and (' +
				idx2 + ',' + idy2 + ')</p>');				
			}
				else
					alert('Incorrect, Please try again');
			var guesComplete = getStatusTmpMatrix(tmpM);
			
		}while(guesComplete == false)
		alert('Congratulation, you finished the game successfully');
		
	}
	var size = getMatrixSize();	
	var tmpMatrix = generateTmpMatrix(size);
	var matrix= generateMatrix(size);
//	var displayMatrix = ShowMatrix(matrix);
	var succes = startGame(matrix, tmpMatrix);
	var displayMatrix1 = ShowMatrix(matrix);
}

