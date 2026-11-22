import SolutionDetail from "../../../components/SolutionDetail";
import { meta } from "../../../lib/site";

export const metadata = meta({
  title: "PLC, SCADA & Automation Services in Egypt",
  description:
    "PLC programming, SCADA, HMI and DCS integration, substation automation and safety systems by Sahara Group's in-house automation team, with Allen-Bradley and Schneider Electric equipment.",
  path: "/solutions/automation/",
});

export default function Page() {
  return (
    <SolutionDetail
      id="automation"
      title="PLC, SCADA and automation services"
      intro="Design, supply, integration and support of control systems for oil & gas, utilities and industry."
    />
  );
}
