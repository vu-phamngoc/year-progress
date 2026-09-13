package com.example.yearprogress;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    // Chỉ truyền "offset" (dịch cặp năm hiển thị khi bấm mũi tên lên/xuống).
    // Toàn bộ ngày/giờ thực tế và hiệu ứng sáng số được tính ở phía trình
    // duyệt (JavaScript) dựa trên đồng hồ thật của máy client, cập nhật
    // mỗi giây — nên không cần load lại trang mới thấy thay đổi.
    @GetMapping("/")
    public String index(@RequestParam(name = "offset", defaultValue = "0") int offset, Model model) {
        model.addAttribute("offset", offset);
        return "index";
    }
}
