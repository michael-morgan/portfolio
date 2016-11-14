"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var portfolio_service_1 = require("./portfolio.service");
var PortfolioComponent = (function () {
    function PortfolioComponent(_portfolioService) {
        this._portfolioService = _portfolioService;
        this.pageTitle = "Portfolio!";
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("In OnInit");
        this._portfolioService.getPortfolio()
            .subscribe(function (portfolio) { return _this.portfolioItems = portfolio; }, function (error) { return _this.errorMessage = error; });
    };
    PortfolioComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/portfolio/portfolio.component.html'
        }), 
        __metadata('design:paramtypes', [portfolio_service_1.PortfolioService])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map