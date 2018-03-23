import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../_animations/index';

declare var Email:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendEmail(form){
    var token = "2cf747f6-2983-4eda-b659-67751e0944c5";
    Email.send(
        "no-reply@tonyma.com",
        "kevinma91@yahoo.com",
        "NEW MESSAGE FROM YOUR WEBSITE",
        "Name " + form.name + " Phone #: " + form.phone + " Email: " + form.email + " Message: " + form.message,
        {
            token: "8fc50aed-121e-4f51-929c-2a4b25214ebb",
            callback: function done(message) { alert("sent") }
        }
    );
  }

}
