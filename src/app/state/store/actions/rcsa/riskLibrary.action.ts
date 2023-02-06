import { Action } from '@ngrx/store';
import { IFailure } from 'src/app/models/failure/failure.model';
import { GetRcsaByIdInterface } from 'src/app/module/rcsa/maintance/tabs/risk-library/types/getRcsaById.interface';
import { GetRiskRegisterInterface, RiskRegisterFilterInterface } from 'src/app/module/rcsa/maintance/tabs/risk-library/types/getRiskRegister.interface';
import { RiskLibraryFilterInterface, RiskLibraryInterface } from 'src/app/module/rcsa/maintance/tabs/risk-library/types/risklib.interface';
import { RiskLibraryDetailFilterInterface, RiskLibraryDetailInterface } from 'src/app/module/rcsa/maintance/tabs/risk-library/types/riskLibraryDetail.interface';
import { RiskLibraryPut } from 'src/app/module/rcsa/maintance/tabs/risk-library/types/riskLibraryPut.interface';

export const RISKLIBRARY_FETCH_START = '[Risk Library]START Fetch Risk Library';
export const RISKLIBRARY_FETCH_SUCCESS =
  '[Risk Library]SUCCSES Fetch Risk Library';
export const RISKLIBRARY_FETCH_FAILURE =
  '[Risk Library]FAILURE Fetch Risk Library';

export const RISKLIBRARY_CREATED_START =
  '[Risk Library] Start Create Risk Library';
export const RISKLIBRARY_CREATED_SUCCESS =
  '[Risk Library] Success Create Risk Library';
export const RISKLIBRARY_CREATED_FAILURE =
  '[Risk Library] Failure Create Risk Library';

export const RISKLIBRARY_UPDATE_START =
  '[Risk Library] Start Update Risk Library';
export const RISKLIBRARY_UPDATE_SUCCESS =
  '[Risk Library] Success Update Risk Library';
export const RISKLIBRARY_UPDATE_FAILURE =
  '[Risk Library] Failure Update Risk Library';

export const RISKLIBRARY_GET_START = '[Risk Library] GET Risk Library Start';
export const RISKLIBRARY_GET_SUCCESS = '[Risk Library] GET Risk Library Success';


export const RISKLIBRARY_DELETE = '[Risk Library] Deleted Risk Library';

export class riskLibraryFetchStart implements Action {
  readonly type = RISKLIBRARY_FETCH_START;
  constructor(public filter: RiskLibraryFilterInterface) { }
}

export class riskLibraryFetchSuccess implements Action {
  readonly type = RISKLIBRARY_FETCH_SUCCESS;
  constructor(public payload: RiskLibraryInterface[], public totalPages: number, public currentPage: number, public pageSize:number,public totalElements:number) { }
}

export class riskLibraryFetchFailure implements Action {
  readonly type = RISKLIBRARY_FETCH_FAILURE;
  constructor(public payload: IFailure) { }
}

export class riskLibraryCreateStart implements Action {
  readonly type = RISKLIBRARY_CREATED_START;
  constructor(public payload: RiskLibraryInterface) { }
}

export class riskLibraryCreateSuccess implements Action {
  readonly type = RISKLIBRARY_CREATED_SUCCESS;
  constructor(public payload: RiskLibraryInterface) { }
}

export class riskLibraryCreateFailure implements Action {
  readonly type = RISKLIBRARY_CREATED_FAILURE;
  constructor(public payload: IFailure) { }
}

export class riskLibraryUpdateStart implements Action {
  readonly type = RISKLIBRARY_UPDATE_START;
  constructor(public payload: RiskLibraryInterface) { }
}

export class riskLibraryUpdateSuccess implements Action {
  readonly type = RISKLIBRARY_UPDATE_SUCCESS;
  constructor(public payload: RiskLibraryInterface) { }
}

export class riskLibraryUpdateFailure implements Action {
  readonly type = RISKLIBRARY_UPDATE_FAILURE;
  constructor(public payload: IFailure) { }
}

export class riskLibraryDelete implements Action {
  readonly type = RISKLIBRARY_DELETE;
  constructor(public payload: RiskLibraryInterface) { }
}



export const RISKLIBRARY_DETAIL_FETCH_START = '[Risk Library Detail]START Fetch Risk Library Detail';
export const RISKLIBRARY_DETAIL_FETCH_SUCCESS =
  '[Risk Library Detail]SUCCSES Fetch Risk Library Detail';
export const RISKLIBRARY_DETAIL_FETCH_FAILURE =
  '[Risk Library Detail]FAILURE Fetch Risk Library Detail';

export const RISKLIBRARY_DETAIL_CREATED_START =
  '[Risk Library Detail] Start Create Risk Library Detail';
export const RISKLIBRARY_DETAIL_CREATED_SUCCESS =
  '[Risk Library Detail] Success Create Risk Library Detail';
export const RISKLIBRARY_DETAIL_CREATED_FAILURE =
  '[Risk Library Detail] Failure Create Risk Library Detail';

export const RISKLIBRARY_DETAIL_UPDATE_START =
  '[Risk Library Detail] Start Update Risk Library Detail';
export const RISKLIBRARY_DETAIL_UPDATE_SUCCESS =
  '[Risk Library Detail] Success Update Risk Library Detail';
export const RISKLIBRARY_DETAIL_UPDATE_FAILURE =
  '[Risk Library Detail] Failure Update Risk Library Detail';

export const RISKLIBRARY_DETAIL_GET_START = '[Risk Library Detail] GET Risk Library Detail Start';
export const RISKLIBRARY_DETAIL_GET_SUCCESS = '[Risk Library Detail] GET Risk Library Detail Success';


