import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stripe_test';

  constructor(private http: HttpClient) {}
  // form :any ={};



  // chargeCreditCard() {
  //   let form = document.getElementsByTagName("form")[0];
  //   (<any>window).Stripe.card.createToken({
  //     number: form['cardNumber'].value,
  //     exp_month: form['expMonth'].value,
  //     exp_year: form['expYear'].value,
  //     cvc: form['cvc'].value
  //   }, (status: number, response: any) => {
  //     if (status === 200) {
  //       let token = response.id;
  //       this.chargeCard(token);
  //     } else {
  //       console.log(response.error.message);
  //     }
  //   });
  // }
  // chargeCard(token: string) {
  //   const headers = new HttpHeaders();
  //   headers.set('token', token);
  //   headers.set('amount', '100'); // Ensure 'amount' is set as a string
  //   this.http.post('http://localhost:8087/payment/charge', {}, { headers: headers })
  //     .subscribe(resp => {
  //       console.log(resp);
  //     })
  // }
}
