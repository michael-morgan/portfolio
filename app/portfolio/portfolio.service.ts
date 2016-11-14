import { Injectable } from "@angular/core";
import { IPortfolioItem } from "./portfolio-item";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PortfolioService {

    private _portfolioDataUrl = '/portfolio';

    constructor(private _http: Http) { }

    getPortfolio(): Observable<IPortfolioItem[]> {
        return this._http.get(this._portfolioDataUrl)
            .map((response: Response) => <IPortfolioItem[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}
