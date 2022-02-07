import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import MessageAsync from "@/components/MessageAsync";
import flushPromises from "flush-promises";

jest.mock("@/services/axios");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageAsync", () => {
  it("Llamar getMessage y debe mostrar un mensaje", async () => {
    const mockMessage = "Hola desde EDteam!";
    getMessage.mockResolvedValueOnce({ text: mockMessage });

    const wrapper = mount(MessageAsync);
    // esperar a que todas las promesas se resuelvan
    await flushPromises();

    expect(getMessage).toHaveBeenCalledTimes(1);
    const message = wrapper.find("#message").text();
    expect(message).toEqual(mockMessage);
  });

  it("Llamar getMessage y debe mostrar un error", async () => {
    const mockError = "Ha ocurrido un error";
    getMessage.mockRejectedValueOnce({ text: mockError });

    const wrapper = mount(MessageAsync);
    // esperar a que todas las promesas se resuelvan
    await flushPromises();

    expect(getMessage).toHaveBeenCalledTimes(1);
    const errorMessage = wrapper.find("#message-error").text();
    expect(errorMessage).toEqual(mockError);
  });
});
