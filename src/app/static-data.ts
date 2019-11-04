export const listdata = [{
    id: 1,
    title: "Video Course 1 : Javascript",
    creationDDate: "12-Oct-2019",
    duration: "5hr",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
},
{
    id: 2,
    title: "Video Course 2 : C#",
    creationDDate: "11-Oct-2019",
    duration: "5hr",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
},
{
    id: 3,
    title: "Video Course 3 : Python",
    creationDDate: "11-Oct-2019",
    duration: "5hr",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
}]

export interface ListType {
    Id: Number;
    Title: string;
    CreationDDate: string;
    Duration: Date;
    Description: string;
}

export interface UserEntity {
    id: number;
    firstName: string;
    lastName: string

}