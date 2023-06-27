import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  datas = [
    { id: '', src: '', org: '',safe:"",like:"" },

  ]
  user={gender:"",job:""}
  constructor() {

  }
  getAllData() {
    return {data:this.datas,user:this.user}
  }
  getData(id: string) {
    for (let data of this.datas) {
      if (data.id === id) {
        return data
      }
    }
  }
  setData(item:any){
      this.datas.push({safe:item.safe,org:item.org,like:item.like,src:"",id:item.id})
    console.log(this.datas);
  }
  setUser(user:any) {
    this.user.gender = user.gender
    this.user.job = user.job
    console.log(this.user);
  }

}
