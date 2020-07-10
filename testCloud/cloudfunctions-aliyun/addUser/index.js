'use strict';
exports.main = async (event, context) => {
  //event为客户端上传的参数
  console.log('event : ' + event)
  let db=uniCloud.database()
  let collection=db.collection('users')
  let res=await collection.add(event)
  console.log(res)
  //返回数据给客户端
  return res
};
