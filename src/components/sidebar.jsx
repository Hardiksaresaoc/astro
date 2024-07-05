import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

import { BsPersonRaisedHand } from "react-icons/bs";
import { TbPasswordFingerprint } from "react-icons/tb";
import {
  MdAddCircleOutline,
  MdDashboard,
  MdOutlineWorkHistory,
} from "react-icons/md";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className={styles.leftSection}>
        <a href="/admin">
          <p
            className={`${styles.link} ${
              pathname === "/admin" ? `${styles.active}` : ""
            }`}
          >
            <MdDashboard className={styles.icon} />
            Dashboard
          </p>
        </a>
        <a href="/admin/generatecode">
          <p
            className={`${styles.link} ${
              pathname === "/admin/generatecode" ? `${styles.active}` : ""
            }`}
          >
            <TbPasswordFingerprint className={styles.icon} />
            Generate Fundraiser
          </p>
        </a>
        <a href="/admin/fundraisers">
          <p
            className={`${styles.link} ${
              pathname === "/admin/fundraisers" ? `${styles.active}` : ""
            }`}
          >
            <BsPersonRaisedHand className={styles.icon} />
            All Fundraiser
          </p>
        </a>
        <a href="/admin/adddonation">
          <p
            className={`${styles.link} ${
              pathname === "/admin/adddonation" ? `${styles.active}` : ""
            }`}
          >
            <MdAddCircleOutline className={styles.icon} />
            Offline Donation
          </p>
        </a>
        <a href="/admin/donationHistory">
          <p
            className={`${styles.link} ${
              pathname === "/admin/donationHistory" ? `${styles.active}` : ""
            }`}
          >
            <MdOutlineWorkHistory className={styles.icon} />
            Donation History
          </p>
        </a>{" "}
        <a href="/admin/download-delete">
          <p
            className={`${styles.link} ${
              pathname === "/admin/download-delete" ? `${styles.active}` : ""
            }`}
          >
            <RiDeleteBin6Line className={styles.icon} />
            Download Delete
          </p>
        </a>
      </div>
    </>
  );
}
