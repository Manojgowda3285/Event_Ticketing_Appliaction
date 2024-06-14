import { Stack } from "@mui/material";
import SectionTitle from "../../components/section-title";
import styles from "./Tickets.module.css";
import TicketInfo from "../../components/ticket-info";

const Tickets = () => {
  return (
    <div className={styles["tickets_container"]}>
      <div className="container">
        <Stack
          spacing={3}
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <SectionTitle header={"Tickets"} />

          <Stack spacing={3} width="100%" className={styles["tickets"]}>
            <TicketInfo
              ticket_name="Free Ticket"
              price="FREE"
              description="This is a ticket description. This is a free ticket. This ticket is uncategorised."
            />
            <TicketInfo
              ticket_name="Paid Ticket"
              price="₹1,000"
              description="This is a ticket description. This is a paid ticket. This ticket is uncategorised."
            />
            <TicketInfo
              ticket_name="Donation Ticket"
              price="Min ₹10 - 
Max ₹1,000"
              description="This is a ticket description. This is a donation ticket. This ticket is uncategorised."
            />
            <TicketInfo
              ticket_name="Ticket With Coupon"
              price="₹1,000"
              description="This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off."
            />
            <TicketInfo
              ticket_name="Paid Ticket in Category2"
              price="₹1,000"
              description="This is a ticket description. This is a paid ticket. This ticket is categorised."
            />
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Tickets;
