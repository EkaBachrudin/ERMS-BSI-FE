import { Injectable } from '@angular/core';
import { SettingTopRiskMock } from '../../data/setting-top-risk/settingTopRisk.mock';

@Injectable({ providedIn: 'root' })
export class SettingTopRiskService {
  getSettingTopRisk = () => {
    return SettingTopRiskMock;
  };
}
