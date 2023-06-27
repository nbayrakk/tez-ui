import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  data: any
  index!: any
  values: any[] = []
  like!: string;
  org!: string;
  safe!: string;
  checkListSafe = [
    { id: 1, value: "1", isSelected: false },
    { id: 2, value: "2", isSelected: false },
    { id: 3, value: "3", isSelected: false },
    { id: 4, value: "4", isSelected: false },
    { id: 5, value: "5", isSelected: false },
    { id: 6, value: "6", isSelected: false },
    { id: 7, value: "7", isSelected: false }
  ];
  checkOrg = [
    { id: 1, value: "1", isSelected: false },
    { id: 2, value: "2", isSelected: false },
    { id: 3, value: "3", isSelected: false },
    { id: 4, value: "4", isSelected: false },
    { id: 5, value: "5", isSelected: false },
    { id: 6, value: "6", isSelected: false },
    { id: 7, value: "7", isSelected: false }
  ];
  checkLike = [
    { id: 1, value: "1", isSelected: false },
    { id: 2, value: "2", isSelected: false },
    { id: 3, value: "3", isSelected: false },
    { id: 4, value: "4", isSelected: false },
    { id: 5, value: "5", isSelected: false },
    { id: 6, value: "6", isSelected: false },
    { id: 7, value: "7", isSelected: false }
  ];
  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.like = ""
      this.org = ""
      this.safe = ""
      this.checkListSafe = [
        { id: 1, value: "1", isSelected: false },
        { id: 2, value: "2", isSelected: false },
        { id: 3, value: "3", isSelected: false },
        { id: 4, value: "4", isSelected: false },
        { id: 5, value: "5", isSelected: false },
        { id: 6, value: "6", isSelected: false },
        { id: 7, value: "7", isSelected: false }
      ];
      this.checkOrg = [
        { id: 1, value: "1", isSelected: false },
        { id: 2, value: "2", isSelected: false },
        { id: 3, value: "3", isSelected: false },
        { id: 4, value: "4", isSelected: false },
        { id: 5, value: "5", isSelected: false },
        { id: 6, value: "6", isSelected: false },
        { id: 7, value: "7", isSelected: false }
      ];
      this.checkLike = [
        { id: 1, value: "1", isSelected: false },
        { id: 2, value: "2", isSelected: false },
        { id: 3, value: "3", isSelected: false },
        { id: 4, value: "4", isSelected: false },
        { id: 5, value: "5", isSelected: false },
        { id: 6, value: "6", isSelected: false },
        { id: 7, value: "7", isSelected: false }
      ];
      this.index = parseInt(res['id'])
    })
    // this.http.post('https://formspree.io/f/xnqkanoq',{
    //   email: 'foo@bar.co',
    //   _subject: 'hi!',
    //   message: 'Test'
    // }).subscribe(res=>{
    //   console.log(res);

    // })

  }
  setLike($event: any) {
    this.like = $event.isSelected ? $event.value : null
    console.log(this.like);
  }
  setOriginal($event: any) {
    this.org = $event.isSelected ? $event.value : null
    console.log(this.org);

  }
  setSafe($event: any) {
    this.safe = $event.isSelected ? $event.value : null
    console.log(this.safe);

  }
  next() {
    if (this.index == 40) {
      this.dataService.setData({id:this.index,like:this.like,org:this.org,safe:this.safe})
      this.router.navigate(['/ap']);
    } else if (this.index == 79) {
      console.log(this.dataService.getAllData());

      this.dataService.setData({id:this.index,like:this.like,org:this.org,safe:this.safe})

      let data = this.dataService.getAllData()
      console.log(data);

      this.router.navigate(['/end']);
      this.http.post('https://formspree.io/f/xnqkanoq', {
        email: 'foo@bar.co',
        _subject: 'hi!',
        message: JSON.stringify(data)
      }).subscribe(res => {
        console.log(res);

      })
    } else {
      console.log(this.like,this.org,this.safe);

      this.dataService.setData({id:this.index,like:this.like,org:this.org,safe:this.safe})
      console.log(this.dataService.getAllData());

      this.router.navigate(['/questions/' + (this.index + 1)]);

    }

  }
}
