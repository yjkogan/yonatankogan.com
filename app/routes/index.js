var app  = require(APP_ROOT + '/app')
  , request = require('request')
  , cheerio = require('cheerio');

// Base Route
app.get('/', function(req, res, next) {
  request('http://blog.yonatankogan.com', function(error, response, body) {
    if (error || response.statusCode != 200) {
      return next(error || "Failed to load");
    }
    $ = cheerio.load(body);
    var posts = $(".posts");
    var most_recent_post = posts.html().split('</p>')[0].trim() + '</p>';
    most_recent_post = most_recent_post.replace("<a href=\"/", "<a target='_blank' href=\"http://blog.yonatankogan.com/");
    return res.render('index', {latest_blog_post: most_recent_post});    

  })
});