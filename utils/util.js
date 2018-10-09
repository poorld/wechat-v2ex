const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const transLocalTime = t => {
  const date = new Date(t * 1000)
  var y = date.getFullYear()
  // 月
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m
  // 天
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d
  // 小时
  var h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  //分钟
  var minute = date.getMinutes()
  // 秒钟
  var second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}

// 修改字符串mini为normal或者large
// 去除https://..........
const _toNormalAvatar = o => {
  // []
  if (o instanceof Array){
    for (let i = 0; i < o.length; i++){
      let obj = o[i]
      // console.log('member' in obj)
      if ('member' in obj){
        const member = obj.member
        if ('avatar_normal' in member){
          member.avatar_normal = member.avatar_normal.replace('mini','normal')
        }
      }
      // console.log(obj.content)
      // let content = obj.content
      // if (content.indexOf('https://') != -1){
      //   console.log("before\n" + content)
      //   // 开始位置
      //   const start = content.indexOf('\n')
      //   //结束位置
      //   const end = content.indexOf('↵', start + 1)//从第一个↵ + 1 位置开始找
      //   console.log([start,end])
      //   // 获取https://
      //   let url = content.substring(start,end + 1)
      //   console.log("url\n" + url)
      //   // 替换
      //   content = content.replace(url,'')
      //   obj.content = content
      //   console.log("after\n" + content)
      // }
    }
    return o

  } else { // {}
  //  console.log('member' in o)
    if ('avatar_normal' in o){
      o.avatar_normal = o.avatar_normal.replace('mini','mormal')
    }
    return o
  }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  transLocalTime: transLocalTime,
  toNormalAvatar: _toNormalAvatar
}

