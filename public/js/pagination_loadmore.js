// Biến dùng kiểm tra nếu đang gửi ajax thì ko thực hiện gửi thêm
var is_busy = false;
     
// Biến lưu trữ trang hiện tại
var page = 1;
 
// Số record trên mỗi trang
var record_per_page = 9;
 
// Biến lưu trữ rạng thái phân trang 
var stopped = false;
 
$(document).ready(function()
{
    // Khi kéo scroll thì xử lý
    $('#load_more').click(function()
    {
        // Element append nội dung
        $element = $('.wrap_content');
 
        // ELement hiển thị chữ loadding
        $button = $(this);
         
        // Nếu đang gửi ajax thì ngưng
        if (is_busy == true) {
            return false;
        }
         
        // Tăng số trang lên 1
        page++;
 
        // Hiển thị loadding ...
        $button.html('LOADING...');

        // biến điều kiện query
        where = $("#thisIDCate").val();

        // tổng số bản ghi
        total_page = $("#totalPost").val();

        if (page == total_page) {
            $button.remove();
        }

        if (page <= total_page) {
                $.ajax(
            {
                type: 'post',
                // dataType: 'json',
                url: 'modules/data_content.php',
                data: {
                    page: page,
                    where: where,
                },
                success: function(result)
                {
                    $element.append(result);
                }
            })
            .always(function()
            {
                // Sau khi thực hiện xong thì đổi giá trị cho button
                $button.html('Xem thêm');
                is_busy = false;
            });
        
        }
        
 
    });
});