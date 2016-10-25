import {Injectable} from '@angular/core';
@Injectable()
export class Helpers{
    constructor()
    {

    }
  public formatTel(num:string):string{

    var fnum ='';
    if(num)
    {
      num = num.replace(/-/g,'',);
       num = num.replace(/\(/g,'');
        num = num.replace(/\)/g,'');
         num = num.replace(/\+/g,'');
    
     var rg = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
      if(!rg.test(num))
        return '';
     
     var pref ='';
      if(num.length == 11)
      {
        pref='+'+num[0];
         num= num.substr(1);
        
      }
      fnum+=pref;
        if(num.length == 12)
         num= num.substr(2);
       if(num.length > 2)
       fnum +='('+ num.substr(0,3)+')-';
       if(num.length >7)
       fnum+= num.substr(3,3)+'-';
        if(num.length == 7)
        {
            
            fnum+= num.substr(3,3);
            fnum= fnum.replace(/\(/g,'');
           fnum = fnum.replace(/\)/g,'');
        }
       if(num.length >9)
       fnum+= num.substr(6);
    }
     
      return fnum;
  }
 public formatDate(date)
 {
    console.log(date.substr(0,10));
    return date.substr(0,10);
 }

}

