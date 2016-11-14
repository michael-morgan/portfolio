import { Component } from "@angular/core";
import { IPortfolioItem } from "./portfolio-item";
import { PortfolioService } from "./portfolio.service";

@Component({
    moduleId: module.id,
    templateUrl: 'portfolio.component.html',
    providers: [ PortfolioService ]
})
export class PortfolioComponent {
    pageTitle: string = "Portfolio!";
    portfolioItems: IPortfolioItem[];
    errorMessage: string;

    constructor(private _portfolioService: PortfolioService) { }

    ngOnInit(): void {
        console.log("In OnInit");
        this._portfolioService.getPortfolio()
            .subscribe(portfolio => this.portfolioItems = portfolio,
                error => this.errorMessage = <any>error);
    }
}
