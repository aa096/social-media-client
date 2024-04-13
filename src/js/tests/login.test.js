import { login } from "../api/auth/login.js";
import * as storage from "../storage/index.js";

jest.mock("../storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

global.fetch = jest.fn();

describe("Login", () => {
  beforeEach(() => {
    fetch.mockClear();
    storage.save.mockClear();
  });

  it("should store token to localStorage when provided with valid credentials", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({ accessToken: "testToken", name: "testName" }),
    });

    await login();

    expect(storage.save).toHaveBeenCalledTimes(2);
    expect(storage.save).toHaveBeenCalledWith("token", "testToken");
    expect(storage.save).toHaveBeenCalledWith("profile", { name: "testName" });
  });
});
