function doTheThing() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/1",        // to see promise reject , send id -1
      type: 'GET',
      data: {
        key: '',
      },
      success: function (data) {
        resolve(data)
      },
      error: function (error) {
        reject(error)
      },
    })
  })
}

doTheThing()
  .then((data) => {
    console.log(data)
    //doSomethingElse()
  })
  .catch((error) => {
    console.log(error)
  })

