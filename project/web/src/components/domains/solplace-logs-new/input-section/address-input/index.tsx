import { InputAddressWithLabel } from "@/components/commons/input";
import styles from "./styles.module.css";
import { ISolplaceLogsNewSchema } from "@/app/solplace-logs/new/schema";

export default function SolplaceLogsNewAddressInput() {
  return (
    <button className={styles.button}>
      <InputAddressWithLabel<ISolplaceLogsNewSchema>
        label="플레이스 주소"
        placeholder="플레이스 주소 입력"
        readOnly
        name="address.address"
      />
    </button>
  );
}