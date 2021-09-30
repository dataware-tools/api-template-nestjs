import { Controller, Get, Query } from "@nestjs/common";
import { SampleService } from "./sample.service";
import { SampleDto } from "sample/sample.dto";

@Controller("sample")
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  root() {
    return { sample: this.sampleService.getSample() };
  }

  @Get("echo")
  echo(@Query() query: SampleDto) {
    return { echo: query.text };
  }
}
