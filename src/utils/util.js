Date.prototype.format = function(format) {
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    "S": this.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  return format;
};
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
  const date = new Date(offsetDay)
  const weekArray = ['周日', '周一', '周二', '周三', '周四', '周五', '周六',]
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const week = date.getDay()
  console.log(typeof (offsetDay))
  if (typeof (offsetDay) !== 'string') {
    offsetDay = new Date(offsetDay).format('yyyy-MM-dd')
  }
  const result = {
    y: offsetDay,
    d: month + "月" + day + "号 ",
    week: weekArray[week]
  }
  return result
}



module.exports = {
  formatTime: formatTime,
  getCurrentDate: getCurrentDate
  // formatDate: formatDate
}
