import { Container } from "inversify";

import TYPES from "./types";

import { RoomContract } from "interface/RoomContract";
import { UserContract } from "interface/UserContract";

import { Room } from "./Room";
import { UserTest } from "./UserTest";

const container = new Container();

export class App {

    constructor() {
        this.configDependencies();
        this.reservedRoomTest();
    }

    configDependencies() {
        container.bind<RoomContract>(TYPES.RoomContract).to(Room);
        container.bind<UserContract>(TYPES.UserContract).to(UserTest);
    }

    reservedRoomTest(): void {
        const user = container.get<UserContract>(TYPES.UserContract);

        const room = user.returnReserve();

        console.log(room);
    }

}

export default new App();