using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Newtonsoft.Json;
using ZaloPay.Helper;
using ZaloPay.Helper.Crypto;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Galaxy_film_BE.DAL;
using System.Threading.Tasks;

namespace Galaxy_film_BE.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PaymentController : Controller
    {
        static string appid = "554";
        static string key1 = "8NdU5pG5R2spGHGhyO99HN1OhD8IQJBn";
        static string createOrderUrl = "https://sandbox.zalopay.com.vn/v001/tpe/createorder";
        static string queryOrderUrl = "https://sandbox.zalopay.com.vn/v001/tpe/getstatusbyapptransid";
        private string key2 = "uUfsWgfLkRLzq6W2uNXTCxrfxs51auny";

        [HttpPost]
        public async Task<Dictionary<string, object>> GetQRCode()
        {
            var transid = Guid.NewGuid().ToString();
            var embeddata = new { merchantinfo = "embeddata123" };
            var items = new[]{
                new { itemid = "knb", itemname = "kim nguyen bao", itemprice = 198400, itemquantity = 1 }
            };
            var param = new Dictionary<string, string>();

            param.Add("appid", appid);
            param.Add("appuser", "demo");
            param.Add("apptime", Utils.GetTimeStamp().ToString());
            param.Add("amount", "80000");
            param.Add("apptransid", DateTime.Now.ToString("yyMMdd") + "_" + transid); // mã giao dich có định dạng yyMMdd_xxxx
            param.Add("embeddata", JsonConvert.SerializeObject(embeddata));
            param.Add("item", JsonConvert.SerializeObject(items));
            param.Add("description", "ZaloPay demo");
            param.Add("bankcode", "zalopayapp");

            var data = appid + "|" + param["apptransid"] + "|" + param["appuser"] + "|" + param["amount"] + "|"
                + param["apptime"] + "|" + param["embeddata"] + "|" + param["item"];
            param.Add("mac", HmacHelper.Compute(ZaloPayHMAC.HMACSHA256, key1, data));

            var result = await HttpHelper.PostFormAsync(createOrderUrl, param);


            return result;
        }

        [HttpPost]
        [Route("callback")]
        public IActionResult Callback([FromBody] DataPayment cbdata)
        {
            var result = new Dictionary<string, object>();

            try
            {
                var dataStr = cbdata.Data;
                var reqMac = cbdata.Mac;

                var mac = HmacHelper.Compute(ZaloPayHMAC.HMACSHA256, key2, dataStr);

                Console.WriteLine("mac = {0}", mac);

                // kiểm tra callback hợp lệ (đến từ ZaloPay server)
                if (!reqMac.Equals(mac))
                {
                    // callback không hợp lệ
                    result["returncode"] = -1;
                    result["returnmessage"] = "mac not equal";
                }
                else
                {
                    // thanh toán thành công
                    // merchant cập nhật trạng thái cho đơn hàng
                    var dataJson = JsonConvert.DeserializeObject<Dictionary<string, object>>(dataStr);
                    Console.WriteLine("update order's status = success where apptransid = {0}", dataJson["apptransid"]);

                    result["returncode"] = 1;
                    result["returnmessage"] = "success";
                }
            }
            catch (Exception ex)
            {
                result["returncode"] = 0; // ZaloPay server sẽ callback lại (tối đa 3 lần)
                result["returnmessage"] = ex.Message;
            }

            // thông báo kết quả cho ZaloPay server
            return Ok(result);
        }

        [HttpPost]
        [Route("CheckStatusTransaction")]
        public async Task<Dictionary<string, object>> ChectStatusTransaction()
        {
            var apptransid = "<apptransid>";

            var param = new Dictionary<string, string>();
            param.Add("appid", appid);
            param.Add("apptransid", apptransid);
            var data = appid + "|" + apptransid + "|" + key1;

            param.Add("mac", HmacHelper.Compute(ZaloPayHMAC.HMACSHA256, key1, data));

            var result = await HttpHelper.PostFormAsync(queryOrderUrl, param);

            return result;
        }
    }
    
}
