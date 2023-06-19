import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit{
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
getMenuId:any;
menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
     this.menuData =  this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuId;
      });
      console.log(this.menuData,'menuData>>');
    }
  }
  gen():void{
    alert("Your order has been placed");
  }money():void{
    alert("Payment Successfull");
    }
  
}