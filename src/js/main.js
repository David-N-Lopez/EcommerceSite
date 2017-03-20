(function($) {

    // Readied
    $(function() {
        // style out our code!!
        window.prettyPrint();

        // Custom Selects
        if(($select = $('select')).length){
            $select.CustomSelects();
        }



/*        // Left navigation styling
        if(($inView = $('.section')).length){
            var $sidebar = $('#content').find('.sidebar');

            // we need to wait for the JS code formatter to kick in...
            window.setTimeout(function() {
                $inView.Inview({
                    onReadyCallback: function(el) {
                        if(el.hasClass('in')){
                            var id = el.attr('id');
                            $sidebar.find('a[href=#' + id + ']').addClass('active');
                        }
                    }
                });
            }, 2000);

            $inView.on('in.Inview', function(){
                var id = $(this).attr('id');

                $sidebar.find('a[href=#' + id + ']').addClass('active');

            }).on('out.Inview', function(){
                var id = $(this).attr('id');

                $sidebar.find('a[href=#' + id + ']').removeClass('active');
            });
        }*/

        //Mobile Breakpoints
        Respond.to([
            {
                'media': '(max-width: 768px)',
                'namespace': '768_Tablet',
                'if': function () {
                    $('body').addClass('mobile');

                    //Navigation
                    if (($navigation = $('#navigation')).length) {
                        //Desktop Navigation
                        $navigation.Menu('unset');

                        //Mobile Navigation
                        $navigation.Tray();
                        $navigation.Accordion({
                            'headers': '.parent',
                            'containers': '.drop-down'
                        });
                    }

                    if(($fixed = $('#content')).length && $fixed.data('Fixed')){
                        $fixed.Fixed('unset');
                    }

                    if(($mobileAccordion = $('.gor-mobile-accordion')).length){
                        $mobileAccordion.Accordion();
                    }
                },
                'else': function(){
                    $('body').removeClass('mobile');

                    //Navigation
                    if(($navigation = $('#navigation')).length){
                        //Mobile Navigation
                        $navigation.Tray('unset');
                        $navigation.Accordion('unset');

                        //Desktop Navigation
                        $navigation.Menu();
                    }

                    // Fixed position menu
                    if(($fixed = $('#content')).length && ($sidebar = $('.sidebar')).length){
                        $fixed.Fixed({
                            content: '.sidebar'
                        });
                    }

                    if(($mobileAccordion = $('.gor-mobile-accordion')).length){
                        $mobileAccordion.Accordion('unset');
                    }
                }
            }
        ]);

    });

})(window.jQuery);