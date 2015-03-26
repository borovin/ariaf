define(function (require) {

    var Page = require('kit/page/page'),
        cover = document.getElementById('page__cover');

    $(document).on('mousemove', '.page_lightOff', function(e){

        var x = e.pageX,
            y = e.pageY;

        cover.style.backgroundImage = 'radial-gradient(200px at ' + x + 'px ' + y + 'px, transparent, rgba(0,0,0,0.9))';

    });

    return Page.extend({
        events: {
            'click .page__lightLink': function(e){

                var block = this;

                var lightOff = block.el.classList.toggle('page_lightOff');

                var x = e.pageX,
                    y = e.pageY;

                if (lightOff){
                    cover.style.backgroundImage = 'radial-gradient(200px at ' + x + 'px ' + y + 'px, transparent, rgba(0,0,0,0.9))';
                } else {
                    cover.removeAttribute('style');
                }

            }
        }
    });
});