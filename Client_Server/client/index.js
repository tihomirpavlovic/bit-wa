var startGettingBlog = function(url) {
    return fetch("http://127.0.0.1:3003/")

    .then(function(response) {
        return response.json()
    })

    .then(function(rawObject) {
        rawObject.forEach((blog) => {

            $("body").append(`<div>
              <h1>${blog.title}</h1>
              <p>${blog.lead}</p>
              </div>`)

        })

    });

}

startGettingBlog();