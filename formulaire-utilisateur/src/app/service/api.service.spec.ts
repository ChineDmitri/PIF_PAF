import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

fdescribe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return message if response has message', () => {
    const mockResponse = {message: 'Success'};
    const lastName = 'Louis';
    const firstName = 'Jean';

    service.envoyerInfo(lastName, firstName).subscribe((res: any) => {
      expect(res).toBeNull();
    });

    const request = httpMock.expectOne(service['_apiUrl']);
    expect(request.request.method).toBe('POST');
    request.flush(mockResponse);
  });

  it('should return null if response does not have message', () => {
    const mockResponse = {};
    const lastName = 'Louis';
    const firstName = 'Jean';

    service.envoyerInfo(lastName, firstName).subscribe((res: any) => {
      expect(res).toBeNull;
    });

    const request = httpMock.expectOne(service['_apiUrl']);
    expect(request.request.method).toBe('POST');
    request.flush(mockResponse);
  });
});
