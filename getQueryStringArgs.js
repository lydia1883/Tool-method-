/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-29 15:19:22
 * @version $Id$
 */
 console.log(location);
function getQueryStringArgs(){

  //取得查询字符串的并去除开头的问号
  var qs=(location.search.length > 0 ? location.search.substring(1) : '');

  //建立保存数据的对象
  args={},

  //取得每一项
  items=qs.length ? qs.split('&') : [] 
  , item=null 
  , name=null
  , value=null
  , i=0
  ,len=items.length;

  for( i=0 ; i < len ; i++ ){

  	 item=items[i].split('=');
  	 name=decodeURIComponent(item[0]);
  	 value=decodeURIComponent(item[1]);
  	 if(name.length){
  	 	args[name]=value;
  	 }
  }
  return args;
}
