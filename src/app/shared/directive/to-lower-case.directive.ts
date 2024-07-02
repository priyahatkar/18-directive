import { Directive, OnInit, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appToLowerCase]'
})
export class ToLowerCaseDirective implements OnInit{

  constructor(private eleRef : ElementRef) { }

  ngOnInit(): void {}
  
  // @HostListener("keyup") onkeyUp(){
  //   let val = this.eleRef.nativeElement.value as string;
  //   // console.log(val);
  //   this.eleRef.nativeElement.value = val.toLowerCase()
  //   console.log(val.toLowerCase());
  // }

  @HostListener ('input', ['$event'])
    onkeyup(event : Event){
      let inputControl = event.target as HTMLInputElement;
      let val = inputControl.value as string;
      console.log(val);
      inputControl.value = val.toLowerCase()
    }

}


