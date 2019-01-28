import {UserType} from '../user.type';

export interface UnsignedUserDto {
    sub: string;
    externalProfileId: string;
    displayName: string;
    userType: UserType;
}

export interface UserDto extends UnsignedUserDto {
    iat: number;
    exp: number;
}
