export class GetUserByEmailGrpcRequestDto {
  email: string;
}

export class GetUserByEmailGrpcResponseDto extends GetUserByEmailGrpcRequestDto {
  id: number;
}
