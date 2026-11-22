import SolutionDetail from "../../../components/SolutionDetail";
import { meta } from "../../../lib/site";

export const metadata = meta({
  title: "Substation Testing & Commissioning in Egypt",
  description:
    "Protection relay, transformer, CT and circuit breaker testing, SF6 handling and substation commissioning with OMICRON and DILO equipment, by Sahara Group's power services team.",
  path: "/solutions/power/",
});

export default function Page() {
  return (
    <SolutionDetail
      id="power"
      title="Substation testing and commissioning"
      intro="Testing, commissioning and condition assessment of MV and HV assets in power stations, substations and industrial plants."
    />
  );
}
