import { Test, TestingModule } from "@nestjs/testing";
import { SampleService } from "./sample.service";

describe("SampleService", () => {
  let service: SampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleService],
    }).compile();

    service = module.get<SampleService>(SampleService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should get sample string", () => {
    expect(service.getSample()).toBe("This is sample");
  });
});
