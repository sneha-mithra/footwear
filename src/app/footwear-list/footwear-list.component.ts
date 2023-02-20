import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Footwear } from '../footwear';
import { FootwearService } from '../footwear.service';
import { UpdateFootwearComponent } from '../update-footwear/update-footwear.component';

@Component({
  selector: 'app-footwear-list',
  templateUrl: './footwear-list.component.html',
  styleUrls: ['./footwear-list.component.css']
})
export class FootwearListComponent implements OnInit {
  footwears: Footwear[] | undefined;
  constructor(private footwearService: FootwearService,
    private router: Router){}
  ngOnInit(): void{
    this.getFootwears();
    
  }
  private getFootwears() {
    this.footwearService.getFootwearList().subscribe(data => {
      this.footwears =data;
    })
  }
  footwearDetails(batchid: number){
    this.router.navigate(['footwear-details',batchid]);

  }
  updateFootwear(batchid: number){
    this.router.navigate(['update-footwear',batchid]);
  }
  deleteFootwear(batchid: number){
    this.footwearService.deleteFootwear(batchid).subscribe(data =>{
      console.log(data);
      this.getFootwears();
    })
  }

}
