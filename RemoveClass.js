function removeClass(obj,className){

  		//如果原来有class
  		if(obj.className != ''){

  			var arrClassName=obj.className.split(' ');
  			var _index=arrIndexOf(arrClassName,className);
  			//如果有要移除 的class
  			if(_index!=-1){

  				arrClassName.splice( _index,1 );
  				obj.className=arrClassName.join(" ");
  			}
  		}
  		//如果原来没有class，nothing to do
  	}
