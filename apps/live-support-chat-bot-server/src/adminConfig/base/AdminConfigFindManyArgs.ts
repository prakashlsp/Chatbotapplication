/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdminConfigWhereInput } from "./AdminConfigWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AdminConfigOrderByInput } from "./AdminConfigOrderByInput";

@ArgsType()
class AdminConfigFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AdminConfigWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AdminConfigWhereInput, { nullable: true })
  @Type(() => AdminConfigWhereInput)
  where?: AdminConfigWhereInput;

  @ApiProperty({
    required: false,
    type: [AdminConfigOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AdminConfigOrderByInput], { nullable: true })
  @Type(() => AdminConfigOrderByInput)
  orderBy?: Array<AdminConfigOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AdminConfigFindManyArgs as AdminConfigFindManyArgs };
