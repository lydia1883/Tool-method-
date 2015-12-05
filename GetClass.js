function getClass(oParent,tagName,sClass){

  		var aEle=oParent.getElementsByTagName(tagName);
  		var arr=[];

	  		for(var i=0;i<aEle.length;i++){

		  			var aClassName=aEle[i].className.split(' ');

		  			for(var j=0;j<aClassName.length;j++){

		  				if(aClassName[j]==sClass){
		  				 arr.push(aEle[i]);
		  				 break;
		  				}
		  			}
	  		}
	  	return arr;	
  	}
