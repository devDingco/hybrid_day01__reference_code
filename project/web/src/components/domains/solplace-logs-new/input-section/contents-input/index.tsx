import { ISolplaceLogsNewSchema } from "@/app/solplace-logs/new/schema";
import Textarea from "@/components/commons/textarea";

export default function SolplaceLogsNewTextarea() {
  return (
    <Textarea<ISolplaceLogsNewSchema>
      label="플레이스 내용"
      placeholder="플레이스 내용을 입력해 주세요. (1자 이상)"
      isRequired
      name="contents"
      textareaHeight="148px"
    />
  );
}
