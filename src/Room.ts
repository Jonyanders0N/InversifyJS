import "reflect-metadata";
import { injectable } from "inversify";

import { RoomContract } from "interface/RoomContract";

@injectable()
export class Room implements RoomContract {

    reserved(owner: string) {
        return `Reserved room for ${owner}`
    }

}