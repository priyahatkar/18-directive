import{Directive, OnInit, ElementRef, Renderer2, HostBinding, Input, HostListener} from "@angular/core";

@Directive({
    selector : '[advanceCss]'
})
export class AdvanceCssDirective implements OnInit{
    @Input() hoverColor !: string;
    @HostBinding("style.background-color") bgColor :string="blueviolet";
    constructor(private eleRef: ElementRef, private rendrer : Renderer2){

    }
    ngOnInit(){
        // this.rendrer.setStyle(this.eleRef.nativeElement,"background-color", "blueviolet")
        this.rendrer.setStyle(this.eleRef.nativeElement,"color", "white")
        this.rendrer.setStyle(this.eleRef.nativeElement,"padding", "15px")

        // this.rendrer.addClass(this.eleRef.nativeElement,"alert")
        // this.rendrer.addClass(this.eleRef.nativeElement,"alert-dark")
    }

    @HostListener("mouseover") onMouseover(){
        // this.bgColor = "red"
        this.bgColor = this.hoverColor
    }
    @HostListener("mouseout") onMouseout(){
        this.bgColor ="blueviolet"
    }
}

