import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Footwear } from '../footwear';
import { FootwearService } from '../footwear.service';

@Component({
  selector: 'app-update-footwear',
  templateUrl: './update-footwear.component.html',
  styleUrls: ['./update-footwear.component.css']
})
export class UpdateFootwearComponent implements OnInit{
  
  batchid!:number;
  footwear: Footwear =new Footwear();
  updateFootwear: any;
  constructor(private footwearService: FootwearService ,
    private route: ActivatedRoute,
    private router: Router){}
  ngOnInit(): void {
    this.batchid = this.route.snapshot.params['batchid'];
    
      this.footwearService.getFootwearById(this.batchid).subscribe(data => {
        this.footwear = data;
        
      }, error => console.log(error));
      
  }
  
  onSubmit(){
    this.footwearService.updateFootwear(this.batchid,this.footwear).subscribe(data =>{
      this.goToFootweaarList();
    }, error => console.log(error));
  }
  goToFootweaarList(){
    this.router.navigate(['/footwears']);
  }

}

