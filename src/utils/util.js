const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getCurrentDate = (offsetDay) => {
  const date = new Date()
  if (offsetDay) {
    date.setDate(date.getDate() + offsetDay)
  }
  const weekArray = ['周日', '周一', '周二', '周三', '周四', '周五', '周六',]
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const week = date.getDay()

  const result = month + "月" + day + "号 "// + weekArray[week]
  return result
}


// const formatDate = (format, end) => {
//   var date = new Date()
//   if (end) {
//     if (Object.prototype.toString.apply(end) == '[object Number]' && end > 0) {
//       date = new Date(+new Date + 3600000 * 24 * end)
//     }else {
//       console.error('结束日期格式错误！！')
//     }
//   }
//   var o = {
//       "M+": date.getMonth() + 1, //month
//       "d+": date.getDate(), //day
//       "h+": date.getHours(), //hour
//       "m+": date.getMinutes(), //minute
//       "s+": date.getSeconds(), //second
//       "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
//       "S": date.getMilliseconds() //millisecond
//   }
//   if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
//   for (var k in o)
//       if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
//   return format;
// }
module.exports = {
  formatTime: formatTime,
  getCurrentDate: getCurrentDate
  // formatDate: formatDate
}
