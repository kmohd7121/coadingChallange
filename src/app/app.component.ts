import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted=false;
  topicHasError=true;
  confirmpassword:any;
  topics=['Debit Card','Cradit Card','UPI','Net Banking'];
  userModel =new User('vivek','kala7121@gmail.com',7785840078,'by pass road lar','gorakhpur',274502,'software','mindtree','engineer','default');

  constructor(private _enrollmentService:EnrollmentService){}
  data:any;
  error:any;
  validateTopic(value:any){
    if(value ==='default'){
      this.topicHasError=true;
    } else{
       this.topicHasError=false;
    }
  }

  onSubmit(){
    console.log(this.userModel);
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!!', data),
      error=> console.log('Error!',error)
      // error => this.errorMsg=error.statusText
    );
  }
}
