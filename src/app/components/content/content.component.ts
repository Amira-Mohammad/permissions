import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  showAdminContentComponent : Boolean = true
  showOfficeContentComponent : Boolean = true

    toggleAdminContentComponent():void{
      this.showAdminContentComponent = !this.showAdminContentComponent
    }
    toggleOfficeContentComponent():void{
      this.showOfficeContentComponent = !this.showOfficeContentComponent
    }



  constructor() { 
    
      
    
  }

  ngOnInit() {
    
  }

}
