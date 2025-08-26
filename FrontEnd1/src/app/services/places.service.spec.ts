import { TestBed } from '@angular/core/testing'; 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlacesService } from './places.service';
import { Places } from '../shared/models/Places';

describe('PlacesService', () => {
  let service: PlacesService;
  let httpMock: HttpTestingController;
  
  const mockData: Places[] = [
    {
      scientificName: '',
      commonNames: [''],
      family: '',
      usdaHardiness: '',
      knownHazards: '',
      habitats: '',
      range: [''],
      edibilityRating: '',
      medicinalRating: '',
      care: '',
      physicalCharacteristics: '',
      synonyms: [''],
      plantHabitats: '',
      edibleUses: '',
      medicinalUses: '',
      otherUses: '',
      plantPropagation: '',
      nativeRange: '',
      weedPotential: '',
      ImgUrl: ''
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlacesService]
    });
    service = TestBed.inject(PlacesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all places via GET', () => {
    service.getAll().subscribe((places) => {
      expect(places.length).toBe(1);
      expect(places).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://localhost:3000/places');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should fetch place by scientific name', () => {
    const scientificName = 'Plantus Example';
    service.getPlaceByScientificName(scientificName).subscribe((place) => {
      expect(place).toEqual(mockData[0]);
    });

    const req = httpMock.expectOne(`http://localhost:3000/places/scientific-name/${scientificName}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData[0]);
  });

  it('should fetch places by search term', () => {
    const searchTerm = 'example';
    service.getAllPlacesBySearchTerm(searchTerm).subscribe((places) => {
      expect(places).toEqual(mockData);
    });

    const req = httpMock.expectOne(`http://localhost:3000/places/search/${searchTerm}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
