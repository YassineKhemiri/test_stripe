import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  // We load  Stripe
  stripePromise = loadStripe(environment.stripe);
  constructor(private http: HttpClient) {}

  async pay(): Promise<void> {
    const payment = {
      name: 'Iphone',
      currency: 'usd',
      amount: 99900,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };
  
    const stripe = await this.stripePromise;
    if (stripe) {
      this.http.post(`${environment.serverUrl}/payment`, payment)
        .subscribe(
          (data: any) => {
            // Parse the JSON response to obtain the session ID
            console.log("data from BE :", data);
            const responseData = JSON.parse(data);
            console.log("data from BE :", responseData);
            const sessionId = responseData.id;
  
            // Ensure that sessionId is properly obtained
            if (sessionId) {
              // Redirect to Checkout using the obtained session ID
              stripe.redirectToCheckout({
                sessionId: sessionId,
              });
            } else {
              console.error("Session ID is missing in the response.");
            }
          },
          (error) => {
            console.error("Error occurred:", error);
            // Handle error here, display an error message to the user, etc.
          }
        );
    } else {
      console.error("Stripe instance is null.");
      // Handle the case where stripe is null, maybe show an error to the user
    }
  }
  
}
