import { Stack } from "@mui/material"
import styles from "./TicketInfo.module.css"
import { LocationOn } from "@mui/icons-material"


const TicketInfo = ({description ,price , ticket_name , }) => {
  return (
    <Stack spacing={2} width="100%" className={styles["ticket-card"]}>
              <p className={styles["ticket-name"]}>{ticket_name}</p>
              <p className={styles["descript"]}>
                {description}
              </p>
              <a
                style={{ fontSize: "13px", color: "#0d6efd"}}
                href="https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India"
              >
                <Stack direction="row" gap={0.3} alignItems="center">
                  <LocationOn />{" "}
                  <p>
                    KonfHub Technologies, Nagavarapalya, C V Raman Nagar,
                    Bengaluru, Karnataka, India
                  </p>
                </Stack>
              </a>
              <p className={styles["details"]}>
                This is additional venue details.
              </p>
              <div>
                <p className={styles["availibility"]}>
                  Available Till: 31st Aug 2034, 06:00 PM IST{" "}
                </p>
              </div>
              <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
                <p className={styles["ticket-price"]}>{price}</p>
                <a
                  href="/checkout/konfhub-frontend-evaluation-task?ticketId=99858"
                 
                >
                  <div className={styles["register-btn"]}>
                    <span >Register</span>
                  </div>
                </a>
              </Stack>
            </Stack>
  )
}

export default TicketInfo