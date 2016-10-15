class siteDecor{

    constructor(){
    this.buttonNoClickListener;
      this.deleteDialog = document.getElementById('yesno');
      this.container = document.querySelector('.content');
      this.moodalpage = document.querySelector('#modalpg');
     this.addEventHandlers();

    }
    addEventHandlers(){
        
        this.buttonNoClickListener = this.deleteDialog.querySelector('#ynno').addEventListener('click', this.hideDialog.bind(this));
    }
    showDeleteDialog(e)
    {
        e.stopPropagation();
        this.moodalpage.style.height = '100%';
        this.deleteDialog.style.minWidth = '300px';
        this.deleteDialog.style.minHeight = '100px';
         this.deleteDialog.style.opacity='0.9';
         this.deleteDialog.style.webkitTransform =  'scale(1.2)';
         this.deleteDialog.style.transform =  'scale(1.2)';
         this.deleteDialog.style.msTransform =  'scale(1.2)';
         
        
    }
    hideDialog(){
        console.log(this.deleteDialog);
        
    
          this.deleteDialog.style.height = '0px';
         this.deleteDialog.style.width='0px';
        this.deleteDialog.style.opacity = '0';
        
         this.moodalpage.style.height = '0px';

         
    }
}
var sd = new siteDecor();