import { Address } from './address'

export class Employee {

    constructor(
        public employeeId: number,
        public name: string,
        public address: Address[]
    ) { }

}
