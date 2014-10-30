export class Menu {

    static defaultMenuName = "Menu";
    static menuClosedPrefix = "Show ";
    static menuOpenPrefix = "Hide ";
    
    static menuLabelClass = "menuLabel";
    
    static menuItemExpanderLabelClass = "menuLabelExpander";
    
    private menuSelector: string = 'div#hoveringGraphMenu';
    
    private menuBarSelector: string = "#top_menu_bar";
    
    private menuName: string = "";
    
    initializeMenu(menuName: string = Menu.defaultMenuName){
        this.menuName = menuName;
        // Append the pop-out panel. It will stay hidden except when moused over.
        var trigger = $("<div>").attr("id", "menuTriggerContainer");
//        $("#chart").append(trigger);
         $(this.menuBarSelector).append(trigger);
        trigger.append($("<p>").attr("id", "trigger")
        .addClass("unselectable")
            .text(Menu.menuClosedPrefix+menuName)); // "<< Menu" by default
        trigger.append($("<div>").attr("id", "hoveringGraphMenu"));
        
        // Opted for click control only
        //$('#trigger').hover(
        //        (e) => {
        //            $(this.menuSelector).show(); //.css('top', e.pageY).css('left', e.pageX);
        //             // Looks bad when it's not fully visible, due to children inheriting transparency
        //            $(this.menuSelector).fadeTo(0, 1.0);
        //        },
        //        function() {
        //        //  $(menuSelector).hide();
        //        }
        //);
        var outerThis = this;
        $('#trigger').click(
            (event)=>{
            	event.stopPropagation();
                $(this.menuSelector).slideToggle({ duration: "fast", complete: ()=>{outerThis.updateMenuText();} });
            }
        );
        
    }
    
    updateMenuText(){
        if($(this.menuSelector).css("display") === "none"){
            $('#trigger').text(Menu.menuClosedPrefix+this.menuName);
        } else {
            $('#trigger').text(Menu.menuOpenPrefix+this.menuName);
        }
    }
    
    closeMenuLambda(){
        return ()=>{
            $(this.menuSelector).slideUp();
        };
    }
    
    getMenuSelector(){
        return this.menuSelector;
    }
    
    getMenuBarSelector(){
        return this.menuBarSelector;   
    }
    
    /**
     * Creates a menu panel that has an outer visible div with a header, that when clicked, shows or hides an inner div.
     * To use, call with appropriate arguments, then use the returned object as follows:
     * 1) attach the outer element to the menu or other html container of your choice. This outer element is always visible.
     * 2) attach your menu's elements to the inner element. They will be shown or hidden.
     */
     static slideToggleHeaderContainer(outerContainerId: string, innerContainerId:string, labelText: string, defaultHideContainer?:boolean): {outer: JQuery; inner: JQuery} {
        var outerContainer = $("<div>").attr("id", outerContainerId);
        var innerHidingContainer = $("<div>").attr("id", innerContainerId);
        
        if(defaultHideContainer){
            innerHidingContainer.css("display", "none");
        }
        
        // This only indicates collapsability and status
        var labelExpanderIcon = $("<label>").addClass(Menu.menuItemExpanderLabelClass)
            .addClass("unselectable").attr("unselectable", "on") // IE8
            .text("+");
    
    
        // The label labels the section, and acts as a huge collapse button
        var label = $("<label>").addClass(Menu.menuLabelClass)
            .addClass("unselectable").attr("unselectable", "on") // IE8
            .text(labelText);
    
        var expanderClickFunction = ()=>{
            $(innerHidingContainer).slideToggle('fast',
                ()=>{labelExpanderIcon.text( $(innerHidingContainer).css("display") === "none" ? "+" : "-"); }
            );
            
        }; 
        
        labelExpanderIcon.click(expanderClickFunction);
        label.click(expanderClickFunction);
    
        outerContainer.append(labelExpanderIcon);
        outerContainer.append(label);
        
        // innerHidingContainer.css("display", "none");
        // We don't know the default necessarily, so set the text here.
        labelExpanderIcon.text( $(innerHidingContainer).css("display") === "none" ? "+" : "-"); 

        outerContainer.append(innerHidingContainer);
         
        return {outer: outerContainer, inner: innerHidingContainer };
    }
    
}