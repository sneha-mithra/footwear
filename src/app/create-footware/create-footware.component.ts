import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Footwear } from '../footwear';
import { FootwearService } from '../footwear.service';

@Component({
  selector: 'app-create-footware',
  templateUrl: './create-footware.component.html',
  styleUrls: ['./create-footware.component.css']
})
export class CreateFootwareComponent implements OnInit{
  footwear: Footwear =new Footwear();
  constructor(private footwearService: FootwearService,
    private router: Router){}
  ngOnInit(): void {
      
  }
  saveFootweaar(){
    this.footwearService.createFootwear(this.footwear).subscribe(data =>{
      console.log(data);
      this.goToFootweaarList();
    },
    error => console.log(error));
    }
  goToFootweaarList(){
    this.router.navigate(['/footwears']);
  }
  onSubmit(){
    console.log(this.footwear);
    this.saveFootweaar()
  }

}
