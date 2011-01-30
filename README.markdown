jquery-twitter-plugin
===============
This jQuery plugin allows you to display a Twitter balloon.

demo
-----------------
*   [example](http://www.desinvolt.fr)

setup
------------------
depends on: [jQuery](http://jquery.com/).

1.  in header, include js and css files
        <script type="text/javascript" src="js/jquery.twitter.js"></script>
        <link rel="stylesheet" type="text/css" href="css/jquery.twitter.css" />
2.  in body
        <div id="twitter-ballon"></div>
3.  then apply plugin
        <script type="text/javascript">
            $(function() {
                $('#twitter-balloon').twitter({
                    screen_name: '##USERNAME##',
                });
            });
        </script>

settings
----------------------
*   **screen_name**: Your Twitter username (required)
*   **count**: Number of tweets to display (optional, default is *10*)

mit licence
------------------
Copyright (c) 2011 Mickael BLATIERE

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

