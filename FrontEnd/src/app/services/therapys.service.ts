import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { THERAPYS_URLS } from '../shared/constants/urls';
@Injectable({
  providedIn: 'root'
})
export class TherapyService {
  
  constructor(private http: HttpClient) { }

  // Method to fetch therapies data from the API
  getTherapys(): Observable<any[]> {
    return this.http.get<any[]>(THERAPYS_URLS);
  }
}
