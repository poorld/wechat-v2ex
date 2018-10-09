// 已知api
// https://github.com/djyde/V2EX-API

// api 
var API_URI = "https://www.v2ex.com/api/"

// 最热主题
var HOST_URI = "topics/hot.json"
// Method: GET

// 最新主题
var NEW_URI = "topics/latest.json"
// Method: GET

// 主题信息
// Method: GET
// 参数:
// id 主题id(必选)
var THEMATIC_URI = "topics/show.json"

// 根据提供信息取主题
// /api/topics/show.json
// username	根据用户名取该用户所发表主题
// node_id	根据节点id取该节点下所有主题
// node_name	根据节点名取该节点下所有主题

// 主题回复
// 参数
// topic_id 主题id(必选)
// page
// page_size
var REPLIES_URI = "replies/show.json"


// 所有节点
var ALL_NODE_URI = "nodes/all.json"

// 节点信息 
// Method: GET
// 参数: 二选一
// id - 节点id
// name - 节点名
var NODE_URI = "nodes/show.json"


// 用户信息
var USER_URI = "members/show.json"

//{obj} = {obj: {}}
function _obj2uri(obj) {
  if (obj){
    return Object.keys(obj).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
    }).join('&');
  }
  return "";
}


function _getHostTopic(o){
  return API_URI + HOST_URI +'?'+ _obj2uri(o);
}

function _getNewTopic(o){
  return API_URI + NEW_URI + '?' +  _obj2uri(o);
}

// 获取主题信息
function _getThematicInfo(o){
  return API_URI + THEMATIC_URI + '?' +  _obj2uri(o);
}

// 主题回复
function _getThematicReplies(o){
  return API_URI + REPLIES_URI + '?' +  _obj2uri(o);
}

// 用户信息
function _getUserInfo(o){
  return API_URI + USER_URI + '?' + _obj2uri(o);
}

// 所有节点
function _getAllNode(){
  return API_URI + NODE_URI;
}

module.exports = {
  getHostTopic: _getHostTopic,
  getNewTopic: _getNewTopic,
  getThematicInfo: _getThematicInfo,
  getThematicReplies: _getThematicReplies,
  getAllNode: _getAllNode,
  getUserInfo: _getUserInfo
}