import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Places } from '../shared/models/Places';
import { PLACES_BY_SCIENTIFIC_NAME_URL, PLACES_SEARCH_URL, PLACES_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  // Fetch all places
  getAll(): Observable<Places[]> {
    return this.http.get<Places[]>(PLACES_URL);
  }

  // Fetch a place by scientific name
  getPlaceByScientificName(scientificName: string): Observable<Places> {
    return this.http.get<Places>(`${PLACES_BY_SCIENTIFIC_NAME_URL}/${scientificName}`);
  }
  
  

  // Fetch places based on a search term
  getAllPlacesBySearchTerm(searchTerm: string): Observable<Places[]> {
    return this.http.get<Places[]>(`${PLACES_SEARCH_URL}/${searchTerm}`);
  }
}
