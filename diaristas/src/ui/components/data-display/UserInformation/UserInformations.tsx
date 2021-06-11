import React from "react";
import {
  UserName,
  UserInformationContainer,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./styles";

// import { Container } from './styles';
interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}
const UserInformation: React.FC<UserInformationProps> = ({
  picture,
  name,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
