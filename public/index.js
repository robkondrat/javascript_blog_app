axios.get("http://localhost:3000/api/blogs").then(function(response) {
  var blogs = response.data;
  console.log(blogs);

  var axiosBlogsElement = document.querySelector('#axios-blogs');
  console.log(axiosBlogsElement);

  var message = "";
  
  blogs.forEach(function(blog) {
    message += "<h3>" + blog.title + "</h3>";
    message += "<h4>" + blog.body + "</h4>";
  })

  axiosBlogsElement.innerHTML = message;
});

