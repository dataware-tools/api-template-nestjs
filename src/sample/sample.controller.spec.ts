import { Test, TestingModule } from "@nestjs/testing";
import { SampleController } from "./sample.controller";
import { SampleService } from "./sample.service";

describe("SampleController", () => {
  let sampleController: SampleController;

  beforeEach(async () => {
    const sample: TestingModule = await Test.createTestingModule({
      controllers: [SampleController],
      providers: [SampleService],
    }).compile();

    sampleController = sample.get<SampleController>(SampleController);
  });

  describe("root", () => {
    it('should return "This is sample"', () => {
      expect(sampleController.root()).toMatchObject({
        sample: "This is sample",
      });
    });
  });

  describe("key", () => {
    it('should return "This is sample"', () => {
      expect(sampleController.echo({ text: "test" })).toMatchObject({
        echo: "test",
      });
    });
  });
});
