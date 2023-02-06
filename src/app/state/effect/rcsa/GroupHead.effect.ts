import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    GroupHeadCreateSuccess,
    GROUPHEAD_CREATED_START,
    GROUPHEAD_FETCH_START,
    GroupHeadFetchSuccess,
} from 'src/app/state/store/actions/rcsa/GroupHead.action';

import { map } from 'rxjs/operators';
import { IGroupHead } from 'src/app/models/rcsa/GroupHead/GroupHead.model';
import { GroupHeadService } from 'src/app/mock/services/GroupHead/GroupHead.service';

@Injectable()
export class GroupHeadEffect {
    constructor(private actions$: Actions, private GroupHeadService: GroupHeadService) { }

    @Effect()
    fecthGroupHead = this.actions$.pipe(
        ofType(GROUPHEAD_FETCH_START),
        map(() => {
            let data: IGroupHead[] = this.GroupHeadService.getGroupHead();
            return new GroupHeadFetchSuccess(data);
        })
    );

    @Effect()
    startCreated = this.actions$.pipe(
        ofType(GROUPHEAD_CREATED_START),
        map((data: any) => {
            let response: IGroupHead = data.payload;
            return new GroupHeadCreateSuccess(response);
        })
    );
}