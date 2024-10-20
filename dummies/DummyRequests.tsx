import { RepairRequest } from "../models/RepairRequest";

export const repairRequests: RepairRequest[] = [
  {
    name: "Sửa chữa ống nước",
    id: "a1b2-c3d4-e5f6-7890",
    status: 1, // 0: New request
    apartmentRoom: "201",
    requestedDate: "06/09/2024",
  },
  {
    name: "Thay bóng đèn",
    id: "f1e2-d3c4-b5a6-9870",
    status: 1, // 1: In progress
    apartmentRoom: "305",
    requestedDate: "15/09/2024",
  },
  {
    name: "Kiểm tra điện áp",
    id: "1234-5678-90ab-cdef",
    status: 2, // 2: Completed
    apartmentRoom: "502",
    requestedDate: "20/09/2024",
  },
  {
    name: "Sửa vòi nước",
    id: "abcd-ef12-3456-7890",
    status: 1, // 0: New request
    apartmentRoom: "1103",
    requestedDate: "03/10/2024",
  },
  {
    name: "Kiểm tra hệ thống điện",
    id: "0987-6543-21ab-cdef",
    status: 2, // 1: In progress
    apartmentRoom: "707",
    requestedDate: "10/10/2024",
  },
];
