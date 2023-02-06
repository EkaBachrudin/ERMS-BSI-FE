import { Injectable } from "@angular/core";
import { TopRiskMock } from "../../data/TopRisk/TopRisk.mock";

@Injectable({
    providedIn: "root"
})

export class TopRiskServices {
    public getTopRisk() {
        return TopRiskMock;
    }
}