import { textChangeRangeIsUnchanged } from "../node_modules/typescript/lib/typescript";

let Component = function(config:any){
    return function(targetClass:any){
        let tc = new targetClass();
        return class{
            selector = config.selector;
            template = config.template;
            title = tc.title;
            clickmessage = tc.clickmessage;
        }
    }
};


@Component({
    selector : "app-root",
    template : `<h1> Title {{ title }} </h1>   <button> {{ clickmessage }}</button>`
    
})
class AppComponent{
    title = "hello World";
    clickmessage = "click me";
};

let ac = new AppComponent();

document.addEventListener("DOMContentLoaded",function(){
    document.getElementsByTagName(ac.selector)[0].innerHTML = ac.template.replace("{{ title }}",ac.title).replace("{{ clickmessage }}", ac.clickmessage);
})
