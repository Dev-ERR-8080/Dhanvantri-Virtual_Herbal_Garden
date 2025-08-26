import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TherapyService } from './therapys.service';

describe('TherapysService', () => {
  let service: TherapyService;
  let httpMock: HttpTestingController;
  const mockData = [
    {
      title: 'Abhyanga',
      description: 'A full-body warm oil massage...',
      benefits: ['Relieves fatigue', 'Improves blood circulation'],
      application: 'This therapy is suitable for general wellness...'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TherapyService]
    });
    service = TestBed.inject(TherapyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding HTTP requests remain
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch therapys data via GET', () => {
    service.getTherapys().subscribe((therapys) => {
      expect(therapys.length).toBe(1);
      expect(therapys).toEqual(mockData);
    });

    const req = httpMock.expectOne('http://localhost:3000/therapys');
    expect(req.request.method).toBe('GET');
    req.flush(mockData); // Provide mock data as a response
  });
});
