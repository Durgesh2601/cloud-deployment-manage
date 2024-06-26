import { Grid } from "@mui/material";
import { RenderGridHeader } from "../../../../HelperComponents";
import { commonGridStyles } from "../../../../../constants";
import EventsHistoryTable from "./HistoryTable";
import { useLayout } from "../../../../../context/LayoutContext";
import { EventType } from "../../../../../types";

const EventHistory = () => {
  const { eventHistory } = useLayout();
  return (
    <Grid
      item
      sx={{
        ...commonGridStyles,
        width: "49.5%",
        height: "100%",
      }}
      p={2}
    >
      <RenderGridHeader title={"Event History"} />
      <EventsHistoryTable data={eventHistory as EventType[]} />
    </Grid>
  );
};

export default EventHistory;
