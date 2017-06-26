import { TestBed, inject } from '@angular/core/testing';

import { GoogleDriveService } from './google-drive.service';

describe('GoogleDriveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleDriveService]
    });
  });

  it('should ...', inject([GoogleDriveService], (service: GoogleDriveService) => {
    expect(service).toBeTruthy();
  }));
});
