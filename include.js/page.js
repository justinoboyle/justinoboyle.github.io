// Let's include the libraries we're going to be using
include.loadScript("//code.jquery.com/jquery-1.11.3.min.js");
include.loadScript("//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js");
include.loadStylesheet("//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");
// Not too hard, right?

// Now, let's add some stuff to the page.
var includeObjects = []; // This is the place we will be adding things to the page.

includeObjects.push("<div class=\"jumbotron\"><h1>Hello!</h1></div>");
$('#content').html(includeObjects.join(""));
//Bam. Easy.