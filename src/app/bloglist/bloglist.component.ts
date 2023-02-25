import { Component } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';
//import { ToasterService } from '../shared/toaster/toaster.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent {
[x: string]: any;

   blogs:Blog[]
   constructor(
   // private toastr: ToasterService
   ){
    this.blogs=blogs;
   }

   //onclick(){
    //this.toastr.error("Please provide signature");
   //}
 
  
}
