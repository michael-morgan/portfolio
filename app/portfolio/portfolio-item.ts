import { IPortfolioItemSection } from "./portfolio-item-section";

export interface IPortfolioItem {
    name: string;
    description: string;
    bannerUrl: string;
    sections: IPortfolioItemSection[];
}