export type RequestStatusTimelineItem = {
    time: string,
    
    title: string,
    description:string,
}

export const REQUEST_STATUS_TIMELINE_ITEMS: RequestStatusTimelineItem[] = [

  {
    time: "14:00",    
    title: "Đã hoàn thành",
    description: "Công việc sửa chữa đã được hoàn tất và nghiệm thu.",
    },
   
  {
    time: "11:45",
    
    title: "Đang xử lý",
    description: "Kỹ thuật viên đang trên đường đến địa điểm sửa chữa.",
    },
       {
    time: "10:30",    
    title: "Yêu cầu mới",
    description: "Khách hàng đã gửi yêu cầu về sửa chữa điện.",
  },
]