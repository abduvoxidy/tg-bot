import { useMutation } from "react-query";
import { requestAuth } from "./http-client";

const authService = {
  sendMessage: (data) => requestAuth.post("/send-message", data),
};

export const useSendMessageMutation = (mutationSettings) => {
  return useMutation((data) => authService.sendMessage(data), mutationSettings);
};
