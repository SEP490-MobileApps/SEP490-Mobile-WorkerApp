import { RepairRequestStatus } from "@/models/RepairRequestStatus";
import Colors from "./Colors";
export const IN_PROGRESS = 1
export const COMPLETED = 2
export const repairRequestStatuses: RepairRequestStatus[] = [
    {
        key: IN_PROGRESS,
        value: "Đang thực hiện",
        color: Colors.ewmh.repairRequestStatus.inProgress,
        textColor: Colors.ewmh.repairRequestStatus.inProgressText
    },
    {
        key: COMPLETED,
        value: "Đã hoàn thành",
        color: Colors.ewmh.repairRequestStatus.completed,
        textColor: Colors.ewmh.repairRequestStatus.completedText
    }
]