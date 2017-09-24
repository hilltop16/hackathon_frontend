const show = function(){
  console.log('show loading')
  page.setData({
    loader: true
  })
}

const hide = function(page) {
  console.log('hide loading')
  page.setData({
    loader: false
  })
}

module.exports = {
  show,
  hide
}