export const RISKLIBRARY_DETAIL_DELETE = '[Risk Library Detail] Deleted Risk Library Detail';

export class riskLibraryDetailFetchStart implements Action {
  readonly type = RISKLIBRARY_DETAIL_FETCH_START;
  constructor(public filter : RiskLibraryDetailFilterInterface){}
}

export class riskLibraryDetailFetchSuccess implements Action {
  readonly type = RISKLIBRARY_DETAIL_FETCH_SUCCESS;
  constructor(public payload: RiskLibraryDetailInterface[],public totalPages: number, public currentPage: number, public pageSize:number,public totalElements:number) {}
}

export class riskLibraryDetailFetchFailure implements Action {
  readonly type = RISKLIBRARY_DETAIL_FETCH_FAILURE;
  constructor(public payload: IFailure) {}
}

export class riskLibraryDetailCreateStart implements Action {
  readonly type = RISKLIBRARY_DETAIL_CREATED_START;
  constructor(public payload: RiskLibraryDetailInterface) {}
}

export class riskLibraryDetailCreateSuccess implements Action {
  readonly type = RISKLIBRARY_DETAIL_CREATED_SUCCESS;
  constructor(public payload: RiskLibraryDetailInterface) {}
}

export class riskLibraryDetailCreateFailure implements Action {
  readonly type = RISKLIBRARY_DETAIL_CREATED_FAILURE;
  constructor(public payload: IFailure) {}
}

export class riskLibraryDetailUpdateStart implements Action {
  readonly type = RISKLIBRARY_DETAIL_UPDATE_START;
  constructor(public payload: RiskLibraryDetailInterface) {}
}

export class riskLibraryDetailUpdateSuccess implements Action {
  readonly type = RISKLIBRARY_DETAIL_UPDATE_SUCCESS;
  constructor(public payload: RiskLibraryDetailInterface) {}
}

export class riskLibraryDetailUpdateFailure implements Action {
  readonly type = RISKLIBRARY_DETAIL_UPDATE_FAILURE;
  constructor(public payload: IFailure) {}
}

export class riskLibraryDetailDelete implements Action {
  readonly type = RISKLIBRARY_DETAIL_DELETE;
  constructor(public payload: RiskLibraryDetailInterface) {}
}


export const SUBMIT_RCSA_PUT = '[Submit Rcsa] START Fetch Submit Rcsa';

export class rcsaSubmitAction implements Action {
  readonly type = SUBMIT_RCSA_PUT;
  constructor(public payload: RiskLibraryPut) {}
}

export const GET_RCSA_BY_ID_FETCH_START   = '[Get Rcsa By Id]START Fetch Get Rcsa By Id';
export const GET_RCSA_BY_ID_FETCH_SUCCESS = '[Get Rcsa By Id]SUCCSES Fetch Get Rcsa By Id';
export const GET_RCSA_BY_ID_FETCH_FAILURE = '[Get Rcsa By Id]FAILURE Fetch Get Rcsa By Id';


  export class GetRcsaByIdFetchStart implements Action {
    readonly type = GET_RCSA_BY_ID_FETCH_START;
    constructor(public filter : number){}
  }

  export class GetRcsaByIdFetchSuccess implements Action {
    readonly type = GET_RCSA_BY_ID_FETCH_SUCCESS;
    constructor(public payload: GetRcsaByIdInterface[]) {}
  }

  export class GetRcsaByIdFetchFailure implements Action {
    readonly type = GET_RCSA_BY_ID_FETCH_FAILURE;
    constructor(public payload: IFailure) {}
  }

  export const RISK_REGISTER_FETCH_START   = '[Risk Register]START Fetch Risk Register';
  export const RISK_REGISTER_FETCH_SUCCESS = '[Risk Register]SUCCSES Fetch Risk Register';
  export const RISK_REGISTER_FETCH_FAILURE = '[Risk Register]FAILURE Fetch Risk Register';


  export class riskRegisterFetchStart implements Action {
    readonly type = RISK_REGISTER_FETCH_START;
    constructor(public page: number,public size : number){}
  }

  export class riskRegisterFetchSuccess implements Action {
    readonly type = RISK_REGISTER_FETCH_SUCCESS;
    constructor(
      public payload: GetRiskRegisterInterface[],
      public totalElement:number,
      public totalPages:number,
      public currentPage: number,
      public pageSize:number) {}
  }

  export class riskRegisterFetchFailure implements Action {
    readonly type = RISK_REGISTER_FETCH_FAILURE;
    constructor(public payload: IFailure) {}
  }


export type riskLibraryActions =
  | riskLibraryFetchStart
  | riskLibraryFetchSuccess
  | riskLibraryFetchFailure
  | riskLibraryCreateStart
  | riskLibraryCreateSuccess
  | riskLibraryCreateFailure
  | riskLibraryUpdateStart
  | riskLibraryUpdateSuccess
  | riskLibraryUpdateFailure
  | riskLibraryDetailFetchStart
  | riskLibraryDetailFetchSuccess
  | riskLibraryDetailFetchFailure
  | riskLibraryDetailCreateStart
  | riskLibraryDetailCreateSuccess
  | riskLibraryDetailCreateFailure
  | riskLibraryDetailUpdateStart
  | riskLibraryDetailUpdateSuccess
  | riskLibraryDetailUpdateFailure
  | riskLibraryDetailDelete
  | riskLibraryDelete
  | rcsaSubmitAction
  | GetRcsaByIdFetchStart
  | GetRcsaByIdFetchSuccess
  | GetRcsaByIdFetchFailure
  | riskRegisterFetchStart
  | riskRegisterFetchSuccess
  | riskRegisterFetchFailure
