// places.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Places } from '../../../shared/models/Places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private baseUrl = 'http://localhost:5000/api/places';

  constructor(private http: HttpClient) {}

  // Fetch place by scientific name
  getPlacesByScientificName(scientificName: string): Observable<Places> {
    return this.http.get<Places>(`${this.baseUrl}/search/scientificName/${encodeURIComponent(scientificName)}`);
  }

  // Other service methods...
}
