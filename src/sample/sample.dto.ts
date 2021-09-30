import { IsNotEmpty } from "class-validator";

export class SampleDto {
  @IsNotEmpty()
  text: string;
}
