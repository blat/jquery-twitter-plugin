/**
 * Twitter Balloon
 *
 * @author      Mickael BLATIERE
 * @license     http://www.opensource.org/licenses/mit-license.php - Licensed under The MIT License
 * @link        http://github.com/blat/jquery-twitter-plugin
 */

(function($) {

    var api_url = 'http://api.twitter.com/1/statuses/user_timeline.json';

    var options = {};
    var default_options = {
        screen_name: null,
        count: 10,
        callback: 'twitter_load'
    };

    var root;
    var current;

    $.fn.twitter = function(user_options) {
        root = $(this);
        current = -1;
        if (!user_options) user_options = {};
        $.each(default_options, function(key, default_value) {
            options[key] = user_options[key] || default_value;
        });
        twitter_init();
    }

    twitter_init = function() {
        var url = api_url + '?';
        $.each(options, function(key, value) {
            url += key + '=' + value + '&';
        });
        $.getScript(url);
    }

    twitter_load = function(data) {
        var element = $('<ul></ul');
        $.each(data, function(key, value) {
            var html = value.text
                .replace(/(http:\/\/[^ ]+)/g, '<a href="$1">$1</a>')
                .replace(/(#([^ ]+))/g, '<a class="tag" href="http://twitter.com/search?q=%23$2">$1</a>');
            element.append($('<li></li>').append($('<span></span>', {html: html})));
        });
        root.append(element);
        twitter_next();
    }

    twitter_next = function() {
        var elements = root.find('li');
        if (current != -1) $(elements[current]).fadeOut();
        current = (current + 1) % elements.length;
        $(elements[current]).fadeIn().find('span').css('left', 0);
        setTimeout(twitter_scroll, 1000);
    }

    twitter_scroll = function() {
        var container = $(root.find('li')[current]);
        var content = container.find('span');
        var containerWidth = container.innerWidth();
        var contentWidth = content.outerWidth();
        var contentPosition = parseInt(content.css('left'));
        if (contentWidth - contentPosition > containerWidth) {
            var distance = contentWidth + contentPosition - containerWidth;
            content.animate({left: -distance}, distance * 50, 'linear', function(){
                setTimeout(twitter_next, 2000);
            });
        } else {
            setTimeout(twitter_next, 3000);
        }
    }

})(jQuery);
