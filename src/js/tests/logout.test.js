import * as storage from "../storage/index.js";
import { logout } from "../api/auth/logout.js";

jest.mock("../storage/index.js", () => ({
  remove: jest.fn(),
}));

describe("Logout", () => {
  beforeEach(() => {
    storage.remove.mockClear();
  });

  it("should remove token and profile from localStorage", () => {
    logout();

    expect(storage.remove).toHaveBeenCalledTimes(2);
    expect(storage.remove).toHaveBeenCalledWith("token");
    expect(storage.remove).toHaveBeenCalledWith("profile");
  });
});
