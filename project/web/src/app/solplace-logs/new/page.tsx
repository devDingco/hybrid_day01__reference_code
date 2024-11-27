import { ISolplaceLogsNewSchema, solplaceLogsNewSchema } from "./schema";
import { onClickSubmit } from "./hook";
import Form from "@/components/commons/form";
import SolplaceLogsNewAddImage from "@/components/domains/solplace-logs-new/add-image-section";
import SolplaceLogsNewInputSection from "@/components/domains/solplace-logs-new/input-section";
import SolplaceLogsNewLayoutFooter from "@/components/domains/solplace-logs-new/layout-footer";
import styles from "./styles.module.css";

export default async function SolplaceLogsNewPage() {
  return (
    <main>
      <Form<ISolplaceLogsNewSchema>
        schema={solplaceLogsNewSchema}
        defaultValue={{ address: { address: "서울특별시 중구 세종대로 110", lat: 37.5666, lng: 126.979 } }}
        onClickSubmit={onClickSubmit}
      >
        <div className={styles.container}>
          <SolplaceLogsNewAddImage />
          <SolplaceLogsNewInputSection />
          <SolplaceLogsNewLayoutFooter />
        </div>
      </Form>
    </main>
  );
}
