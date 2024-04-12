import { login } from "../auth/login.js";
import * as storage from "../../storage/index.js";

jest.mock("../../storage/index.js", () => ({
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
        Promise.resolve({ accessToken: "mockToken", name: "mockName" }),
    });

    await login("test@noroff.com", "testpassword");

    expect(storage.save).toHaveBeenCalledWith("token", "mockToken");
    expect(storage.save).toHaveBeenCalledWith("profile", { name: "mockName" });
  });
});
