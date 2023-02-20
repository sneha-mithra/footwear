import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Footwear } from '../footwear';
import { FootwearService } from '../footwear.service';

@Component({
  selector: 'app-footwear-details',
  templateUrl: './footwear-details.component.html',
  styleUrls: ['./footwear-details.component.css']
})
export class FootwearDetailsComponent implements OnInit {
batchid!: number;
footwear!: Footwear;
constructor(private route: ActivatedRoute, private footwearService: FootwearService){}
ngOnInit(): void {
    this.batchid = this.route.snapshot.params['batchid'];
    this.footwear= new Footwear();
    this.footwearService.getFootwearById(this.batchid).subscribe(data =>{
      this.footwear=data;
    })
}

}
