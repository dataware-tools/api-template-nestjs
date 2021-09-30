import { Module } from "@nestjs/common";
import { SampleController } from "./sample.controller";
import { SampleService } from "./sample.service";

@Module({
  providers: [SampleService],
  controllers: [SampleController],
})
export class SampleModule {}
