function addClass(obj,className){   //添加class方法

  		//如果原来没有class
  		if(obj.className==''){
  			obj.className=className;
  		}
  		else{
  			//如果原来有class

  			var arrClassName=obj.className.split(' ');//将class拆分为数组
  			var _index=arrIndexOf(arrClassName,className);
  			if(_index==-1){
  				//如果要添加的class在原来的class中不存在
  				obj.className+=' '+className;
  			}	
  				//如果要添加的class在原来的class中存在.可以不做操作
  		}
  	}   
