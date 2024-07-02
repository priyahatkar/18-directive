import{Directive, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
    selector : '[basicCss]'
})
export class BasicCssDirective implements OnInit {
    @Input() defaultColor !: string;
    constructor(private eleRef: ElementRef){

    }
    ngOnInit() {
        console.log(this.eleRef.nativeElement);
        const para = this.eleRef.nativeElement;
        para.style.backgroundColor =this.defaultColor;
        para.style.color = "white"
        para.style.padding = "15px"
        // para.className = "alert alert-danger" 
    }
}

