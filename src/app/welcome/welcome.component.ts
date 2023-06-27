import { DataService } from './../service/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  job!:string
  gender!:string

  genders =  [
    { id: 1, value: "erkek", isSelected: false, label:"Erkek"},
    { id: 2, value: "kadın", isSelected: false,label:"Kadın" },
    { id: 3, value: "other", isSelected: false,label:"Belirtmek İstemiyorum" },
  ];
  jobs = [
    { id: 1, value: "designer", isSelected: false, label:"Tasarımcı" },
    { id: 2, value: "other", isSelected: false, label:"Diğer" },
  ]
  constructor(
    private http:HttpClient,
    private router: Router,
    public dataService:DataService,

  ) { }

  ngOnInit(): void {
    // this.http.post('https://formspree.io/f/xnqkanoq',{
    //   email: 'foo@bar.co',
    //   _subject: 'hi!',
    //   message:JSON.stringify({test:'1',val:"1",val1:"1"})
    // }).subscribe(res=>{
    //   console.log(res);

    // })
  }
  changedJob(item: any) {

    this.jobs.forEach(val => {
      if (val.id == item.id)  {
        val.isSelected = !val.isSelected;
        this.job = item.value
      }
      else {
        val.isSelected = false;

      }
    });
  }
  changedGender(item: any) {

    this.genders.forEach(val => {
      if (val.id == item.id)  {
        val.isSelected = !val.isSelected;
        this.gender = item.value
      }
      else {
        val.isSelected = false;
      }
    });
  }
  next(){
    this.dataService.setUser({job:this.job,gender:this.gender})
    this.router.navigate(['/questions/'+1]);
  }
}
