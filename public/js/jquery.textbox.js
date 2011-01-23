/**
 * jQuery TextBox
 * Version 0.1 - 18/03/2008
 * @author Dale Harvey <harveyd@gmail.com>
 *
 * A combination of a text input and a drop down
 * select box, used by
 * http://code.google.com/p/jqueryspreadsheet/
 *
 **/

(function($) {

$.fn.textbox = function(options) 
{
    // Add items to the list
    var addItem = function(list,item)
    {
        var li = $("<li />").append($("<a href='#'>"+item+"</a>"));
        list.append(li);   
    };
        
    $.fn.textbox.defaults = 
    {
        items:      [],     // Default list
        onSelect:   null,   // Callback for item selected
        onChange:   null    // Callback for text changed
    };
    
    // default options used on initialisation
    // and arguments used on later calls
    var opts = $.extend({}, $.fn.textbox.defaults, options);
    var args = arguments;
    
    /**
     * Entry point
     */   
    return this.each(function() 
    {
        // Initialisation
        if(typeof $.data(this,"textbox") == "undefined")
        {
            var $t   = $(this);
            var height = this.offsetHeight;
            var width  = this.offsetWidth+16;
            
            $t.addClass("textbox");
                        
            // The drop down list
            var list = $("<ul class='textboxlist' />"
            ).insertAfter($t).width(width).mousedown(function(e)
            {
                list.toggle();
                $t.val($(e.target).text());
                    
                if(typeof opts.onSelect == "function")
                     opts.onSelect($(e.target).text());
            });            
            
            // The arrow that shows the list onclick
            var arrow = $("<div class='textboxarrow'/>"
            ).insertAfter($t).bind('mousedown',function()
            {
                list.toggle();
                return false; // prevent wierd opera 
            });               // context menu
            
            $(window).resize(function()
            {
                var top  = $t.offset().top;
                var left = $t.offset().left;

                arrow.css("left",((left+width)-16)+"px"
                ).css("top",((top+height)-16)+"px");
                
                list.css("left",(left)+"px"
                ).css("top",(top+height)+"px");
            });
                
            $t.click(function()
            {
                // Make sure the text is selected so
                // users can type to overwrite current text
                this.select();
            }
            ).focus(function()
            {
                var val = $(this).val();
                this.select();
                    
                // Run callback if the user has typed
                // something new
                $(this).bind('blur',function()
                {
                    $(this).unbind("blur").unbind("keyup");
                        
                    if(typeof opts.onChange == "function"
                        && $(this).val() != val
                        && $(this).val() != "")
                    {
                        opts.onChange($(this).val());
                    }
                }
                ).bind('keyup',function(e)
                {
                    // When the user presses return, lose focus
                    if(e.keyCode == 13)
                    {
                        $(this).unbind("keyup");
                        $(this).blur();
                    }
                });
            });
            
            // Store ths list so it can
            // be added to in later calls
            $.data(this,"textbox",{list:list});
            
            // Setup the initial list
            $.each(opts.items,function(i)
            {
                addItem(list,this);
            });
            
            // bit ugly, safari renders 
            // too fast and misplaces stuff 
            // everywhere
            var fun = function()
            {
                arrow.css("display","block");
                $(window).resize();
            };
            window.setTimeout(fun,50);
        }
        
        // The plugin has already been created on this object
        // must be an external call to modify
        else if(args[0] == "add")
            addItem($.data(this,"textbox").list,args[1]);
    });
};

})(jQuery);
