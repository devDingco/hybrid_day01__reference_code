import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

type TheaderType = {
  [key: string]: {
    headerText: string;
  };
};

export const headerType = (params: Params): TheaderType => ({
  "/login": { headerText: "" },
  "/signup": { headerText: "회원가입" },
  "/solplace-logs/new": { headerText: "플레이스 등록" },
  "/solplace-logs": { headerText: "플레이스" },
  [`/solplace-logs/${params.solplaceLogId}`]: { headerText: "" },
});
