import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {localData} from "../../data/localData"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string=""

  contentDate:string | undefined=""

  contentTitle:string | undefined=""

  contentInfo:string | undefined="Explore o crescente impacto do Angular no desenvolvimento de aplicações, sendo adotado por empresas líderes para impulsionar a eficiência e a inovação."


  private id:string | null ="0"


  constructor( private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>{
      this.id = value.get("id")
    })

    this.setValueToComponent(this.id)
  }

  setValueToComponent(id:string | null){
    const result = localData.filter(article => article.id == id)[0]
    this.contentDate = result.date;
    this.contentTitle = result.title;
    this.contentInfo = result.description;
    this.photoCover = result.photo
  }

}
