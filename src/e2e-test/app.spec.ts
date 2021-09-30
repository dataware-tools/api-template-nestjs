import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import request from "supertest";
import { AppModule } from "../app.module";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/sample (GET)", async () => {
    return await request(app.getHttpServer())
      .get("/sample")
      .expect(200)
      .expect({ sample: "This is sample" });
  });

  it("/sample/test (GET)", async () => {
    return await request(app.getHttpServer())
      .get("/sample/echo?text=test")
      .expect(200)
      .expect({ echo: "test" });
  });
});
