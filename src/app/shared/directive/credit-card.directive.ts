import { Directive, OnInit,HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit{

  constructor() { }

  ngOnInit(): void { 

  }
  
  @HostListener("input", ["$event"])
    validateCreditCard(eve  : Event){
      // console.log(eve);
      let inputControl = eve.target as HTMLInputElement;
      let inputVal = inputControl.value.replace(/\s+/g, '');

      if(inputVal.length > 16){
        inputVal = inputVal.substring(0, 16);
      }
      let formatedvalid = this.formCreditCard(inputVal)
      inputControl.value = formatedvalid;

      if(/[^\d]/.test(inputVal)){
        inputControl.nextElementSibling?.classList.remove("d-none");
      }
  }
  
  private formCreditCard(val : string){
      let chunkArray = [];
  
      for(let i = 0; i < val.length; i+= 4){
      chunkArray.push(val.slice(i, i +4));
    } 
    return chunkArray.join(" ")
  }
}