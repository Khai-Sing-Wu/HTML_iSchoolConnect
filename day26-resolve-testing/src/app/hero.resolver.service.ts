import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { HeroesService } from "./heroes.service";

@Injectable()
export class HeroResolverService implements Resolve<any>{
    constructor(private hs:HeroesService){}
    resolve() {
        return this.hs.getHeroes();
    }
}