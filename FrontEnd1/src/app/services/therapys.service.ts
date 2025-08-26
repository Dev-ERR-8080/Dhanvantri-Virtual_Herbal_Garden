import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TherapyService {

  private apiUrl = 'http://localhost:5000/api/therapys'; // Replace with your actual backend URL

  constructor(private http: HttpClient) { }

  // Method to fetch therapies data from the API
  getTherapys(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
