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
import { AdminConfigWhereUniqueInput } from "./AdminConfigWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteAdminConfigArgs {
  @ApiProperty({
    required: true,
    type: () => AdminConfigWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdminConfigWhereUniqueInput)
  @Field(() => AdminConfigWhereUniqueInput, { nullable: false })
  where!: AdminConfigWhereUniqueInput;
}

export { DeleteAdminConfigArgs as DeleteAdminConfigArgs };
