jQuery Twitter plugin
===============

This jQuery plugin allows you to display a Twitter balloon.

Demo
-----------------

*   [desinvolt.fr](http://www.desinvolt.fr)
*   [saezlive.net](http://www.saezlive.net)


Dependances
------------------

* [jQuery](http://jquery.com/)


Usage
------------------

1.  In header, include js and css files:

        <script type="text/javascript" src="js/jquery.twitter.js"></script>
        <link rel="stylesheet" type="text/css" href="css/jquery.twitter.css" />
        
2.  In body:

        <div id="twitter-ballon"></div>
        
3.  Then apply plugin:

        <script type="text/javascript">
            $(function() {
                $('#twitter-balloon').twitter({
                    screen_name: '##USERNAME##',
                });
            });
        </script>

Settings
----------------------
*   **screen_name**: Your Twitter username (required)
*   **count**: Number of tweets to display (optional, default is *10*)
