import { Injectable } from '@angular/core';
import { RiskLibraryMock } from '../../data/RiskLibrary/riskLibrary.mock';
@Injectable({ providedIn: 'root' })
export class RiskLibraryService {
  constructor() {}
  getRiskLibrary = () => {
    return RiskLibraryMock;
  };

  getById = (id: any) => {
    return RiskLibraryMock.find((obj) => obj.id === id);
  };

  createRiskLibrary = (data: any) => {
    // // let RiskLibraryMockData = RiskLibraryMock;
    // // RiskLibraryMockData =  [...RiskLibraryMockData, data]
    // // console.log(RiskLibraryMockData);
    // // return RiskLibraryMockData;

    // RiskLibraryMock;
  };
}
