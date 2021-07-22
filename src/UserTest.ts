import "reflect-metadata";
import { inject, injectable } from "inversify"

import TYPES from "./types";

import { RoomContract } from "interface/RoomContract";
import { UserContract } from "interface/UserContract";

@injectable()
export class UserTest implements UserContract {

    name: string;
    private _room: RoomContract;

    constructor(@inject(TYPES.RoomContract) room: RoomContract) {

        this._room = room;
        this.name = "Kécia Oliveira";

    }

    public returnReserve(): string {

        const reservedRoom = this._room.reserved(this.name);
        return reservedRoom;
    }

}